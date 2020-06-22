const _express = require("express");
const _mysql = require("mysql");

const router = _express.Router();

const db = _mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "mysql",
    database : "healthtag"
});
db.connect();

router.delete("/disease/:partName/:diseaseName", (req, res) => {
    var part = req.params.partName;
    var diseaseName = req.params.diseaseName;

    var find_disease_query = "SELECT COUNT(*) AS count FROM "+part+" WHERE name = \'"+diseaseName+"\'";
    var delete_disease_query = "DELETE FROM "+part+" WHERE name = \'"+diseaseName+"\'";

    db.query(find_disease_query, (err, find_disease) => {
        if (err) {
            throw err;
        }
        var count = find_disease[0].count;
        console.log(count);
        if (count === 0) {
            res.status(404).send("Not Found");
        }
        db.query(delete_disease_query, (err, delete_disease) => {
            if (err) {
                throw err;
            }
            res.send(delete_disease);
        });
    });
});

module.exports = router;