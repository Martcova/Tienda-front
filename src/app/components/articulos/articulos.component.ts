import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

verAlert(){
  Swal.fire(
   'Correcto!', // Título
    'El producto se ha agregado al carrito', // Mensaje
    'success' // Tipo de alerta
  )
}

}
