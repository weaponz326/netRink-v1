import { Injectable, ViewChild } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { BudgetApiService } from 'projects/personal/src/app/services/modules/budget-api/budget-api.service';


@Injectable({
  providedIn: 'root'
})
export class BudgetPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private budgetApi: BudgetApiService,
  ) { }

  // all budget

  async printAllBudget(){
    const budgetGridData = await this.budgetApi.getAllUserBudget();

    var body = [['Budget Name', 'Budget Type']];

    for (let data of budgetGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.budget_name);
      row.push(rowData.budget_type);

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

  // view budget

  async printViewBudget(){
    const budgetFormPromise = this.budgetApi.getBudget();
    const incomeGridPromise = this.budgetApi.getBudgetIncome();
    const expenditureGridPromise = this.budgetApi.getBudgetExpenditure();
    const [budgetFormData, incomeGridData, expenditureGridData] = await Promise.all([budgetFormPromise, incomeGridPromise, expenditureGridPromise]);

    let formData: any = budgetFormData.data();

    // income

    var incomeBody = [['Item No.', 'Description', 'Amount']];

    for (let data of incomeGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.item_number);
      row.push(rowData.item_description);
      row.push(rowData.amount);

      incomeBody.push(row);
    }

    let totalIncome = 0;
    for (let income of incomeGridData.docs){
      let rowData: any = income.data();
      totalIncome += rowData.amount
    }
    incomeBody.push(['', '', totalIncome.toString()]);

    // expenditure

    var expenditureBody = [['Item No.', 'Description', 'Amount']];

    for (let data of expenditureGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.item_number);
      row.push(rowData.item_description);
      row.push(rowData.amount);

      expenditureBody.push(row);
    }

    let totalExpenditure = 0;
    for (let expenditure of expenditureGridData.docs){
      let rowData: any = expenditure.data();
      totalExpenditure += rowData.amount
    }
    expenditureBody.push(['', '', totalExpenditure.toString()]);

    let content = [
      {
        columns: [
          [
            { text: 'Budget Name: ' + formData.budget_name },
            { text: 'Budget Type: ' + formData.budget_type },
          ],
          [
            { text: 'Income over Expenditure', bold: true, alignment: 'center' },
            { text: '$' + (totalIncome - totalExpenditure), bold: true, alignment: 'center' }
          ]
        ]
      },
      {
        columns: [
          [
            { text: 'Income', bold: true, margin: [0, 20, 0, 10] },
            {
              layout: 'lightHorizontalLines',
              table: {
                headerRows: 1,
                // widths: ['15%', '25%', '60%'],
                body: incomeBody
              }
            }
          ],
          [
            { text: 'Expenditure', bold: true, margin: [0, 20, 0, 10] },
            {
              layout: 'lightHorizontalLines',
              table: {
                headerRows: 1,
                // widths: ['15%', '25%', '60%'],
                body: expenditureBody
              }
            }
          ]
        ],
        columnGap: 20
      }
    ]

    this.pdfPrint.openPdf(content);
  }

}
