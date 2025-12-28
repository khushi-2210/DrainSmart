const express = require("express");
const router = express.Router();
const { getAlerts } = require("../controllers/alert.controller");
const { protect } = require("../middlewares/auth.middleware");
const { adminOnly } = require("../middlewares/role.middleware");

router.get("/", protect, adminOnly, getAlerts);

module.exports = router;
