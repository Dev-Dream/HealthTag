const _express = require("express");

const app = _express(); 
const readRouter = require("./src/router/read"); 
const deleteRouter = require("./src/router/delete");

app.use("/", readRouter);
app.use("/", deleteRouter);


app.listen(3000);