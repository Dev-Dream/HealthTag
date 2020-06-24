const _express = require("express");
const _session = require("express-session");
const _tpl = require("../tpl/tpl.js");

const router = _express.Router();

router.get("/", (req, res) => {
    res.sendFile(__dirname+"/html/index.html");
});

router.get("/head", (req, res) => {
    res.sendFile(__dirname+"/html/head.html");
});

router.get("/admin", (req, res) => {
    res.sendFile(__dirname+"/html/admin.html");
});

module.exports = router;