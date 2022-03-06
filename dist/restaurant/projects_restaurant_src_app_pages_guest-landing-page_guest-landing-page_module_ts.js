"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["projects_restaurant_src_app_pages_guest-landing-page_guest-landing-page_module_ts"],{

/***/ 50912:
/*!***************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/guest-landing-page/guest-landing-page-routing.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuestLandingPageRoutingModule": () => (/* binding */ GuestLandingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _guest_landing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guest-landing-page.component */ 66812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);




const routes = [
    { path: "", component: _guest_landing_page_component__WEBPACK_IMPORTED_MODULE_0__.GuestLandingPageComponent }
];
class GuestLandingPageRoutingModule {
}
GuestLandingPageRoutingModule.ɵfac = function GuestLandingPageRoutingModule_Factory(t) { return new (t || GuestLandingPageRoutingModule)(); };
GuestLandingPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GuestLandingPageRoutingModule });
GuestLandingPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GuestLandingPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 66812:
/*!**********************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/guest-landing-page/guest-landing-page.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuestLandingPageComponent": () => (/* binding */ GuestLandingPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_services_user_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/personal/src/app/services/user/auth-api/auth-api.service */ 86491);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../application/src/app/components/main-navbar/main-navbar/main-navbar.component */ 28088);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _personal_src_app_components_suite_landing_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../personal/src/app/components/suite-landing/about/about.component */ 4822);
/* harmony import */ var _personal_src_app_components_suite_landing_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../personal/src/app/components/suite-landing/pricing/pricing.component */ 50131);
/* harmony import */ var _personal_src_app_components_suite_landing_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../personal/src/app/components/suite-landing/contact/contact.component */ 59929);
/* harmony import */ var _application_src_app_components_main_navbar_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../application/src/app/components/main-navbar/main-footer/main-footer.component */ 75971);
/* harmony import */ var _personal_src_app_components_suite_landing_landing_loading_landing_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../personal/src/app/components/suite-landing/landing-loading/landing-loading.component */ 85131);
/* harmony import */ var _personal_src_app_components_suite_landing_suite_scrollnav_suite_scrollnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../personal/src/app/components/suite-landing/suite-scrollnav/suite-scrollnav.component */ 2415);
/* harmony import */ var _personal_src_app_components_suite_landing_guest_top_guest_top_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../personal/src/app/components/suite-landing/guest-top/guest-top.component */ 86478);












