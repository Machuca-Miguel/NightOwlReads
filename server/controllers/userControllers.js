import connection from "../config/db.js";

class userControllers {
  //------------------------------------------------------
  //1.-Get all data from user
  //http://localhost:4000/api/user/:user_id

  getUser = async (req, res) => {
    let id = req.params.user_id;

    console.log(id);
    

    let sqlUser = `SELECT * FROM users WHERE id = ${id}`;

    const { query } = connection();

    try {
      const resultUser = await query(sqlUser, [id]);
      if (resultUser.length === 0) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.status(200).json(resultUser[0]);
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  
  };
  //------------------------------------------------------
  //2.-Edit user data
  //http://localhost:4000/users/oneUser/userEdition/:user_id ;
  editUser = (req, res) => {
    const user_id = req.params.user_id;
    const { user_name, name, last_name, birth_year, biography } = req.body;

    let img = "";

    let sql = `UPDATE users SET user_name = "${user_name}", name = "${name}", last_name = "${last_name}", birth_year = ${birth_year}, biography ="${biography}" WHERE user_id = ${user_id}`;

    if (req.file != undefined) {
      img = req.file.filename;

      sql = `UPDATE users SET user_name = "${user_name}", name = "${name}", last_name = "${last_name}", birth_year = ${birth_year}, imageURL = "${img}" WHERE user_id = ${user_id}`;
    }

    connection(sql, (err, result) => {
      err
        ? res.status(400).json({ err })
        : res.status(200).json({ result, img });
    });
  };

  //------------------------------------------------------
  //3.-Delete user
  //http://localhost:4000/api/user/delete/:user_id
  deleteUser = (req, res) => {
    const user_id = req.params.user_id;
    let sql = `UPDATE  users SET is_deleted = 1 WHERE user_id = ${user_id}`;

    connection(sql, (err, result) => {
      err
        ? res.status(400).json({ err })
        : res.status(200).json({ result });
    });
  };

  //------------------------------------------------------
  //4.-Get all data from user
  //http://localhost:4000/api/user/all
  getAllUsers = (req, res) => {
    let sql = `SELECT * FROM users WHERE is_deleted = 0`;

    connection(sql, (err, result) => {
      err
        ? res.status(400).json({ err })
        : res.status(200).json({ result });
    });
  };  

 
}

export default new userControllers();
