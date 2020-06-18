import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomersDialogComponent } from '../customers-dialog/customers-dialog.component';
import { Cliente } from 'src/app/core/models/usuarios/cliente';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.scss']
})
export class CustomersTableComponent implements OnInit {

  public detailDialog = CustomersDialogComponent;
  public path = 'http://localhost:8080/api/v1/clientes';
  public title = 'Clientes';
  public icon = 'people';
  public actions = false;
  public tableColumns = [
    { columnDef: 'id', header: 'N° Cliente', cell: (cliente: Cliente) => `${cliente.id}` },
    { columnDef: 'nombre', header: 'Nombre', cell: (cliente: Cliente) => `${cliente.nombre} ${cliente.apellido}` },
    { columnDef: 'email', header: 'Email', cell: (cliente: Cliente) => `${cliente.email}` },
    { columnDef: 'telefono', header: 'Teléfono', cell: (cliente: Cliente) => `${cliente.telefono}` },
    { columnDef: 'fechaAlta', header: 'Fecha de Registro', cell: (cliente: Cliente) => `${cliente.fechaAlta}` }
  ];
  public displayedColumns = this.tableColumns.map(c => c.columnDef);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(CustomersDialogComponent, {
      panelClass: 'app-dialog',
      disableClose: true,
      width: '70%',
    });
  }

}
