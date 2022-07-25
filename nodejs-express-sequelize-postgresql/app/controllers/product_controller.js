const pool = require("../config/db.config");

// Get All Users
const getAllProducts = (req, res, next) => { 
    pool.query("select * from produits order by id_produit asc", [], function (err, result) {
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

// Insert Product
const insertProduct = (req, res, next) => { 
    const nom_produit = req.body.nom_produit
    const prix_produit = req.body.prix_produit  
    pool.query("insert into produits (nom_produit, prix_produit) values ($1,$2)", [nom_produit,prix_produit], function (err, result) {
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
const deleteProduct = (req, res, next) => { 
    const id = req.body.id_produit
    pool.query("delete from produits where id_produit = $1", [id], function (err, result) {
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
const updateProduct = (req, res, next) => { 
    const id = req.body.id_produit
    const nom_produit = req.body.nom_produit
    const prix_produit = req.body.prix_produit 
    pool.query("update produits set nom_produit = $1, prix_produit = $2 where id_produit = $3", [nom_produit,prix_produit,id], function (err, result) {
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

module.exports = {getAllProducts, insertProduct, deleteProduct, updateProduct};