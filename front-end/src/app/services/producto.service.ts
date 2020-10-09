import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(  private servicio:HttpClient ) { }

  urlApi: string = 'http://localhost:3000/productos';

  obtenerProductos() {
    return this.servicio.get(this.urlApi);
  }

}
