import { Component, Input, OnInit } from '@angular/core';

import { serverTimestamp } from 'firebase/firestore';

import { SupportContactApiService } from 'projects/application/src/app/services/support-contact-api/support-contact-api.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private supportContactApi: SupportContactApiService) { }

  @Input() suiteName: string = "";

  name: string = "";
  email: string = "";
  message: string = "";

  isSending: boolean = false;
  isSubmitted: boolean = false;
  isFieldEmpty: boolean = false;

  ngOnInit(): void {
  }

  onSubmit() {
    let data = {
      created_at: serverTimestamp(),
      name: this.name,
      email: this.email,
      message: this.message,
      source: this.suiteName
    }
    console.log(data);

    if(this.name != "" && this.email != "" && this.message != ""){
      this.isFieldEmpty = false;
      this.isSending = true;

      this.supportContactApi.createSupportContact(data)
        .then(
          (res: any) => {
            console.log(res);

            this.isSubmitted = true;
            this.isSending = false;
            this.resetForm();
          },
          (err: any) => {
            console.log(err);
            this.isSending = false;
          }
        )
    }
    else{
      this.isFieldEmpty = true;
    }
  }

  resetForm(){
    this.name = "";
    this.email = "";
    this.message = "";
  }

}
