const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/personajes", async (req, res) => {
  try {
    const response = await axios.get("https://rickandmortyapi.com/api/character");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "No se pudo obtener los personajes" });
  }
});

module.exports = router;
