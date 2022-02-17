import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';


@Component({
  selector: 'app-select-note',
  templateUrl: './select-note.component.html',
  styleUrls: ['./select-note.component.scss']
})
export class SelectNoteComponent implements OnInit {

  constructor(private notesApi: NotesApiService) { }

  @Output() noteSelected = new EventEmitter<object>();

  @ViewChild('openButtonElementReference', { read: ElementRef, static: false }) openButton!: ElementRef;
  @ViewChild('closeButtonElementReference', { read: ElementRef, static: false }) closeButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  notesGridData: any[] = [];

  isFetchingGridData: boolean =  false;
  isDataAvailable: boolean =  true;

  firstInResponse: any = [];
  lastInResponse: any = [];
  prevStartAt: any = [];
  nextStartAfter: any = [];
  pageNumber = 0;
  disableNext: boolean = true;
  disablePrev: boolean = true;

  sortParams = {
    field: "updated_at",
    direction: "desc"
  }

  ngOnInit(): void {
  }

  openModal(){
    this.getUserNote();
    this.openButton.nativeElement.click();
  }

  getUserNote(){
    this.isFetchingGridData = true;

    this.notesApi.getUserNote(this.sortParams, 20)
      .then(
        (res: any) => {
          console.log(res);
          this.notesGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber = 1;
          if (!res.docs.length) this.isDataAvailable = false;

          if (!res.docs.length || res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = true;
          }
          else{
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  nextPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.notesApi.getUserNoteNext(this.sortParams, 20, this.nextStartAfter)
      .then(
        (res: any) => {
          console.log(res);
          this.notesGridData = res.docs;

          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber++;

          if (res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = false;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  previousPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.notesApi.getUserNotePrev(this.sortParams, 20, this.prevStartAt)
      .then(
        (res: any) => {
          console.log(res);
          this.notesGridData = res.docs;

          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber++;

          if (this.pageNumber == 1){
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getUserNote();
  }

  selectRow(row: any){
    this.noteSelected.emit(row);
    this.closeButton.nativeElement.click();
    console.log(row);
  }

}
