const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    employeename: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    employeeemail: {
      type: String,
      required: true,
    },
    employeephone: {
      type: String,
      required: true,
    },
    employeeid: {
      type: Number,
      required: true,
    },
    // user_id: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
