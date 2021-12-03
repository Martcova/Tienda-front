import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { CargarScriptsService } from './cargar-scripts.service';
import { EnlatadosComponent } from './components/categorias/enlatados/enlatados.component';
import { BebidasComponent } from './components/categorias/bebidas/bebidas.component';
import { DetergentesComponent } from './components/categorias/detergentes/detergentes.component';
import { CarritoComponent } from './components/carrito/carrito.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticulosComponent,
    EnlatadosComponent,
    BebidasComponent,
    DetergentesComponent,
    CarritoComponent,
    
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ArticulosComponent,
    EnlatadosComponent,
    BebidasComponent,
    DetergentesComponent,
    CarritoComponent,

  ],
  providers: [ CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
