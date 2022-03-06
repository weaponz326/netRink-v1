export class Delivery {
  created_at!: any;
  account!: string;
  delivery_location!: string;
  delivery_status!: string;
  date_delivered!: string;
  order!: {
    order_code: string;
    order_date: string;
    customer: {
      id: string;
      customer_name: string;
    }
  }
}
