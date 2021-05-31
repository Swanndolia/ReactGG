const express = require("express");
const router = express.Router();

const usersCtrl = require("../controllers/users.js");

router.get("/getUser/:rg/:name", usersCtrl.getUser);
router.get("/getUserLeague/:rg/:esid", usersCtrl.getUserLeague);
router.get("/getUserHistory/:wrg/:puuid", usersCtrl.getUserHistory);

module.exports = router;
 