export class Timetable {
  created_at!: any;
  account!: string;
  timetable_code!: string;
  timetable_name!: string;
  term!: {
    id: string;
    data: {

    }
  };
}

export class TimetablePeriod {
  timetable!: string;
  period!: string;
  period_start!: string;
  period_end!: string;
}

export class TimetableClass {
  timetable!: string;
  clase!: {
    id: string;
    data: {

    }
  };
}
