export class Budget {
  created_at!: any;
  user!: string;
  budget_name!: string;
  budget_type!: string;
}

export class Income {
  created_at!: any;
  budget!: string;
  item_number!: string;
  item_description!: string;
  amount!: number;
}

export class Expenditure {
  created_at!: any;
  budget!: string;
  item_number!: string;
  item_description!: string;
  amount!: number;
}
