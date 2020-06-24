import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Rubro } from 'src/app/core/models/articulos/rubro';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-supplies-categories-form',
  templateUrl: './supplies-categories-form.component.html',
  styleUrls: ['./supplies-categories-form.component.scss']
})
export class SuppliesCategoriesFormComponent implements OnInit {

  public rubros: Array<Rubro>;
  public localData: Rubro;
  public action: string;
  public suppliesCategoriesForm: FormGroup;

  get imagen(): FormControl {
    return this.suppliesCategoriesForm.get('imagen') as FormControl;
  }

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Rubro,
    public dialogRef: MatDialogRef<SuppliesCategoriesFormComponent>,
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
    this.suppliesCategoriesForm = this.formBuilder.group({
      id: [this.localData.id],
      ultimaActualizacion: [this.localData.ultimaActualizacion],
      oculto: [this.localData.oculto],
      denominacion: [this.localData.denominacion, [Validators.required]],
      rubroPadre: [this.localData.rubroPadre],
      imagen: [this.localData.imagen, [Validators.required]]
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
    this.dialogRef.close({ event: this.action, data: this.suppliesCategoriesForm.value });
  }

  onCancel() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  errorHandling = (control: string, error: string) => {
    return this.suppliesCategoriesForm.controls[control].hasError(error);
  }

}
