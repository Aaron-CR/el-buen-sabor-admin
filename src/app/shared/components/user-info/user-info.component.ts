import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuarios/usuario';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input()
  public data: Usuario;
  @Input()
  public title = 'Usuario';
  public dataSource: Array<Usuario> = [];
  public customerColumns: string[] = ['nombre', 'email', 'telefono'];

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource.push(this.data);
  }
}
