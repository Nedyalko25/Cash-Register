import { Producto } from './producto.model'
export class Comando {

	producto: Producto;
	cantidad: number;

	constructor(pProducto){

		this.producto = pProducto;
		this.cantidad = 1;
	}
}