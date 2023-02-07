require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const investorRoutes = require("./routes/investors");
const userRoutes = require("./routes/user");
const employeeRoutes = require("./routes/employees");

//express app
const app = express();
const cors = require("cors");
app.use(cors());

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/investors", investorRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/user", userRoutes);

// connect to db
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
