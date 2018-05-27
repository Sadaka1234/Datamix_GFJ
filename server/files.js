
const fs = require("fs");
const sequelize = require('./config');

class Halp {
	

	getFucked(){
		
		var files = fs.readdirSync('./CSV');
		console.log(files);
	}

	uploadData(CSVName, nFilas){
		var Entrada = sequelize.import('BUS', require("../models/BUS"));
	}

};

const Help = new Halp;

module.exports = Help



