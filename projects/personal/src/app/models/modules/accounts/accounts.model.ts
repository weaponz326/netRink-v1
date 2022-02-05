export class Account {
  uid!: string;
  user!: string;
  account_name!: string;
  account_number!: string;
  bank_name!: string;
  account_type!: string;
}

export class Transaction {
  uid!: string;
  account!: Account;
  transaction_date!: Date;
  description!: string;
  transaction_type!: string;
  amount!: number;
}
