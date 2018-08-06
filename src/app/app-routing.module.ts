import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*/import { EntradasComponent } from './entradas/entradas.component';
import { IngresarEntradasComponent } from './ingresar-entradas/ingresar-entradas.component';/*/
import { GraficosComponent } from './graficos/graficos.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
=======
import { ManejoDataComponent } from './manejo-data/manejo-data.component';

>>>>>>> b508b95cda86afedb098a91950bc7277f6bb778e

const routes: Routes = [
/*/    { path: '', component: GraficosComponent },
    { path: 'entradas/new', component: IngresarEntradasComponent }, /*/
<<<<<<< HEAD
    { path: 'graficos/new', component: GraficosComponent,canActivate:[LoginGuard] },
    { path: '', component: HomeComponent,canActivate:[LoginGuard]},
    { path: 'login', component: LoginComponent},

=======
    { path: 'graficos/new', component: GraficosComponent },
    { path: '', component: HomeComponent},
    { path: 'manejo-data', component: ManejoDataComponent}
>>>>>>> b508b95cda86afedb098a91950bc7277f6bb778e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
