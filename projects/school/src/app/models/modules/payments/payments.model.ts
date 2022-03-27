import { Bill } from '../fees/fees.model';

export class Payment {
  created_at!: any;
  account!: string;
  payment_code!: string;
  payment_date!: string;
  amount_paid!: string;
  bill!: {
    id: string;
    data: Bill;
  };
  term!: {
    id: string;
    data: {
      term_code: string;
      term_name: string;
    }
  };
}
