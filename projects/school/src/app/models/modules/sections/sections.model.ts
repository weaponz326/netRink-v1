export class Section {
  created_at!: any;
  account!: string;
  terms!: any;
  section_code!: string;
  section_name!: string;
}

export class SectionStudent {
  created_at!: any;
  section!: string;
  student!: {
    id: string;
    data: {
      student_code: string;
      first_name: string;
      last_name: string;
    }
  };
}
