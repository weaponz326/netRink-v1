import { Account } from '../../account/account.model'

export class Rink {
  created_at!: any;
  rink_type!: string;
  rink_source!: string;
  comment!: string;
  sender!: {
    id: string;
    data: Account;
  };
  recipient!: {
    id: string;
    data: Account;
  };
}
