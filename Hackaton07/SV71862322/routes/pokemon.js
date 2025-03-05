const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "No se pudo obtener la lista de Pokémon" });
  }
});

router.get("/:nombre", async (req, res) => {
  try {
    const { nombre } = req.params;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "No se pudo obtener datos del Pokémon" });
  }
});

module.exports = router;
