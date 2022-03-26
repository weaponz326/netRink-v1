export class Student {
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
  student_code!: string;
  admission_date!: string;
  previous_school!: string;
  clase!: {
    id: string;
    data: {
      class_code: string;
      class_name: string;
    }
  };
}
