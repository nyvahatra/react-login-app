const pool = require("../config/db.config");

// Get All Users
const getAllUsers = (req, res, next) => { 
    const username = req.body.username
    const password = req.body.password   
    pool.query("select count(*) from utilisateur where username = $1 and password_user = $2", [username, password], function (err, result) {
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

// Get All Users
const getUser = (req, res, next) => { 
    const username = req.body.username
    const password = req.body.password   
    pool.query("select * from utilisateur where username = $1 and password_user = $2", [username, password], function (err, result) {
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

module.exports = {getAllUsers, getUser};