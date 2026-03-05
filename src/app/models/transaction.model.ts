export interface Transaction {
  id: string;
  amount: number;
  method: 'UPI' | 'NET_BANKING';
  status: 'SUCCESS' | 'FAILED' | 'PENDING';
  date: string;
}
