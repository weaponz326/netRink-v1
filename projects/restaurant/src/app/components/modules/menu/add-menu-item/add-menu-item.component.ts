import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef, Input } from '@angular/core';

import { serverTimestamp } from 'firebase/firestore';

import { MenuItemFormComponent } from '../menu-item-form/menu-item-form.component'

import { MenuItem, MenuGroup } from 'projects/restaurant/src/app/models/modules/menu/menu.model';


@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.scss']
})
export class AddMenuItemComponent implements OnInit {

  constructor() { }

  @Output() saveMenuItemEvent = new EventEmitter<any>();

  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('menuItemFormComponentReference', { read: MenuItemFormComponent, static: false }) menuItemForm!: MenuItemFormComponent;

  menuGroupData!: MenuGroup;

  isMenuItemSaving = false;

  ngOnInit(): void {
  }

  openModal(){
    this.addButton.nativeElement.click();
  }

  saveMenuItem(){
    let data: MenuItem = {
      created_at: serverTimestamp(),
      item_code: this.menuItemForm.menuItemForm.controls.itemCode.value,
      item_name: this.menuItemForm.menuItemForm.controls.itemName.value,
      price: this.menuItemForm.menuItemForm.controls.price.value,
      image: "",
      menu_group: {
        id: sessionStorage.getItem('restaurant_menu_group_id') as string,
        data: this.menuGroupData,
      }
    }

    this.saveMenuItemEvent.emit(data);
  }

  resetForm(){
    this.menuItemForm.menuItemForm.controls.itemCode.setValue('');
    this.menuItemForm.menuItemForm.controls.itemName.setValue('');
    this.menuItemForm.menuItemForm.controls.price.setValue('');
    this.menuItemForm.image.imgSrc = "";
  }

}
