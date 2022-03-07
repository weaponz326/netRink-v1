export class Assessment {
  created_at!: any;
  account!: string;
  assessment_code!: string;
  assessment_name!: string;
  assessment_date!: Date;
  term!: {
    id: string;
    data: {

    }
  };
  subject!: {
    id: string;
    data: {

    }
  };
}

export class AssessmentClass {
  assessment!: string;
  clase!: {
    id: string;
    data: {

    }
  }
}

export class AssessmentSheet {
  assessment!: string;
  score!: string;
  grade!: string;
  remarks!: string;
  student!: {
    id: string;
    data: {

    }
  }
}
