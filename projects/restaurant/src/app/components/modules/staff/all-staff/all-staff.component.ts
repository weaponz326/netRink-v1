import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { StaffApiService } from 'projects/restaurant/src/app/services/modules/staff-api/staff-api.service';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'


@Component({
  selector: 'app-all-staff',
  templateUrl: './all-staff.component.html',
  styleUrls: ['./all-staff.component.scss']
})
export class AllStaffComponent implements OnInit {

  constructor(
    private router: Router,
    private staffApi: StaffApiService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('staffCodeSortingComponentReference', { read: TableSortingComponent, static: false }) staffCodeSorting!: TableSortingComponent;
  @ViewChild('staffNameSortingComponentReference', { read: TableSortingComponent, static: false }) staffNameSorting!: TableSortingComponent;
  @ViewChild('departmentSortingComponentReference', { read: TableSortingComponent, static: false }) departmentSorting!: TableSortingComponent;
  @ViewChild('jobSortingComponentReference', { read: TableSortingComponent, static: false }) jobSorting!: TableSortingComponent;

  navHeading: any[] = [
    { text: "All Staff", url: "/home/staff/all-staff" },
  ];

  staffGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;
  totalItems = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getStaff();
  }

  getStaff(){
    this.staffApi.getStaff()
      .subscribe(
        res => {
          console.log(res);
          this.staffGridData = res;
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

  viewStaff(staffId: any){
    console.log(staffId);
    sessionStorage.setItem('restaurant_staff_id', staffId);

    this.router.navigateByUrl('/home/staff/view-staff');
  }

  sortTable(field: any){
    console.log(field);
    this.getStaff();

    if((field == 'staff_code') || (field == "-staff_code")){
      this.staffCodeSorting.resetSort();
    }
    else if((field == 'staff_name') || (field == "-staff_name")){
      this.staffNameSorting.resetSort();
    }
    else if((field == 'department') || (field == "-department")){
      this.departmentSorting.resetSort();
    }
    else if((field == 'job') || (field == "-job")){
      this.jobSorting.resetSort();
    }
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
