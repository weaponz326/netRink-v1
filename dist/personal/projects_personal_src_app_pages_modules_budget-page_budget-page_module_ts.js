"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["projects_personal_src_app_pages_modules_budget-page_budget-page_module_ts"],{

/***/ 36647:
/*!**********************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/budget/add-expenditure/add-expenditure.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddExpenditureComponent": () => (/* binding */ AddExpenditureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 16448);





const _c0 = ["addButtonElementReference"];
const _c1 = ["dismissButtonElementReference"];
class AddExpenditureComponent {
    constructor() {
        this.saveExpenditureEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.addExpenditureForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
        this.isSaving = false;
    }
    ngOnInit() {
        this.initAddExpenditureForm();
    }
    openModal() {
        this.addExpenditureForm.controls.amount.setValue(0.00);
        this.addButton.nativeElement.click();
    }
    initAddExpenditureForm() {
        this.addExpenditureForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            itemNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            itemDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
        });
    }
    saveExpenditure() {
        let data = {
            created_at: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
            item_number: this.addExpenditureForm.controls.itemNumber.value,
            item_description: this.addExpenditureForm.controls.itemDescription.value,
            amount: this.addExpenditureForm.controls.amount.value,
            budget: {
                id: sessionStorage.getItem('personal_budget_id'),
                data: this.budgetData
            }
        };
        this.saveExpenditureEvent.emit(data);
    }
    resetForm() {
        this.addExpenditureForm.controls.itemNumber.setValue('');
        this.addExpenditureForm.controls.itemDescription.setValue('');
        this.addExpenditureForm.controls.amount.setValue('');
    }
}
AddExpenditureComponent.ɵfac = function AddExpenditureComponent_Factory(t) { return new (t || AddExpenditureComponent)(); };
AddExpenditureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddExpenditureComponent, selectors: [["app-add-expenditure"]], viewQuery: function AddExpenditureComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dismissButton = _t.first);
    } }, outputs: { saveExpenditureEvent: "saveExpenditureEvent" }, decls: 36, vars: 3, consts: [["data-bs-toggle", "modal", "data-bs-target", "#addExpenditureModal", 3, "hidden"], ["addButtonElementReference", ""], ["id", "addExpenditureModal", "tabindex", "-1", "aria-labelledby", "addExpenditureModalLabel", "aria-hidden", "true", 1, "modal", "fade", "form-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "modal-header", "bg-light"], ["id", "addExpenditureModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["dismissButtonElementReference", ""], [1, "modal-body"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-end", "mt-1"], [1, "col-md-8"], ["formControlName", "itemNumber", "type", "number", "min", "0", "step", ".01", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "itemDescription", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "amount", "type", "number", 1, "form-control", "form-control-sm", "w-100"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn", 3, "disabled"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn"]], template: function AddExpenditureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddExpenditureComponent_Template_form_ngSubmit_6_listener() { return ctx.saveExpenditure(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Add Expenditure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "button", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Item No. :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Item Description :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Amount :");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addExpenditureForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSaving);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZXhwZW5kaXR1cmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 40701:
/*!************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/budget/add-income/add-income.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddIncomeComponent": () => (/* binding */ AddIncomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 16448);





const _c0 = ["addButtonElementReference"];
const _c1 = ["dismissButtonElementReference"];
class AddIncomeComponent {
    constructor() {
        this.saveIncomeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.addIncomeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
        this.isSaving = false;
    }
    ngOnInit() {
        this.initAddIncomeForm();
    }
    openModal() {
        this.addIncomeForm.controls.amount.setValue(0.00);
        this.addButton.nativeElement.click();
    }
    initAddIncomeForm() {
        this.addIncomeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            itemNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            itemDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl()
        });
    }
    saveIncome() {
        let data = {
            created_at: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
            item_number: this.addIncomeForm.controls.itemNumber.value,
            item_description: this.addIncomeForm.controls.itemDescription.value,
            amount: this.addIncomeForm.controls.amount.value,
            budget: {
                id: sessionStorage.getItem('personal_budget_id'),
                data: this.budgetData
            }
        };
        this.saveIncomeEvent.emit(data);
    }
    resetForm() {
        this.addIncomeForm.controls.itemNumber.setValue('');
        this.addIncomeForm.controls.itemDescription.setValue('');
        this.addIncomeForm.controls.amount.setValue('');
    }
}
AddIncomeComponent.ɵfac = function AddIncomeComponent_Factory(t) { return new (t || AddIncomeComponent)(); };
AddIncomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddIncomeComponent, selectors: [["app-add-income"]], viewQuery: function AddIncomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dismissButton = _t.first);
    } }, outputs: { saveIncomeEvent: "saveIncomeEvent" }, decls: 36, vars: 3, consts: [["data-bs-toggle", "modal", "data-bs-target", "#addIncomeModal", 3, "hidden"], ["addButtonElementReference", ""], ["id", "addIncomeModal", "tabindex", "-1", "aria-labelledby", "addIncomeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "form-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "modal-header", "bg-light"], ["id", "addIncomeModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["dismissButtonElementReference", ""], [1, "modal-body"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-end", "mt-1"], [1, "col-md-8"], ["formControlName", "itemNumber", "type", "number", "min", "0", "step", ".01", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "itemDescription", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "amount", "type", "number", 1, "form-control", "form-control-sm", "w-100"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn", 3, "disabled"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn"]], template: function AddIncomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddIncomeComponent_Template_form_ngSubmit_6_listener() { return ctx.saveIncome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Add Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "button", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Item No. :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Item Description :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Amount :");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addIncomeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isSaving);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaW5jb21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 29698:
/*!************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/budget/all-budget/all-budget.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllBudgetComponent": () => (/* binding */ AllBudgetComponent)
/* harmony export */ });
/* harmony import */ var _new_budget_new_budget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../new-budget/new-budget.component */ 91395);
/* harmony import */ var _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_personal_src_app_services_modules_budget_api_budget_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/services/modules/budget-api/budget-api.service */ 61886);
/* harmony import */ var projects_personal_src_app_services_printing_budget_print_budget_print_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/personal/src/app/services/printing/budget-print/budget-print.service */ 61621);
/* harmony import */ var _module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 7005);










