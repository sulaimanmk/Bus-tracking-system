const express = require('express');
const router = express.Router();
const { createBus, deleteBus, fetchBusById, fetchBuses, updateBusLocation } = require('../controllers/BusController');

router.route('/create').post(createBus);

router.route('/delete').post(deleteBus);

router.route('/fetch-all').post(fetchBuses);

router.route('/fetch-by-id').post(fetchBusById);

router.route('/update-bus-location').post(updateBusLocation);


module.exports = router;
