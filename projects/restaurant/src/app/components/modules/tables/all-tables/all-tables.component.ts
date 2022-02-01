import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { TablesApiService } from 'projects/restaurant/src/app/services/modules/tables-api/tables-api.service';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'


@Component({
  selector: 'app-all-tables',
  templateUrl: './all-tables.component.html',
  styleUrls: ['./all-tables.component.scss']
})
export class AllTablesComponent implements OnInit {

  constructor(
    private router: Router,
    private tablesApi: TablesApiService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('tableNumberSortingComponentReference', { read: TableSortingComponent, static: false }) tableNumberSorting!: TableSortingComponent;
  @ViewChild('tableTypeSortingComponentReference', { read: TableSortingComponent, static: false }) tableTypeSorting!: TableSortingComponent;
  @ViewChild('tableStatusSortingComponentReference', { read: TableSortingComponent, static: false }) tableStatusSorting!: TableSortingComponent;

  navHeading: any[] = [
    { text: "All Tables", url: "/home/tables/all-tables" },
  ];

  tablesGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;
  totalItems = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getTables();
  }

  getTables(){
    this.tablesApi.getTables()
      .subscribe(
        res => {
          console.log(res);
          this.tablesGridData = res;
          this.currentPage = res.current_page;
          this.totalPages = res.total_pages;
          this.totalItems = res.count;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  viewTable(tableId: any){
    console.log(tableId);
    sessionStorage.setItem('restaurant_table_id', tableId);

    this.router.navigateByUrl('/home/tables/view-table');
  }

  sortTable(field: any){
    console.log(field);
    this.getTables();

    if((field == 'table_number') || (field == "-table_number")){
      this.tableNumberSorting.resetSort();
    }
    else if((field == 'table_type') || (field == "-table_type")){
      this.tableTypeSorting.resetSort();
    }
    else if((field == 'table_status') || (field == "-table_status")){
      this.tableStatusSorting.resetSort();
    }
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
