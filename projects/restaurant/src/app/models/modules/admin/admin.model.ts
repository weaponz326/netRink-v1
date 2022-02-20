import { Account } from '../../account/account.model';
import { User } from 'projects/personal/src/app/models/user/user.model';

export class AccountUser {
  access_level!: string;
  user!: {
    id: string;
    name: string;
  };
  account!: {
    id: string;
    data: Account;
  }
}

export class Invitation {
  created_at!: any;
  account!: string;
  invitation_status!: string;
  user!: {
    id: string;
    data: User;
  }
}

export class UserAccess {
  admin_access!: boolean;
  customers_access!: boolean;
  deliveries_access!: boolean;
  kitchen_stock_access!: boolean;
  menu_access!: boolean;
  orders_access!: boolean;
  payments_access!: boolean;
  portal_access!: boolean;
  roster_access!: boolean;
  settings_access!: boolean;
  staff_access!: boolean;
  reservations_access!: boolean;
  tables_access!: boolean;
}
