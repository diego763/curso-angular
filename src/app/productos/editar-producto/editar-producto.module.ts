import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditarProductoComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    // Para usar los formularios
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    EditarProductoComponent    
  ]
})
export class EditarProductoModule { }
