const config = require("./_config");
const { log } = require("./_helpers");
const app = require("./app");

const port = config.port;

const server = app.listen(port, function () {
    log("app is running on port:", server.address().port);
});
