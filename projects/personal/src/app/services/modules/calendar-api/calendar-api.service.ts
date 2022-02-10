import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CalendarApiService {

  constructor(
    private afs: AngularFirestore
  ) { }

  calendarRef = this.afs.collection('personal/module_calendar/calendar_calendar');
  scheduleRef = this.afs.collection('personal/module_calendar/calendar_schedule');

  // calendar

  createCalendar(calendar: any){
    return this.calendarRef.add(calendar);
  }

  getCalendar(){
    return this.calendarRef.doc(String(sessionStorage.getItem('personal_calendar_id'))).ref.get();
  }

  updateCalendar(calendar: any){
    return this.calendarRef.doc(String(sessionStorage.getItem('personal_calendar_id'))).update(calendar);
  }

  deleteCalendar(){
    return this.calendarRef.doc(String(sessionStorage.getItem('personal_calendar_id'))).delete();
  }

  getAllUserCalendar(sorting: any, pageSize: any, pageStart: any){
    return this.calendarRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      .limit(pageSize)
      .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .get();
  }

  // schedule

  createSchedule(schedule: any){
    return this.scheduleRef.add(schedule);
  }

  getSchedule(scheduleId: any){
    return this.scheduleRef.doc(scheduleId).ref.get();
  }

  updateSchedule(scheduleId: any, schedule: any){
    return this.scheduleRef.doc(scheduleId).update(schedule);
  }

  deleteSchedule(scheduleId: any){
    return this.scheduleRef.doc(scheduleId).delete();
  }

  getAllCalendarSchedule(){
    return this.scheduleRef.ref
      .where("calendar.uid", "==", sessionStorage.getItem('personal_calendar_id'))
      .get();
  }

  getAllUserSchedule(sorting: any, pageSize: any, pageStart: any){
    return this.scheduleRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      .limit(pageSize)
      .orderBy(sorting.field, sorting.direction)
      .startAt(pageStart)
      .get();
  }

}
