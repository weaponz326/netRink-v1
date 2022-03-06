"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["projects_personal_src_app_pages_user-settings-page_user-settings-page_module_ts"],{

/***/ 80843:
/*!***************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/user-settings/change-email/change-email.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeEmailComponent": () => (/* binding */ ChangeEmailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);



class ChangeEmailComponent {
    constructor() {
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({});
        this.isEmailSending = false;
    }
    ngOnInit() {
        this.initEmailForm();
    }
    initEmailForm() {
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
        });
    }
}
ChangeEmailComponent.ɵfac = function ChangeEmailComponent_Factory(t) { return new (t || ChangeEmailComponent)(); };
ChangeEmailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChangeEmailComponent, selectors: [["app-change-email"]], decls: 23, vars: 2, consts: [[1, "row", "page-form"], [1, "col-md-12"], [1, "page-form", 3, "formGroup"], [1, "row", "mb-3"], [1, "row", "mb-2"], [1, "col-md-4"], [1, "mt-1"], [1, "col-md-8"], ["type", "email", "formControlName", "email", 1, "form-control", "form-control-sm", "w-100"], ["type", "password", "formControlName", "password", 1, "form-control", "form-control-sm", "w-100"], [1, "row", "mt-3"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", "float-end", "page-form-btn", 3, "disabled"]], template: function ChangeEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Change account email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "New Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Password :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.emailForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isEmailSending);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtZW1haWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 13331:
/*!*****************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/user-settings/enable-two-fa/enable-two-fa.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnableTwoFaComponent": () => (/* binding */ EnableTwoFaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);



class EnableTwoFaComponent {
    constructor() {
        this.tfaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({});
        this.isTfaSending = false;
        this.isTfaEnabled = false;
    }
    ngOnInit() {
        this.initTfaForm();
    }
    initTfaForm() {
        this.tfaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl({ value: "", disabled: true }),
        });
    }
    disablePhone(e) {
        console.log(e);
        if (e.target.checked) {
            this.tfaForm.controls.phone.enable();
            this.isTfaEnabled = true;
        }
        else {
            this.tfaForm.controls.phone.disable();
            this.isTfaEnabled = false;
        }
    }
}
EnableTwoFaComponent.ɵfac = function EnableTwoFaComponent_Factory(t) { return new (t || EnableTwoFaComponent)(); };
EnableTwoFaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EnableTwoFaComponent, selectors: [["app-enable-two-fa"]], decls: 23, vars: 2, consts: [[1, "row", "page-form"], [1, "col-md-12"], [1, "page-form", 3, "formGroup"], [1, "row", "mb-3"], [1, "row", "mb-2"], [1, "offset-md-4"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "flexSwitchCheckDefault", 1, "form-check-input", "mb-2", 3, "change"], ["for", "flexSwitchCheckDefault", 1, "form-check-label"], [1, "col-md-4"], [1, "mt-1"], [1, "col-md-8"], ["type", "password", "formControlName", "phone", 1, "form-control", "form-control-sm", "w-100"], [1, "row", "mt-3"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", "float-end", "page-form-btn", 3, "disabled"]], template: function EnableTwoFaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Enable 2 factor authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EnableTwoFaComponent_Template_input_change_10_listener($event) { return ctx.disablePhone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Enable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Phone No. :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.tfaForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isTfaSending || !ctx.isTfaEnabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName], styles: [".form-check-input[_ngcontent-%COMP%] {\n  margin-left: -20px;\n}\n\n.form-check-label[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuYWJsZS10d28tZmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJlbmFibGUtdHdvLWZhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2hlY2staW5wdXR7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1sYWJlbHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 37893:
/*!*******************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/user-settings/reset-password/reset-password.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);



class ResetPasswordComponent {
    constructor() {
        this.resetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({});
        this.isResetSending = false;
    }
    ngOnInit() {
        this.initResetForm();
    }
    initResetForm() {
        this.resetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            password1: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
        });
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(); };
ResetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 29, vars: 2, consts: [[1, "row", "page-form"], [1, "col-md-12"], [1, "page-form", 3, "formGroup"], [1, "row", "mb-3"], [1, "row", "mb-2"], [1, "col-md-4"], [1, "mt-1"], [1, "col-md-8"], ["type", "password", "formControlName", "oldPassword", 1, "form-control", "form-control-sm", "w-100"], ["type", "password", "formControlName", "password1", 1, "form-control", "form-control-sm", "w-100"], [1, "row", "mt-3"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", "float-end", "page-form-btn", 3, "disabled"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Reset password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Old Passowrd :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "New Password :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Confirm New Password :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.resetForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isResetSending);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 59480:
/*!************************************************************************************!*\
  !*** ./projects/personal/src/app/components/user-settings/user-settings.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSettingsModule": () => (/* binding */ UserSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _change_email_change_email_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-email/change-email.component */ 80843);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 37893);
/* harmony import */ var _enable_two_fa_enable_two_fa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enable-two-fa/enable-two-fa.component */ 13331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);








