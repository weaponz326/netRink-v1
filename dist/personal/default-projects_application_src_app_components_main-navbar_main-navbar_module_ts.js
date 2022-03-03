"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"],{

/***/ 75971:
/*!**************************************************************************************************!*\
  !*** ./projects/application/src/app/components/main-navbar/main-footer/main-footer.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainFooterComponent": () => (/* binding */ MainFooterComponent)
/* harmony export */ });
/* harmony import */ var projects_application_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/application/src/environments/environment */ 20224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);


class MainFooterComponent {
    constructor() {
        this.baseUrl = projects_application_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        this.personalUrl = projects_application_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.personalUrl;
        this.restaurantUrl = projects_application_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.restaurantUrl;
        this.schoolUrl = projects_application_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schoolUrl;
        this.enterpriseUrl = projects_application_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.enterpriseUrl;
        this.associationUrl = projects_application_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.associationUrl;
        this.hospitalUrl = projects_application_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hospitalUrl;
        this.hotelUrl = projects_application_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hotelUrl;
        this.shopUrl = projects_application_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.shopUrl;
        this.productionUrl = projects_application_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.productionUrl;
    }
    ngOnInit() {
    }
}
MainFooterComponent.ɵfac = function MainFooterComponent_Factory(t) { return new (t || MainFooterComponent)(); };
MainFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainFooterComponent, selectors: [["app-main-footer"]], decls: 56, vars: 7, consts: [[1, "bg-darker", "navbar-dark", "py-5"], [1, "container", "pt-5"], [1, "row"], [1, "col-md-4", "mb-4", "text-white"], [1, "h3"], [1, "col"], [1, "h5", "text-white", "mb-4"], [1, "navbar-nav"], [1, "nav-item"], ["target", "blank", 1, "nav-link", "py-1", 3, "href"], ["target", "balnk", 1, "nav-link", "py-1", 3, "href"]], template: function MainFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "netRink");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u00A9 2018 - netRink. All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "PERSONAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "RESTAURANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "COMPANY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "TERMS & CONDITIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "PRIVACY POLICY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "HELP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "FOLLOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "YOUTUBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "LINKEDIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.personalUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.restaurantUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.baseUrl + "terms/terms", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.baseUrl + "terms/privacy", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.baseUrl + "help", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "#", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "#", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, styles: [".bg-darker[_ngcontent-%COMP%] {\r\n  background-color: #78797a !important;\r\n}\r\n\r\n.bg-dark-light[_ngcontent-%COMP%] {\r\n  background-color: #f4f5f6 !important;\r\n}\r\n\r\n.bg-light-dark[_ngcontent-%COMP%] {\r\n  background-color: #fcfdfe !important;\r\n}\r\n\r\n.text-white[_ngcontent-%COMP%] {\r\n  color: #fffd;\r\n}\r\n\r\n.suite-details[_ngcontent-%COMP%]   p.h1[_ngcontent-%COMP%], .suite-details[_ngcontent-%COMP%]   p.h4[_ngcontent-%COMP%]{\r\n  color: #212529;\r\n}\r\n\r\n.py-landing[_ngcontent-%COMP%]{\r\n  padding-top: 8rem!important;\r\n  padding-bottom: 8rem!important;\r\n}\r\n\r\n.pt-landing[_ngcontent-%COMP%]{\r\n  padding-top: 8rem!important;\r\n}\r\n\r\n.pb-landing[_ngcontent-%COMP%]{\r\n  padding-bottom: 8rem!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvbGFuZGluZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoibWFpbi1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctZGFya2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3OTdhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1kYXJrLWxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1saWdodC1kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmZGZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXdoaXRlIHtcclxuICBjb2xvcjogI2ZmZmQ7XHJcbn1cclxuXHJcbi5zdWl0ZS1kZXRhaWxzIHAuaDEsXHJcbi5zdWl0ZS1kZXRhaWxzIHAuaDR7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbn1cclxuXHJcbi5weS1sYW5kaW5ne1xyXG4gIHBhZGRpbmctdG9wOiA4cmVtIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogOHJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC1sYW5kaW5ne1xyXG4gIHBhZGRpbmctdG9wOiA4cmVtIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBiLWxhbmRpbmd7XHJcbiAgcGFkZGluZy1ib3R0b206IDhyZW0haW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7264:
/*!***********************************************************************************!*\
  !*** ./projects/application/src/app/components/main-navbar/main-navbar.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainNavbarModule": () => (/* binding */ MainNavbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-navbar/main-navbar.component */ 28088);
