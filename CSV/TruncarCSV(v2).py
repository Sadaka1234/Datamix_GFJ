import glob,os

if not os.path.exists("Truncados"):
    os.makedirs("Truncados")


def getbuses(archivo,nbuses,limite):
	buses = {}
	f = open(archivo,"r")
	b = 0
	while b < nbuses:
		bus = f.readline().strip().split(",")[1]
		if bus not in buses:
			buses[bus] = limite
			b+=1
	f.close()
	return buses

limite = 200
nbuses = 20

archivos = glob.glob("./*.csv")
print("Elige archivo a truncar, 'all' para todos:")
for x in range(0,len(archivos)):
	if "Truncado" not in archivos[x]:
		print("{} - {}".format(x, archivos[x].strip("./").strip(".csv")))

elec = input()

if elec == "all":
	for arch in range(0,len(archivos)):
		dest = "./Truncados" + archivos[arch].strip(".csv") + "-Truncado.csv"

		buses = getbuses(archivos[arch],nbuses,limite)

		f = open(archivos[arch],"r")
		d = open(dest,"w")


		d.write("horaToma,Asset_id,A_Speed,Curr_fLevel,Curr_Temp\n")

		x = False
		n = 1

		while not x:
			x = len(list(buses.keys())) == 0
			linea = f.readline().strip().split(",")

			if len(linea) == 1:
				x = True
				print(n)
				print(buses)

			if not x and linea[1] in buses:
				nuevo = []
				nuevo.append(linea[0])
				nuevo.append(linea[1])
				nuevo.append(linea[7])
				nuevo.append(linea[16])
				nuevo.append(linea[17])	
				d.write(",".join(nuevo))
				buses[linea[1]] += -1
				if buses[linea[1]] == 0:
					del buses[linea[1]]
				if x != limite-1:
					d.write("\n")
			n+=1

		print(dest + " Listo")

		f.close()
		d.close()

else:
	arch = int(elec)

	dest = "./Truncados" + archivos[arch].strip(".csv") + "-Truncado.csv"

	buses = getbuses(archivos[arch],nbuses,limite)

	f = open(archivos[arch],"r")
	d = open(dest,"w")


	d.write("horaToma,Asset_id,A_Speed,Curr_fLevel,Curr_Temp\n")

	x = False
	n = 1

	while not x:
		x = len(list(buses.keys())) == 0
		linea = f.readline().strip().split(",")

		if len(linea) == 1:
			x = True
			print(n)
			print(buses)

		if not x and linea[1] in buses:
			nuevo = []
			nuevo.append(linea[0])
			nuevo.append(linea[1])
			nuevo.append(linea[7])
			nuevo.append(linea[16])
			nuevo.append(linea[17])	
			d.write(",".join(nuevo))
			buses[linea[1]] += -1
			if buses[linea[1]] == 0:
				del buses[linea[1]]
			if x != limite-1:
				d.write("\n")
		n+=1

	print(dest + " Listo")

	f.close()
	d.close()