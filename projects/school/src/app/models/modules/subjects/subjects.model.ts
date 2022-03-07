export class Subject {
  created_at!: any;
  account!: string;
  subject_code!: string;
  subject_name!: string;
  department!: string;
  description!: string;
  term!: {
    id: string;
    data: {

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
