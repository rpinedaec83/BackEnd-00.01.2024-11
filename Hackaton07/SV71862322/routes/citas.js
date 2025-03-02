const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://quotes.rest/qod");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron obtener citas" });
  }
});

module.exports = router;