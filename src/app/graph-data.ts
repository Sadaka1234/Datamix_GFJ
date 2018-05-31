export class GraphData {

	Taimstamps = [];
	Velocidad = [];
	Temperatura = [];
	Combustible = [];

	public contructor(){}

	public updateData(Data){

		this.Taimstamps = [];
		this.Velocidad = [];
		this.Temperatura = [];
		this.Combustible = [];

		let pos = 0;
		for (let u in Data){

			this.Velocidad[pos] = Data[u]["A_Speed"];
			this.Temperatura[pos] = Data[u]["Curr_Temp"];
			this.Combustible[pos] = Data[u]["Curr_fLevel"];
			this.Taimstamps[pos] = new Date(Data[u]["horaToma"]);
			pos++;

		}

		console.log("Datos formateados");
		
	}

}
