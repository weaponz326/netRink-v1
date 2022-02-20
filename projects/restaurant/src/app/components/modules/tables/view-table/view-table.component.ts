import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { TableFormComponent } from '../table-form/table-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { TablesApiService } from 'projects/restaurant/src/app/services/modules/tables-api/tables-api.service';
import { TablesPrintService } from 'projects/restaurant/src/app/services/printing/tables-print/tables-print.service';

import { Table } from 'projects/restaurant/src/app/models/modules/tables/tables.model';


@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss']
})
export class ViewTableComponent implements OnInit {

  constructor(
    private router: Router,
    private tablesApi: TablesApiService,
    private tablesPrint: TablesPrintService
  ) { }

  @Output() saveTableEvent = new EventEmitter<any>();
  @Output() deleteTableEvent = new EventEmitter<any>();

  @ViewChild('editButtonElementReference', { read: ElementRef, static: false }) editButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;
  @ViewChild('tableFormComponentReference', { read: TableFormComponent, static: false }) tableForm!: TableFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  tableData: any;

  isTableSaving = false;
  isTableDeleting = false;

  ngOnInit(): void {
  }

  openModal(data: any){
    this.tableData = data;

    this.tableForm.tableForm.controls.tableNumber.setValue(data.data().table_number);
    this.tableForm.tableForm.controls.tableType.setValue(data.data().table_type);
    this.tableForm.tableForm.controls.capacity.setValue(data.data().capacity);
    this.tableForm.tableForm.controls.location.setValue(data.data().location);
    this.tableForm.tableForm.controls.tableStatus.setValue(data.data().table_status);

    this.editButton.nativeElement.click();
  }

  saveTable(){
    let data: Table = {
      created_at: this.tableData.data().created_at,
      account: localStorage.getItem('restaurant_id') as string,
      table_number: this.tableForm.tableForm.controls.tableNumber.value,
      table_type: this.tableForm.tableForm.controls.tableType.value,
      capacity: this.tableForm.tableForm.controls.capacity.value,
      location: this.tableForm.tableForm.controls.location.value,
      table_status: this.tableForm.tableForm.controls.tableStatus.value,
    }

    let table = {
      id: this.tableData.id,
      data: data
    }

    this.saveTableEvent.emit(table);
  }

  deleteTable(){
    this.deleteTableEvent.emit(this.tableData.id);
  }

}
