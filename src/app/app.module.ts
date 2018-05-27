import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GraficosComponent } from './graficos/graficos.component';
import { GraficosService } from './services/graficos.service';
import { EntradasService } from './services/entradas.service';
import { GetFilenameService } from './get-filename.service';
import { NavbarComponent } from './navbar/navbar.component';
import { IngresarEntradasComponent } from './ingresar-entradas/ingresar-entradas.component';
import { EntradasComponent } from './entradas/entradas.component';
import { ParserComponent } from './parser/parser.component';
import { ParserCsvDirective } from './parser-csv.directive';

@NgModule({
  declarations: [
    AppComponent,
    EntradasComponent,
    NavbarComponent,
    IngresarEntradasComponent,
    GraficosComponent,
    ParserComponent,
    ParserCsvDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [EntradasService, GraficosService, GetFilenameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
