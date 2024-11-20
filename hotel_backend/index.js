const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const userRoute = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');

dotenv.config();
dbConnect();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json())
app.use(cookieParser())


app.use('/api/v1/user', userRoute)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
});