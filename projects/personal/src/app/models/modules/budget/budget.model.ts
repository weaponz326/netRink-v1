export class Budget {
  uid!: string;
  user!: string;
  budget_name!: string;
  budget_type!: string;
}

export class Income {
  uid!: string;
  budget!: string;
  item_number!: string;
  item_description!: string;
  amount!: number;
}

export class Expenditure {
  uid!: string;
  budget!: string;
  item_number!: string;
  item_description!: string;
  amount!: number;
}
