const mongoose = require('mongoose');

const dbConnection = async () => {
const dbConnectionURL = 'mongodb+srv://skabir:skabir12345@cluster0.mc1ab.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
await mongoose.connect(dbConnectionURL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(() => console.log('Connected to mongo'))
.catch((error) => {
console.log(error);
process.exit(1)
})
}

module.exports = dbConnection