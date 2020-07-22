import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';
import { ModeloGrafico } from 'src/app/core/models/reportes/modelo-grafico';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Orden } from 'src/app/core/models/comprobantes/orden';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private endpoint = 'http://localhost:8080/api/v1/reportes';

  constructor(private httpClient: HttpClient, private errorHandler: ErrorHandlerService) {
  }

  getInsumosOutOfStock(): Observable<ModeloGrafico[]>{
    return this.httpClient.get<ModeloGrafico[]>(`${this.endpoint}/stock`).pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  getIngresosPorPeriodo(fechaInicio= '2020-06-23', fechaFin= '2020-07-18' ): Observable<ModeloGrafico[]>{
    return this.httpClient.get<ModeloGrafico[]>(`${this.endpoint}/ingresos`, {
      params: new HttpParams()
        .set('fechaInicio', fechaInicio)
        .set('fechaFin', fechaFin)
    }).pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  getOrdenesPorPeriodo(clienteUid: string, fechaInicio: Date, fechaFin: Date ): Observable<Orden[]>{
    return this.httpClient.get<Orden[]>(`${this.endpoint}/ordenes`, {
      params: new HttpParams()
        .set('clienteUid', clienteUid)
        .set('fechaInicio', fechaInicio.toISOString().slice(0, 10))
        .set('fechaFin', fechaFin.toISOString().slice(0, 10))
    }).pipe(catchError(error => this.errorHandler.handleError(error)));
  }
}
