import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: RegistroComponent }
    ])
  ]
})
export class RegistroModule { }
