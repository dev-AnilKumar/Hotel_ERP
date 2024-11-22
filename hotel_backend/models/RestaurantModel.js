import mongoose from 'mongoose'

const restaurentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["Restaurant", "Bar"],
        default: "Restaurant",
    },
    tables: {
        type: Number,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
        default: [],
    }],
    description: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
})
module.exports = mongoose.model('Restaurent', restaurentSchema)

