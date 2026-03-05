import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PaymentRequest, PaymentStatus } from '../models/payment.model';
import { Transaction } from '../models/transaction.model';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  constructor(private http: HttpClient) {}

  createPayment(payload: PaymentRequest): Observable<PaymentStatus> {
    return this.http.post<PaymentStatus>(`${environment.apiBaseUrl}/payments`, payload);
  }

  checkPaymentStatus(transactionId: string): Observable<PaymentStatus> {
    return this.http.get<PaymentStatus>(`${environment.apiBaseUrl}/payments/${transactionId}/status`);
  }

  getTransactionHistory(filters?: {status?: string; method?: string; fromDate?: string; toDate?: string;}): Observable<Transaction[]> {
    let params = new HttpParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params = params.set(key, value);
      });
    }
    return this.http.get<Transaction[]>(`${environment.apiBaseUrl}/transactions`, { params });
  }
}
