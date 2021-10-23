import { CategoriasModule } from './../categorias/categorias.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditarProductoModule } from './editar-producto/editar-producto.module';



@NgModule({
  declarations: [
    ListaProductosComponent,
    DetalleProductoComponent,
    CrearProductoComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    // Para usar los formularios
    FormsModule,
    ReactiveFormsModule,
    // Fin para usar los formularios
    CategoriasModule,
    EditarProductoModule,
  ],
  exports: [
    DetalleProductoComponent,
    ListaProductosComponent
  ]
})
export class ProductosModule { }
