import { Base } from '../../base/base.model';

export class MenuGroup extends Base {
  account!: string;
  menuGroup!: string;
  category!: string;
}

export class MenuItem extends Base {
  menuGroup!: MenuGroup;
  itemCode!: string;
  itemName!: string;
  Price!: string;
}
