const express = require('express');
const router = express.Router();

const sequelize = require('./config');
const path = require('path');
const FN = require('./files')

 //Testdeconexi ́on
sequelize.authenticate().then(() => {
console.log("Conexion establecida");
}).catch(err => {
console.error("No te puedes conectar: ", err);
});


const infoBus = sequelize.import('BUS', require("../models/BUS"));



router.get('/graficos/getFechas', (req, res) =>{
    sequelize.query("select DISTINCT DATE(horaToma) from Bus",{ type: sequelize.QueryTypes.SELECT })
    .then(rows => { res.status(200).send(rows);
    });
});

router.get('/graficos/getIds/:horaToma', (req, res) =>{
    let query = 'select distinct Asset_id from Bus where DATE(horaToma) = "' + req.params.horaToma + '"';
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

module.exports = router;
