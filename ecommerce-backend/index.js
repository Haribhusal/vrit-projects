// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const orderRoutes = require("./routes/orderRoutes");
const cors = require("cors");

// Create Express app
const app = express();

// Middleware

app.use(bodyParser.json());

const allowedOrigins = [
  "http://localhost:5175",
  "http://localhost:5174",
  "http://localhost:5173",
  "http://localhost:5176",
];

const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://bhusalhari89:kGFbKwsShyWpqcGj@orders.fwqm1s7.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/orders", orderRoutes); // Mount the order routes under the /orders path
app.get("/", async (req, res) => {
  res.send("Hello");
});
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
