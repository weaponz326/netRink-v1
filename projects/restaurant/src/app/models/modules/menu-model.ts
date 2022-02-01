import { AccountModel } from '../account-model';

export interface MenuGroup{
  $id: string,
  menuGroup: string,
  category: string
}


export interface MenuItem{
  $id: string,
  item_code: string,
  item_name: string,
  price: string,
}
