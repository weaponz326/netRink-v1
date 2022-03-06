import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { serverTimestamp } from 'firebase/firestore';

import { Batch } from 'projects/restaurant/src/app/models/modules/roster/roster.model';


@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.scss']
})
export class AddBatchComponent implements OnInit {

  constructor() { }

  @Output() saveBatchEvent = new EventEmitter<any>();

  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  batchForm: FormGroup = new FormGroup({});

  isSaving = false;

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
    this.addButton.nativeElement.click();
  }

  saveBatch(){
    let data: Batch = {
      created_at: serverTimestamp(),
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
