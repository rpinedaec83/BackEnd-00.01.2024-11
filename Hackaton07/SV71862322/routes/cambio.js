const express = require("express");
const axios = require("axios");

const router = express.Router();

// Ruta para obtener el tipo de cambio del dólar en Perú
router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://api.apis.net.pe/v1/tipo-cambio-sunat");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "No se pudo obtener el tipo de cambio" });
  }
});

module.exports = router;