/* harmony import */ var _main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-footer/main-footer.component */ 75971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);






class MainNavbarModule {
}
MainNavbarModule.ɵfac = function MainNavbarModule_Factory(t) { return new (t || MainNavbarModule)(); };
MainNavbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MainNavbarModule });
MainNavbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MainNavbarModule, { declarations: [_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_1__.MainNavbarComponent,
        _main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_2__.MainFooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule], exports: [_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_1__.MainNavbarComponent,
        _main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_2__.MainFooterComponent] }); })();


/***/ }),

/***/ 28088:
/*!**************************************************************************************************!*\
  !*** ./projects/application/src/app/components/main-navbar/main-navbar/main-navbar.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainNavbarComponent": () => (/* binding */ MainNavbarComponent)
/* harmony export */ });
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/environments/environment */ 4197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_personal_src_app_services_user_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/services/user/auth-api/auth-api.service */ 86491);
/* harmony import */ var projects_personal_src_app_services_user_user_api_user_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/personal/src/app/services/user/user-api/user-api.service */ 59475);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);








const _c0 = ["connectionToastComponentReference"];
function MainNavbarComponent_div_4_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
} }
function MainNavbarComponent_div_4_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/auth/login");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/auth/signup");
} }
function MainNavbarComponent_div_4_div_1_ng_template_4_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "nR Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r8.personalUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function MainNavbarComponent_div_4_div_1_ng_template_4_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 17);
} }
function MainNavbarComponent_div_4_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, MainNavbarComponent_div_4_div_1_ng_template_4_li_10_Template, 4, 1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MainNavbarComponent_div_4_div_1_ng_template_4_div_11_Template, 1, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainNavbarComponent_div_4_div_1_ng_template_4_Template_a_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r10.logout($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r7.photo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r7.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.source != "Personal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.source != "Personal");
} }
function MainNavbarComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MainNavbarComponent_div_4_div_1_div_1_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MainNavbarComponent_div_4_div_1_ng_template_2_Template, 5, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MainNavbarComponent_div_4_div_1_ng_template_4_Template, 16, 5, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLoggedIn)("ngIfThen", _r6)("ngIfElse", _r4);
} }
function MainNavbarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MainNavbarComponent_div_4_div_1_Template, 6, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.isAuthLoading);
} }
class MainNavbarComponent {
    constructor(router, authApi, userApi) {
        this.router = router;
        this.authApi = authApi;
        this.userApi = userApi;
        this.source = "Application";
        this.navBrand = "NetRink";
        this.isForms = false;
        this.personalUrl = projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.personalUrl;
        this.isLoggedIn = false;
        this.isAuthLoading = false;
        this.name = "";
        this.email = "";
        this.photo = "../../../../assets/images/utilities/photo-avatar.jpg";
    }
    ngOnInit() {
        this.getAuth();
        this.getUser();
        if (!this.isForms) {
            this.setSource();
        }
    }
    setSource() {
        sessionStorage.setItem('app_source', this.navBrand);
    }
    getAuth() {
        this.isAuthLoading = true;
        this.authApi.getAuth()
            .subscribe((res) => {
            console.log(res);
            this.isAuthLoading = false;
            if (res.emailVerified) {
                this.isLoggedIn = true;
                this.email = res.email;
            }
        }, (err) => {
            console.log(err);
            this.isLoggedIn = false;
            this.isAuthLoading = false;
            if (!!localStorage.getItem('personal_id'))
                this.connectionToast.openToast();
        });
    }
    getUser() {
        this.userApi.getUser()
            .then((res) => {
            console.log(res);
            this.userData = res.data();
            this.name = this.userData.first_name;
            if (this.userData.photo != "")
                this.photo = this.userData.photo;
        }, (err) => {
            console.log(err);
            if (!!localStorage.getItem('personal_id'))
                this.connectionToast.openToast();
        });
    }
    logout(e) {
        e.stopPropagation();
        console.log("u logging out? ...where u going?");
        this.authApi.logout()
            .then((res) => {
            console.log(res);
            localStorage.removeItem("personal_id");
            localStorage.removeItem("hospital_id");
            localStorage.removeItem("restaurant_id");
            localStorage.removeItem("school_id");
            localStorage.removeItem("enterprise_id");
            localStorage.removeItem("association_id");
            localStorage.removeItem("hotel_id");
            localStorage.removeItem("shop_id");
            localStorage.removeItem("production_id");
            window.location.href = "/";
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
}
MainNavbarComponent.ɵfac = function MainNavbarComponent_Factory(t) { return new (t || MainNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_personal_src_app_services_user_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_2__.AuthApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_personal_src_app_services_user_user_api_user_api_service__WEBPACK_IMPORTED_MODULE_3__.UserApiService)); };
MainNavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MainNavbarComponent, selectors: [["app-main-navbar"]], viewQuery: function MainNavbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, inputs: { source: "source", navBrand: "navBrand", isForms: "isForms" }, decls: 7, vars: 3, consts: [[1, "navbar", "navbar-dark", "bg-dark"], [1, "container"], [1, "navbar-brand", 3, "routerLink"], [4, "ngIf"], ["connectionToastComponentReference", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], ["notLoggedinBlock", ""], ["loggedinBlock", ""], [1, "d-flex", "auth-btns"], ["type", "button", 1, "btn", "btn-secondary", "ms-2", 3, "routerLink"], [1, "dropdown"], ["href", "#", "role", "button", "id", "dropdownMenuLink", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-light", "dropdown-toggle", "user-btn"], ["width", "26", "height", "26", 1, "rounded-circle", "border", 3, "src"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu"], [1, "ms-3", "me-2"], [1, "lead", "mb-0", "user-info"], [1, "small", "text-muted", "mb-0", "user-info"], [1, "dropdown-divider"], ["class", "dropdown-divider", 4, "ngIf"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "bi", "bi-box-arrow-right", "me-2"], ["target", "blank", 1, "dropdown-item", 3, "href"], [1, "bi", "bi-person", "me-2"]], template: function MainNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MainNavbarComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-connection-toast", null, 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.navBrand);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isForms);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink], styles: [".navbar-brand[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.auth-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 90px;\n}\n\n.btn-outline-light[_ngcontent-%COMP%]:hover, .btn-outline-light[_ngcontent-%COMP%]:visited, .btn-outline-light[_ngcontent-%COMP%]:focus, .btn-outline-light[_ngcontent-%COMP%]:active {\n  color: #f8f9fc;\n  background-color: transparent;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  z-index: 1100;\n  max-width: 150px;\n}\n\n.user-btn[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n\n.user-info[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtBQUNEOztBQUVBO0VBQ0MsV0FBQTtBQUNEOztBQUVBOzs7O0VBSUMsY0FBQTtFQUNBLDZCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxhQUFBO0VBQ0MsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJtYWluLW5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmQge1xyXG5cdGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5cclxuLmF1dGgtYnRucyBidXR0b24ge1xyXG5cdHdpZHRoOiA5MHB4O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXIsXHJcbi5idG4tb3V0bGluZS1saWdodDp2aXNpdGVkLFxyXG4uYnRuLW91dGxpbmUtbGlnaHQ6Zm9jdXMsXHJcbi5idG4tb3V0bGluZS1saWdodDphY3RpdmUge1xyXG5cdGNvbG9yOiAjZjhmOWZjO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcblx0ei1pbmRleDogMTEwMDtcclxuICBtYXgtd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4udXNlci1idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi51c2VyLWluZm97XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 20224:
/*!**************************************************************!*\
  !*** ./projects/application/src/environments/environment.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: "https://netrink-test-v1.web.app/",
    personalUrl: "https://netrink-test-personal-v1.web.app/",
    restaurantUrl: "https://netrink-test-restaurant-v1.web.app/",
    schoolUrl: "https://netrink-test-school-v1.web.app/",
    enterpriseUrl: "https://netrink-test-enterprise-v1.web.app/",
    associationUrl: "https://netrink-test-association-v1.web.app/",
    hospitalUrl: "https://netrink-test-hospital-v1.web.app/",
    hotelUrl: "https://netrink-test-hotel-v1.web.app/",
    shopUrl: "https://netrink-test-shop-v1.web.app/",
    productionUrl: "https://netrink-test-production-v1.web.app/",
    firebase: {
        apiKey: "AIzaSyC-pUZi6j5AecjEKiBaQL1nTZrKWB_J9w0",
        authDomain: "netrink-test-v1.firebaseapp.com",
        projectId: "netrink-test-v1",
        storageBucket: "netrink-test-v1.appspot.com",
        messagingSenderId: "140608103001",
        appId: "1:140608103001:web:43c476f0813eeb1f78c748"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 30712:
/*!******************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/module-utilities/access-toast/access-toast.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessToastComponent": () => (/* binding */ AccessToastComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 7005);



const _c0 = ["buttonElementReference"];
// import '@popperjs/core';
// declare global {
//   interface Window {
//       bootstrap: any;
//   }
// }
// window.bootstrap = require('bootstrap');
class AccessToastComponent {
    constructor() {
        this.isShowToast = false;
    }
    ngOnInit() {
    }
    openToast() {
        console.log("opening module access toast");
        this.isShowToast = true;
        this.timer = setInterval(() => {
            this.hideToast();
        }, 3000);
    }
    hideToast() {
        this.isShowToast = false;
        clearInterval(this.timer);
        console.log("closing toast...");
    }
    ;
}
AccessToastComponent.ɵfac = function AccessToastComponent_Factory(t) { return new (t || AccessToastComponent)(); };
AccessToastComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessToastComponent, selectors: [["app-access-toast"]], viewQuery: function AccessToastComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.buttonElement = _t.first);
    } }, decls: 5, vars: 1, consts: [[1, "position-fixed", "bottom-0", "end-0", "p-3", 2, "z-index", "11"], ["id", "liveToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "text-white", "bg-warning", "border-0", "access-toast", 3, "ngClass"], [1, "toast-body", "p-3"], [1, "h4", "bi", "bi-exclamation-triangle", "me-3"]], template: function AccessToastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Access denied. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isShowToast ? "show" : "hide");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Nlc3MtdG9hc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 54709:
/*!**************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/module-utilities/bday-input/bday-input.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BdayInputComponent": () => (/* binding */ BdayInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 7005);



function BdayInputComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r3);
} }
function BdayInputComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](month_r4);
} }
function BdayInputComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](year_r5);
} }
class BdayInputComponent {
    constructor() {
        this.dayInput = "";
        this.monthInput = "";
        this.yearInput = "";
        // TODO: to be removed
        this.value = this.yearInput + "-" + this.monthInput + "-" + this.dayInput;
        this.dobDaySource = this.getDays();
        this.dobMonthSource = this.getMonths();
        this.dobYearSource = this.getYears();
    }
    ngOnInit() {
    }
    getValue() {
        let value = this.yearInput + "-" + this.monthInput + "-" + this.dayInput;
        return value;
    }
    setValue(date) {
        var dateArray = date.split('-');
        this.yearInput = dateArray[0];
        this.monthInput = dateArray[1];
        this.dayInput = dateArray[2];
    }
    getDays() {
        var doubleDigit, n = [];
        for (let i = 1; i <= 31; i++) {
            doubleDigit = (i >= 10) ? i.toString() : "0" + i.toString();
            n.push(doubleDigit);
        }
        return n;
    }
    getMonths() {
        var doubleDigit, n = [];
        for (let i = 1; i <= 12; i++) {
            doubleDigit = (i >= 10) ? i.toString() : "0" + i.toString();
            n.push(doubleDigit);
        }
        return n;
    }
    getYears() {
        var i, n = [];
        for (i = 2022; i >= 1900; i--)
            n.push(i.toString());
        return n;
    }
}
BdayInputComponent.ɵfac = function BdayInputComponent_Factory(t) { return new (t || BdayInputComponent)(); };
BdayInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BdayInputComponent, selectors: [["app-bday-input"]], decls: 10, vars: 6, consts: [[1, "row", "w-100", "m-0"], [1, "col", "ps-0", "pe-1"], [1, "form-control", "form-control-sm", "w-100", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "col", "p-0"], [1, "col", "ps-1", "pe-0"]], template: function BdayInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BdayInputComponent_Template_select_ngModelChange_2_listener($event) { return ctx.dayInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BdayInputComponent_option_3_Template, 2, 1, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BdayInputComponent_Template_select_ngModelChange_5_listener($event) { return ctx.monthInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BdayInputComponent_option_6_Template, 2, 1, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BdayInputComponent_Template_select_ngModelChange_8_listener($event) { return ctx.yearInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BdayInputComponent_option_9_Template, 2, 1, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dayInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dobDaySource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.monthInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dobMonthSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.yearInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dobYearSource);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZGF5LWlucHV0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 91580:
/*!**************************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionToastComponent": () => (/* binding */ ConnectionToastComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 7005);



const _c0 = ["buttonElementReference"];
class ConnectionToastComponent {
    constructor() {
        this.isShowToast = false;
    }
    ngOnInit() {
    }
    openToast() {
        console.log("opening connection toast");
        this.isShowToast = true;
        this.timer = setInterval(() => {
            this.hideToast();
        }, 3000);
    }
    hideToast() {
        this.isShowToast = false;
        clearInterval(this.timer);
        console.log("closing toast...");
    }
    ;
}
ConnectionToastComponent.ɵfac = function ConnectionToastComponent_Factory(t) { return new (t || ConnectionToastComponent)(); };
ConnectionToastComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConnectionToastComponent, selectors: [["app-connection-toast"]], viewQuery: function ConnectionToastComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.buttonElement = _t.first);
    } }, decls: 5, vars: 1, consts: [[1, "position-fixed", "bottom-0", "end-0", "p-3", 2, "z-index", "11"], ["id", "liveToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "text-white", "bg-danger", "border-0", "connection-toast", 3, "ngClass"], [1, "toast-body", "p-3"], [1, "h4", "bi", "bi-x-circle", "me-3"]], template: function ConnectionToastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Could not connect. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isShowToast ? "show" : "hide");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25uZWN0aW9uLXRvYXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 88622:
/*!******************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteModalComponent": () => (/* binding */ DeleteModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);


const _c0 = ["buttonElementReference"];
class DeleteModalComponent {
    constructor() {
        this.confirmEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.confirmEventTwo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.confirmEventThree = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.thisEvent = 'modal';
    }
    ngOnInit() {
    }
    openModal() {
        this.buttonElement.nativeElement.click();
    }
    onConfirm() {
        console.log("Yep... lets go ahead and delete this useless piece of ****");
        console.log(this.thisEvent);
        if (this.thisEvent == 'modal') {
            console.log("from 1");
            this.confirmEvent.emit("OK");
        }
        if (this.thisEvent == 'modalTwo') {
            console.log("from 2");
            this.confirmEventTwo.emit("OK");
        }
        if (this.thisEvent == 'modalThree') {
            console.log("from 3");
            this.confirmEventThree.emit("OK");
        }
    }
}
DeleteModalComponent.ɵfac = function DeleteModalComponent_Factory(t) { return new (t || DeleteModalComponent)(); };
DeleteModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteModalComponent, selectors: [["app-delete-modal"]], viewQuery: function DeleteModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.buttonElement = _t.first);
    } }, outputs: { confirmEvent: "confirmEvent", confirmEventTwo: "confirmEventTwo", confirmEventThree: "confirmEventThree" }, decls: 14, vars: 2, consts: [["data-bs-toggle", "modal", "data-bs-target", "#deleteConfirmationModal", 3, "hidden"], ["buttonElementReference", ""], ["id", "deleteConfirmationModal", "tabindex", "-1", "aria-labelledby", "deleteConfirmationModalLabel", "aria-hidden", "true", 1, "modal", "fade", "form-modal"], [1, "modal-dialog"], [1, "modal-content", "text-center"], [1, "modal-body"], [1, "pt-4"], [1, "modal-footer"], ["data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn", 3, "id", "click"], ["data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn"]], template: function DeleteModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Are you sure you want to delete this item?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteModalComponent_Template_button_click_10_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.thisEvent);
    } }, styles: [".modal-footer[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJkZWxldGUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtZm9vdGVye1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 84154:
/*!****************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/module-utilities/image-input/image-input.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageInputComponent": () => (/* binding */ ImageInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);

