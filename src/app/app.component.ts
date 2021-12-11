import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Le envio esta data al HTML
  //Para mostrarla en el HTML uso {{ nombreDato}}
  title = 'gatitos';
  edad = 45;

  numeros = [45, 456, 58, 5454, 222];
}
