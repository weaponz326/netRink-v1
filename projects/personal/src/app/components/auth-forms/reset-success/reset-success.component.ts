import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reset-success',
  templateUrl: './reset-success.component.html',
  styleUrls: ['./reset-success.component.scss']
})
export class ResetSuccessComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  suiteRegistrationType = "";

  ngOnInit(): void {
  }

  getRouterParams(){
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.suiteRegistrationType = params.source;
        console.log(this.suiteRegistrationType);
      }
    );
  }

  registrationRedirect(){
    if (this.suiteRegistrationType == "nR Personal" || this.suiteRegistrationType == "netRink")
      window.location.href = "/";
    else
      window.location.href = "/login";
  }

}
