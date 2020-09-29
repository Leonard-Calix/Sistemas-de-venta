import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResUsuarios } from '../interfaces/ResUsuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private servicio:HttpClient ) { }

  urlApi: string = 'http://localhost:3000/usuario';

  obtenerUsuario<ResUsuarios>() {
    return this.servicio.get(this.urlApi);
  }



}
