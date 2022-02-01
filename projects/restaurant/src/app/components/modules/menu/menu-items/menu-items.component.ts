import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';

import { AddMenuItemComponent } from '../add-menu-item/add-menu-item.component'
import { EditMenuItemComponent } from '../edit-menu-item/edit-menu-item.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {

  constructor(private menuApi: MenuApiService) { }

  @ViewChild('addMenuItemComponentReference', { read: AddMenuItemComponent, static: false }) addMenuItem!: AddMenuItemComponent;
  @ViewChild('editMenuItemComponentReference', { read: EditMenuItemComponent, static: false }) editMenuItem!: EditMenuItemComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  menuItemsGridData: any[] = [];

  deleteId = "";
  deleteIndex = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getMenuItems();
  }

  getMenuItems(){
    this.menuApi.getMenuItems()
      .subscribe(
        res => {
          console.log(res);
          this.menuItemsGridData = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  postMenuItem(data: any){
    console.log(data);

    this.menuApi.postMenuItem(data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.menuItemsGridData.push(res);
            this.addMenuItem.resetForm();
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  putMenuItem(data: any){
    console.log(data);

    this.menuApi.putMenuItem(data)
      .subscribe(
        res => {
          console.log(res);

          if(res.id){
            this.menuItemsGridData[data.index] = res;
          }
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteMenuItem(){
    this.menuApi.deleteMenuItem()
      .subscribe(
        res => {
          console.log(res);
          this.menuItemsGridData.splice(this.deleteIndex, 1);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  openEditMenuItem(index: any){
    console.log(index);
    this.editMenuItem.openModal(index, this.menuItemsGridData[index]);
  }

  confirmDelete(e: any){
    this.deleteIndex = e.index;
    this.deleteId = e.id;

    this.deleteModal.openModal();
  }

}
