import { Component, OnInit, Optional, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Categoria } from 'src/app/core/models/articulos/categoria';
import { ArticuloManufacturado } from 'src/app/core/models/articulos/articulo-manufacturado';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { DetalleReceta } from 'src/app/core/models/articulos/detalle-receta';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { ArticuloInsumo } from 'src/app/core/models/articulos/articulo-insumo';

@Component({
  selector: 'app-manufactured-form',
  templateUrl: './manufactured-form.component.html',
  styleUrls: ['./manufactured-form.component.scss']
})
export class ManufacturedFormComponent implements OnInit, AfterViewInit {

  public categorias: Array<Categoria>;
  public localData: ArticuloManufacturado;
  public action: string;
  public manufacturedForm: FormGroup;
  public displayedColumns = ['insumo', 'cantidad', 'oculto', 'acciones'];

  get imagen(): FormControl {
    return this.manufacturedForm.get('imagen') as FormControl;
  }

  get tiempoEstimadoCocina(): FormControl {
    return this.manufacturedForm.get('tiempoEstimadoCocina') as FormControl;
  }

  get detallesReceta(): FormArray {
    return this.manufacturedForm.get('detallesReceta') as FormArray;
  }

  @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ArticuloManufacturado,
    public dialogRef: MatDialogRef<ManufacturedFormComponent>,
    public dialog: MatDialog,
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

  ngAfterViewInit() {
    this.stepper._getIndicatorType = () => 'number';
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
      tiempoEstimadoCocina: [this.localData.tiempoEstimadoCocina ? this.localData.tiempoEstimadoCocina : 0],
      categoria: [this.localData.categoria, [Validators.required]],
      detallesReceta: this.formBuilder.array([])
    });
    this.setDetails();
  }

  setDetails() {
    if (this.localData.detallesReceta) {
      this.localData.detallesReceta.forEach(detail => {
        return this.detallesReceta.push(this.formBuilder.group(detail));
      });
    }
  }

  getCategories() {
    return this.http.get(`http://localhost:8080/api/v1/articulos/categorias/all`).pipe()
      .subscribe((data: Array<Categoria>) => this.categorias = data);
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

  onSubmit(object: any) {
    this.dialog.open(DetailFormComponent, {
      panelClass: 'app-dialog',
      data: object,
      width: '65%'
    }).afterClosed().subscribe(result => {
      if (result.event === 'Añadir') {
        this.create(result.data);
      } else if (result.event === 'Editar') {
        this.update(result.data);
      }
    });
  }

  onDelete(item: any) {
    this.delete(item);
  }

  create(result: DetalleReceta) {
    this.detallesReceta.value.push(result);
    this.notifyTable();
  }

  update(result: DetalleReceta) {
    this.detallesReceta.value.filter((value: DetalleReceta) => {
      if (value.insumo === result.insumo) {
        const index = this.detallesReceta.value.indexOf(value);
        this.detallesReceta.value[index] = result;
      }
    });
    this.notifyTable();
  }

  delete(result: DetalleReceta) {
    const newValue = this.detallesReceta.value.filter((value: DetalleReceta) =>
      value !== result
    );
    this.manufacturedForm.setControl('detallesReceta', this.formBuilder.array(newValue));
  }

  notifyTable() {
    this.manufacturedForm.setControl('detallesReceta', this.formBuilder.array([...this.detallesReceta.value]));
  }

  errorHandling = (control: string, error: string) => {
    return this.manufacturedForm.controls[control].hasError(error);
  }

  formatLabel(value: number) {
    return value + 'm';
  }

  getPublicClass(row) {
    return row.oculto ? 'public' : 'private';
  }

}
