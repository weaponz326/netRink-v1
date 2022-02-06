export class ExtendedProfile {
  uid!: string;
  phone!: string;
  address!: string;
  country!: string;
  state!: string;
  city!: string;
}

export class Subscription {
  uid!: string;
  subscription_type!: string;
  billing_frequency!: string;
  number_users!: number;
}
