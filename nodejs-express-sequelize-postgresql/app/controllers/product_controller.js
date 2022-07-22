const pool = require("../config/db.config");

// Get All Users
const getAllProducts = (req, res, next) => { 
    pool.query("select * from produits", [], function (err, result) {
       if (err) {
        res.status(400).send(err);
    }
    if (Object.keys(result).length > 0) {
        res.status(200).send(result.rows);
    } else {
        res.status(200).send();
    }
});
};


module.exports = {getAllProducts};