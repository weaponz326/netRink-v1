(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["main"],{

/***/ 78421:
/*!*************************************************************!*\
  !*** ./projects/personal/src/app/guards/auth/auth.guard.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        if (!!localStorage.getItem('personal_id')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/auth/login');
            return false;
        }
    }
    canActivateChild(childRoute) {
        if (!!localStorage.getItem('personal_id')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/auth/login');
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 15967:
/*!***********************************************************!*\
  !*** ./projects/restaurant/src/app/app-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_personal_src_app_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/personal/src/app/guards/auth/auth.guard */ 78421);
/* harmony import */ var projects_restaurant_src_app_guards_account_account_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/restaurant/src/app/guards/account/account.guard */ 11854);
/* harmony import */ var projects_restaurant_src_app_guards_access_admin_admin_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/guards/access/admin/admin.guard */ 6586);
/* harmony import */ var projects_restaurant_src_app_guards_access_portal_portal_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/restaurant/src/app/guards/access/portal/portal.guard */ 67122);
/* harmony import */ var projects_restaurant_src_app_guards_access_settings_settings_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/restaurant/src/app/guards/access/settings/settings.guard */ 56044);
/* harmony import */ var projects_restaurant_src_app_guards_access_menu_menu_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/restaurant/src/app/guards/access/menu/menu.guard */ 42703);
/* harmony import */ var projects_restaurant_src_app_guards_access_staff_staff_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/restaurant/src/app/guards/access/staff/staff.guard */ 89975);
/* harmony import */ var projects_restaurant_src_app_guards_access_tables_tables_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/restaurant/src/app/guards/access/tables/tables.guard */ 37440);
/* harmony import */ var projects_restaurant_src_app_guards_access_customers_customers_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! projects/restaurant/src/app/guards/access/customers/customers.guard */ 89635);
/* harmony import */ var projects_restaurant_src_app_guards_access_deliveries_deliveries_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! projects/restaurant/src/app/guards/access/deliveries/deliveries.guard */ 63943);
/* harmony import */ var projects_restaurant_src_app_guards_access_payments_payments_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! projects/restaurant/src/app/guards/access/payments/payments.guard */ 29776);
/* harmony import */ var projects_restaurant_src_app_guards_access_roster_roster_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! projects/restaurant/src/app/guards/access/roster/roster.guard */ 69795);
/* harmony import */ var projects_restaurant_src_app_guards_access_reservations_reservations_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! projects/restaurant/src/app/guards/access/reservations/reservations.guard */ 98969);
/* harmony import */ var projects_restaurant_src_app_guards_access_orders_orders_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! projects/restaurant/src/app/guards/access/orders/orders.guard */ 17613);
/* harmony import */ var projects_restaurant_src_app_guards_access_kitchen_stock_kitchen_stock_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! projects/restaurant/src/app/guards/access/kitchen-stock/kitchen-stock.guard */ 73371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 1858);


















