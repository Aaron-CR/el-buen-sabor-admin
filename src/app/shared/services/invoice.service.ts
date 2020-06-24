import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';
import { Injectable } from '@angular/core';
import { Factura } from 'src/app/core/models/comprobantes/factura';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private endpoint = 'http://localhost:8080/api/v1/comprobantes/facturas';

  constructor(private httpCliente: HttpClient, private errorHandler: ErrorHandlerService) { }

  getInvoice(ordenId: number): Observable<Factura>{
    return this.httpCliente.get<Factura>(`${this.endpoint}/orden/${ordenId}`)
      .pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  createInvoice(ordenId: number, cajeroUid: string ): Observable<Factura>{
    return this.httpCliente.post<Factura>(`${this.endpoint}/generar`, {
      params: new HttpParams()
        .set('ordenId', ordenId.toString())
        .set('cajeroUid', cajeroUid)
    }).pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  cancelInvoice(invoiceId: number): Observable<any>{
    return this.httpCliente.delete(`${this.endpoint}/anular/${invoiceId}`).pipe(catchError(error => this.errorHandler.handleError(error)));
  }


}