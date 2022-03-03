export class ExtendedProfile {
  email!: string;
  phone!: string;
  address!: string;
  country!: string;
  state!: string;
  city!: string;
}

export class Subscription {
  subscription_type!: string;
  billing_frequency!: string;
  number_users!: number;
  email!: string;
  first_name!: string;
  last_name!: string;
}

export class PaystackCustomer {
  email!: string;
  first_name!: string;
  last_name!: string;
}
