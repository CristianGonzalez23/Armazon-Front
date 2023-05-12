import { Component } from '@angular/core';
import { DetalleCompraDTO } from 'src/app/modelo/detalle-compra-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent {

  productos:DetalleCompraDTO[];
  valorTotal:number;
  unidades:number = 0;

  constructor(private carritoService:CarritoService, private productoService:ProductoService) {
  
    this.productos = []; 
    this.valorTotal = 0;
    const listaCodigos = this.carritoService.listar();
  
    if(listaCodigos.length > 0){
  
      for( let cod of listaCodigos ){
  
        const producto = this.productoService.obtener(cod);
  
        if(producto!=null){
  
          this.productos.push(new DetalleCompraDTO(this.unidades, producto.codigoProducto));
          this.valorTotal += producto.precio;
  
        }
  
      }
  
    }
  
  }
  
  calcularValor():void{
  
    this.valorTotal = 0;
  
    for( let item of this.productos ){
  
      if(item.unidades >= 0){
  
        const producto = this.productoService.obtener(item.codigoPublicacionProducto);
  
        if(producto!=null){
  
          this.valorTotal += (producto.precio * item.unidades);
  
        }
  
      }
  
    }
  
  }

  eliminarProducto(item: any) {
    const index = this.productos.indexOf(item);
    if (index !== -1) {
      this.productos.splice(index, 1);
      this.calcularValor();
    }
  }  

}