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
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
=======
import { ManejoDataServiceService } from './services/manejo-data-service.service';
import { ManejoDataComponent } from './manejo-data/manejo-data.component';

>>>>>>> b508b95cda86afedb098a91950bc7277f6bb778e


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GraficosComponent,
    HomeComponent,
<<<<<<< HEAD
    LoginComponent
=======
    ManejoDataComponent
>>>>>>> b508b95cda86afedb098a91950bc7277f6bb778e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
<<<<<<< HEAD
  providers: [GraficosService, LoginGuard],
=======
  providers: [
    GraficosService,
    ManejoDataServiceService
  ],
>>>>>>> b508b95cda86afedb098a91950bc7277f6bb778e
  bootstrap: [AppComponent]
})
export class AppModule { }
