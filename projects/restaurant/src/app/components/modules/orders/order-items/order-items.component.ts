import { Component, OnInit, ViewChild } from '@angular/core';

import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';

import { AddItemComponent } from '../add-item/add-item.component'
import { EditItemComponent } from '../edit-item/edit-item.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'


@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss']
})
export class OrderItemsComponent implements OnInit {

  constructor(private ordersApi: OrdersApiService) { }

  @ViewChild('addItemComponentReference', { read: AddItemComponent, static: false }) addItem!: AddItemComponent;
  @ViewChild('editItemComponentReference', { read: EditItemComponent, static: false }) editItem!: EditItemComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  itemsGridData: any[] = [];

  totalPrice = 0;

  deleteId = "";
  deleteIndex = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getItems();
  }

  getItems(){
    this.ordersApi.getItems()
      .subscribe(
        res => {
          console.log(res);
          this.itemsGridData = res;
          this.calculateTotalPrice();
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  calculateTotalPrice(){
    this.totalPrice = this.itemsGridData.reduce((total, {price}) => total + Number(price), 0);
    console.log(this.totalPrice);
  }

  postItem(data: any){
    console.log(data);

    this.ordersApi.postItem(data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.itemsGridData.push(res);
            this.calculateTotalPrice();
            this.addItem.resetForm();
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  putItem(data: any){
    console.log(data);

    this.ordersApi.putItem(data.id, data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.itemsGridData[data.index] = res;
            this.calculateTotalPrice();
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteItem(){
    this.ordersApi.deleteItem(this.deleteId)
      .subscribe(
        res => {
          console.log(res);
          this.itemsGridData.splice(this.deleteIndex, 1);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditItem(index: any){
    console.log(index);
    this.editItem.openModal(index, this.itemsGridData[index]);
  }

  confirmDelete(index: any, id: any){
    this.deleteIndex = index;
    this.deleteId = id;

    this.deleteModal.openModal();
  }

}
