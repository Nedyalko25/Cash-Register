import { Component, OnInit } from '@angular/core';
import { Producto } from '../Modelo/producto.model';
import { Comando } from '../Modelo/comando.modelo';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	arrComida : Producto [];
	arrBebida : Producto [];
	titleComida: string;
	titleBebida: string;
  arrSelect: Comando[];
  total: number;
  

  constructor() {

  	this.titleBebida = 'BEBIDA'
  	this.titleComida = 'COMIDA'
    this.total = 0;

    this.arrSelect= [];

    this.arrComida = [
    new Producto('Burguer', 9 , 'hamburguesa.jpg'),
    new Producto('Pizza', 11 , 'pizza.jpg'),
    new Producto('Patatas', 4 , 'patatas.jpg'),
    new Producto('Ensalada', 6 , 'ensalada.jpg'),
    new Producto('Sopa', 5 ,'sopa.jpg'),
    new Producto('Tarta', 3 ,'tarta.jpg')
    ]
    this.arrBebida = [
    new Producto('Agua', 1 ,'agua.jpg'),
    new Producto('Coca-Cola', 2 , 'coca.jpg'),
    new Producto('Cerveza', 2 , 'cerveza.jpg')
    ]
    //console.log(this.arrComida);
    //console.log(this.arrBebida);

  }

  ngOnInit() {

  }
  handleEnvioProducto(p){
    this.total +=  p.precio;

    for( let i = 0 ; i < this.arrSelect.length ; i++){

      if( this.arrSelect[i].producto.nombre == p.nombre){
        this.arrSelect[i].cantidad +=1;
        //console.log(this.arrSelect[i].cantidad)
        //console.log(this.arrSelect[i].producto.nombre)
        
        return;

      }
    }

    this.arrSelect.push(new Comando(p))
    //console.log(this.arrSelect) 
  }
  handleBorrar(i){
     
    if(this.arrSelect[i].cantidad > 1){
      this.arrSelect[i].cantidad -= 1
      this.total -= this.arrSelect[i].producto.precio;
      
    }else{
      this.total -= this.arrSelect[i].producto.precio;
      this.arrSelect.splice(i,1)
      
    }
    
    
    
  }
}
 