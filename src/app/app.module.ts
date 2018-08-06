import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GraficosComponent } from './graficos/graficos.component';
import { GraficosService } from './services/graficos.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ManejoDataServiceService } from './services/manejo-data-service.service';
import { ManejoDataComponent } from './manejo-data/manejo-data.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GraficosComponent,
    HomeComponent,
    ManejoDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    GraficosService,
    ManejoDataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
