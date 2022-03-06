"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["projects_restaurant_src_app_pages_modules_roster-page_roster-page_module_ts"],{

/***/ 54071:
/*!************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/add-batch/add-batch.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBatchComponent": () => (/* binding */ AddBatchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 16448);





const _c0 = ["addButtonElementReference"];
const _c1 = ["dismissButtonElementReference"];
class AddBatchComponent {
    constructor() {
        this.saveBatchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.batchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
        this.isSaving = false;
    }
    ngOnInit() {
        this.initBatchForm();
    }
    initBatchForm() {
        this.batchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            batchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            batchSymbol: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
        });
    }
    openModal() {
        this.addButton.nativeElement.click();
    }
    saveBatch() {
        let data = {
            created_at: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
            roster: sessionStorage.getItem('restaurant_roster_id'),
            batch_name: this.batchForm.controls.batchName.value,
            batch_symbol: this.batchForm.controls.batchSymbol.value,
        };
        this.saveBatchEvent.emit(data);
    }
    resetForm() {
        this.batchForm.controls.batchName.setValue('');
        this.batchForm.controls.batchSymbol.setValue('');
    }
}
AddBatchComponent.ɵfac = function AddBatchComponent_Factory(t) { return new (t || AddBatchComponent)(); };
AddBatchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddBatchComponent, selectors: [["app-add-batch"]], viewQuery: function AddBatchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dismissButton = _t.first);
    } }, outputs: { saveBatchEvent: "saveBatchEvent" }, decls: 30, vars: 3, consts: [["data-bs-toggle", "modal", "data-bs-target", "#addBatchModal", 3, "hidden"], ["addButtonElementReference", ""], ["id", "addBatchModal", "tabindex", "-1", "aria-labelledby", "addBatchModalLabel", "aria-hidden", "true", 1, "modal", "fade", "form-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-light"], ["id", "addBatchModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["dismissButtonElementReference", ""], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "modal-body"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-end", "mt-1"], [1, "col-md-8"], ["formControlName", "batchName", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "batchSymbol", 1, "form-control", "form-control-sm", "w-100"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn", 3, "disabled"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn"]], template: function AddBatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Add Batch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddBatchComponent_Template_form_ngSubmit_11_listener() { return ctx.saveBatch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Batch Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Batch Symbol :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.batchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSaving);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYmF0Y2guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 16326:
/*!********************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/add-personnel/add-personnel.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPersonnelComponent": () => (/* binding */ AddPersonnelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _personnel_form_personnel_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../personnel-form/personnel-form.component */ 58630);




const _c0 = ["addButtonElementReference"];
const _c1 = ["dismssButtonElementReference"];
const _c2 = ["personnelFormComponentReference"];
class AddPersonnelComponent {
    constructor() {
        this.savePersonnelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.isSaving = false;
    }
    ngOnInit() {
    }
    openModal() {
        this.addButton.nativeElement.click();
        this.personnelForm.getBatches("");
    }
    savePersonnel() {
        let data = {
            roster: sessionStorage.getItem('restaurant_roster_id'),
            batch_symbol: this.personnelForm.personnelForm.controls.symbol.value,
            staff: {
                id: this.personnelForm.selectedStaffId,
                staff_code: this.personnelForm.personnelForm.controls.personnelCode.value,
                staff_name: this.personnelForm.personnelForm.controls.personnelName.value,
            }
        };
        this.savePersonnelEvent.emit(data);
    }
    resetForm() {
        this.personnelForm.personnelForm.controls.personnelCode.setValue('');
        this.personnelForm.personnelForm.controls.personnelName.setValue('');
        this.personnelForm.personnelForm.controls.batch.setValue('');
    }
}
AddPersonnelComponent.ɵfac = function AddPersonnelComponent_Factory(t) { return new (t || AddPersonnelComponent)(); };
AddPersonnelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddPersonnelComponent, selectors: [["app-add-personnel"]], viewQuery: function AddPersonnelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5, _personnel_form_personnel_form_component__WEBPACK_IMPORTED_MODULE_0__.PersonnelFormComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dismissButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.personnelForm = _t.first);
    } }, outputs: { savePersonnelEvent: "savePersonnelEvent" }, decls: 19, vars: 2, consts: [["data-bs-toggle", "modal", "data-bs-target", "#addPersonnelModal", 3, "hidden"], ["addButtonElementReference", ""], ["id", "addPersonnelModal", "tabindex", "-1", "aria-labelledby", "addPersonnelModalLabel", "aria-hidden", "true", 1, "modal", "fade", "form-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-light"], ["id", "addPersonnelModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["dismissButtonElementReference", ""], [1, "modal-body"], ["personnelFormComponentReference", ""], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn", 3, "disabled", "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn"]], template: function AddPersonnelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Add Personnel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-personnel-form", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPersonnelComponent_Template_button_click_15_listener() { return ctx.savePersonnel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSaving);
    } }, directives: [_personnel_form_personnel_form_component__WEBPACK_IMPORTED_MODULE_0__.PersonnelFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcGVyc29ubmVsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 56183:
/*!************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/add-shift/add-shift.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddShiftComponent": () => (/* binding */ AddShiftComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 16448);





const _c0 = ["addButtonElementReference"];
const _c1 = ["dismissButtonElementReference"];
class AddShiftComponent {
    constructor() {
        this.saveShiftEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.shiftForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
        this.isSaving = false;
    }
    ngOnInit() {
        this.initShiftForm();
    }
    initShiftForm() {
        this.shiftForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            shiftName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            endTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
        });
    }
    openModal() {
        this.addButton.nativeElement.click();
    }
    saveShift() {
        let data = {
            created_at: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
            roster: sessionStorage.getItem('restaurant_roster_id'),
            shift_name: this.shiftForm.controls.shiftName.value,
            start_time: this.shiftForm.controls.startTime.value,
            end_time: this.shiftForm.controls.endTime.value,
        };
        this.saveShiftEvent.emit(data);
    }
    resetForm() {
        this.shiftForm.controls.shiftName.setValue('');
        this.shiftForm.controls.startTime.setValue('');
        this.shiftForm.controls.endTime.setValue('');
    }
}
AddShiftComponent.ɵfac = function AddShiftComponent_Factory(t) { return new (t || AddShiftComponent)(); };
AddShiftComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddShiftComponent, selectors: [["app-add-shift"]], viewQuery: function AddShiftComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dismissButton = _t.first);
    } }, outputs: { saveShiftEvent: "saveShiftEvent" }, decls: 36, vars: 3, consts: [["data-bs-toggle", "modal", "data-bs-target", "#addShiftModal", 3, "hidden"], ["addButtonElementReference", ""], ["id", "addShiftModal", "tabindex", "-1", "aria-labelledby", "addShiftModalLabel", "aria-hidden", "true", 1, "modal", "fade", "form-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-light"], ["id", "addShiftModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["dismissButtonElementReference", ""], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "modal-body"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-end", "mt-1"], [1, "col-md-8"], ["formControlName", "shiftName", 1, "form-control", "form-control-sm", "w-100"], ["type", "time", "formControlName", "startTime", 1, "form-control", "form-control-sm", "w-100"], ["type", "time", "formControlName", "endTime", 1, "form-control", "form-control-sm", "w-100"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn", 3, "disabled"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn"]], template: function AddShiftComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Add Shift");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddShiftComponent_Template_form_ngSubmit_11_listener() { return ctx.saveShift(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Shift Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Start Time :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "End Time :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.shiftForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSaving);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc2hpZnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 35094:
/*!**************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/all-roster/all-roster.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllRosterComponent": () => (/* binding */ AllRosterComponent)
/* harmony export */ });
/* harmony import */ var _new_roster_new_roster_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../new-roster/new-roster.component */ 83290);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/roster-api/roster-api.service */ 10970);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);









