import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:any;

  constructor( private usuarioService:UsuariosService ) { }

  ngOnInit(): void {

    this.obtenerUsuarios();
  }


  obtenerUsuarios(){
    this.usuarioService.obtenerUsuario().subscribe( (data:any) =>{
      this.usuarios = data.usuarios;
      //console.log(data)
    });
  }

}
