export class LessonPlan {
  created_at!: any;
  account!: string;
  plan_code!: string;
  plan_name!: string;
  plan_date!: Date;
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
  teacher!: {
    id: string;
    data: {
      teacher_code: string;
      teacher_name: string;
    }
  };
  objectives!: string;
  materials!: string;
  introduction!: string;
  main_activity!: string;
  closure!: string;
  assessment!: string;
}
