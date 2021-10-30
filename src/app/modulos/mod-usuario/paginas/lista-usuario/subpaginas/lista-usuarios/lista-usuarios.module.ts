import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './lista-usuarios.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ListaUsuariosComponent}
    ])
  ]
})
export class ListaUsuariosModule { }
