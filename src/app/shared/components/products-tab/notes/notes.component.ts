import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  _notes: string;
  // _notes = 'Extra ketchup';

  get notes() {
    return this._notes ? this._notes : 'Este pedido no tiene aclaraciones...';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
