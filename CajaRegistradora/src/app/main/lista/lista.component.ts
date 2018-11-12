import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { Producto } from '../../Modelo/producto.model';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

	@Input() arrSelect: Producto[];
	@Input() total: number;
  @Output() borrarProducto = new EventEmitter()
	



  constructor() {


  }

  ngOnInit() {
  }
  handleDelete(pSeleccionado){
    this.borrarProducto.emit(pSeleccionado)
  }




}
