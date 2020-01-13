const mysql = require("mysql");

const { config, log } = require("./helpers");
const { host, user, password, database } = config.mysql;

const connection = mysql.createConnection({
    host,
    user,
    password,
    database
});

function query_function(sql) {
    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, result) {
            if (err) {
                log(err);
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};

module.exports = {
    connection,
    query_function
}
