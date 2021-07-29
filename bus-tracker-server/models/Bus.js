const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusSchema = new Schema({
    number: {type: Number, required: true},
    readableName: {type: String, required: true},
    routeId: {type: String, required: false},
    busLocation: {type: Schema.Types.Mixed, required: false},
    status: {type: String, default: 'Active'}
});


module.exports = Bus = mongoose.model('bus', BusSchema);