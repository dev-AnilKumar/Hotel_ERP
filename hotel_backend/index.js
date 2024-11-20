const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const userRoute = require('./routes/userRoutes');
const roomRoute = require('./routes/roomRoutes');
const productRoute = require('./routes/productRoutes');
const cookieParser = require('cookie-parser');

dotenv.config();
dbConnect();

const PORT = process.env.PORT || 8000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json())

// for reading cookies
app.use(cookieParser())

// api routes
app.use('/api/v1/user', userRoute)
app.use('/api/v1/room', roomRoute)
app.use('/api/v1/product', productRoute)


app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
});