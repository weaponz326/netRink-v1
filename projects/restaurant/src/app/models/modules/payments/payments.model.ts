export class Payment {
  created_at!: any;
  account!: string;
  payment_code!: string;
  payment_date!: string;
  amount_paid!: string;
  order!: {
    id: string;
    order_code: string;
    total_amount: number;
    customer: {
      id: string;
      customer_name: string;
    }
  }
}
