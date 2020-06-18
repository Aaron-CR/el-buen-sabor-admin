import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Categoria } from 'src/app/core/models/articulos/categoria';

@Component({
  selector: 'app-manufactured-form',
  templateUrl: './manufactured-form.component.html',
  styleUrls: ['./manufactured-form.component.scss']
})
export class ManufacturedFormComponent implements OnInit {

  categorias: Categoria[] = [
    { id: 1, oculto: false, eliminado: false, ultimaActualizacion: new Date(), denominacion: 'Pizzas', imagen: '🍕' },
    { id: 2, oculto: false, eliminado: false, ultimaActualizacion: new Date(), denominacion: 'Burgers', imagen: '🍔' },
    { id: 3, oculto: false, eliminado: false, ultimaActualizacion: new Date(), denominacion: 'Panchos', imagen: '🌭' },
    { id: 4, oculto: false, eliminado: false, ultimaActualizacion: new Date(), denominacion: 'Carnes', imagen: '🍖' },
    { id: 5, oculto: false, eliminado: false, ultimaActualizacion: new Date(), denominacion: 'Ensalada', imagen: '🥗' },
    { id: 6, oculto: false, eliminado: false, ultimaActualizacion: new Date(), denominacion: 'Pastas', imagen: '🍝' },
    { id: 7, oculto: false, eliminado: false, ultimaActualizacion: new Date(), denominacion: 'Asiatica', imagen: '🍣' },
    { id: 8, oculto: false, eliminado: false, ultimaActualizacion: new Date(), denominacion: 'Postres', imagen: '🧁' },
    { id: 9, oculto: false, eliminado: false, ultimaActualizacion: new Date(), denominacion: 'Desayuno', imagen: '☕' },
    { id: 10, oculto: false, eliminado: false, ultimaActualizacion: new Date(), denominacion: 'Bebidas', imagen: '🥤' },
  ];

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  formatLabel(value: number) {
    return value + 'm';
  }

}
