const mongoose = require("mongoose");


const dbConnect = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Database error");
        console.log(error);
    }
}

module.exports = dbConnect;