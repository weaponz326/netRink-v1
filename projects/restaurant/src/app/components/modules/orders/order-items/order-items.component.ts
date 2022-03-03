import { Component, OnInit, ViewChild } from '@angular/core';

import { AddItemComponent } from '../add-item/add-item.component'
import { EditItemComponent } from '../edit-item/edit-item.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';


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

  totalAmount = 0;

  deleteId = "";
  isItemDeleting = false;

  isFetchingGridData = false;

  ngOnInit(): void {
    this.getOrderOrderItem();
  }

  getOrderOrderItem(){
    this.isFetchingGridData = true;

    this.ordersApi.getOrderOrderItem()
      .then(
        (res: any) => {
          console.log(res);
          this.itemsGridData = res.docs;
          this.calculateTotalPrice();

          this.isFetchingGridData = false;
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  calculateTotalPrice(){
    this.totalAmount = 0;
    for (let item of this.itemsGridData){
      this.totalAmount += item.data().menu_item.data.price * item.data().quantity;
    }

    this.updateTotalAmount();
    console.log(this.totalAmount);
  }

  createOrderItem(data: any){
    console.log(data);
    this.addItem.isItemSaving = true;

    this.ordersApi.createOrderItem(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.getOrderOrderItem();

            this.addItem.isItemSaving = false;
            this.addItem.dismissButton.nativeElement.click();
            this.addItem.resetForm();
          }
        },
        (err: any) => {
          console.log(err);
          this.addItem.isItemSaving = false;
          this.addItem.dismissButton.nativeElement.click();
          this.connectionToast.openToast();
        }
      )
  }

  updateOrderItem(order_item: any){
    console.log(order_item);
    this.editItem.isItemSaving = true;

    this.ordersApi.updateOrderItem(order_item.id, order_item.data)
      .then(
        (res: any) => {
          console.log(res);

          this.editItem.isItemSaving = false;
          this.editItem.dismissButton.nativeElement.click();
          this.getOrderOrderItem();
        },
        (err: any) => {
          console.log(err);
          this.editItem.isItemSaving = false;
          this.editItem.dismissButton.nativeElement.click();
          this.connectionToast.openToast();
        }
      )
  }

  deleteOrderItem(id: any){
    this.isItemDeleting = true;

    this.ordersApi.deleteOrderItem(id)
      .then(
        (res: any) => {
          console.log(res);
          this.isItemDeleting = false;
          this.getOrderOrderItem();
        },
        (err: any) => {
          console.log(err);
          this.isItemDeleting = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateTotalAmount(){
    let data = {total_amount: this.totalAmount}

    this.ordersApi.updateOrder(data)
      .then(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditItem(data: any){
    console.log(data);
    this.editItem.openModal(data);
  }

  confirmDelete(id: any){
    this.deleteId = id;
    this.deleteModal.openModal();
  }

}
