const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusstopSchema = new Schema({
    number: {type: Number, required: true},
    readableName: {type: String, required: true},
    
});

module.exports = Busstop = mongoose.model('busstop', BusstopSchema);