import { Component, OnInit } from '@angular/core';
import { EntradasService } from 'src/app/services/entradas.service';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  entradas: any;

  constructor( private entradasServicio:EntradasService  ) { }

  ngOnInit(): void {

    this.obtenerEntradas();


  }

  
  obtenerEntradas(){
    this.entradasServicio.obtenerEntradas().subscribe( (data:any) => {
      this.entradas = data.entradas;
      console.log(data)
    } );
  }

}
