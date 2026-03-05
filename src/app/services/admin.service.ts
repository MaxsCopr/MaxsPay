import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private http: HttpClient) {}

  getMerchants() { return this.http.get(`${environment.apiBaseUrl}/admin/merchants`); }

  getTransactions(filters?: { date?: string; status?: string }) {
    let params = new HttpParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params = params.set(key, value);
      });
    }
    return this.http.get(`${environment.apiBaseUrl}/admin/transactions`, { params });
  }

  getSystemReports() { return this.http.get(`${environment.apiBaseUrl}/admin/reports`); }
}
