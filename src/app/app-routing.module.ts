import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*/import { EntradasComponent } from './entradas/entradas.component';
import { IngresarEntradasComponent } from './ingresar-entradas/ingresar-entradas.component';/*/
import { GraficosComponent } from './graficos/graficos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
/*/    { path: '', component: GraficosComponent },
    { path: 'entradas/new', component: IngresarEntradasComponent }, /*/
    { path: 'graficos/new', component: GraficosComponent },
    { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
