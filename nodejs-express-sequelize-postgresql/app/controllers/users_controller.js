const pool = require("../config/db.config");

// Get Count Users
const getCountUsers = (req, res, next) => { 
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
const getAllUsers = (req, res, next) => { 
    pool.query("select * from utilisateur order by id_utilisateur asc", [], function (err, result) {
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

// Get User
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

// Insert User
const insertUser = (req, res, next) => { 
    const username = req.body.username
    const password = req.body.password  
    const role = req.body.role 
    const fullname = req.body.fullname 
    pool.query("insert into utilisateur (username, password_user, role_user, fullname) values ($1,$2,$3,$4)", [username,password,role,fullname], function (err, result) {
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

// Delete User
const deleteUser = (req, res, next) => { 
    const id = req.body.id_utilisateur
    pool.query("delete from utilisateur where id_utilisateur = $1", [id], function (err, result) {
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

// Delete User
const updateUser = (req, res, next) => { 
    const username = req.body.username
    const password = req.body.password  
    const role = req.body.role 
    const fullname = req.body.fullname 
    const id_utilisateur = req.body.id_utilisateur
    pool.query("update utilisateur set username = $1, password_user = $2, role_user = $3, fullname = $4 where id_utilisateur = $5", [username,password,role,fullname,id_utilisateur], function (err, result) {
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

module.exports = {getCountUsers, getAllUsers, getUser, insertUser, deleteUser, updateUser};