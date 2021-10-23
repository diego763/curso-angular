import { Producto } from './../../../modelos/producto.interface';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  loading: boolean = true;
  productos: Producto[] = [];
  producto !: Producto;

  constructor(
    private http: HttpClient,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.loading = true;
    this.http.get<Producto[]>(environment.apiStore + 'products').subscribe(response => {
      console.log(response);
      this.productos = response;
      this.loading = false;
    });
  }

  abrirModal(content: any) {
    this.modalService.open(content).result.then((result) => {
      console.log('result', result);
    }, (reason) => {
      console.log('reason', reason);
      this.cargarProductos();
    });
  }

  abrirEditModal(content: any, producto: Producto) {
    this.producto = producto;
    this.modalService.open(content).result.then((result) => {
      console.log('result', result);
    }, (reason) => {
      console.log('reason', reason);
      this.cargarProductos();
    });
  }

}
