import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*/import { EntradasComponent } from './entradas/entradas.component';
import { IngresarEntradasComponent } from './ingresar-entradas/ingresar-entradas.component';/*/
import { GraficosComponent } from './graficos/graficos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { ManejoDataComponent } from './manejo-data/manejo-data.component';

const routes: Routes = [
/*/    { path: '', component: GraficosComponent },
    { path: 'entradas/new', component: IngresarEntradasComponent }, /*/
    { path: 'graficos/new', component: GraficosComponent,canActivate:[LoginGuard] },
    { path: '', component: HomeComponent,canActivate:[LoginGuard]},
    { path: 'login', component: LoginComponent},
    { path: 'manejo-data', component: ManejoDataComponent,canActivate:[LoginGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
