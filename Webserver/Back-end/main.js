const _express = require("express");

const app = _express(); 
const readRouter = require("./src/router/read");

app.use("/", readRouter);

app.listen(3000);