import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  constructor() { }

  @Output() confirmEvent = new EventEmitter<any>();
  @Output() confirmEventTwo = new EventEmitter<any>();
  @Output() confirmEventThree = new EventEmitter<any>();

  @ViewChild('buttonElementReference', { read: ElementRef, static: false }) buttonElement!: ElementRef;

  thisEvent = 1;

  ngOnInit(): void {
  }

  openModal(){
    this.buttonElement.nativeElement.click();
  }

  onConfirm() {
    console.log("Yep... lets go ahead and delete this useless piece of ****");

    console.log(this.thisEvent)

    if(this.thisEvent == 1){
      console.log("from 1");
      this.confirmEvent.emit("OK");
    }
    if(this.thisEvent == 2){
      console.log("from 2");
      this.confirmEventTwo.emit("OK");
    }
    if(this.thisEvent == 3){
      console.log("from 3");
      this.confirmEventThree.emit("OK");
    }
  }

}
