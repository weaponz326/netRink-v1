import { Order } from "../orders/orders.model";

export class Payment {
  created_at!: any;
  account!: string;
  payment_code!: string;
  payment_date!: string;
  amount_paid!: string;
  order!: {
    id: string;
    data: Order
  }
}
