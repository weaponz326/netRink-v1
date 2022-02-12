import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { MenuItemFormComponent } from '../menu-item-form/menu-item-form.component'

import { MenuItem } from 'projects/restaurant/src/app/models/modules/menu/menu.model';


@Component({
  selector: 'app-edit-menu-item',
  templateUrl: './edit-menu-item.component.html',
  styleUrls: ['./edit-menu-item.component.scss']
})
export class EditMenuItemComponent implements OnInit {

  constructor() { }

  @Output() saveMenuItemEvent = new EventEmitter<any>();
  @Output() deleteMenuItemEvent = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  @ViewChild('menuItemFormComponentReference', { read: MenuItemFormComponent, static: false }) menuItemForm!: MenuItemFormComponent;

  menuItemData: any;
  selectedIndex: any = 0;
  selectedId: any = "";

  ngOnInit(): void {
  }

  openModal(index: any, data: any){
    this.menuItemData = data;
    this.selectedIndex = index;
    this.selectedId = data.id;

    this.menuItemForm.menuItemForm.controls.itemCode.setValue(data.data().item_code);
    this.menuItemForm.menuItemForm.controls.itemName.setValue(data.data().item_name);
    this.menuItemForm.menuItemForm.controls.price.setValue(data.data().price);

    this.buttonElement.nativeElement.click();
  }

  saveMenuItem(){
    let menu_item: MenuItem = {
      created_at: this.menuItemData.data().created_at,
      item_code: this.menuItemForm.menuItemForm.controls.itemCode.value,
      item_name: this.menuItemForm.menuItemForm.controls.itemName.value,
      price: this.menuItemForm.menuItemForm.controls.price.value,
      menu_group: {
        id: sessionStorage.getItem('restaurant_menu_group_id') as string,
        data: this.menuItemData.data().menu_group,
      }
    }

    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
      menu_item: menu_item
    }

    this.saveMenuItemEvent.emit(data);
  }

  deleteMenuItem(){
    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
    }

    this.deleteMenuItemEvent.emit(data);
  }

}
