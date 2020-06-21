import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/components/dialogs/dialog.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  public edit = false;

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  onEditPhone() {
    this.dialogService.editPhone();
  }

  onEditPassword() {
    this.dialogService.editPassword();
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

}
