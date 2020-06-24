const _express = require("express");
const _session = require("express-session");
const session_config = require("../important/session");

const router = _express.Router();

router.use(_session(session_config.session));

router.get("/", (req, res) => {
    res.sendFile(__dirname+"/html/index.html");
});

router.get("/head", (req, res) => {
    res.sendFile(__dirname+"/html/head.html");
});

router.get("/admin", (req, res) => {
    if (req.session.isLogined) res.sendFile(__dirname+"/html/admin.html");
    else res.sendFile(__dirname+"/html/login.html");
});

module.exports = router;