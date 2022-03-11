"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["projects_personal_src_app_pages_auth-page_auth-page_module_ts"],{

/***/ 53431:
/*!*******************************************************************************!*\
  !*** ./projects/personal/src/app/pages/auth-page/auth-page-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageRoutingModule": () => (/* binding */ AuthPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _auth_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-page.component */ 40115);
/* harmony import */ var _components_auth_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/auth-forms/login-form/login-form.component */ 93158);
/* harmony import */ var _components_auth_forms_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/auth-forms/signup-form/signup-form.component */ 37998);
/* harmony import */ var _components_auth_forms_recovery_form_recovery_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/auth-forms/recovery-form/recovery-form.component */ 17363);
/* harmony import */ var _components_auth_forms_signup_success_signup_success_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/auth-forms/signup-success/signup-success.component */ 34239);
/* harmony import */ var _components_auth_forms_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/auth-forms/reset-success/reset-success.component */ 11459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1858);









const routes = [
    {
        path: "",
        component: _auth_page_component__WEBPACK_IMPORTED_MODULE_0__.AuthPageComponent,
        children: [
            { path: "login", component: _components_auth_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__.LoginFormComponent },
            { path: "signup", component: _components_auth_forms_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_2__.SignupFormComponent },
            { path: "recovery", component: _components_auth_forms_recovery_form_recovery_form_component__WEBPACK_IMPORTED_MODULE_3__.RecoveryFormComponent },
            { path: "signup-success", component: _components_auth_forms_signup_success_signup_success_component__WEBPACK_IMPORTED_MODULE_4__.SignupSuccessComponent },
            { path: "reset-success", component: _components_auth_forms_reset_success_reset_success_component__WEBPACK_IMPORTED_MODULE_5__.ResetSuccessComponent },
        ]
    }
];
class AuthPageRoutingModule {
}
AuthPageRoutingModule.ɵfac = function AuthPageRoutingModule_Factory(t) { return new (t || AuthPageRoutingModule)(); };
AuthPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AuthPageRoutingModule });
AuthPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 40115:
/*!**************************************************************************!*\
  !*** ./projects/personal/src/app/pages/auth-page/auth-page.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageComponent": () => (/* binding */ AuthPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../application/src/app/components/main-navbar/main-navbar/main-navbar.component */ 28088);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 869);



class AuthPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthPageComponent.ɵfac = function AuthPageComponent_Factory(t) { return new (t || AuthPageComponent)(); };
AuthPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthPageComponent, selectors: [["app-auth-page"]], decls: 2, vars: 2, consts: [[3, "navBrand", "isForms"]], template: function AuthPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-main-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("navBrand", "netRink")("isForms", true);
    } }, directives: [_application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__.MainNavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 48674:
/*!***********************************************************************!*\
  !*** ./projects/personal/src/app/pages/auth-page/auth-page.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageModule": () => (/* binding */ AuthPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _auth_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-page-routing.module */ 53431);
/* harmony import */ var projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/application/src/app/components/main-navbar/main-navbar.module */ 7264);
/* harmony import */ var _components_auth_forms_auth_forms_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/auth-forms/auth-forms.module */ 90489);
/* harmony import */ var _auth_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-page.component */ 40115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);






class AuthPageModule {
}
AuthPageModule.ɵfac = function AuthPageModule_Factory(t) { return new (t || AuthPageModule)(); };
AuthPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthPageModule });
AuthPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _auth_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthPageRoutingModule,
            projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
            _components_auth_forms_auth_forms_module__WEBPACK_IMPORTED_MODULE_2__.AuthFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthPageModule, { declarations: [_auth_page_component__WEBPACK_IMPORTED_MODULE_3__.AuthPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _auth_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthPageRoutingModule,
        projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
        _components_auth_forms_auth_forms_module__WEBPACK_IMPORTED_MODULE_2__.AuthFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_personal_src_app_pages_auth-page_auth-page_module_ts.js.map