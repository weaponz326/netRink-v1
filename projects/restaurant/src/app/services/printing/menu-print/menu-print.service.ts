import { Injectable } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { MenuApiService } from 'projects/restaurant/src/app/services/modules/menu-api/menu-api.service';


@Injectable({
  providedIn: 'root'
})
export class MenuPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private menuApi: MenuApiService
  ) { }

  // all menu group

  async printAllMenuGroup(){
    const menuGroupGridData = await this.menuApi.getAllAccountMenuGroup();

    var body = [['Menu Group', 'Category']];

    for (let data of menuGroupGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.menu_group);
      row.push(rowData.category);

      body.push(row);
    }

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['60%', '40%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  // view menu group

  async printViewMenuGroup(){
    const menuGroupFormPromise = this.menuApi.getMenuGroup();
    const menuItemsGridPromise = this.menuApi.getMenuGroupMenuItem();
    const [menuGroupFormData, menuItemsGridData] = await Promise.all([menuGroupFormPromise, menuItemsGridPromise]);

    let formData: any = menuGroupFormData.data();

    var body = [['Item ID', 'Item Name', 'Price']];

    for (let data of menuItemsGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.item_code);
      row.push(rowData.item_name);
      row.push(rowData.price);

      body.push(row);
    }

    let content = [
      {
        columns: [
          [
            { text: 'Menu Group: ' + formData.menu_group },
            { text: 'Category: ' + formData.category },
          ],
          []
        ]
      },
      { text: 'Menu Items', bold: true, margin: [0, 20, 0, 10] },
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['25%', '50%', '25%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  async printAllMenuItems(){
    const menuItemsGridData = await this.menuApi.getAllAccountMenuItem();

    var body = [['Item ID', 'Item Name', 'Price', 'Menu Group', 'Category']];

    for (let data of menuItemsGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.item_code);
      row.push(rowData.item_name);
      row.push(rowData.price);
      row.push(rowData.menu_group.data.menu_group);
      row.push(rowData.menu_group.data.category);

      body.push(row);
    }

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['15%', '30%', '15%', '20%', '20%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

}