const _c0 = ["newBudgetComponentReference"];
const _c1 = ["connectionToastComponentReference"];
function AllBudgetComponent_i_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllBudgetComponent_i_15_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.sortTable("budget_name", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllBudgetComponent_i_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllBudgetComponent_i_16_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.sortTable("budget_name", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllBudgetComponent_i_17_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllBudgetComponent_i_17_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.sortTable("budget_name", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllBudgetComponent_i_20_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllBudgetComponent_i_20_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.sortTable("budget_type", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllBudgetComponent_i_21_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllBudgetComponent_i_21_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.sortTable("budget_type", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllBudgetComponent_i_22_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllBudgetComponent_i_22_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.sortTable("budget_type", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllBudgetComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dblclick", function AllBudgetComponent_tr_24_Template_tr_dblclick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const data_r23 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r24.viewBudget(data_r23 == null ? null : data_r23.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r23 == null ? null : data_r23.data().budget_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r23 == null ? null : data_r23.data().budget_type);
} }
function AllBudgetComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllBudgetComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class AllBudgetComponent {
    constructor(router, budgetApi, budgetPrint) {
        this.router = router;
        this.budgetApi = budgetApi;
        this.budgetPrint = budgetPrint;
        this.navHeading = [
            { text: "All Budgets", url: "/home/budget/all-budget" },
        ];
        this.budgetGridData = [];
        this.isFetchingGridData = false;
        this.isDataAvailable = true;
        this.firstInResponse = [];
        this.lastInResponse = [];
        this.prevStartAt = [];
        this.nextStartAfter = [];
        this.pageNumber = 0;
        this.disableNext = true;
        this.disablePrev = true;
        this.sortParams = {
            field: "created_at",
            direction: "desc"
        };
    }
    ngOnInit() {
        this.getUserBudget();
    }
    getUserBudget() {
        this.isFetchingGridData = true;
        this.budgetApi.getUserBudget(this.sortParams, 20)
            .then((res) => {
            console.log(res);
            this.budgetGridData = res.docs;
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
        this.budgetApi.getUserBudgetNext(this.sortParams, 20, this.nextStartAfter)
            .then((res) => {
            console.log(res);
            this.budgetGridData = res.docs;
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
        this.budgetApi.getUserBudgetPrev(this.sortParams, 20, this.prevStartAt)
            .then((res) => {
            console.log(res);
            this.budgetGridData = res.docs;
            this.isFetchingGridData = false;
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
        this.getUserBudget();
    }
    viewBudget(budgetId) {
        console.log(budgetId);
        sessionStorage.setItem("personal_budget_id", budgetId);
        this.router.navigateByUrl("/home/budget/view-budget");
    }
    onPrint() {
        console.log("lets start printing...");
        this.budgetPrint.printAllBudget();
    }
}
AllBudgetComponent.ɵfac = function AllBudgetComponent_Factory(t) { return new (t || AllBudgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_personal_src_app_services_modules_budget_api_budget_api_service__WEBPACK_IMPORTED_MODULE_2__.BudgetApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_personal_src_app_services_printing_budget_print_budget_print_service__WEBPACK_IMPORTED_MODULE_3__.BudgetPrintService)); };
AllBudgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AllBudgetComponent, selectors: [["app-all-budget"]], viewQuery: function AllBudgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5, _new_budget_new_budget_component__WEBPACK_IMPORTED_MODULE_0__.NewBudgetComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.newBudget = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 45, vars: 15, consts: [[3, "headings", "showPrint", "print"], [1, "container"], [1, "row"], [1, "col-md-7"], [1, "row", "mb-3"], [1, "col-md-12"], [1, "btn", "btn-secondary", "page-add-btn", 3, "click"], [1, "btn", "btn-light", "border", "float-end", "page-refresh-btn", 3, "disabled", "click"], [1, "bi", "bi-arrow-clockwise"], [1, "table", "table-bordered", "table-sm", "w-100", "page-table"], [1, "bg-light"], ["width", "60%"], ["class", "bi bi-filter float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-down float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-up float-end list-pointer", 3, "click", 4, "ngIf"], ["width", "40%"], ["class", "table-pointer", 3, "dblclick", 4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["colspan", "2"], ["aria-label", "Page navigation", 1, "nav-light", "float-end"], [1, "pagination", "pagination-sm", "mb-0", "justify-content-end"], [1, "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-left-fill"], [1, "page-item"], ["href", "#", "aria-label", "Current", 1, "page-link", 3, "click"], ["href", "#", "aria-label", "Last", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-right-fill"], ["newBudgetComponentReference", ""], ["connectionToastComponentReference", ""], [1, "bi", "bi-filter", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-down", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-up", "float-end", "list-pointer", 3, "click"], [1, "table-pointer", 3, "dblclick"], [1, "text-center"], ["role", "status", 1, "spinner-grow", "m-4"], [1, "visually-hidden"], [1, "m-4"]], template: function AllBudgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("print", function AllBudgetComponent_Template_app_module_topnav_print_0_listener() { return ctx.onPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllBudgetComponent_Template_button_click_6_listener() { return ctx.newBudget.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "New Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllBudgetComponent_Template_button_click_8_listener() { return ctx.getUserBudget(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Budget Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AllBudgetComponent_i_15_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AllBudgetComponent_i_16_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, AllBudgetComponent_i_17_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Budget Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AllBudgetComponent_i_20_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AllBudgetComponent_i_21_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AllBudgetComponent_i_22_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AllBudgetComponent_tr_24_Template, 5, 2, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AllBudgetComponent_tr_25_Template, 5, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, AllBudgetComponent_tr_26_Template, 4, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "nav", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllBudgetComponent_Template_a_click_33_listener($event) { return ctx.previousPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllBudgetComponent_Template_a_click_36_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllBudgetComponent_Template_a_click_39_listener($event) { return ctx.nextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "app-new-budget", null, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "app-connection-toast", null, 29);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("headings", ctx.navHeading)("showPrint", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "budget_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "budget_name" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "budget_name" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "budget_type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "budget_type" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "budget_type" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.budgetGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isDataAvailable && !ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.disablePrev ? "disabled" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.pageNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.disableNext ? "disabled" : "");
    } }, directives: [_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_4__.ModuleTopnavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _new_budget_new_budget_component__WEBPACK_IMPORTED_MODULE_0__.NewBudgetComponent, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtYnVkZ2V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 31446:
/*!******************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/budget/budget-tables/budget-tables.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetTablesComponent": () => (/* binding */ BudgetTablesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _add_income_add_income_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-income/add-income.component */ 40701);
/* harmony import */ var _edit_income_edit_income_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-income/edit-income.component */ 50027);
/* harmony import */ var _add_expenditure_add_expenditure_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-expenditure/add-expenditure.component */ 36647);
/* harmony import */ var _edit_expenditure_edit_expenditure_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-expenditure/edit-expenditure.component */ 77875);
/* harmony import */ var _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../module-utilities/delete-modal/delete-modal.component */ 88622);
/* harmony import */ var projects_personal_src_app_services_modules_budget_api_budget_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/personal/src/app/services/modules/budget-api/budget-api.service */ 61886);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 7005);
















const _c0 = ["addIncomeComponentReference"];
const _c1 = ["editIncomeComponentReference"];
const _c2 = ["addExpenditureComponentReference"];
const _c3 = ["editExpenditureComponentReference"];
const _c4 = ["connectionToastComponentReference"];
const _c5 = ["deleteModalComponentReference"];
function BudgetTablesComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BudgetTablesComponent_tr_21_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const data_r10 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r12.openEditIncome(data_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BudgetTablesComponent_tr_21_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); const data_r10 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r14.confirmDelete("Income", data_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r10 == null ? null : data_r10.data().item_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r10 == null ? null : data_r10.data().item_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r10 == null ? null : data_r10.data().amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r0.isIncomeDeleting);
} }
function BudgetTablesComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function BudgetTablesComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BudgetTablesComponent_tr_44_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const data_r15 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r17.openEditExpenditure(data_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BudgetTablesComponent_tr_44_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const data_r15 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r19.confirmDelete("Expenditure", data_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r15 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r15 == null ? null : data_r15.data().item_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r15 == null ? null : data_r15.data().item_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r15 == null ? null : data_r15.data().amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r2.isExpenditureDeleting);
} }
function BudgetTablesComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class BudgetTablesComponent {
    constructor(budgetApi) {
        this.budgetApi = budgetApi;
        this.ioeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.incomeGridData = [];
        this.expenditureGridData = [];
        this.isFetchingIncomeGridData = false;
        this.isFetchingExpenditureGridData = false;
        this.isIncomeDeleting = false;
        this.isExpenditureDeleting = false;
        this.totalIncome = 0;
        this.totalExpenditure = 0;
        this.deleteType = "";
        this.deleteId = "";
        this.sortParams = {
            field: "created_at",
            direction: "desc"
        };
    }
    ngOnInit() {
        this.getBudgetIncome();
        this.getBudgetExpenditure();
    }
    calculateIoe() {
        let ioe = this.totalIncome - this.totalExpenditure;
        this.ioeEvent.emit(ioe);
        console.log(ioe);
    }
    // income
    calculateTotalIncome() {
        this.totalIncome = 0;
        for (let item of this.incomeGridData) {
            this.totalIncome += item.data().amount;
        }
        console.log(this.totalIncome);
        this.calculateIoe();
    }
    getBudgetIncome() {
        this.isFetchingIncomeGridData = true;
        this.budgetApi.getBudgetIncome()
            .then((res) => {
            console.log(res);
            this.incomeGridData = res.docs;
            this.isFetchingIncomeGridData = false;
            this.calculateTotalIncome();
        }, (err) => {
            console.log(err);
            this.isFetchingIncomeGridData = false;
            this.connectionToast.openToast();
        });
    }
    createIncome(data) {
        console.log(data);
        this.addIncome.isSaving = true;
        this.budgetApi.createIncome(data)
            .then((res) => {
            console.log(res);
            this.addIncome.isSaving = false;
            if (res.id) {
                this.addIncome.dismissButton.nativeElement.click();
                this.getBudgetIncome();
                this.addIncome.resetForm();
            }
        }, (err) => {
            console.log(err);
            this.addIncome.isSaving = false;
            this.connectionToast.openToast();
        });
    }
    updateIncome(income) {
        console.log(income);
        this.editIncome.isSaving = true;
        this.budgetApi.updateIncome(income.id, income.data)
            .then((res) => {
            console.log(res);
            this.editIncome.dismissButton.nativeElement.click();
            this.editIncome.isSaving = false;
            this.getBudgetIncome();
        }, (err) => {
            console.log(err);
            this.editIncome.isSaving = false;
            this.connectionToast.openToast();
        });
    }
    deleteIncome(id) {
        console.log(id);
        this.isIncomeDeleting = true;
        this.budgetApi.deleteIncome(id)
            .then((res) => {
            console.log(res);
            this.isIncomeDeleting = false;
            this.getBudgetIncome();
        }, (err) => {
            console.log(err);
            this.isIncomeDeleting = false;
            this.connectionToast.openToast();
        });
    }
    openEditIncome(data) {
        console.log(data);
        this.editIncome.openModal(data);
    }
    // expenditure
    calculateTotalExpenditure() {
        this.totalExpenditure = 0;
        for (let item of this.expenditureGridData) {
            this.totalExpenditure += item.data().amount;
        }
        console.log(this.totalExpenditure);
        this.calculateIoe();
    }
    getBudgetExpenditure() {
        this.isFetchingExpenditureGridData = true;
        this.budgetApi.getBudgetExpenditure()
            .then((res) => {
            console.log(res);
            this.expenditureGridData = res.docs;
            this.isFetchingExpenditureGridData = false;
            this.calculateTotalExpenditure();
        }, (err) => {
            console.log(err);
            this.isFetchingExpenditureGridData = false;
            this.connectionToast.openToast();
        });
    }
    createExpenditure(data) {
        console.log(data);
        this.addExpenditure.isSaving = true;
        this.budgetApi.createExpenditure(data)
            .then((res) => {
            console.log(res);
            this.addExpenditure.isSaving = false;
            if (res.id) {
                this.addExpenditure.dismissButton.nativeElement.click();
                this.getBudgetExpenditure();
                this.addExpenditure.resetForm();
            }
        }, (err) => {
            console.log(err);
            this.addExpenditure.isSaving = false;
            this.connectionToast.openToast();
        });
    }
    updateExpenditure(expenditure) {
        console.log(expenditure);
        this.editExpenditure.isSaving = true;
        this.budgetApi.updateExpenditure(expenditure.id, expenditure.data)
            .then((res) => {
            console.log(res);
            this.editExpenditure.dismissButton.nativeElement.click();
            this.editExpenditure.isSaving = false;
            this.getBudgetExpenditure();
        }, (err) => {
            console.log(err);
            this.editExpenditure.isSaving = false;
            this.connectionToast.openToast();
        });
    }
    deleteExpenditure(id) {
        console.log(id);
        this.isExpenditureDeleting = true;
        this.budgetApi.deleteExpenditure(id)
            .then((res) => {
            console.log(res);
            this.isExpenditureDeleting = false;
            this.getBudgetExpenditure();
        }, (err) => {
            console.log(err);
            this.isExpenditureDeleting = false;
            this.connectionToast.openToast();
        });
    }
    openEditExpenditure(data) {
        console.log(data);
        this.editExpenditure.openModal(data);
    }
    // deletions
    // open confirm delete modal
    confirmDelete(type, id) {
        console.log(type);
        this.deleteType = type;
        this.deleteId = id;
        this.deleteModal.openModal();
    }
    // delete income or expenditure
    deleteItem() {
        if (this.deleteType == "Income")
            this.deleteIncome(this.deleteId);
        else if (this.deleteType == "Expenditure")
            this.deleteExpenditure(this.deleteId);
    }
}
BudgetTablesComponent.ɵfac = function BudgetTablesComponent_Factory(t) { return new (t || BudgetTablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](projects_personal_src_app_services_modules_budget_api_budget_api_service__WEBPACK_IMPORTED_MODULE_6__.BudgetApiService)); };
BudgetTablesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: BudgetTablesComponent, selectors: [["app-budget-tables"]], viewQuery: function BudgetTablesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5, _add_income_add_income_component__WEBPACK_IMPORTED_MODULE_0__.AddIncomeComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5, _edit_income_edit_income_component__WEBPACK_IMPORTED_MODULE_1__.EditIncomeComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 5, _add_expenditure_add_expenditure_component__WEBPACK_IMPORTED_MODULE_2__.AddExpenditureComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c3, 5, _edit_expenditure_edit_expenditure_component__WEBPACK_IMPORTED_MODULE_3__.EditExpenditureComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c4, 5, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_4__.ConnectionToastComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c5, 5, _module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__.DeleteModalComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.addIncome = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.editIncome = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.addExpenditure = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.editExpenditure = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.deleteModal = _t.first);
    } }, outputs: { ioeEvent: "ioeEvent" }, decls: 63, vars: 6, consts: [[1, "row"], [1, "col-md-12"], [1, "top-divider"], [1, "bottom-divider"], [1, "col-md-6"], [1, "mb-3"], [1, "table", "table-bordered", "table-sm", "w-100", "page-table"], [1, "bg-light"], ["width", "10%"], ["width", "55%"], ["width", "20%"], ["width", "15%", 1, "p-0"], [1, "btn", "btn-secondary", "btn-sm", "w-100", 3, "click"], [1, "bi", "bi-plus"], [4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["colspan", "2"], [3, "saveIncomeEvent"], ["addIncomeComponentReference", ""], ["editIncomeComponentReference", ""], [3, "saveExpenditureEvent"], ["addExpenditureComponentReference", ""], ["editExpenditureComponentReference", ""], ["connectionToastComponentReference", ""], [3, "confirmEvent"], ["deleteModalComponentReference", ""], [1, "p-0"], [1, "btn", "btn-sm", "border", "w-50", 3, "click"], [1, "bi", "bi-pen"], [1, "btn", "btn-sm", "border", "w-50", 3, "disabled", "click"], [1, "bi", "bi-trash"], [1, "text-center"], ["colspan", "4"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm", "m-2"], [1, "visually-hidden"]], template: function BudgetTablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BudgetTablesComponent_Template_button_click_18_listener() { return ctx.addIncome.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, BudgetTablesComponent_tr_21_Template, 12, 4, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, BudgetTablesComponent_tr_22_Template, 5, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Expenditure");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BudgetTablesComponent_Template_button_click_41_listener() { return ctx.addExpenditure.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, BudgetTablesComponent_tr_44_Template, 12, 4, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, BudgetTablesComponent_tr_45_Template, 5, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "app-add-income", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("saveIncomeEvent", function BudgetTablesComponent_Template_app_add_income_saveIncomeEvent_51_listener($event) { return ctx.createIncome($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "app-edit-income", 17, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("saveIncomeEvent", function BudgetTablesComponent_Template_app_edit_income_saveIncomeEvent_53_listener($event) { return ctx.updateIncome($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "app-add-expenditure", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("saveExpenditureEvent", function BudgetTablesComponent_Template_app_add_expenditure_saveExpenditureEvent_55_listener($event) { return ctx.createExpenditure($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "app-edit-expenditure", 20, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("saveExpenditureEvent", function BudgetTablesComponent_Template_app_edit_expenditure_saveExpenditureEvent_57_listener($event) { return ctx.updateExpenditure($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "app-connection-toast", null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "app-delete-modal", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("confirmEvent", function BudgetTablesComponent_Template_app_delete_modal_confirmEvent_61_listener() { return ctx.deleteItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.incomeGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isFetchingIncomeGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.totalIncome);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.expenditureGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isFetchingExpenditureGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.totalExpenditure);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _add_income_add_income_component__WEBPACK_IMPORTED_MODULE_0__.AddIncomeComponent, _edit_income_edit_income_component__WEBPACK_IMPORTED_MODULE_1__.EditIncomeComponent, _add_expenditure_add_expenditure_component__WEBPACK_IMPORTED_MODULE_2__.AddExpenditureComponent, _edit_expenditure_edit_expenditure_component__WEBPACK_IMPORTED_MODULE_3__.EditExpenditureComponent, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_4__.ConnectionToastComponent, _module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__.DeleteModalComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWRnZXQtdGFibGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 69076:
/*!******************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/budget/budget.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetModule": () => (/* binding */ BudgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-charts */ 34459);
/* harmony import */ var _module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 13398);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ 3056);
/* harmony import */ var _all_budget_all_budget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-budget/all-budget.component */ 29698);
/* harmony import */ var _new_budget_new_budget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-budget/new-budget.component */ 91395);
/* harmony import */ var _view_budget_view_budget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-budget/view-budget.component */ 37176);
/* harmony import */ var _budget_tables_budget_tables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./budget-tables/budget-tables.component */ 31446);
/* harmony import */ var _add_income_add_income_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-income/add-income.component */ 40701);
/* harmony import */ var _add_expenditure_add_expenditure_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-expenditure/add-expenditure.component */ 36647);
/* harmony import */ var _edit_income_edit_income_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-income/edit-income.component */ 50027);
/* harmony import */ var _edit_expenditure_edit_expenditure_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-expenditure/edit-expenditure.component */ 77875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1858);
















class BudgetModule {
}
BudgetModule.ɵfac = function BudgetModule_Factory(t) { return new (t || BudgetModule)(); };
BudgetModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: BudgetModule });
BudgetModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_15__.ChartsModule,
            _module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](BudgetModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__.SettingsComponent,
        _all_budget_all_budget_component__WEBPACK_IMPORTED_MODULE_3__.AllBudgetComponent,
        _new_budget_new_budget_component__WEBPACK_IMPORTED_MODULE_4__.NewBudgetComponent,
        _view_budget_view_budget_component__WEBPACK_IMPORTED_MODULE_5__.ViewBudgetComponent,
        _budget_tables_budget_tables_component__WEBPACK_IMPORTED_MODULE_6__.BudgetTablesComponent,
        _add_income_add_income_component__WEBPACK_IMPORTED_MODULE_7__.AddIncomeComponent,
        _add_expenditure_add_expenditure_component__WEBPACK_IMPORTED_MODULE_8__.AddExpenditureComponent,
        _edit_income_edit_income_component__WEBPACK_IMPORTED_MODULE_9__.EditIncomeComponent,
        _edit_expenditure_edit_expenditure_component__WEBPACK_IMPORTED_MODULE_10__.EditExpenditureComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_15__.ChartsModule,
        _module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule] }); })();


