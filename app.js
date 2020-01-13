const express = require("express");
const bodyParser = require("body-parser");

const bot = require("./bot");

const app = express();
const linebotParser = bot.parser();

// -------------------------------------------------------------
// server 監聽及 callback
// -------------------------------------------------------------
app.get("/test", (req, res) => {
    res.send("bot test route ok");
});

app.post("/linewebhook", linebotParser);
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
module.exports = app;
