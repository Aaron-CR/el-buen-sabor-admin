import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';
import { ArticuloInsumo } from 'src/app/core/models/articulos/articulo-insumo';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  private endpoint = 'http://localhost:8080/api/v1/articulos/insumos';

  constructor(
    private httpClient: HttpClient,
    private errorHandler: ErrorHandlerService
  ) { }

  // Por alguna razón no funciona, pero si se copia la URL del console.log en Postman, si 🤷‍♂️
  addStock(id: number, cantidad: number): Observable<ArticuloInsumo> {
    console.log(`${this.endpoint}/addStock/${id}?cantidad=${cantidad}`);
    return this.httpClient.put<ArticuloInsumo>(`${this.endpoint}/addStock/${id}?cantidad=${cantidad}`, null)
      .pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  removeStock(id: number, cantidad: number): Observable<ArticuloInsumo> {
    return this.httpClient.put<ArticuloInsumo>(`${this.endpoint}/removeStock/${id}`, {
      params: new HttpParams()
        .set('cantidad', cantidad.toString())
    }).pipe(catchError(error => this.errorHandler.handleError(error)));
  }
}