const routes = [
    {
        path: "",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-projects_personal_src_app_components_suite-landing_suite-landing_module_ts"), __webpack_require__.e("projects_restaurant_src_app_pages_guest-landing-page_guest-landing-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/guest-landing-page/guest-landing-page.module */ 11243)).then(m => m.GuestLandingPageModule)
    },
    {
        path: "guest",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-projects_personal_src_app_components_suite-landing_suite-landing_module_ts"), __webpack_require__.e("projects_restaurant_src_app_pages_guest-landing-page_guest-landing-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/guest-landing-page/guest-landing-page.module */ 11243)).then(m => m.GuestLandingPageModule)
    },
    {
        path: "user",
        canActivate: [projects_personal_src_app_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-projects_personal_src_app_components_suite-landing_suite-landing_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_restaurant_src_app_pages_user-landing-page_user-landing-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/user-landing-page/user-landing-page.module */ 88462)).then(m => m.UserLandingPageModule)
    },
    {
        path: "auth",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-projects_personal_src_app_components_auth-forms_auth-forms_module_ts"), __webpack_require__.e("projects_personal_src_app_pages_auth-page_auth-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! projects/personal/src/app/pages/auth-page/auth-page.module */ 48674)).then(m => m.AuthPageModule)
    },
    {
        path: "register",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-projects_personal_src_app_components_auth-forms_auth-forms_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_restaurant_src_app_pages_register-page_register-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register-page/register-page.module */ 12071)).then(m => m.RegisterPageModule)
    },
    {
        path: "home",
        canActivate: [projects_restaurant_src_app_guards_account_account_guard__WEBPACK_IMPORTED_MODULE_1__.AccountGuard],
        canActivateChild: [projects_restaurant_src_app_guards_account_account_guard__WEBPACK_IMPORTED_MODULE_1__.AccountGuard],
        children: [
            {
                path: "",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_restaurant_src_app_pages_home-page_home-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home-page/home-page.module */ 45996)).then(m => m.HomePageModule)
            },
            {
                path: "admin",
                canActivate: [projects_restaurant_src_app_guards_access_admin_admin_guard__WEBPACK_IMPORTED_MODULE_2__.AdminGuard],
                canActivateChild: [projects_restaurant_src_app_guards_access_admin_admin_guard__WEBPACK_IMPORTED_MODULE_2__.AdminGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("common"), __webpack_require__.e("projects_restaurant_src_app_pages_modules_admin-page_admin-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/admin-page/admin-page.module */ 25993)).then(m => m.AdminPageModule)
            },
            {
                path: "portal",
                canActivate: [projects_restaurant_src_app_guards_access_portal_portal_guard__WEBPACK_IMPORTED_MODULE_3__.PortalGuard],
                canActivateChild: [projects_restaurant_src_app_guards_access_portal_portal_guard__WEBPACK_IMPORTED_MODULE_3__.PortalGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js-node_modules_smart-webcomponents-an-4b4794"), __webpack_require__.e("default-projects_restaurant_src_app_components_select-windows_customers-windows_customers-win-0a6361"), __webpack_require__.e("default-projects_restaurant_src_app_components_select-windows_menu-windows_menu-windows_modul-900d2b"), __webpack_require__.e("default-projects_restaurant_src_app_components_select-windows_staff-windows_staff-windows_mod-4556f0"), __webpack_require__.e("default-projects_restaurant_src_app_components_select-windows_orders-windows_orders-windows_m-2d9ad0"), __webpack_require__.e("common"), __webpack_require__.e("projects_restaurant_src_app_pages_modules_portal-page_portal-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/portal-page/portal-page.module */ 4374)).then(m => m.PortalPageModule)
            },
            {
                path: "settings",
                canActivate: [projects_restaurant_src_app_guards_access_settings_settings_guard__WEBPACK_IMPORTED_MODULE_4__.SettingsGuard],
                canActivateChild: [projects_restaurant_src_app_guards_access_settings_settings_guard__WEBPACK_IMPORTED_MODULE_4__.SettingsGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("common"), __webpack_require__.e("projects_restaurant_src_app_pages_modules_settings-page_settings-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/settings-page/settings-page.module */ 16721)).then(m => m.SettingsPageModule)
            },
            {
                path: "menu",
                canActivate: [projects_restaurant_src_app_guards_access_menu_menu_guard__WEBPACK_IMPORTED_MODULE_5__.MenuGuard],
                canActivateChild: [projects_restaurant_src_app_guards_access_menu_menu_guard__WEBPACK_IMPORTED_MODULE_5__.MenuGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("default-projects_personal_src_app_services_pdf-print_pdf-print_service_ts"), __webpack_require__.e("projects_restaurant_src_app_pages_modules_menu-page_menu-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/menu-page/menu-page.module */ 36768)).then(m => m.MenuPageModule)
            },
            {
                path: "staff",
                canActivate: [projects_restaurant_src_app_guards_access_staff_staff_guard__WEBPACK_IMPORTED_MODULE_6__.StaffGuard],
                canActivateChild: [projects_restaurant_src_app_guards_access_staff_staff_guard__WEBPACK_IMPORTED_MODULE_6__.StaffGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("default-projects_personal_src_app_services_pdf-print_pdf-print_service_ts"), __webpack_require__.e("projects_restaurant_src_app_pages_modules_staff-page_staff-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/staff-page/staff-page.module */ 12044)).then(m => m.StaffPageModule)
            },
            {
                path: "tables",
                canActivate: [projects_restaurant_src_app_guards_access_tables_tables_guard__WEBPACK_IMPORTED_MODULE_7__.TablesGuard],
                canActivateChild: [projects_restaurant_src_app_guards_access_tables_tables_guard__WEBPACK_IMPORTED_MODULE_7__.TablesGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("default-projects_personal_src_app_services_pdf-print_pdf-print_service_ts"), __webpack_require__.e("projects_restaurant_src_app_pages_modules_tables-page_tables-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/tables-page/tables-page.module */ 23616)).then(m => m.TablesPageModule)
            },
            {
                path: "customers",
                canActivate: [projects_restaurant_src_app_guards_access_customers_customers_guard__WEBPACK_IMPORTED_MODULE_8__.CustomersGuard],
                canActivateChild: [projects_restaurant_src_app_guards_access_customers_customers_guard__WEBPACK_IMPORTED_MODULE_8__.CustomersGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("default-projects_personal_src_app_services_pdf-print_pdf-print_service_ts"), __webpack_require__.e("projects_restaurant_src_app_pages_modules_customers-page_customers-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/customers-page/customers-page.module */ 70358)).then(m => m.CustomersPageModule)
            },
            {
                path: "deliveries",
                canActivate: [projects_restaurant_src_app_guards_access_deliveries_deliveries_guard__WEBPACK_IMPORTED_MODULE_9__.DeliveriesGuard],
                canActivateChild: [projects_restaurant_src_app_guards_access_deliveries_deliveries_guard__WEBPACK_IMPORTED_MODULE_9__.DeliveriesGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("default-projects_personal_src_app_services_pdf-print_pdf-print_service_ts"), __webpack_require__.e("projects_restaurant_src_app_pages_modules_deliveries-page_deliveries-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/deliveries-page/deliveries-page.module */ 41100)).then(m => m.DeliveriesPageModule)
            },
            {
                path: "payments",
                canActivate: [projects_restaurant_src_app_guards_access_payments_payments_guard__WEBPACK_IMPORTED_MODULE_10__.PaymentsGuard],
                canActivateChild: [projects_restaurant_src_app_guards_access_payments_payments_guard__WEBPACK_IMPORTED_MODULE_10__.PaymentsGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("default-projects_personal_src_app_services_pdf-print_pdf-print_service_ts"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js-node_modules_smart-webcomponents-an-4b4794"), __webpack_require__.e("default-projects_restaurant_src_app_components_select-windows_orders-windows_orders-windows_m-2d9ad0"), __webpack_require__.e("projects_restaurant_src_app_pages_modules_payments-page_payments-page_module_ts-projects_rest-13ab97")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/payments-page/payments-page.module */ 89288)).then(m => m.PaymentsPageModule)
            },
            {
                path: "roster",
                canActivate: [projects_restaurant_src_app_guards_access_roster_roster_guard__WEBPACK_IMPORTED_MODULE_11__.RosterGuard],
                canActivateChild: [projects_restaurant_src_app_guards_access_roster_roster_guard__WEBPACK_IMPORTED_MODULE_11__.RosterGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js-node_modules_smart-webcomponents-an-4b4794"), __webpack_require__.e("default-projects_restaurant_src_app_components_select-windows_staff-windows_staff-windows_mod-4556f0"), __webpack_require__.e("projects_restaurant_src_app_pages_modules_roster-page_roster-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/roster-page/roster-page.module */ 25632)).then(m => m.RosterPageModule)
            },
            {
                path: "reservations",
                canActivate: [projects_restaurant_src_app_guards_access_reservations_reservations_guard__WEBPACK_IMPORTED_MODULE_12__.ReservationsGuard],
                canActivateChild: [projects_restaurant_src_app_guards_access_reservations_reservations_guard__WEBPACK_IMPORTED_MODULE_12__.ReservationsGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("default-projects_personal_src_app_services_pdf-print_pdf-print_service_ts"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js-node_modules_smart-webcomponents-an-4b4794"), __webpack_require__.e("default-projects_restaurant_src_app_components_select-windows_customers-windows_customers-win-0a6361"), __webpack_require__.e("common"), __webpack_require__.e("projects_restaurant_src_app_pages_modules_reservations-page_reservations-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/reservations-page/reservations-page.module */ 36006)).then(m => m.ReservationsPageModule)
            },
            {
                path: "orders",
                canActivate: [projects_restaurant_src_app_guards_access_orders_orders_guard__WEBPACK_IMPORTED_MODULE_13__.OrdersGuard],
                canActivateChild: [projects_restaurant_src_app_guards_access_orders_orders_guard__WEBPACK_IMPORTED_MODULE_13__.OrdersGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("default-projects_personal_src_app_services_pdf-print_pdf-print_service_ts"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js-node_modules_smart-webcomponents-an-4b4794"), __webpack_require__.e("default-projects_restaurant_src_app_components_select-windows_customers-windows_customers-win-0a6361"), __webpack_require__.e("default-projects_restaurant_src_app_components_select-windows_menu-windows_menu-windows_modul-900d2b"), __webpack_require__.e("projects_restaurant_src_app_pages_modules_orders-page_orders-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/orders-page/orders-page.module */ 56967)).then(m => m.OrdersPageModule)
            },
            {
                path: "kitchen-stock",
                canActivate: [projects_restaurant_src_app_guards_access_kitchen_stock_kitchen_stock_guard__WEBPACK_IMPORTED_MODULE_14__.KitchenStockGuard],
                canActivateChild: [projects_restaurant_src_app_guards_account_account_guard__WEBPACK_IMPORTED_MODULE_1__.AccountGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("default-projects_personal_src_app_services_pdf-print_pdf-print_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_restaurant_src_app_pages_modules_kitchen-stock-page_kitchen-stock-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/kitchen-stock-page/kitchen-stock-page.module */ 17006)).then(m => m.KitchenStockPageModule)
            },
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule] }); })();


/***/ }),

/***/ 8309:
/*!******************************************************!*\
  !*** ./projects/restaurant/src/app/app.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class AppComponent {
    constructor() {
        this.title = 'restaurant';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 98632:
/*!***************************************************!*\
  !*** ./projects/restaurant/src/app/app.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 94462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 33549);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7355);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat */ 27678);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/database */ 43914);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/storage */ 43462);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-google-places-autocomplete */ 37544);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 3241);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 15967);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 8309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.firebase),
            _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_11__.AngularFireDatabaseModule,
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_12__.AngularFireStorageModule,
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__.GooglePlaceModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule, _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_11__.AngularFireDatabaseModule,
        _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_12__.AngularFireStorageModule,
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__.GooglePlaceModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule] }); })();


