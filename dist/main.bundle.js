webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graficos_graficos_component__ = __webpack_require__("./src/app/graficos/graficos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*/import { EntradasComponent } from './entradas/entradas.component';
import { IngresarEntradasComponent } from './ingresar-entradas/ingresar-entradas.component';/*/

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__graficos_graficos_component__["a" /* GraficosComponent */] },
    /*/    { path: 'entradas/new', component: IngresarEntradasComponent }, /*/
    { path: 'graficos/new', component: __WEBPACK_IMPORTED_MODULE_2__graficos_graficos_component__["a" /* GraficosComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//CSVtoSq.toCSV();


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graficos_graficos_component__ = __webpack_require__("./src/app/graficos/graficos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_graficos_service__ = __webpack_require__("./src/app/services/graficos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__graficos_graficos_component__["a" /* GraficosComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_graficos_service__["a" /* GraficosService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/graficos/graficos.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/graficos/graficos.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div [hidden]=\"submitted\" >\n    <h1>Selecciona Fecha e Id del Bus a graficar</h1>\n    <form (ngSubmit)=\"onSubmit()\" #GraficosComponent=\"ngForm\">\n\n    <fieldset>\n\n    <div class=\"form-group\" >\n        <label for=\"Fecha\">Fecha de toma de datos</label>\n        <select class=\"form-control\"\n        \t\t    id=\"Fecha\"\n                required\n                [(ngModel)]=\"Currfecha\"\n                name=\"fecha\"\n                #fecha=\"ngModel\" \n                (change)=\"getIds($event.target.value)\">\n          <option *ngFor=\"let fecha of fechas\" [value]=\"fecha\">{{fecha | date}}</option>\n        </select>\n      </div> \n\n      <div class=\"form-group\" [hidden]=\"hididbus\">\n        <label for=\"idBus\">ID del Bus</label>\n        <select class=\"form-control\" id=\"idBus\"\n                required\n                [(ngModel)]=\"Currid\" name=\"idBus\"\n                #idBus=\"ngModel\" [(selected)]=\"i\">\n          <option *ngFor=\"let i of ids\">{{i}}</option>\n        </select>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"hididbus\">Procesar Graficos</button>\n\n    </fieldset>\n    </form>\n  </div>\n\n  <div [hidden]=\"!submitted\">\n\n    <h2>Mostrando los graficos basados en la siguientes elecciones:</h2>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Fecha :  </div>\n      <div class=\"col-xs-9  pull-left\">{{ Currfecha }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">ID Bus :  </div>\n      <div class=\"col-xs-9 pull-left\">{{ Currid }}</div>\n    </div>\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"generarGraficos()\">Ver Graficos</button>\n    <button class=\"btn btn-primary\" (click)=\"hidePlots()\">Cambiar Fecha</button>\n\n    <div [hidden]=\"!showGraphs\">\n\n      <h1>Velocidad</h1><p></p>\n\n      <div #Velocidad>\n        <!-- Chart will appear here -->\n      </div>\n\n      <h1>Temperatura</h1><p></p>\n\n      <div #Temperatura>\n        <!-- Chart will appear here -->\n      </div>\n\n      <h1>Combustible</h1><p></p>\n\n      <div #Combustible>\n        <!-- Chart will appear here -->\n      </div>\n\n    </div>\n\n  </div>\n</div> \n\n\n"

/***/ }),

