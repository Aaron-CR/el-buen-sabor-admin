import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Categoria } from 'src/app/core/models/articulos/categoria';
import { ArticuloManufacturado } from 'src/app/core/models/articulos/articulo-manufacturado';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-manufactured-form',
  templateUrl: './manufactured-form.component.html',
  styleUrls: ['./manufactured-form.component.scss']
})
export class ManufacturedFormComponent implements OnInit {

  /* TEMPORAL */
  categorias: Categoria[] = [
    { id: 1, oculto: false, eliminado: false, ultimaActualizacion: null, denominacion: 'Pizzas', imagen: '🍕' },
    { id: 2, oculto: false, eliminado: false, ultimaActualizacion: null, denominacion: 'Burgers', imagen: '🍔' },
    { id: 3, oculto: false, eliminado: false, ultimaActualizacion: null, denominacion: 'Panchos', imagen: '🌭' },
    { id: 4, oculto: false, eliminado: false, ultimaActualizacion: null, denominacion: 'Carnes', imagen: '🍖' },
    { id: 5, oculto: false, eliminado: false, ultimaActualizacion: null, denominacion: 'Ensalada', imagen: '🥗' },
    { id: 6, oculto: false, eliminado: false, ultimaActualizacion: null, denominacion: 'Pastas', imagen: '🍝' },
    { id: 7, oculto: false, eliminado: false, ultimaActualizacion: null, denominacion: 'Asiatica', imagen: '🍣' },
    { id: 8, oculto: false, eliminado: false, ultimaActualizacion: null, denominacion: 'Postres', imagen: '🧁' },
    { id: 9, oculto: false, eliminado: false, ultimaActualizacion: null, denominacion: 'Desayuno', imagen: '☕' },
    { id: 10, oculto: false, eliminado: false, ultimaActualizacion: null, denominacion: 'Bebidas', imagen: '🥤' },
  ];

  public localData: ArticuloManufacturado;
  public action: string;
  public manufacturedForm: FormGroup;

  get imagen(): FormControl {
    return this.manufacturedForm.get('imagen') as FormControl;
  }

  get tiempoEstimadoCocina(): FormControl {
    return this.manufacturedForm.get('tiempoEstimadoCocina') as FormControl;
  }

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ArticuloManufacturado,
    public dialogRef: MatDialogRef<ManufacturedFormComponent>,
    public formBuilder: FormBuilder
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
    this.buildForm();
    this.setAction();
  }

  buildForm() {
    this.manufacturedForm = this.formBuilder.group({
      id: [this.localData.id],
      ultimaActualizacion: [this.localData.ultimaActualizacion],
      oculto: [this.localData.oculto],
      denominacion: [this.localData.denominacion, [Validators.required]],
      descripcion: [this.localData.descripcion],
      imagen: [this.localData.imagen, [Validators.required]],
      precio: [this.localData.precio, [Validators.required]],
      tiempoEstimadoCocina: [this.localData.tiempoEstimadoCocina ? this.localData.tiempoEstimadoCocina : 0, [Validators.required]],
      categoria: [this.localData.categoria, [Validators.required]],
      detallesReceta: [this.localData.detallesReceta, [Validators.required]],
    });
  }

  setAction() {
    this.action = (this.localData && (Object.keys(this.localData).length === 0)) ? 'Añadir' : 'Editar';
  }

  onAction() {
    this.dialogRef.close({ event: this.action, data: this.manufacturedForm.value });
  }

  onCancel() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  errorHandling = (control: string, error: string) => {
    return this.manufacturedForm.controls[control].hasError(error);
  }

  formatLabel(value: number) {
    return value + 'm';
  }

}
