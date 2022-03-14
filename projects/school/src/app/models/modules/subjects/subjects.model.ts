export class Subject {
  created_at!: any;
  account!: string;
  subject_code!: string;
  subject_name!: string;
  description!: string;
  term!: {
    id: string;
    data: {

    }
  };
  department!: {
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
