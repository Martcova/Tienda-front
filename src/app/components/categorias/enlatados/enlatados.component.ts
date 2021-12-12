import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enlatados',
  templateUrl: './enlatados.component.html',
  styleUrls: ['./enlatados.component.css']
})
export class EnlatadosComponent implements OnInit {

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
