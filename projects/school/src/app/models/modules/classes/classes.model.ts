export class Clase {
  created_at!: any;
  account!: string;
  class_code!: string;
  class_name!: string;
  location!: string;
  term!: {
    id: string;
    data: {

    }
  };
  department!: {
    id: string;
    data: {

    }
  };
  class_teacher!: {
    id: string;
    data: {

    }
  };
}

export class ClassStudent {
  created_at!: any;
  clase!: string;
  student!: {
    id: string;
    data: {

    }
  }
}

export class Department {
  created_at!: any;
  account!: string;
  department_code!: string;
  department_name!: string;
  department_description!: string;
  term!: {
    id: string;
    data: {

    }
  }
  department_head!: {
    id: string;
    data: {

    }
  }
}
