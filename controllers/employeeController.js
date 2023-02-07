const Employee = require("../models/employeeModel");
const mongoose = require("mongoose");

// GET all Employee
const getEmployees = async (req, res) => {
  // const user_id = req.user._id;

  const employees = await Employee.find({}).sort({ createdAt: -1 });

  res.status(200).json(employees);
};

// GET a single Employee
const getEmployee = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Employee Not Found" });
  }

  const employee = await Employee.findById(id);

  if (!employee) {
    return res.status(404).json({ error: "Employee Not Found" });
  }

  res.status(200).json(employee);
};

// CREATE a new Employee
const createEmployee = async (req, res) => {
  const {
    employeename,
    designation,
    employeeemail,
    employeephone,
    employeeid,
  } = req.body;

  let emptyFields = [];

  if (!employeename) {
    emptyFields.push("employeename");
  }
  if (!designation) {
    emptyFields.push("designation");
  }
  if (!employeeemail) {
    emptyFields.push("employeeemail");
  }
  if (!employeephone) {
    emptyFields.push("employeephone");
  }
  if (!employeeid) {
    emptyFields.push("employeeid");
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
    const employee = await Employee.create({
      employeename,
      designation,
      employeeemail,
      employeephone,
      employeeid,
      // user_id,
    });
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({ mssg: "POST New Employee" });
};

// DELETE an Employee
const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Employee Not Found" });
  }

  const employee = await Employee.findOneAndDelete({ _id: id });

  if (!employee) {
    return res.status(400).json({ error: "Employee Not Found" });
  }

  res.status(200).json(employee);
};

// UPDATE an Employee
const updateEmployee = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Employee Not Found" });
  }

  const employee = await Employee.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!employee) {
    return res.status(400).json({ error: "Employee Not Found" });
  }

  res.status(200).json(employee);
};

module.exports = {
  getEmployee,
  getEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
};
