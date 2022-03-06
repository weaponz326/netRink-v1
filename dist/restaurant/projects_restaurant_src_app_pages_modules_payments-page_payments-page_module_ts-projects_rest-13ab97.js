"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["projects_restaurant_src_app_pages_modules_payments-page_payments-page_module_ts-projects_rest-13ab97"],{

/***/ 14494:
/*!********************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/payments/all-payments/all-payments.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPaymentsComponent": () => (/* binding */ AllPaymentsComponent)
/* harmony export */ });
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_payments_api_payments_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/payments-api/payments-api.service */ 16827);
/* harmony import */ var projects_restaurant_src_app_services_printing_payments_print_payments_print_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/printing/payments-print/payments-print.service */ 44091);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);








const _c0 = ["connectionToastComponentReference"];
function AllPaymentsComponent_i_15_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_i_15_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.sortTable("payment_code", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllPaymentsComponent_i_16_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_i_16_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.sortTable("payment_code", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllPaymentsComponent_i_17_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_i_17_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.sortTable("payment_code", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllPaymentsComponent_i_20_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_i_20_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r25.sortTable("payment_date", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllPaymentsComponent_i_21_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_i_21_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.sortTable("payment_date", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllPaymentsComponent_i_22_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_i_22_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.sortTable("payment_date", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllPaymentsComponent_i_25_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_i_25_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r31.sortTable("amount_paid", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllPaymentsComponent_i_26_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_i_26_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.sortTable("amount_paid", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllPaymentsComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_i_27_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r35.sortTable("amount_paid", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllPaymentsComponent_i_30_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_i_30_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r37.sortTable("order_code", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllPaymentsComponent_i_31_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_i_31_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r39.sortTable("order_code", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllPaymentsComponent_i_32_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_i_32_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r41.sortTable("order_code", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllPaymentsComponent_i_35_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_i_35_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r43.sortTable("customer_name", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllPaymentsComponent_i_36_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_i_36_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r45.sortTable("customer_name", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllPaymentsComponent_i_37_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_i_37_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r47.sortTable("customer_name", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllPaymentsComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dblclick", function AllPaymentsComponent_tr_39_Template_tr_dblclick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r51); const data_r49 = restoredCtx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r50.viewPayment(data_r49.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r49 == null ? null : data_r49.data().payment_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r49 == null ? null : data_r49.data().payment_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r49 == null ? null : data_r49.data().amount_paid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r49 == null ? null : data_r49.data().order.data.order_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r49 == null ? null : data_r49.data().order.data.customer.customer_name);
} }
function AllPaymentsComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllPaymentsComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class AllPaymentsComponent {
    constructor(router, paymentsApi, paymentsPrint) {
        this.router = router;
        this.paymentsApi = paymentsApi;
        this.paymentsPrint = paymentsPrint;
        this.navHeading = [
            { text: "All Payments", url: "/home/payments/all-payments" },
        ];
        this.paymentsGridData = [];
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
        this.getAccountPayment();
    }
    getAccountPayment() {
        this.isFetchingGridData = true;
        this.paymentsApi.getAccountPayment(this.sortParams, 20)
            .then((res) => {
            console.log(res);
            this.paymentsGridData = res.docs;
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
        this.paymentsApi.getAccountPaymentNext(this.sortParams, 20, this.nextStartAfter)
            .then((res) => {
            console.log(res);
            this.paymentsGridData = res.docs;
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
        this.paymentsApi.getAccountPaymentPrev(this.sortParams, 20, this.prevStartAt)
            .then((res) => {
            console.log(res);
            this.paymentsGridData = res.docs;
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
        this.getAccountPayment();
    }
    viewPayment(paymentId) {
        console.log(paymentId);
        sessionStorage.setItem("restaurant_payment_id", paymentId);
        this.router.navigateByUrl("/home/payments/view-payment");
    }
    onPrint() {
        console.log("lets start printing...");
        this.paymentsPrint.printAllPayments();
    }
}
AllPaymentsComponent.ɵfac = function AllPaymentsComponent_Factory(t) { return new (t || AllPaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_payments_api_payments_api_service__WEBPACK_IMPORTED_MODULE_1__.PaymentsApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_printing_payments_print_payments_print_service__WEBPACK_IMPORTED_MODULE_2__.PaymentsPrintService)); };
AllPaymentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AllPaymentsComponent, selectors: [["app-all-payments"]], viewQuery: function AllPaymentsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 58, vars: 24, consts: [[3, "headings", "showPrint", "print"], [1, "container"], [1, "row"], [1, "col-md-10"], [1, "row", "mb-3"], [1, "col-md-12"], ["routerLink", "/home/payments/new-payment", 1, "btn", "btn-secondary", "page-add-btn"], [1, "btn", "btn-light", "border", "float-end", "page-refresh-btn", 3, "disabled", "click"], [1, "bi", "bi-arrow-clockwise"], [1, "table", "table-bordered", "table-sm", "w-100", "page-table"], [1, "bg-light"], ["width", "15%"], ["class", "bi bi-filter float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-down float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-up float-end list-pointer", 3, "click", 4, "ngIf"], ["width", "20%"], ["width", "30%"], ["class", "table-pointer", 3, "dblclick", 4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["colspan", "5"], ["aria-label", "Page navigation", 1, "nav-light", "float-end"], [1, "pagination", "pagination-sm", "mb-0", "justify-content-end"], [1, "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-left-fill"], [1, "page-item"], ["href", "#", "aria-label", "Current", 1, "page-link", 3, "click"], ["href", "#", "aria-label", "Last", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-right-fill"], ["connectionToastComponentReference", ""], [1, "bi", "bi-filter", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-down", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-up", "float-end", "list-pointer", 3, "click"], [1, "table-pointer", 3, "dblclick"], [1, "text-center"], ["role", "status", 1, "spinner-grow", "m-4"], [1, "visually-hidden"], [1, "m-4"]], template: function AllPaymentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("print", function AllPaymentsComponent_Template_app_module_topnav_print_0_listener() { return ctx.onPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "New Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_Template_button_click_8_listener() { return ctx.getAccountPayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Payment ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, AllPaymentsComponent_i_15_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, AllPaymentsComponent_i_16_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, AllPaymentsComponent_i_17_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Payment Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AllPaymentsComponent_i_20_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, AllPaymentsComponent_i_21_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, AllPaymentsComponent_i_22_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Amount Paid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, AllPaymentsComponent_i_25_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AllPaymentsComponent_i_26_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, AllPaymentsComponent_i_27_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Order ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, AllPaymentsComponent_i_30_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, AllPaymentsComponent_i_31_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, AllPaymentsComponent_i_32_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " Customer Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, AllPaymentsComponent_i_35_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, AllPaymentsComponent_i_36_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, AllPaymentsComponent_i_37_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, AllPaymentsComponent_tr_39_Template, 11, 5, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, AllPaymentsComponent_tr_40_Template, 5, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, AllPaymentsComponent_tr_41_Template, 4, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "nav", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_Template_a_click_48_listener($event) { return ctx.previousPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_Template_a_click_51_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllPaymentsComponent_Template_a_click_54_listener($event) { return ctx.nextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "app-connection-toast", null, 29);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("headings", ctx.navHeading)("showPrint", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "payment_code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "payment_code" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "payment_code" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "payment_date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "payment_date" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "payment_date" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "amount_paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "amount_paid" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "amount_paid" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "order_code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "order_code" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "order_code" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "customer_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "customer_name" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "customer_name" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.paymentsGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isDataAvailable && !ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.disablePrev ? "disabled" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.pageNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.disableNext ? "disabled" : "");
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__.ModuleTopnavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtcGF5bWVudHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 15962:
/*!**************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/payments/dashboard/dashboard.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/moment */ 76246);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_restaurant_src_app_services_modules_payments_api_payments_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/payments-api/payments-api.service */ 16827);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ 34459);







const _c0 = ["connectionToastComponentReference"];
class DashboardComponent {
    constructor(paymentsApi) {
        this.paymentsApi = paymentsApi;
        this.navHeading = [
            { text: "Dashboard", url: "/home/payments/dashboard" },
        ];
        this.weekPaymentsCount = 0;
        this.weekPaymentsTotal = 0;
        this.paymentsLineChartData = [{ data: [0], label: 'Menu Groups' }];
        this.paymentsLineChartLabels = [""];
        this.chartOptions = {};
        this.today = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()();
    }
    ngOnInit() {
        this.initChart();
        this.getWeekPayment();
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
    getWeekPayment() {
        this.paymentsApi.getWeekPayment(moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(this.today).add(-1, 'months').toDate(), this.today.toDate())
            .then(res => {
            console.log(res);
            this.weekPaymentsData = res.docs;
            this.weekPaymentsCount = res.docs.length;
            this.setPaymentChartData();
            this.calculateTotalPayments();
        }, err => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    setPaymentChartData() {
        this.paymentsLineChartLabels = [];
        for (let i = 7; i > 0; i--) {
            var d = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(this.today).add(-i, 'days');
            this.paymentsLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
        }
        console.log(this.paymentsLineChartLabels);
        let dataCount = [];
        for (let i = 7; i > 0; i--) {
            dataCount.push(0);
        }
        console.log(dataCount);
        this.weekPaymentsData.forEach((payment) => {
            var paymentDate = payment.data().created_at.toDate().toISOString().slice(0, 10);
            for (let i = 7; i > 0; i--) {
                if (this.paymentsLineChartLabels[i] == paymentDate) {
                    dataCount[i]++;
                }
            }
        });
        console.log(dataCount);
        this.paymentsLineChartData = [{ data: dataCount, label: 'Payments' }];
    }
    calculateTotalPayments() {
        this.weekPaymentsTotal = 0;
        this.weekPaymentsData.forEach((payment) => {
            this.weekPaymentsTotal = payment.data().amount_paid;
        });
        console.log(this.weekPaymentsTotal);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_payments_api_payments_api_service__WEBPACK_IMPORTED_MODULE_2__.PaymentsApiService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 32, vars: 8, consts: [[3, "headings"], [1, "container"], [1, "row"], [1, "col-md-3", "mb-4"], [1, "card", "border-left-secondary", "shadow", "h-100", "py-2"], [1, "card-body"], [1, "row", "no-gutters", "align-items-center"], [1, "col", "mr-2"], [1, "text-xs", "font-weight-bold", "text-uppercase", "mb-1"], [1, "h5", "mb-0", "font-weight-bold", "text-gray-800"], [1, "col-md-8"], [1, "card", "shadow", "mb-4"], [1, "card-header", "py-3", "d-flex", "flex-row", "align-items-center", "justify-content-between"], [1, "m-0", "font-weight-bold"], [1, "chart-area"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType"], ["connectionToastComponentReference", ""]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "No. of Payments this Week");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Amount Paid this Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Total Payments by Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "canvas", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "app-connection-toast", null, 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("headings", ctx.navHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.weekPaymentsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("$ ", ctx.weekPaymentsTotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datasets", ctx.paymentsLineChartData)("labels", ctx.paymentsLineChartLabels)("options", ctx.chartOptions)("legend", true)("chartType", "line");
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__.ModuleTopnavComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.BaseChartDirective, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 38365:
/*!******************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/payments/new-payment/new-payment.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPaymentComponent": () => (/* binding */ NewPaymentComponent)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 16448);
/* harmony import */ var _payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../payment-form/payment-form.component */ 99035);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_payments_api_payments_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/payments-api/payments-api.service */ 16827);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);









const _c0 = ["paymentFormComponentReference"];
const _c1 = ["connectionToastComponentReference"];
class NewPaymentComponent {
    constructor(router, paymentsApi) {
        this.router = router;
        this.paymentsApi = paymentsApi;
        this.navHeading = [
            { text: "New Payment", url: "/home/payments/new-payment" },
        ];
        this.isPaymentSaving = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.paymentForm.paymentForm.controls.paymentDate.setValue(new Date().toISOString().slice(0, 16));
    }
    createPayment() {
        console.log('u are saving a new payment');
        var data = {
            created_at: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
            account: localStorage.getItem('restaurant_id'),
            payment_code: this.paymentForm.paymentForm.controls.paymentCode.value,
            payment_date: this.paymentForm.paymentForm.controls.paymentDate.value,
            amount_paid: this.paymentForm.paymentForm.controls.amountPaid.value,
            order: {
                id: this.paymentForm.selectedOrderId,
                data: this.paymentForm.selectedOrderData
            }
        };
        console.log(data);
        this.isPaymentSaving = true;
        this.paymentsApi.createPayment(data)
            .then((res) => {
            console.log(res);
            this.isPaymentSaving = false;
            sessionStorage.setItem('restaurant_payment_id', res.id);
            this.router.navigateByUrl('/home/payments/view-payment');
        }, (err) => {
            console.log(err);
            this.isPaymentSaving = false;
            this.connectionToast.openToast();
        });
    }
}
NewPaymentComponent.ɵfac = function NewPaymentComponent_Factory(t) { return new (t || NewPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_payments_api_payments_api_service__WEBPACK_IMPORTED_MODULE_3__.PaymentsApiService)); };
NewPaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: NewPaymentComponent, selectors: [["app-new-payment"]], viewQuery: function NewPaymentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5, _payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_1__.PaymentFormComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paymentForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 12, vars: 2, consts: [[3, "headings"], [1, "container"], ["paymentFormComponentReference", ""], [1, "row", "page-form"], [1, "col-md-6"], ["type", "button", "routerLink", "/home/payments/all-payments", 1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn"], [1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn", 3, "disabled", "click"], ["connectionToastComponentReference", ""]], template: function NewPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-payment-form", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewPaymentComponent_Template_button_click_8_listener() { return ctx.createPayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-connection-toast", null, 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("headings", ctx.navHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isPaymentSaving);
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_4__.ModuleTopnavComponent, _payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_1__.PaymentFormComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctcGF5bWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 99035:
/*!********************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/payments/payment-form/payment-form.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentFormComponent": () => (/* binding */ PaymentFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _select_windows_orders_windows_select_order_select_order_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../select-windows/orders-windows/select-order/select-order.component */ 57276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);





const _c0 = ["selectOrderComponentReference"];
class PaymentFormComponent {
    constructor() {
        this.paymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
    }
    ngOnInit() {
        this.initPaymentForm();
    }
    initPaymentForm() {
        this.paymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            paymentCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
            paymentDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
            orderCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl({ value: '', disabled: true }),
            customerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl({ value: '', disabled: true }),
            totalAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl({ value: 0, disabled: true }),
            amountPaid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
            balance: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl({ value: '', disabled: true }),
        });
    }
    onOrderSelected(orderData) {
        console.log(orderData);
        this.selectedOrderId = orderData.id;
        this.selectedOrderData = orderData.data();
        this.paymentForm.controls.orderCode.setValue(orderData.data().order_code);
        this.paymentForm.controls.customerName.setValue(orderData.data().customer.customer_name);
        this.paymentForm.controls.totalAmount.setValue(orderData.data().total_amount);
    }
    openOrderWindow() {
        console.log("You are opening select order window");
        this.selectOrder.openModal();
    }
    setBalance() {
        this.paymentForm.controls.balance.setValue(this.paymentForm.controls.totalAmount.value - this.paymentForm.controls.amountPaid.value);
    }
}
PaymentFormComponent.ɵfac = function PaymentFormComponent_Factory(t) { return new (t || PaymentFormComponent)(); };
PaymentFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentFormComponent, selectors: [["app-payment-form"]], viewQuery: function PaymentFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, _select_windows_orders_windows_select_order_select_order_component__WEBPACK_IMPORTED_MODULE_0__.SelectOrderComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selectOrder = _t.first);
    } }, decls: 57, vars: 1, consts: [[1, "page-form", 3, "formGroup"], [1, "row"], [1, "col-md-12"], [1, "col-md-6"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-end", "mt-1"], [1, "col-md-8"], ["formControlName", "paymentCode", 1, "form-control", "form-control-sm", "w-100"], [1, "row", "mb-4"], ["type", "datetime-local", "formControlName", "paymentDate", 1, "form-control", "form-control-sm", "w-100"], [1, "input-group", "input-group-sm", "w-100"], ["formControlName", "orderCode", 1, "form-control"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-three-dots"], ["formControlName", "customerName", 1, "form-control"], ["type", "number", "min", "0", "step", ".01", "formControlName", "totalAmount", 1, "form-control", "form-control-sm", "w-100", 3, "change"], ["type", "number", "min", "0", "step", ".01", "formControlName", "amountPaid", 1, "form-control", "form-control-sm", "w-100", 3, "change"], ["type", "number", "min", "0", "step", ".01", "formControlName", "balance", 1, "form-control", "form-control-sm", "w-100"], [3, "rowSelected"], ["selectOrderComponentReference", ""]], template: function PaymentFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Payment Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Payment ID :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Payment Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Order ID :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentFormComponent_Template_button_click_25_listener() { return ctx.openOrderWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Customer Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentFormComponent_Template_button_click_34_listener() { return ctx.openOrderWindow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Amount Due :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function PaymentFormComponent_Template_input_change_41_listener() { return ctx.setBalance(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Amount Paid :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function PaymentFormComponent_Template_input_change_47_listener() { return ctx.setBalance(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Balance :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "app-select-order", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("rowSelected", function PaymentFormComponent_Template_app_select_order_rowSelected_55_listener($event) { return ctx.onOrderSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.paymentForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _select_windows_orders_windows_select_order_select_order_component__WEBPACK_IMPORTED_MODULE_0__.SelectOrderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 45230:
/*!************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/payments/payments.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsModule": () => (/* binding */ PaymentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-charts */ 34459);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _select_windows_orders_windows_orders_windows_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../select-windows/orders-windows/orders-windows.module */ 57634);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 15962);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ 12912);
/* harmony import */ var _all_payments_all_payments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-payments/all-payments.component */ 14494);
/* harmony import */ var _new_payment_new_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-payment/new-payment.component */ 38365);
/* harmony import */ var _view_payment_view_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-payment/view-payment.component */ 72029);
/* harmony import */ var _payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payment-form/payment-form.component */ 99035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1858);













class PaymentsModule {
}
PaymentsModule.ɵfac = function PaymentsModule_Factory(t) { return new (t || PaymentsModule)(); };
PaymentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: PaymentsModule });
PaymentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_12__.ChartsModule,
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule,
            _select_windows_orders_windows_orders_windows_module__WEBPACK_IMPORTED_MODULE_1__.OrdersWindowsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PaymentsModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__.SettingsComponent,
        _all_payments_all_payments_component__WEBPACK_IMPORTED_MODULE_4__.AllPaymentsComponent,
        _new_payment_new_payment_component__WEBPACK_IMPORTED_MODULE_5__.NewPaymentComponent,
        _view_payment_view_payment_component__WEBPACK_IMPORTED_MODULE_6__.ViewPaymentComponent,
        _payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_7__.PaymentFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_12__.ChartsModule,
        projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule,
        _select_windows_orders_windows_orders_windows_module__WEBPACK_IMPORTED_MODULE_1__.OrdersWindowsModule] }); })();


/***/ }),

/***/ 12912:
/*!************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/payments/settings/settings.component.ts ***!
  \************************************************************************************************/
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

/***/ 72029:
/*!********************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/payments/view-payment/view-payment.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPaymentComponent": () => (/* binding */ ViewPaymentComponent)
/* harmony export */ });
/* harmony import */ var _payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../payment-form/payment-form.component */ 99035);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/delete-modal/delete-modal.component */ 88622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_payments_api_payments_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/payments-api/payments-api.service */ 16827);
/* harmony import */ var projects_restaurant_src_app_services_printing_payments_print_payments_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/restaurant/src/app/services/printing/payments-print/payments-print.service */ 44091);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 7005);












