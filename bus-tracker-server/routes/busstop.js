const express = require('express');
const router = express.Router();
const { createBusstop, deleteBusstop, updateBusstop, fetchBusstops } = require('../controllers/BusstopController');

router.route('/create-stop').post(createBusstop);

router.route('/delete-stop').post(deleteBusstop);

router.route('/update-bus-stop').post(updateBusstop);

router.route('/fetch-all-stops').get(fetchBusstops);

module.exports = router;