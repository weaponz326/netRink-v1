import { User } from '../../user/user.model'

export class Rink {
  created_at!: any;
  rink_type!: string;
  rink_source!: string;
  comment!: string;
  sender!: {
    id: string;
    data: User;
  };
  recipient!: {
    id: string;
    data: User;
  };
}
