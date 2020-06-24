const _express = require("express");
const _mysql = require("mysql");
const _db = require("../db/db.js");
const _tag = require("../constant/tag.js");

const router = _express.Router();

const db = _mysql.createConnection(_db.local);
db.connect();

router.delete("/disease/:diseaseName", (req, res) => {
    var diseaseName = req.params.diseaseName;

    var queryList = [];
    var dbList = ["diseases", "head", "neck", "chest", "arm", "stomach", "leg"];

    var i = 0;
    while (i < 7) {
        queryList.push(`DELETE FROM ${dbList[i]} WHERE name = '${diseaseName}'`);
        i = i + 1;
    }
    
    db.query(queryList[0], (err, res0) => {
        if (err) throw err;
        db.query(queryList[1], (err, res1) => {
            if (err) throw err;
            db.query(queryList[2], (err, res2) => {
                if (err) throw err;
                db.query(queryList[3], (err, res3) => {
                    if (err) throw err;
                    db.query(queryList[4], (err, res4) => {
                        if (err) throw err;
                        db.query(queryList[5], (err, res5) => {
                            if (err) throw err;
                            db.query(queryList[6], (err, res6) => {
                                if (err) throw err;
                                res.send("delete complete");
                            });
                        }); 
                    });
                });
            });
        });
    });
});

router.delete("/disease/:diseaseName/:partName", (req, res) => {
    var name = req.params.diseaseName;
    var part = req.params.partName;


    if (!_tag.is_available_part(part)) res.status(404).send(`${part} is an unavailable part. Available parts are head, neck, arm, leg, chest, and stomach.`);
    else {
        var delete_tag_query = `DELETE FROM ${part} WHERE name = ?`;
        db.query(delete_tag_query, [name], (err, deltete_tag) => {
            if (err) throw err;
            res.send("delete complete");
        });
    }
});

module.exports = router;