const _c0 = ["newRosterComponentReference"];
const _c1 = ["connectionToastComponentReference"];
function AllRosterComponent_i_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllRosterComponent_i_15_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.sortTable("roster_code", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllRosterComponent_i_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllRosterComponent_i_16_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.sortTable("roster_code", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllRosterComponent_i_17_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllRosterComponent_i_17_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.sortTable("roster_code", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllRosterComponent_i_20_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllRosterComponent_i_20_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.sortTable("roster_name", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllRosterComponent_i_21_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllRosterComponent_i_21_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.sortTable("roster_name", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllRosterComponent_i_22_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllRosterComponent_i_22_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.sortTable("roster_name", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllRosterComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dblclick", function AllRosterComponent_tr_24_Template_tr_dblclick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const data_r23 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.viewRoster(data_r23.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r23 == null ? null : data_r23.data().roster_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r23 == null ? null : data_r23.data().roster_name);
} }
function AllRosterComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllRosterComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class AllRosterComponent {
    constructor(router, rosterApi) {
        this.router = router;
        this.rosterApi = rosterApi;
        this.navHeading = [
            { text: "All Roster", url: "/home/roster/all-roster" },
        ];
        this.rosterGridData = [];
        this.isFetchingGridData = false;
        this.isDataAvailable = true;
        this.firstInResponse = [];
        this.lastInResponse = [];
        this.nextStartAfter = [];
        this.prevStartAt = [];
        this.pageNumber = 0;
        this.disableNext = true;
        this.disablePrev = true;
        this.sortParams = {
            field: "created_at",
            direction: "desc"
        };
    }
    ngOnInit() {
        this.getAccountRoster();
    }
    getAccountRoster() {
        this.isFetchingGridData = true;
        this.rosterApi.getAccountRoster(this.sortParams, 20)
            .then((res) => {
            console.log(res);
            this.rosterGridData = res.docs;
            this.isFetchingGridData = false;
            this.prevStartAt = this.firstInResponse;
            this.nextStartAfter = res.docs[res.docs.length - 1];
            this.firstInResponse = res.docs[0];
            this.pageNumber = 1;
            if (!res.docs.length)
                this.isDataAvailable = false;
            else
                this.isDataAvailable = true;
            if (!res.docs.length || res.docs.length < 20) {
                this.disableNext = true;
                this.disablePrev = true;
            }
            else {
                this.disableNext = false;
                this.disablePrev = true;
            }
        }, (err) => {
            console.log(err);
            this.isFetchingGridData = false;
            this.connectionToast.openToast();
        });
    }
    nextPage(e) {
        e.preventDefault();
        this.isFetchingGridData = true;
        this.rosterApi.getAccountRosterNext(this.sortParams, 20, this.nextStartAfter)
            .then((res) => {
            console.log(res);
            this.rosterGridData = res.docs;
            this.isFetchingGridData = false;
            this.prevStartAt = this.firstInResponse;
            this.nextStartAfter = res.docs[res.docs.length - 1];
            this.firstInResponse = res.docs[0];
            this.pageNumber++;
            if (res.docs.length < 20) {
                this.disableNext = true;
                this.disablePrev = false;
            }
        }, (err) => {
            console.log(err);
            this.isFetchingGridData = false;
            this.connectionToast.openToast();
        });
    }
    previousPage(e) {
        e.preventDefault();
        this.isFetchingGridData = true;
        this.rosterApi.getAccountRosterPrev(this.sortParams, 20, this.prevStartAt)
            .then((res) => {
            console.log(res);
            this.rosterGridData = res.docs;
            this.isFetchingGridData = false;
            if (!res.docs.length)
                this.isDataAvailable = false;
            this.prevStartAt = this.firstInResponse;
            this.nextStartAfter = res.docs[res.docs.length - 1];
            this.firstInResponse = res.docs[0];
            this.pageNumber--;
            if (this.pageNumber == 1) {
                this.disableNext = false;
                this.disablePrev = true;
            }
        }, (err) => {
            console.log(err);
            this.isFetchingGridData = false;
            this.connectionToast.openToast();
        });
    }
    sortTable(field, direction) {
        this.sortParams.field = field;
        this.sortParams.direction = direction;
        this.getAccountRoster();
    }
    viewRoster(rosterId) {
        console.log(rosterId);
        sessionStorage.setItem("restaurant_roster_id", rosterId);
        this.router.navigateByUrl("/home/roster/view-roster");
    }
    onPrint() {
        console.log("lets start printing...");
    }
}
AllRosterComponent.ɵfac = function AllRosterComponent_Factory(t) { return new (t || AllRosterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_2__.RosterApiService)); };
AllRosterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AllRosterComponent, selectors: [["app-all-roster"]], viewQuery: function AllRosterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _new_roster_new_roster_component__WEBPACK_IMPORTED_MODULE_0__.NewRosterComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.newRoster = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 45, vars: 15, consts: [[3, "headings", "showPrint", "print"], [1, "container"], [1, "row"], [1, "col-md-7"], [1, "row", "mb-3"], [1, "col-md-12"], [1, "btn", "btn-secondary", "page-add-btn", 3, "click"], [1, "btn", "btn-light", "border", "float-end", "page-refresh-btn", 3, "disabled", "click"], [1, "bi", "bi-arrow-clockwise"], [1, "table", "table-bordered", "table-sm", "w-100", "page-table"], [1, "bg-light"], ["width", "30%"], ["class", "bi bi-filter float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-down float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-up float-end list-pointer", 3, "click", 4, "ngIf"], ["width", "70%"], ["class", "table-pointer", 3, "dblclick", 4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["colspan", "2"], ["aria-label", "Page navigation", 1, "nav-light", "float-end"], [1, "pagination", "pagination-sm", "mb-0", "justify-content-end"], [1, "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-left-fill"], [1, "page-item"], ["href", "#", "aria-label", "Current", 1, "page-link", 3, "click"], ["href", "#", "aria-label", "Last", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-right-fill"], ["connectionToastComponentReference", ""], ["newRosterComponentReference", ""], [1, "bi", "bi-filter", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-down", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-up", "float-end", "list-pointer", 3, "click"], [1, "table-pointer", 3, "dblclick"], [1, "text-center"], ["role", "status", 1, "spinner-grow", "m-4"], [1, "visually-hidden"], [1, "m-4"]], template: function AllRosterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("print", function AllRosterComponent_Template_app_module_topnav_print_0_listener() { return ctx.onPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllRosterComponent_Template_button_click_6_listener() { return ctx.newRoster.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "New Roster");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllRosterComponent_Template_button_click_8_listener() { return ctx.getAccountRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Roster ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, AllRosterComponent_i_15_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, AllRosterComponent_i_16_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, AllRosterComponent_i_17_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Roster Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AllRosterComponent_i_20_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, AllRosterComponent_i_21_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, AllRosterComponent_i_22_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, AllRosterComponent_tr_24_Template, 5, 2, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, AllRosterComponent_tr_25_Template, 5, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AllRosterComponent_tr_26_Template, 4, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "nav", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllRosterComponent_Template_a_click_33_listener($event) { return ctx.previousPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllRosterComponent_Template_a_click_36_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllRosterComponent_Template_a_click_39_listener($event) { return ctx.nextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "app-connection-toast", null, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "app-new-roster", null, 29);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("headings", ctx.navHeading)("showPrint", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "roster_code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "roster_code" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "roster_code" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "roster_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "roster_name" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "roster_name" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rosterGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isDataAvailable && !ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.disablePrev ? "disabled" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.pageNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.disableNext ? "disabled" : "");
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__.ModuleTopnavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent, _new_roster_new_roster_component__WEBPACK_IMPORTED_MODULE_0__.NewRosterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtcm9zdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 23286:
/*!************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/dashboard/dashboard.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/roster-api/roster-api.service */ 10970);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);





const _c0 = ["connectionToastComponentReference"];
class DashboardComponent {
    constructor(rosterApi) {
        this.rosterApi = rosterApi;
        this.navHeading = [
            { text: "Dashboard", url: "/home/roster/dashboard" },
        ];
        this.allRosterCount = 0;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.getRosterCount();
    }
    getRosterCount() {
        // this.rosterApi.getCounts("Roster")
        //   .subscribe(
        //     res => {
        //       console.log(res);
        //       this.allRosterCount = res;
        //     },
        //     err => {
        //       console.log(err);
        //       this.connectionToast.openToast();
        //     }
        //   )
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_1__.RosterApiService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 14, vars: 2, consts: [[3, "headings"], [1, "container"], [1, "row"], [1, "col-md-3", "mb-4"], [1, "card", "border-left-secondary", "shadow", "h-100", "py-2"], [1, "card-body"], [1, "row", "no-gutters", "align-items-center"], [1, "col", "mr-2"], [1, "text-xs", "font-weight-bold", "text-uppercase", "mb-1"], [1, "h5", "mb-0", "font-weight-bold", "text-gray-800"], ["connectionToastComponentReference", ""]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "All Roster");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-connection-toast", null, 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("headings", ctx.navHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.allRosterCount);
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_2__.ModuleTopnavComponent, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 87657:
/*!**************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/edit-batch/edit-batch.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditBatchComponent": () => (/* binding */ EditBatchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 68465);




const _c0 = ["editButtonElementReference"];
const _c1 = ["dismissButtonElementReference"];
class EditBatchComponent {
    constructor() {
        this.saveBatchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.deleteBatchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.batchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
        this.isSaving = false;
    }
    ngOnInit() {
        this.initBatchForm();
    }
    initBatchForm() {
        this.batchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            batchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
            batchSymbol: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
        });
    }
    openModal(data) {
        console.log(data);
        this.batchData = data;
        this.batchForm.controls.batchName.setValue(data.data().batch_name);
        this.batchForm.controls.batchSymbol.setValue(data.data().batch_symbol);
        this.editButton.nativeElement.click();
    }
    saveBatch() {
        let data = {
            batch_name: this.batchForm.controls.batchName.value,
            batch_symbol: this.batchForm.controls.batchSymbol.value,
        };
        let batch = {
            id: this.batchData.id,
            data: data,
        };
        this.saveBatchEvent.emit(batch);
    }
}
EditBatchComponent.ɵfac = function EditBatchComponent_Factory(t) { return new (t || EditBatchComponent)(); };
EditBatchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditBatchComponent, selectors: [["app-edit-batch"]], viewQuery: function EditBatchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dismissButton = _t.first);
    } }, outputs: { saveBatchEvent: "saveBatchEvent", deleteBatchEvent: "deleteBatchEvent" }, decls: 30, vars: 3, consts: [["data-bs-toggle", "modal", "data-bs-target", "#editBatchModal", 3, "hidden"], ["editButtonElementReference", ""], ["id", "editBatchModal", "tabindex", "-1", "aria-labelledby", "editBatchModalLabel", "aria-hidden", "true", 1, "modal", "fade", "form-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-light"], ["id", "editBatchModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["dismissButtonElementReference", ""], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "modal-body"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-end", "mt-1"], [1, "col-md-8"], ["formControlName", "batchName", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "batchSymbol", 1, "form-control", "form-control-sm", "w-100"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn", 3, "disabled"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn"]], template: function EditBatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit Batch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditBatchComponent_Template_form_ngSubmit_11_listener() { return ctx.saveBatch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Batch Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Batch Symbol :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.batchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isSaving);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWJhdGNoLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 18743:
