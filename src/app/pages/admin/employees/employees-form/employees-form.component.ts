import { Component, OnInit, AfterViewInit, ViewChild, Optional, Inject } from '@angular/core';
import { Rol } from 'src/app/core/models/usuarios/rol';
import { Empleado } from 'src/app/core/models/usuarios/empleado';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Localidad } from 'src/app/core/models/direccion/localidad';
import { AuthService } from 'src/app/shared/authentication/auth.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private http: HttpClient,
    private authService: AuthService,
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar
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
      id: [this.localData.id != null ? this.localData.id : 0],
      ultimaActualizacion: [this.localData.ultimaActualizacion],
      oculto: [this.localData.oculto == null ? false : this.localData.oculto],
      eliminado: [this.localData.eliminado == null ? false : this.localData.oculto],
      fechaAlta: [this.localData.fechaAlta],
      fechaDeIngreso: [this.localData.fechaDeIngreso],
      nombre: [this.localData.nombre, [Validators.required]],
      apellido: [this.localData.apellido, [Validators.required]],
      telefono: [this.localData.telefono, [Validators.required]],
      email: [this.localData.email, [Validators.required]],
      uid: [this.localData.uid ? this.localData.uid : ''],
      cuil: [this.localData.cuil, [Validators.required]],
      rol: [this.localData.rol, [Validators.required]],
      direccion: this.formBuilder.group({
        id: [this.localData.direccion ? this.localData.direccion.id : 0],
        ultimaActualizacion: [this.localData.direccion ? this.localData.direccion.ultimaActualizacion : null],
        oculto: [this.localData.oculto == null ? false : this.localData.oculto],
        eliminado: [this.localData.eliminado == null ? false : this.localData.oculto],
        calle: [this.localData.direccion ? this.localData.direccion.calle : '', [Validators.required]],
        numero: [this.localData.direccion ? this.localData.direccion.numero : 0, [Validators.required]],
        localidad: [this.localData.direccion ? this.localData.direccion.localidad : null, [Validators.required]],
        piso: [this.localData.direccion ? this.localData.direccion.piso : null],
        departamento: [this.localData.direccion ? this.localData.direccion.departamento : null],
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
    console.log(this.employeesForm.value);
    if (this.action === 'Añadir'){
      this.onSignUp(this.employeesForm.value);
      this.onCancel();
    } else {
      this.dialogRef.close({ event: this.action, data: this.employeesForm.value});
    }
  }

  onCancel() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  errorHandling = (control: string, error: string) => {
    return this.employeesForm.controls[control].hasError(error);
  }

  compareWith(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  onSignUp(empleado) {
    this.authService.registerUser(empleado);
  }

}
