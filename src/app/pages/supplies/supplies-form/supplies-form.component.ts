import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ArticuloInsumo } from 'src/app/core/models/articulos/articulo-insumo';
import { Rubro } from 'src/app/core/models/articulos/rubro';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

export interface UnidadMedida {
  abreviatura: string;
  denominacion: string;
}

const UNIDADES_DATA: UnidadMedida[] = [
  { abreviatura: 'u', denominacion: 'unidad' },
  { abreviatura: 'g', denominacion: 'gramo' },
  { abreviatura: 'kg', denominacion: 'kilogramo' },
  { abreviatura: 'ml', denominacion: 'mililitro' },
  { abreviatura: 'l', denominacion: 'litro' },
  { abreviatura: 'dl', denominacion: 'decalitro' },
  { abreviatura: 'c.c.', denominacion: 'cucharada de café' },
  { abreviatura: 'c.p.', denominacion: 'cucharada de postre' },
  { abreviatura: 'c.s.', denominacion: 'cucharada sopera' },
  { abreviatura: 'oz', denominacion: 'onza' },
  { abreviatura: 'lb', denominacion: 'libra' },
  { abreviatura: 'fl oz', denominacion: 'onza fluida' },
  { abreviatura: 'cm', denominacion: 'centímetro' },
  { abreviatura: 'pulg.', denominacion: 'pulgada' },
];

@Component({
  selector: 'app-supplies-form',
  templateUrl: './supplies-form.component.html',
  styleUrls: ['./supplies-form.component.scss']
})
export class SuppliesFormComponent implements OnInit {

  public rubros: Array<Rubro>;
  public unidades = UNIDADES_DATA;
  public localData: ArticuloInsumo;
  public action: string;
  public suppliesForm: FormGroup;

  get imagen(): FormControl {
    return this.suppliesForm.get('imagen') as FormControl;
  }

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ArticuloInsumo,
    public dialogRef: MatDialogRef<SuppliesFormComponent>,
    public formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
    this.buildForm();
    this.setAction();
    this.getCategories();
  }

  buildForm() {
    this.suppliesForm = this.formBuilder.group({
      id: [this.localData.id],
      ultimaActualizacion: [this.localData.ultimaActualizacion],
      oculto: [this.localData.oculto],
      esInsumo: [this.localData.esInsumo],
      denominacion: [this.localData.denominacion, [Validators.required]],
      descripcion: [this.localData.descripcion],
      imagen: [this.localData.imagen, [Validators.required]],
      costo: [this.localData.costo, [Validators.required]],
      precio: [this.localData.precio, [Validators.required]],
      stockActual: [this.localData.stockActual, [Validators.required]],
      stockMaximo: [this.localData.stockMaximo, [Validators.required]],
      stockMinimo: [this.localData.stockMinimo, [Validators.required]],
      unidadMedida: [this.localData.unidadMedida, [Validators.required]],
      historialStock: [this.localData.historialStock ? this.localData.historialStock : []],
      rubro: [this.localData.rubro, [Validators.required]],
    });
  }

  getCategories() {
    return this.http.get(`http://localhost:8080/api/v1/articulos/rubros/all`).pipe()
      .subscribe((data: Array<Rubro>) => this.rubros = data);
  }

  setAction() {
    this.action = (this.localData && (Object.keys(this.localData).length === 0)) ? 'Añadir' : 'Editar';
  }

  onAction() {
    this.dialogRef.close({ event: this.action, data: this.suppliesForm.value });
  }

  onCancel() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  errorHandling = (control: string, error: string) => {
    return this.suppliesForm.controls[control].hasError(error);
  }

}
