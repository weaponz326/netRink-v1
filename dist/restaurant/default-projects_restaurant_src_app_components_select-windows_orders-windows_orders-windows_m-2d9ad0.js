"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["default-projects_restaurant_src_app_components_select-windows_orders-windows_orders-windows_m-2d9ad0"],{

/***/ 57634:
/*!*******************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/select-windows/orders-windows/orders-windows.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersWindowsModule": () => (/* binding */ OrdersWindowsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var smart_webcomponents_angular_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smart-webcomponents-angular/grid */ 50537);
/* harmony import */ var smart_webcomponents_angular_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smart-webcomponents-angular/window */ 42520);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _select_order_select_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-order/select-order.component */ 57276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);






class OrdersWindowsModule {
}
OrdersWindowsModule.ɵfac = function OrdersWindowsModule_Factory(t) { return new (t || OrdersWindowsModule)(); };
OrdersWindowsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: OrdersWindowsModule });
OrdersWindowsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            smart_webcomponents_angular_grid__WEBPACK_IMPORTED_MODULE_0__.GridModule,
            smart_webcomponents_angular_window__WEBPACK_IMPORTED_MODULE_1__.WindowModule,
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](OrdersWindowsModule, { declarations: [_select_order_select_order_component__WEBPACK_IMPORTED_MODULE_3__.SelectOrderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        smart_webcomponents_angular_grid__WEBPACK_IMPORTED_MODULE_0__.GridModule,
        smart_webcomponents_angular_window__WEBPACK_IMPORTED_MODULE_1__.WindowModule,
        projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule], exports: [_select_order_select_order_component__WEBPACK_IMPORTED_MODULE_3__.SelectOrderComponent] }); })();


/***/ }),

/***/ 57276:
/*!*********************************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/select-windows/orders-windows/select-order/select-order.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectOrderComponent": () => (/* binding */ SelectOrderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var projects_restaurant_src_app_services_modules_orders_api_orders_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/orders-api/orders-api.service */ 11766);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 7005);