/***/ }),

/***/ 6586:
/*!************************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/access/admin/admin.guard.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminGuard": () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class AdminGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        let adminAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).admin_access;
        if (adminAccess) {
            return true;
        }
        else {
            return false;
        }
    }
    canActivateChild(childRoute) {
        let adminAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).admin_access;
        if (adminAccess) {
            return true;
        }
        else {
            return false;
        }
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AdminGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 89635:
/*!********************************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/access/customers/customers.guard.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersGuard": () => (/* binding */ CustomersGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class CustomersGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        let customersAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).customers_access;
        if (customersAccess) {
            return true;
        }
        else {
            return false;
        }
    }
    canActivateChild(childRoute) {
        let customersAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).customers_access;
        if (customersAccess) {
            return true;
        }
        else {
            return false;
        }
    }
}
CustomersGuard.ɵfac = function CustomersGuard_Factory(t) { return new (t || CustomersGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
CustomersGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomersGuard, factory: CustomersGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 63943:
/*!**********************************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/access/deliveries/deliveries.guard.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveriesGuard": () => (/* binding */ DeliveriesGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class DeliveriesGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        let deliveriesAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).deliveries_access;
        if (deliveriesAccess) {
            return true;
        }
        else {
            return false;
        }
    }
    canActivateChild(childRoute) {
        let deliveriesAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).deliveries_access;
        if (deliveriesAccess) {
            return true;
        }
        else {
            return false;
        }
    }
}
DeliveriesGuard.ɵfac = function DeliveriesGuard_Factory(t) { return new (t || DeliveriesGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
DeliveriesGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeliveriesGuard, factory: DeliveriesGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 73371:
/*!****************************************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/access/kitchen-stock/kitchen-stock.guard.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KitchenStockGuard": () => (/* binding */ KitchenStockGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class KitchenStockGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        let kitchenStockAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).kitchen_stock_access;
        if (kitchenStockAccess) {
            return true;
        }
        else {
            return false;
        }
    }
    canActivateChild(childRoute) {
        let kitchenStockAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).kitchen_stock_access;
        if (kitchenStockAccess) {
            return true;
        }
        else {
            return false;
        }
    }
}
KitchenStockGuard.ɵfac = function KitchenStockGuard_Factory(t) { return new (t || KitchenStockGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
KitchenStockGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KitchenStockGuard, factory: KitchenStockGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 42703:
/*!**********************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/access/menu/menu.guard.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuGuard": () => (/* binding */ MenuGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class MenuGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        let menuAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).menu_access;
        if (menuAccess) {
            return true;
        }
        else {
            return false;
        }
    }
    canActivateChild(childRoute) {
        let menuAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).menu_access;
        if (menuAccess) {
            return true;
        }
        else {
            return false;
        }
    }
}
MenuGuard.ɵfac = function MenuGuard_Factory(t) { return new (t || MenuGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
MenuGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuGuard, factory: MenuGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 17613:
/*!**************************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/access/orders/orders.guard.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersGuard": () => (/* binding */ OrdersGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class OrdersGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        let ordersAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).orders_access;
        if (ordersAccess) {
            return true;
        }
        else {
            return false;
        }
    }
    canActivateChild(childRoute) {
        let ordersAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).orders_access;
        if (ordersAccess) {
            return true;
        }
        else {
            return false;
        }
    }
}
OrdersGuard.ɵfac = function OrdersGuard_Factory(t) { return new (t || OrdersGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
OrdersGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdersGuard, factory: OrdersGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 29776:
/*!******************************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/access/payments/payments.guard.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsGuard": () => (/* binding */ PaymentsGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class PaymentsGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        let paymentsAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).payments_access;
        if (paymentsAccess) {
            return true;
        }
        else {
            return false;
        }
    }
    canActivateChild(childRoute) {
        let paymentsAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).payments_access;
        if (paymentsAccess) {
            return true;
        }
        else {
            return false;
        }
    }
}
PaymentsGuard.ɵfac = function PaymentsGuard_Factory(t) { return new (t || PaymentsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
PaymentsGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaymentsGuard, factory: PaymentsGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 67122:
/*!**************************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/access/portal/portal.guard.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalGuard": () => (/* binding */ PortalGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class PortalGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        let portalAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).portal_access;
        if (portalAccess) {
            return true;
        }
        else {
            return false;
        }
    }
    canActivateChild(childRoute) {
        let portalAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).portal_access;
        if (portalAccess) {
            return true;
        }
        else {
            return false;
        }
    }
}
PortalGuard.ɵfac = function PortalGuard_Factory(t) { return new (t || PortalGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
PortalGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PortalGuard, factory: PortalGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 98969:
/*!**************************************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/access/reservations/reservations.guard.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationsGuard": () => (/* binding */ ReservationsGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class ReservationsGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        let reservationsAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).reservations_access;
        if (reservationsAccess) {
            return true;
        }
        else {
            return false;
        }
    }
    canActivateChild(childRoute) {
        let reservationsAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).reservations_access;
        if (reservationsAccess) {
            return true;
        }
        else {
            return false;
        }
    }
}
ReservationsGuard.ɵfac = function ReservationsGuard_Factory(t) { return new (t || ReservationsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
ReservationsGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReservationsGuard, factory: ReservationsGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 69795:
/*!**************************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/access/roster/roster.guard.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RosterGuard": () => (/* binding */ RosterGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class RosterGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        let rosterAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).roster_access;
        if (rosterAccess) {
            return true;
        }
        else {
            return false;
        }
    }
    canActivateChild(childRoute) {
        let rosterAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).roster_access;
        if (rosterAccess) {
            return true;
        }
        else {
            return false;
        }
    }
}
RosterGuard.ɵfac = function RosterGuard_Factory(t) { return new (t || RosterGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
RosterGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RosterGuard, factory: RosterGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 56044:
/*!******************************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/access/settings/settings.guard.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsGuard": () => (/* binding */ SettingsGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class SettingsGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        let settingsAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).settings_access;
        if (settingsAccess) {
            return true;
        }
        else {
            return false;
        }
    }
    canActivateChild(childRoute) {
        let settingsAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).settings_access;
        if (settingsAccess) {
            return true;
        }
        else {
            return false;
        }
    }
}
SettingsGuard.ɵfac = function SettingsGuard_Factory(t) { return new (t || SettingsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
SettingsGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsGuard, factory: SettingsGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 89975:
/*!************************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/access/staff/staff.guard.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffGuard": () => (/* binding */ StaffGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class StaffGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        let staffAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).staff_access;
        if (staffAccess) {
            return true;
        }
        else {
            return false;
        }
    }
    canActivateChild(childRoute) {
        let staffAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).staff_access;
        if (staffAccess) {
            return true;
        }
        else {
            return false;
        }
    }
}
StaffGuard.ɵfac = function StaffGuard_Factory(t) { return new (t || StaffGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
StaffGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StaffGuard, factory: StaffGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 37440:
/*!**************************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/access/tables/tables.guard.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesGuard": () => (/* binding */ TablesGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class TablesGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        let tablesAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).tables_access;
        if (tablesAccess) {
            return true;
        }
        else {
            return false;
        }
    }
    canActivateChild(childRoute) {
        let tablesAccess = JSON.parse(localStorage.getItem('restaurantUserAccess')).tables_access;
        if (tablesAccess) {
            return true;
        }
        else {
            return false;
        }
    }
}
TablesGuard.ɵfac = function TablesGuard_Factory(t) { return new (t || TablesGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
TablesGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TablesGuard, factory: TablesGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 11854:
/*!*********************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/account/account.guard.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountGuard": () => (/* binding */ AccountGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class AccountGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        if (!!localStorage.getItem('restaurant_id')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/register');
            return false;
        }
    }
    canActivateChild(childRoute) {
        if (!!localStorage.getItem('restaurant_id')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/register');
            return false;
        }
    }
}
AccountGuard.ɵfac = function AccountGuard_Factory(t) { return new (t || AccountGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AccountGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountGuard, factory: AccountGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3241:
/*!*************************************************************!*\
  !*** ./projects/restaurant/src/environments/environment.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    firebase: {
        apiKey: "AIzaSyC-pUZi6j5AecjEKiBaQL1nTZrKWB_J9w0",
        authDomain: "netrink-test-v1.firebaseapp.com",
        databaseURL: "https://netrink-test-v1-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "netrink-test-v1",
        storageBucket: "netrink-test-v1.appspot.com",
        messagingSenderId: "140608103001",
        appId: "1:140608103001:web:b8cbede412b0a45d78c748",
        measurementId: "G-JYYP2YE5FW"
    },
    paystackTestPublicKey: "pk_test_275f8f544fab9c9c78a1e8789d8c883f0102f708",
    paystackLivePublicKey: "pk_live_921d89f7a824979fe69d35154cce546431f15d7b",
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

/***/ 99927:
/*!*****************************************!*\
  !*** ./projects/restaurant/src/main.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 94462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 98632);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 3241);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
    if (window) {
        window.console.log = function () { };
    }
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 31635:
/*!***************************************************************************!*\
  !*** ./projects/restaurant/$_lazy_route_resources/ lazy namespace object ***!
  \***************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 31635;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(99927)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map