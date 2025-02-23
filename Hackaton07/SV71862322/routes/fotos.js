const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/:tema", async (req, res) => {
  try {
    const { tema } = req.params;
    const response = await axios.get(`https://api.unsplash.com/search/photos?query=${tema}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron obtener las fotos" });
  }
});

module.exports = router;