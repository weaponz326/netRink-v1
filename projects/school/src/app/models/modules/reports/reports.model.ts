export class Report {
  created_at!: any;
  account!: string;
  report_code!: string;
  report_name!: string;
  report_date!: string;
  term!: {
    id: string;
    data: {

    }
  };
  clase!: {
    id: string;
    data: {

    }
  };
}

export class ReportAssessment {
  report!: string;
  assessment!: {
    id: string;
    data: {

    }
  };
}
