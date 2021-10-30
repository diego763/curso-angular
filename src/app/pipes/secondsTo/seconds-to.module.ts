import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondsToPipe } from './seconds-to.pipe';



@NgModule({
  declarations: [
    SecondsToPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SecondsToPipe
  ]
})
export class SecondsToModule { }
