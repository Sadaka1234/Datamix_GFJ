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
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { ManejoDataServiceService } from './services/manejo-data-service.service';
import { ManejoDataComponent } from './manejo-data/manejo-data.component';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GraficosComponent,
    HomeComponent,
    LoginComponent,
    ManejoDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],

  providers: [
    GraficosService,
    ManejoDataServiceService,
    LoginGuard,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
