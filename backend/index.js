const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const connectDB = require("./config/connection");

const userRoutes = require("./routes/user.route");
const todoRoutes = require("./routes/todo.route");
const errorHandler = require("./utils/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http//localhost:5173",
    credentials: true,
  })
);

app.use("/auth", userRoutes);
app.use("/todo", todoRoutes);

app.get("/", (_, res) => {
  res.json("welcome to secure server");
});

// Error Handling Middleware
app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Server listening on port http://localhost:${PORT}`)
);
