import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KitchenDialogComponent } from '../kitchen-dialog/kitchen-dialog.component';

@Component({
  selector: 'app-kitchen-table',
  templateUrl: './kitchen-table.component.html',
  styleUrls: ['./kitchen-table.component.scss']
})
export class KitchenTableComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(KitchenDialogComponent, {
      panelClass: 'app-dialog',
      disableClose: true,
      width: '70%'
    });
  }

}
