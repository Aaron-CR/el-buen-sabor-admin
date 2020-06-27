import { DialogService } from 'src/app/shared/components/dialogs/dialog.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/authentication/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup;
  public hide = true;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private dialogService: DialogService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSignIn(signInFormGroup: FormGroup): void{
    this.authService.loginEmailUser(signInFormGroup.value.email, signInFormGroup.value.password)
    .then((res) => {
      this.onSignInRedirect();
    }).catch( err => {
      this.snackBar.open(err.message, 'OK', { duration: 10000, panelClass: ['app-snackbar'] });
    });
  }

  onSignInRedirect(): void {

    this.authService.user.subscribe((user) => {
      if (!!user){
        switch (user.rol.denominacion){
          case 'administrador':
            this.router.navigate(['/admin']);
            break;
          case 'cajero':
            this.router.navigate(['/cashier']);
            break;
          case 'cocinero':
            this.router.navigate(['/kitchen']);
            break;
          default:
            this.router.navigate(['']);
            break;
        }
      }
    });
  }

  onForgotPassword(){
    this.dialogService.forgotPassword();
  }

}
