import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor( private servicio:HttpClient ) { }

  urlApi: string = 'http://localhost:3000/proveedores';

  obtenerProveedores() {
    return this.servicio.get(this.urlApi);
  }

}
