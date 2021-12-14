import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatNinjaService {


  // Definimos que de manera predeterminada vamos a estar usando HttClient  y que lo vamis a llamar "htpp"
  constructor(
    private http: HttpClient
  ) { }

  // Constriir la URL (endpoint) de llamada
  fetchUrl = "https://catfact.ninja/fact";

  // Llamada de tipo get
  getKittens () {
    return this.http.get(this.fetchUrl);
  }

}
