import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'
// import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';
// import { SelectClassComponent } from '../../../select-windows/classes-windows/select-class/select-class.component';

import { TimetableApiService } from 'projects/school/src/app/services/modules/timetable-api/timetable-api.service';
// import { TimetablePrintService } from 'projects/school/src/app/services/printing/timetable-print/timetable-print.service';

import { Timetable } from 'projects/school/src/app/models/modules/timetable/timetable.model';


@Component({
  selector: 'app-full-timetable',
  templateUrl: './full-timetable.component.html',
  styleUrls: ['./full-timetable.component.scss']
})
export class FullTimetableComponent implements OnInit {

  constructor(
    private router: Router,
    private timetableApi: TimetableApiService,
    // private timetablePrint: TimetablePrintService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;
  // @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;
  // @ViewChild('selectClassComponentReference', { read: SelectClassComponent, static: false }) selectClass!: SelectClassComponent;

  navHeading: any[] = [
    { text: "All Timetable", url: "/home/timetable/all-timetable" },
    { text: "Full Timetable", url: "/home/timetable/full-timetable" },
  ];

  timetableForm: FormGroup = new FormGroup({});
  timetableFormData: any;

  selectedTermId = "";
  selectedTermData = {};

  isTimetableLoading = false;
  isTimetableSaving = false;
  isTimetableDeleting = false;

  ngOnInit(): void {
    this.initTimetableForm();
    this.getTimetable();
  }

  initTimetableForm(){
    this.timetableForm = new FormGroup({
      timetableCode: new FormControl(''),
      timetableName: new FormControl(''),
      term: new FormControl({value: "", disabled: true}),
    })
  }

  getTimetable(){
    this.isTimetableLoading = true;

    this.timetableApi.getTimetable()
      .then(
        (res: any) => {
          console.log(res);
          this.timetableFormData = res;
          this.isTimetableLoading = false;

          this.timetableForm.controls.timetableCode.setValue(this.timetableFormData.data().timetable_code);
          this.timetableForm.controls.timetableName.setValue(this.timetableFormData.data().timetable_name);

          this.selectedTermId = this.timetableFormData.data().term.id;
          this.selectedTermData = this.timetableFormData.data().term.data;
          this.timetableForm.controls.termName.setValue(this.timetableFormData.data().term.term_name);
        },
        (err: any) => {
          console.log(err);
          this.isTimetableLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateTimetable(){
    let data = {
      timetable_code: this.timetableForm.controls.timetableCode.value,
      timetable_name: this.timetableForm.controls.timetableName.value,
      term: {
        id: this.selectedTermId,
        data: this.selectedTermData,
      },
    }

    console.log(data);
    this.isTimetableSaving = true;

    this.timetableApi.updateTimetable(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isTimetableSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isTimetableSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteTimetable(){
    this.isTimetableDeleting = true;

    this.timetableApi.deleteTimetable()
      .then(
        (res: any) => {
          console.log(res);

          this.router.navigateByUrl('/home/timetable/all-timetable');
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openTermWindow(){
    console.log("You are opening select term window")
    // this.selectTerm.openModal();
  }

  onTermSelected(termData: any){
    console.log(termData);

    this.timetableForm.controls.term.setValue(termData.data().term.term_name);
    this.selectedTermId = termData.id;
    this.selectedTermData = termData.data();
  }

  onPrint(){
    console.log("lets start printing...");
    // this.timetablePrint.printViewTimetable();
  }

}
