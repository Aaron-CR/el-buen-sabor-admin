import { Component, OnInit } from '@angular/core';
import { EmployeesDialogComponent } from '../employees-dialog/employees-dialog.component';
import { Empleado } from 'src/app/core/models/usuarios/empleado';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent implements OnInit {

  public detailDialog = EmployeesDialogComponent;
  public path = 'http://localhost:8080/api/v1/empleados';
  public title = 'Empleados';
  public icon = 'work_outline';
  public actions = true;
  public tableColumns = [
    { columnDef: 'nombre', header: 'Nombre', cell: (empleado: Empleado) => `${empleado.nombre} ${empleado.apellido}` },
    { columnDef: 'email', header: 'Email', cell: (empleado: Empleado) => `${empleado.email}` },
    { columnDef: 'telefono', header: 'Teléfono', cell: (empleado: Empleado) => `${empleado.telefono}` },
    { columnDef: 'cuil', header: 'Cuil', cell: (empleado: Empleado) => `${empleado.cuil}` },
    { columnDef: 'rol', header: 'Cargo', cell: (empleado: Empleado) => `${empleado.rol.denominacion}` }
  ];
  public displayedColumns = this.tableColumns.map(c => c.columnDef);

  constructor() { }

  ngOnInit(): void {
  }

}