const _c0 = ["paymentFormComponentReference"];
const _c1 = ["connectionToastComponentReference"];
const _c2 = ["deleteModalComponentReference"];
function ViewPaymentComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewPaymentComponent_div_4_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.onPrintRoll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewPaymentComponent_div_4_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.confirmDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewPaymentComponent_div_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r8.updatePayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.isPaymentDeleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.isPaymentSaving);
} }
function ViewPaymentComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class ViewPaymentComponent {
    constructor(router, paymentsApi, paymentsPrint) {
        this.router = router;
        this.paymentsApi = paymentsApi;
        this.paymentsPrint = paymentsPrint;
        this.navHeading = [
            { text: "View Payment", url: "/home/payments/view-payment" },
        ];
        this.isPaymentLoading = false;
        this.isPaymentSaving = false;
        this.isPaymentDeleting = false;
    }
    ngOnInit() {
        this.getPayment();
    }
    getPayment() {
        this.isPaymentLoading = true;
        this.paymentsApi.getPayment()
            .then((res) => {
            console.log(res.data());
            this.paymentData = res;
            this.isPaymentLoading = false;
            this.paymentForm.paymentForm.controls.paymentCode.setValue(res.data().payment_code);
            this.paymentForm.paymentForm.controls.paymentDate.setValue(res.data().payment_date);
            this.paymentForm.paymentForm.controls.amountPaid.setValue(res.data().amount_paid);
            this.paymentForm.paymentForm.controls.selectedCustomerId = res.data().order.data.customer.id;
            this.paymentForm.paymentForm.controls.orderCode.setValue(res.data().order.data.order_code);
            this.paymentForm.paymentForm.controls.customerName.setValue(res.data().order.data.customer_name);
            this.paymentForm.paymentForm.controls.totalAmount.setValue(res.data().order.data.total_amount);
            this.paymentForm.selectedOrderId = res.data().order.id;
            this.paymentForm.selectedOrderData = res.data().order.data;
            this.paymentForm.setBalance();
        }, (err) => {
            console.log(err);
            this.isPaymentLoading = false;
            this.connectionToast.openToast();
        });
    }
    updatePayment() {
        console.log('u are saving a new payment');
        var data = {
            payment_code: this.paymentForm.paymentForm.controls.paymentCode.value,
            payment_date: this.paymentForm.paymentForm.controls.paymentDate.value,
            amount_paid: this.paymentForm.paymentForm.controls.amountPaid.value,
            order: {
                id: this.paymentForm.selectedOrderId,
                data: this.paymentForm.selectedOrderData,
            }
        };
        console.log(data);
        this.isPaymentSaving = true;
        this.paymentsApi.updatePayment(data)
            .then((res) => {
            console.log(res);
            this.isPaymentSaving = false;
        }, (err) => {
            console.log(err);
            this.isPaymentSaving = false;
            this.connectionToast.openToast();
        });
    }
    confirmDelete() {
        this.deleteModal.openModal();
    }
    deletePayment() {
        this.isPaymentDeleting = true;
        this.paymentsApi.deletePayment()
            .then((res) => {
            console.log(res);
            this.router.navigateByUrl('/home/payments/all-payments');
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    onPrint() {
        console.log("lets start printing...");
        this.paymentsPrint.printViewPayment();
    }
    onPrintRoll() {
        console.log("lets start printing roll...");
        this.paymentsPrint.printPaymentRoll();
    }
}
ViewPaymentComponent.ɵfac = function ViewPaymentComponent_Factory(t) { return new (t || ViewPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_payments_api_payments_api_service__WEBPACK_IMPORTED_MODULE_3__.PaymentsApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_printing_payments_print_payments_print_service__WEBPACK_IMPORTED_MODULE_4__.PaymentsPrintService)); };
ViewPaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ViewPaymentComponent, selectors: [["app-view-payment"]], viewQuery: function ViewPaymentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5, _payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_0__.PaymentFormComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5, projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_2__.DeleteModalComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paymentForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.deleteModal = _t.first);
    } }, decls: 10, vars: 4, consts: [[3, "headings", "showPrint", "print"], [1, "container"], ["paymentFormComponentReference", ""], ["class", "row page-form", 4, "ngIf"], ["connectionToastComponentReference", ""], [3, "confirmEvent"], ["deleteModalComponentReference", ""], [1, "row", "page-form"], [1, "col-md-6"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "page-form-btn", 3, "click"], [1, "bi", "bi-receipt", "me-2"], ["type", "button", "routerLink", "/home/payments/all-payments", 1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn", 3, "disabled", "click"], [1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-sm", "float-end", "ms-1", "btn-light", "page-form-btn"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm"], [1, "visually-hidden"]], template: function ViewPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("print", function ViewPaymentComponent_Template_app_module_topnav_print_0_listener() { return ctx.onPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-payment-form", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ViewPaymentComponent_div_4_Template, 11, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ViewPaymentComponent_div_5_Template, 6, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-connection-toast", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "app-delete-modal", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("confirmEvent", function ViewPaymentComponent_Template_app_delete_modal_confirmEvent_8_listener() { return ctx.deletePayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("headings", ctx.navHeading)("showPrint", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isPaymentLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isPaymentLoading);
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_5__.ModuleTopnavComponent, _payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_0__.PaymentFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent, projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_2__.DeleteModalComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXBheW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 63715:
/*!***********************************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/modules/payments/view-payment.guard.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPaymentGuard": () => (/* binding */ ViewPaymentGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class ViewPaymentGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        if (!!sessionStorage.getItem('restaurant_payment_id')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/home/payments');
            return false;
        }
    }
}
ViewPaymentGuard.ɵfac = function ViewPaymentGuard_Factory(t) { return new (t || ViewPaymentGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
ViewPaymentGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewPaymentGuard, factory: ViewPaymentGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3514:
/*!*************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/payments-page/payments-page-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPageRoutingModule": () => (/* binding */ PaymentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _payments_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments-page.component */ 74408);
/* harmony import */ var _components_modules_payments_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/modules/payments/dashboard/dashboard.component */ 15962);
/* harmony import */ var _components_modules_payments_all_payments_all_payments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/modules/payments/all-payments/all-payments.component */ 14494);
/* harmony import */ var _components_modules_payments_new_payment_new_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modules/payments/new-payment/new-payment.component */ 38365);
/* harmony import */ var _components_modules_payments_view_payment_view_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/modules/payments/view-payment/view-payment.component */ 72029);
/* harmony import */ var _guards_modules_payments_view_payment_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../guards/modules/payments/view-payment.guard */ 63715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1858);









