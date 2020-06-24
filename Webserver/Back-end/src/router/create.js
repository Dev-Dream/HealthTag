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

    var find_disease_query = "SELECT COUNT(*) AS count FROM diseases WHERE name = ?";
    var insert_disease_query = `INSERT INTO '${part}' VALUES (?, ?, ?)`
    var update_disease_query = `UPDATE diseases SET description = ?, URL = ? WHERE name = ?`

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

router.put("/disease/:diseaseName", (req, res) => {
    var post = req.body;

    var name = req.params.diseaseName;
    var part = post.partName;
    var tag = post.tag;

    var find_disease_query = "SELECT COUNT(*) AS count FROM diseases WHERE name = ?";
    if (!_tag.is_available_part(part)) {
        res.status(404).send(`${part} is an unavailable part. Available parts are head, neck, arm, leg, chest, and stomach.`);
    }
    else if (_tag.is_available_tag(part, tag) != true) {
        res.status(404).send(`${_tag.is_available_tag(part, tag)} is an unavailable tag. Available tags in ${part} are ${_tag.tag_string(part)}`);
    }
    else {
        db.query(find_disease_query, [name], (err, find_disease) => {
            if (err) throw err;
            var count = find_disease[0].count;
            if (count === 0) res.status(404).send(`There's no disease of such name in DB: ${name}`);
            else {
                var find_tag_query = `SELECT COUNT(*) AS count FROM ${part} WHERE name = ?`
                db.query(find_tag_query, [name], (err, find_tag) => {
                    if (err) throw err;
                    var count = find_tag[0].count;
                    if (count === 0) {
                        var insert_tag_query = `INSERT INTO ${part} VALUES (?, ?)`
                        db.query(insert_tag_query, [name, tag], (err, insert_tag) => {
                            if (err) throw err;
                            res.send("okay : insert");
                        });
                    }
                    else {
                        var update_tag_query = `UPDATE ${part} SET tag = ? WHERE name = ?`
                        db.query(update_tag_query, [tag, name], (err, update_tag) => {
                            if (err) throw err;
                            res.send("okay : update");
                        });
                    }
                });
            }
        });
    }
});

module.exports = router;