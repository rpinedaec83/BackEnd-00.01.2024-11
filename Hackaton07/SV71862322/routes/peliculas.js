const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/top", async (req, res) => {
  try {
    const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=" + process.env.TMDB_API_KEY);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron obtener las películas" });
  }
});

module.exports = router;