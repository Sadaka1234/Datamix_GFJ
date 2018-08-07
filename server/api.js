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


sequelize.sync()
    .then(() => console.log('Tables has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));



router.get('/graficos/getFechas/:ide', (req, res) =>{
    let query = "select DISTINCT Dia_Toma from Bus where Asset_Id = " + req.params.ide;
    sequelize.query(query,{ type: sequelize.QueryTypes.SELECT })
    .then(rows => { res.status(200).send(rows);
    });
});

router.get('/graficos/getDIds', (req, res) =>{
    sequelize.query("select DISTINCT Asset_id from Bus",{ type: sequelize.QueryTypes.SELECT })
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

router.get('/mandata/LetsGetParsing/:archidate', (req,res) => {
    let arch = "fms1-" + req.params.archidate + ".csv";
    CSVS.readCSV(arch);
    res.status(200).send(true);
});

router.get('/mandata/CheckDB/:date', (req,res) =>{
    infoBus.findAll({ 
        attributes : [[sequelize.fn('count', sequelize.col("Dia_Toma")),"Numero"]],
        where: { "Dia_Toma" : req.params.date } 
        })
    .then(rows => { res.status(200).send(rows);
    });
});

router.get('/graficos/getDataAll/:ide', (req, res) =>{
    infoBus.findAll({ where: { "Asset_Id" : req.params.ide } })
    .then(rows => { res.status(200).send(rows);
    });
});



module.exports = router;
