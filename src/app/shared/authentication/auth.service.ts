import { EmployeeService } from './../services/employee.service';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { of, Observable } from 'rxjs';
import { Empleado } from 'src/app/core/models/usuarios/empleado';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<Empleado>;
  public userUid: string;

  constructor(
    private authService: AngularFireAuth,
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar
  ) {
    this.user = this.authService.authState.pipe(
      switchMap((user) => {
        if (user) {
          this.userUid = user.uid;
          return this.employeeService.findByUid(user.uid);
        }
        return of(null);
      })
    );
  }

  /* Registra un usario con email y contraseña */
  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.authService.createUserWithEmailAndPassword(email, pass)
        .then(userData => {
          resolve(userData);
        }).catch(
          err => console.log(reject(err)));
    });
  }

  /* Login del usario con email y contraseña */
  loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.authService.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  resetPassword(email: string) {
    this.authService.sendPasswordResetEmail(email)
      .then(
        () => {
          this.snackBar
            .open('¡Correo enviado! Revisa tu casilla y sigue los pasos', 'OK', { duration: 10000, panelClass: ['app-snackbar'] });
        },
        err => {
          this.snackBar
            .open('El email indicado no tiene usuario vinculado', 'OK', { duration: 10000, panelClass: ['app-snackbar'] });
        }
      );
  }

  confirmNewPassword(code: string, newPassword: string) {
    return this.authService.confirmPasswordReset(code, newPassword);
  }

  logoutUser() {
    return this.authService.signOut();
  }

  /* Averigua si hay un usuario conectado o no */
  isAuth() {
    return this.authService.authState.pipe(map(auth => auth));
  }

}
