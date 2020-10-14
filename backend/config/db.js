const mongoose = require('mongoose');

const connectDB = async () => {

    mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(conn => console.log(`MongoDB Connected: ${conn.connection.host}`))
    .catch(err => {
        console.log('Error: ', error.message);
        process.exit(1);
    });
}

module.exports = connectDB;