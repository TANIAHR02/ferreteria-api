const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.route('/')
  .get(productoController.getProductos)
  .post(productoController.crearProducto);

router.route('/:id')
  .get(productoController.getProductoById)
  .put(productoController.actualizarProducto)
  .patch(productoController.actualizarParcialProducto)
  .delete(productoController.eliminarProducto);

module.exports = router;