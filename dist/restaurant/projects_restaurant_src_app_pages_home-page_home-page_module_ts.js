"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["projects_restaurant_src_app_pages_home-page_home-page_module_ts"],{

/***/ 88805:
/*!**********************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/module-home/module-home.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleHomeModule": () => (/* binding */ ModuleHomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _module_home_module_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-home/module-home.component */ 43420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);





class ModuleHomeModule {
}
ModuleHomeModule.ɵfac = function ModuleHomeModule_Factory(t) { return new (t || ModuleHomeModule)(); };
ModuleHomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ModuleHomeModule });
ModuleHomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ModuleHomeModule, { declarations: [_module_home_module_home_component__WEBPACK_IMPORTED_MODULE_1__.ModuleHomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule], exports: [_module_home_module_home_component__WEBPACK_IMPORTED_MODULE_1__.ModuleHomeComponent] }); })();


/***/ }),

/***/ 43420:
/*!*************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/module-home/module-home/module-home.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModuleHomeComponent": () => (/* binding */ ModuleHomeComponent)
/* harmony export */ });
/* harmony import */ var projects_personal_src_app_components_module_utilities_access_toast_access_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../personal/src/app/components/module-utilities/access-toast/access-toast.component */ 30712);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_restaurant_src_app_services_modules_admin_api_admin_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/admin-api/admin-api.service */ 11934);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7005);








