import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {
  
 tarjetas = [
    {
      imagen: "assets/images/roma.jpg",
      categoria: "Vuelo",
      titulo: "Viajá a Roma",
      ofertaInfalible: false,
      precio: 654299,
    },
    {
      imagen: "assets/images/miami.jpg",
      categoria: "Hotel",
      titulo: "Visita Miami",
      ofertaInfalible: true,
      precio: 6542,
    },
    {
      imagen: "assets/images/constitucion.jpg",
      categoria: "Hotel",
      titulo: "Conoce Constitución",
      ofertaInfalible: false,
      precio: 3682,
    },
    {
      imagen: "assets/images/obelisco.jpg",
      categoria: "Paquete",
      titulo: "Visita el Ovelisco",
      ofertaInfalible: false,
      precio: 823985,
    }
  ];

  //Preparo los datos a enviar
  // imagen = "assets/images/roma.jpg";
  // categoria = "Vuelo";
  // titulo = "Viajá a Paris";
  // ofertaInfalible = true;
  // precio = 684525;

  constructor() { }

  ngOnInit(): void {
  }

}