/***/ }),

/***/ 13398:
/*!**********************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/budget/dashboard/dashboard.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/moment */ 76246);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_services_modules_budget_api_budget_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/services/modules/budget-api/budget-api.service */ 61886);
/* harmony import */ var _module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ 34459);







const _c0 = ["connectionToastComponentReference"];
const _c1 = function () { return { responsive: true }; };
class DashboardComponent {
    constructor(budgetApi) {
        this.budgetApi = budgetApi;
        this.navHeading = [
            { text: "Dashboard", url: "/home/budget/dashboard" },
        ];
        this.monthBudgetCount = 0;
        this.weekIncomeCount = 0;
        this.weekExpenditureCount = 0;
        this.weekIncomeData = [];
        this.weekExpenditureData = [];
        this.ieBarChartData = [{ data: [0], label: 'Income' }, { data: [0], label: 'Expendture' }];
        this.ieBarChartLabels = [""];
        this.iePieChartLabels = ['Income', 'Expenditure'];
        this.iePieChartData = [0, 0];
        this.chartOptions = {};
        this.today = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()();
    }
    ngOnInit() {
        this.initChart();
        this.getMonthBudget();
        this.getWeekIncome();
        this.getWeekExpenditure();
    }
    initChart() {
        this.chartOptions = {
            responsive: true,
            scales: {
                yAxes: [{
                        min: 0,
                        ticks: {
                            stepSize: 1,
                            beginAtZero: true,
                        }
                    }]
            }
        };
    }
    getMonthBudget() {
        this.budgetApi.getMonthBudget(moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(this.today).add(-7, 'days').toDate(), this.today.toDate())
            .then(res => {
            console.log(res);
            this.monthBudgetCount = res.docs.length;
        }, err => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    getWeekIncome() {
        this.budgetApi.getWeekIncome(moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(this.today).add(-7, 'days').toDate(), this.today.toDate())
            .then(res => {
            console.log(res);
            this.weekIncomeData = res.docs;
            this.weekIncomeCount = res.docs.length;
            this.iePieChartData[0] = res.docs.length;
        }, err => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    getWeekExpenditure() {
        this.budgetApi.getWeekExpenditure(moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(this.today).add(-1, 'months').toDate(), this.today.toDate())
            .then(res => {
            console.log(res);
            this.weekExpenditureData = res.docs;
            this.weekExpenditureCount = res.docs.length;
            this.iePieChartData[1] = res.docs.length;
        }, err => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    setIEBarChartLabels(data) {
        this.ieBarChartLabels = [];
        for (let i = 7; i > 0; i--) {
            var d = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(this.today).add(-i, 'days');
            this.ieBarChartLabels.push(d.toDate().toISOString().slice(0, 10));
        }
        console.log(this.ieBarChartLabels);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_personal_src_app_services_modules_budget_api_budget_api_service__WEBPACK_IMPORTED_MODULE_2__.BudgetApiService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 48, vars: 15, consts: [[3, "headings"], [1, "container"], [1, "row"], [1, "col-md-3", "mb-4"], [1, "card", "border-left-secondary", "shadow", "h-100", "py-2"], [1, "card-body"], [1, "row", "no-gutters", "align-items-center"], [1, "col", "mr-2"], [1, "text-xs", "font-weight-bold", "text-uppercase", "mb-1"], [1, "h5", "mb-0", "font-weight-bold", "text-gray-800"], [1, "col-lg-8"], [1, "card", "shadow", "mb-4"], [1, "card-header", "py-3", "d-flex", "flex-row", "align-items-center", "justify-content-between"], [1, "m-0", "font-weight-bold"], [1, "chart-area"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType"], [1, "col-md-4"], ["baseChart", "", 3, "data", "labels", "options", "legend", "chartType"], ["connectionToastComponentReference", ""]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Budgets this Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Income Items this Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Expenditure Items this Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Income - Expenditure by Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "canvas", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Income / Expenditure");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "canvas", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "app-connection-toast", null, 18);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("headings", ctx.navHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.monthBudgetCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.weekIncomeCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.weekExpenditureCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datasets", ctx.ieBarChartData)("labels", ctx.ieBarChartLabels)("options", ctx.chartOptions)("legend", true)("chartType", "line");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.iePieChartData)("labels", ctx.iePieChartLabels)("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c1))("legend", true)("chartType", "pie");
    } }, directives: [_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__.ModuleTopnavComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.BaseChartDirective, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 77875:
/*!************************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/budget/edit-expenditure/edit-expenditure.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditExpenditureComponent": () => (/* binding */ EditExpenditureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 68465);




const _c0 = ["editButtonElementReference"];
const _c1 = ["dismissButtonElementReference"];
class EditExpenditureComponent {
    constructor() {
        this.saveExpenditureEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.editExpenditureForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
        this.isSaving = false;
    }
    ngOnInit() {
        this.initeditExpenditureForm();
    }
    openModal(expenditure) {
        this.expenditureFormData = expenditure;
        this.editExpenditureForm.controls.itemNumber.setValue(this.expenditureFormData.data().item_number);
        this.editExpenditureForm.controls.itemDescription.setValue(this.expenditureFormData.data().item_description);
        this.editExpenditureForm.controls.amount.setValue(this.expenditureFormData.data().amount);
        this.editButton.nativeElement.click();
    }
    initeditExpenditureForm() {
        this.editExpenditureForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            itemNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
            itemDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('')
        });
    }
    saveExpenditure() {
        let data = {
            item_number: this.editExpenditureForm.controls.itemNumber.value,
            item_description: this.editExpenditureForm.controls.itemDescription.value,
            amount: this.editExpenditureForm.controls.amount.value,
            budget: {
                id: sessionStorage.getItem('personal_budget_id'),
                data: this.budgetData
            }
        };
        let expenditure = {
            id: this.expenditureFormData.id,
            data: data
        };
        this.saveExpenditureEvent.emit(expenditure);
    }
}
EditExpenditureComponent.ɵfac = function EditExpenditureComponent_Factory(t) { return new (t || EditExpenditureComponent)(); };
EditExpenditureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditExpenditureComponent, selectors: [["app-edit-expenditure"]], viewQuery: function EditExpenditureComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dismissButton = _t.first);
    } }, outputs: { saveExpenditureEvent: "saveExpenditureEvent" }, decls: 36, vars: 3, consts: [["data-bs-toggle", "modal", "data-bs-target", "#editExpenditureModal", 3, "hidden"], ["editButtonElementReference", ""], ["id", "editExpenditureModal", "tabindex", "-1", "aria-labelledby", "editExpenditureModalLabel", "aria-hidden", "true", 1, "modal", "fade", "form-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "modal-header", "bg-light"], ["id", "editExpenditureModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["dismissButtonElementReference", ""], [1, "modal-body"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-end", "mt-1"], [1, "col-md-8"], ["formControlName", "itemNumber", "type", "number", "min", "0", "step", ".01", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "itemDescription", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "amount", "type", "number", 1, "form-control", "form-control-sm", "w-100"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn", 3, "disabled"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn"]], template: function EditExpenditureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditExpenditureComponent_Template_form_ngSubmit_6_listener() { return ctx.saveExpenditure(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit Expenditure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "button", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Item No. :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Item Description :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Amount :");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editExpenditureForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isSaving);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWV4cGVuZGl0dXJlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 50027:
/*!**************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/budget/edit-income/edit-income.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditIncomeComponent": () => (/* binding */ EditIncomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 68465);




