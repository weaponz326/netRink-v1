import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { RosterApiService } from 'projects/restaurant/src/app/services/modules/roster-api/roster-api.service';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component';


@Component({
  selector: 'app-select-roster',
  templateUrl: './select-roster.component.html',
  styleUrls: ['./select-roster.component.scss']
})
export class SelectRosterComponent implements OnInit {

  constructor(private rosterApi: RosterApiService) { }

  ngOnInit(): void {
  }

}
