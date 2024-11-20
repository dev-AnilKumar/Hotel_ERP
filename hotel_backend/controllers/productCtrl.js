const ProductModel = require("../models/ProductModel");




const createProduct = async (req, res) => {
    try {
        const product = await ProductModel.create(req.body);
        res.json({ product, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.json({ products, success: true });
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await ProductModel.findById(id);
        if (product) {
            res.json({ product, success: true });
        } else {
            throw new Error("Product Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await ProductModel.findById(id);
        if (product) {
            const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body);
            res.json({ updatedProduct, success: true });
        } else {
            throw new Error("Product Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}


const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await ProductModel.findById(id);
        if (product) {
            await ProductModel.findByIdAndDelete(id);
            res.json({ msg: "Product Successfully Deleted", success: true });
        } else {
            throw new Error("Product Not Found");
        }
    } catch (error) {
        res.json({ msg: error.message, success: false });
    }
}

module.exports = { createProduct, getProductById, getProducts, updateProduct, deleteProduct }