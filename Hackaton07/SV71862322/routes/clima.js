const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res) => {
  const ciudad = req.query.ciudad;
  
  if (!ciudad) {
    return res.status(400).json({ error: "Debes proporcionar una ciudad en el parámetro 'ciudad'." });
  }

  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://weather-api99.p.rapidapi.com/weather?city=${ciudad}`,
    headers: {
      "x-rapidapi-key": "da327f33bcmshb46436965c27ca2p15a9ffjsn1f4c8b52944f",
      "x-rapidapi-host": "weather-api99.p.rapidapi.com"
    }
  };

  try {
    const response = await axios.request(config);
    const temperatura = response.data.main.temp - 273; 
    res.json({
      ciudad,
      temperatura: temperatura.toFixed(2),
      mensaje: `El clima de la ciudad ${ciudad} es de ${temperatura.toFixed(2)}°C`
    });
  } catch (error) {
    res.status(404).json({ error: `No se pudo obtener el clima de la ciudad '${ciudad}'.` });
  }
});

module.exports = router;