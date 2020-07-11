import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogService } from 'src/app/shared/components/dialogs/dialog.service';
import { AuthService } from 'src/app/shared/authentication/auth.service';
import { Empleado } from 'src/app/core/models/usuarios/empleado';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  public user: Empleado;
  public edit = false;
  public userExists = false;

  constructor(
    private dialogService: DialogService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.subscription.add(this.authService.user.subscribe((user) => {
      if (!!user) {
        this.user = user;
        this.userExists = true;
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditPhone() {
    this.dialogService.editPhone();
  }

  onEditPassword() {
    this.authService.resetPassword(this.user.email);
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

}