/*!**********************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/edit-personnel/edit-personnel.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPersonnelComponent": () => (/* binding */ EditPersonnelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _personnel_form_personnel_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../personnel-form/personnel-form.component */ 58630);




const _c0 = ["editButtonElementReference"];
const _c1 = ["dismssButtonElementReference"];
const _c2 = ["personnelFormComponentReference"];
class EditPersonnelComponent {
    constructor() {
        this.savePersonnelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.deletePersonnelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.isSaving = false;
    }
    ngOnInit() {
    }
    openModal(data) {
        this.personnelData = data;
        this.personnelForm.personnelForm.controls.personnelCode.setValue(data.data().personnel_code);
        this.personnelForm.personnelForm.controls.personnelName.setValue(data.data().personnel_name);
        this.personnelForm.getBatches(data.data().batch_symbol);
        this.editButton.nativeElement.click();
    }
    savePersonnel() {
        let data = {
            batch_symbol: this.personnelForm.personnelForm.controls.symbol.value,
            staff: {
                id: this.personnelForm.selectedStaffId,
                staff_code: this.personnelForm.personnelForm.controls.personnelCode.value,
                staff_name: this.personnelForm.personnelForm.controls.personnelName.value,
            }
        };
        let personnel = {
            id: this.personnelData.id,
            data: data
        };
        this.savePersonnelEvent.emit(personnel);
    }
}
EditPersonnelComponent.ɵfac = function EditPersonnelComponent_Factory(t) { return new (t || EditPersonnelComponent)(); };
EditPersonnelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditPersonnelComponent, selectors: [["app-edit-personnel"]], viewQuery: function EditPersonnelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5, _personnel_form_personnel_form_component__WEBPACK_IMPORTED_MODULE_0__.PersonnelFormComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dismissButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.personnelForm = _t.first);
    } }, outputs: { savePersonnelEvent: "savePersonnelEvent", deletePersonnelEvent: "deletePersonnelEvent" }, decls: 18, vars: 2, consts: [["data-bs-toggle", "modal", "data-bs-target", "#addPersonnelModal", 3, "hidden"], ["buttonElementReference", ""], ["id", "addPersonnelModal", "tabindex", "-1", "aria-labelledby", "addPersonnelModalLabel", "aria-hidden", "true", 1, "modal", "fade", "form-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-light"], ["id", "addPersonnelModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], ["personnelFormComponentReference", ""], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn", 3, "disabled", "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn"]], template: function EditPersonnelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Edit Personnel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-personnel-form", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditPersonnelComponent_Template_button_click_14_listener() { return ctx.savePersonnel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSaving);
    } }, directives: [_personnel_form_personnel_form_component__WEBPACK_IMPORTED_MODULE_0__.PersonnelFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXBlcnNvbm5lbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 34198:
/*!**************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/edit-shift/edit-shift.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditShiftComponent": () => (/* binding */ EditShiftComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 68465);




const _c0 = ["editButtonElementReference"];
const _c1 = ["dismissButtonElementReference"];
class EditShiftComponent {
    constructor() {
        this.saveShiftEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.shiftForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
        this.isSaving = false;
    }
    ngOnInit() {
        this.initShiftForm();
    }
    initShiftForm() {
        this.shiftForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            shiftName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
            startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
            endTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
        });
    }
    openModal(data) {
        this.shiftData = data;
        this.shiftForm.controls.shiftName.setValue(data.data().shift_name);
        this.shiftForm.controls.startTime.setValue(data.data().start_time);
        this.shiftForm.controls.endTime.setValue(data.data().end_time);
        this.editButton.nativeElement.click();
    }
    saveShift() {
        let data = {
            shift_name: this.shiftForm.controls.shiftName.value,
            start_time: this.shiftForm.controls.startTime.value,
            end_time: this.shiftForm.controls.endTime.value,
        };
        let shift = {
            id: this.shiftData.id,
            data: data
        };
        this.saveShiftEvent.emit(shift);
    }
}
EditShiftComponent.ɵfac = function EditShiftComponent_Factory(t) { return new (t || EditShiftComponent)(); };
EditShiftComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditShiftComponent, selectors: [["app-edit-shift"]], viewQuery: function EditShiftComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dismissButton = _t.first);
    } }, outputs: { saveShiftEvent: "saveShiftEvent" }, decls: 36, vars: 3, consts: [["data-bs-toggle", "modal", "data-bs-target", "#editShiftModal", 3, "hidden"], ["editButtonElementReference", ""], ["id", "editShiftModal", "tabindex", "-1", "aria-labelledby", "editShiftModalLabel", "aria-hidden", "true", 1, "modal", "fade", "form-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-light"], ["id", "editShiftModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["dismissButtonElementReference", ""], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "modal-body"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-end", "mt-1"], [1, "col-md-8"], ["formControlName", "shiftName", 1, "form-control", "form-control-sm", "w-100"], ["type", "time", "formControlName", "startTime", 1, "form-control", "form-control-sm", "w-100"], ["type", "time", "formControlName", "endTime", 1, "form-control", "form-control-sm", "w-100"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn", 3, "disabled"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn"]], template: function EditShiftComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit Shift");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditShiftComponent_Template_form_ngSubmit_11_listener() { return ctx.saveShift(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Shift Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Start Time :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "End Time :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.shiftForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isSaving);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXNoaWZ0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 45573:
/*!**********************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/manage-batches/manage-batches.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageBatchesComponent": () => (/* binding */ ManageBatchesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _manage_personnel_manage_personnel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manage-personnel/manage-personnel.component */ 86838);
/* harmony import */ var _add_batch_add_batch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-batch/add-batch.component */ 54071);
/* harmony import */ var _edit_batch_edit_batch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-batch/edit-batch.component */ 87657);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/delete-modal/delete-modal.component */ 88622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/roster-api/roster-api.service */ 10970);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 7005);

















