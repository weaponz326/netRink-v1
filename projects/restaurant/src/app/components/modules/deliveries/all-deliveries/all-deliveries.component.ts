import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NewDeliveryComponent } from '../new-delivery/new-delivery.component'
import { EditDeliveryComponent } from '../edit-delivery/edit-delivery.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { DeliveriesApiService } from 'projects/restaurant/src/app/services/modules/deliveries-api/deliveries-api.service';
import { DeliveriesPrintService } from 'projects/restaurant/src/app/services/printing/deliveries-print/deliveries-print.service';


@Component({
  selector: 'app-all-deliveries',
  templateUrl: './all-deliveries.component.html',
  styleUrls: ['./all-deliveries.component.scss']
})
export class AllDeliveriesComponent implements OnInit {

  constructor(
    private router: Router,
    private deliveriesApi: DeliveriesApiService,
    private deliveriesPrint: DeliveriesPrintService,
  ) { }

  @ViewChild('editDeliveryComponentReference', { read: EditDeliveryComponent, static: false }) editDelivery!: EditDeliveryComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Deliveries", url: "/home/deliveries/all-deliveries" },
  ];

  deliveriesGridData: any[] = [];

  deleteId = "";
  deleteIndex = 0;

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
    this.getAccountDelivery();
  }

  getAccountDelivery(){
    this.isFetchingGridData = true;

    this.deliveriesApi.getAccountDelivery(this.sortParams, 20)
      .then(
        (res: any) => {
          console.log(res);

          this.deliveriesGridData = res.docs;
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

    this.deliveriesApi.getAccountDeliveryNext(this.sortParams, 20, this.nextStartAfter)
      .then(
        (res: any) => {
          console.log(res);

          this.deliveriesGridData = res.docs;
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

    this.deliveriesApi.getAccountDeliveryPrev(this.sortParams, 20, this.prevStartAt)
      .then(
        (res: any) => {
          console.log(res);

          this.deliveriesGridData = res.docs;
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

    this.getAccountDelivery();
  }

  updateDelivery(data: any){
    console.log(data);

    this.deliveriesApi.updateDelivery(data.id, data.delivery)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.deliveriesGridData[data.index] = res;
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteDelivery(){
    this.deliveriesApi.deleteDelivery(this.deleteId)
      .then(
        (res: any) => {
          console.log(res);
          this.deliveriesGridData.splice(this.deleteIndex, 1);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditDelivery(index: any){
    console.log(index);
    this.editDelivery.openModal(index, this.deliveriesGridData[index]);
  }

  confirmDelete(index: any, id: any){
    this.deleteIndex = index;
    this.deleteId = id;

    this.deleteModal.openModal();
  }

  onPrint(){
    console.log("lets start printing...");
    this.deliveriesPrint.printAllDeliveries();
  }

}
