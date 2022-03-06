"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["projects_restaurant_src_app_pages_register-page_register-page_module_ts"],{

/***/ 7027:
/*!********************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/register-forms/register-form/register-form.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterFormComponent": () => (/* binding */ RegisterFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 16448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_personal_src_app_services_user_user_api_user_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/services/user/user-api/user-api.service */ 59475);
/* harmony import */ var _services_account_api_account_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/account-api/account-api.service */ 18140);
/* harmony import */ var _services_modules_admin_api_admin_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/modules/admin-api/admin-api.service */ 11934);
/* harmony import */ var _services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/modules/settings-api/settings-api.service */ 2606);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 79215);
/* harmony import */ var _personal_src_app_components_auth_forms_form_header_form_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../personal/src/app/components/auth-forms/form-header/form-header.component */ 96229);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _personal_src_app_components_auth_forms_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../personal/src/app/components/auth-forms/form-footer/form-footer.component */ 57124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 56821);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 28012);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-google-places-autocomplete */ 37544);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 25735);

















function RegisterFormComponent_form_7_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Restaurant Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_form_7_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Location is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_form_7_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "About is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function RegisterFormComponent_form_7_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r6.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Restaurant Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, RegisterFormComponent_form_7_mat_error_7_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onAddressChange", function RegisterFormComponent_form_7_Template_input_onAddressChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r8.onAddressChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, RegisterFormComponent_form_7_mat_error_15_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Not more than 250 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, RegisterFormComponent_form_7_mat_error_24_Template, 2, 0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r0.accountForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.saved && ctx_r0.accountForm.controls.name.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.saved && ctx_r0.accountForm.controls.location.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.saved && ctx_r0.accountForm.controls.about.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.isSending);
} }
function RegisterFormComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Successfully completed Restaurant registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "continue to Restaurant");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
class RegisterFormComponent {
    constructor(router, userApi, accountApi, adminApi, settingsApi) {
        this.router = router;
        this.userApi = userApi;
        this.accountApi = accountApi;
        this.adminApi = adminApi;
        this.settingsApi = settingsApi;
        this.accountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            about: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
        });
        this.saved = false;
        this.isSending = false;
        this.showPrompt = false;
    }
    ngOnInit() {
        this.getUser();
    }
    getUser() {
        this.userApi.getUser()
            .then((res) => {
            console.log(res);
            this.thisUser = res.data();
        }, (err) => {
            console.log(err);
        });
    }
    onSubmit() {
        let accountData = {
            created_at: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
            name: this.accountForm.controls.name.value,
            location: this.accountForm.controls.location.value,
            about: this.accountForm.controls.about.value,
            created_by: localStorage.getItem('personal_id'),
            logo: ""
        };
        this.saved = true;
        if (this.accountForm.valid) {
            this.isSending = true;
            this.accountApi.createAccount(accountData)
                .then((res) => {
                console.log(res);
                localStorage.setItem('restaurant_id', res.id);
                this.showPrompt = true;
                this.isSending = false;
                this.createAccountUser(accountData);
                this.createExtendedProfile();
                this.createSubscription();
            }, (err) => {
                console.log(err);
                this.isSending = false;
            });
        }
        else {
            console.log("form is invalid");
        }
        console.log(this.accountForm.value);
    }
    createAccountUser(account) {
        let userData = {
            created_at: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
            user: {
                id: localStorage.getItem('personal_id'),
                data: this.thisUser,
            },
            access_level: "Admin",
            account: {
                id: localStorage.getItem('restaurant_id'),
                data: account,
            }
        };
        console.log(userData);
        this.adminApi.createAccountUser(userData)
            .then((res) => {
            console.log(res);
            sessionStorage.setItem('restaurant_account_user_id', res.id);
            this.createUserAccess(res.id);
        }, (err) => {
            console.log(err);
        });
    }
    createUserAccess(accountUserId) {
        let accessData = {
            admin_access: true,
            customers_access: true,
            deliveries_access: true,
            kitchen_stock_access: true,
            menu_access: true,
            orders_access: true,
            payments_access: true,
            portal_access: true,
            roster_access: true,
            settings_access: true,
            staff_access: true,
            reservations_access: true,
            tables_access: true,
        };
        this.adminApi.createUserAccess(accountUserId, accessData)
            .then((res) => console.log(res), (err) => console.log(err));
    }
    createExtendedProfile() {
        let data = {
            email: "",
            phone: "",
            address: "",
            country: "",
            state: "",
            city: "",
        };
        this.settingsApi.createExtendedProfile(data)
            .then((res) => console.log(res), (err) => console.log(err));
    }
    createSubscription() {
        let data = {
            subscription_type: "Individual",
            billing_frequency: "",
            number_users: 1,
            first_name: this.thisUser.first_name,
            last_name: this.thisUser.last_name,
            email: this.thisUser.email,
        };
        this.settingsApi.createSubscription(data)
            .then((res) => console.log(res), (err) => console.log(err));
    }
    onAddressChange(address) {
        this.accountForm.controls.location.setValue(address.formatted_address);
        console.log(address);
    }
}
RegisterFormComponent.ɵfac = function RegisterFormComponent_Factory(t) { return new (t || RegisterFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](projects_personal_src_app_services_user_user_api_user_api_service__WEBPACK_IMPORTED_MODULE_1__.UserApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_account_api_account_api_service__WEBPACK_IMPORTED_MODULE_2__.AccountApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_modules_admin_api_admin_api_service__WEBPACK_IMPORTED_MODULE_3__.AdminApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_4__.SettingsApiService)); };
RegisterFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: RegisterFormComponent, selectors: [["app-register-form"]], decls: 10, vars: 3, consts: [[1, "bg-light"], [1, "container", "pt-5"], [1, "row"], [1, "col-md-5", "mx-auto", "vh-100"], [1, "my-auto"], [3, "formHeading"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "row p5 text-center", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "row", "mb-3"], [1, "col"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "type", "text", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "location", "required", "", "ngx-google-places-autocomplete", "", 3, "onAddressChange"], ["placesRef", "ngx-places"], ["matInput", "", "rows", "3", "formControlName", "about", "required", "", "maxlength", "250"], ["mat-raised-button", "", "color", "primary", 1, "float-end", "form-button", 3, "disabled"], [1, "row", "p5", "text-center"], ["src", "../../../../assets/images/forms/success.png", 1, "mb-4", "prompt-image", "mx-auto"], [1, "lead"], ["href", "/home"], ["mat-raised-button", "", "color", "primary", 1, "mt-3", "mb-1", "form-button"]], template: function RegisterFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-form-header", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, RegisterFormComponent_form_7_Template, 29, 5, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, RegisterFormComponent_div_8_Template, 10, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "app-form-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formHeading", "Restaurant register");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.showPrompt);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showPrompt);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _personal_src_app_components_auth_forms_form_header_form_header_component__WEBPACK_IMPORTED_MODULE_5__.FormHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _personal_src_app_components_auth_forms_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_6__.FormFooterComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_7__.GooglePlaceDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatHint, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError], styles: [".form-button[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  height: 47px;\r\n}\r\n\r\n.prompt-image[_ngcontent-%COMP%]{\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n\r\n  .mat-form-field-wrapper {\r\n  padding-bottom: 0 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BlcnNvbmFsL3NyYy9hc3NldHMvc3R5bGVzL2Zvcm1zLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InJlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1idXR0b257XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogNDdweDtcclxufVxyXG5cclxuLnByb21wdC1pbWFnZXtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 25741:
/*!****************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/register-forms/register-forms.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterFormsModule": () => (/* binding */ RegisterFormsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-google-places-autocomplete */ 37544);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 79215);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 28012);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 56821);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 25735);
/* harmony import */ var projects_personal_src_app_components_auth_forms_auth_forms_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/components/auth-forms/auth-forms.module */ 90489);
/* harmony import */ var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-form/register-form.component */ 7027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);











