import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../Modelo/producto.model';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

	@Input() arrProductos: Producto []
	@Input() titulo: string;
  @Output() enviarProducto = new EventEmitter()

  constructor() { 

  	
  }

  ngOnInit() {
  	
  }
  handleClick(pSeleccionado){
    this.enviarProducto.emit(pSeleccionado)
     
   }


}