const _c0 = ["editButtonElementReference"];
const _c1 = ["dismissButtonElementReference"];
class EditIncomeComponent {
    constructor() {
        this.saveIncomeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.editIncomeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
        this.isSaving = false;
    }
    ngOnInit() {
        this.initeditIncomeForm();
    }
    openModal(income) {
        this.incomeFormData = income;
        this.editIncomeForm.controls.itemNumber.setValue(this.incomeFormData.data().item_number);
        this.editIncomeForm.controls.itemDescription.setValue(this.incomeFormData.data().item_description);
        this.editIncomeForm.controls.amount.setValue(this.incomeFormData.data().amount);
        this.editButton.nativeElement.click();
    }
    initeditIncomeForm() {
        this.editIncomeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            itemNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
            itemDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('')
        });
    }
    saveIncome() {
        let data = {
            item_number: this.editIncomeForm.controls.itemNumber.value,
            item_description: this.editIncomeForm.controls.itemDescription.value,
            amount: this.editIncomeForm.controls.amount.value,
            budget: {
                id: sessionStorage.getItem('personal_budget_id'),
                data: this.budgetData
            }
        };
        let income = {
            id: this.incomeFormData.id,
            data: data
        };
        this.saveIncomeEvent.emit(income);
    }
}
EditIncomeComponent.ɵfac = function EditIncomeComponent_Factory(t) { return new (t || EditIncomeComponent)(); };
EditIncomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditIncomeComponent, selectors: [["app-edit-income"]], viewQuery: function EditIncomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dismissButton = _t.first);
    } }, outputs: { saveIncomeEvent: "saveIncomeEvent" }, decls: 36, vars: 3, consts: [["data-bs-toggle", "modal", "data-bs-target", "#editIncomeModal", 3, "hidden"], ["editButtonElementReference", ""], ["id", "editIncomeModal", "tabindex", "-1", "aria-labelledby", "editIncomeModalLabel", "aria-hidden", "true", 1, "modal", "fade", "form-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "modal-header", "bg-light"], ["id", "editIncomeModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["dismissButtonElementReference", ""], [1, "modal-body"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-end", "mt-1"], [1, "col-md-8"], ["formControlName", "itemNumber", "type", "number", "min", "0", "step", ".01", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "itemDescription", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "amount", "type", "number", 1, "form-control", "form-control-sm", "w-100"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn", 3, "disabled"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn"]], template: function EditIncomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditIncomeComponent_Template_form_ngSubmit_6_listener() { return ctx.saveIncome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "button", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Item No. :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Item Description :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Amount :");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editIncomeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isSaving);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWluY29tZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 91395:
/*!************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/budget/new-budget/new-budget.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewBudgetComponent": () => (/* binding */ NewBudgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 16448);
/* harmony import */ var _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_personal_src_app_services_modules_budget_api_budget_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/services/modules/budget-api/budget-api.service */ 61886);