const routes = [
    {
        path: "",
        component: _payments_page_component__WEBPACK_IMPORTED_MODULE_0__.PaymentsPageComponent,
        children: [
            { path: "", component: _components_modules_payments_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent },
            { path: "dashboard", component: _components_modules_payments_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent },
            { path: "all-payments", component: _components_modules_payments_all_payments_all_payments_component__WEBPACK_IMPORTED_MODULE_2__.AllPaymentsComponent },
            { path: "new-payment", component: _components_modules_payments_new_payment_new_payment_component__WEBPACK_IMPORTED_MODULE_3__.NewPaymentComponent },
            { path: "view-payment", component: _components_modules_payments_view_payment_view_payment_component__WEBPACK_IMPORTED_MODULE_4__.ViewPaymentComponent, canActivate: [_guards_modules_payments_view_payment_guard__WEBPACK_IMPORTED_MODULE_5__.ViewPaymentGuard] }
        ]
    }
];
class PaymentsPageRoutingModule {
}
PaymentsPageRoutingModule.ɵfac = function PaymentsPageRoutingModule_Factory(t) { return new (t || PaymentsPageRoutingModule)(); };
PaymentsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PaymentsPageRoutingModule });
PaymentsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PaymentsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 74408:
/*!********************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/payments-page/payments-page.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPageComponent": () => (/* binding */ PaymentsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../application/src/app/components/main-navbar/main-navbar/main-navbar.component */ 28088);
/* harmony import */ var _personal_src_app_components_module_utilities_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../personal/src/app/components/module-utilities/module-sidenav/module-sidenav.component */ 7632);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 869);




