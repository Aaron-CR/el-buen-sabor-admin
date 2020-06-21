import { Injectable } from '@angular/core';
import { EditPhoneComponent } from './edit-phone/edit-phone.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) { }

  editPhone() {
    this.matDialog.open(EditPhoneComponent, {
      panelClass: 'app-dialog',
      width: '420px'
    });
  }

  editPassword() {
    this.matDialog.open(EditPasswordComponent, {
      panelClass: 'app-dialog',
      width: '420px'
    });
  }

}