const _c0 = ["newButtonElementReference"];
const _c1 = ["dismissButtonElementReference"];
const _c2 = ["connectionToastComponentReference"];
class NewBudgetComponent {
    constructor(router, budgetApi) {
        this.router = router;
        this.budgetApi = budgetApi;
        this.budgetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({});
        this.isSavingBudget = false;
    }
    ngOnInit() {
        this.initBudgetForm();
    }
    openModal() {
        this.budgetForm.controls.budgetType.setValue("Monthly");
        this.newButton.nativeElement.click();
    }
    initBudgetForm() {
        this.budgetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            budgetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            budgetType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
        });
    }
    createBudget() {
        this.isSavingBudget = true;
        let data = {
            created_at: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
            user: localStorage.getItem('personal_id'),
            budget_name: this.budgetForm.controls.budgetName.value,
            budget_type: this.budgetForm.controls.budgetType.value
        };
        console.log(data);
        this.budgetApi.createBudget(data)
            .then((res) => {
            console.log(res);
            if (res.id) {
                sessionStorage.setItem('personal_budget_id', res.id);
                this.router.navigateByUrl('/home/budget/view-budget');
                this.dismissButton.nativeElement.click();
            }
            this.isSavingBudget = false;
        }, (err) => {
            console.log(err);
            this.isSavingBudget = false;
            this.connectionToast.openToast();
        });
    }
}
NewBudgetComponent.ɵfac = function NewBudgetComponent_Factory(t) { return new (t || NewBudgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_personal_src_app_services_modules_budget_api_budget_api_service__WEBPACK_IMPORTED_MODULE_2__.BudgetApiService)); };
NewBudgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NewBudgetComponent, selectors: [["app-new-budget"]], viewQuery: function NewBudgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.newButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dismissButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 40, vars: 3, consts: [["data-bs-toggle", "modal", "data-bs-target", "#newBudgetModal", 3, "hidden"], ["newButtonElementReference", ""], ["id", "newBudgetModal", "tabindex", "-1", "aria-labelledby", "newBudgetModalLabel", "aria-hidden", "true", 1, "modal", "fade", "form-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "modal-header", "bg-light"], ["id", "newBudgetModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["dismissButtonElementReference", ""], [1, "modal-body"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-end", "mt-1"], [1, "col-md-8"], ["formControlName", "budgetName", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "budgetType", 1, "form-control", "form-control-sm", "w-100"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn", 3, "disabled"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn"], ["connectionToastComponentReference", ""]], template: function NewBudgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function NewBudgetComponent_Template_form_ngSubmit_6_listener() { return ctx.createBudget(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Add New Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "button", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Budget Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Budget Type :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Quarterly");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "app-connection-toast", null, 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.budgetForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isSavingBudget);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctYnVkZ2V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3056:
/*!********************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/budget/settings/settings.component.ts ***!
  \********************************************************************************************/
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

/***/ 37176:
/*!**************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/budget/view-budget/view-budget.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewBudgetComponent": () => (/* binding */ ViewBudgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _budget_tables_budget_tables_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../budget-tables/budget-tables.component */ 31446);
/* harmony import */ var _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../module-utilities/delete-modal/delete-modal.component */ 88622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_personal_src_app_services_modules_budget_api_budget_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/personal/src/app/services/modules/budget-api/budget-api.service */ 61886);
/* harmony import */ var projects_personal_src_app_services_printing_budget_print_budget_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/personal/src/app/services/printing/budget-print/budget-print.service */ 61621);
/* harmony import */ var _module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 7005);














