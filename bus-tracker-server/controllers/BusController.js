const Bus = require('../models/Bus');
const Busstop = require('../models/Busstop');


/*
@desc    Fetch All Buses
@route   POST /api/buses/fetch-all
@access  Public
 */
exports.fetchBuses = async (req, res, next) => {
    const buses = await Bus.find();
    return res.status(200).json({
        success: true,
        message: 'Buses successfully retrieved',
        buses: buses
    });
}

/*
@desc    Fetch Specific bus
@route   POST /api/buses/fetch-by-id
@access  Public
 */
exports.fetchBusById = async (req, res, next) => {
    const { busId } = req.body;
    const bus = await Bus.findOne({ _id: busId });

    if (bus) {
        return res.status(200).json({
            success: true,
            message: 'Bus successfully retrieved',
            bus: bus
        });
    } else {
        return res.status(500).json({
            success: false,
            message: 'Bus not found',
        });
    };
}

/*
@desc    Delete Specific bus
@route   POST /api/buses/delete
@access  Public
 */
exports.deleteBus = async (req, res, next) => {
    const { busId } = req.body;

    await Bus.deleteOne({
        _id: busId
    }).then((data) => {
        return res.status(200).json({
            success: true,
            message: 'Bus successfully deleted from database',
        });
    }).catch((error) => {
        return res.status(500).json({
            success: false,
            message: 'An error occurred while deleting bus',
        });
    });
}

/*
@desc    Create New bus
@route   POST /api/buses/create
@access  Public
 */
exports.createBus = async (req, res, next) => {
    const { number, readableName, busLocation } = req.body;
    console.log(number, readableName);
    await Bus.create({
        number: number,
        readableName: readableName,
    }).then((bus) => {
        return res.status(200).json({
            success: true,
            message: 'Bus successfully created',
            bus: bus
        });
    }).catch(() => {
        return res.status(500).json({
            success: false,
            message: 'An error occurred while creating bus',
        });
    });
}

/* 
@desc update bus location
@route POST /api/buses/update
@access  Public
*/

exports.updateBusLocation = async (req, res, next) => {
    const { busId, busLocation, status } = req.body;
    const busStop = await Busstop.findOne({_id:busLocation});

    await Bus.findByIdAndUpdate(busId, {
        busLocation: busStop,
        status: status
    }).then((data) => {
        return res.status(200).json({
            success: true,
            message: 'location successfully updated ',
        });
    }).catch((error) => {
        return res.status(500).json({
            success: false,
            message: 'An error occurred while updating bus location',
        });
    });
}