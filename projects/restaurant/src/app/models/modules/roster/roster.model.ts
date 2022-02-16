import { Time } from "@angular/common";

export class Roster {
  created_at!: any;
  account!: string;
  roster_code!: string;
  roster_name!: string;
  from_date!: Date;
  to_date!: Date;
}

export class Shift {
  created_at!: any;
  roster!: string;
  shift_name!: string;
  start_time!: Time;
  end_time!: Time;
}

export class Batch {
  created_at!: any;
  roster!: string;
  batch_name!: string;
  batch_symbol!: string;
}

export class Personnel {
  roster!: string;
  batch_symbol!: string;
  staff!: {
    id: string;
    staff_code: string;
    staff_name: string;
  }
}

export class RosterDay {
    roster!: string;
    day!: string;
}

export class RosterSheet {
    roster_day!: string;
    shift!: string;
    batch!: string;
}
