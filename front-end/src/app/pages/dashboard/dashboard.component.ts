import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from 'src/app/interfaces/Usuarios';
import { UsuariosService } from '../../services/usuarios.service';
import { ResUsuarios } from '../../interfaces/ResUsuarios';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  usuarios:UsuarioInterface [];
  
  constructor( private servicioUsuario:UsuariosService ) { }

  
  ngOnInit(): void {

    this.obtenerUsuarios();

  }

  obtenerUsuarios(){
    this.servicioUsuario.obtenerUsuario().subscribe( (data:ResUsuarios) => {

      this.usuarios = data.usuarios;

      console.log(data)

    });
  }

}
