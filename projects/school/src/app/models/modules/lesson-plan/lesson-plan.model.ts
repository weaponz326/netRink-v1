export class LessonPlan {
  created_at!: any;
  account!: string;
  plan_code!: string;
  plan_name!: string;
  plan_date!: Date;
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
  teacher!: {
    id: string;
    data: {

    }
  };
  objectives!: string;
  materials!: string;
  introduction!: string;
  main_activity!: string;
  closure!: string;
  assessment!: string;
}
