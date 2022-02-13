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

  totalAmount = 0;

  deleteId = "";
  deleteIndex = 0;

  isFetchingGridData = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getItems();
  }

  getItems(){
    this.isFetchingGridData = true;

    this.ordersApi.getAccountOrderItem()
      .then(
        (res: any) => {
          console.log(res);
          this.isFetchingGridData = false;

          for (let item of res.docs) {
            this.itemsGridData.push(item.data());
          }

          this.calculateTotalPrice();
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  calculateTotalPrice(){
    for (let item of this.itemsGridData){
      this.totalAmount += item.menu_item.price * item.quantity;
    }

    this.updateTotalAmount();
    console.log(this.totalAmount);
  }

  createOrderItem(data: any){
    console.log(data);

    this.ordersApi.createOrderItem(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.itemsGridData.push(data);
            this.calculateTotalPrice();
            this.addItem.resetForm();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateOrderItem(data: any){
    console.log(data);

    this.ordersApi.updateOrderItem(data.id, data.order_item)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.itemsGridData[data.index] = data.order_item;
            this.calculateTotalPrice();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteOrderItem(){
    this.ordersApi.deleteOrderItem(this.deleteId)
      .then(
        (res: any) => {
          console.log(res);
          this.itemsGridData.splice(this.deleteIndex, 1);
          this.calculateTotalPrice();
        },
        (err: any) => {
          console.log(err);
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
