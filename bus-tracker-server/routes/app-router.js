const express = require('express');
const router = express.Router();
const busRouter = require('./bus');
const busstopRouter = require('./busstop');
const busRoutesRouter = require('./bus-route');
const authRouter = require('./Auth');

router.use('/buses', busRouter);
router.use('/busstops', busstopRouter);
router.use('/bus-routes', busRoutesRouter);
router.use('/users', authRouter);



module.exports = router;
