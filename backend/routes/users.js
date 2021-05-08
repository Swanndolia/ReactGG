const express = require("express");
const router = express.Router();

const usersCtrl = require("../controllers/users.js");

router.get("/getUser/:rg/:name", usersCtrl.getUser);
module.exports = router;