const _c0 = ["managePersonnelComponentReference"];
const _c1 = ["addBatchComponentReference"];
const _c2 = ["editBatchComponentReference"];
const _c3 = ["connectionToastComponentReference"];
const _c4 = ["deleteModalComponentReference"];
function ManageBatchesComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageBatchesComponent_tr_44_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const data_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r8.openEditBatch(data_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageBatchesComponent_tr_44_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const data_r7 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r10.confirmDelete(data_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r7 == null ? null : data_r7.data().batch_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r7 == null ? null : data_r7.data().batch_symbol);
} }
function ManageBatchesComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class ManageBatchesComponent {
    constructor(router, rosterApi) {
        this.router = router;
        this.rosterApi = rosterApi;
        this.navHeading = [
            { text: "All Roster", url: "/home/roster/all-roster" },
            { text: "View Roster", url: "/home/roster/view-roster" },
            { text: "Manage Batches", url: "/home/roster/manage-batches" },
        ];
        this.rosterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({});
        this.batchesGridData = [];
        this.isFetchingGridData = false;
    }
    ngOnInit() {
        this.initRosterForm();
        this.getRoster();
        this.getRosterBatch();
    }
    initRosterForm() {
        this.rosterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            rosterCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl({ value: "", disabled: true }),
            rosterName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl({ value: "", disabled: true }),
        });
    }
    getRoster() {
        this.rosterApi.getRoster()
            .then((res) => {
            console.log(res);
            this.rosterForm.controls.rosterCode.setValue(res.data().roster_code);
            this.rosterForm.controls.rosterName.setValue(res.data().roster_name);
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    // --------------------------------------------------------------------------------------
    // grid
    getRosterBatch() {
        this.isFetchingGridData = true;
        this.rosterApi.getRosterBatch()
            .then((res) => {
            console.log(res);
            this.batchesGridData = res.docs;
            this.isFetchingGridData = false;
        }, (err) => {
            console.log(err);
            this.isFetchingGridData = false;
            this.connectionToast.openToast();
        });
    }
    createBatch(data) {
        console.log(data);
        this.addBatch.isSaving = true;
        this.rosterApi.createBatch(data)
            .then((res) => {
            console.log(res);
            if (res.id) {
                this.getRosterBatch();
                this.addBatch.isSaving = false;
                this.addBatch.dismissButton.nativeElement.click();
                this.addBatch.resetForm();
            }
        }, err => {
            console.log(err);
            this.addBatch.isSaving = false;
            this.connectionToast.openToast();
        });
    }
    updateBatch(data) {
        console.log(data);
        this.editBatch.isSaving = true;
        this.rosterApi.updateBatch(data.id, data.batch)
            .then((res) => {
            console.log(res);
            this.getRosterBatch();
            this.editBatch.isSaving = false;
            this.editBatch.dismissButton.nativeElement.click();
        }, (err) => {
            console.log(err);
            this.editBatch.isSaving = false;
            this.connectionToast.openToast();
        });
    }
    deleteBatch() {
        this.rosterApi.deleteBatch(this.deleteId)
            .then((res) => {
            console.log(res);
            this.getRosterBatch();
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    openEditBatch(data) {
        console.log(data);
        this.editBatch.openModal(data);
    }
    confirmDelete(id) {
        this.deleteId = id;
        this.deleteModal.openModal();
    }
    onPrint() {
        console.log("lets start printing...");
    }
}
ManageBatchesComponent.ɵfac = function ManageBatchesComponent_Factory(t) { return new (t || ManageBatchesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_5__.RosterApiService)); };
ManageBatchesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ManageBatchesComponent, selectors: [["app-manage-batches"]], viewQuery: function ManageBatchesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5, _manage_personnel_manage_personnel_component__WEBPACK_IMPORTED_MODULE_0__.ManagePersonnelComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5, _add_batch_add_batch_component__WEBPACK_IMPORTED_MODULE_1__.AddBatchComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 5, _edit_batch_edit_batch_component__WEBPACK_IMPORTED_MODULE_2__.EditBatchComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c3, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_3__.ConnectionToastComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c4, 5, projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__.DeleteModalComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.managePersonnel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.addBatch = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.editBatch = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.deleteModal = _t.first);
    } }, decls: 57, vars: 4, consts: [[3, "headings"], [1, "container"], [1, "page-form", 3, "formGroup"], [1, "row", "page-form"], [1, "col-md-12"], [1, "col-md-6"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-end", "mt-1"], [1, "col-md-8"], ["formControlName", "rosterCode", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "rosterName", 1, "form-control", "form-control-sm", "w-100"], [1, "top-divider"], [1, "bottom-divider"], [1, "row", "mb-2"], ["routerLink", "/home/roster/view-roster", 1, "btn", "btn-secondary", "float-end", "nr-standard-font"], [1, "bi", "bi-arrow-left-right", "me-2"], [1, "row"], [1, "table", "table-bordered", "table-sm", "w-100", "page-table"], [1, "bg-light"], ["width", "55%"], ["width", "30%"], ["width", "15%", 1, "p-0"], [1, "btn", "btn-secondary", "btn-sm", "w-100", 3, "click"], [1, "bi", "bi-plus"], [4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["managePersonnelComponentReference", ""], [3, "saveBatchEvent"], ["addBatchComponentReference", ""], [3, "saveBatchEvent", "deleteBatch"], ["editBatchComponentReference", ""], ["connectionToastComponentReference", ""], [3, "confirmEvent"], ["deleteModalComponentReference", ""], [1, "p-0"], [1, "btn", "btn-sm", "border", "w-50", 3, "click"], [1, "bi", "bi-pen"], [1, "bi", "bi-trash"], [1, "text-center"], ["colspan", "3"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm", "m-2"], [1, "visually-hidden"]], template: function ManageBatchesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Roster Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Roster ID :");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Roster Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "hr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, " Roster Sheet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Roster Batches");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Batch Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Batch Symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ManageBatchesComponent_Template_button_click_41_listener() { return ctx.addBatch.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, ManageBatchesComponent_tr_44_Template, 10, 2, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, ManageBatchesComponent_tr_45_Template, 5, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "app-manage-personnel", null, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "app-add-batch", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("saveBatchEvent", function ManageBatchesComponent_Template_app_add_batch_saveBatchEvent_49_listener($event) { return ctx.createBatch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "app-edit-batch", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("saveBatchEvent", function ManageBatchesComponent_Template_app_edit_batch_saveBatchEvent_51_listener($event) { return ctx.updateBatch($event); })("deleteBatch", function ManageBatchesComponent_Template_app_edit_batch_deleteBatch_51_listener($event) { return ctx.confirmDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](53, "app-connection-toast", null, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "app-delete-modal", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("confirmEvent", function ManageBatchesComponent_Template_app_delete_modal_confirmEvent_55_listener() { return ctx.deleteBatch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("headings", ctx.navHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.rosterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.batchesGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isFetchingGridData);
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_6__.ModuleTopnavComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _manage_personnel_manage_personnel_component__WEBPACK_IMPORTED_MODULE_0__.ManagePersonnelComponent, _add_batch_add_batch_component__WEBPACK_IMPORTED_MODULE_1__.AddBatchComponent, _edit_batch_edit_batch_component__WEBPACK_IMPORTED_MODULE_2__.EditBatchComponent, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_3__.ConnectionToastComponent, projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__.DeleteModalComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtYmF0Y2hlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 86838:
/*!**************************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/manage-personnel/manage-personnel.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagePersonnelComponent": () => (/* binding */ ManagePersonnelComponent)
/* harmony export */ });
/* harmony import */ var _add_personnel_add_personnel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-personnel/add-personnel.component */ 16326);
/* harmony import */ var _edit_personnel_edit_personnel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-personnel/edit-personnel.component */ 18743);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/delete-modal/delete-modal.component */ 88622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/roster-api/roster-api.service */ 10970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 7005);












const _c0 = ["addPersonnelComponentReference"];
const _c1 = ["editPersonnelComponentReference"];
const _c2 = ["connectionToastComponentReference"];
const _c3 = ["deleteModalComponentReference"];
function ManagePersonnelComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManagePersonnelComponent_tr_17_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const data_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.openEditPersonnel(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManagePersonnelComponent_tr_17_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const data_r6 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.confirmDelete(data_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r6 == null ? null : data_r6.personnel_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r6 == null ? null : data_r6.personnel_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r6 == null ? null : data_r6.batch_sybol);
} }
function ManagePersonnelComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ManagePersonnelComponent {
    constructor(router, rosterApi) {
        this.router = router;
        this.rosterApi = rosterApi;
        this.personnelGridData = [];
        this.isFetchingGridData = false;
        this.deleteId = "";
    }
    ngOnInit() {
        this.getRosterPersonnel();
    }
    getRosterPersonnel() {
        this.isFetchingGridData = true;
        this.rosterApi.getRosterPersonnel()
            .then((res) => {
            console.log(res);
            this.personnelGridData = res.docs;
            this.isFetchingGridData = false;
        }, (err) => {
            console.log(err);
            this.isFetchingGridData = false;
            this.connectionToast.openToast();
        });
    }
    createPersonnel(data) {
        console.log(data);
        this.addPersonnel.isSaving = true;
        this.rosterApi.createPersonnel(data)
            .then((res) => {
            console.log(res);
            if (res.id) {
                this.getRosterPersonnel();
                this.addPersonnel.isSaving = false;
                this.addPersonnel.dismissButton.nativeElement.ckick();
                this.addPersonnel.resetForm();
            }
        }, (err) => {
            console.log(err);
            this.addPersonnel.isSaving = false;
            this.connectionToast.openToast();
        });
    }
    updatePersonnel(data) {
        console.log(data);
        this.editPersonnel.isSaving = true;
        this.rosterApi.updatePersonnel(data.id, data.personnel)
            .then((res) => {
            console.log(res);
            this.getRosterPersonnel();
            this.editPersonnel.isSaving = false;
            this.editPersonnel.dismissButton.nativeElement.ckick();
        }, (err) => {
            console.log(err);
            this.editPersonnel.isSaving = false;
            this.connectionToast.openToast();
        });
    }
    deletePersonnel() {
        this.rosterApi.deletePersonnel(this.deleteId)
            .then((res) => {
            console.log(res);
            this.getRosterPersonnel();
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    openEditPersonnel(data) {
        console.log(data);
        this.editPersonnel.openModal(data);
    }
    confirmDelete(id) {
        this.deleteId = id;
        this.deleteModal.openModal();
    }
}
ManagePersonnelComponent.ɵfac = function ManagePersonnelComponent_Factory(t) { return new (t || ManagePersonnelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_4__.RosterApiService)); };
ManagePersonnelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ManagePersonnelComponent, selectors: [["app-manage-personnel"]], viewQuery: function ManagePersonnelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5, _add_personnel_add_personnel_component__WEBPACK_IMPORTED_MODULE_0__.AddPersonnelComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5, _edit_personnel_edit_personnel_component__WEBPACK_IMPORTED_MODULE_1__.EditPersonnelComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 5, projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__.DeleteModalComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.addPersonnel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.editPersonnel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.deleteModal = _t.first);
    } }, decls: 27, vars: 2, consts: [[1, "row"], [1, "col-md-12"], [1, "table", "table-bordered", "table-sm", "w-100", "page-table"], [1, "bg-light"], ["width", "20%"], ["width", "45%"], ["width", "15%", 1, "p-0"], [1, "btn", "btn-secondary", "btn-sm", "w-100", 3, "click"], [1, "bi", "bi-plus"], [4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], [3, "savePersonnelEvent"], ["editPersonnelComponentReference", ""], [3, "savePersonnelEvent", "deletePersonnelEvent"], ["addPersonnelComponentReference", ""], ["connectionToastComponentReference", ""], [3, "confirmEvent"], ["deleteModalComponentReference", ""], [1, "p-0"], [1, "btn", "btn-sm", "border", "w-50", 3, "click"], [1, "bi", "bi-pen"], [1, "bi", "bi-trash"], [1, "text-center"], ["colspan", "4"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm", "m-2"], [1, "visually-hidden"]], template: function ManagePersonnelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Roster Personnel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Personnel ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Personnel Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Batch");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManagePersonnelComponent_Template_button_click_14_listener() { return ctx.addPersonnel.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ManagePersonnelComponent_tr_17_Template, 12, 3, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ManagePersonnelComponent_tr_18_Template, 5, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "app-edit-personnel", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("savePersonnelEvent", function ManagePersonnelComponent_Template_app_edit_personnel_savePersonnelEvent_19_listener($event) { return ctx.createPersonnel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "app-add-personnel", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("savePersonnelEvent", function ManagePersonnelComponent_Template_app_add_personnel_savePersonnelEvent_21_listener($event) { return ctx.updatePersonnel($event); })("deletePersonnelEvent", function ManagePersonnelComponent_Template_app_add_personnel_deletePersonnelEvent_21_listener($event) { return ctx.confirmDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "app-connection-toast", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "app-delete-modal", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("confirmEvent", function ManagePersonnelComponent_Template_app_delete_modal_confirmEvent_25_listener() { return ctx.deletePersonnel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.personnelGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isFetchingGridData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _edit_personnel_edit_personnel_component__WEBPACK_IMPORTED_MODULE_1__.EditPersonnelComponent, _add_personnel_add_personnel_component__WEBPACK_IMPORTED_MODULE_0__.AddPersonnelComponent, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent, projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__.DeleteModalComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtcGVyc29ubmVsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 83290:
/*!**************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/new-roster/new-roster.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewRosterComponent": () => (/* binding */ NewRosterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 16448);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment/moment */ 76246);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/roster-api/roster-api.service */ 10970);










const _c0 = ["newButtonElementReference"];
const _c1 = ["dismissButtonElementReference"];
const _c2 = ["connectionToastComponentReference"];
class NewRosterComponent {
    constructor(router, rosterApi) {
        this.router = router;
        this.rosterApi = rosterApi;
        this.rosterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
        this.isRosterSaving = false;
    }
    ngOnInit() {
        this.initRosterForm();
    }
    openModal() {
        this.newButton.nativeElement.click();
    }
    initRosterForm() {
        this.rosterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            rosterCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            rosterName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
        });
    }
    createRoster() {
        let data = {
            created_at: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
            account: localStorage.getItem('restaurant_id'),
            roster_code: this.rosterForm.controls.rosterCode.value,
            roster_name: this.rosterForm.controls.rosterName.value,
            from_date: this.rosterForm.controls.fromDate.value,
            to_date: this.rosterForm.controls.toDate.value,
        };
        this.isRosterSaving = true;
        this.rosterApi.createRoster(data)
            .then((res) => {
            console.log(res);
            if (res.id) {
                sessionStorage.setItem('restaurant_roster_id', res.id);
                this.dismissButton.nativeElement.click();
                this.router.navigateByUrl('/home/roster/view-roster');
                this.isRosterSaving = false;
                this.createSheet();
            }
        }, (err) => {
            console.log(err);
            this.isRosterSaving = false;
            this.connectionToast.openToast();
        });
        console.log(data);
    }
    createSheet() {
        let sheetDays = this.enumerateDaysBetweenDates(this.rosterForm.controls.fromDate.value, this.rosterForm.controls.toDate.value);
        let data = {
            shifts: [],
            days: sheetDays,
            sheet: []
        };
        this.rosterApi.createSheet(sessionStorage.getItem('restaurant_roster_id'), data)
            .then((res) => console.log(res), (err) => console.log(err));
        console.log(data);
    }
    enumerateDaysBetweenDates(startDate, endDate) {
        var sheetDays = [];
        var firstDate = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()(startDate).startOf('day');
        var lastDate = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()(endDate).startOf('day');
        while (firstDate.add(1, 'days').diff(lastDate) <= 0) {
            console.log(firstDate.toDate());
            sheetDays.push(firstDate.clone().toDate());
        }
        return sheetDays;
    }
    ;
}
NewRosterComponent.ɵfac = function NewRosterComponent_Factory(t) { return new (t || NewRosterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_3__.RosterApiService)); };
NewRosterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: NewRosterComponent, selectors: [["app-new-roster"]], viewQuery: function NewRosterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.newButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.dismissButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 44, vars: 3, consts: [["data-bs-toggle", "modal", "data-bs-target", "#newRosterModal", 3, "hidden"], ["newButtonElementReference", ""], ["id", "newRosterModal", "tabindex", "-1", "aria-labelledby", "newRosterModalLabel", "aria-hidden", "true", 1, "modal", "fade", "form-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "modal-header", "bg-light"], ["id", "newRosterModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["dismissButtonElementReference", ""], [1, "modal-body"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-end", "mt-1"], [1, "col-md-8"], ["formControlName", "rosterCode", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "rosterName", 1, "form-control", "form-control-sm", "w-100"], ["type", "date", "formControlName", "fromDate", 1, "form-control", "form-control-sm", "w-100"], ["type", "date", "formControlName", "toDate", 1, "form-control", "form-control-sm", "w-100"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn", 3, "disabled"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn"], ["connectionToastComponentReference", ""]], template: function NewRosterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function NewRosterComponent_Template_form_ngSubmit_6_listener() { return ctx.createRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "New Roster");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "button", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Roster ID :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Roster Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Date From :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Date To :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "app-connection-toast", null, 22);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.rosterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isRosterSaving);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctcm9zdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 58630:
/*!**********************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/personnel-form/personnel-form.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonnelFormComponent": () => (/* binding */ PersonnelFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _select_windows_staff_windows_select_staff_select_staff_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../select-windows/staff-windows/select-staff/select-staff.component */ 31592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/roster-api/roster-api.service */ 10970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7005);








const _c0 = ["connectionToastComponentReference"];
const _c1 = ["selectStaffComponentReference"];
function PersonnelFormComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const batch_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](batch_r2.data().batch_symbol);
} }
class PersonnelFormComponent {
    constructor(rosterApi) {
        this.rosterApi = rosterApi;
        this.personnelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
        this.batchSource = [];
    }
    ngOnInit() {
        this.initPersonnelForm();
    }
    initPersonnelForm() {
        this.personnelForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            personnelCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({ value: "", disabled: true }),
            personnelName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({ value: "", disabled: true }),
            batchSymbol: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
        });
    }
    getBatches(batch) {
        this.rosterApi.getRosterBatch()
            .then((res) => {
            console.log(res);
            this.batchSource = res.docs;
            this.personnelForm.controls.batchSymbol.setValue(batch);
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    onStaffSelected(staffData) {
        console.log(staffData);
        this.selectedStaffId = staffData.id;
        this.personnelForm.controls.personnelCode.setValue(staffData.data().staff_code);
        this.personnelForm.controls.personnelName.setValue(staffData.data().first_name + " " + staffData.data().first_name);
        this.personnelForm.controls.batchSymbol.setValue(staffData.data().batch_symbol);
    }
    openStaffWindow() {
        console.log("You are opening select staff window");
        this.selectStaff.openModal();
    }
}
PersonnelFormComponent.ɵfac = function PersonnelFormComponent_Factory(t) { return new (t || PersonnelFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_2__.RosterApiService)); };
PersonnelFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PersonnelFormComponent, selectors: [["app-personnel-form"]], viewQuery: function PersonnelFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5, _select_windows_staff_windows_select_staff_select_staff_component__WEBPACK_IMPORTED_MODULE_1__.SelectStaffComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.selectStaff = _t.first);
    } }, decls: 28, vars: 2, consts: [[1, "page-form", 3, "formGroup"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-end", "mt-1"], [1, "col-md-8"], [1, "input-group", "input-group-sm", "w-100"], ["formControlName", "personnelCode", 1, "form-control"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-three-dots"], ["formControlName", "personnelName", 1, "form-control"], ["formControlName", "batchSymbol", 1, "form-control", "form-control-sm", "w-100"], [4, "ngFor", "ngForOf"], [3, "rowSelected"], ["selectStaffComponentReference", ""]], template: function PersonnelFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Personnel Code :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PersonnelFormComponent_Template_button_click_8_listener() { return ctx.openStaffWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Personnel Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PersonnelFormComponent_Template_button_click_17_listener() { return ctx.openStaffWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Batch :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, PersonnelFormComponent_option_25_Template, 2, 1, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "app-select-staff", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("rowSelected", function PersonnelFormComponent_Template_app_select_staff_rowSelected_26_listener($event) { return ctx.onStaffSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.personnelForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.batchSource);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _select_windows_staff_windows_select_staff_select_staff_component__WEBPACK_IMPORTED_MODULE_1__.SelectStaffComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25uZWwtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 28223:
/*!******************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/roster-sheet/roster-sheet.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RosterSheetComponent": () => (/* binding */ RosterSheetComponent)
/* harmony export */ });
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/moment */ 76246);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/roster-api/roster-api.service */ 10970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7005);







