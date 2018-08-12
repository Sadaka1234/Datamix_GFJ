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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_guard__ = __webpack_require__("./src/app/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manejo_data_manejo_data_component__ = __webpack_require__("./src/app/manejo-data/manejo-data.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*/import { EntradasComponent } from './entradas/entradas.component';
import { IngresarEntradasComponent } from './ingresar-entradas/ingresar-entradas.component';/*/





var routes = [
    /*/    { path: '', component: GraficosComponent },
        { path: 'entradas/new', component: IngresarEntradasComponent }, /*/
    { path: 'graficos/new', component: __WEBPACK_IMPORTED_MODULE_2__graficos_graficos_component__["a" /* GraficosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__login_guard__["a" /* LoginGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__login_guard__["a" /* LoginGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'manejo-data', component: __WEBPACK_IMPORTED_MODULE_6__manejo_data_manejo_data_component__["a" /* ManejoDataComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__login_guard__["a" /* LoginGuard */]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n<div class=\"image\">\n  <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_guard__ = __webpack_require__("./src/app/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_manejo_data_service_service__ = __webpack_require__("./src/app/services/manejo-data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__manejo_data_manejo_data_component__ = __webpack_require__("./src/app/manejo-data/manejo-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_6__graficos_graficos_component__["a" /* GraficosComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__manejo_data_manejo_data_component__["a" /* ManejoDataComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_graficos_service__["a" /* GraficosService */],
                __WEBPACK_IMPORTED_MODULE_12__services_manejo_data_service_service__["a" /* ManejoDataServiceService */],
                __WEBPACK_IMPORTED_MODULE_11__login_guard__["a" /* LoginGuard */],
                __WEBPACK_IMPORTED_MODULE_14__services_login_service__["a" /* LoginService */]
            ],
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

