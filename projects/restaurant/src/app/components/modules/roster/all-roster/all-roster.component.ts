import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';

import { NewRosterComponent } from '../new-roster/new-roster.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'


@Component({
  selector: 'app-all-roster',
  templateUrl: './all-roster.component.html',
  styleUrls: ['./all-roster.component.scss']
})
export class AllRosterComponent implements OnInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService
  ) { }

  @ViewChild('newRosterComponentReference', { read: NewRosterComponent, static: false }) newRoster!: NewRosterComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('rosterCodeSortingComponentReference', { read: TableSortingComponent, static: false }) rosterCodeSorting!: TableSortingComponent;
  @ViewChild('rosterNameSortingComponentReference', { read: TableSortingComponent, static: false }) rosterNameSorting!: TableSortingComponent;

  navHeading: any[] = [
    { text: "All Roster", url: "/home/roster/all-roster" },
  ];

  rosterGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;
  totalItems = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getRoster();
  }

  getRoster(){
    this.rosterApi.getRoster()
      .subscribe(
        res => {
          console.log(res);
          this.rosterGridData = res;
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

  viewRoster(rosterId: any){
    console.log(rosterId);

    sessionStorage.setItem("restaurant_roster_id", rosterId);
    this.router.navigateByUrl("/home/roster/view-roster");
  }

  sortTable(field: any){
    console.log(field);
    this.getRoster();

    if((field == 'roster_code') || (field == "-roster_code")){
      this.rosterCodeSorting.resetSort();
    }
    else if((field == 'roster_name') || (field == "-roster_name")){
      this.rosterNameSorting.resetSort();
    }
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
