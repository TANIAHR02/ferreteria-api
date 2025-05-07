const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'Por favor ingrese el nombre del producto'],
    trim: true
  },
  categoria: {
    type: String,
    required: [true, 'Por favor ingrese la categoría'],
    enum: ['herramientas', 'electricidad', 'fontanería', 'otros']
  },
  precio: {
    type: Number,
    required: [true, 'Por favor ingrese el precio'],
    min: 0
  },
  stock: {
    type: Number,
    required: [true, 'Por favor ingrese el stock disponible'],
    min: 0,
    default: 0
  },
  sucursales: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sucursal'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Producto', productoSchema);
