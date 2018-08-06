const express = require('express');
const router = express.Router();

const sequelize = require('./config');
const path = require('path');
const CSVS = require('./CSV');

 //Testdeconexi ́on
sequelize.authenticate().then(() => {
console.log("Conexion establecida");
}).catch(err => {
console.error("No te puedes conectar: ", err);
});


const infoBus = sequelize.import('BUS', require("../models/BUS"));
const infoUser = sequelize.import('User', require("../models/User"));

CSVS.getFiles();


sequelize.sync()
    .then(() => console.log('Tables has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));



router.get('/graficos/getFechas', (req, res) =>{
    sequelize.query("select DISTINCT DATE(horaToma) from Bus",{ type: sequelize.QueryTypes.SELECT })
    .then(rows => { res.status(200).send(rows);
    });
});

router.get('/graficos/getIds/:horaToma', (req, res) =>{
    let query = 'select distinct Asset_id from Bus where DATE(horaToma) = "' + req.params.horaToma + '" group by Asset_Id order by count(Asset_Id) desc';
    sequelize.query(query,{ type: sequelize.QueryTypes.SELECT })
    .then(rows => { res.status(200).send(rows);
    });
});

router.get('/graficos/getData/:horaToma/:idBus', (req, res) =>{
    console.log(req.params);
    let query = 'select * from Bus where DATE(horaToma) = "' + req.params.horaToma + '" and Asset_id = "' + req.params.idBus + '"';
    sequelize.query(query,{ type: sequelize.QueryTypes.SELECT })
    .then(rows => { res.status(200).send(rows);
    });
});

router.get('/mandata/getFechas', (req,res) => {
    res.status(200).send(CSVS.getFiles());
});

router.get('/mandata/CheckDB/:archi', (req,res) =>{
    
});



module.exports = router;
