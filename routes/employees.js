const express = require("express");
const {
  getEmployee,
  getEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} = require("../controllers/employeeController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// Require Auth for all investor routes
router.use(requireAuth);

// GET all investors
router.get("/", getEmployees);

// GET Single Investor
router.get("/:id", getEmployee);

// POST a new Investor
router.post("/", createEmployee);

// DELETE an Investor
router.delete("/:id", deleteEmployee);

//UPDATE an Investor
router.patch("/:id", updateEmployee);

module.exports = router;
