import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  @Input() data: string;

  constructor() { }

  ngOnInit(): void {
  }

}
