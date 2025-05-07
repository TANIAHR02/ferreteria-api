const mongoose = require('mongoose');

const sucursalSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'Por favor ingrese el nombre de la sucursal'],
    trim: true,
    unique: true
  },
  direccion: {
    type: String,
    required: [true, 'Por favor ingrese la dirección'],
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Sucursal', sucursalSchema);