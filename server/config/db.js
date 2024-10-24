import { createConnection } from "mysql";
import dotenv from "dotenv";

dotenv.config();

// Function to create database connection and query function
const connectDB = () => {
  const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  // Connect to the database
  connection.connect((error) => {
    if (error) {
      console.error("Error connecting to the database:", error.message);
    } else {
      console.log("Connection successful");
    }
  });

  // Function to execute SQL queries
  const query = (sql, values) => {
    return new Promise((resolve, reject) => {
      connection.query(sql, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };

  return { connection, query };
};

export default connectDB;
