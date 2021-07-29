const Bus = require('../models/Bus');
const Busstop = require('../models/Busstop');
const Route = require('../models/Route');
const User = require('../models/User');

/*
@desc    Create New User
@route   POST /api/users/register
@access  Public
 */
exports.createUser = async (req, res, next) => {
    const { username, password, busNumber } = req.body;

    await User.create({
        username: username,
        password: password,
        busNumber: busNumber,
    }).then((user) => {
        return res.status(200).json({
            success: true,
            message: 'User successfully created',
            user: user
        });
    }).catch(() => {
        return res.status(500).json({
            success: false,
            message: 'An error occurred while creating user',
        });
    });
}

/*
@desc    Create New User
@route   POST /api/users/login
@access  Public
 */
exports.authenticateUser = async (req, res, next) => {
    const { username, password } = req.body;

    if (username && password) {
        const user = await User.findOne({ username: username, password: password });

        if (user) {
            const bus = await Bus.findOne({number: user.busNumber});
            const route = bus ? await Route.findOne({ routeNumber: bus.number }) : { };
            const busStopIds = route.busStops ? route.busStops.replace(/\s/g, '').split(',') : [];
            const busStops  = await Busstop.find({ '_id': { $in: busStopIds } });
            const document = route._doc;

            return res.status(200).json({
                success: true,
                result: {
                    user: user,
                    bus: bus,
                    route: {
                        ...document,
                        stops: busStops
                    }
                }
            });
        } else {
            return res.status(401).json({
                success: false,
                message: 'Incorrect login information',
            });
        };
    } else {
        return res.status(500).json({
            success: false,
            message: 'Provide username and password',
        });
    };
}