const _c0 = ["connectionToastComponentReference"];
function RosterSheetComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", date_r2.toDate().toISOString().slice(0, 10), " ");
} }
class RosterSheetComponent {
    constructor(router, rosterApi) {
        this.router = router;
        this.rosterApi = rosterApi;
        this.dataSource = [];
        this.sheetColumns = [];
        this.sheetDataFields = [];
        this.sheetEditDropDownSource = [];
        this.isFetchingSheetData = false;
        this.isSheetSaving = false;
        this.sheetDays = [];
        this.sheetShifts = [];
    }
    ngOnInit() {
        this.getSheet();
        this.getRosterShift();
        this.getRosterBatch();
    }
    getSheet() {
        this.rosterApi.getSheet()
            .then((res) => {
            console.log(res);
            this.sheetDays = res.data().days;
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    getRosterShift() {
        this.rosterApi.getRosterShift()
            .then((res) => {
            console.log(res);
            this.rosterShiftsData = res;
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    getRosterBatch() {
        this.rosterApi.getRosterBatch()
            .then((res) => {
            console.log(res);
            this.rosterBatchesData = res.docs;
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    enumerateDaysBetweenDates(startDate, endDate) {
        var firstDate = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(startDate).startOf('day');
        var lastDate = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(endDate).startOf('day');
        while (firstDate.add(1, 'days').diff(lastDate) < 0) {
            console.log(firstDate.toDate());
            this.sheetDays.push(firstDate.clone().toDate());
        }
    }
    ;
    setRosterColumns(shiftDays) {
        // set datafields
        this.sheetDataFields = [];
        this.sheetDataFields.push('id: string');
        this.sheetDataFields.push('shift_id: string');
        this.sheetDataFields.push('shift_name: string');
        // set columns
        this.sheetColumns = [];
        this.sheetColumns.push({ label: "Shift Name", dataField: "shift_name", width: "18%" });
        shiftDays.forEach((day) => {
            // datafields
            this.sheetDataFields.push({ name: day.id, type: 'string' });
            // columns
            var dayColumn = { label: day.day, dataField: day.id, editable: "true", width: 100 };
            this.sheetColumns.push(dayColumn);
        });
    }
    populateSheetShifts(shiftData) {
        shiftData.forEach((shift) => {
            let data = { id: shift.id, shift_id: shift.id, shift_name: shift.shift_name };
            this.dataSource.push(data);
        });
        console.log(this.dataSource);
    }
}
RosterSheetComponent.ɵfac = function RosterSheetComponent_Factory(t) { return new (t || RosterSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_2__.RosterApiService)); };
RosterSheetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RosterSheetComponent, selectors: [["app-roster-sheet"]], viewQuery: function RosterSheetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 19, vars: 2, consts: [[1, "row", "mb-2"], [1, "col-md-12"], ["routerLink", "/home/roster/manage-batches", 1, "btn", "btn-secondary", "float-end", "nr-standard-font"], [1, "bi", "bi-arrow-left-right", "me-2"], [1, "row"], [1, "row", "mb-3"], [1, "btn", "btn-light", "border", "float-end", "page-refresh-btn", 3, "disabled"], [1, "bi", "bi-arrow-clockwise"], [1, "table", "table-bordered", "table-sm", "w-100", "page-table"], ["width", "70"], ["width", "50", 4, "ngFor", "ngForOf"], ["connectionToastComponentReference", ""], ["width", "50"]], template: function RosterSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Manage Batches ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Shifts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, RosterSheetComponent_th_15_Template, 2, 1, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-connection-toast", null, 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isFetchingSheetData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sheetDays);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3N0ZXItc2hlZXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6022:
/*!********************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/roster.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RosterModule": () => (/* binding */ RosterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng2-charts */ 34459);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _select_windows_staff_windows_staff_windows_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../select-windows/staff-windows/staff-windows.module */ 52452);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 23286);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ 51183);
/* harmony import */ var _all_roster_all_roster_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-roster/all-roster.component */ 35094);
/* harmony import */ var _new_roster_new_roster_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-roster/new-roster.component */ 83290);
/* harmony import */ var _view_roster_view_roster_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-roster/view-roster.component */ 77576);
/* harmony import */ var _roster_sheet_roster_sheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./roster-sheet/roster-sheet.component */ 28223);
/* harmony import */ var _shifts_shifts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shifts/shifts.component */ 90629);
/* harmony import */ var _add_shift_add_shift_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-shift/add-shift.component */ 56183);
/* harmony import */ var _edit_shift_edit_shift_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-shift/edit-shift.component */ 34198);
/* harmony import */ var _manage_personnel_manage_personnel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manage-personnel/manage-personnel.component */ 86838);
/* harmony import */ var _edit_personnel_edit_personnel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-personnel/edit-personnel.component */ 18743);
/* harmony import */ var _manage_batches_manage_batches_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./manage-batches/manage-batches.component */ 45573);
/* harmony import */ var _add_batch_add_batch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-batch/add-batch.component */ 54071);
/* harmony import */ var _edit_batch_edit_batch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-batch/edit-batch.component */ 87657);
/* harmony import */ var _add_personnel_add_personnel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-personnel/add-personnel.component */ 16326);
/* harmony import */ var _personnel_form_personnel_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./personnel-form/personnel-form.component */ 58630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 1858);























