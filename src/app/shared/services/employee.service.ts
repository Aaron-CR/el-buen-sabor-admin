import { Empleado } from './../../core/models/usuarios/empleado';
import { ErrorHandlerService } from './error-handler.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private endpoint = 'http://localhost:8080/api/v1/usuarios/empleados';

  constructor(private httpClient: HttpClient, private errorHandler: ErrorHandlerService) { }

  findByUid(uid: string): Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.endpoint}/current/${uid}`)
      .pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  findAllRepartidores(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.endpoint}/all`, {
      params: new HttpParams()
        .set('filter', 'repartidor')
    }).pipe(catchError(error => this.errorHandler.handleError(error)));
  }
}
