const Sucursal = require('../models/Sucursal');
const Producto = require('../models/Producto');

// Obtener todas las sucursales
exports.getSucursales = async (req, res) => {
  try {
    const sucursales = await Sucursal.find();
    res.status(200).json(sucursales);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// Crear una nueva sucursal
exports.crearSucursal = async (req, res) => {
  try {
    const sucursal = new Sucursal(req.body);
    await sucursal.save();
    
    res.status(201).json(sucursal);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// Obtener productos de una sucursal específica
exports.getProductosPorSucursal = async (req, res) => {
  try {
    const sucursal = await Sucursal.findById(req.params.id);
    
    if (!sucursal) {
      return res.status(404).json({ mensaje: 'Sucursal no encontrada' });
    }
    
    const productos = await Producto.find({ sucursales: req.params.id });
    
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};