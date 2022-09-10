// external import
const express = require("express");
const cors = require("cors");

// internal import
const errorHandler = require("./middleware/errorHandler");
const productRouter = require("./routes/product.route");

// route
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// connection
app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

/* DB query */
app.use("/api/v1/product", productRouter);

app.use(errorHandler);

// export
module.exports = app;
