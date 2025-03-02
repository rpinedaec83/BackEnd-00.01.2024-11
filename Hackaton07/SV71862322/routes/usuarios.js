const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://randomuser.me/api/");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "No se pudo obtener datos del usuario" });
  }
});

module.exports = router;