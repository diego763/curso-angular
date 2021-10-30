import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuarioComponent } from './lista-usuario.component';
import { RouterModule } from '@angular/router';
import { MOD_USUARIO_USUARIO_ROUTES } from './lista-usuario.routing';


@NgModule({
  declarations: [
    ListaUsuarioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MOD_USUARIO_USUARIO_ROUTES)
  ]
})
export class ListaUsuarioModule { }
