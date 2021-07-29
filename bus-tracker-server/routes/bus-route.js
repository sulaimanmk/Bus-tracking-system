const express = require('express');
const router = express.Router();
const { createRoute, fetchRoutes,fetchRouteById } = require('../controllers/RouteController');

router.route('/create').post(createRoute);

router.route('/fetch-all').post(fetchRoutes);

router.route('/fetch-by-id').post(fetchRouteById);

module.exports = router;
