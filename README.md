# DataWatch Alpha

**DataWatch** es un sistema web para la visualización de gráficos basados en datos obtenidos desde buses pertenecientes a la base de datos de **Multiwireless ltda.** En su fase alpha, este programa requiere que estos datos sean subidos a una base de datos local.


## Base de Datos

Para poder poblar la base de datos, es necesario que se incluyan archivos de la trama `fsm-1` en la carpeta `/CSV`. Despues se debe hacer login en la pagina como administrador y luego entrar a la pestaña `Manejo Data`. Dentro de la pagina, elegir un archivo de la lista para que los datos de este sean subidos a la base de datos.

### Login Usuario

Al correr el programa, se crea el usuario *admin*, el cual posee *admin* como contraseña. Aun no se genera el sistema para registrar cuentas, asi que se tendrá que usar la cuenta preexistente. Esto será implementado en una posterior entrega.

## Correr DataWatch

Abrir una terminal dentro de la carpeta raíz y ejecutar `npm install` y luego `ng build && ng serve`, el sitio se encontrará disponible en `localhost:3000`. En caso de fallar Jquery, se debe ejecutar el comando `npm install jquery --save`

### Ver Graficos

Al entrar a la pestaña `graficos`, se encontrara un lista con todos los ids de buses que se encuentren en la base de datos. Al elegir uno de estos, se puede elegir entre graficar la informacion de una fecha en especifico o de todas las que te encuentren en la base de datos. Al apretar el boton `Generar Graficos`, se desplegaran los graficos y ademas se tendra la opción de generar un reporte para poder descargar.

### Generar Reportes y descargas del mismo

Al generar gráficos de una máquina, se abrira una nueva ventana con la información solicitada. Para esto, se debe presionar el boton`descargar reporte` y esperar a que la pagina genere el reporte. Posteriormente, volver a presionar descargar. Se puede observar cuando el reporte se esta generando, debido a que el icono en el boton de descarga se hace invisible cuando esto sucede. Se planea reparar este error en una posterior entrega

#### DataWatch, hecho con ♥ por DataMix

![](http://www.wobshite.co.uk/b3ta/letters/dance/d.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/a.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/t.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/a.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/w.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/a.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/t.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/c.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/h.gif)

![](https://images.cooltext.com/5179980.gif)