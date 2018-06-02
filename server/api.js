const express = require('express');
const router = express.Router();

const sequelize = require('./config');
const path = require('path');

 //Testdeconexi ́on
sequelize.authenticate().then(() => {
console.log("Conexion establecida");
}).catch(err => {
console.error("No te puedes conectar: ", err);
});

const Entrada = sequelize.import('entrada', require("../models/entrada"));
const infoBus = sequelize.import('BUS', require("../models/BUS"));

router.get('/entradas', (req, res) =>{ 
    Entrada.findAll().then(rows => {
        res.status(200).send(rows); 
    });
});


router.post('/entrada',(req, res)=>{ 
    Entrada.create({
    titulo: req.body.titulo,
    contenido: req.body.contenido, 
    }).then(rows => {
        res.status(200).send("1"); 
    }).catch(err => {
            console.log(err); 
            res.status(200).send("0");
    });
});


router.get('/getEntrada/:entrada', (req, res) =>{
    Entrada.findAll({ where: { identrada: req.params.entrada } 
    }).then(rows => {
        res.status(200).send(rows); 
    });
});

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

module.exports = router;

