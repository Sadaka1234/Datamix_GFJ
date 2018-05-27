import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntradasComponent } from './entradas/entradas.component';
import { IngresarEntradasComponent } from './ingresar-entradas/ingresar-entradas.component';
import { GraficosComponent } from './graficos/graficos.component';
import { ParserComponent } from './parser/parser.component';

const routes: Routes = [
    { path: '', component: EntradasComponent },
    { path: 'entradas/new', component: IngresarEntradasComponent },
    { path: 'graficos/new', component: GraficosComponent },
    { path: 'parser', component: ParserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
