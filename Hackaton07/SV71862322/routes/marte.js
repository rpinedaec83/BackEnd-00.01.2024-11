const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NASA_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron obtener datos de Marte" });
  }
});

module.exports = router;