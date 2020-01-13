const express = require("express");
const bodyParser = require("body-parser");

const bot = require("./bot");
const api = require("./api");

const app = express();
const linebotParser = bot.parser();

app.get("/test", (req, res) => {
    res.send("bot test route ok");
});
// -------------------------------------------------------------
// 監聽 linebot 的 callback
app.post("/linewebhook", linebotParser);
// -------------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());

app.get("/product/list", api["getProductList"]);
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
module.exports = app;
