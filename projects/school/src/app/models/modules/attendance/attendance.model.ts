export class Attendance {
  created_at!: any;
  account!: string;
  attendance_code!: string;
  attendance_name!: string;
  from_date!: Date;
  to_date!: Date;
  term!: {
    id: string;
    data: {
      term_code: string;
      term_name: string;
    }
  };
  source!: {
    id: string;
    data: {
      class_code: string;
      class_name: string;
    }
  };

}

export class AttendanceSheet {
  sheet!: any;
}
