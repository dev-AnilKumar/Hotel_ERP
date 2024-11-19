const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');

dotenv.config();
dbConnect();

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
});