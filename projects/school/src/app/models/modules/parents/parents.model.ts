export class Parent {
  created_at!: any;
  account!: string;
  terms!: any;
  parent_code!: string;
  first_name!: string;
  last_name!: string;
  sex!: string;
  photo!: string;
  nationality!: string;
  religion!: string;
  occupation!: string;
  phone!: string;
  email!: string;
  address!: string;
  state!: string;
  city!: string;
  country!: string;
  post_code!: string;
}

export class ParentWard {
  created_at!: any;
  parent!: string;
  ward!: {
    id: "",
    data: {

    }
  };
}
