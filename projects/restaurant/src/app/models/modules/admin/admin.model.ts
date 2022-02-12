import { Account } from '../../account/account.model';

export class AccountUser {
  personal_id!: string;
  personal_name!:  string;
  access_level!: string;
  account!: Account;
}

export class Invitation {
  uid!: string;
  account!: string;
  invitation_date!: Date;
  invitee_id!: string;
  invitee_name!: string;
  invitation_status!: string;
}

export class UserAccess {
  admin_access!: boolean;
  customers_access!: boolean;
  deliveries_access!: boolean;
  menu_access!: boolean;
  orders_access!: boolean;
  payments_access!: boolean;
  portal_access!: boolean;
  settings_access!: boolean;
  staff_access!: boolean;
  reservations_access!: boolean;
  tables_access!: boolean;
}
