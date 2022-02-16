export class Account {
  created_at!: any;
  user!: string;
  account_name!: string;
  account_number!: string;
  bank_name!: string;
  account_type!: string;
}

export class Transaction {
  created_at!: any;
  transaction_date!: Date;
  description!: string;
  transaction_type!: string;
  amount!: number;
  account!: {
    id: string;
    data: Account;
  };
}