const _c0 = ["accessToastComponentReference"];
const _c1 = ["connectionToastComponentReference"];
function ModuleHomeComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 37);
} }
function ModuleHomeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class ModuleHomeComponent {
    constructor(adminApi) {
        this.adminApi = adminApi;
        this.isAccessLoading = false;
    }
    ngOnInit() {
        this.getUserAccess();
    }
    getUserAccess() {
        this.isAccessLoading = true;
        this.adminApi.getUserAccess()
            .then((res) => {
            console.log(res);
            this.access = res.data();
            const data = JSON.stringify(res.data());
            localStorage.setItem("restaurantUserAccess", data);
            this.isAccessLoading = false;
        }, (err) => {
            console.log(err);
            this.isAccessLoading = false;
            this.connectionToast.openToast();
        });
    }
    checkAccess(module) {
        console.log(this.access);
        if (module == "admin" && !this.access.admin_access)
            this.accessToast.openToast();
        else if (module == "portal" && !this.access.portal_access)
            this.accessToast.openToast();
        else if (module == "settings" && !this.access.settings_access)
            this.accessToast.openToast();
        else if (module == "menu" && !this.access.menu_access)
            this.accessToast.openToast();
        else if (module == "staff" && !this.access.staff_access)
            this.accessToast.openToast();
        else if (module == "tables" && !this.access.tables_access)
            this.accessToast.openToast();
        else if (module == "customers" && !this.access.customers_access)
            this.accessToast.openToast();
        else if (module == "deliveries" && !this.access.deliveries_access)
            this.accessToast.openToast();
        else if (module == "payments" && !this.access.payments_access)
            this.accessToast.openToast();
        else if (module == "roster" && !this.access.roster_access)
            this.accessToast.openToast();
        else if (module == "reservations" && !this.access.reservations_access)
            this.accessToast.openToast();
        else if (module == "orders" && !this.access.orders_access)
            this.accessToast.openToast();
        else
            console.log("Access granted :)");
    }
}
ModuleHomeComponent.ɵfac = function ModuleHomeComponent_Factory(t) { return new (t || ModuleHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_admin_api_admin_api_service__WEBPACK_IMPORTED_MODULE_2__.AdminApiService)); };
ModuleHomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ModuleHomeComponent, selectors: [["app-module-home"]], viewQuery: function ModuleHomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_access_toast_access_toast_component__WEBPACK_IMPORTED_MODULE_0__.AccessToastComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.accessToast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 93, vars: 2, consts: [[1, "navbar", "navbar-expand", "navbar-light", "bg-white", "topbar", "d-block", "mb-4", "static-top", "shadow"], [1, "text-center", "module-heading"], ["routerLink", "./"], [1, "mt-2"], ["class", "bi bi-house-fill me-2", 4, "ngIf"], ["class", "spinner-grow spinner-grow-sm me-2 mb-2", "role", "status", 4, "ngIf"], [1, "container", "home-div"], [1, "row", "my-3"], [1, "col-md-2", "col-sm-6", "text-center"], ["id", "portal", "routerLink", "/home/portal/dashboard", "data-bs-toggle", "tooltip", "title", "Interact with customers through netRink portal", 3, "click"], ["src", "assets/images/modules/portal.png", 1, "home-icons"], ["id", "menu", "routerLink", "/home/menu/dashboard", "data-bs-toggle", "tooltip", "title", "Plan and organize your menus", 3, "click"], ["src", "assets/images/modules/menu.png", 1, "home-icons"], ["id", "staff", "routerLink", "/home/staff/dashboard", "data-bs-toggle", "tooltip", "title", "Manage all staff", 3, "click"], ["src", "assets/images/modules/staff.png", 1, "home-icons"], ["id", "payments", "routerLink", "/home/payments/dashboard", "data-bs-toggle", "tooltip", "title", "Receive payment of bills from customers", 3, "click"], ["src", "assets/images/modules/payments.png", 1, "home-icons"], ["id", "orders", "routerLink", "/home/orders/dashboard", "data-bs-toggle", "tooltip", "title", "Receive orders and automatically generate bills", 3, "click"], ["src", "assets/images/modules/orders.png", 1, "home-icons"], ["id", "kitchenStock", "routerLink", "/home/kitchen-stock/dashboard", "data-bs-toggle", "tooltip", "title", "Keep track of the quantity of ingredients", 3, "click"], ["src", "assets/images/modules/kitchen_stock.png", 1, "home-icons"], ["id", "admin", "routerLink", "/home/admin/dashboard", "data-bs-toggle", "tooltip", "title", "Manage users and access levels", 3, "click"], ["src", "assets/images/modules/admin.png", 1, "home-icons"], ["id", "roster", "routerLink", "/home/roster/dashboard", "data-bs-toggle", "tooltip", "title", "Plan and manage staff shift and schedules", 3, "click"], ["src", "assets/images/modules/roster.png", 1, "home-icons"], ["id", "tables", "routerLink", "/home/tables/dashboard", "data-bs-toggle", "tooltip", "title", "Organize tables and manage other table activities", 3, "click"], ["src", "assets/images/modules/tables.png", 1, "home-icons"], ["id", "deliveries", "routerLink", "/home/deliveries/dashboard", "data-bs-toggle", "tooltip", "title", "Manage delivery operations", 3, "click"], ["src", "assets/images/modules/deliveries.png", 1, "home-icons"], ["id", "reservations", "routerLink", "/home/reservations/dashboard", "data-bs-toggle", "tooltip", "title", "Receive and plan reservations", 3, "click"], ["src", "assets/images/modules/reservations.png", 1, "home-icons"], ["id", "customers", "routerLink", "/home/customers/dashboard", "data-bs-toggle", "tooltip", "title", "Keep track of all your guests and customers", 3, "click"], ["src", "assets/images/modules/customers.png", 1, "home-icons"], ["id", "settings", "routerLink", "/home/settings/dashboard", "data-bs-toggle", "tooltip", "title", "Set configuarations for your modules", 3, "click"], ["src", "assets/images/modules/settings.png", 1, "home-icons"], ["accessToastComponentReference", ""], ["connectionToastComponentReference", ""], [1, "bi", "bi-house-fill", "me-2"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm", "me-2", "mb-2"], [1, "visually-hidden"]], template: function ModuleHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ModuleHomeComponent_i_4_Template, 1, 0, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ModuleHomeComponent_div_5_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModuleHomeComponent_Template_a_click_10_listener() { return ctx.checkAccess("portal"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModuleHomeComponent_Template_a_click_16_listener() { return ctx.checkAccess("menu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModuleHomeComponent_Template_a_click_22_listener() { return ctx.checkAccess("staff"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModuleHomeComponent_Template_a_click_28_listener() { return ctx.checkAccess("payments"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModuleHomeComponent_Template_a_click_34_listener() { return ctx.checkAccess("orders"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModuleHomeComponent_Template_a_click_40_listener() { return ctx.checkAccess("kitchen_stock"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Kitchen Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModuleHomeComponent_Template_a_click_47_listener() { return ctx.checkAccess("admin"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModuleHomeComponent_Template_a_click_53_listener() { return ctx.checkAccess("roster"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Roster");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModuleHomeComponent_Template_a_click_59_listener() { return ctx.checkAccess("tables"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModuleHomeComponent_Template_a_click_65_listener() { return ctx.checkAccess("deliveries"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Deliveries");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModuleHomeComponent_Template_a_click_71_listener() { return ctx.checkAccess("reservations"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Reservations");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModuleHomeComponent_Template_a_click_77_listener() { return ctx.checkAccess("customers"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModuleHomeComponent_Template_a_click_84_listener() { return ctx.checkAccess("settings"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "app-access-toast", null, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "app-connection-toast", null, 36);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isAccessLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isAccessLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, projects_personal_src_app_components_module_utilities_access_toast_access_toast_component__WEBPACK_IMPORTED_MODULE_0__.AccessToastComponent, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGUtaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 84917:
/*!*********************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/home-page/home-page-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.component */ 68663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);




const routes = [
    { path: "", component: _home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent }
];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); };
HomePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 68663:
/*!****************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/home-page/home-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../application/src/app/components/main-navbar/main-navbar/main-navbar.component */ 28088);
/* harmony import */ var _components_module_home_module_home_module_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/module-home/module-home/module-home.component */ 43420);



class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 2, vars: 2, consts: [[3, "navBrand", "source"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-main-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-module-home");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navBrand", "nR Restaurant")("source", "Restaurant");
    } }, directives: [_application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__.MainNavbarComponent, _components_module_home_module_home_module_home_component__WEBPACK_IMPORTED_MODULE_1__.ModuleHomeComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 45996:
/*!*************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/home-page/home-page.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _home_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page-routing.module */ 84917);
/* harmony import */ var projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/application/src/app/components/main-navbar/main-navbar.module */ 7264);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _components_module_home_module_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/module-home/module-home.module */ 88805);
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page.component */ 68663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);







class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _home_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
            _components_module_home_module_home_module__WEBPACK_IMPORTED_MODULE_3__.ModuleHomeModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_4__.HomePageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _home_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
        projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
        projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
        _components_module_home_module_home_module__WEBPACK_IMPORTED_MODULE_3__.ModuleHomeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_restaurant_src_app_pages_home-page_home-page_module_ts.js.map