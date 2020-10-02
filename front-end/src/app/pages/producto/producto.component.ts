import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(  private productoServicio:ProductoService  ) { }

  productos: any;


  ngOnInit(): void {

    this.productos();
  }


  obtenerProveedores(){
    this.productoServicio.obtenerProductos().subscribe( (data:any) => {
      this.productos = data.proveedores;
      console.log(data)
    } );
  }




}
