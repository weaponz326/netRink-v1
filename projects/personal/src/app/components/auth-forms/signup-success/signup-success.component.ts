import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-signup-success',
  templateUrl: './signup-success.component.html',
  styleUrls: ['./signup-success.component.scss']
})
export class SignupSuccessComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  suiteRegistrationType = "";

  ngOnInit(): void {
  }

  getRouterParams(){
    this.route.queryParams
      .subscribe(params => {
        console.log(params);

        localStorage.setItem('personal_id', params.id);

        this.suiteRegistrationType = params.source;
        console.log(this.suiteRegistrationType);
      }
    );
  }

  registrationRedirect(){
    if (this.suiteRegistrationType == "nR Personal" || this.suiteRegistrationType == "netRink")
      window.location.href = "/";
    else
      window.location.href = "/register";
  }

}
