export class TaskGroup {
  uid!: string;
  user!: string;
  task_group!: string;
  created_at!: Date;
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
