/*const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'localhost',
    database: 'dbtest'
});
connection.connect(function(){
    console.log("Database Conectada");
});

module.exports = connection;*/

//Add Sequelize as ORM //
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const sequelize = new Sequelize('dbtest', 'root', 'localhost',{
host: 'localhost',
dialect: 'mysql',
operatorsAliases: false,
define: {
defaultScope:{
attributes:{
exclude: ['createdAt','updatedAt']
}
}
}
});
// Recuerden que el JSON de conexi´on se puede dejar en un archivo aparte

 module.exports = sequelize;
