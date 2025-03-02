const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const response = await axios.get(`https://api.github.com/users/${username}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "No se pudo obtener datos de GitHub" });
  }
});

module.exports = router;
