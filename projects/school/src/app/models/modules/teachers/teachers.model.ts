export class Teacher {
  created_at: any;
  account!: string;
  terms!: any;
  first_name!: string;
  last_name!: string;
  date_of_birth!: string;
  sex!: string;
  photo!: string;
  nationality!: string;
  religion!: string;
  phone!: string;
  email!: string;
  address!: string;
  state!: string;
  city!: string;
  post_code!: string;
  teacher_code!: string;
  grade!: string;
  department!: {
    id: string;
    data: {
      department_code: string;
      department_name: string;
    }
  };
}
