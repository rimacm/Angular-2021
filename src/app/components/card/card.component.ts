import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  // El valor predeterminado de la imagen es ... roma
  @Input() imagen = "assets/images/roma.jpg";
  @Input() categoria?: string;
  @Input() titulo = "FALTA TITULO";
  @Input() ofertaInfalible = false;
  @Input() precio = 1234;

  ngOnInit(): void {
  }

}