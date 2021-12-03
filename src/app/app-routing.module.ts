import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnlatadosComponent } from './components/categorias/enlatados/enlatados.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { BebidasComponent } from './components/categorias/bebidas/bebidas.component';
import { DetergentesComponent } from './components/categorias/detergentes/detergentes.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [
  { path:'', component:ArticulosComponent},
  { path:'header/enlatados', component:EnlatadosComponent},
  { path:'header/bebidas', component:BebidasComponent},
  { path:'header/detergentes', component:DetergentesComponent},
  { path:'header/carrito', component:CarritoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
