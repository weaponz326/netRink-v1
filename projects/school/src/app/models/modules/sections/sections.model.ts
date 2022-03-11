export class Section {
  created_at!: any;
  account!: string;
  section_code!: string;
  section_name!: string;
  term!: {
    id: string;
    data: {

    }
  }
}

export class SectionStudent {
  created_at!: any;
  section!: string;
  student!: {
    id: string;
    data: {

    }
  };
}
