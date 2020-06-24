import { Component, OnInit, AfterViewInit, ViewChild, Optional, Inject } from '@angular/core';
import { Rol } from 'src/app/core/models/usuarios/rol';
import { Empleado } from 'src/app/core/models/usuarios/empleado';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Localidad } from 'src/app/core/models/direccion/localidad';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss']
})
export class EmployeesFormComponent implements OnInit, AfterViewInit {

  public roles: Array<Rol>;
  public localidades: Array<Localidad>;
  public localData: Empleado;
  public action: string;
  public employeesForm: FormGroup;

  get numero(): FormControl {
    return this.employeesForm.get('direccion').get('numero') as FormControl;
  }

  @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Empleado,
    public dialogRef: MatDialogRef<EmployeesFormComponent>,
    public formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
    this.buildForm();
    this.setAction();
    this.getRoles();
    this.getLocalidades();
  }

  ngAfterViewInit() {
    this.stepper._getIndicatorType = () => 'number';
  }

  buildForm() {
    this.employeesForm = this.formBuilder.group({
      id: [this.localData.id],
      ultimaActualizacion: [this.localData.ultimaActualizacion],
      oculto: [this.localData.oculto],
      nombre: [this.localData.nombre, [Validators.required]],
      apellido: [this.localData.apellido, [Validators.required]],
      telefono: [this.localData.telefono, [Validators.required]],
      email: [this.localData.email, [Validators.required]],
      cuil: [this.localData.cuil, [Validators.required]],
      rol: [this.localData.rol, [Validators.required]],
      direccion: this.formBuilder.group({
        id: [this.localData.direccion ? this.localData.direccion.id : null],
        ultimaActualizacion: [this.localData.direccion ? this.localData.direccion.ultimaActualizacion : null],
        oculto: [this.localData.direccion ? this.localData.direccion.oculto : null],
        calle: [this.localData.direccion ? this.localData.direccion.calle : '', [Validators.required]],
        numero: [this.localData.direccion ? this.localData.direccion.numero : 0, [Validators.required]],
        localidad: [this.localData.direccion ? this.localData.direccion.localidad : null, [Validators.required]],
        piso: [this.localData.direccion ? this.localData.direccion.piso : ''],
        departamento: [this.localData.direccion ? this.localData.direccion.departamento : ''],
      })
    });
  }

  getRoles() {
    return this.http.get(`http://localhost:8080/api/v1/usuarios/roles/all`).pipe()
      .subscribe((data: Array<Rol>) => this.roles = data);
  }

  getLocalidades() {
    return this.http.get(`http://localhost:8080/api/v1/direcciones/localidad/all`).pipe()
      .subscribe((data: Array<Localidad>) => this.localidades = data);
  }

  setAction() {
    this.action = (this.localData && (Object.keys(this.localData).length === 0)) ? 'Añadir' : 'Editar';
  }

  onAction() {
    this.dialogRef.close({ event: this.action, data: this.employeesForm.value });
  }

  onCancel() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  errorHandling = (control: string, error: string) => {
    return this.employeesForm.controls[control].hasError(error);
  }

}
