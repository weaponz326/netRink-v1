export class Payment {
  created_at!: any;
  account!: string;
  payment_code!: string;
  payment_date!: string;
  amount_paid!: string;
  order!: {
    id: string;
    order_code: string;
    customer_name: string;
    total_amount: number;
  }
}
