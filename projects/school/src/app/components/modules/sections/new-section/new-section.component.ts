import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';

import { SectionsApiService } from 'projects/school/src/app/services/modules/sections-api/sections-api.service';

import { Section } from 'projects/school/src/app/models/modules/sections/sections.model';


@Component({
  selector: 'app-new-section',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.scss']
})
export class NewSectionComponent implements OnInit {

  constructor(
    private router: Router,
    private sectionsApi: SectionsApiService
  ) { }

  @ViewChild('addButtonElementReference', { read: ElementRef, static: false }) addButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;

  sectionForm: FormGroup = new FormGroup({});

  selectedTermId = "";
  selectedTermData = {};

  isSectionSaving = false;

  ngOnInit(): void {
    this.initSectionForm();
  }

  initSectionForm(){
    this.sectionForm = new FormGroup({
      sectionCode: new FormControl(''),
      sectionName: new FormControl(''),
      sectionDate: new FormControl(''),
      term: new FormControl({value: "", disabled: true}),
      clase: new FormControl({value: "", disabled: true}),
    })
  }

  openModal(){
    this.addButton.nativeElement.click();
  }

  createSection(){
    let data: Section = {
      created_at: serverTimestamp(),
      account: localStorage.getItem('school_id') as string,
      section_code: this.sectionForm.controls.sectionCode.value,
      section_name: this.sectionForm.controls.sectionName.value,
      term: {
        id: this.selectedTermId,
        data: this.selectedTermData,
      },
    }

    this.isSectionSaving = true;

    this.sectionsApi.createSection(data)
      .then(
        (res: any) => {
          console.log(res);
          sessionStorage.setItem('school_section_id', res.id);

          this.router.navigateByUrl('/home/sections/view-section');
          this.dismissButton.nativeElement.click();
          this.isSectionSaving = true;
        },
        (err: any) => {
          console.log(err);
          this.isSectionSaving = true;
          this.connectionToast.openToast();
        }
      )
  }

  openTermWindow(){
    console.log("You are opening select term window")
    this.selectTerm.openModal();
  }

  onTermSelected(termData: any){
    console.log(termData);

    this.sectionForm.controls.term.setValue(termData.data().term.term_name);
    this.selectedTermId = termData.id;
    this.selectedTermData = termData.data();
  }

}
