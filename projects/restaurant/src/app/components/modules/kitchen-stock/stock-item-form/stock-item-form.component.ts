import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-stock-item-form',
  templateUrl: './stock-item-form.component.html',
  styleUrls: ['./stock-item-form.component.scss']
})
export class StockItemFormComponent implements OnInit {

  constructor() { }

  stockItemForm: FormGroup = new FormGroup({});

  selectedMenuItemId: any;

  ngOnInit(): void {
    this.initItemForm();
  }

  initItemForm(){
    this.stockItemForm = new FormGroup({
      itemCode: new FormControl(''),
      itemName: new FormControl(''),
      category: new FormControl(''),
      itemType: new FormControl(''),
      quantity: new FormControl(''),
      refillOrdered: new FormControl(''),
    })
  }

}
