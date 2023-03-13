const express = require("express");
const {
  getInvestor,
  getInvestors,
  createInvestor,
  deleteInvestor,
  updateInvestor,
} = require("../controllers/investorController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// Require Auth for all investor routes
router.use(requireAuth);

// GET all investors
router.get("/", getInvestors);

// GET Single Investor
// router.get("/:id", getInvestor);

router.get("/:email", getInvestor);

// POST a new Investor
router.post("/", createInvestor);

// DELETE an Investor
router.delete("/:id", deleteInvestor);

//UPDATE an Investor
router.patch("/:id", updateInvestor);

module.exports = router;
