import mongoose from "mongoose";
import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success:true, data: products });
    } catch (error) {
        console.log("error in getting products", error.message);
        res.status(500).json({ success:false, message: "Server error" });
    }

};

export const createProduct = async (req,res) => {
    console.log("Creating product", req.body);
    const product = req.body;

    if(!product.name || !product.price || !product.description || !product.image || !product.targetGender || !product.ageGroup) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false, message: "Server error" });
    }

};

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const updatedProduct = req.body;

    try {
        const product = await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const deleteProduct = async (req, res) => {
    const  id  = req.params.id;

    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};