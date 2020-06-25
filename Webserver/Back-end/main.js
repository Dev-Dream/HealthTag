const _express = require("express");

const app = _express(); 
const readRouter = require("./src/router/read"); 
const deleteRouter = require("./src/router/delete");
const createRouter = require("./src/router/create");
const postRouter = require("./src/router/post");
const pageRouter = require("./src/page/page");

app.use("/", pageRouter);
app.use("/", readRouter);
app.use("/", deleteRouter);
app.use("/", createRouter);
app.use("/", postRouter);
app.use(_express.static("src/page/public"));

app.listen(3000);