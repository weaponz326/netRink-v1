import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/compat/app';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';

import { Note } from 'projects/personal/src/app/models/modules/notes/notes.model';


@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  constructor(
    private router: Router,
    private notesApi: NotesApiService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Note", url: "/home/notes/new-note" },
  ];

  subject: any;
  body: any;

  modules: any;
  styles: any;

  ngOnInit(): void {
    this.initModules();
    this.initStyles();
  }

  createNote(){
    let noteData: Note = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
      user: localStorage.getItem('personal_id') as string,
      subject: this.subject,
      body: this.body,
      updated_at: firebase.default.firestore.FieldValue.serverTimestamp(),
    }

    console.log(noteData);

    this.notesApi.createNote(noteData)
      .then(
        (res: any) => {
          console.log(res);

          sessionStorage.setItem('personal_note_id', res.id);
          this.router.navigateByUrl('/home/notes/view-note');
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

}
