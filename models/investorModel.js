const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const investorSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    InvestorID: {
      type: Number,
      required: true,
    },
    CustomerName: {
      type: String,
      required: true,
    },
    TotalInvestment: {
      type: Number,
      required: true,
    },
    Status: {
      type: String,
      required: true,
    },
    Valuation: {
      type: Number,
      required: true,
    },
    TotalDivPaid: {
      type: Number,
      required: true,
    },
    ProfitLoss: {
      type: Number,
      required: true,
    },
    RtnCAGR: {
      type: Number,
      required: true,
    },
    DivRein: {
      type: Number,
      required: true,
    },
    CustomerEmail: {
      type: String,
      required: true,
    },
    // user_id: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Investor", investorSchema);
