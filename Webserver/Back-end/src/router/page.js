const _express = require("express");
const _tpl = require("../tpl/tpl.js");

const router = _express.Router();

router.get("/", (req, res) => {
    res.send(_tpl.main);
});

router.get("/head", (req, res) => {
    res.send(_tpl.head);
});

router.get("/admin", (req, res) => {
    res.send(_tpl.admin);
});

module.exports = router;