class RosterModule {
}
RosterModule.ɵfac = function RosterModule_Factory(t) { return new (t || RosterModule)(); };
RosterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: RosterModule });
RosterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_22__.ChartsModule,
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule,
            _select_windows_staff_windows_staff_windows_module__WEBPACK_IMPORTED_MODULE_1__.StaffWindowsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](RosterModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__.SettingsComponent,
        _all_roster_all_roster_component__WEBPACK_IMPORTED_MODULE_4__.AllRosterComponent,
        _new_roster_new_roster_component__WEBPACK_IMPORTED_MODULE_5__.NewRosterComponent,
        _view_roster_view_roster_component__WEBPACK_IMPORTED_MODULE_6__.ViewRosterComponent,
        _roster_sheet_roster_sheet_component__WEBPACK_IMPORTED_MODULE_7__.RosterSheetComponent,
        _shifts_shifts_component__WEBPACK_IMPORTED_MODULE_8__.ShiftsComponent,
        _add_shift_add_shift_component__WEBPACK_IMPORTED_MODULE_9__.AddShiftComponent,
        _edit_shift_edit_shift_component__WEBPACK_IMPORTED_MODULE_10__.EditShiftComponent,
        _manage_personnel_manage_personnel_component__WEBPACK_IMPORTED_MODULE_11__.ManagePersonnelComponent,
        _edit_personnel_edit_personnel_component__WEBPACK_IMPORTED_MODULE_12__.EditPersonnelComponent,
        _manage_batches_manage_batches_component__WEBPACK_IMPORTED_MODULE_13__.ManageBatchesComponent,
        _add_batch_add_batch_component__WEBPACK_IMPORTED_MODULE_14__.AddBatchComponent,
        _edit_batch_edit_batch_component__WEBPACK_IMPORTED_MODULE_15__.EditBatchComponent,
        _add_personnel_add_personnel_component__WEBPACK_IMPORTED_MODULE_16__.AddPersonnelComponent,
        _personnel_form_personnel_form_component__WEBPACK_IMPORTED_MODULE_17__.PersonnelFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_22__.ChartsModule,
        projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule,
        _select_windows_staff_windows_staff_windows_module__WEBPACK_IMPORTED_MODULE_1__.StaffWindowsModule] }); })();


