export class Clase {
  created_at!: any;
  account!: string;
  terms!: any;
  class_code!: string;
  class_name!: string;
  location!: string;
  department!: {
    id: string;
    data: {
      department_code: string;
      department_name: string;
    }
  };
  class_teacher!: {
    id: string;
    data: {
      teacher_code: string;
      first_name: string;
      last_name: string;
    }
  };
}

export class ClassStudent {
  created_at!: any;
  clase!: string;
  student!: {
    id: string;
    data: {
      student_code: string;
      first_name: string;
      last_name: string;
    }
  }
}

export class Department {
  created_at!: any;
  account!: string;
  terms!: any;
  department_code!: string;
  department_name!: string;
  department_description!: string;
  department_head!: {
    id: string;
    data: {
      teacher_code: string;
      first_name: string;
      last_name: string;
    }
  }
}
