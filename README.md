# DataWatch Alpha

**DataWatch** es un sistema web para la visualización de gráficos basados en datos obtenidos desde buses pertenecientes a la base de datos de **Multiwireless ltda.** En su fase alpha, este programa requiere que estos datos sean subidos a una base de datos local.

##Introducción

Eran tiempos oscuros en el reino de _Don Federico Santa Maria_. Pero todo cambio cuando Jorge, el maestro del back end, Gonzalo, el maestro del front end y Moscoso, el maestro del readme, se unieron para vencer al malvado mago Marcelo Mendoza en su plan de venganza sobre los pobres alumnos de ingenieria informatica. Gracias a la ayuda del gran mago *Felipe Vega* (_The m*eanest of them all_), estos heroes lograran salvar el reino. (¿Y conseguir el amor en el camino?) 

## Base de Datos

Antes que todo, es necesario modificar la siguiente linea en el archivo `/server/config.js`

```
const sequelize = new Sequelize(//Nombre de la base de datos, //Usuario, //Constraseña,{
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
```

Para poder poblar la base de datos, es necesario que se incluyan archivos de la trama `fsm-1` en la carpeta `/CSV`. Despues se debe hacer login en la pagina como administrador y luego entrar a la pestaña `Manejo Data`. Dentro de la pagina, elegir un archivo de la lista para que los datos de este sean subidos a la base de datos.

### Login Usuario

Al correr el programa, se crea el usuario *admin*, el cual posee *admin* como contraseña. Aun no se genera el sistema para registrar cuentas, asi que se tendrá que usar la cuenta preexistente. Esto será implementado en una posterior entrega.

### Signup Usuario

Al entrar en la pagina de login, estará disponible la opcion de hacer signup dentro de la plataforma, todos los usuarios creados por aca no tendran acceso al manejo de la base de datos. Para poder acceder a eso, ingresar mediante el usuario *admin*.

Tomar en cuenta que el email y el nombre de usuario por separados deben ser unicos.

## Correr DataWatch

Abrir una terminal dentro de la carpeta raíz y ejecutar `npm install` y luego `ng build && node server`, el sitio se encontrará disponible en `https://localhost:3000`. En caso de fallar Jquery, se debe ejecutar el comando `npm install jquery --save`

### Ver Graficos

Al entrar a la pestaña `graficos`, se encontrara un lista con todos los ids de buses que se encuentren en la base de datos. Al elegir uno de estos, se puede elegir entre graficar la informacion de una fecha en especifico o de todas las que te encuentren en la base de datos. Al apretar el boton `Generar Graficos`, se desplegaran los graficos y ademas se tendra la opción de generar un reporte para poder descargar.

### Generar Reportes y descargas del mismo

Al generar gráficos de una máquina, se abrira una nueva ventana con la información solicitada. Para descargar archivos, se debe presionar el boton`descargar reporte` y esperar a que la pagina genere el reporte. Posteriormente, volver a presionar descargar. Se puede observar cuando el reporte se esta generando, debido a que el icono en el boton de descarga se hace invisible cuando esto sucede. Se planea reparar este error en una posterior entrega

#### DataWatch, hecho con ♥ por DataMix

![](http://www.wobshite.co.uk/b3ta/letters/dance/d.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/a.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/t.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/a.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/w.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/a.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/t.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/c.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/h.gif)

![](https://images.cooltext.com/5179980.gif)

![](http://www.wobshite.co.uk/b3ta/letters/dance/m.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/a.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/u.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/R.gif)![](http://www.wobshite.co.uk/b3ta/letters/dance/o.gif)