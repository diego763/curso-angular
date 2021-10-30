import { CarroService } from './../../../../../../servicios/carro/carro.service';
import { Producto } from './../../../../modelos/producto.interface';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarroCompra } from 'src/app/modulos/mod-publico/modelos/carro-compra.interface';

@Component({
  selector: 'app-detalle-lista-producto',
  templateUrl: './detalle-lista-producto.component.html',
  styleUrls: ['./detalle-lista-producto.component.css']
})
export class DetalleListaProductoComponent implements OnInit, OnDestroy {

  @Input() producto!: Producto;
  productoEnCarro : boolean = false;

  carroCompra!: CarroCompra;
  carroCompraSubcription$!: Subscription;

  constructor(
    private carroService: CarroService
  ) { }

  ngOnInit(): void {
    //busca el iniciar el componente el producto para determinar si esta en el carro o no
    const product = this.carroService.buscarProductoEnCarro(this.producto);
    if(product) this.productoEnCarro = true;

    //observador para actualizar la variable que indica si el producto esta en el carro o no
    this.carroCompraSubcription$ = this.carroService.carroCompra$.subscribe(carro => {
      const product = this.carroService.buscarProductoEnCarro(this.producto);
      if(product) this.productoEnCarro = true;
      else this.productoEnCarro = false;
      console.log('listado de productos:', product, this.productoEnCarro);
    });
  }

  agregarAlCarro() {
    this.carroService.agregarProducto(this.producto);

    //--otra forma de realizarlo sin el observador
    // //actualiza la variable que indica si el producto esta en el carro o no
    // this.productoEnCarro = true;
  }

  quitarUnAUnidadDelCarro() {
    //actualiza la cantidad de productos en el carro
    this.carroService.actualizarCantidadProducto(this.producto, 'minus');

    //--otra forma de realizarlo sin el observador
    // //busca el producto, si no existe cambia el estado de la variable, de producto en el carro
    // const product = this.carroService.buscarProductoEnCarro(this.producto);
    // if(!product) this.productoEnCarro = false;

    console.log('tarea');
  }

  quitarLineaDelCarro() {
    //quita el producto del carro
    this.carroService.buscarProductoParaEliminarLineaProducto(this.producto);

    //--otra forma de realizarlo sin el observador
    // //actualiza la variable que indica si el producto esta en el carro o no
    // this.productoEnCarro = false;
    console.log('tarea');
  }

  ngOnDestroy() {
    this.carroCompraSubcription$.unsubscribe();
  }
}
