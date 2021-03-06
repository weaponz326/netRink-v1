import { MenuItem } from '../menu/menu.model';

export class Order {
  created_at!: any;
  account!: string;
  order_code!: string;
  order_date!: string;
  order_type!: string;
  order_status!: string;
  total_amount!: number;
  table!: {
    id: string;
    table_number: string;
  };
  customer!: {
    id: string;
    customer_name: string;
  };
}

export class OrderItem {
  created_at!: any;
  order!: string;
  quantity!: number;
  menu_item!: {
    id: string;
    data: MenuItem;
  }
}
