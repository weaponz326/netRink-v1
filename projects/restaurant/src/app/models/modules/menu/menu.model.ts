export class MenuGroup {
  created_at!: any;
  account!: string;
  menu_group!: string;
  category!: string;
}

export class MenuItem {
  created_at!: any;
  item_code!: string;
  item_name!: string;
  price!: string;
  menu_group!: {
    id: string;
    data: MenuGroup;
  }
}