<<<<<<< HEAD
module.exports = "\n<div class=\"container\">\n  <div [hidden]=\"submitted\" >\n    <h1>Selección de Fecha e IDs</h1>\n    <form (ngSubmit)=\"onSubmit()\" #GraficosComponent=\"ngForm\">\n\n    <div class=\"form-group\" >\n        <label for=\"Fecha\">ID del bus</label>\n        <select class=\"form-control\"\n                id=\"idBus\"\n                required\n                [(ngModel)]=\"Currid\"\n                name=\"idBus\"\n                #fecha=\"ngModel\"\n                (change)=\"getFechas($event.target.value)\">\n          <option *ngFor=\"let i of ids\">{{i}}</option>\n        </select>\n      </div>\n\n      ¿Desea elegir el dia a graficar? <input type=\"checkbox\" [(ngModel)]=\"hidfechatoma\" (change)=\"!hidfechatoma\" name=\"DiasEspecificos\">\n\n      <p></p>\n\n      <div class=\"form-group\" [hidden]=\"!hidfechatoma\">\n        <label for=\"idBus\">Dia de la toma</label>\n        <select class=\"form-control\" id=\"Fecha\"\n                required\n                [(ngModel)]=\"Currfecha\" name=\"fecha\"\n                #idBus=\"ngModel\" >\n          <option *ngFor=\"let fecha of fechas\" [value]=\"fecha\">{{fecha | date}}</option>\n        </select>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary\" style=\"width:200px;background-color: #061539;\" [disabled]=\"!Butt\" >Procesar Graficos</button>\n\n    </form>\n  </div>\n\n  <div [hidden]=\"!submitted\" class=\"container align-items-center\"style=\"vertical-align: middle;\" >\n\n    <h2>Mostrando reporte basados en la siguientes elecciones</h2>\n    <div class=\"row justify-content-center\" [hidden]=\"!hidfechatoma\">\n      <div class=\"col-xs-3\">Fecha: </div>\n      <div class=\"col-xs-9  pull-left\">{{ Currfecha }}</div>\n    </div>\n    <div class=\"row\" [hidden]=\"hidfechatoma\">\n      <div class=\"col-xs-3\">Todas las fechas. </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-xs-3\">ID Bus: </div>\n      <div class=\"col-xs-9 pull-left\">{{ Currid }}</div>\n    </div>\n    <br>\n\n    <button class=\"btn btn-primary\"   style=\"width:200px; background-color: #061539;\" (click)=\"hidePlots()\">Cambiar Fecha</button>\n\n    <div [hidden]=\"!showGraphs\">\n      <p></p>\n      <p>\n        <button class=\"btn btndownload\" style=\"width:200px; background-color: #061539;\" (click)=\"obtReporte()\" style=\"display:inline-block;\"> Descargar reporte </button>\n     </p>\n    </div>\n    <div [hidden]=\"!showGraphs\">\n\n            <div class=\"card bg-transparent mt-1\">\n              <div class=\"card-header\">\n                  <h1 class=\"card-title\">Velocidad</h1><p></p>\n              </div>\n            <div class=\"card-body\">\n                <div class=\"row justify-content-center\">\n                    <div #Velocidad id=\"downvelocida\">\n                <!-- Chart will appear here -->\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card bg-transparent mt-2\">\n            <div class=\"card-header\">\n                <h1>Temperatura</h1><p></p>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row justify-content-center aling-items-center\">\n                <div #Temperatura id=\"downtemperatura\">\n                  <!-- Chart will appear here -->\n                </div>\n              </div>\n            </div>\n        </div>\n\n        <div class=\"card bg-transparent mt-2\">\n            <div class=\"card-header\">\n                <h1>Combustible</h1><p></p>\n            </div>\n            <div class=\"card-body\" >\n              <div class=\"row justify-content-center aling-items-center\">\n                <div #Combustible id=\"downcombustible\">\n                  <!-- Chart will appear here -->\n                </div>\n              </div>\n            </div>\n        </div>\n\n</div>\n"
=======
module.exports = "\n<div class=\"container\">\n  <div [hidden]=\"submitted\" >\n    <h1>Selección de Fecha e IDs</h1>\n    <form (ngSubmit)=\"onSubmit()\" #GraficosComponent=\"ngForm\">\n\n    <div class=\"form-group\" >\n        <label for=\"Fecha\">ID del bus</label>\n        <select class=\"form-control\"\n                id=\"idBus\"\n                required\n                [(ngModel)]=\"Currid\"\n                name=\"idBus\"\n                #fecha=\"ngModel\"\n                (change)=\"getFechas($event.target.value)\">\n          <option *ngFor=\"let i of ids\">{{i}}</option>\n        </select>\n      </div>\n\n      ¿Desea elegir el dia a graficar? <input type=\"checkbox\" [(ngModel)]=\"hidfechatoma\" (change)=\"!hidfechatoma\" name=\"DiasEspecificos\">\n\n      <p></p>\n\n      <div class=\"form-group\" [hidden]=\"!hidfechatoma\">\n        <label for=\"idBus\">Dia de la toma</label>\n        <select class=\"form-control\" id=\"Fecha\"\n                required\n                [(ngModel)]=\"Currfecha\" name=\"fecha\"\n                #idBus=\"ngModel\" >\n          <option *ngFor=\"let fecha of fechas\" [value]=\"fecha\">{{fecha | date}}</option>\n        </select>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary\" style=\"width:200px;background-color: #061539;\" [disabled]=\"!Butt\" >Procesar Graficos</button>\n\n    </form>\n  </div>\n\n  <div [hidden]=\"!submitted\" class=\"container align-items-center\"style=\"vertical-align: middle;\" >\n\n    <h2>Mostrando reporte basados en la siguientes elecciones</h2>\n    <div class=\"row justify-content-center\" [hidden]=\"!hidfechatoma\">\n      <div class=\"col-xs-3\">Fecha: </div>\n      <div class=\"col-xs-9  pull-left\">{{ Currfecha }}</div>\n    </div>\n    <div class=\"row justify-content-center\" [hidden]=\"hidfechatoma\">\n      <div class=\"col-xs-3\">Todas las fechas. </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-xs-3\">ID Bus: </div>\n      <div class=\"col-xs-9 pull-left\">{{ Currid }}</div>\n    </div>\n    <br>\n\n    <button class=\"btn btn-primary\"   style=\"width:200px; background-color: #061539;\" (click)=\"hidePlots()\">Cambiar Fecha</button>\n\n\n    <div [hidden]=\"!showGraphs\">\n      <p></p>\n      <p>\n        <button class=\"btn btndownload\" style=\"width:200px; background-color: #061539;\" (click)=\"obtReporte()\" style=\"display:inline-block;\"> Descargar reporte </button>\n\n     </p>\n             <div class=\"card bg-transparent mt-1\">\n            <div class=\"card-header\">\n                <h1 class=\"card-title\">Velocidad</h1><p></p>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"row justify-content-center\">\n                    <div #Velocidad id=\"downvelocida\">\n                <!-- Chart will appear here -->\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card bg-transparent mt-2\">\n            <div class=\"card-header\">\n                <h1>Temperatura</h1><p></p>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row justify-content-center aling-items-center\">\n                <div #Temperatura id=\"downtemperatura\">\n                  <!-- Chart will appear here -->\n                </div>\n              </div>\n            </div>\n        </div>\n\n        <div class=\"card bg-transparent mt-2\">\n            <div class=\"card-header\">\n                <h1>Combustible</h1><p></p>\n            </div>\n            <div class=\"card-body\" >\n              <div class=\"row justify-content-center aling-items-center\">\n                <div #Combustible id=\"downcombustible\">\n                  <!-- Chart will appear here -->\n                </div>\n              </div>\n            </div>\n        </div>\n\n</div>\n"
>>>>>>> 14c58eff05aa599ae8bcdb4881e5826562be3d57

