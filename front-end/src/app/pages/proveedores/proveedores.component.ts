import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor( private proveedoreServicio:ProveedoresService  ) { }

  proveedores: any;

  ngOnInit(): void {

    this.obtenerProveedores();

  }

  obtenerProveedores(){
    this.proveedoreServicio.obtenerProveedores().subscribe( (data:any) => {
      this.proveedores = data.proveedores;
      console.log(data)
    } );
  }

}
