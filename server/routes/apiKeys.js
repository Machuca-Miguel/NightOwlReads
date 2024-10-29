import express from 'express';
const router = express.Router();

router.get('/nyt', (req, res) => {
  res.json({ apiKey: process.env.NYTBOOKS_API_KEY });
});

export default router;