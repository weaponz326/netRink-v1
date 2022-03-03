"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["projects_restaurant_src_app_pages_user-landing-page_user-landing-page_module_ts"],{

/***/ 47555:
/*!*************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/user-landing-page/user-landing-page-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLandingPageRoutingModule": () => (/* binding */ UserLandingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _user_landing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-landing-page.component */ 15086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);




const routes = [
    { path: "", component: _user_landing_page_component__WEBPACK_IMPORTED_MODULE_0__.UserLandingPageComponent }
];
class UserLandingPageRoutingModule {
}
UserLandingPageRoutingModule.ɵfac = function UserLandingPageRoutingModule_Factory(t) { return new (t || UserLandingPageRoutingModule)(); };
UserLandingPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserLandingPageRoutingModule });
UserLandingPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserLandingPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 15086:
/*!********************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/user-landing-page/user-landing-page.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLandingPageComponent": () => (/* binding */ UserLandingPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _services_modules_admin_api_admin_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/modules/admin-api/admin-api.service */ 11934);
/* harmony import */ var _application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../application/src/app/components/main-navbar/main-navbar/main-navbar.component */ 28088);
/* harmony import */ var _personal_src_app_components_suite_landing_suite_scrollnav_suite_scrollnav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../personal/src/app/components/suite-landing/suite-scrollnav/suite-scrollnav.component */ 2415);
/* harmony import */ var _personal_src_app_components_suite_landing_user_top_user_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../personal/src/app/components/suite-landing/user-top/user-top.component */ 7017);
/* harmony import */ var _personal_src_app_components_suite_landing_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../personal/src/app/components/suite-landing/about/about.component */ 4822);
/* harmony import */ var _personal_src_app_components_suite_landing_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../personal/src/app/components/suite-landing/pricing/pricing.component */ 50131);
/* harmony import */ var _personal_src_app_components_suite_landing_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../personal/src/app/components/suite-landing/contact/contact.component */ 59929);
/* harmony import */ var _application_src_app_components_main_navbar_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../application/src/app/components/main-navbar/main-footer/main-footer.component */ 75971);










class UserLandingPageComponent {
    constructor(router, adminApi) {
        this.router = router;
        this.adminApi = adminApi;
        this.isAccountLoading = false;
    }
    ngOnInit() {
        this.getUserAccountUser();
    }
    getUserAccountUser() {
        this.isAccountLoading = true;
        this.adminApi.getUserAccountUser()
            .then((res) => {
            console.log(res);
            this.accountsData = res.docs;
            this.isAccountLoading = false;
        }, (err) => {
            console.log(err);
            this.isAccountLoading = false;
        });
    }
    activateAccount(data) {
        console.log(data);
        localStorage.setItem('restaurant_id', data.data().account.id);
        localStorage.setItem('restaurant_name', data.data().account.data.name);
        sessionStorage.setItem('restaurant_account_user_id', data.id);
        this.router.navigateByUrl('/home');
        // TODO: store selected account in server session
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
UserLandingPageComponent.ɵfac = function UserLandingPageComponent_Factory(t) { return new (t || UserLandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_modules_admin_api_admin_api_service__WEBPACK_IMPORTED_MODULE_0__.AdminApiService)); };
UserLandingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: UserLandingPageComponent, selectors: [["app-user-landing-page"]], decls: 7, vars: 8, consts: [[3, "navBrand", "source"], [3, "aboutEvent", "pricingEvent", "contactEvent"], [3, "suiteName", "accountsData", "isAccountLoading", "selectAccount"], ["id", "aboutComponentReference", 3, "suiteName", "suiteDetails"], ["id", "pricingComponentReference"], ["id", "contactComponentReference", 3, "suiteName"]], template: function UserLandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-main-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "app-suite-scrollnav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("aboutEvent", function UserLandingPageComponent_Template_app_suite_scrollnav_aboutEvent_1_listener() { return ctx.gotoAbout(); })("pricingEvent", function UserLandingPageComponent_Template_app_suite_scrollnav_pricingEvent_1_listener() { return ctx.gotoPricing(); })("contactEvent", function UserLandingPageComponent_Template_app_suite_scrollnav_contactEvent_1_listener() { return ctx.gotoContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "app-user-top", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectAccount", function UserLandingPageComponent_Template_app_user_top_selectAccount_2_listener($event) { return ctx.activateAccount($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-about", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-pricing", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-contact", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-main-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("navBrand", "nR Restaurant")("source", "Restaurant");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("suiteName", "Restaurant")("accountsData", ctx.accountsData)("isAccountLoading", ctx.isAccountLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("suiteName", "Restaurant")("suiteDetails", "netRink Restaurant helps manage all aspects of your catering establishment. Restaurant comes with a range of extensive modular apps that are designed to see you through your day-to-day operations effectively. The modular apps are well intergrated with each, allowing you to bring all aspects of your restaurant operations into a single perspective.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("suiteName", "Restaurant");
    } }, directives: [_application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_1__.MainNavbarComponent, _personal_src_app_components_suite_landing_suite_scrollnav_suite_scrollnav_component__WEBPACK_IMPORTED_MODULE_2__.SuiteScrollnavComponent, _personal_src_app_components_suite_landing_user_top_user_top_component__WEBPACK_IMPORTED_MODULE_3__.UserTopComponent, _personal_src_app_components_suite_landing_about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _personal_src_app_components_suite_landing_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__.PricingComponent, _personal_src_app_components_suite_landing_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent, _application_src_app_components_main_navbar_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_7__.MainFooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 88462:
/*!*****************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/user-landing-page/user-landing-page.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLandingPageModule": () => (/* binding */ UserLandingPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _user_landing_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-landing-page-routing.module */ 47555);
/* harmony import */ var projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/application/src/app/components/main-navbar/main-navbar.module */ 7264);
/* harmony import */ var projects_personal_src_app_components_suite_landing_suite_landing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/components/suite-landing/suite-landing.module */ 69987);
/* harmony import */ var _user_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-landing-page.component */ 15086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);






class UserLandingPageModule {
}
UserLandingPageModule.ɵfac = function UserLandingPageModule_Factory(t) { return new (t || UserLandingPageModule)(); };
UserLandingPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UserLandingPageModule });
UserLandingPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _user_landing_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserLandingPageRoutingModule,
            projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
            projects_personal_src_app_components_suite_landing_suite_landing_module__WEBPACK_IMPORTED_MODULE_2__.SuiteLandingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserLandingPageModule, { declarations: [_user_landing_page_component__WEBPACK_IMPORTED_MODULE_3__.UserLandingPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _user_landing_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserLandingPageRoutingModule,
        projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
        projects_personal_src_app_components_suite_landing_suite_landing_module__WEBPACK_IMPORTED_MODULE_2__.SuiteLandingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_restaurant_src_app_pages_user-landing-page_user-landing-page_module_ts.js.map