
## How To blog

- Crea una nueva aplicación de Angular desde la terminal

~~~
ng new blogApp --ng4 --routing
~~~
- Se va a generar una carpeta llamada **blogApp** con los archivos del proyecto, entra a dicha carpeta e instala **express**, **mysql** y **body-parser** con el siguiente comando

~~~
npm install express mysql body-parser --save
~~~
- Crea la base de datos mysql, además crea la siguiente tabla.

~~~
CREATE TABLE `entrada` (
  `identrada` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(200) NOT NULL,
  `contenido` varchar(1000) NOT NULL,
  `fechaPublicacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`identrada`)
)
~~~
CREATE TABLE `grafico` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `cant_datos` int(20) NOT NULL DEFAULT 0,
   PRIMARY KEY (`id`));

- Agrega algunos registros de ejemplo a la tabla identrada
- Dentro de la carpeta **blogApp**, crea un archivo **server.js** con el siguiente contenido

~~~
/* Librerias */
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

/* Incluimos la Api*/
const api = require('./server/api');

/*Crear App de Express*/
const app = express();

/* Parser para POST */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Static Path */
app.use(express.static(path.join(__dirname, 'dist')));

/* Ruta para nuestra API */
app.use('/api/v1', api);

/* Todas las rutas no dirigidas a la API se las enviamos a angular */
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/* Setear el puerto donde se escucharán las peticiones */
const port = process.env.PORT || '3000';
app.set('port', port);

/* Levantamos el servidor */
const server = http.createServer(app);
server.listen(port,()=> console.log(`API corriendo en el puerto:${port}`));

~~~

- Dentro de la misma carpeta **blogApp**, crea una carpeta llamada **server**, dentro de la carpeta **server** crea el archivo **api.js** con el siguiente contenido

~~~
const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    res.send('api works');
});

module.exports = router;
~~~

- Desde la carpeta **blogApp** puedes ejecutar la pequeña API creada hasta el momento, ejecuta el comando `node server` por la terminal e ingresa a la siguiente dirección `localhost:3000/api/v1/`.

- Ahora vamos a configurar la conexión con la base de datos. Dentro de la carpeta **server** crea el archivo **config.js** y agregale el siguiente código.

~~~
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: '[tuUsuario]',
    password: '[tuPassword]',
    database: '[tuBD]'
});
connection.connect(function(){
    console.log("Database Conectada");
});

module.exports = connection;

~~~
- Una vez creado el archivo **config.js** lo importamos desde el archivo **api.js**.

~~~
const db = require('./config');
~~~

- Ahora podemos crear una ruta o EndPoint para obtener todas las entradas desde la base de datos. Arriba de la línea  `module.exports = router;` agrega el siguiente código.

~~~
router.get('/entradas', (req, res) =>{
    var query = "SELECT * FROM entrada";
    db.query(query, function(err, rows){
        if(err){
            console.log(err);
            res.status(500).send({
                data: "Ups, ha ocurrido algo"
            });
        }
        else{
            return res.status(200).send(rows);
        }
    });
});          
~~~
insert into grafico (nombre, cant_datos) values ('Autos', 16);


- Corre de nuevo el proyecto con `node server`, si ingresas a `localhost:3000/api/v1/entradas` podrás ver los registros rescatados desde la base de datos.

- Ahora vamos a generar el componente de angular para mostrar las entradas del blog. Desde la carpeta **blogApp** ejecuta el siguiente comando.

~~~
ng generate component Entradas
~~~

- Angular generará la carpeta y los archivos del componente automáticamente. Estos se encuentran en el siguiente directorio `blogApp/src/app/entradas`

~~~
entradas.component.css <--- Hoja de estilo CSS del componente
entradas.component.html <--- Plantilla del componente
entradas.component.ts <--- Clase Componente
~~~

- Ahora vamos a agregar el componente al enrutador de angular. Para esto importamos el componente en el archivo `blogApp/src/app/app-routing.module.ts`

~~~
import { EntradasComponent } from './entradas/entradas.component';
~~~
- También agregamos la ruta en el arreglo **routes** (en el mismo archivo).

~~~
const routes: Routes = [
    { path: '', component: EntradasComponent }
];
~~~

- Para probar esto, corremos el proyecto con el comando `ng build && node server` y entramos a la siguiente dirección `localhost:3000`.

- Una vez agregado el componente es necesario crear un servicio para consumir la API generada en node. Para esto creamos la carpeta **services** dentro de la carpeta `blogApp/src/app`.

- Via terminal, dentro de la carpeta **services** generamos el servicio con el siguiente comando.

~~~
ng generate service entradas
~~~

- El comando anterior creará el archivo `entradas.service.ts`. Luego, debemos importar el servicio. Para esto ingresamos al archivo `app.module.ts` en la carpeta `blogApp/src/app` y lo importamos, además importamos el módulo Http de angular.

~~~
import { HttpModule } from '@angular/http';
import { EntradasService } from './services/entradas.service';
~~~

- Dentro del mismo archivo `app.module.ts` agregamos el servicio en el arreglo `providers` y el módulo en el arreglo `imports`.

~~~
imports: [
  BrowserModule,
  AppRoutingModule,
  HttpModule
],
providers: [EntradasService],
bootstrap: [AppComponent]
~~~

- Es hora de implementar el servicio. Abrimos el archivo `entradas.services` de la carpeta `blogApp/src/app/services` e importamos **Http** y **map**

~~~
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
~~~
- Inyectamos **Http** en el constructor del servicio.

~~~
constructor(private http: Http) { }
~~~

- Finalmente implementamos la función que rescatará los datos desde la API.

~~~
getEntradas(){
  return this.http.get('/api/v1/entradas').map(res => res.json());
};
~~~

- Ahora necesitamos llamar a los métodos del servicio desde el componente. Abrimos el archivo `entradas.component.ts` (`blogApp/app/src/entradas`) e importamos el servicio.

~~~
import { EntradasService } from '../services/entradas.service';
~~~

- Creamos un arreglo donde almacenaremos los datos obtenidos desde la API

~~~
entradasBlog: any = [];
constructor(private entradasService: EntradasService) { }
~~~

- Finalmente implementamos el método `ngOnInit` del componente.

~~~
ngOnInit() {
    this.entradasService.getEntradas().subscribe(rows =>{
        this.entradasBlog = rows;
        console.log(this.entradasBlog);
    });
}
~~~

- Con esto, cuando se inicialice el componente, angular hará una petición a la API que retornará las entradas del blog almacenadas en la base de datos. Ahora es momento de armar la plantilla html que mostrará las entradas.

~~~
<ul *ngFor="let entrada of entradasBlog">
    <h1> {{ entrada.titulo }} </h1>
    <p> {{ entrada.contenido }} <p>
    <h4> {{ entrada.fechaPublicacion | date:'hh:mm dd/MM/yyyy'}} </h4>
</ul>
~~~

- Corremos nuevamente el proyecto con `ng build && node server` y entramos a `localhost:3000`. Ahora serán visibles las entradas desde la base de datos.

- Vamos a arreglar un poco el diseño. Ingresamos al archivo `app.component.html` (`blogApp/src/app`) y borramos todo el contenido menos la línea `<router-outlet></router-outlet>`.

- Es hora de instalar bootstrap. Desde la carpeta `blogApp` ingresamos via terminal el siguiente comando

~~~
npm install bootstrap jquery --save
~~~

- Abre el archivo `.angular-cli.json` de la carpeta `blogApp`, modifica los arreglos **styles** y **scripts** para agregar **bootstrap** y **jquery**.

~~~
"styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.min.css",
  "styles.css"
],
"scripts": [
   "../node_modules/jquery/dist/jquery.js",
    "../node_modules/bootstrap/dist/js/bootstrap.js"          
],
~~~

- Con esto hemos agregado **bootstrap** al proyecto. Edita la plantilla `entradas.component.html` para darle más estilo.

~~~
<div class="card mt-3" *ngFor="let entrada of entradasBlog">
    <div class="card-header">
        <h1> {{ entrada.titulo }} </h1>
    </div>
    <div class="card-body">
        <p> {{ entrada.contenido }} <p>
    </div>
    <div class="card-footer">
        <h4> {{ entrada.fechaPublicacion | date:'hh:mm dd/MM/yyyy'}} </h4>
    </div>
</div>
~~~

- También editamos el archivo `app.component.html`.

~~~
<div class="container">
    <router-outlet></router-outlet>
</div>
~~~

- Agreguemos una Navbar para darle más contenido al blog. Ejecuta el siguiente comando `ng generate component navbar`. Esto creará la carpeta **navbar** con los archivos del componente.

- En el archivo `navbar.component.html` (`blogApp/src/app/navbar`) agrega el siguiente código.

~~~
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Blog Ayudantía</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/entradas/new">Agregar Entradas</a>
      </li>
    </ul>
  </div>
</nav>
~~~

- Edita el archivo `app.component.html` de la siguiente manera.

~~~
<app-navbar></app-navbar>
<div class="container">
    <router-outlet></router-outlet>
</div>
~~~

- Si ejecutas el proyecto podrás ver la barra de navegación. Si te fijas tiene un botón _**Agregar Entradas**_, pero aún no está implementado. Crea un nuevo componente para esto.

~~~
ng generate component IngresarEntradas
~~~

- Esto generará la carpeta `blogApp/src/app/ingresar-entradas`. Ahora debemos importar este nuevo componente al enrutador de angular (`blogApp/src/app/app-routing.module.ts`) y agregar la ruta al arreglo **routes**.

~~~
import { IngresarEntradasComponent } from './ingresar-entradas/ingresar-entradas.component';

const routes: Routes = [
    { path: '', component: EntradasComponent },
    { path: 'entradas/new', component: IngresarEntradasComponent }
];
~~~
- También debemos importar el módulo _**FormsModule**_. Abimos el archivo `blogApp/src/app/app.module.ts` para importarlo y agregarlo en el arreglo `imports`.

~~~
import { FormsModule } from '@angular/forms';
~~~
~~~
imports: [
  BrowserModule,
  AppRoutingModule,
  HttpModule,
  FormsModule
],
~~~

- Es hora de implementar la plantilla de este nuevo componente. Agrega el siguiente código al archivo `blogApp/src/app/ingresar-entradas/ingresar-entradas.component.html`.

~~~
<div class="card mt-3">
    <div class="card-body">
        <div class="form-group">
            <h4 class="card-title">
                Título
            </h4>
            <input type="text" class="form-control" placeholder="Ingrese Título" [(ngModel)]="titulo">
            <h4 class="card-title">
                Contenido
            </h4>
            <textarea class="form-control" rows="5" [(ngModel)]="contenido"></textarea>
        </div>
    </div>
    <div class="card-footer">
        <button class="btn btn-dark" (click)="crearEntrada()">Ingresar</button>
    </div>
</div>
~~~

- Luego creamos una función en nuestro `entradas.service.ts` para enviar los datos ingresados a API para que esta los ingrese a la base de datos.

~~~
insertEntrada(data){
    console.log("service");
    return this.http.post('/api/v1/entrada', data).map(res => res.json());
}
~~~

- Ahora debemos editar el archivo `ingresar-entradas.component.ts` para hacer uso de este servicio. Debemos importar el servicio en este nuevo componente, además de inyectarlo en el constructor. También agrega los campos **titulo** y **contenido** donde se guardarán los datos ingresados por el usuario.

~~~
import { EntradasService } from '../services/entradas.service';
~~~
~~~
titulo:"";
contenido:"";
constructor(private entradasService: EntradasService) { }
~~~

- Finalmente creamos la función que será llamada al hacer click en el botón del formulario.

~~~
crearEntrada(){
    this.entradasService.insertEntrada({"titulo": this.titulo,
      "contenido": this.contenido}).subscribe(res=>{
          window.alert("Entrada Ingresada Correctamente");
      });
}
~~~

- Ahora solo falta implementar el EndPoint en la API. Abre el archivo `blogApp/server/api.js` y agrega lo siguiente.

~~~
router.post('/entrada',(req, res)=>{
    var query = "INSERT INTO entrada (titulo, contenido) VALUES('"+req.body.titulo+"', '"+req.body.contenido+"')";
    db.query(query, function(err, rows){
        if(err){
            res.status(500).send({
                body:{
                    result:"error"
                }
            });
        }
        else{
            return res.status(200).send({
                body:{
                    result:"OK"
                }
            });
        }
    });
});
~~~

- Y listo, ahora si ejecutamos el proyecto e ingresamos a `localhost:3000/entradas/new`
podremos ingresar nuevas entradas de nuestro blog.
