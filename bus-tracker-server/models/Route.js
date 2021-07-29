const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RouteSchema = new Schema({
    name: {type: String, required: true},
    routeNumber: {type: Number , required: true},
    busStops: {type: String, required: true},
});


module.exports = Route = mongoose.model('route', RouteSchema);