class PaymentsPageComponent {
    constructor() {
        this.navLinks = [
            { text: "All Payments", url: "/home/payments/all-payments", icon: "bi bi-list-ul" },
            { text: "New Payment", url: "/home/payments/new-payment", icon: "bi bi-plus-square" },
        ];
    }
    ngOnInit() {
    }
}
PaymentsPageComponent.ɵfac = function PaymentsPageComponent_Factory(t) { return new (t || PaymentsPageComponent)(); };
PaymentsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentsPageComponent, selectors: [["app-payments-page"]], decls: 6, vars: 4, consts: [[3, "navBrand", "source"], ["id", "wrapper"], [3, "navLinks", "heading"], ["id", "content-wrapper", 1, "d-flex", "flex-column"], ["id", "content"]], template: function PaymentsPageComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navBrand", "nR Restaurant")("source", "Restaurant");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navLinks", ctx.navLinks)("heading", "Payments");
    } }, directives: [_application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__.MainNavbarComponent, _personal_src_app_components_module_utilities_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.ModuleSidenavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50cy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 89288:
/*!*****************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/payments-page/payments-page.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPageModule": () => (/* binding */ PaymentsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _payments_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments-page-routing.module */ 3514);
/* harmony import */ var projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/application/src/app/components/main-navbar/main-navbar.module */ 7264);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _components_modules_payments_payments_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modules/payments/payments.module */ 45230);
/* harmony import */ var _payments_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payments-page.component */ 74408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);