class UserSettingsModule {
}
UserSettingsModule.ɵfac = function UserSettingsModule_Factory(t) { return new (t || UserSettingsModule)(); };
UserSettingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UserSettingsModule });
UserSettingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserSettingsModule, { declarations: [_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_1__.ChangeEmailComponent,
        _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent,
        _enable_two_fa_enable_two_fa_component__WEBPACK_IMPORTED_MODULE_3__.EnableTwoFaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule], exports: [_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_1__.ChangeEmailComponent,
        _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent,
        _enable_two_fa_enable_two_fa_component__WEBPACK_IMPORTED_MODULE_3__.EnableTwoFaComponent] }); })();


/***/ }),

/***/ 52521:
/*!*************************************************************************************************!*\
  !*** ./projects/personal/src/app/pages/user-settings-page/user-settings-page-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSettingsPageRoutingModule": () => (/* binding */ UserSettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _user_settings_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-settings-page.component */ 5418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);




const routes = [
    { path: "", component: _user_settings_page_component__WEBPACK_IMPORTED_MODULE_0__.UserSettingsPageComponent },
];
class UserSettingsPageRoutingModule {
}
UserSettingsPageRoutingModule.ɵfac = function UserSettingsPageRoutingModule_Factory(t) { return new (t || UserSettingsPageRoutingModule)(); };
UserSettingsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserSettingsPageRoutingModule });
UserSettingsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserSettingsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5418:
/*!********************************************************************************************!*\
  !*** ./projects/personal/src/app/pages/user-settings-page/user-settings-page.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSettingsPageComponent": () => (/* binding */ UserSettingsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../application/src/app/components/main-navbar/main-navbar/main-navbar.component */ 28088);
/* harmony import */ var _components_user_settings_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/user-settings/change-email/change-email.component */ 80843);
/* harmony import */ var _components_user_settings_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/user-settings/reset-password/reset-password.component */ 37893);
/* harmony import */ var _components_user_settings_enable_two_fa_enable_two_fa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/user-settings/enable-two-fa/enable-two-fa.component */ 13331);





class UserSettingsPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserSettingsPageComponent.ɵfac = function UserSettingsPageComponent_Factory(t) { return new (t || UserSettingsPageComponent)(); };
UserSettingsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UserSettingsPageComponent, selectors: [["app-user-settings-page"]], decls: 9, vars: 2, consts: [[3, "navBrand", "source"], [1, "container", "mt-5"], [1, "row"], [1, "offset-md-2", "col-md-6"], [1, "my-4"]], template: function UserSettingsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-main-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-change-email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-reset-password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-enable-two-fa");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("navBrand", "nR Personal")("source", "Personal");
    } }, directives: [_application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__.MainNavbarComponent, _components_user_settings_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_1__.ChangeEmailComponent, _components_user_settings_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordComponent, _components_user_settings_enable_two_fa_enable_two_fa_component__WEBPACK_IMPORTED_MODULE_3__.EnableTwoFaComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXNldHRpbmdzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 35437:
/*!*****************************************************************************************!*\
  !*** ./projects/personal/src/app/pages/user-settings-page/user-settings-page.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSettingsPageModule": () => (/* binding */ UserSettingsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _user_settings_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-settings-page-routing.module */ 52521);
/* harmony import */ var projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/application/src/app/components/main-navbar/main-navbar.module */ 7264);
/* harmony import */ var _components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _components_user_settings_user_settings_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/user-settings/user-settings.module */ 59480);
/* harmony import */ var _user_settings_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-settings-page.component */ 5418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);







class UserSettingsPageModule {
}
UserSettingsPageModule.ɵfac = function UserSettingsPageModule_Factory(t) { return new (t || UserSettingsPageModule)(); };
UserSettingsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: UserSettingsPageModule });
UserSettingsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _user_settings_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserSettingsPageRoutingModule,
            projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
            _components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
            _components_user_settings_user_settings_module__WEBPACK_IMPORTED_MODULE_3__.UserSettingsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UserSettingsPageModule, { declarations: [_user_settings_page_component__WEBPACK_IMPORTED_MODULE_4__.UserSettingsPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _user_settings_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserSettingsPageRoutingModule,
        projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
        _components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
        _components_user_settings_user_settings_module__WEBPACK_IMPORTED_MODULE_3__.UserSettingsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_personal_src_app_pages_user-settings-page_user-settings-page_module_ts.js.map