class RegisterFormsModule {
}
RegisterFormsModule.ɵfac = function RegisterFormsModule_Factory(t) { return new (t || RegisterFormsModule)(); };
RegisterFormsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RegisterFormsModule });
RegisterFormsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__.GooglePlaceModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            projects_personal_src_app_components_auth_forms_auth_forms_module__WEBPACK_IMPORTED_MODULE_1__.AuthFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RegisterFormsModule, { declarations: [_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_2__.RegisterFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__.GooglePlaceModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        projects_personal_src_app_components_auth_forms_auth_forms_module__WEBPACK_IMPORTED_MODULE_1__.AuthFormsModule], exports: [_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_2__.RegisterFormComponent] }); })();


/***/ }),

/***/ 16115:
/*!*****************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/register-page/register-page-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _register_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-page.component */ 89300);
/* harmony import */ var _components_register_forms_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/register-forms/register-form/register-form.component */ 7027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);





const routes = [
    {
        path: "",
        component: _register_page_component__WEBPACK_IMPORTED_MODULE_0__.RegisterPageComponent,
        children: [
            { path: "", component: _components_register_forms_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_1__.RegisterFormComponent }
        ]
    }
];
class RegisterPageRoutingModule {
}
RegisterPageRoutingModule.ɵfac = function RegisterPageRoutingModule_Factory(t) { return new (t || RegisterPageRoutingModule)(); };
RegisterPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RegisterPageRoutingModule });
RegisterPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RegisterPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 89300:
/*!************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/register-page/register-page.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageComponent": () => (/* binding */ RegisterPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../application/src/app/components/main-navbar/main-navbar/main-navbar.component */ 28088);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 869);



class RegisterPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) { return new (t || RegisterPageComponent)(); };
RegisterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterPageComponent, selectors: [["app-register-page"]], decls: 2, vars: 2, consts: [[3, "navBrand", "isForms"]], template: function RegisterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-main-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("navBrand", "nR Restaurant")("isForms", true);
    } }, directives: [_application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__.MainNavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 12071:
/*!*********************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/register-page/register-page.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _register_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-page-routing.module */ 16115);
/* harmony import */ var projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/application/src/app/components/main-navbar/main-navbar.module */ 7264);
/* harmony import */ var _components_register_forms_register_forms_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/register-forms/register-forms.module */ 25741);
/* harmony import */ var _register_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-page.component */ 89300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);






class RegisterPageModule {
}
RegisterPageModule.ɵfac = function RegisterPageModule_Factory(t) { return new (t || RegisterPageModule)(); };
RegisterPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RegisterPageModule });
RegisterPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _register_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
            _components_register_forms_register_forms_module__WEBPACK_IMPORTED_MODULE_2__.RegisterFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RegisterPageModule, { declarations: [_register_page_component__WEBPACK_IMPORTED_MODULE_3__.RegisterPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _register_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
        projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
        _components_register_forms_register_forms_module__WEBPACK_IMPORTED_MODULE_2__.RegisterFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_restaurant_src_app_pages_register-page_register-page_module_ts.js.map