import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from 'src/app/core/models/usuarios/cliente';
import { CustomersDetailComponent } from '../customers-detail/customers-detail.component';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.scss']
})
export class CustomersTableComponent implements OnInit {

  public detailDialog = CustomersDetailComponent;
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
    this.dialog.open(CustomersDetailComponent, {
      panelClass: 'app-dialog',
      disableClose: true,
      width: '70%',
    });
  }

}
