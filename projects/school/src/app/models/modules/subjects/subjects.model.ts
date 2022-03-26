export class Subject {
  created_at!: any;
  account!: string;
  terms!: any;
  subject_code!: string;
  subject_name!: string;
  description!: string;
  department!: {
    id: string;
    data: {
      department_code: string;
      department_name: string;
    }
  };
}

export class SubjectTeacher {
  subject!: string;
  teacher!: {
    id: string;
    data: {

    }
  }
}
