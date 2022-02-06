import { Account } from '../../account/account.model'

export class Rink {
  uid!: string;
  sender!: Account;
  recipient!: Account;
  rink_date!: Date;
  rink_type!: string;
  rink_source!: string;
  comment!: string;
}
