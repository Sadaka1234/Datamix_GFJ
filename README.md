# DataWatch Alpha

**DataWatch** es un sistema web para la visualización de gráficos basados en datos obtenidos desde buses pertenecientes a la base de datos de **Multiwireless ltda.** En su fase alpha, este programa requiere que estos datos sean subidos a una base de datos local.

## Base de Datos

Dentro de la carpeta `CSV` se encuentra un script en python que trunca los archivos .csv del cliente, esto se encuentra mejor explicado en el archivo `readme.txt`dentro de la misma carpeta, para poder subirlo a la base de datos mediante software como *MySQLWorkbench*. Se espera agregar a futuro una forma de manejar la base de datos mediante el navegador.

## Correr DataWatch

Abrir una terminal dentro de la carpeta raíz y ejecutar `node_install all` y luego `ng build && ng serve`, el sitio se encontrará disponible en `localhost:3000`

### DataWatch, hecho con ♥ por DataMix