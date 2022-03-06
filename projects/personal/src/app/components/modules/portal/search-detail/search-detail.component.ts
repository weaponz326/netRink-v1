import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'projects/personal/src/environments/environment';

import { PortalApiService } from 'projects/personal/src/app/services/modules/portal-api/portal-api.service';


@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss']
})
export class SearchDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private portalApi: PortalApiService
  ) { }

  @Input() searchDetail: any;

  personalUrl = environment.personalUrl;

  ngOnInit(): void {
  }

  createRink(){
    console.log(this.searchDetail.id);
    sessionStorage.setItem('personal_rink_recipient', this.searchDetail.id);
    this.router.navigateByUrl('home/portal/new-rink');
  }

}
