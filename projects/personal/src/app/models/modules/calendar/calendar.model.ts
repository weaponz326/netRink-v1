export class Calendar {
  uid!: string;
  user!: string;
  calendar_name!: string;
  created_at!: Date;
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
