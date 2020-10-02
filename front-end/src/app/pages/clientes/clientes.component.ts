import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes:any;

  constructor(private clienteServicio:ClientesService  ) { }

  ngOnInit(): void {

    this.obtenerClientes();

  }

  obtenerClientes(){
    this.clienteServicio.obtenerClientes().subscribe( (data:any) => {
      this.clientes = data.clientes;
      console.log(data)
    } );
  }

}
