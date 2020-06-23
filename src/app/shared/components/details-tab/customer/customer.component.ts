import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/core/models/usuarios/cliente';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @Input()
  public data: Cliente;
  public dataSource: Array<Cliente> = [];
  public customerColumns: string[] = ['nombre', 'email', 'telefono'];

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource.push(this.data);
  }

}
