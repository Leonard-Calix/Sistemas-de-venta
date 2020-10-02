import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(  private servicio:HttpClient ) { }

  urlApi: string = 'http://localhost:3000/cliente';

  obtenerProductos() {
    return this.servicio.get(this.urlApi);
  }

}