class ImageInputComponent {
    constructor() {
        this.imgType = "logo";
        this.height = 120;
        this.width = 120;
        this.imgSrc = '';
        this.isImageSet = false;
        this.isImageChanged = false;
    }
    ngOnInit() {
        this.setPlaceholderImage();
    }
    setPlaceholderImage() {
        if (this.imgType == 'photo') {
            this.imgSrc = 'assets/images/utilities/photo-avatar.jpg';
        }
        else if (this.imgType == 'logo') {
            this.imgSrc = 'assets/images/utilities/logo-placeholder.jpg';
        }
    }
    onImageSelected(e) {
        const file = e.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                this.imgSrc = e.target.result;
                this.image = file;
                this.isImageSet = true;
                this.isImageSet = true;
            };
        }
    }
}
ImageInputComponent.ɵfac = function ImageInputComponent_Factory(t) { return new (t || ImageInputComponent)(); };
ImageInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageInputComponent, selectors: [["app-image-input"]], inputs: { imgType: "imgType", height: "height", width: "width" }, decls: 5, vars: 8, consts: [["type", "file", "requiredFileType", "image", 1, "d-none", 3, "hidden", "change"], ["imageInput", ""], [1, "card", "border", "rounded", "list-pointer", 3, "click"], [1, "card-img-top"], [3, "src", "width", "height"]], template: function ImageInputComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageInputComponent_Template_input_change_0_listener($event) { return ctx.onImageSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageInputComponent_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px")("height", ctx.height, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("width", ctx.width)("height", ctx.height);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS1pbnB1dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7632:
/*!**********************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/module-utilities/module-sidenav/module-sidenav.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleSidenavComponent": () => (/* binding */ ModuleSidenavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 7005);



function ModuleSidenavComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", link_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](link_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.text);
} }
class ModuleSidenavComponent {
    constructor() {
        this.navLinks = [];
    }
    ngOnInit() {
    }
}
ModuleSidenavComponent.ɵfac = function ModuleSidenavComponent_Factory(t) { return new (t || ModuleSidenavComponent)(); };
ModuleSidenavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModuleSidenavComponent, selectors: [["app-module-sidenav"]], inputs: { heading: "heading", navLinks: "navLinks" }, decls: 18, vars: 2, consts: [["id", "accordionSidebar", 1, "navbar-nav", "bg-light", "sidebar", "sidebar-light", "h-100", "accordion"], ["routerLink", "./", 1, "sidebar-brand", "d-flex", "align-items-center"], [1, "sidebar-brand-text", "mx-3", "ps-1"], [1, "sidebar-divider"], [1, "nav-item"], ["routerLink", "dashboard", 1, "nav-link"], [1, "bi", "bi-speedometer2"], [1, "ms-1"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "sidebar-card"], [1, "bi", "bi-house-fill", "sidebar-card-illustration", "mb-3", "home-icon"], ["routerLink", "/home", 1, "btn", "btn-secondary", "btn-sm"], [1, "nav-link", 3, "routerLink"]], template: function ModuleSidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ModuleSidenavComponent_li_12_Template, 5, 5, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "go Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navLinks);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".sidebar-brand-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.home-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS1zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoibW9kdWxlLXNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhci1icmFuZC10ZXh0IGgze1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLmhvbWUtaWNvbntcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8972:
/*!********************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/module-utilities/module-topnav/module-topnav.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleTopnavComponent": () => (/* binding */ ModuleTopnavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 869);




