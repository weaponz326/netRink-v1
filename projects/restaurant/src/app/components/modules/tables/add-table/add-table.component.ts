import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/compat/app';

import { TableFormComponent } from '../table-form/table-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { TablesApiService } from 'projects/restaurant/src/app/services/modules/tables-api/tables-api.service';

import { Table } from 'projects/restaurant/src/app/models/modules/tables/tables.model';


@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.scss']
})
export class AddTableComponent implements OnInit {

  constructor(
    private router: Router,
    private tablesApi: TablesApiService
  ) { }

  @Output() saveItemEvent = new EventEmitter<any>();

  @ViewChild('tableFormComponentReference', { read: TableFormComponent, static: false }) tableForm!: TableFormComponent;
  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  isTableSaving = false;

  ngOnInit(): void {
  }

  openModal(){
    this.addButton.nativeElement.click();
  }

  saveTable(){
    let data: Table = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
      account: localStorage.getItem('restaurant_id') as string,
      table_number: this.tableForm.tableForm.controls.tableNumber.value,
      table_type: this.tableForm.tableForm.controls.tableType.value,
      capacity: this.tableForm.tableForm.controls.capacity.value,
      location: this.tableForm.tableForm.controls.location.value,
      table_status: this.tableForm.tableForm.controls.tableStatus.value,
    }

    this.saveItemEvent.emit(data);
  }

  resetForm(){
    this.tableForm.tableForm.controls.tableNumber.setValue("");
    this.tableForm.tableForm.controls.tableType.setValue("");
    this.tableForm.tableForm.controls.capacity.setValue("");
    this.tableForm.tableForm.controls.location.setValue("");
    this.tableForm.tableForm.controls.tableStatus.setValue("");
  }

}
