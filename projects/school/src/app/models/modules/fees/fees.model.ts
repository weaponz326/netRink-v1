export class Fees {
  created_at!: any;
  account!: string;
  fees_code!: string;
  fees_name!: string;
  fees_description!: string;
  fees_date!: Date;
  term!: {
    id: string;
    data: {

    }
  };
}

export class FeesTarget {
  fees!: string;
  clase!: {
    id: string;
    data: {

    }
  };
}

export class FeesItem {
  fees!: string;
  item_number!: string;
  item_name!: string;
  amount!: string;
}

export class ArrearsItem {
  fees!: string;
  item_number!: string;
  item_name!: string;
  source!: {
    id: string;
    data: {

    }
  };
}

export class Bill {
  fees!: string;
  amount!: string;
  student!: {
    id: string;
    data: {

    }
  };
}