function ModuleTopnavComponent_div_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 8);
} }
function ModuleTopnavComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModuleTopnavComponent_div_2_span_4_Template, 1, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const heading_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", heading_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](heading_r2.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.headings.indexOf(heading_r2) != ctx_r0.headings.length - 1);
} }
function ModuleTopnavComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModuleTopnavComponent_div_3_Template_li_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.print.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ModuleTopnavComponent {
    constructor() {
        this.headings = [];
        this.showPrint = false;
        this.print = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
}
ModuleTopnavComponent.ɵfac = function ModuleTopnavComponent_Factory(t) { return new (t || ModuleTopnavComponent)(); };
ModuleTopnavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModuleTopnavComponent, selectors: [["app-module-topnav"]], inputs: { headings: "headings", showPrint: "showPrint" }, outputs: { print: "print" }, decls: 4, vars: 2, consts: [[1, "navbar", "navbar-light", "bg-white", "topbar", "mb-4", "static-top", "shadow"], [1, "navbar-expand"], ["class", "module-heading d-inline-block", 4, "ngFor", "ngForOf"], ["class", "dropdown print-button", 4, "ngIf"], [1, "module-heading", "d-inline-block"], [1, "align-items-center", 3, "routerLink"], [1, "d-inline-block"], ["class", "bi bi-chevron-double-right mx-2", 4, "ngIf"], [1, "bi", "bi-chevron-double-right", "mx-2"], [1, "dropdown", "print-button"], ["id", "dropdownMenuLink", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "d-sm-inline-block", "btn", "btn-secondary", "shadow-sm", "float-end"], [1, "bi", "bi-file-earmark", "me-2"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu"], [1, "mx-2", 3, "click"], [1, "bi", "bi-printer", "me-1"]], template: function ModuleTopnavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModuleTopnavComponent_div_2_Template, 5, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModuleTopnavComponent_div_3_Template, 8, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPrint);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.print-button[_ngcontent-%COMP%] {\n  justify-content: end !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS10b3BuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGIiwiZmlsZSI6Im1vZHVsZS10b3BuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudSBsaXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcmludC1idXR0b257XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 45018:
/*!******************************************************************************************!*\
  !*** ./projects/personal/src/app/components/module-utilities/module-utilities.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleUtilitiesModule": () => (/* binding */ ModuleUtilitiesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-sidenav/module-sidenav.component */ 7632);
/* harmony import */ var _module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _access_toast_access_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-toast/access-toast.component */ 30712);
/* harmony import */ var _delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete-modal/delete-modal.component */ 88622);
/* harmony import */ var _image_input_image_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-input/image-input.component */ 84154);
/* harmony import */ var _bday_input_bday_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bday-input/bday-input.component */ 54709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1858);











