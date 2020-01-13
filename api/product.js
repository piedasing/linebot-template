const { query_function } = require("../mysql");

const productAPI = {
    getProductList: async function (req, res) {
        const sql = "SELECT * from products";
        const data = await query_function(sql);

        res.json({
            success: true,
            data,
            msg: ""
        });
    }
};

module.exports = productAPI;