/***/ }),

/***/ 51183:
/*!**********************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/settings/settings.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);

class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 2, vars: 0, template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "settings works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 90629:
/*!******************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/shifts/shifts.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftsComponent": () => (/* binding */ ShiftsComponent)
/* harmony export */ });
/* harmony import */ var _add_shift_add_shift_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-shift/add-shift.component */ 56183);
/* harmony import */ var _edit_shift_edit_shift_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-shift/edit-shift.component */ 34198);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/delete-modal/delete-modal.component */ 88622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/roster-api/roster-api.service */ 10970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);











const _c0 = ["addShiftComponentReference"];
const _c1 = ["editShiftComponentReference"];
const _c2 = ["connectionToastComponentReference"];
const _c3 = ["deleteModalComponentReference"];
function ShiftsComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShiftsComponent_tr_15_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const data_r6 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.openEditShift(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShiftsComponent_tr_15_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const data_r6 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.confirmDelete(data_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r6 == null ? null : data_r6.data().shift_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r6 == null ? null : data_r6.data().start_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r6 == null ? null : data_r6.data().end_time);
} }
function ShiftsComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ShiftsComponent {
    constructor(rosterApi) {
        this.rosterApi = rosterApi;
        this.shiftsGridData = [];
        this.isFetchingGridData = false;
    }
    ngOnInit() {
        this.getRosterShift();
    }
    getRosterShift() {
        this.isFetchingGridData = true;
        this.rosterApi.getRosterShift()
            .then((res) => {
            console.log(res);
            this.shiftsGridData = res.docs;
            this.isFetchingGridData = false;
        }, (err) => {
            console.log(err);
            this.isFetchingGridData = false;
            this.connectionToast.openToast();
        });
    }
    createShift(data) {
        console.log(data);
        this.addShift.isSaving = true;
        this.rosterApi.createShift(data)
            .then((res) => {
            console.log(res);
            if (res.id) {
                this.getRosterShift();
                this.addShift.isSaving = false;
                this.addShift.dismissButton.nativeElement.click();
                this.addShift.resetForm();
            }
        }, (err) => {
            console.log(err);
            this.addShift.isSaving = false;
            this.connectionToast.openToast();
        });
    }
    updateShift(data) {
        console.log(data);
        this.editShift.isSaving = true;
        this.rosterApi.updateShift(data.id, data.shift)
            .then((res) => {
            console.log(res);
            this.getRosterShift();
            this.editShift.isSaving = false;
            this.editShift.dismissButton.nativeElement.click();
        }, (err) => {
            console.log(err);
            this.editShift.isSaving = false;
            this.connectionToast.openToast();
        });
    }
    deleteShift() {
        console.log(this.deleteId);
        this.rosterApi.deleteShift(this.deleteId)
            .then((res) => {
            console.log(res);
            this.getRosterShift();
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    openEditShift(data) {
        console.log(data);
        this.editShift.openModal(data);
    }
    confirmDelete(id) {
        this.deleteId = id;
        this.deleteModal.openModal();
    }
}
ShiftsComponent.ɵfac = function ShiftsComponent_Factory(t) { return new (t || ShiftsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_4__.RosterApiService)); };
ShiftsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ShiftsComponent, selectors: [["app-shifts"]], viewQuery: function ShiftsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5, _add_shift_add_shift_component__WEBPACK_IMPORTED_MODULE_0__.AddShiftComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5, _edit_shift_edit_shift_component__WEBPACK_IMPORTED_MODULE_1__.EditShiftComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 5, projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__.DeleteModalComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.addShift = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.editShift = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.deleteModal = _t.first);
    } }, decls: 25, vars: 2, consts: [[1, "row"], [1, "col-md-12"], [1, "table", "table-bordered", "table-sm", "w-100", "page-table"], [1, "bg-light"], ["width", "45%"], ["width", "20%"], ["width", "15%", 1, "p-0"], [1, "btn", "btn-secondary", "btn-sm", "w-100", 3, "click"], [1, "bi", "bi-plus"], [4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], [3, "saveShiftEvent"], ["addShiftComponentReference", ""], ["editShiftComponentReference", ""], ["connectionToastComponentReference", ""], [3, "confirmEvent"], ["deleteModalComponentReference", ""], [1, "p-0"], [1, "btn", "btn-sm", "border", "w-50", 3, "click"], [1, "bi", "bi-pen"], [1, "bi", "bi-trash"], [1, "text-center"], ["colspan", "4"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm", "m-2"], [1, "visually-hidden"]], template: function ShiftsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Shift Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Start Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "End Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShiftsComponent_Template_button_click_12_listener() { return ctx.addShift.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ShiftsComponent_tr_15_Template, 12, 3, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ShiftsComponent_tr_16_Template, 5, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "app-add-shift", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("saveShiftEvent", function ShiftsComponent_Template_app_add_shift_saveShiftEvent_17_listener($event) { return ctx.createShift($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "app-edit-shift", 11, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("saveShiftEvent", function ShiftsComponent_Template_app_edit_shift_saveShiftEvent_19_listener($event) { return ctx.updateShift($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "app-connection-toast", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "app-delete-modal", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("confirmEvent", function ShiftsComponent_Template_app_delete_modal_confirmEvent_23_listener() { return ctx.deleteShift(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.shiftsGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isFetchingGridData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _add_shift_add_shift_component__WEBPACK_IMPORTED_MODULE_0__.AddShiftComponent, _edit_shift_edit_shift_component__WEBPACK_IMPORTED_MODULE_1__.EditShiftComponent, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent, projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__.DeleteModalComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlmdHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 77576:
/*!****************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/roster/view-roster/view-roster.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewRosterComponent": () => (/* binding */ ViewRosterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _shifts_shifts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shifts/shifts.component */ 90629);
/* harmony import */ var _roster_sheet_roster_sheet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../roster-sheet/roster-sheet.component */ 28223);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component */ 88622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/roster-api/roster-api.service */ 10970);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 7005);














const _c0 = ["connectionToastComponentReference"];
const _c1 = ["deleteModalComponentReference"];
const _c2 = ["rosterSheetComponentReference"];
const _c3 = ["shiftsComponentReference"];
function ViewRosterComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewRosterComponent_div_32_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.confirmDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isRosterDeleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isRosterSaving);
} }
function ViewRosterComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class ViewRosterComponent {
    constructor(router, rosterApi) {
        this.router = router;
        this.rosterApi = rosterApi;
        this.navHeading = [
            { text: "All Roster", url: "/home/roster/all-roster" },
            { text: "View Roster", url: "/home/roster/view-roster" },
        ];
        this.rosterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({});
        this.isRosterLoading = false;
        this.isRosterSaving = false;
        this.isRosterDeleting = false;
    }
    ngOnInit() {
        this.initRosterForm();
        this.getRoster();
    }
    initRosterForm() {
        this.rosterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            rosterCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            rosterName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        });
    }
    getRoster() {
        this.isRosterLoading = true;
        this.rosterApi.getRoster()
            .then((res) => {
            console.log(res);
            this.rosterFormData = res;
            this.rosterForm.controls.rosterCode.setValue(this.rosterFormData.data().roster_code);
            this.rosterForm.controls.rosterName.setValue(this.rosterFormData.data().roster_name);
            this.rosterForm.controls.fromDate.setValue(this.rosterFormData.data().from_date);
            this.rosterForm.controls.toDate.setValue(this.rosterFormData.data().to_date);
            this.isRosterLoading = false;
        }, (err) => {
            console.log(err);
            this.isRosterLoading = false;
            this.connectionToast.openToast();
        });
    }
    updateRoster() {
        let data = {
            roster_name: this.rosterForm.controls.rosterName.value,
            roster_code: this.rosterForm.controls.rosterCode.value,
            from_date: this.rosterForm.controls.fromDate.value,
            to_date: this.rosterForm.controls.toDate.value,
        };
        this.isRosterSaving = true;
        this.rosterApi.updateRoster(data)
            .then((res) => {
            console.log(res);
            this.isRosterSaving = false;
        }, (err) => {
            console.log(err);
            this.isRosterSaving = false;
            this.connectionToast.openToast();
        });
        console.log(data);
        // TODO:
        // this.rosterSheet.postSheetData();
    }
    confirmDelete() {
        this.deleteModal.openModal();
    }
    deleteOrder() {
        this.isRosterDeleting = true;
        this.rosterApi.deleteRoster()
            .then((res) => {
            console.log(res);
            this.isRosterDeleting = false;
            this.router.navigateByUrl('/home/roster/all-roster');
        }, (err) => {
            console.log(err);
            this.isRosterDeleting = false;
            this.connectionToast.openToast();
        });
    }
    onPrint() {
        console.log("lets start printing...");
    }
}
ViewRosterComponent.ɵfac = function ViewRosterComponent_Factory(t) { return new (t || ViewRosterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_roster_api_roster_api_service__WEBPACK_IMPORTED_MODULE_4__.RosterApiService)); };
ViewRosterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ViewRosterComponent, selectors: [["app-view-roster"]], viewQuery: function ViewRosterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5, projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__.DeleteModalComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5, _roster_sheet_roster_sheet_component__WEBPACK_IMPORTED_MODULE_1__.RosterSheetComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c3, 5, _shifts_shifts_component__WEBPACK_IMPORTED_MODULE_0__.ShiftsComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.deleteModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.rosterSheet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.shifts = _t.first);
    } }, decls: 43, vars: 4, consts: [[3, "headings"], [1, "container"], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "row", "page-form"], [1, "col-md-12"], [1, "col-md-6"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-end", "mt-1"], [1, "col-md-8"], ["formControlName", "rosterCode", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "rosterName", 1, "form-control", "form-control-sm", "w-100"], ["type", "date", "formControlName", "fromDate", 1, "form-control", "form-control-sm", "w-100"], ["type", "date", "formControlName", "toDate", 1, "form-control", "form-control-sm", "w-100"], ["class", "row mt-3 page-form", 4, "ngIf"], ["shiftsComponentReference", ""], [1, "top-divider"], [1, "bottom-divider"], ["rosterSheetComponentReference", ""], ["connectionToastComponentReference", ""], [1, "row", "mt-3", "page-form"], ["type", "button", "routerLink", "/home/roster/all-roster", 1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn", 3, "disabled"], ["type", "button", 1, "btn", "btn-sm", "float-end", "ms-1", "btn-light", "page-form-btn"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm"], [1, "visually-hidden"]], template: function ViewRosterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ViewRosterComponent_Template_form_ngSubmit_2_listener() { return ctx.updateRoster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Roster Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Roster ID :");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Roster Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Date From :");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Date To :");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, ViewRosterComponent_div_32_Template, 8, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, ViewRosterComponent_div_33_Template, 6, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "app-shifts", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "hr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "app-roster-sheet", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "app-connection-toast", null, 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("headings", ctx.navHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.rosterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isRosterLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isRosterLoading);
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_5__.ModuleTopnavComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shifts_shifts_component__WEBPACK_IMPORTED_MODULE_0__.ShiftsComponent, _roster_sheet_roster_sheet_component__WEBPACK_IMPORTED_MODULE_1__.RosterSheetComponent, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXJvc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 59128:
/*!*********************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/roster-page/roster-page-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RosterPageRoutingModule": () => (/* binding */ RosterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _roster_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roster-page.component */ 96131);
/* harmony import */ var _components_modules_roster_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/modules/roster/dashboard/dashboard.component */ 23286);
/* harmony import */ var _components_modules_roster_all_roster_all_roster_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/modules/roster/all-roster/all-roster.component */ 35094);
/* harmony import */ var _components_modules_roster_view_roster_view_roster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modules/roster/view-roster/view-roster.component */ 77576);
/* harmony import */ var _components_modules_roster_manage_batches_manage_batches_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/modules/roster/manage-batches/manage-batches.component */ 45573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);








