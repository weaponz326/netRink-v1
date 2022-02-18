import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SelectMenuItemComponent } from '../../../select-windows/menu-windows/select-menu-item/select-menu-item.component';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  constructor() { }

  @ViewChild('selectMenuItemComponentReference', { read: SelectMenuItemComponent, static: false }) selectMenuItem!: SelectMenuItemComponent;

  itemForm: FormGroup = new FormGroup({});

  selectedMenuItemId: any;

  ngOnInit(): void {
    this.initItemForm();
  }

  initItemForm(){
    this.itemForm = new FormGroup({
      menuItem: new FormControl({value: "", disabled: true}),
      price: new FormControl({value: 0, disabled: true}),
      quantity: new FormControl(1)
    })
  }

  openMenuItemWindow(){
    console.log("You are opening select menu item window")
    this.selectMenuItem.openModal();
  }

  onMenuItemSelected(itemData: any){
    console.log(itemData);

    this.itemForm.controls.menuItem.setValue(itemData.data().item_name);
    this.itemForm.controls.price.setValue(itemData.data().price);
    this.selectedMenuItemId = itemData.id;
  }

}
