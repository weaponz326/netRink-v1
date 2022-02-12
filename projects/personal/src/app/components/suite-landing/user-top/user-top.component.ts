import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-top',
  templateUrl: './user-top.component.html',
  styleUrls: ['./user-top.component.scss']
})
export class UserTopComponent implements OnInit {

  constructor() { }

  @Input() suiteName: string = "";
  @Input() accountsData: any;
  @Input() isAccountLoading: boolean = false;

  @Output() selectAccount = new EventEmitter<number>();

  ngOnInit(): void {
  }

  accountSelected(accountId: any){
    this.selectAccount.emit(accountId);
    console.log(accountId);
  }

}
