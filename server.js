// server.js

const express = require("express");
const { connectDB } = require("./src/database/DB_Connect");
const productRoutes = require("./src/routes/productRoutes");

const app = express();
app.use(express.json());
app.use("/products", productRoutes);

connectDB();

app.listen(8000, () => console.log("Server running on http://localhost:8000"));
