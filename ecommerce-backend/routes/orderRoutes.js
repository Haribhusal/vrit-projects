const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrders,
  deleteOrder,
} = require("../controllers/orderController");

// Route for creating a new order
router.post("/", createOrder);

// Route for getting all orders
router.get("/", getOrders);

// Route for deleting an order by ID
router.delete("/:orderId", deleteOrder);

module.exports = router;
