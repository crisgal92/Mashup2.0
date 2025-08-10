const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/imagenes/:keyword', async (req, res) => {
    try {
        const keyword = req.params.keyword;
        const apiKey = 'ZVQjA78iR-SaInDjJraicOVb3J2Kzz8CbX2GH3aG_4k'; // Reemplaza con tu Access Key real
        const respuesta = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: {
                query: keyword,
                client_id: apiKey,
                per_page: 10
            }
        });
        res.json(respuesta.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener imágenes', details: error.message });
    }
});

app.get('/api/clima/:ciudad', async (req, res) => {
    const ciudad = req.params.ciudad;
    const apiKey = 'ff00a668f1803d1fdea345cab7034772'; 
    try {
        const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`);
        res.json(respuesta.data);
    } catch (error) {
        res.status(error.response.status).json({ message: error.message });
    }
});

app.listen(5000, () => console.log('Servidor en puerto 5000'));




   const PORT = process.env.PORT || 5000;
   app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));