const _c0 = ["budgetTablesComponentReference"];
const _c1 = ["connectionToastComponentReference"];
const _c2 = ["deleteModalComponentReference"];
function ViewBudgetComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewBudgetComponent_div_28_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.confirmDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isBudgetDeleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isBudgetSaving);
} }
function ViewBudgetComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class ViewBudgetComponent {
    constructor(router, budgetApi, budgetPrint) {
        this.router = router;
        this.budgetApi = budgetApi;
        this.budgetPrint = budgetPrint;
        this.navHeading = [
            { text: "All Budgets", url: "/home/budget/all-budget" },
            { text: "View Budget", url: "/home/budget/view-budget" },
        ];
        this.budgetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({});
        this.ioe = 0;
        this.isBudgetLoading = false;
        this.isBudgetSaving = false;
        this.isBudgetDeleting = false;
    }
    ngOnInit() {
        this.initBudgetForm();
        this.getBudget();
    }
    initBudgetForm() {
        this.budgetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            budgetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            budgetType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('')
        });
    }
    getBudget() {
        this.isBudgetLoading = true;
        this.budgetApi.getBudget()
            .then((res) => {
            console.log(res);
            this.budgetFormData = res;
            this.budgetForm.controls.budgetName.setValue(this.budgetFormData.data().budget_name);
            this.budgetForm.controls.budgetType.setValue(this.budgetFormData.data().budget_type);
            this.budgetTables.addIncome.budgetData = this.budgetFormData.data();
            this.budgetTables.editIncome.budgetData = this.budgetFormData.data();
            this.budgetTables.addExpenditure.budgetData = this.budgetFormData.data();
            this.budgetTables.editExpenditure.budgetData = this.budgetFormData.data();
            this.isBudgetLoading = false;
        }, (err) => {
            console.log(err);
            this.isBudgetLoading = false;
            this.connectionToast.openToast();
        });
    }
    updateBudget() {
        let data = {
            budget_name: this.budgetForm.controls.budgetName.value,
            budget_type: this.budgetForm.controls.budgetType.value
        };
        console.log(data);
        this.isBudgetSaving = true;
        this.budgetApi.updateBudget(data)
            .then((res) => {
            console.log(res);
            this.isBudgetSaving = false;
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
            this.isBudgetSaving = false;
        });
    }
    confirmDelete() {
        this.deleteModal.openModal();
    }
    deleteBudget() {
        this.isBudgetDeleting = true;
        console.log('deleting...');
        this.budgetApi.deleteBudget()
            .then((res) => {
            console.log(res);
            this.router.navigateByUrl('/home/budget/all-budget');
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
            this.isBudgetDeleting = false;
        });
    }
    onPrint() {
        console.log("lets start printing...");
        this.budgetPrint.printViewBudget();
    }
}
ViewBudgetComponent.ɵfac = function ViewBudgetComponent_Factory(t) { return new (t || ViewBudgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](projects_personal_src_app_services_modules_budget_api_budget_api_service__WEBPACK_IMPORTED_MODULE_3__.BudgetApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](projects_personal_src_app_services_printing_budget_print_budget_print_service__WEBPACK_IMPORTED_MODULE_4__.BudgetPrintService)); };
ViewBudgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ViewBudgetComponent, selectors: [["app-view-budget"]], viewQuery: function ViewBudgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5, _budget_tables_budget_tables_component__WEBPACK_IMPORTED_MODULE_0__.BudgetTablesComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5, _module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_2__.DeleteModalComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.budgetTables = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.deleteModal = _t.first);
    } }, decls: 41, vars: 6, consts: [[3, "headings", "showPrint", "print"], [1, "container"], [1, "row", "page-form"], [1, "col-md-6"], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-end", "mt-1"], [1, "col-md-8"], ["formControlName", "budgetName", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "budgetType", 1, "form-control", "form-control-sm", "w-100"], ["class", "row", 4, "ngIf"], [1, "col-md-6", "text-center"], [1, "h1"], [3, "ioeEvent"], ["budgetTablesComponentReference", ""], ["connectionToastComponentReference", ""], [3, "confirmEvent"], ["deleteModalComponentReference", ""], [1, "row"], [1, "col-md-12"], ["type", "button", "routerLink", "/home/budget/all-budget", 1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn", 3, "disabled"], ["type", "button", 1, "btn", "btn-sm", "float-end", "ms-1", "btn-light", "page-form-btn"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm"], [1, "visually-hidden"]], template: function ViewBudgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("print", function ViewBudgetComponent_Template_app_module_topnav_print_0_listener() { return ctx.onPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ViewBudgetComponent_Template_form_ngSubmit_4_listener() { return ctx.updateBudget(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Budget Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Budget Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Budget Type :");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Quarterly");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ViewBudgetComponent_div_28_Template, 8, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, ViewBudgetComponent_div_29_Template, 6, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Income over Expenditure :");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "app-budget-tables", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ioeEvent", function ViewBudgetComponent_Template_app_budget_tables_ioeEvent_35_listener($event) { return ctx.ioe = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "app-connection-toast", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "app-delete-modal", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("confirmEvent", function ViewBudgetComponent_Template_app_delete_modal_confirmEvent_39_listener() { return ctx.deleteBudget(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("headings", ctx.navHeading)("showPrint", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.budgetForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isBudgetLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isBudgetLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("$ ", ctx.ioe, "");
    } }, directives: [_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_5__.ModuleTopnavComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _budget_tables_budget_tables_component__WEBPACK_IMPORTED_MODULE_0__.BudgetTablesComponent, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent, _module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_2__.DeleteModalComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWJ1ZGdldC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 83791:
/*!******************************************************************************!*\
  !*** ./projects/personal/src/app/guards/modules/budget/view-budget.guard.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewBudgetGuard": () => (/* binding */ ViewBudgetGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class ViewBudgetGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        if (!!sessionStorage.getItem('personal_budget_id')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/home/budget');
            return false;
        }
    }
}
ViewBudgetGuard.ɵfac = function ViewBudgetGuard_Factory(t) { return new (t || ViewBudgetGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
ViewBudgetGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewBudgetGuard, factory: ViewBudgetGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 38243:
/*!*******************************************************************************************!*\
  !*** ./projects/personal/src/app/pages/modules/budget-page/budget-page-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetPageRoutingModule": () => (/* binding */ BudgetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _budget_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget-page.component */ 60235);
/* harmony import */ var _components_modules_budget_all_budget_all_budget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/modules/budget/all-budget/all-budget.component */ 29698);
/* harmony import */ var _components_modules_budget_view_budget_view_budget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/modules/budget/view-budget/view-budget.component */ 37176);
/* harmony import */ var _components_modules_budget_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modules/budget/dashboard/dashboard.component */ 13398);
/* harmony import */ var _guards_modules_budget_view_budget_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../guards/modules/budget/view-budget.guard */ 83791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);








