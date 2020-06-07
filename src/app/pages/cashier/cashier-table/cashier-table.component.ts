import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CashierDialogComponent } from '../cashier-dialog/cashier-dialog.component';

@Component({
  selector: 'app-cashier-table',
  templateUrl: './cashier-table.component.html',
  styleUrls: ['./cashier-table.component.scss']
})
export class CashierTableComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(CashierDialogComponent, {
      panelClass: 'app-dialog',
      disableClose: true,
      width: '70%'
    });
  }

}
