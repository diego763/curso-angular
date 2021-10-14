import { Ave } from './data/lista-ave.interface';
import { environment } from './../../../environments/environment';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CargaDetalleAveComponent } from '../carga-detalle-ave/carga-detalle-ave.component';
import { ListaAvesItemComponent } from '../lista-aves-item/lista-aves-item.component';

@Component({
  selector: 'app-lista-aves',
  templateUrl: './lista-aves.component.html',
  styleUrls: ['./lista-aves.component.css']
})
export class ListaAvesComponent implements OnInit {

  inputBusqueda: string = '';
  apiAves: string = environment.apiAves;

  cargandoAves: boolean = false;
  aves: Ave[] = [];
  avesFiltradas: Ave[] = [];

  aveClickeada !: Ave;


  @ViewChild('cargaDetalleAve', { static: false })
  cargaDetalleAveComponent!: CargaDetalleAveComponent;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.cargarAvesDeApi();
  }

  inputCambiado(event: any) {
    console.log('event', event);
    this.inputBusqueda = event.target.value;
    console.log('input cambiado', this.inputBusqueda);
  }

  buscarAve() {
    console.log('buscando ave...', this.inputBusqueda);
    this.avesFiltradas = this.aves.filter(
      // chincol: chinc, true | col, true | '', true
      ave => ave.name.spanish.toLowerCase().includes(this.inputBusqueda)
    );
    // Ejemplo
    if (this.cargaDetalleAveComponent) {
      this.cargaDetalleAveComponent.recargar();
    }
  }

  cargarAvesDeApi() {
    this.cargandoAves = true;
    this.http.get<Ave[]>(this.apiAves).subscribe(respuesta => {
      this.aves = respuesta;
      this.avesFiltradas = this.aves;
      this.cargandoAves = false;
    });
  }

  handleAveClickeada(ave : Ave){
    this.aveClickeada = ave;
  }

}