function GuestLandingPageComponent_app_landing_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-landing-loading");
} }
function GuestLandingPageComponent_app_suite_scrollnav_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-suite-scrollnav", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("aboutEvent", function GuestLandingPageComponent_app_suite_scrollnav_2_Template_app_suite_scrollnav_aboutEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r3.gotoAbout(); })("pricingEvent", function GuestLandingPageComponent_app_suite_scrollnav_2_Template_app_suite_scrollnav_pricingEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r5.gotoPricing(); })("contactEvent", function GuestLandingPageComponent_app_suite_scrollnav_2_Template_app_suite_scrollnav_contactEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r6.gotoContact(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
const _c0 = "Automatically generate bills and receive payments from guests";
const _c1 = function () { return { "title": "Bills and payments", "description": _c0, "imgLink": "assets/images/features/bills.png" }; };
const _c2 = function () { return { "title": "Operations management", "description": "Handle all operations of your facility with ease", "imgLink": "assets/images/features/operations.png" }; };
const _c3 = function () { return { "title": "Reservations and orders", "description": "receive and respond to reservations and orders", "imgLink": "assets/images/features/orders.png" }; };
const _c4 = function () { return { "title": "Guests management", "description": "Manage your guests for good customer relationship", "imgLink": "assets/images/features/guests.png" }; };
const _c5 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
function GuestLandingPageComponent_app_guest_top_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-guest-top", 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suiteName", "Restaurant")("primaryCaption", "netRink Restaurant")("secondaryCaption", "Effective running of the day to day activities of your catering institution")("features", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction4"](8, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](4, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](5, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](6, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](7, _c4)));
} }
class GuestLandingPageComponent {
    constructor(authApi, router) {
        this.authApi = authApi;
        this.router = router;
        this.isLoading = false;
    }
    ngOnInit() {
        this.getAuth();
    }
    getAuth() {
        this.isLoading = true;
        this.authApi.getAuth()
            .subscribe((res) => {
            console.log(res);
            this.isLoading = false;
            if (res.emailVerified) {
                this.router.navigateByUrl("/user");
            }
        }, (err) => {
            console.log(err);
            this.isLoading = false;
        });
    }
    gotoAbout() {
        var _a;
        console.log('to about...');
        (_a = document.querySelector('#aboutComponentReference')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    }
    gotoPricing() {
        var _a;
        console.log('to pricing...');
        (_a = document.querySelector('#pricingComponentReference')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    }
    gotoContact() {
        var _a;
        console.log('to contact...');
        (_a = document.querySelector('#contactComponentReference')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    }
}
GuestLandingPageComponent.ɵfac = function GuestLandingPageComponent_Factory(t) { return new (t || GuestLandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](projects_personal_src_app_services_user_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_0__.AuthApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router)); };
GuestLandingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: GuestLandingPageComponent, selectors: [["app-guest-landing-page"]], decls: 8, vars: 8, consts: [[3, "navBrand", "source"], [4, "ngIf"], [3, "aboutEvent", "pricingEvent", "contactEvent", 4, "ngIf"], [3, "suiteName", "primaryCaption", "secondaryCaption", "features", 4, "ngIf"], ["id", "aboutComponentReference", 3, "suiteName", "suiteDetails"], ["id", "pricingComponentReference"], ["id", "contactComponentReference", 3, "suiteName"], [3, "aboutEvent", "pricingEvent", "contactEvent"], [3, "suiteName", "primaryCaption", "secondaryCaption", "features"]], template: function GuestLandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-main-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, GuestLandingPageComponent_app_landing_loading_1_Template, 1, 0, "app-landing-loading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, GuestLandingPageComponent_app_suite_scrollnav_2_Template, 1, 0, "app-suite-scrollnav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, GuestLandingPageComponent_app_guest_top_3_Template, 1, 13, "app-guest-top", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-about", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "app-pricing", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "app-contact", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "app-main-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("navBrand", "nR Restaurant")("source", "Restaurant");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suiteName", "Restaurant")("suiteDetails", "netRink Restaurant helps manage all aspects of your catering establishment. Restaurant comes with a range of extensive modular apps that are designed to see you through your day-to-day operations effectively. The modular apps are well intergrated with each, allowing you to bring all aspects of your restaurant operations into a single perspective.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("suiteName", "Restaurant");
    } }, directives: [_application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_1__.MainNavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _personal_src_app_components_suite_landing_about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _personal_src_app_components_suite_landing_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_3__.PricingComponent, _personal_src_app_components_suite_landing_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent, _application_src_app_components_main_navbar_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_5__.MainFooterComponent, _personal_src_app_components_suite_landing_landing_loading_landing_loading_component__WEBPACK_IMPORTED_MODULE_6__.LandingLoadingComponent, _personal_src_app_components_suite_landing_suite_scrollnav_suite_scrollnav_component__WEBPACK_IMPORTED_MODULE_7__.SuiteScrollnavComponent, _personal_src_app_components_suite_landing_guest_top_guest_top_component__WEBPACK_IMPORTED_MODULE_8__.GuestTopComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJndWVzdC1sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 11243:
/*!*******************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/guest-landing-page/guest-landing-page.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuestLandingPageModule": () => (/* binding */ GuestLandingPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _guest_landing_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guest-landing-page-routing.module */ 50912);
/* harmony import */ var projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/application/src/app/components/main-navbar/main-navbar.module */ 7264);
/* harmony import */ var projects_personal_src_app_components_suite_landing_suite_landing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/components/suite-landing/suite-landing.module */ 69987);
/* harmony import */ var _guest_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guest-landing-page.component */ 66812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);






class GuestLandingPageModule {
}
GuestLandingPageModule.ɵfac = function GuestLandingPageModule_Factory(t) { return new (t || GuestLandingPageModule)(); };
GuestLandingPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: GuestLandingPageModule });
GuestLandingPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _guest_landing_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.GuestLandingPageRoutingModule,
            projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
            projects_personal_src_app_components_suite_landing_suite_landing_module__WEBPACK_IMPORTED_MODULE_2__.SuiteLandingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GuestLandingPageModule, { declarations: [_guest_landing_page_component__WEBPACK_IMPORTED_MODULE_3__.GuestLandingPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _guest_landing_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.GuestLandingPageRoutingModule,
        projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
        projects_personal_src_app_components_suite_landing_suite_landing_module__WEBPACK_IMPORTED_MODULE_2__.SuiteLandingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_restaurant_src_app_pages_guest-landing-page_guest-landing-page_module_ts.js.map