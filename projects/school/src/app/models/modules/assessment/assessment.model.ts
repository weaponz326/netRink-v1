export class Assessment {
  created_at!: any;
  account!: string;
  assessment_code!: string;
  assessment_name!: string;
  assessment_date!: Date;
  term!: {
    id: string;
    data: {
      term_code: string;
      term_name: string;
    }
  };
  subject!: {
    id: string;
    data: {
      subject_code: string;
      subject_name: string;
    }
  };
}

export class AssessmentClass {
  assessment!: string;
  clase!: {
    id: string;
    data: {
      class_code: string;
      class_name: string;
    }
  }
}

export class AssessmentSheet {
  sheet!: any;
}
