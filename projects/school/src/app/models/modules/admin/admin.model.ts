import { Account } from '../../account/account.model';
import { User } from 'projects/personal/src/app/models/user/user.model';

export class AccountUser {
  created_at!: any;
  access_level!: string;
  user!: {
    id: string;
    data: User;
  };
  account!: {
    id: string;
    data: Account;
  }
}

export class Invitation {
  created_at!: any;
  account!: string;
  invitation_status!: string;
  user!: {
    id: string;
    data: User;
  }
}

export class UserAccess {
  admin_access!: boolean;
  assessment_access!: boolean;
  attendance_access!: boolean;
  classes_stock_access!: boolean;
  fees_access!: boolean;
  lesson_plan_access!: boolean;
  parents_access!: boolean;
  payments_access!: boolean;
  portal_access!: boolean;
  reports_access!: boolean;
  sections_access!: boolean;
  settings_access!: boolean;
  students_access!: boolean;
  subjects_access!: boolean;
  teachers_access!: boolean;
  terms_access!: boolean;
  timetable_access!: boolean;
}
