const mongoose = require("mongoose");
require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


app.get("/", (req, res) => {
  res.send("Backend server is running");
});

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});


app.post("/add-product", (req, res) => {
  const product = req.body;
  console.log("Received product:", product);

  res.json({
    message: "Product received successfully",
    product: product
  });
});
