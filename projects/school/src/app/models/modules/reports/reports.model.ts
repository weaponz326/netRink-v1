export class Report {
  created_at!: any;
  account!: string;
  report_code!: string;
  report_name!: string;
  report_date!: string;
  term!: {
    id: string;
    data: {
      term_code: string;
      term_code: string;
    }
  };
  clase!: {
    id: string;
    data: {
      class_code: string;
      class_name: string;
    }
  };
}

export class ReportAssessment {
  report!: string;
  assessment!: {
    id: string;
    data: {
      assessment_code: string;
      assessment_name: string;
    }
  };
}
