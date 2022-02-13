export class Reservation {
  created_at!: any;
  account!: string;
  reservation_code!: string;
  reservation_date!: Date;
  number_guests!: number;
  number_tables!: string;
  arrival_date!: Date;
  status!: string;
  customer!: {
    id: string;
    customer_name: string;
  };
}
