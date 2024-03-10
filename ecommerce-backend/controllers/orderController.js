const express = require("express");
const router = express.Router();
const Order = require("../models/Orders");

// Create order
const createOrder = async (req, res) => {
  console.log("Order Creating");
  try {
    const { totalAmount, products } = req.body;
    const order = new Order({ totalAmount, products });
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// View all orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete order by ID
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(deletedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createOrder, getOrders, deleteOrder };
