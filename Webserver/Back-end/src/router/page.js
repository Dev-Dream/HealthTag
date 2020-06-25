const _express = require("express");
const _session = require("express-session");
const _path = require("path");
const session_config = require("../important/session");

const router = _express.Router();
const front_path = _path.join(__dirname,"/../../../Front-end/pages");

router.use(_session(session_config.session));

router.get("/", (req, res) => {
    res.sendFile(front_path+"/index.html");
});

router.get("/head", (req, res) => {
    res.sendFile(front_path+"/head.html");
});

router.get("/neck", (req, res) => {
    res.sendFile(front_path+"/neck.html");
});

router.get("/chest", (req, res) => {
    res.sendFile(front_path+"/chest.html");
});

router.get("/arm", (req, res) => {
    res.sendFile(front_path+"/arm.html");
});

router.get("/leg", (req, res) => {
    res.sendFile(front_path+"/leg.html");
});

router.get("/stomach", (req, res) => {
    res.sendFile(front_path+"/stomach.html");
});

router.get("/about", (req, res) => {
    res.sendFile(front_path+"/about.html");
});

router.get("/getting_started", (req, res) => {
    res.sendFile(front_path+"/getting_started.html");
});

router.get("/how_to_contribute", (req, res) => {
    res.sendFile(front_path+"/how_to_contribute.html");
});

router.get("/info", (req, res) => {
    res.sendFile(front_path+"/info.html");
});

router.get("/issue", (req, res) => {
    res.sendFile(front_path+"/issue.html");
});

router.get("/admin", (req, res) => {
    if (req.session.isLoggedin) res.sendFile(front_path+"/admin.html");
    else res.sendFile(front_path+"/login.html");
});

module.exports = router;