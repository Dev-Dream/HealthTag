const _express = require("express");
const _session = require("express-session");
const session_config = require("../important/session");
const password = require("../important/password");
const _bodyParser = require("body-parser");

const router = _express.Router();

router.use(_session(session_config.session));
router.use(_bodyParser.urlencoded( { extended: false } ));
router.use(_bodyParser.json());

router.post("/admin", (req, res) => {
    var given_password = req.body.password;
    if (given_password === password.password) {
        req.session.isLoggedin = true;
    }
    res.redirect("/admin");
});

module.exports = router;