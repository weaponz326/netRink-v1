export class Delivery {
  created_at!: any;
  account!: string;
  delivery_code!: string;
  delivery_date!: string;
  delivery_location!: string;
  delivery_status!: string;
  order!: {
    id: string;
    order_code: string;
    order_date: string;
    customer: {
      id: string;
      customer_name: string;
    }
  }
}
