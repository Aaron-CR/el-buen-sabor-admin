import { DireccionLegal } from './../../../core/models/direccion/direccion-legal';
import { Direccion } from './../../../core/models/direccion/direccion';
import { Empleado } from './../../../core/models/usuarios/empleado';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() visible: boolean;

  public userExists = false;

  public user: Empleado = {
    id: 0,
    fechaAlta: null,
    ultimaActualizacion: null,
    oculto: false,
    eliminado: false,
    nombre: '',
    apellido: '',
    telefono: '',
    cuil: '',
    fechaDeIngreso: null,
    email: '',
    uid: '',
    rol: null,
    direccion: null
  };

  public userRol = '';

  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit(){
    this.authService.user.subscribe((user) => {
      if (!!user){
        this.user = user;
        this.userExists = true;
        this.userRol = user.rol.denominacion;
        /* if (!!user){
          switch (user.rol.denominacion){
            case 'administrador':
              this.isAdmin = true;
              break;
            case 'cajero':
              this.isCajero = true;
              break;
            case 'cocinero':
              this.isCocinero = true;
              break;
          }
        } */
      }
    });
  }

  onSignOut(){
    this.authService.logoutUser();
    this.router.navigate(['']);
  }

}
