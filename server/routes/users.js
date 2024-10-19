import express from "express";
const router = express.Router();
import userControllers from "../controllers/userControllers.js";


//------------------------------------------------------
//1.-Get all data from user 
//http://localhost:4000/api/user/:user_id  
router.get("/:user_id", userControllers.getUser);

//------------------------------------------------------
//2.-Edit user data
//http://localhost:4000/api/user/edit/:user_id  
router.post("/:user_id/edit", userControllers.editUser);


//------------------------------------------------------
//3.-Delete user
//http://localhost:4000/api/user/delete/:user_id
router.put("/:user_id/delete", userControllers.deleteUser);

//------------------------------------------------------
//4.-Get all data from user
//http://localhost:4000/api/user/all
router.get("/all", userControllers.getAllUsers);


export default router;