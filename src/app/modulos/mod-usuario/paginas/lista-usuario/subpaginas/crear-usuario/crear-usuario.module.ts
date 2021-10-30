import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearUsuarioComponent } from './crear-usuario.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CrearUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CrearUsuarioComponent}
    ])
  ]
})
export class CrearProductoModule { }
