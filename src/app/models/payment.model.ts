export interface PaymentRequest {
  amount: number;
  method: 'UPI' | 'NET_BANKING';
  upiApp?: string;
  upiId?: string;
  bank?: string;
}

export interface PaymentStatus {
  transactionId: string;
  amount: number;
  method: string;
  status: 'SUCCESS' | 'FAILED' | 'PENDING';
  timestamp: string;
}
