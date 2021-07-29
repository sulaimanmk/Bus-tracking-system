const Busstop = require('../models/Busstop');


/*
@desc    Create New busstop
@route   POST /api/busstops/create-stop
@access  Public
 */
exports.createBusstop = async (req, res, next) => {
    const { number, readableName } = req.body;
    console.log(number, readableName);
    await Busstop.create({
        number: number,
        readableName: readableName,

    }).then((busstop) => {
        return res.status(200).json({
            success: true,
            message: 'Busstop successfully created',
            busstop: busstop
        });
    }).catch(() => {
        return res.status(500).json({
            success: false,
            message: 'An error occurred while creating busstop',
        });
    });
}

/*
@desc    Delete Specific bus
@route   POST /api/busstops/delete-stop
@access  Public
 */
exports.deleteBusstop = async (req, res, next) => {
    const { number } = req.body;
    await Busstop.deleteOne({
        number: number
    }).then((data) => {
        return res.status(200).json({
            success: true,
            message: 'Busstop successfully deleted from database',
        });
    }).catch((error) => {
        return res.status(500).json({
            success: false,
            message: 'An error occurred while deleting busstop',
        });
    });
}

/*
@desc    Create New busstop
@route   POST /api/busstops/update-stop
@access  Public
 */

exports.updateBusstop = async (req, res, next) => {
    const { number, readableName } = req.body;
    console.log(number, readableName);
    await Busstop.findByIdAndUpdate(number, {
        readableName: readableName
    }).then((data) => {
        return res.status(200).json({
            success: true,
            message: 'Bus stop successfully updated ',
        });
    }).catch((error) => {
        return res.status(500).json({
            success: false,
            message: 'An error occurred while updating bus stop',
        });
    });
}

/*
@desc    Fetch All Busstops
@route   POST /api/busstops/fetch-all-stops
@access  Public
 */
exports.fetchBusstops = async (req, res, next) => {
    const busstops = await Busstop.find();
    return res.status(200).json({
        success: true,
        message: 'Busstops successfully retrieved',
        busstops: busstops
    });
}