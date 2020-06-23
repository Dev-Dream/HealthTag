const _express = require("express");

const app = _express(); 
const readRouter = require("./src/router/read"); 
const deleteRouter = require("./src/router/delete");
const createRouter = require("./src/router/create");
const pageRouter = require("./src/router/page");

app.use("/", pageRouter);
app.use("/", readRouter);
app.use("/", deleteRouter);
app.use("/", createRouter);
app.use(_express.static("src/html"));

app.listen(3000);