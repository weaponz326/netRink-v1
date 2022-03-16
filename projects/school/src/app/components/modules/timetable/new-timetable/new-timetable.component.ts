import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';

import { TimetableApiService } from 'projects/school/src/app/services/modules/timetable-api/timetable-api.service';

import { Timetable } from 'projects/school/src/app/models/modules/timetable/timetable.model';


@Component({
  selector: 'app-new-timetable',
  templateUrl: './new-timetable.component.html',
  styleUrls: ['./new-timetable.component.scss']
})
export class NewTimetableComponent implements OnInit {

  constructor(
    private router: Router,
    private timetableApi: TimetableApiService
  ) { }

  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;

  timetableForm: FormGroup = new FormGroup({});

  selectedTermId = "";
  selectedTermData = {};
  selectedSubjectId = "";
  selectedSubjectData = {};

  isTimetableSaving = false;

  ngOnInit(): void {
    this.initTimetableForm();
  }

  initTimetableForm(){
    this.timetableForm = new FormGroup({
      timetableCode: new FormControl(''),
      timetableDate: new FormControl(''),
      timetableName: new FormControl(''),
      term: new FormControl({value: "", disabled: true}),
      subject: new FormControl({value: "", disabled: true}),
    })
  }

  openModal(){
    this.addButton.nativeElement.click();
    this.timetableForm.controls.timetableDate.setValue(new Date().toISOString().slice(0, 10))
  }

  createTimetable(){
    let data: Timetable = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('school_id') as string,
      timetable_code: this.timetableForm.controls.timetableCode.value,
      timetable_name: this.timetableForm.controls.timetableName.value,
      term: {
        id: this.selectedTermId,
        data: this.selectedTermData,
      },
    }

    this.isTimetableSaving = true;

    this.timetableApi.createTimetable(data)
      .then(
        (res: any) => {
          console.log(res);
          sessionStorage.setItem('school_timetable_id', res.id);

          this.router.navigateByUrl('/home/timetable/full-timetable');
          this.dismissButton.nativeElement.click();
          this.isTimetableSaving = true;
        },
        (err: any) => {
          console.log(err);
          this.isTimetableSaving = true;
          this.connectionToast.openToast();
        }
      )
  }

  openTermWindow(){
    console.log("You are opening select term window")
    this.selectTerm.openModal();
  }

  onTermSelected(termData: any){
    console.log(termData);

    this.timetableForm.controls.term.setValue(termData.data().term_name);
    this.selectedTermId = termData.id;
    this.selectedTermData = termData.data();
  }

}
