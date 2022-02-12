import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';

import { AddMenuItemComponent } from '../add-menu-item/add-menu-item.component'
import { EditMenuItemComponent } from '../edit-menu-item/edit-menu-item.component'
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';

import { MenuGroup } from 'projects/restaurant/src/app/models/modules/menu/menu.model';


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {

  constructor(private menuApi: MenuApiService) { }

  @Input() menuGroup!: MenuGroup;

  @ViewChild('addMenuItemComponentReference', { read: AddMenuItemComponent, static: false }) addMenuItem!: AddMenuItemComponent;
  @ViewChild('editMenuItemComponentReference', { read: EditMenuItemComponent, static: false }) editMenuItem!: EditMenuItemComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  menuItemsGridData: any[] = [];

  deleteId = "";
  deleteIndex = 0;

  isFetchingGridData = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getMenuItems();
  }

  getMenuItems(){
    this.isFetchingGridData = true;

    this.menuApi.getMenuGroupMenuItem()
      .then(
        (res: any) => {
          console.log(res);
          this.isFetchingGridData = false;

          for (let item of res.docs) {
            this.menuItemsGridData.push(item.data());
          }
          console.log(this.menuItemsGridData);
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  createMenuItem(data: any){
    console.log(data);

    this.menuApi.createMenuItem(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            this.menuItemsGridData.push(data);
            this.addMenuItem.resetForm();
          }
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateMenuItem(data: any){
    console.log(data);

    this.menuApi.updateMenuItem(data.menu_item)
      .then(
        (res: any) => {
          console.log(res);
          this.menuItemsGridData[data.index] = data.menu_item;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  deleteMenuItem(){
    this.menuApi.deleteMenuItem()
      .then(
        (res: any) => {
          console.log(res);
          this.menuItemsGridData.splice(this.deleteIndex, 1);
        },
        (err: any) => {
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
