import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import * as firebase from 'firebase/compat/app';

import { Batch } from 'projects/restaurant/src/app/models/modules/roster/roster.model';


@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.scss']
})
export class AddBatchComponent implements OnInit {

  constructor() { }

  @Output() saveBatchEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  batchForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initBatchForm();
  }

  initBatchForm(){
    this.batchForm = new FormGroup({
      batchName: new FormControl(''),
      batchSymbol: new FormControl(''),
    })
  }


  openModal(){
    this.buttonElement.nativeElement.click();
  }

  saveBatch(){
    let data: Batch = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
      roster: sessionStorage.getItem('restaurant_roster_id') as string,
      batch_name: this.batchForm.controls.batchName.value,
      batch_symbol: this.batchForm.controls.batchSymbol.value,
    }
    this.saveBatchEvent.emit(data);
  }

  resetForm(){
    this.batchForm.controls.batchName.setValue('');
    this.batchForm.controls.batchSymbol.setValue('');
  }

}
