import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class NotesApiService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  noteRef = this.afs.collection('personal/module_notes/personal_note');

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

  getUserNote(sorting: any, pageSize: any){
    return this.noteRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      // .orderBy(sorting.field, sorting.direction)
      .limit(pageSize)
      .get();
  }

  getUserNoteNext(sorting: any, pageSize: any, pageStart: any){
    return this.noteRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      // .orderBy(sorting.field, sorting.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getUserNotePrev(sorting: any, pageSize: any, pageStart: any){
    return this.noteRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      // .orderBy(sorting.field, sorting.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllUserNote(){
    return this.noteRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      // .orderBy("created_at", "desc")
      .get();
  }

  // dashboard

  getWeekNote(startDate: any, endDate: any){
    return this.noteRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      // .where("created_at", "<", startDate).where("created_at", ">", endDate)
      .get();
  }

}