class PaymentsPageModule {
}
PaymentsPageModule.ɵfac = function PaymentsPageModule_Factory(t) { return new (t || PaymentsPageModule)(); };
PaymentsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PaymentsPageModule });
PaymentsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _payments_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentsPageRoutingModule,
            projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
            _components_modules_payments_payments_module__WEBPACK_IMPORTED_MODULE_3__.PaymentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PaymentsPageModule, { declarations: [_payments_page_component__WEBPACK_IMPORTED_MODULE_4__.PaymentsPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _payments_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentsPageRoutingModule,
        projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
        projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
        _components_modules_payments_payments_module__WEBPACK_IMPORTED_MODULE_3__.PaymentsModule] }); })();


/***/ }),

/***/ 11766:
/*!***************************************************************************************!*\
  !*** ./projects/restaurant/src/app/services/modules/orders-api/orders-api.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersApiService": () => (/* binding */ OrdersApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);


class OrdersApiService {
    constructor(afs) {
        this.afs = afs;
        this.orderRef = this.afs.collection('restaurant/module_orders/restaurant_order');
        this.orderItemRef = this.afs.collection('restaurant/module_orders/restaurant_order_item');
    }
    // orders
    createOrder(order) {
        return this.orderRef.add(order);
    }
    getOrder() {
        return this.orderRef.doc(String(sessionStorage.getItem('restaurant_order_id'))).ref.get();
    }
    updateOrder(order) {
        return this.orderRef.doc(String(sessionStorage.getItem('restaurant_order_id'))).update(order);
    }
    deleteOrder() {
        return this.orderRef.doc(String(sessionStorage.getItem('restaurant_order_id'))).delete();
    }
    getAccountOrder(sorting, pageSize) {
        return this.orderRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .limit(pageSize)
            .get();
    }
    getAccountOrderNext(sorting, pageSize, pageStart) {
        return this.orderRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getAccountOrderPrev(sorting, pageSize, pageStart) {
        return this.orderRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllAccountOrder() {
        return this.orderRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // order items
    createOrderItem(orderItem) {
        return this.orderItemRef.add(orderItem);
    }
    getOrderItem(orderItemData) {
        return this.orderItemRef.doc(orderItemData).ref.get();
    }
    updateOrderItem(orderItemId, orderItemData) {
        return this.orderItemRef.doc(orderItemId).update(orderItemData);
    }
    deleteOrderItem(orderItemId) {
        return this.orderItemRef.doc(orderItemId).delete();
    }
    getOrderOrderItem() {
        return this.orderItemRef.ref
            .where("order", "==", sessionStorage.getItem('restaurant_order_id'))
            .orderBy("created_at", "asc")
            .get();
    }
    // dashboard
    getWeekOrder(startDate, endDate) {
        return this.orderRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .where("created_at", "<", startDate).where("created_at", ">", endDate)
            .get();
    }
}
OrdersApiService.ɵfac = function OrdersApiService_Factory(t) { return new (t || OrdersApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
OrdersApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdersApiService, factory: OrdersApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 44091:
/*!************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/services/printing/payments-print/payments-print.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPrintService": () => (/* binding */ PaymentsPrintService)
/* harmony export */ });
/* harmony import */ var C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 11733);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_services_pdf_print_pdf_print_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/services/pdf-print/pdf-print.service */ 46424);
/* harmony import */ var projects_restaurant_src_app_services_modules_payments_api_payments_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/payments-api/payments-api.service */ 16827);




