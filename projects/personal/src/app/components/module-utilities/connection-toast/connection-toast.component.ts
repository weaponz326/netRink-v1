import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-connection-toast',
  templateUrl: './connection-toast.component.html',
  styleUrls: ['./connection-toast.component.scss']
})
export class ConnectionToastComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  isShowToast = false;
  timer: any;

  ngOnInit(): void {
  }

  openToast(){
    console.log("opening connection toast");
    this.isShowToast = true;
    
    this.timer = setInterval(() => {
      this.hideToast();
    }, 2000);
  }

  hideToast(): void{ 
    this.isShowToast = false;
    clearInterval(this.timer);
    console.log("closing toast...");
  };

}