class ModuleUtilitiesModule {
}
ModuleUtilitiesModule.ɵfac = function ModuleUtilitiesModule_Factory(t) { return new (t || ModuleUtilitiesModule)(); };
ModuleUtilitiesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ModuleUtilitiesModule });
ModuleUtilitiesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ModuleUtilitiesModule, { declarations: [_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_0__.ModuleSidenavComponent,
        _module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_1__.ModuleTopnavComponent,
        _connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent,
        _access_toast_access_toast_component__WEBPACK_IMPORTED_MODULE_3__.AccessToastComponent,
        _delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__.DeleteModalComponent,
        _image_input_image_input_component__WEBPACK_IMPORTED_MODULE_5__.ImageInputComponent,
        _bday_input_bday_input_component__WEBPACK_IMPORTED_MODULE_6__.BdayInputComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule], exports: [_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_0__.ModuleSidenavComponent,
        _module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_1__.ModuleTopnavComponent,
        _connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent,
        _access_toast_access_toast_component__WEBPACK_IMPORTED_MODULE_3__.AccessToastComponent,
        _delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__.DeleteModalComponent,
        _image_input_image_input_component__WEBPACK_IMPORTED_MODULE_5__.ImageInputComponent,
        _bday_input_bday_input_component__WEBPACK_IMPORTED_MODULE_6__.BdayInputComponent] }); })();


