import { genSalt, hash as _hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from "../config/db.js";
const { query } = connectDB();

class AuthController {
  register = async (req, res) => {
    try {
      const { email, password } = req.body;

      const salt = await genSalt(10);
      const hash = await _hash(password, salt);

      const sql = `INSERT INTO users (email, password_hash) VALUES ( ?, ?)`;
      const values = [email, hash];

      await query(sql, values);

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  login = async (req, res) => {
    try {
      const { email, password } = req.body;

      const [user] = await query(`SELECT * FROM users WHERE email = ?`, email);

      if (!user) {
        return res
          .status(401)
          .json({ error: "Incorrect email or user not registered" });
      }
      const { id, password_hash: hash, is_deleted } = user;

      if (is_deleted) {
        return res.status(401).json({ error: "User account is deleted" });
      }
      if (!hash) {
        return res.status(500).json({ error: "User data is corrupted" });
      }

      const match = await compare(password, hash);

      if (match) {
        const token = jwt.sign( {id} , process.env.SECRET, {
          expiresIn: "30d",
        });
        res.status(200).json({ token, id });
      } else {
        res.status(401).json({ error: "Incorrect password" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
}

export default new AuthController();
