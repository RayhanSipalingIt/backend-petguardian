const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const petRoutes = require("./routes/petRoutes");
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();

const app = express();

app.use(express.json());
app.use(errorHandler);
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/pets", petRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;