class PaymentsPrintService {
  constructor(pdfPrint, paymentsApi) {
    this.pdfPrint = pdfPrint;
    this.paymentsApi = paymentsApi;
  } // all payments


  printAllPayments() {
    var _this = this;

    return (0,C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const paymentsGridData = yield _this.paymentsApi.getAllAccountPayment();
      var body = [['Order ID', 'Payment Date', 'Amount Paid', 'Order ID', 'Customer Name']];

      for (let data of paymentsGridData.docs) {
        var row = [];
        let rowData = data.data();
        row.push(rowData.order_code);
        row.push(rowData.payment_date.asDate());
        row.push(rowData.amount_paid);
        row.push(rowData.order.order_code);
        row.push(rowData.order.customer_name);
        body.push(row);
      }

      let content = [{
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['15%', '20%', '20%', '15%', '30%'],
          body: body
        }
      }];

      _this.pdfPrint.openPdf(content);
    })();
  } // view payment


  printViewPayment() {
    var _this2 = this;

    return (0,C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const paymentFormDate = yield _this2.paymentsApi.getPayment();
      let formData = paymentFormDate.data();
      let content = [{
        columns: [[{
          text: 'Payment ID: ' + formData.payment_code
        }, {
          text: 'Payment Date: ' + formData.payment_date
        }, {
          text: 'Order ID: ' + formData.order.order_code
        }, {
          text: 'Customer Name: ' + formData.order.customer.customer_name
        }, {
          text: 'Amount Due: ' + formData.order.total_amount
        }, {
          text: 'Amount Paid: ' + formData.amount_paid
        }, {
          text: 'Balance: ' + (formData.order.total_amount - formData.amount_paid)
        }], []]
      }];

      _this2.pdfPrint.openPdf(content);
    })();
  }

  printPaymentRoll() {
    var _this3 = this;

    return (0,C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const paymentFormDate = yield _this3.paymentsApi.getPayment();
      let formData = paymentFormDate.data();
      let content = [{
        columns: [[{
          text: 'Payment ID: ' + formData.payment_code
        }, {
          text: 'Payment Date: ' + formData.payment_date
        }, {
          text: 'Order ID: ' + formData.order.order_code
        }, {
          text: 'Customer Name: ' + formData.order.customer.customer_name
        }, {
          text: 'Amount Due: ' + formData.order.total_amount
        }, {
          text: 'Amount Paid: ' + formData.amount_paid
        }, {
          text: 'Balance: ' + (formData.order.total_amount - formData.amount_paid)
        }], []]
      }];

      _this3.pdfPrint.printRoll(content);
    })();
  }

}

PaymentsPrintService.ɵfac = function PaymentsPrintService_Factory(t) {
  return new (t || PaymentsPrintService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](projects_personal_src_app_services_pdf_print_pdf_print_service__WEBPACK_IMPORTED_MODULE_1__.PdfPrintService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](projects_restaurant_src_app_services_modules_payments_api_payments_api_service__WEBPACK_IMPORTED_MODULE_2__.PaymentsApiService));
};

PaymentsPrintService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: PaymentsPrintService,
  factory: PaymentsPrintService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=projects_restaurant_src_app_pages_modules_payments-page_payments-page_module_ts-projects_rest-13ab97.js.map