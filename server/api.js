const express = require('express');
const router = express.Router();

const sequelize = require('./config');
const path = require('path');
const CSVS = require('./CSV');
const bcrypt = require('bcrypt-nodejs');


 //Testdeconexi ́on
sequelize.authenticate().then(() => {
console.log("Conexion establecida");
}).catch(err => {
console.error("No te puedes conectar: ", err);
});


const infoBus = sequelize.import('DatoBus', require("../models/DatoBus"));
const infoUser = sequelize.import('User', require("../models/User"));


sequelize.sync()
.then(() => {
    console.log('Tables has been successfully created, if one doesn\'t exist');
    infoUser.findAll({attributes : [[sequelize.fn('count', sequelize.col("username")),"Numero"]]})
    .then(rows => {
        if (rows[0].dataValues.Numero == 0){
            infoUser.create({
                username : "admin",
                email : "admin@admin.admin",
                password : "admin",
                tipo : "Admin"
            });
        }
    });
})
.catch(error => console.log('This error occured', error));



router.get('/graficos/getFechas/:ide', (req, res) =>{
	infoBus.findAll({ 
        attributes : [[sequelize.fn('distinct', sequelize.col("Dia_Toma")),"Dia_Toma"]],
        where: { "Asset_Id" : req.params.ide} 
    })
    .then(rows => { res.status(200).send(rows);
    });
});

router.get('/graficos/getDIds', (req, res) =>{
	infoBus.findAll({ 
    	attributes : [[sequelize.fn('distinct', sequelize.col("Asset_id")),"Asset_id"]]
    })
    .then(rows => { res.status(200).send(rows);
    });
});

router.get('/graficos/getData/:horaToma/:idBus', (req, res) =>{
    infoBus.findAll({ 
	    where: { "Dia_Toma" : req.params.horaToma, "Asset_id" : req.params.idBus } 
	})
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


router.get('/login/:usr/:pass', (req,res) =>{

    infoUser.findAll({where : {username : req.params.usr}}).then( rows => {
        if (rows.length == 0){
            res.status(200).send(false);
        }
        else{
            let pass = rows[0].dataValues.password;
            if ( bcrypt.compareSync(req.params.pass, pass) ){
                res.status(200).send(rows);
            }
            else {
                res.status(200).send(false);
            }
        }
        
    });

});

router.get('/signup/:usr/:pass/:mail/:tipo', (req,res) =>{

    infoUser.findAll({where : {username : req.params.usr}}).then( rows => {
        if (rows.length == 0){
            res.status(200).send(false);
        }
        else{

            infoUser.create({
                username : req.params.usr,
                email : req.params.mail,
                password : req.params.pass,
                tipo : req.params.tipo
            }).then( rows => {
                res.status(200).send(true);
            });

        }
        
    });

});

module.exports = router;
