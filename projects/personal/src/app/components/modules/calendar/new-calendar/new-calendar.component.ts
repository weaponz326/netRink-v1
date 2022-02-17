import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import * as firebase from 'firebase/compat/app';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';

import { Calendar } from 'projects/personal/src/app/models/modules/calendar/calendar.model';


@Component({
  selector: 'app-new-calendar',
  templateUrl: './new-calendar.component.html',
  styleUrls: ['./new-calendar.component.scss']
})
export class NewCalendarComponent implements OnInit {

  constructor(
    private router: Router,
    private calendarApi: CalendarApiService
  ) { }

  @ViewChild('newButtonElementReference', { read: ElementRef, static: false }) newButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  calendarForm: FormGroup = new FormGroup({});

  isSavingCalendar = false;

  ngOnInit(): void {
    this.initClendarForm();
  }

  openModal(){
    this.newButton.nativeElement.click();
  }

  initClendarForm(){
    this.calendarForm = new FormGroup({
      calendarName: new FormControl('')
    })
  }

  createCalendar(){
    this.isSavingCalendar = true;

    let data: Calendar = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
      user: localStorage.getItem('personal_id') as string,
      calendar_name: this.calendarForm.controls.calendarName.value,
    }

    console.log(data);

    this.calendarApi.createCalendar(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            sessionStorage.setItem('personal_calendar_id', res.id);
            this.router.navigateByUrl('/home/calendar/view-calendar');
            this.dismissButton.nativeElement.click();
          }
          this.isSavingCalendar = false;
        },
        (err: any) => {
          console.log(err);
          this.isSavingCalendar = false;
          this.connectionToast.openToast();
        }
      )
  }

}
