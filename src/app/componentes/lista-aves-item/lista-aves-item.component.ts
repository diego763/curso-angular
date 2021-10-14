import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Ave } from '../lista-aves/data/lista-ave.interface';

@Component({
  selector: 'app-lista-aves-item',
  templateUrl: './lista-aves-item.component.html',
  styleUrls: ['./lista-aves-item.component.css']
})
export class ListaAvesItemComponent implements OnInit {

  
  @Input() avesFiltradas : Ave[] = [];
  @Input() cargandoAves : boolean = false;
  
  aveClickeada!: Ave;

  @Output() aveClickeadaCallback = new EventEmitter<Ave>();
  
  constructor() { }
  ngOnInit(): void {
  }

  asignarAveClickeada(ave: Ave) {
    this.aveClickeada = ave;
    this.aveClickeadaCallback.emit(ave)
  }

}
