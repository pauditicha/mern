const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorMiddleware');
const colors = require('colors');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.listen(port, () => console.log(`App listening on port ${port}`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);
