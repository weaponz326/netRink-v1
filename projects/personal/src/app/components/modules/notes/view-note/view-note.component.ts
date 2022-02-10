import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/compat/app';

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

  ngOnInit(): void {
    this.initModules();
    this.initStyles();
  }

  ngAfterViewInit(): void {
    this.getNote();
  }

  getNote(){
    this.notesApi.getNote()
      .then(
        (res: any) => {
          console.log(res);

          this.noteData = res;
          this.subject = this.noteData.data().subject;
          this.body = this.noteData.data().body;

        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateNote(){
    let noteData: Note = {
      created_at: this.noteData.data().created_at,
      user: localStorage.getItem('personal_id') as string,
      subject: this.subject,
      body: this.body,
      updated_at: firebase.default.firestore.FieldValue.serverTimestamp(),
    }

    console.log(noteData);

    this.notesApi.updateNote(noteData)
      .then(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteNote(){
    this.notesApi.deleteNote()
      .then(
        (res: any) => {
          console.log(res);
          sessionStorage.removeItem('personal_note_id');
          this.router.navigateByUrl('/home/notes/all-notes');
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  initModules(){
    this.modules = {
      'emoji-shortname': true,
      'emoji-textarea': true,
      'emoji-tooolbar': true,
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
