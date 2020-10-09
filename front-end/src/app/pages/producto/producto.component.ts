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

    this.obtenerproductos();
  }


  obtenerproductos(){
    this.productoServicio.obtenerProductos().subscribe( (data:any) => {
      this.productos = data.productos;
      //console.log(data)
    } );
  }




}
