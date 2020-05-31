import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cashier-dialog',
  templateUrl: './cashier-dialog.component.html',
  styleUrls: ['./cashier-dialog.component.scss']
})
export class CashierDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CashierDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
