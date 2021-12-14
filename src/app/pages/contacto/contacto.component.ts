import { Component, OnInit } from '@angular/core';
//importamos el servicio
import { CatNinjaService } from '../../cat-ninja.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(
    private catNinjaService: CatNinjaService
  ) { }
// 'thisdata' puede ser cualquier nombre "contenido"
  data: any;

  //llamamos la función que va ejecutar la llamda puede ser cualquier nombre
  mostrarFact() {
    this.catNinjaService.getKittens().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }


  //Apenas termina de cargar se ejecuta
  // onInit: Cuando terminó de pre-cargar el componente
  ngOnInit(): void {
    this.mostrarFact();
  }

}
