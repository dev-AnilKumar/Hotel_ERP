const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcryptjs')

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    refreshToken: {},
    address: {
        type: String,
    },
    cart: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
        quantity: {
            type: Number,
            default: 1,
        }
    }]

}, {
    timestamps: true
});

userSchema.pre("save", async (next) => {
    if (!this.isModified(password)) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})
//Export the model
module.exports = mongoose.model('User', userSchema);


