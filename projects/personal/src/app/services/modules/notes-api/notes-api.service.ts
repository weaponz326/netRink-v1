import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class NotesApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  noteRef = this.afs.collection('personal/notes/note');

  personalId = localStorage.getItem('personal_id') as string;
  noteId = sessionStorage.getItem('personal_note_id') as string;

  // note

  createNote(note: any){
    return this.noteRef.add(note);
  }

  getNote(){
    return this.noteRef.doc(this.noteId).ref.get();
  }

  updateNote(note: any){
    return this.noteRef.doc(this.noteId).update(note);
  }

  deleteNote(){
    return this.noteRef.doc(this.noteId).delete();
  }

  getAllUserNote(ordering: any, pageSize: any, pageStart: any){
    return this.noteRef.ref
      .where("user", "==", this.personalId)
      .orderBy(ordering.field, ordering.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

}
