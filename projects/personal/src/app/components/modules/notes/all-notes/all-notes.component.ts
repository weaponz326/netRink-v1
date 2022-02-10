import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';
import { NotesPrintService } from 'projects/personal/src/app/services/printing/notes-print/notes-print.service';

import { Note } from 'projects/personal/src/app/models/modules/notes/notes.model';



@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {

  constructor(
    private router: Router,
    private notesApi: NotesApiService,
    private notesPrint: NotesPrintService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Notes", url: "/home/notes/all-notes" },
  ];

  notesGridData: any[] = [];

  isFetchingGridData: boolean =  false;
  isDataAvailable: boolean =  true;

  firstInResponse: any = [];
  lastInResponse: any = [];
  prevStartAt: any = [];
  nextStartAt: any = [];
  pageNumber = 1;
  disableNext: boolean = false;
  disablePrev: boolean = true;

  sortParams = {
    field: "updated_at",
    direction: "desc"
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAllUserNote(this.sortParams, 20, null);
  }

  getAllUserNote(sorting: any, pageSize: any, pageStart: any){
    this.isFetchingGridData = true;

    this.notesApi.getAllUserNote(sorting, pageSize, pageStart)
      .then(
        (res: any) => {
          console.log(res);

          this.notesGridData = res.docs;
          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAt = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];

          this.disableNext = false;
          this.disablePrev = false;
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  viewNote(id: any){
    console.log(id);

    sessionStorage.setItem('personal_note_id', id);
    this.router.navigateByUrl('/home/notes/view-note')
  }

  nextPage(e: any){
    e.preventDefault();
    this.disableNext = true;

    this.sortParams = { field: "updated_at", direction: "desc" };
    this.getAllUserNote(this.sortParams, 20, this.nextStartAt);
    this.pageNumber++;
  }

  previousPage(e: any){
    e.preventDefault();
    this.disablePrev = true;

    this.sortParams = { field: "updated_at", direction: "desc" };
    this.getAllUserNote(this.sortParams, 20, this.prevStartAt);
    this.pageNumber--;
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getAllUserNote(this.sortParams, 20, null);
  }

  onPrint(){
    console.log("lets start printing...");
    // this.notesPrint.getPrintNotes(this.totalItems);
  }

}
