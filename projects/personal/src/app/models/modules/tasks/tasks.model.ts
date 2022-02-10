export class TaskGroup {
  created_at!: any;
  user!: string;
  task_group!: string;
}

export class TaskItem {
  uid!: string;
  task_group!: TaskGroup;
  task_item!: string;
  priority!: string;
  start_date!: Date;
  end_date!: Date;
  status!: string;
}
