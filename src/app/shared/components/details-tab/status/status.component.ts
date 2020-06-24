import { Component, OnInit, Input } from '@angular/core';
import { Estado } from 'src/app/core/models/comprobantes/estado';
import { HttpClient } from '@angular/common/http';

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  @Input()
  public data: Estado;
  @Input()
  public statuses: Array<Estado>;

  constructor() { }

  ngOnInit(): void {
  }

  getStatusClass(status: string) {
    return status.replace(/\s+/g, '-');
  }

}

