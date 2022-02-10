import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class NotesApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  noteRef = this.afs.collection('personal/module_notes/notes_note');

  // note

  createNote(note: any){
    return this.noteRef.add(note);
  }

  getNote(){
    return this.noteRef.doc(String(sessionStorage.getItem('personal_note_id'))).ref.get();
  }

  updateNote(note: any){
    return this.noteRef.doc(String(sessionStorage.getItem('personal_note_id'))).update(note);
  }

  deleteNote(){
    return this.noteRef.doc(String(sessionStorage.getItem('personal_note_id'))).delete();
  }

  getAllUserNote(sorting: any, pageSize: any, pageStart: any){
    return this.noteRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      .limit(pageSize)
      .orderBy(sorting.field, sorting.direction)
      .startAt(pageStart)
      .get();
  }

}
