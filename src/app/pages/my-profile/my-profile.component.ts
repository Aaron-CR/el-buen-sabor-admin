import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/components/dialogs/dialog.service';
import { AuthService } from 'src/app/shared/authentication/auth.service';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/core/models/usuarios/empleado';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  public edit = false;

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
    rol: {
      id: 0,
      ultimaActualizacion: null,
      oculto: false,
      eliminado: false,
      denominacion: ''
    },
    direccion: null
  };

  public userExists = false;

  constructor(private dialogService: DialogService, private authService: AuthService, private router: Router){

  }

  ngOnInit(){
    this.authService.user.subscribe((user) => {
      if (!!user){
        this.user = user;
        this.userExists = true;
      }
    });
  }

  onSignOut(){
    this.authService.logoutUser();
    this.router.navigate(['']);
  }

  onEditPhone() {
    this.dialogService.editPhone();
  }

  onEditPassword() {
    this.dialogService.forgotPassword();
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

}
