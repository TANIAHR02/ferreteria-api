const Producto = require('../models/Producto');

// Obtener todos los productos con filtros opcionales
exports.getProductos = async (req, res) => {
  try {
    const { categoria, precio_minimo, precio_maximo, stock_minimo, nombre, sucursal } = req.query;
    
    // Construir objeto de filtro dinámicamente
    const filtro = {};
    
    if (categoria) filtro.categoria = categoria;
    if (precio_minimo) filtro.precio = { $gte: parseFloat(precio_minimo) };
    if (precio_maximo) {
      filtro.precio = filtro.precio || {};
      filtro.precio.$lte = parseFloat(precio_maximo);
    }
    if (stock_minimo) filtro.stock = { $gte: parseInt(stock_minimo) };
    if (nombre) filtro.nombre = { $regex: nombre, $options: 'i' };
    if (sucursal) filtro.sucursales = sucursal;
    
    const productos = await Producto.find(filtro).populate('sucursales', 'nombre direccion');
    
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// Obtener un producto por ID
exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id).populate('sucursales', 'nombre direccion');
    
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// Crear un nuevo producto
exports.crearProducto = async (req, res) => {
  try {
    const producto = new Producto(req.body);
    await producto.save();
    
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// Actualizar completamente un producto
exports.actualizarProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// Actualizar parcialmente un producto
exports.actualizarParcialProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    
    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// Eliminar un producto
exports.eliminarProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    
    await Producto.findByIdAndDelete(req.params.id);
    
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};
