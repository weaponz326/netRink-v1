import { User } from '../../user/user.model'

export class Rink {
  uid!: string;
  sender!: User;
  recipient!: User;
  rink_date!: Date;
  rink_type!: string;
  rink_source!: string;
  comment!: string;
}
