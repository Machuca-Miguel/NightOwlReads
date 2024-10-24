import express from "express";
const router = express.Router();
import achievementController from '../controllers/achievementsController.js';


// Get achievements by user ID
router.get('/user/:user_id', achievementController.getAchievementsByUserId);

export default router;