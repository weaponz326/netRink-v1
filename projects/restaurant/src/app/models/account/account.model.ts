import { Base } from '../base/base.model'

export class Account extends Base {
  creatorId!: string;
  name!: string;
  location!: string;
  about!: string;
}
