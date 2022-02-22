import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from '../../../module-utilities/delete-modal/delete-modal.component'

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';

import { Note } from 'projects/personal/src/app/models/modules/notes/notes.model';


@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.scss']
})
export class ViewNoteComponent implements OnInit {

  constructor(
    private router: Router,
    private notesApi: NotesApiService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Notes", url: "/home/notes/all-notes" },
    { text: "Note View", url: "/home/notes/view-note" },
  ];

  subject: any;
  body: any;

  noteData: any;

  modules: any;
  styles: any;

  isNoteLoading = false;
  isNoteSaving = false;
  isNoteDeleting = false;

  ngOnInit(): void {
    this.initModules();
    this.initStyles();
  }

  ngAfterViewInit(): void {
    this.getNote();
  }

  getNote(){
    this.isNoteLoading = true;

    this.notesApi.getNote()
      .then(
        (res: any) => {
          console.log(res);

          this.noteData = res;
          this.subject = this.noteData.data().subject;
          this.body = this.noteData.data().body;

          this.isNoteLoading = false;
        },
        err => {
          console.log(err);
          this.isNoteLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateNote(){
    this.isNoteSaving = true;

    let noteData = {
      subject: this.subject,
      body: this.body,
      updated_at: serverTimestamp(),
    }

    console.log(noteData);

    this.notesApi.updateNote(noteData)
      .then(
        (res: any) => {
        this.isNoteSaving = false;
        console.log(res);
        },
        (err: any) => {
          console.log(err);
        this.isNoteSaving = false;
        this.connectionToast.openToast();
        }
      )
  }

  deleteNote(){
    this.isNoteDeleting = true;

    this.notesApi.deleteNote()
      .then(
        (res: any) => {
          console.log(res);
          this.isNoteDeleting = false;
          sessionStorage.removeItem('personal_note_id');
          this.router.navigateByUrl('/home/notes/all-notes');
        },
        (err: any) => {
          console.log(err);
          this.isNoteDeleting = false;
          this.connectionToast.openToast();
        }
      )
  }

  initModules(){
    this.modules = {
      // 'emoji-shortname': true,
      // 'emoji-textarea': true,
      // 'emoji-tooolbar': true,
    }
  }

  initStyles(){
    this.modules = {
      height: '250px',
    }
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
