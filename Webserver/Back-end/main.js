const _express = require("express");

const app = _express(); 
const readRouter = require("./src/router/read"); 
const deleteRouter = require("./src/router/delete");
const createRouter = require("./src/router/create");

app.use("/", readRouter);
app.use("/", deleteRouter);
app.use("/", createRouter);

app.listen(3000);