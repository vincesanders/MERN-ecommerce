const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users.js');
const products = require('./data/products.js');
const User = require('./models/userModel');
const Product = require('./models/productModel');
const Order = require('./models/orderModel');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map(product => {
            return {...product, user: adminUser}
        });

        await Product.insertMany(sampleProducts);

        console.log('Data Imported!');
        process.exit()
    } catch (err) {
        console.error(`${error}`);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed!');
        process.exit()
    } catch (err) {
        console.error(`${error}`);
        process.exit(1);
    }
}

//if we call "node backend/seeder -d" we want to destroy data
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}