import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EntradasService {

  constructor( private servicio:HttpClient  ) { }

  
  urlApi: string = 'http://localhost:3000/entradas';

  obtenerEntradas() {
    return this.servicio.get(this.urlApi);
  }
}
