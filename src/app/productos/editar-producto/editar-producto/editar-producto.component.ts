import { Component, Input, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Producto } from 'src/app/modelos/producto.interface';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  @Input() producto!: Producto;
  // un formulario
  form!: FormGroup;

  valoresRatingRate = [
    { id: 1, label: '1' },
    // { id: 1.5, label: '1.5' },
    { id: 2, label: '2' },
    // { id: 2.5, label: '2.5' },
    { id: 3, label: '3' },
    // { id: 3.5, label: '3.5' },
    { id: 4, label: '4' },
    // { id: 4.5, label: '4.5' },
    { id: 5, label: '5' }
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private activeModal: NgbModal
    ) { }


  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    console.log(this.producto, Math.round(this.producto.rating.rate))
    this.form = this.fb.group({
      id: [this.producto.id, [Validators.max(99999999), Validators.min(1)]],
      title: [this.producto.title, [Validators.required, Validators.maxLength(200)]],
      price: [this.producto.price, [Validators.required, Validators.min(1), Validators.max(10000000)]],
      ratingCount: [this.producto.rating.count, [Validators.required, Validators.min(1), Validators.max(10000000)]],
      ratingRate: [Math.round(this.producto.rating.rate), [Validators.required]],
      description: [this.producto.description, [Validators.required, Validators.maxLength(200)]],
      image: [this.producto.image, [Validators.required, Validators.maxLength(200)]],
      category: [this.producto.category, [Validators.required, Validators.maxLength(40)]]
    });
  }

  guardarProducto() {
    if (this.form.invalid) {
      return;
    }
    this.form.disable();
    this.http.post<Producto>(environment.apiStore + 'products', this.form.value).subscribe(response => {
        this.form.enable();
        this.form.reset();
        // this.productoCreado.emit(response);
        this.activeModal.dismissAll(response);
    });
    console.log(this.form);
  }

}
