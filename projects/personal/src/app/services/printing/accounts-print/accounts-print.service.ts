import { Injectable, ViewChild } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { AccountsApiService } from 'projects/personal/src/app/services/modules/accounts-api/accounts-api.service';


@Injectable({
  providedIn: 'root'
})
export class AccountsPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private accountsApi: AccountsApiService,
  ) { }

  // all accounts

  async printAllAccounts(){
    const accountsGridData = await this.accountsApi.getAllUserAccount();

    var body = [['Account Name', 'Account Number', 'Bank Name']];

    for (let data of accountsGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.account_name);
      row.push(rowData.account_number);
      row.push(rowData.bank_name);

      body.push(row);
    }

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['45%', '25%', '30%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  // view account

  async printViewAccount(){
    const accountFormPromise = this.accountsApi.getAccount();
    const transactionsGridPromise = this.accountsApi.getAccountTransaction();
    const [accountFormData, transactionsGridData] = await Promise.all([accountFormPromise, transactionsGridPromise]);

    let formData: any = accountFormData.data();

    var body = [['Transaction Date', 'Description', 'Transaction Type', 'Amount']];

    for (let data of transactionsGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.transaction_date);
      row.push(rowData.description);
      row.push(rowData.transaction_type);
      row.push(rowData.amount);

      body.push(row);
    }

    let balance = 0;
    for (let item of transactionsGridData.docs){
      let rowData: any = item.data();
      if (rowData.transaction_type == "Credit")
        balance += rowData.amount
      else
        balance -= rowData.amount
    }
    body.push(['', '', '', balance.toString()]);

    let content = [
      {
        columns: [
          [
            { text: 'Account Name: ' + formData.account_name },
            { text: 'Account No: ' + formData.account_number },
            { text: 'Bank Name: ' + formData.bank_name },
            { text: 'Account Type: ' + formData.account_type },
          ],
          [
            { text: 'Account Balance', bold: true, alignment: 'center' },
            { text: '$' + balance, bold: true, alignment: 'center' }
          ]
        ]
      },
      { text: 'Transactions', bold: true, margin: [0, 20, 0, 10] },
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['25%', '35%', '20%', '20%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  // all transaction

  async printAllTransactions(){
    const transactionsGridData = await this.accountsApi.getAllUserTransaction();

    var body = [['Transaction Date', 'Account Name', 'Bank Name', 'Description', 'Transaction Type', 'Amount']];

    for (let data of transactionsGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.transaction_date);
      row.push(rowData.account.data.account_name);
      row.push(rowData.account.data.bank_name);
      row.push(rowData.description);
      row.push(rowData.transaction_type);
      row.push(rowData.amount);

      body.push(row);
    }

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['15%', '20%', '18%', '23%', '12%', '12%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

}
