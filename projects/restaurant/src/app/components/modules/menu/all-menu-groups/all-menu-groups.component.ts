import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';

import { NewMenuGroupComponent } from '../new-menu-group/new-menu-group.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'


@Component({
  selector: 'app-all-menu-groups',
  templateUrl: './all-menu-groups.component.html',
  styleUrls: ['./all-menu-groups.component.scss']
})
export class AllMenuGroupsComponent implements OnInit {

  constructor(
    private router: Router,
    private menuApi: MenuApiService,
  ) { }

  @ViewChild('newMenuGroupComponentReference', { read: NewMenuGroupComponent, static: false }) newMenuGroup!: NewMenuGroupComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('menuGroupSortingComponentReference', { read: TableSortingComponent, static: false }) menuGroupSorting!: TableSortingComponent;
  @ViewChild('categorySortingComponentReference', { read: TableSortingComponent, static: false }) categorySorting!: TableSortingComponent;

  navHeading: any[] = [
    { text: "All Menu Groups", url: "/home/menu/all-menu-groups" },
  ];

  menuGroupGridData: any[] = [];

  currentPage = 0;
  totalPages = 0;
  totalItems = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getMenuGroups();
  }

  getMenuGroups(){
    this.menuApi.getMenuGroups()
      .subscribe(
        res => {
          console.log(res);
          this.menuGroupGridData = res.results;
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

  viewMenuGroup(menuGroupId: any){
    console.log(menuGroupId);

    sessionStorage.setItem("restaurant_menu_group_id", menuGroupId);
    this.router.navigateByUrl("/home/menu/view-menu-group");
  }

  sortTable(field: any){
    console.log(field);
    this.getMenuGroups();

    if((field == 'menu_group') || (field == "-menu_group")){
      this.menuGroupSorting.resetSort();
    }
    else if((field == 'category') || (field == "-category")){
      this.categorySorting.resetSort();
    }
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
