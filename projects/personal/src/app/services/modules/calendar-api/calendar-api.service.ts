import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CalendarApiService {

  constructor(
    private afs: AngularFirestore
  ) { }

  calendarRef = this.afs.collection('personal/calendar/calendar');
  scheduleRef = this.afs.collection('personal/calendar/schedule');

  personalId = localStorage.getItem('personal_id') as string;
  calendarId = sessionStorage.getItem('personal_calendar_id') as string;

  // calendar

  createCalendar(calendar: any){
    return this.calendarRef.add(calendar);
  }

  getCalendar(){
    return this.calendarRef.doc(this.calendarId).ref.get();
  }

  updateCalendar(calendar: any){
    return this.calendarRef.doc(this.calendarId).update(calendar);
  }

  deleteCalendar(){
    return this.calendarRef.doc(this.calendarId).delete();
  }

  getAllUserCalendar(ordering: any, pageSize: any, pageStart: any){
    return this.calendarRef.ref
      .where("user", "==", this.personalId)
      .orderBy(ordering.field, ordering.direction)
      .startAt(pageStart)
      .limit(pageSize)
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
      .where("calendar.uid", "==", this.calendarId)
      .get();
  }

  getAllUserSchedule(ordering: any, pageSize: any, pageStart: any){
    return this.scheduleRef.ref
      .where("user", "==", this.personalId)
      .orderBy(ordering.field, ordering.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

}
