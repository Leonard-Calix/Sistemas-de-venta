import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private servicio:HttpClient ) { }


  urlApi: string = 'http://localhost:3000/cliente';

  obtenerClientes() {
    return this.servicio.get(this.urlApi);
  }

}
