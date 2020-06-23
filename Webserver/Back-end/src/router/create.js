const _express = require("express");
const _mysql = require("mysql");
const _bodyParser = require("body-parser");
const _tag = require("../constant/tag.js");

const router = _express.Router();

const db = _mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "mysql",
    database : "healthtag"
});
db.connect();

router.use(_bodyParser.urlencoded( { extended: false } ));
router.use(_bodyParser.json());

router.put("/disease", (req, res) =>  {
    var post = req.body;

    var name = post.name;
    var description = post.description;
    var url = post.url;

    var find_disease_query = "SELECT COUNT(*) AS count FROM disease WHERE name = ?";
    var insert_disease_query = `INSERT INTO '${part}' VALUES (?, ?, ?)`
    var update_disease_query = `UPDATE disease SET description = ?, URL = ? WHERE name = ?`

    db.query(find_disease_query, [name], (err, find_disease) => {
        if (err) {
            throw err;
        }
        var count = find_disease[0].count;
        if (count === 1) {
            db.query(update_disease_query, [description, url, name], (err, update_disease) => {
                if (err) {
                    throw err;
                }
                res.send("okay : update");
            });
        }
        else {
            db.query(insert_disease_query, [name, description, url], (err, insert_disease) => {
                if (err) {
                    throw err;
                }
                res.send("okay : insert");
            });
        }
    });
});

module.exports = router;