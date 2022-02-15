import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NewMenuGroupComponent } from '../new-menu-group/new-menu-group.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';
import { MenuPrintService } from 'projects/restaurant/src/app/services/printing/menu-print/menu-print.service';


@Component({
  selector: 'app-all-menu-groups',
  templateUrl: './all-menu-groups.component.html',
  styleUrls: ['./all-menu-groups.component.scss']
})
export class AllMenuGroupsComponent implements OnInit {

  constructor(
    private router: Router,
    private menuApi: MenuApiService,
    private menuPrint: MenuPrintService,
  ) { }

  @ViewChild('newMenuGroupComponentReference', { read: NewMenuGroupComponent, static: false }) newMenuGroup!: NewMenuGroupComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Menu Groups", url: "/home/menu/all-menu-groups" },
  ];

  menuGroupGridData: any[] = [];

  isFetchingGridData: boolean =  false;
  isDataAvailable: boolean =  true;

  firstInResponse: any = [];
  lastInResponse: any = [];
  nextStartAfter: any = [];
  prevStartAt: any = [];
  pageNumber = 0;
  disableNext: boolean = false;
  disablePrev: boolean = true;

  sortParams = {
    field: "created_at",
    direction: "desc"
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAccountMenuGroup();
  }

  getAccountMenuGroup(){
    this.isFetchingGridData = true;

    this.menuApi.getAccountMenuGroup(this.sortParams, 20)
      .then(
        (res: any) => {
          console.log(res);

          this.menuGroupGridData = res.docs;
          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber = 1;

          this.disableNext = false;
          this.disablePrev = true;
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  nextPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.menuApi.getAccountMenuGroupNext(this.sortParams, 20, this.nextStartAfter)
      .then(
        (res: any) => {
          console.log(res);

          this.menuGroupGridData = res.docs;
          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber++;

          if (res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = false;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  previousPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.menuApi.getAccountMenuGroupPrev(this.sortParams, 20, this.prevStartAt)
      .then(
        (res: any) => {
          console.log(res);

          this.menuGroupGridData = res.docs;
          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber++;

          if (this.pageNumber == 1){
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getAccountMenuGroup();
  }

  viewMenuGroup(menuGroupId: any){
    console.log(menuGroupId);

    sessionStorage.setItem("restaurant_menu_group_id", menuGroupId);
    this.router.navigateByUrl("/home/menu/view-menu-group");
  }

  onPrint(){
    console.log("lets start printing...");
    this.menuPrint.printAllMenuGroup();
  }

}
