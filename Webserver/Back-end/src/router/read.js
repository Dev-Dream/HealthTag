const _express = require("express");
const _mysql = require("mysql");
const _tag = require("../constant/tag.js");

const router = _express.Router();

const db = _mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "mysql",
    database : "healthtag"
});
db.connect();

router.get("/part/:partName/:tags", (req, res) => {
    var part = req.params.partName;
    var tags = req.params.tags.split("@").slice(1);
    var find_tag_query = "SELECT * FROM "+part+" JOIN diseases USING(name)";
    
    if (!_tag.is_available_part(part)) res.status(404).send(`${part} is an unavailable part. Available parts are head, neck, arm, leg, chest, and stomach.`);

    var i = 0;  
    if (tags.length != 0) {
        find_tag_query = find_tag_query + " WHERE tag LIKE \'\%"+tags[i]+"\%\'";
    }

    while (i < tags.length) {
        find_tag_query = find_tag_query + " AND tag LIKE \'\%"+tags[i]+"\%\'";
        i = i + 1;
    }
    

    var returnData = {list:[]};

    db.query(find_tag_query, (err, find_tag) => {
        if (err) {
            throw err;
        }
        var i = 0;
        while (i < find_tag.length) {
            var element = {name:"", tags:[], desc:"", url:""};
            element.name = find_tag[i].name;
            element.tags = find_tag[i].tag.split("#").slice(1);
            element.desc = find_tag[i].description;
            element.url = find_tag[i].URL;
            returnData.list.push(element);
            i = i + 1;
        }
        res.send(returnData);
    });
});

router.get("/part/:partName", (req, res) => {
    var part = req.params.partName;
    var find_tag_query = "SELECT * FROM "+part+" JOIN diseases USING(name)";

    if (!_tag.is_available_part(part)) res.status(404).send(`${part} is an unavailable part. Available parts are head, neck, arm, leg, chest, and stomach.`);

    var returnData = {list:[]};

    db.query(find_tag_query, (err, find_tag) => {
        if (err) {
            throw err;
        }

        var i = 0;
        while (i < find_tag.length) {
            var element = {name:"", tags:[], desc:"", url:""};
            element.name = find_tag[i].name;
            element.tags = find_tag[i].tag.split("#").slice(1);
            element.desc = find_tag[i].description;
            element.url = find_tag[i].URL;
            returnData.list.push(element);
            i = i + 1;
        }
        res.send(returnData);
    });
});

module.exports = router;