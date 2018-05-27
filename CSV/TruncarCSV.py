import glob,os

if not os.path.exists("Truncados"):
    os.makedirs("Truncados")

limite = 5000

archivos = glob.glob("./*.csv")
print("Elige archivo a truncar, 'all' para todos:")
for x in range(0,len(archivos)):
	if "Truncado" not in archivos[x]:
		print("{} - {}".format(x, archivos[x].strip("./").strip(".csv")))

elec = input()

if elec == "all":
	for arch in range(0,len(archivos)):
		dest = "./Truncados" + archivos[arch].strip(".csv") + "-Truncado.csv"

		f = open(archivos[arch],"r")
		d = open(dest,"w")

		d.write("horaToma,Asset_id,A_Speed,Curr_fLevel,Curr_Temp\n")

		for x in range(0,limite):
			linea = f.readline().strip().split(",")
			nuevo = []
			nuevo.append(linea[0])
			nuevo.append(linea[1])
			nuevo.append(linea[7])
			nuevo.append(linea[16])
			nuevo.append(linea[17])	
			d.write(",".join(nuevo))
			if x != limite-1:
				d.write("\n")

		print(dest + " Listo")

		f.close()
		d.close()

else:
	elec = int(elec)

	dest = "./Truncados" + archivos[elec].strip(".csv") + "-Truncado.csv"

	f = open(archivos[elec],"r")
	d = open(dest,"w")

	d.write("horaToma,Asset_id,A_Speed,Curr_fLevel,Curr_Temp\n")

	for x in range(0,limite):
		linea = f.readline().strip().split(",")
		nuevo = []
		nuevo.append(linea[0])
		nuevo.append(linea[1])
		nuevo.append(linea[7])
		nuevo.append(linea[16])
		nuevo.append(linea[17])	
		d.write(",".join(nuevo))
		if x != limite-1:
			d.write("\n")