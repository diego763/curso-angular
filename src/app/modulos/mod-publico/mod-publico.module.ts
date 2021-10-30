import { RutModule } from './../../pipes/rut/rut.module';
import { NavegacionPrincipalModule } from './../../componentes/navegacion-principal/navegacion-principal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModPublicoComponent } from './mod-publico.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { MOD_PUBLICO_ROUTES } from './mod-publico.routing';
import { SecondsToModule } from 'src/app/pipes/secondsTo/seconds-to.module';



@NgModule({
  declarations: [
    ModPublicoComponent,
    InicioComponent,
    ContactoComponent,
  ],
  imports: [
    CommonModule,
    NavegacionPrincipalModule,
    RutModule,
    SecondsToModule,
    RouterModule.forChild(MOD_PUBLICO_ROUTES)
  ]
})
export class ModPublicoModule { }
