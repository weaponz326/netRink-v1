import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { MenuItemFormComponent } from '../menu-item-form/menu-item-form.component'


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

  selectedIndex: any = 0;
  selectedId: any = "";

  ngOnInit(): void {
  }

  openModal(index: any, data: any){
    this.selectedIndex = index;
    this.selectedId = data.id;

    this.menuItemForm.menuItemForm.controls.itemCode.setValue(data.item_code);
    this.menuItemForm.menuItemForm.controls.itemName.setValue(data.item_name);
    this.menuItemForm.menuItemForm.controls.price.setValue(data.price);

    this.buttonElement.nativeElement.click();
  }

  saveMenuItem(){
    let data = {
      index: this.selectedIndex,
      id: this.selectedId,
      account: sessionStorage.getItem('restaurant_menu_item_id'),
      item_code: this.menuItemForm.menuItemForm.controls.itemCode.value,
      item_name: this.menuItemForm.menuItemForm.controls.itemName.value,
      price: this.menuItemForm.menuItemForm.controls.price.value,
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
