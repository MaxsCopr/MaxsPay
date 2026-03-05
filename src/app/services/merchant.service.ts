import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MerchantService {
  constructor(private http: HttpClient) {}

  getOverview() { return this.http.get(`${environment.apiBaseUrl}/merchant/overview`); }
  getAnalytics() { return this.http.get(`${environment.apiBaseUrl}/merchant/analytics`); }
  getReports() { return this.http.get(`${environment.apiBaseUrl}/merchant/reports`); }
  requestSettlement(payload: { amount: number }) {
    return this.http.post(`${environment.apiBaseUrl}/merchant/settlements`, payload);
  }
}
