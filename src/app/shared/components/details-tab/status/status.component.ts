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
  public statuses: Array<Estado>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getStatuses();
  }

  getStatuses() {
    return this.http.get(`http://localhost:8080/api/v1/comprobantes/estados/all`).pipe()
      .subscribe((data: Array<Estado>) => this.statuses = data);
  }

  getStatusClass(status: string) {
    return status.replace(/\s+/g, '-');
  }

}

