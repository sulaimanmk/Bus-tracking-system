const Route = require('../models/Route');


/*
@desc    Fetch All Routes
@route   POST /api/routes/fetch-all
@access  Public
 */
exports.fetchRoutes = async (req, res, next) => {
    const routes = await Route.find();
    return res.status(200).json({
        success: true,
        message: 'Routes successfully retrieved',
        routes: routes
    });
}

/*
@desc    Fetch Specific route
@route   POST /api/routes/fetch-by-id
@access  Public
 */
exports.fetchRouteById = async (req, res, next) => {
    const { routeId } = req.body;
    const route = await Route.findOne({ _id: routeId });

    if (route) {
        return res.status(200).json({
            success: true,
            message: 'Route successfully retrieved',
            route: route
        });
    } else {
        return res.status(500).json({
            success: false,
            message: 'Route not found',
        });
    };
}

/*
@desc    Create New route
@route   POST /api/routes/create
@access  Public
 */
exports.createRoute = async (req, res, next) => {
    const { name, routeNumber, busStops } = req.body;

    await Route.create({
        name: name,
        routeNumber: routeNumber,
        busStops: busStops,
    }).then((route) => {
        return res.status(200).json({
            success: true,
            message: 'Route successfully created',
            route: route
        });
    }).catch(() => {
        return res.status(500).json({
            success: false,
            message: 'An error occurred while creating route',
        });
    });
}