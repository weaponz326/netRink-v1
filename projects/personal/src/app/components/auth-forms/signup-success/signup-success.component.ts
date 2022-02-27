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
    this.getRouterParams();
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
    // TODO: redirect to respective suite's login in new tab
    if (this.suiteRegistrationType == "nR Personal" || this.suiteRegistrationType == "netRink")
      window.location.href = "/";
    else
      window.location.href = "/register";
  }

}
