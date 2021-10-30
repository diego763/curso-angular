import { Producto } from './../../modulos/mod-publico/modelos/producto.interface';
import { CarroCompra, CarroCompraProducto } from './../../modulos/mod-publico/modelos/carro-compra.interface';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  carro: CarroCompra = {
    productos: [],
    cantidadTotal: 0,
    total: 0
  };

  carroCompra$ = new Subject<CarroCompra>();

  constructor() { 
    const carroLocalStorage = localStorage.getItem('carro');
    if (carroLocalStorage) {
      try {
        this.carro = JSON.parse(carroLocalStorage);
        this.carroCompra$.next(this.carro);
      } catch(_) {

      }
    }
  }

  agregarProducto(producto: Producto) {
    let flagEncontrado = false;
    this.carro.productos = this.carro.productos.map(productoCarro => {
      if (productoCarro.producto.id === producto.id) {
        productoCarro.cantidad++;
        flagEncontrado = true;
      }
      return productoCarro;
    });
    if (!flagEncontrado) {
      this.carro.productos.push({ producto, cantidad: 1 });
    }
    this.calcularTotal();
    this.calcularCantidadTotal();
    this.carroCompra$.next(this.carro);
    localStorage.setItem('carro', JSON.stringify(this.carro));
    console.log(this.carro);
  }

  eliminarLineaProducto(productoCarroAEliminar: CarroCompraProducto) {
    this.carro.productos = this.carro.productos.filter(productoCarro => {
      return productoCarro.producto.id !== productoCarroAEliminar.producto.id;
    });
    this.calcularTotal();
    this.calcularCantidadTotal();
    this.carroCompra$.next(this.carro);
    localStorage.setItem('carro', JSON.stringify(this.carro));
  }

  buscarProductoParaEliminarLineaProducto(productoCarroAEliminar: Producto) {
    const deleteProductCarro = this.buscarProductoEnCarro(productoCarroAEliminar);
    if(deleteProductCarro){
      this.eliminarLineaProducto(deleteProductCarro);
    }
  }

  buscarProductoEnCarro(producto: Producto) {
    return this.carro.productos.find(productoCarro => {
      return productoCarro.producto.id === producto.id;
    });
  }

  actualizarCantidadProducto(producto: Producto, type: 'plus' | 'minus' = 'minus') {
    let deleteProductCarro!: CarroCompraProducto;
    this.carro.productos = this.carro.productos.map(productoCarro => {

      if(productoCarro.producto.id === producto.id){
        if( type==='minus'){
          
          productoCarro.cantidad--;
          if(productoCarro.cantidad===0) deleteProductCarro = {...productoCarro};
          
        }
        else if(type==='plus'){
          productoCarro.cantidad++;
        }
      }
      return productoCarro;
    });

    if(deleteProductCarro){
      this.eliminarLineaProducto(deleteProductCarro);
    }
    else{
      this.calcularTotal();
      this.calcularCantidadTotal();
      this.carroCompra$.next(this.carro);
      localStorage.setItem('carro', JSON.stringify(this.carro));
    }
  }

  calcularTotal() {
    let total = 0;
    this.carro.productos.forEach(productoCarro => {
      total += productoCarro.cantidad * productoCarro.producto.price;
    })
    this.carro.total = total;
  }

  calcularCantidadTotal() {
    let total = 0;
    this.carro.productos.forEach(productoCarro => {
      total += productoCarro.cantidad;
    })
    this.carro.cantidadTotal = total;
  }
}
