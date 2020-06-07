import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customers-dialog',
  templateUrl: './customers-dialog.component.html',
  styleUrls: ['./customers-dialog.component.scss']
})
export class CustomersDialogComponent implements OnInit {
  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      date: [{ begin: new Date(), end: new Date() }]
    });
  }

  ngOnInit(): void {
  }

}
