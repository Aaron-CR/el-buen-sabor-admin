import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authService: AngularFireAuth) { }

  /* Registra un usario con email y contraseña */
  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.authService.createUserWithEmailAndPassword(email, pass)
      .then( userData => {
        resolve(userData);
      }).catch(
        err => console.log(reject(err)));
    });
  }

  /* Login del usario con email y contraseña */
  loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.authService.signInWithEmailAndPassword(email, pass)
        .then( userData => resolve(userData),
        err => reject(err));
    });
  }

  logoutUser() {
    return this.authService.signOut();
  }

  /* Averigua si hay un usuario conectado o no */
  isAuth() {
    // tslint:disable-next-line: no-shadowed-variable
    return this.authService.authState.pipe(map( auth => auth));
  }

}
