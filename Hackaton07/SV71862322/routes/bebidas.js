const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "No se pudo obtener bebidas" });
  }
});

module.exports = router;