const routes = [
    {
        path: "",
        component: _budget_page_component__WEBPACK_IMPORTED_MODULE_0__.BudgetPageComponent,
        children: [
            { path: "", component: _components_modules_budget_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent },
            { path: "dashboard", component: _components_modules_budget_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent },
            { path: "all-budget", component: _components_modules_budget_all_budget_all_budget_component__WEBPACK_IMPORTED_MODULE_1__.AllBudgetComponent },
            { path: "view-budget", component: _components_modules_budget_view_budget_view_budget_component__WEBPACK_IMPORTED_MODULE_2__.ViewBudgetComponent, canActivate: [_guards_modules_budget_view_budget_guard__WEBPACK_IMPORTED_MODULE_4__.ViewBudgetGuard] },
        ]
    }
];
class BudgetPageRoutingModule {
}
BudgetPageRoutingModule.ɵfac = function BudgetPageRoutingModule_Factory(t) { return new (t || BudgetPageRoutingModule)(); };
BudgetPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BudgetPageRoutingModule });
BudgetPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BudgetPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 60235:
/*!**************************************************************************************!*\
  !*** ./projects/personal/src/app/pages/modules/budget-page/budget-page.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetPageComponent": () => (/* binding */ BudgetPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../application/src/app/components/main-navbar/main-navbar/main-navbar.component */ 28088);
