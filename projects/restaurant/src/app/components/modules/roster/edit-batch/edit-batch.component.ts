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

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  batchForm: FormGroup = new FormGroup({});
  batchFormData: any;

  selectedIndex: any = 0;
  selectedId: any = "";

  ngOnInit(): void {
    this.initBatchForm();
  }

  initBatchForm(){
    this.batchForm = new FormGroup({
      batchName: new FormControl(''),
      batchSymbol: new FormControl(''),
    })
  }

  openModal(index: any, data: any){
    this.batchFormData = data;

    this.selectedIndex = index;
    this.selectedId = data.id;

    this.batchForm.controls.batchName.setValue(data.batch_name);
    this.batchForm.controls.batchSymbol.setValue(data.batch_symbol);

    this.buttonElement.nativeElement.click();
  }

  saveBatch(){
    let batch: Batch = {
      created_at: this.batchFormData.created_at,
      roster: sessionStorage.getItem('restaurant_roster_id') as string,
      batch_name: this.batchForm.controls.batchName.value,
      batch_symbol: this.batchForm.controls.batchSymbol.value,
    }

    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
      batch: batch
    }

    this.saveBatchEvent.emit(data);
  }

  deleteBatch(){
    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
    }

    this.deleteBatchEvent.emit(data);
  }

}
