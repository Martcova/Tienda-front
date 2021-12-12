import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detergentes',
  templateUrl: './detergentes.component.html',
  styleUrls: ['./detergentes.component.css']
})
export class DetergentesComponent implements OnInit {

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