/***/ "./src/app/graficos/graficos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_graficos_service__ = __webpack_require__("./src/app/services/graficos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graph_data__ = __webpack_require__("./src/app/graph-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import * as _ from 'lodash';
var GraficosComponent = /** @class */ (function () {
    function GraficosComponent(chartService) {
        this.chartService = chartService;
        this.fechas = [];
        this.ids = [];
        this.showGraphs = false;
        this.TomasBus = new __WEBPACK_IMPORTED_MODULE_2__graph_data__["a" /* GraphData */]();
        this.hididbus = true;
        this.submitted = false;
    }
    GraficosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chartService.getFechas().subscribe(function (rows) {
            var f = 0;
            for (var y in rows) {
                _this.fechas[f] = rows[y]["DATE(horaToma)"];
                f++;
            }
        });
        //console.log(typeof this.fechas);
    };
    GraficosComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.chartService.getData({ "diaToma": this.Currfecha, "idBus": this.Currid }).subscribe(function (rows) {
            _this.TomasBus.updateData(rows);
            console.log("Acabo de obtener los datos");
        });
    };
    GraficosComponent.prototype.generarGraficos = function () {
        this.showGraphs = true;
        console.log(this.TomasBus);
        this.velTime();
        this.fuelTime();
        this.tempTime();
    };
    GraficosComponent.prototype.getIds = function (fecha) {
        var _this = this;
        this.ids = [];
        this.chartService.getIds({ "horaToma": fecha }).subscribe(function (rows) {
            for (var u in rows) {
                _this.ids.push(rows[u]["Asset_id"]);
            }
        });
        this.hididbus = false;
        alert("Ids Actualizados");
    };
    GraficosComponent.prototype.velTime = function () {
        var element = this.vel.nativeElement;
        Plotly.purge(element);
        var data = [{
                x: this.TomasBus.Taimstamps,
                y: this.TomasBus.Velocidad
            }];
        var style = {
            margin: { t: 0 }
        };
        Plotly.plot(element, data, style);
    };
    GraficosComponent.prototype.fuelTime = function () {
        var element = this.fuel.nativeElement;
        Plotly.purge(element);
        var data = [{
                x: this.TomasBus.Taimstamps,
                y: this.TomasBus.Combustible
            }];
        var style = {
            margin: { t: 0 }
        };
        Plotly.plot(element, data, style);
    };
    GraficosComponent.prototype.tempTime = function () {
        var element = this.temp.nativeElement;
        Plotly.purge(element);
        var data = [{
                x: this.TomasBus.Taimstamps,
                y: this.TomasBus.Temperatura
            }];
        var style = {
            margin: { t: 0 }
        };
        Plotly.plot(element, data, style);
    };
    GraficosComponent.prototype.hidePlots = function () {
        this.submitted = false;
        this.showGraphs = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('Velocidad'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], GraficosComponent.prototype, "vel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('Combustible'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], GraficosComponent.prototype, "fuel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('Temperatura'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], GraficosComponent.prototype, "temp", void 0);
    GraficosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-graficos',
            template: __webpack_require__("./src/app/graficos/graficos.component.html"),
            styles: [__webpack_require__("./src/app/graficos/graficos.component.css")]
        })
        /*export class GraficosComponent implements OnInit {


          ngOnInit() {

          }

        }*/
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_graficos_service__["a" /* GraficosService */]])
    ], GraficosComponent);
    return GraficosComponent;
}());



/***/ }),

/***/ "./src/app/graph-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphData; });
var GraphData = /** @class */ (function () {
    function GraphData() {
        this.Taimstamps = [];
        this.Velocidad = [];
        this.Temperatura = [];
        this.Combustible = [];
        this.ready = false;
    }
    GraphData.prototype.contructor = function () { };
    GraphData.prototype.updateData = function (Data) {
        this.Taimstamps = [];
        this.Velocidad = [];
        this.Temperatura = [];
        this.Combustible = [];
        var pos = 0;
        for (var u in Data) {
            this.Velocidad[pos] = Data[u]["A_Speed"];
            this.Temperatura[pos] = Data[u]["Curr_Temp"];
            this.Combustible[pos] = Data[u]["Curr_fLevel"];
            this.Taimstamps[pos] = new Date(Data[u]["horaToma"]);
            pos++;
        }
        console.log("Datos formateados");
        this.ready = true;
    };
    GraphData.prototype.getVeldata = function () {
        console.log(this.Velocidad);
        var aux = { x: this.Taimstamps, y: this.Velocidad };
        console.log(aux);
        return aux;
    };
    return GraphData;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\" style=\"background-color: #FF0800;\">\n  <a class=\"navbar-brand\" href=\"#\">Datamix Services</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"/\">Inicio <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/graficos/new\">Gráficos</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/graficos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GraficosService = /** @class */ (function () {
    function GraficosService(http) {
        this.http = http;
    }
    GraficosService.prototype.getFechas = function () {
        return this.http.get('/api/v1/graficos/getFechas').map(function (res) { return res.json(); });
    };
    GraficosService.prototype.getIds = function (data) {
        console.log(data.horaToma);
        var url = '/api/v1/graficos/getIds/' + data.horaToma;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    GraficosService.prototype.getData = function (data) {
        var url = '/api/v1/graficos/getData/' + data.diaToma + '/' + data.idBus;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    GraficosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GraficosService);
    return GraficosService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