const _c0 = ["openButtonElementReference"];
const _c1 = ["closeButtonElementReference"];
const _c2 = ["connectionToastComponentReference"];
function SelectOrderComponent_i_16_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectOrderComponent_i_16_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.sortTable("order_code", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectOrderComponent_i_17_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectOrderComponent_i_17_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.sortTable("order_code", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectOrderComponent_i_18_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectOrderComponent_i_18_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.sortTable("order_code", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectOrderComponent_i_21_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectOrderComponent_i_21_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.sortTable("order_date", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectOrderComponent_i_22_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectOrderComponent_i_22_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.sortTable("order_date", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectOrderComponent_i_23_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectOrderComponent_i_23_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.sortTable("order_date", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectOrderComponent_i_26_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectOrderComponent_i_26_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r30.sortTable("customer_name", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectOrderComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectOrderComponent_i_27_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r32.sortTable("customer_name", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectOrderComponent_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectOrderComponent_i_28_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r34.sortTable("customer_name", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectOrderComponent_i_31_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectOrderComponent_i_31_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r36.sortTable("order_date", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectOrderComponent_i_32_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectOrderComponent_i_32_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r38.sortTable("order_date", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectOrderComponent_i_33_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectOrderComponent_i_33_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r40.sortTable("order_date", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectOrderComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dblclick", function SelectOrderComponent_tr_35_Template_tr_dblclick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44); const data_r42 = restoredCtx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r43.selectRow(data_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r42 == null ? null : data_r42.data().order_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 4, data_r42 == null ? null : data_r42.data().order_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r42 == null ? null : data_r42.data().customer.customer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r42 == null ? null : data_r42.data().total_amount);
} }
function SelectOrderComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectOrderComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class SelectOrderComponent {
    constructor(ordersApi) {
        this.ordersApi = ordersApi;
        this.rowSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.ordersGridData = [];
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
    }
    openModal() {
        this.getAccountOrder();
        this.openButton.nativeElement.click();
    }
    getAccountOrder() {
        this.isFetchingGridData = true;
        this.ordersApi.getAccountOrder(this.sortParams, 15)
            .then((res) => {
            console.log(res);
            this.ordersGridData = res.docs;
            this.isFetchingGridData = false;
            this.prevStartAt = this.firstInResponse;
            this.nextStartAfter = res.docs[res.docs.length - 1];
            this.firstInResponse = res.docs[0];
            this.pageNumber = 1;
            if (!res.docs.length)
                this.isDataAvailable = false;
            if (!res.docs.length || res.docs.length < 15) {
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
        this.ordersApi.getAccountOrderNext(this.sortParams, 15, this.nextStartAfter)
            .then((res) => {
            console.log(res);
            this.ordersGridData = res.docs;
            this.isFetchingGridData = false;
            this.prevStartAt = this.firstInResponse;
            this.nextStartAfter = res.docs[res.docs.length - 1];
            this.firstInResponse = res.docs[0];
            this.pageNumber++;
            if (res.docs.length < 15) {
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
        this.ordersApi.getAccountOrderPrev(this.sortParams, 15, this.prevStartAt)
            .then((res) => {
            console.log(res);
            this.ordersGridData = res.docs;
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
        this.getAccountOrder();
    }
    selectRow(row) {
        this.rowSelected.emit(row);
        this.closeButton.nativeElement.click();
        console.log(row);
    }
}
SelectOrderComponent.ɵfac = function SelectOrderComponent_Factory(t) { return new (t || SelectOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_orders_api_orders_api_service__WEBPACK_IMPORTED_MODULE_1__.OrdersApiService)); };
SelectOrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SelectOrderComponent, selectors: [["app-select-order"]], viewQuery: function SelectOrderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.openButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.closeButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, outputs: { rowSelected: "rowSelected" }, decls: 57, vars: 20, consts: [["data-bs-toggle", "modal", "data-bs-target", "#selectOrderModal", 3, "hidden"], ["openButtonElementReference", ""], ["id", "selectOrderModal", "tabindex", "-1", "aria-labelledby", "selectOrderModalLabel", "aria-hidden", "true", 1, "modal", "fade", "select-table-modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header", "bg-light"], ["id", "selectOrderModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "table", "table-bordered", "table-sm", "w-100", "page-table"], [1, "bg-light"], ["width", "20%"], ["class", "bi bi-filter float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-down float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-up float-end list-pointer", 3, "click", 4, "ngIf"], ["width", "25%"], ["width", "35%"], ["class", "table-pointer", 3, "dblclick", 4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["colspan", "4"], ["aria-label", "Page navigation", 1, "nav-light", "float-end"], [1, "pagination", "pagination-sm", "mb-0", "justify-content-end"], [1, "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-left-fill"], [1, "page-item"], ["href", "#", "aria-label", "Current", 1, "page-link", 3, "click"], ["href", "#", "aria-label", "Last", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-right-fill"], ["closeButtonElementReference", ""], ["connectionToastComponentReference", ""], [1, "bi", "bi-filter", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-down", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-up", "float-end", "list-pointer", 3, "click"], [1, "table-pointer", 3, "dblclick"], [1, "text-center"], ["role", "status", 1, "spinner-grow", "m-4"], [1, "visually-hidden"], [1, "m-4"]], template: function SelectOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Select Restaurant Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Order ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SelectOrderComponent_i_16_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, SelectOrderComponent_i_17_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SelectOrderComponent_i_18_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Order Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, SelectOrderComponent_i_21_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SelectOrderComponent_i_22_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SelectOrderComponent_i_23_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Customer Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, SelectOrderComponent_i_26_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, SelectOrderComponent_i_27_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, SelectOrderComponent_i_28_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Total Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, SelectOrderComponent_i_31_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, SelectOrderComponent_i_32_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, SelectOrderComponent_i_33_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, SelectOrderComponent_tr_35_Template, 10, 6, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, SelectOrderComponent_tr_36_Template, 5, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, SelectOrderComponent_tr_37_Template, 4, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "nav", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectOrderComponent_Template_a_click_44_listener($event) { return ctx.previousPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectOrderComponent_Template_a_click_47_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectOrderComponent_Template_a_click_50_listener($event) { return ctx.nextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 0, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Launch demo modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "app-connection-toast", null, 30);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "order_code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "order_code" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "order_code" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "order_date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "order_date" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "order_date" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "customer_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "customer_name" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "customer_name" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "order_date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "order_date" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "order_date" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ordersGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isDataAvailable && !ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.disablePrev ? "disabled" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.pageNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.disableNext ? "disabled" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3Qtb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 16827:
/*!*******************************************************************************************!*\
  !*** ./projects/restaurant/src/app/services/modules/payments-api/payments-api.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsApiService": () => (/* binding */ PaymentsApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);


class PaymentsApiService {
    constructor(afs) {
        this.afs = afs;
        this.paymentRef = this.afs.collection('restaurant/module_payments/restaurant_payment');
    }
    // payments
    createPayment(payment) {
        return this.paymentRef.add(payment);
    }
    getPayment() {
        return this.paymentRef.doc(String(sessionStorage.getItem('restaurant_payment_id'))).ref.get();
    }
    updatePayment(payment) {
        return this.paymentRef.doc(String(sessionStorage.getItem('restaurant_payment_id'))).update(payment);
    }
    deletePayment() {
        return this.paymentRef.doc(String(sessionStorage.getItem('restaurant_payment_id'))).delete();
    }
    getAccountPayment(sorting, pageSize) {
        return this.paymentRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .limit(pageSize)
            .get();
    }
    getAccountPaymentNext(sorting, pageSize, pageStart) {
        return this.paymentRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getAccountPaymentPrev(sorting, pageSize, pageStart) {
        return this.paymentRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllAccountPayment() {
        return this.paymentRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // dashboard
    getWeekPayment(startDate, endDate) {
        return this.paymentRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .where("created_at", "<", startDate).where("created_at", ">", endDate)
            .get();
    }
}
PaymentsApiService.ɵfac = function PaymentsApiService_Factory(t) { return new (t || PaymentsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
PaymentsApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaymentsApiService, factory: PaymentsApiService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-projects_restaurant_src_app_components_select-windows_orders-windows_orders-windows_m-2d9ad0.js.map