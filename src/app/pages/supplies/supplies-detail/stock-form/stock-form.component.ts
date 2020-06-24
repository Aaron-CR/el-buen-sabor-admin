import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ArticuloInsumo } from 'src/app/core/models/articulos/articulo-insumo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent implements OnInit {

  public localData: ArticuloInsumo;
  public stockForm: FormGroup;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ArticuloInsumo,
    public dialogRef: MatDialogRef<StockFormComponent>,
    public formBuilder: FormBuilder
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.stockForm = this.formBuilder.group({
      id: [this.localData.id],
      ultimaActualizacion: [this.localData.ultimaActualizacion],
      oculto: [this.localData.oculto],
      cantidad: [this.localData.denominacion, [Validators.required]],
      fechaMovimiento: [this.localData.descripcion],
      operacion: [this.localData.descripcion]
    });
  }

  onAction() {

  }

  onCancel() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  errorHandling = (control: string, error: string) => {
    return this.stockForm.controls[control].hasError(error);
  }
}
