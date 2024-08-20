import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Invoice } from "./model/invoice.model";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = "http://localhost/g8-ebill-api/endpoint/InvoiceEndpoint.php";

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<Invoice[]>("getInvoices"))
      );
  }

  getInvoiceById(id: number): Observable<Invoice>{
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.get<Invoice>(url)
      .pipe(
        catchError(this.handleError<Invoice>("getInvoiceById"))
      );
  }

  createInvoice(invoice: Invoice): Observable<Invoice>{
    console.log("createInvoice", invoice);
    const options = {
      headers: new HttpHeaders({"content-type": "application/json"})
    };
    return this.http.post<Invoice>(this.apiUrl, invoice, options)
      .pipe(
        catchError(this.handleError<Invoice>("createInvoice"))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
