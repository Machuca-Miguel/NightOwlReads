import connection from "../config/db.js";

class achievementsController {
  //------------------------------------------------------
  //1.-Get all achievements
  //http://localhost:4000/api/achievements/
  getAllAchievements = async (req, res) => {
    const { query } = connection();
    const sqlAllAchievements = `SELECT * FROM achievements`;

    try {
      const allAchievements = await query(sqlAllAchievements);
      res.status(200).json(allAchievements);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  //------------------------------------------------------
  //2.-Get achievements by user ID

  getAchievementsByUserId = async (req, res) => {
    const user_id = req.params.user_id;
    const { query } = connection();
    const sqlUserAchievements = `SELECT a.id, a.name, a.category, a.description, ua.achieved_at AS achievedAt FROM achievements a LEFT JOIN user_achievements ua ON a.id = ua.achievement_id AND ua.user_id = ${user_id}`;

    try {
      const userAchievements = await query(sqlUserAchievements);
      res.status(200).json(userAchievements);
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}

export default new achievementsController();
