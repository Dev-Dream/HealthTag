const _express = require("express");
const _path = require("path");

const app = _express(); 
const readRouter = require("./src/router/read"); 
const deleteRouter = require("./src/router/delete");
const createRouter = require("./src/router/create");
const postRouter = require("./src/router/post");
const pageRouter = require("./src/router/page");

app.use("/", pageRouter);
app.use("/", readRouter);
app.use("/", deleteRouter);
app.use("/", createRouter);
app.use("/", postRouter);
app.use(_express.static(_path.join(__dirname, "/../Front-end/public")));

app.listen(3000);