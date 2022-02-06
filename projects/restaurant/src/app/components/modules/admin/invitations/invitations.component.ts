import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'

import { AdminApiService } from 'projects/restaurant/src/app/services/modules/admin-api/admin-api.service';

import { Invitation } from 'projects/restaurant/src/app/models/modules/admin/admin.model';


@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {

  constructor(
    private router: Router,
    private adminApi: AdminApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('invitationDateSortingComponentReference', { read: TableSortingComponent, static: false }) invitationDateSorting!: TableSortingComponent;
  @ViewChild('inviteeNameSortingComponentReference', { read: TableSortingComponent, static: false }) inviteeNameSorting!: TableSortingComponent;
  @ViewChild('invitationStatusSortingComponentReference', { read: TableSortingComponent, static: false }) invitationStatusSorting!: TableSortingComponent;

  navHeading: any[] = [
    { text: "Invitations", url: "/home/admin/invitations" },
  ];

  invitationsGridData: Invitation[] = [];

  currentPage = 0;
  totalPages = 0;
  totalItems = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAllAccountInvitation();
  }

  getAllAccountInvitation(){
    this.adminApi.getAllAccountInvitation({}, 20, {})
      .then(
        (res: any) => {
          console.log(res);
          this.invitationsGridData = res;
          this.currentPage = res.current_page;
          this.totalPages = res.total_pages;
          this.totalItems = res.count;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  viewInvitation(invitationId: any){
    console.log(invitationId);
    sessionStorage.setItem('restaurant_invitation_id', invitationId);

    this.router.navigateByUrl('/home/admin/view-invitation');
  }

  sortTable(field: any){
    console.log(field);
    this.getAllAccountInvitation();

    if((field == 'invitation_date') || (field == "-invitation_date")){
      this.invitationDateSorting.resetSort();
    }
    else if((field == 'invitee_name') || (field == "-invitee_name")){
      this.inviteeNameSorting.resetSort();
    }
    else if((field == 'invitation_status') || (field == "-invitation_status")){
      this.invitationStatusSorting.resetSort();
    }
  }

    // this.columns = <GridColumn[]>[
    //   { label: "Invitation Date", dataField: "date_sent", width: "25%" },
    //   { label: "User's Name", dataField: "invitee_name", width: "50%" },
    //   { label: "Invitation Status", dataField: "invitation_status", width: "25%" },
    // ];

}