/***/ }),

/***/ 86491:
/*!******************************************************************************!*\
  !*** ./projects/personal/src/app/services/user/auth-api/auth-api.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthApiService": () => (/* binding */ AuthApiService)
/* harmony export */ });
/* harmony import */ var C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 11733);
/* harmony import */ var projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/environments/environment */ 4197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 98033);




class AuthApiService {
  constructor(afAuth) {
    this.afAuth = afAuth;
  }

  login(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signup(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  sendEmailVerification() {
    var _this = this;

    return (0,C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var user;
      yield _this.afAuth.currentUser.then(res => user = res);

      const baseUrl = _this.getBaseUrl();

      const url = `${baseUrl}/auth/signup-success?id=${user.uid}&email=${user.email}`; // const url = `http://localhost:4200/auth/signup-success?id=${user.uid}&email=${user.email}`;

      return user.sendEmailVerification({
        url: url
      });
    })();
  }

  sendPasswordResetEmail(email) {
    const baseUrl = this.getBaseUrl();
    const url = `${baseUrl}/auth/reset-success?email=${email}`; // const url = `http://localhost:4200/auth/reset-success?email=${email}`;

    return this.afAuth.sendPasswordResetEmail(email);
  }

  logout() {
    return this.afAuth.signOut();
  }

  getAuth() {
    return this.afAuth.authState;
  }

  getBaseUrl() {
    const source = sessionStorage.getItem('app_source');

    switch (source) {
      case "netRink":
        return projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
        break;

      case "nR Personal":
        return projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.personalUrl;
        break;

      case "nR Restaurant":
        return projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.restaurantUrl;
        break;

      case "nR School":
        return projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.schoolUrl;
        break;

      case "nR Enterprise":
        return projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.enterpriseUrl;
        break;

      case "nR Association":
        return projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.associationUrl;
        break;

      case "nR Hospital":
        return projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.hospitalUrl;
        break;

      case "nR Hotel":
        return projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.hotelUrl;
        break;

      case "nR Shop":
        return projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.shopUrl;
        break;

      case "nR Production":
        return projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.productionUrl;
        break;

      default:
        return projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
        break;
    }
  }

}

AuthApiService.ɵfac = function AuthApiService_Factory(t) {
  return new (t || AuthApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth));
};

AuthApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthApiService,
  factory: AuthApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 59475:
/*!******************************************************************************!*\
  !*** ./projects/personal/src/app/services/user/user-api/user-api.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserApiService": () => (/* binding */ UserApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);


class UserApiService {
    constructor(afs) {
        this.afs = afs;
        this.userRef = this.afs.collection('personal/users/personal_user');
    }
    createUser(userId, userData) {
        return this.userRef.doc(userId).set(userData);
    }
    updateUser(userData) {
        return this.userRef.doc(String(localStorage.getItem('personal_id'))).update(userData);
    }
    getUser() {
        return this.userRef.doc(String(localStorage.getItem('personal_id'))).ref.get();
    }
}
UserApiService.ɵfac = function UserApiService_Factory(t) { return new (t || UserApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
UserApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserApiService, factory: UserApiService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-projects_application_src_app_components_main-navbar_main-navbar_module_ts.js.map