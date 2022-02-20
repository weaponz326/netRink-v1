export class ExtendedProfile {
  date_of_birth!: string;
  gender!: string;
  phone!: string;
  address!: string;
  country!: string;
  state!: string;
  city!: string;
}

export class Invitation {
  created_at!: any;
  user!: string;
  invitation_status!: string;
  account_type!: string;
  account_invitaion!: string;
  account!: {
    id: string;
    data: object;
  }
}

