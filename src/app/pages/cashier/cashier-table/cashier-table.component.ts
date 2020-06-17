import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CashierDialogComponent } from '../cashier-dialog/cashier-dialog.component';
import { Article } from 'src/app/core/models/temporal/article';

@Component({
  selector: 'app-cashier-table',
  templateUrl: './cashier-table.component.html',
  styleUrls: ['./cashier-table.component.scss']
})
export class CashierTableComponent implements OnInit {

  public path = 'http://localhost:8080/api/v1/article';
  public detailDialog = CashierDialogComponent;
  public tableColumns = [
    { columnDef: 'name', header: 'Name', cell: (article: Article) => `${article.name}` },
    { columnDef: 'category', header: 'Category', cell: (article: Article) => `${article.category}` },
    { columnDef: 'stockUnits', header: 'Stock units', cell: (article: Article) => `${article.stockUnits}` },
    { columnDef: 'unitPrice', header: 'Unit price', cell: (article: Article) => `${article.unitPrice}` },
  ];
  public displayedColumns = this.tableColumns.map(c => c.columnDef);
  public title = 'Cajero';
  public icon = 'point_of_sale';
  public actions = false;

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
