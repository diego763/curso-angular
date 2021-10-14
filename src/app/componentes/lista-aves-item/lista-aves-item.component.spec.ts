import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAvesItemComponent } from './lista-aves-item.component';

describe('ListaAvesItemComponent', () => {
  let component: ListaAvesItemComponent;
  let fixture: ComponentFixture<ListaAvesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAvesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAvesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
