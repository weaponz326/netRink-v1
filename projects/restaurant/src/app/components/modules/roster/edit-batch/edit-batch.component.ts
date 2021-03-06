import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Batch } from 'projects/restaurant/src/app/models/modules/roster/roster.model';


@Component({
  selector: 'app-edit-batch',
  templateUrl: './edit-batch.component.html',
  styleUrls: ['./edit-batch.component.scss']
})
export class EditBatchComponent implements OnInit {

  @Output() saveBatchEvent = new EventEmitter<any>();
  @Output() deleteBatchEvent = new EventEmitter<any>();

  @ViewChild('editButtonElementReference', { read: ElementRef, static: false }) editButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  batchForm: FormGroup = new FormGroup({});
  batchData: any;

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

  openModal(data: any){
    console.log(data);
    this.batchData = data;

    this.batchForm.controls.batchName.setValue(data.data().batch_name);
    this.batchForm.controls.batchSymbol.setValue(data.data().batch_symbol);

    this.editButton.nativeElement.click();
  }

  saveBatch(){
    let data = {
      batch_name: this.batchForm.controls.batchName.value,
      batch_symbol: this.batchForm.controls.batchSymbol.value,
    }

    let batch = {
      id: this.batchData.id,
      data: data,
    }

    this.saveBatchEvent.emit(batch);
  }

}
