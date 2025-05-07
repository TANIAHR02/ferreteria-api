const express = require('express');
const cors = require('cors');
const productoRoutes = require('./routes/productoRoutes');
const sucursalRoutes = require('./routes/sucursalRoutes');

// Inicializar express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/productos', productoRoutes);
app.use('/sucursales', sucursalRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.json({ mensaje: 'API de Ferretería Ferremás funcionando correctamente' });
});

// Manejo de rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

module.exports = app;