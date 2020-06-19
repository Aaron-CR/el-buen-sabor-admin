import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Rubro } from 'src/app/core/models/articulos/rubro';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-supplies-categories-form',
  templateUrl: './supplies-categories-form.component.html',
  styleUrls: ['./supplies-categories-form.component.scss']
})
export class SuppliesCategoriesFormComponent implements OnInit {

  /* TEMPORAL */
  rubros: Rubro[] = [
    { id: 1, ultimaActualizacion: null, oculto: false, eliminado: false, denominacion: 'Carnes', rubroPadre: null },
    { id: 2, ultimaActualizacion: null, oculto: false, eliminado: false, denominacion: 'Lácteos', rubroPadre: null },
    { id: 3, ultimaActualizacion: null, oculto: false, eliminado: false, denominacion: 'Harinas', rubroPadre: null },
  ];

  public localData: Rubro;
  public action: string;
  public suppliesCategoriesForm: FormGroup;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Rubro,
    public dialogRef: MatDialogRef<SuppliesCategoriesFormComponent>,
    public formBuilder: FormBuilder
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
    this.buildForm();
    this.setAction();
  }

  buildForm() {
    this.suppliesCategoriesForm = this.formBuilder.group({
      id: [this.localData.id],
      ultimaActualizacion: [this.localData.ultimaActualizacion],
      oculto: [this.localData.oculto],
      denominacion: [this.localData.denominacion, [Validators.required]],
      rubroPadre: [this.localData.rubroPadre]
    });
  }

  setAction() {
    this.action = (this.localData && (Object.keys(this.localData).length === 0)) ? 'Añadir' : 'Editar';
  }

  onAction() {
    this.dialogRef.close({ event: this.action, data: this.suppliesCategoriesForm.value });
  }

  onCancel() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  errorHandling = (control: string, error: string) => {
    return this.suppliesCategoriesForm.controls[control].hasError(error);
  }

}
