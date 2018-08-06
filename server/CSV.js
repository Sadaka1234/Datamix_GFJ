const sequelize = require('./config');
const fs = require('fs');
const parser = require('papaparse');

const infoBus = sequelize.import('BUS', require("../models/BUS"));

//Clase para el formato de los datos

function dataFormat(DatosCSV){

	DatosCSV[12] = (DatosCSV[12] == 't');
	DatosCSV[14] = (DatosCSV[14] == 't');

	let DatosFormateados = { 
		horaToma : new Date(DatosCSV[0]), 
		Asset_id : DatosCSV[1], 
		A_Speed : DatosCSV[7],
		Curr_fLevel : DatosCSV[16],
		Curr_Temp : DatosCSV[17],
		Odometer : DatosCSV[4],
		Total_Fuel : DatosCSV[5],
		Engine_Hours : DatosCSV[6],
		AE_Speed : DatosCSV[8],
		AE_Torque : DatosCSV[9],
		Acc_Ped_Pos : DatosCSV[11],
		Brake_Switch : DatosCSV[12],
		Cruise_Active : DatosCSV[14],
		PTO_Active : DatosCSV[15],
		Turbo_Pressure : DatosCSV[18]
	};
	infoBus.create(DatosFormateados);

}

function getFiles(){

	let csvpath = "./CSV/";
	let archs = fs.readdirSync(csvpath);
	let cleanarchs = new Array();
	console.log(archs.length);
	for ( i=0; i < archs.length; i++){
		if(archs[i].endsWith(".csv")){
			cleanarchs.push(archs[i]);
		}
	}
	return cleanarchs;

}

function TopTens(Whole){

	let topten = [];
	let num = 0;
	let poss = 0;
	while(num < 10){
		let aidi = Whole.data[poss][1];
		if (topten.includes(aidi)){
			poss++;
		}
		else {
			topten.push(aidi);
			num++;
			poss++;
		}
	}
	return topten
}

function readCSV(arch){

	let path  = "./CSV/" + arch;
	console.log(path);
	var Bede = parser.parse(fs.createReadStream(path), {
		header: false,
		download: true,
		complete: function(results){

			let topten = TopTens(results);
			console.log(topten);
			let poss = 0;

			for(i = 0; i < results.data.length; i++){
				if (topten.includes(results.data[i][1])){
					dataFormat(results.data[i]);
					poss++;
				}
			}
			console.log(poss);
		}
	});

	
}

readCSV("fms1-2017-10-01.csv");

module.exports.getFiles = getFiles;
