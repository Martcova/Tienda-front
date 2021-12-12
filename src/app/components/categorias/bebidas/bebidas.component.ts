import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

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
