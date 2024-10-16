import connection from "../config/db.js";

class bookController {
  addBookToBookshelf = (req, res) => {
    const {
      to_read_date,
      is_read_date,
      wishlist_date,
      added_reading_date,
      title,
      genre,
      pages_number,
      publish_year,
      isbn,
      sinopsis,
      author_name,
      cover_img,
    } = req.body;

    const { user_id } = req.params;

    // Check if the author already exists in the "author" table
    const sqlCheckAuthor = `SELECT * FROM author WHERE author_name = "${author_name}"`;
    connection(sqlCheckAuthor, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Error checking author." });
      }

      if (results.length > 0) {
        // The author already exists in the "author" table
        const authorId = results[0].author_id;
        insertBook(authorId);
      } else {
        // The author does not exist in the "author" table, insert it and continue with the process.
        const sqlAuthor = `INSERT INTO author (author_name) VALUES ("${author_name}")`;
        connection(sqlAuthor, (error, results) => {
          if (error) {
            console.log(error);
            return res
              .status(500)
              .json({ message: "Error inserting the author." });
          }
          const authorId = results.insertId;
          insertBook(authorId);
        });
      }
    });

    function insertBook(authorId) {
      // Insert the book into the "book" table using the "authorId"
      const sqlBook = `INSERT INTO book (author_id, title, genre, pages_number, publish_year, isbn, sinopsis, cover_img) VALUES (${authorId}, "${title}", "${genre}", ${pages_number}, ${publish_year}, "${isbn}", "${sinopsis}", "${cover_img}")`;

      connection(sqlBook, (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Error inserting the book." });
        }

        const bookId = results.insertId;

        // Insert the information into the "user_book" table using the "bookId"
        if (
          to_read_date ||
          is_read_date ||
          wishlist_date ||
          added_reading_date
        ) {
          let category;
          let dateValue;

          if (to_read_date) {
            category = "to_read_date";
            dateValue = to_read_date;
          } else if (is_read_date) {
            category = "is_read_date";
            dateValue = is_read_date;
          } else if (wishlist_date) {
            category = "wishlist_date";
            dateValue = wishlist_date;
          } else if (added_reading_date) {
            category = "added_reading_date";
            dateValue = added_reading_date;
          }

          const sqlUserBook = `INSERT INTO user_book (user_id, book_id, ${category}) VALUES (${user_id}, ${bookId}, "${dateValue}")`;
          connection(sqlUserBook, (error, results) => {
            if (error) {
              console.log(error);
              return res
                .status(500)
                .json({ message: "Error inserting into user_book." });
            }

            console.log("Successful insertions.");
            return res.status(200).json({ message: "Successful insertions." });
          });
        } else {
          console.log("Successful insertions.");
          return res.status(200).json({ message: "Successful insertions." });
        }
      });
    }
  };

  getAllMyBookshelves = (req, res) => {
    const { user_id } = req.params;
    let sql = `SELECT book_id, title, 'Read_Bookshelf' AS category
    FROM book
    WHERE book_id IN (SELECT book_id FROM user_book WHERE user_id = ${user_id} AND is_read_date IS NOT NULL AND is_deleted = 0)
    
    UNION ALL
    
    SELECT book_id, title, 'To_Read_Bookshelf' AS category
    FROM book
    WHERE book_id IN (SELECT book_id FROM user_book WHERE user_id = ${user_id} AND to_read_date IS NOT NULL AND is_deleted = 0)
    
    UNION ALL
    
    SELECT book_id, title, 'Reading_Bookshelf' AS category
    FROM book
    WHERE book_id IN (SELECT book_id FROM user_book WHERE user_id = ${user_id} AND added_reading_date IS NOT NULL AND is_deleted = 0)
    
    UNION ALL
    
    SELECT book_id, title, 'Wish_Bookshelf' AS category
    FROM book
    WHERE book_id IN (SELECT book_id FROM user_book WHERE user_id = ${user_id} AND wishlist_date IS NOT NULL AND is_deleted = 0);
    ;`;

    connection(sql, (error, result) => {
      error ? res.status(500).json(error) : res.status(200).json(result);
    });
  };

  getOneBook = (req, res) => {
    const { book_id, user_id } = req.params;

    const sql = `SELECT user_book.*, user_book.cover_img AS user_cover_img, 
    book.title, book.genre, book.format, book.pages_number, book.publish_year, book.isbn, book.sinopsis, book.cover_img AS book_cover_img,
    author.author_name, book.author_id
FROM user_book
JOIN book ON user_book.book_id = book.book_id
JOIN author ON book.author_id = author.author_id
WHERE user_book.user_id = ${user_id}
AND book.book_id = ${book_id}
AND user_book.is_deleted = 0
AND book.is_deleted = 0;`;

    connection(sql, (err, result) => {
      err ? res.status(500).json(err) : res.status(200).json(result);
    });
  };
  updateBookInfo = (req, res) => {
    const { book_id, author_id, user_id } = req.params;

    let {
      author_name,
      comments,
      current_page,
      format,
      genre,
      is_read_date,
      mood,
      rating,
      sinopsis,
    } = JSON.parse(req.body.data);

    if (current_page === "") {
      current_page = 0;
    }
    if (rating === "") {
      rating = 0.0;
    }

    let sqlAuthor = `UPDATE author SET author_name = "${author_name}" WHERE author_id = ${author_id} `;

    let sqlBook = `UPDATE book SET genre = "${genre}", sinopsis = "${sinopsis}" WHERE book_id = ${book_id}`;

    let sqlUser_book = `UPDATE user_book SET comments = "${comments}",current_page = ${current_page},format = "${format}",is_read_date = "${is_read_date}",mood = "${mood}",rating = ${rating} WHERE user_id = ${user_id} AND book_id = ${book_id} `;

    let cover_img = "";

    if (req.file != undefined) {
      cover_img = req.file.filename;

      sqlUser_book = `UPDATE user_book SET comments = "${comments}",current_page = ${current_page},format = "${format}",is_read_date = "${is_read_date}",mood = "${mood}",rating = ${rating} , cover_img = "${cover_img}" WHERE user_id = ${user_id} AND book_id = ${book_id} `;
    }

    connection(sqlAuthor, (err) => {
      if (err) {
        return rollback(() => {
          throw err;
        });
      }

      connection(sqlBook, (err) => {
        if (err) {
          return rollback(() => {
            throw err;
          });
        }

        connection(sqlUser_book, (err) => {
          if (err) {
            return rollback(() => {
              throw err;
            });
          }

          // Si todas las consultas se ejecutan sin errores, se realiza el commit de la transacción
          commit((err) => {
            if (err) {
              return rollback(() => {
                throw err;
              });
            }
            console.log("Updated successfully");
          });
        });
      });
    });
  };

  deleteuserBookCover = (req, res) => {
    const { user_id, book_id } = req.params;

    let sql = ` UPDATE user_book SET cover_img = NULL WHERE book_id = ${book_id} AND user_id = ${user_id}; `;

    connection(sql, (err, result) => {
      err ? res.status(500).json(err) : res.status(200).json(result);
    });
  };
}

export default new bookController();