/***/ }),

/***/ "./src/app/graficos/graficos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_graficos_service__ = __webpack_require__("./src/app/services/graficos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graph_data__ = __webpack_require__("./src/app/graph-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_html2canvas__ = __webpack_require__("./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_html2canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_html2canvas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jspdf__);
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
        this.hidfechatoma = false;
        this.submitted = false;
        this.showgraphs = false;
        this.Butt = false;
        this.doc = new __WEBPACK_IMPORTED_MODULE_4_jspdf__('p', 'mm', [297, 210]);
        this.waiter = true;
    }
    GraficosComponent.prototype.ngOnInit = function () {
        this.GetIds();
        //this.GetFechas(5);
    };
    GraficosComponent.prototype.onSubmit = function () {
        var _this = this;
        this.chartService.getData({ "diaToma": this.Currfecha, "idBus": this.Currid }, this.hidfechatoma).subscribe(function (rows) {
            _this.TomasBus.updateData(rows);
            console.log("Acabo de obtener los datos");
            _this.submitted = true;
            _this.generarGraficos();
        });
    };
    GraficosComponent.prototype.generarGraficos = function () {
        Plotly.purge(this.vel.nativeElement);
        Plotly.purge(this.fuel.nativeElement);
        Plotly.purge(this.temp.nativeElement);
        this.showGraphs = true;
        this.velTime();
        this.fuelTime();
        this.tempTime();
    };
    GraficosComponent.prototype.getFechas = function (id) {
        var _this = this;
        this.fechas = [];
        this.chartService.getFechas(id).subscribe(function (rows) {
            var f = 0;
            for (var y in rows) {
                _this.fechas[f] = rows[y]["Dia_Toma"];
                f++;
            }
        });
    };
    GraficosComponent.prototype.GetIds = function () {
        var _this = this;
        this.ids = [];
        this.chartService.getDIds().subscribe(function (rows) {
            console.log(rows);
            var f = 0;
            for (var y in rows) {
                _this.ids[f] = rows[y]["Asset_id"];
                if (f == 0) {
                    _this.getFechas(_this.ids[f]);
                    _this.Currid = _this.ids[f];
                }
                f++;
            }
            _this.ids = _this.ids.sort(function (a, b) { return a - b; });
            _this.Butt = true;
        });
    };
    GraficosComponent.prototype.velTime = function () {
        var ancho = this.doc.internal.pageSize.width;
        var alto = this.doc.internal.pageSize.height;
        var element = this.vel.nativeElement;
        Plotly.purge(element);
        var data = [{
                x: this.TomasBus.Taimstamps,
                y: this.TomasBus.Velocidad,
                mode: 'markers',
                type: 'scatter',
                marker: { size: 4 }
            }];
        var style = {
            margin: { t: 25,
                l: 25,
                r: 25,
                b: 25 //bottom margin
            },
            width: ancho * 0.3,
            height: alto / 5,
            paper_bgcolor: 'rgba(255,255,255,0.6)',
            plot_bgcolor: 'rgba(200,200,200,1)',
            color: 'rgba(200,00,0,1)'
        };
        Plotly.plot(element, data, style);
    };
    GraficosComponent.prototype.fuelTime = function () {
        var ancho = this.doc.internal.pageSize.width;
        var alto = this.doc.internal.pageSize.height;
        var element = this.fuel.nativeElement;
        Plotly.purge(element);
        var data = [{
                x: this.TomasBus.Taimstamps,
                y: this.TomasBus.Combustible,
                mode: 'markers',
                type: 'scatter',
                marker: { size: 4 }
            }];
        var style = {
            margin: { t: 25,
                l: 25,
                r: 25,
                b: 25 //bottom margin
            },
            width: ancho * 0.3,
            height: alto / 5,
            paper_bgcolor: 'rgba(255,255,255,0.6)',
            plot_bgcolor: 'rgba(200,200,200,1)',
            color: 'rgba(200,00,0,1)'
        };
        Plotly.plot(element, data, style);
    };
    GraficosComponent.prototype.tempTime = function () {
        var ancho = this.doc.internal.pageSize.width;
        var alto = this.doc.internal.pageSize.height;
        var element = this.temp.nativeElement;
        Plotly.purge(element);
        var data = [{
                x: this.TomasBus.Taimstamps,
                y: this.TomasBus.Temperatura,
                mode: 'markers',
                type: 'scatter',
                marker: { size: 4 }
            }];
        var style = {
            margin: { t: 25,
                l: 25,
                r: 25,
                b: 25 //bottom margin
            },
            width: ancho * 0.3,
            height: alto / 5,
            paper_bgcolor: 'rgba(255,255,255,0.6)',
            plot_bgcolor: 'rgba(200,200,200,1)',
            color: 'rgba(200,00,0,1)'
        };
        element.plot_bgcolor = 'rgba(255,255,255, 0.4)';
        Plotly.plot(element, data, style);
    };
    GraficosComponent.prototype.hidePlots = function () {
        this.submitted = false;
        this.showGraphs = false;
        this.hidfechatoma = false;
    };
    GraficosComponent.prototype.agregarImagen = function (id, profundidad) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_html2canvas___default()(document.getElementById(id)).then(function (canvas) {
            document.body.appendChild(canvas);
            var data = canvas.toDataURL();
            _this.doc.addImage(data, 'PNG', 20, profundidad);
        });
    };
    GraficosComponent.prototype.obtReporte = function () {
        var ancho = this.doc.internal.pageSize.width;
        var alto = this.doc.internal.pageSize.height;
        //210mm wide and 297mm high
        if (!this.waiter) {
            this.doc.save('Reporte_Bus_' + this.Currid + '_' + this.Currfecha + '.pdf');
        }
        else {
            this.doc.text('Reporte del bus: ' + this.Currid, 20, 40);
            this.doc.text('Fecha: ' + this.Currfecha, 120, 40);
            this.doc.text('Gráficos:', 20, 337);
            this.agregarImagen("downtemperatura", 240);
            this.agregarImagen("downcombustible", 180);
            this.agregarImagen("downvelocida", 50);
            this.doc.addPage();
            this.waiter = false;
        }
        ;
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

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to DataWatch!</h1>\n <img src=\"theicon.png\" height=\"500\" style=\"opacity:0.5;\">\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginGuard = /** @class */ (function () {
    function LoginGuard(router) {
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('usuario') === null) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    };
    LoginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\n\t <div class=\"form-container\">\n\t \t<h1>Log in</h1>\n\t \t <!--<div class=\"row columns\">-->\n\n\t \t \t <label>Usuario:\n\t \t \t \t<input type text name=\"usuario\" id=\"usuario\" placeholder=\"Usuario\" ngModel>\n\t \t \t</label>\n            <label>Password:\n            \t<input type=password name=\"password\" id=\"password\" placeholder=\"Password\" ngModel>\n            </label>\n            <button type=\"submit\" class=\"btn btn-primary\">Log in</button>\n         <!--</div>-->\n     </div>\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginservice) {
        this.router = router;
        this.loginservice = loginservice;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        this.loginservice.checkCredentials(form.value.usuario, form.value.password).subscribe(function (rows) {
            if (rows) {
                console.log(rows[0].tipo);
                localStorage.setItem('usuario', form.value.usuario);
                localStorage.setItem('isAdmin', rows[0].tipo);
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/manejo-data/manejo-data.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manejo-data/manejo-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [hidden]=\"!Memes\">\n    <form (ngSubmit)=\"onSubmit()\" #GraficosComponent=\"ngForm\">\n        <div class=\"form-group\" >\n            <label for=\"Fecha\">Fecha de toma de datos</label>\n            <select class=\"form-control\"\n                    id=\"FechArch\"\n                    required\n                    [(ngModel)]=\"Dia\"\n                    name=\"fecha\"\n                    #fecha=\"ngModel\"\n                    (change)=\"PickDate($event.target.value)\">\n              <option *ngFor=\"let fecha of DataDias\" [value]=\"fecha\">{{fecha | date}}</option>\n            </select>\n         </div>\n         <p [hidden]=\"!Warning\"> Este archivo ya se encuentra en la base de datos </p>\n         <button type=\"submit\" class=\"btn btn-primary\" style=\"width:200px; background-color: #061539;\" [disabled]=\"!itCanBeDone\" >Procesar CSV</button>\n    </form>\n</div>\n\n<div class=\"container\" [hidden]=\"Memes\">\n    <div class=\"centered\">\n      <img src=\"/assets/load.svg\" >\n    </div>\n    <p></p>\n    <h1>Procesando CSV</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/manejo-data/manejo-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManejoDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_manejo_data_service_service__ = __webpack_require__("./src/app/services/manejo-data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManejoDataComponent = /** @class */ (function () {
    function ManejoDataComponent(ManData) {
        this.ManData = ManData;
        this.DataDias = [];
        this.itCanBeDone = false;
        this.Warning = false;
        this.Memes = true;
    }
    ManejoDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ManData.getFechas().subscribe(function (rows) {
            _this.Arrayfy(rows);
            console.log(_this.DataDias);
        });
    };
    ManejoDataComponent.prototype.Arrayfy = function (Archis) {
        for (var i = 0; i < Archis.length; i++) {
            this.DataDias[i] = Archis[i].replace('fms1-', '').replace('.csv', '');
        }
    };
    ManejoDataComponent.prototype.PickDate = function (fecharch) {
        var _this = this;
        this.Warning = false;
        this.ManData.CheckDB(fecharch).subscribe(function (rows) {
            if (rows[0]["Numero"] == 0) {
                _this.itCanBeDone = true;
            }
            else {
                _this.itCanBeDone = false;
                _this.Warning = true;
            }
        });
    };
    ManejoDataComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Memes = false;
        this.ManData.LetsGetParsing(this.Dia).subscribe(function (rows) {
        });
        setTimeout(function () { _this.Memes = true; }, 18000);
    };
    ManejoDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manejo-data',
            template: __webpack_require__("./src/app/manejo-data/manejo-data.component.html"),
            styles: [__webpack_require__("./src/app/manejo-data/manejo-data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_manejo_data_service_service__["a" /* ManejoDataServiceService */]])
    ], ManejoDataComponent);
    return ManejoDataComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n</head>\n\n\n<!-- justify-content-center-->\n<!--  style=\"background: linear-gradient(#4FABB5, #455B56);\"         style=\"background:rgba(0,0,0,0.5);\" -->\n<nav class=\"navbar navbar-expand-md navbar-wrapper\" >\n  <a class=\"navbar-brand  nav-bar-stylex\" href=\"#\">\n    <img src=\"theicon.png\" height=\"35\" class=\"d-inline-block align-top\" style=\"opacity: 0.5;\">\n    DataWatch Tecs\n  </a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\" style=\"border-color: rgb(255,255,255);\"></span>\n  </button>\n\n\n  <div class=\"collapse navbar-collapse\"  id=\"navbarNavDropdown\">\n\n    <ul class=\"navbar-nav\" style='text-align: right;'>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"/\" style=\"color: white;\">Inicio <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"/graficos/new\" style=\"color: white;\">Gráficos</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"/manejo-data\" style=\"color: white;\" [hidden]=\"!isAdmin\">Manejo Data</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
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
        this.isAdmin = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].interval(200).subscribe(function (x) {
            _this.checkifAdmin();
        });
    };
    NavbarComponent.prototype.checkifAdmin = function () {
        if (localStorage.getItem('isAdmin') != null) {
            this.isAdmin = (localStorage.getItem('isAdmin') == "Admin");
        }
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
    GraficosService.prototype.getFechas = function (id) {
        var url = '/api/v1/graficos/getFechas/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    GraficosService.prototype.getIds = function (data) {
        console.log(data.horaToma);
        var url = '/api/v1/graficos/getIds/' + data.horaToma;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    GraficosService.prototype.getData = function (data, diaEspecifico) {
        var url;
        if (diaEspecifico) {
            url = '/api/v1/graficos/getData/' + data.diaToma + '/' + data.idBus;
        }
        else {
            url = '/api/v1/graficos/getDataAll/' + data.idBus;
        }
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    GraficosService.prototype.getDIds = function () {
        return this.http.get('/api/v1/graficos/getDIds').map(function (res) { return res.json(); });
    };
    GraficosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GraficosService);
    return GraficosService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
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



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.checkCredentials = function (usr, pass) {
        var url = "/api/v1/login/" + usr + "/" + pass;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/manejo-data-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManejoDataServiceService; });
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



var ManejoDataServiceService = /** @class */ (function () {
    function ManejoDataServiceService(http) {
        this.http = http;
    }
    ManejoDataServiceService.prototype.getFechas = function () {
        return this.http.get('/api/v1/mandata/getFechas').map(function (res) { return res.json(); });
    };
    ManejoDataServiceService.prototype.CheckDB = function (archidate) {
        var url = "/api/v1/mandata/CheckDB/" + archidate;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ManejoDataServiceService.prototype.LetsGetParsing = function (archidate) {
        var url = "/api/v1/mandata/LetsGetParsing/" + archidate;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ManejoDataServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ManejoDataServiceService);
    return ManejoDataServiceService;
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