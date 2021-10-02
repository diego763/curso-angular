import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Provincia } from './interfaces/provincia.interface';
import { Region } from './interfaces/region.interface';

@Component({
  selector: 'app-lista-regiones',
  templateUrl: './lista-regiones.component.html',
  styleUrls: ['./lista-regiones.component.css']
})
export class ListaRegionesComponent implements OnInit {

  titulo: string = 'Lista regiones Chile';
  cargandoRegiones: boolean = false
  cargandoProvincias: boolean = false

  regiones: Region[] = [];
  provincias: Provincia[] = [];

  regionClickeada?: Region = undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // cargarRegiones() {
  //   this.cargandoRegiones = true;
  //   console.log('se cargan las regiones');
  //   setTimeout(() => {
  //     const respuestaApi: Region[] = [
  //       {codigo:"15",tipo:"region",nombre:"Arica y Parinacota",lat:-18.5075,lng:-69.6451,url:"",codigo_padre:"00"},
  //       {codigo:"01",tipo:"region",nombre:"Tarapacá",lat:-20.164,lng:-69.5541,url:"",codigo_padre:"00"}
  //     ];
  //     console.log(respuestaApi);
  //     this.regiones = respuestaApi;
  //     console.log(this.regiones[0].nombre);
  //     this.cargandoRegiones = false;
  //   }, 2000);
  // }

  cargarRegiones() {
    const apiGobierno = environment.apiGobierno;
    console.log(apiGobierno);
    this.cargandoRegiones = true;
    console.log('se cargan las regiones');
    this.http.get<Region[]>(apiGobierno).subscribe((respuesta) => {
      this.regiones = respuesta;
      this.cargandoRegiones = false;
    });
  }

  // async cargarRegiones() {
  //   const apiGobierno = environment.apiGobierno;
  //   console.log(apiGobierno);
  //   this.cargandoRegiones = true;
  //   console.log('se cargan las regiones');
  //   const promesa = this.http.get<Region[]>(apiGobierno).toPromise();
  //   this.regiones = await promesa; 
  //   this.cargandoRegiones = false;
  // }

  mostrarCargandoRegiones(): boolean {
    return this.cargandoRegiones;
  }

  mostrarProvincias(region: Region) {
    // console.log('mostrar Provincias');
    // console.log(region.nombre);

    this.regionClickeada    = region;
    let apiProvincias       = environment.apiGobierno;
    apiProvincias           = `${apiProvincias}/${region.codigo}/provincias`;
    this.cargandoProvincias = true;

    this.http.get<Provincia[]>(apiProvincias).subscribe((respuesta) => {
      this.provincias = respuesta;
      this.cargandoProvincias = false;
    });
  }


}