const routes = [
    {
        path: "",
        component: _roster_page_component__WEBPACK_IMPORTED_MODULE_0__.RosterPageComponent,
        children: [
            { path: "", component: _components_modules_roster_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent },
            { path: "dashboard", component: _components_modules_roster_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent },
            { path: "all-roster", component: _components_modules_roster_all_roster_all_roster_component__WEBPACK_IMPORTED_MODULE_2__.AllRosterComponent },
            { path: "view-roster", component: _components_modules_roster_view_roster_view_roster_component__WEBPACK_IMPORTED_MODULE_3__.ViewRosterComponent },
            { path: "manage-batches", component: _components_modules_roster_manage_batches_manage_batches_component__WEBPACK_IMPORTED_MODULE_4__.ManageBatchesComponent },
        ]
    }
];
class RosterPageRoutingModule {
}
RosterPageRoutingModule.ɵfac = function RosterPageRoutingModule_Factory(t) { return new (t || RosterPageRoutingModule)(); };
RosterPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RosterPageRoutingModule });
RosterPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RosterPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 96131:
/*!****************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/roster-page/roster-page.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RosterPageComponent": () => (/* binding */ RosterPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../application/src/app/components/main-navbar/main-navbar/main-navbar.component */ 28088);
/* harmony import */ var _personal_src_app_components_module_utilities_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../personal/src/app/components/module-utilities/module-sidenav/module-sidenav.component */ 7632);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 869);




class RosterPageComponent {
    constructor() {
        this.navLinks = [
            { text: "All Roster", url: "/home/roster/all-roster", icon: "bi bi-list-ul" },
        ];
    }
    ngOnInit() {
    }
}
RosterPageComponent.ɵfac = function RosterPageComponent_Factory(t) { return new (t || RosterPageComponent)(); };
RosterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RosterPageComponent, selectors: [["app-roster-page"]], decls: 6, vars: 4, consts: [[3, "navBrand", "source"], ["id", "wrapper"], [3, "navLinks", "heading"], ["id", "content-wrapper", 1, "d-flex", "flex-column"], ["id", "content"]], template: function RosterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-main-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-module-sidenav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navBrand", "nR Restaurant")("source", "Restaurant");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navLinks", ctx.navLinks)("heading", "Roster");
    } }, directives: [_application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__.MainNavbarComponent, _personal_src_app_components_module_utilities_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.ModuleSidenavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3N0ZXItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 25632:
/*!*************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/roster-page/roster-page.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RosterPageModule": () => (/* binding */ RosterPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _roster_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roster-page-routing.module */ 59128);
/* harmony import */ var projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/application/src/app/components/main-navbar/main-navbar.module */ 7264);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _components_modules_roster_roster_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modules/roster/roster.module */ 6022);
/* harmony import */ var _roster_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roster-page.component */ 96131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);







class RosterPageModule {
}
RosterPageModule.ɵfac = function RosterPageModule_Factory(t) { return new (t || RosterPageModule)(); };
RosterPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RosterPageModule });
RosterPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _roster_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.RosterPageRoutingModule,
            projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
            _components_modules_roster_roster_module__WEBPACK_IMPORTED_MODULE_3__.RosterModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RosterPageModule, { declarations: [_roster_page_component__WEBPACK_IMPORTED_MODULE_4__.RosterPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _roster_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.RosterPageRoutingModule,
        projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
        projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
        _components_modules_roster_roster_module__WEBPACK_IMPORTED_MODULE_3__.RosterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_restaurant_src_app_pages_modules_roster-page_roster-page_module_ts.js.map