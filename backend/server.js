const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRouter = require('./routes/productRouter');
const { notFound, errorHandlerMiddleware } = require('./middleware/errorMiddleware');

dotenv.config();

connectDB();

const app = express();

app.use('/api/products', productRouter);

app.use(notFound);

app.use(errorHandlerMiddleware);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV

app.listen(5000, console.log(`Server running in ${ENV} mode on port ${PORT}`));