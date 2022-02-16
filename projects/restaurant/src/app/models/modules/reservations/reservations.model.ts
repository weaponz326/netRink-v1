export class Reservation {
  created_at!: any;
  account!: string;
  reservation_code!: string;
  reservation_date!: Date;
  arrival_date!: Date;
  number_guests!: any;
  number_tables!: any;
  status!: string;
  customer!: {
    id: string;
    customer_name: string;
  };
}

export class ReservationTable {
  created_at!: any;
  reservation!: string;
  table!: {
    id: string;
    table_number: string;
    capacity: number;
  }
}
