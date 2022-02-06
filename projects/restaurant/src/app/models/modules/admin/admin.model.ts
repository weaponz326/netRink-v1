export class User {
  uid!: string;
  account!: string;
  personal_id!: string;
  personal_name!: string;
  access_level!: string;
}

export class Invitation {
  uid!: string;
  account!: string;
  invitation_date!: Date;
  invitee_id!: string;
  invitee_name!: string;
  invitation_status!: string;
}

export class Access {
  uid!: string;
  user!: string;
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