/* harmony import */ var _components_module_utilities_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/module-utilities/module-sidenav/module-sidenav.component */ 7632);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 869);




class BudgetPageComponent {
    constructor() {
        this.navLinks = [
            { text: "All Budgets", url: "/home/budget/all-budget", icon: "bi bi-list-ul" }
        ];
    }
    ngOnInit() {
    }
}
BudgetPageComponent.ɵfac = function BudgetPageComponent_Factory(t) { return new (t || BudgetPageComponent)(); };
BudgetPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BudgetPageComponent, selectors: [["app-budget-page"]], decls: 6, vars: 4, consts: [[3, "navBrand", "source"], ["id", "wrapper"], [3, "navLinks", "heading"], ["id", "content-wrapper", 1, "d-flex", "flex-column"], ["id", "content"]], template: function BudgetPageComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navBrand", "nR Personal")("source", "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navLinks", ctx.navLinks)("heading", "Budget");
    } }, directives: [_application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__.MainNavbarComponent, _components_module_utilities_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.ModuleSidenavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWRnZXQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 56302:
/*!***********************************************************************************!*\
  !*** ./projects/personal/src/app/pages/modules/budget-page/budget-page.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetPageModule": () => (/* binding */ BudgetPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _budget_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget-page-routing.module */ 38243);
/* harmony import */ var projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/application/src/app/components/main-navbar/main-navbar.module */ 7264);
/* harmony import */ var _components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _components_modules_budget_budget_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modules/budget/budget.module */ 69076);
/* harmony import */ var _budget_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./budget-page.component */ 60235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);







class BudgetPageModule {
}
BudgetPageModule.ɵfac = function BudgetPageModule_Factory(t) { return new (t || BudgetPageModule)(); };
BudgetPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BudgetPageModule });
BudgetPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _budget_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.BudgetPageRoutingModule,
            projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
            _components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
            _components_modules_budget_budget_module__WEBPACK_IMPORTED_MODULE_3__.BudgetModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BudgetPageModule, { declarations: [_budget_page_component__WEBPACK_IMPORTED_MODULE_4__.BudgetPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _budget_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.BudgetPageRoutingModule,
        projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
        _components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
        _components_modules_budget_budget_module__WEBPACK_IMPORTED_MODULE_3__.BudgetModule] }); })();


/***/ }),

/***/ 61621:
/*!******************************************************************************************!*\
  !*** ./projects/personal/src/app/services/printing/budget-print/budget-print.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetPrintService": () => (/* binding */ BudgetPrintService)
/* harmony export */ });
/* harmony import */ var C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 11733);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_services_pdf_print_pdf_print_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/services/pdf-print/pdf-print.service */ 46424);
/* harmony import */ var projects_personal_src_app_services_modules_budget_api_budget_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/services/modules/budget-api/budget-api.service */ 61886);




class BudgetPrintService {
  constructor(pdfPrint, budgetApi) {
    this.pdfPrint = pdfPrint;
    this.budgetApi = budgetApi;
  } // all budget


  printAllBudget() {
    var _this = this;

    return (0,C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const budgetGridData = yield _this.budgetApi.getAllUserBudget();
      var body = [['Budget Name', 'Budget Type']];

      for (let data of budgetGridData.docs) {
        var row = [];
        let rowData = data.data();
        row.push(rowData.budget_name);
        row.push(rowData.budget_type);
        body.push(row);
      }

      let content = [{
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['60%', '40%'],
          body: body
        }
      }];

      _this.pdfPrint.openPdf(content);
    })();
  } // view budget


  printViewBudget() {
    var _this2 = this;

    return (0,C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const budgetFormPromise = _this2.budgetApi.getBudget();

      const incomeGridPromise = _this2.budgetApi.getBudgetIncome();

      const expenditureGridPromise = _this2.budgetApi.getBudgetExpenditure();

      const [budgetFormData, incomeGridData, expenditureGridData] = yield Promise.all([budgetFormPromise, incomeGridPromise, expenditureGridPromise]);
      let formData = budgetFormData.data(); // income

      var incomeBody = [['Item No.', 'Description', 'Amount']];

      for (let data of incomeGridData.docs) {
        var row = [];
        let rowData = data.data();
        row.push(rowData.item_number);
        row.push(rowData.item_description);
        row.push(rowData.amount);
        incomeBody.push(row);
      }

      let totalIncome = 0;

      for (let income of incomeGridData.docs) {
        let rowData = income.data();
        totalIncome += rowData.amount;
      }

      incomeBody.push(['', '', totalIncome.toString()]); // expenditure

      var expenditureBody = [['Item No.', 'Description', 'Amount']];

      for (let data of expenditureGridData.docs) {
        var row = [];
        let rowData = data.data();
        row.push(rowData.item_number);
        row.push(rowData.item_description);
        row.push(rowData.amount);
        expenditureBody.push(row);
      }

      let totalExpenditure = 0;

      for (let expenditure of expenditureGridData.docs) {
        let rowData = expenditure.data();
        totalExpenditure += rowData.amount;
      }

      expenditureBody.push(['', '', totalExpenditure.toString()]);
      let content = [{
        columns: [[{
          text: 'Budget Name: ' + formData.budget_name
        }, {
          text: 'Budget Type: ' + formData.budget_type
        }], [{
          text: 'Income over Expenditure',
          bold: true,
          alignment: 'center'
        }, {
          text: '$' + (totalIncome - totalExpenditure),
          bold: true,
          alignment: 'center'
        }]]
      }, {
        columns: [[{
          text: 'Income',
          bold: true,
          margin: [0, 20, 0, 10]
        }, {
          layout: 'lightHorizontalLines',
          table: {
            headerRows: 1,
            // widths: ['15%', '25%', '60%'],
            body: incomeBody
          }
        }], [{
          text: 'Expenditure',
          bold: true,
          margin: [0, 20, 0, 10]
        }, {
          layout: 'lightHorizontalLines',
          table: {
            headerRows: 1,
            // widths: ['15%', '25%', '60%'],
            body: expenditureBody
          }
        }]],
        columnGap: 20
      }];

      _this2.pdfPrint.openPdf(content);
    })();
  }

}

BudgetPrintService.ɵfac = function BudgetPrintService_Factory(t) {
  return new (t || BudgetPrintService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](projects_personal_src_app_services_pdf_print_pdf_print_service__WEBPACK_IMPORTED_MODULE_1__.PdfPrintService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](projects_personal_src_app_services_modules_budget_api_budget_api_service__WEBPACK_IMPORTED_MODULE_2__.BudgetApiService));
};

BudgetPrintService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: BudgetPrintService,
  factory: BudgetPrintService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=projects_personal_src_app_pages_modules_budget-page_budget-page_module_ts.js.map