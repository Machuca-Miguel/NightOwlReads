
import express from "express";
const router = express.Router();
import authController from '../controllers/authController.js';


//-----------------------------------------------------
//1.-Register
//http://localhost:4000/auth/register
router.post('/register', authController.register);

//-----------------------------------------------------
//2.-Login
//http://localhost:4000/auth/login
router.post('/login', authController.login);

export default router;