export class Calendar {
  created_at!: any;
  user!: string;
  calendar_name!: string;
}

export class Schedule {
  uid!: string;
  calendar!: Calendar;
  schedule_name!: string;
  start_date!: Date;
  end_date!: Date;
  location!: string;
  status!: string;
}
