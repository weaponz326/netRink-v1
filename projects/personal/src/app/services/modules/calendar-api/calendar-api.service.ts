import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CalendarApiService {

  constructor(
    private afs: AngularFirestore
  ) { }

  calendarRef = this.afs.collection('personal/module_calendar/personal_calendar');
  scheduleRef = this.afs.collection('personal/module_calendar/personal_calendar_schedule');

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

  getUserCalendar(sorting: any, pageSize: any){
    return this.calendarRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getUserCalendarNext(sorting: any, pageSize: any, pageStart: any){
    return this.calendarRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getUserCalendarPrev(sorting: any, pageSize: any, pageStart: any){
    return this.calendarRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllUserCalendar(){
    return this.calendarRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      .orderBy("created_at", "desc")
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

  getCalendarSchedule(){
    return this.scheduleRef.ref
      .where("calendar.id", "==", sessionStorage.getItem('personal_calendar_id'))
      .get();
  }

  getUserSchedule(sorting: any, pageSize: any){
    return this.scheduleRef.ref
      .where("calendar.data.user", "==", localStorage.getItem('personal_id'))
      .orderBy(sorting.field, sorting.direction)
      .limit(pageSize)
      .get();
  }

  getUserScheduleNext(sorting: any, pageSize: any, pageStart: any){
    return this.calendarRef.ref
      .where("calendar.data.user", "==", localStorage.getItem('personal_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getUserSchedulePrev(sorting: any, pageSize: any, pageStart: any){
    return this.calendarRef.ref
      .where("calendar.data.user", "==", localStorage.getItem('personal_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllUserSchedule(){
    return this.scheduleRef.ref
      .where("calendar.data.user", "==", localStorage.getItem('personal_id'))
      .orderBy("created_at", "desc")
      .get();
  }

  // dashboard

  getMonthCalendar(startDate: any, endDate: any){
    return this.calendarRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      .where("created_at", "<=", startDate).where("created_at", ">=", endDate)
      .get();
  }

  getWeekSchedule(startDate: any, endDate: any){
    return this.calendarRef.ref
      .where("calendar.data.user", "==", localStorage.getItem('personal_id'))
      .where("created_at", "<=", startDate).where("created_at", ">=", endDate)
      .get();
  }

}
