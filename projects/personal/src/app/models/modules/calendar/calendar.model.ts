export class Calendar {
  created_at!: any;
  user!: string;
  calendar_name!: string;
}

export class Schedule {
  created_at!: string;
  schedule_name!: string;
  start_date!: Date;
  end_date!: Date;
  location!: string;
  status!: string;
  calendar!: {
    id: string;
    data: Calendar;
  };
}
