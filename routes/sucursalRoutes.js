const express = require('express');
const router = express.Router();
const sucursalController = require('../controllers/sucursalController');

router.route('/')
  .get(sucursalController.getSucursales)
  .post(sucursalController.crearSucursal);

router.route('/:id/productos')
  .get(sucursalController.getProductosPorSucursal);

module.exports = router;