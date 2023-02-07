const Investor = require("../models/investorModel");
const mongoose = require("mongoose");

// GET all investors
const getInvestors = async (req, res) => {
  // const user_id = req.user._id;

  const investors = await Investor.find({}).sort({ createdAt: -1 });

  res.status(200).json(investors);
};

// GET a single investor
const getInvestor = async (req, res) => {
  // const { id } = req.params;

  const { email: email } = req.body;

  const investor = await Investor.find({ CustomerEmail: email });

  if (!investor) {
    return res.status(404).json({ error: "Investor Not Found" });
  }

  res.status(200).json(investor);
};

// CREATE a new investor
const createInvestor = async (req, res) => {
  const {
    title,
    InvestorID,
    CustomerName,
    TotalInvestment,
    Status,
    Valuation,
    TotalDivPaid,
    ProfitLoss,
    RtnCAGR,
    DivRein,
    CustomerEmail,
  } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!InvestorID) {
    emptyFields.push("InvestorID");
  }
  if (!CustomerName) {
    emptyFields.push("CustomerName");
  }
  if (!TotalInvestment) {
    emptyFields.push("TotalInvestment");
  }
  if (!Status) {
    emptyFields.push("Status");
  }
  if (!Valuation) {
    emptyFields.push("Valuation");
  }
  if (!TotalDivPaid) {
    emptyFields.push("TotalDivPaid");
  }
  if (!ProfitLoss) {
    emptyFields.push("ProfitLoss");
  }
  if (!RtnCAGR) {
    emptyFields.push("RtnCAGR");
  }
  if (!DivRein) {
    emptyFields.push("DivRein");
  }
  if (!CustomerEmail) {
    emptyFields.push("CustomerEmail");
  }
  // Empty Field Syntax
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // ADD DOC to DB
  try {
    // const user_id = req.user._id;
    const investor = await Investor.create({
      title,
      InvestorID,
      CustomerName,
      TotalInvestment,
      Status,
      Valuation,
      TotalDivPaid,
      ProfitLoss,
      RtnCAGR,
      DivRein,
      CustomerEmail,
      // user_id,
    });
    res.status(200).json(investor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({ mssg: "POST New Investor" });
};

// DELETE an investor
const deleteInvestor = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Investor Not Found" });
  }

  let investor;
  if (role == "admin") {
    investor = await Investor.findOneAndDelete({ _id: id });
  }

  if (!investor) {
    return res.status(400).json({ error: "Investor Not Found" });
  }

  res.status(200).json(investor);
};

// UPDATE an investor
const updateInvestor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Investor Not Found" });
  }

  const investor = await Investor.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!investor) {
    return res.status(400).json({ error: "Investor Not Found" });
  }

  res.status(200).json(investor);
};

module.exports = {
  getInvestor,
  getInvestors,
  createInvestor,
  deleteInvestor,
  updateInvestor,
};
