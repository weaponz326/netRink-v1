"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["projects_restaurant_src_app_pages_modules_deliveries-page_deliveries-page_module_ts"],{

/***/ 50763:
/*!**************************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/deliveries/all-deliveries/all-deliveries.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllDeliveriesComponent": () => (/* binding */ AllDeliveriesComponent)
/* harmony export */ });
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component */ 88622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_deliveries_api_deliveries_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/deliveries-api/deliveries-api.service */ 39416);
/* harmony import */ var projects_restaurant_src_app_services_printing_deliveries_print_deliveries_print_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/restaurant/src/app/services/printing/deliveries-print/deliveries-print.service */ 15958);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 7005);









const _c0 = ["connectionToastComponentReference"];
const _c1 = ["deleteModalComponentReference"];
function AllDeliveriesComponent_i_14_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_i_14_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.sortTable("order_code", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllDeliveriesComponent_i_15_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_i_15_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.sortTable("order_code", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllDeliveriesComponent_i_16_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_i_16_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r23.sortTable("order_code", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllDeliveriesComponent_i_19_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_i_19_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r25.sortTable("order_date", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllDeliveriesComponent_i_20_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_i_20_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r27.sortTable("order_date", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllDeliveriesComponent_i_21_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_i_21_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r29.sortTable("order_date", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllDeliveriesComponent_i_24_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_i_24_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.sortTable("delivery_location", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllDeliveriesComponent_i_25_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_i_25_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r33.sortTable("delivery_location", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllDeliveriesComponent_i_26_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_i_26_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r35.sortTable("delivery_location", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllDeliveriesComponent_i_29_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_i_29_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r37.sortTable("date_delivered", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllDeliveriesComponent_i_30_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_i_30_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r39.sortTable("date_delivered", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllDeliveriesComponent_i_31_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_i_31_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r41.sortTable("date_delivered", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllDeliveriesComponent_i_34_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_i_34_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r43.sortTable("delivery_status", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllDeliveriesComponent_i_35_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_i_35_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r45.sortTable("delivery_status", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllDeliveriesComponent_i_36_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_i_36_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r47.sortTable("delivery_status", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllDeliveriesComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dblclick", function AllDeliveriesComponent_tr_38_Template_tr_dblclick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r51); const data_r49 = restoredCtx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r50.viewDelivery(data_r49.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r49 == null ? null : data_r49.data().order.order_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r49 == null ? null : data_r49.data().order.order_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r49 == null ? null : data_r49.data().delivery_location);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 5, data_r49 == null ? null : data_r49.data().date_delivered));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r49 == null ? null : data_r49.data().delivery_status);
} }
function AllDeliveriesComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllDeliveriesComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class AllDeliveriesComponent {
    constructor(router, deliveriesApi, deliveriesPrint) {
        this.router = router;
        this.deliveriesApi = deliveriesApi;
        this.deliveriesPrint = deliveriesPrint;
        this.navHeading = [
            { text: "All Deliveries", url: "/home/deliveries/all-deliveries" },
        ];
        this.deliveriesGridData = [];
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
        this.getAccountDelivery();
    }
    getAccountDelivery() {
        this.isFetchingGridData = true;
        this.deliveriesApi.getAccountDelivery(this.sortParams, 20)
            .then((res) => {
            console.log(res);
            this.deliveriesGridData = res.docs;
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
        this.deliveriesApi.getAccountDeliveryNext(this.sortParams, 20, this.nextStartAfter)
            .then((res) => {
            console.log(res);
            this.deliveriesGridData = res.docs;
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
        this.deliveriesApi.getAccountDeliveryPrev(this.sortParams, 20, this.prevStartAt)
            .then((res) => {
            console.log(res);
            this.deliveriesGridData = res.docs;
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
        this.getAccountDelivery();
    }
    viewDelivery(id) {
        console.log(id);
        sessionStorage.setItem("restaurant_delivery_id", id);
        this.router.navigateByUrl("/home/deliveries/view-delivery");
    }
    onPrint() {
        console.log("lets start printing...");
        this.deliveriesPrint.printAllDeliveries();
    }
}
AllDeliveriesComponent.ɵfac = function AllDeliveriesComponent_Factory(t) { return new (t || AllDeliveriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_deliveries_api_deliveries_api_service__WEBPACK_IMPORTED_MODULE_2__.DeliveriesApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_printing_deliveries_print_deliveries_print_service__WEBPACK_IMPORTED_MODULE_3__.DeliveriesPrintService)); };
AllDeliveriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AllDeliveriesComponent, selectors: [["app-all-deliveries"]], viewQuery: function AllDeliveriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5, projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_1__.DeleteModalComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.deleteModal = _t.first);
    } }, decls: 57, vars: 24, consts: [[3, "headings", "showPrint", "print"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "row", "mb-3"], [1, "btn", "btn-light", "border", "float-end", "page-refresh-btn", 3, "disabled", "click"], [1, "bi", "bi-arrow-clockwise"], [1, "overflow-auto"], [1, "table", "table-bordered", "table-sm", "w-100", "page-table"], [1, "bg-light"], ["width", "15%", 1, "min-width-2"], ["class", "bi bi-filter float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-down float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-up float-end list-pointer", 3, "click", 4, "ngIf"], ["width", "20%", 1, "min-width-3"], ["width", "30%", 1, "min-width-4"], ["class", "table-pointer", 3, "dblclick", 4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["colspan", "6"], ["aria-label", "Page navigation", 1, "nav-light", "float-end"], [1, "pagination", "pagination-sm", "mb-0", "justify-content-end"], [1, "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-left-fill"], [1, "page-item"], ["href", "#", "aria-label", "Current", 1, "page-link", 3, "click"], ["href", "#", "aria-label", "Last", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-right-fill"], ["connectionToastComponentReference", ""], [1, "bi", "bi-filter", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-down", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-up", "float-end", "list-pointer", 3, "click"], [1, "table-pointer", 3, "dblclick"], [1, "text-center"], ["role", "status", 1, "spinner-grow", "m-4"], [1, "visually-hidden"], [1, "m-4"]], template: function AllDeliveriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("print", function AllDeliveriesComponent_Template_app_module_topnav_print_0_listener() { return ctx.onPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_Template_button_click_6_listener() { return ctx.getAccountDelivery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Order ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, AllDeliveriesComponent_i_14_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AllDeliveriesComponent_i_15_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AllDeliveriesComponent_i_16_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Order Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AllDeliveriesComponent_i_19_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AllDeliveriesComponent_i_20_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AllDeliveriesComponent_i_21_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Delivery Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AllDeliveriesComponent_i_24_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AllDeliveriesComponent_i_25_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, AllDeliveriesComponent_i_26_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Date Delivered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, AllDeliveriesComponent_i_29_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, AllDeliveriesComponent_i_30_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, AllDeliveriesComponent_i_31_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Delivery Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, AllDeliveriesComponent_i_34_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, AllDeliveriesComponent_i_35_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, AllDeliveriesComponent_i_36_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, AllDeliveriesComponent_tr_38_Template, 12, 7, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, AllDeliveriesComponent_tr_39_Template, 5, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, AllDeliveriesComponent_tr_40_Template, 4, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "nav", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_Template_a_click_47_listener($event) { return ctx.previousPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_Template_a_click_50_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AllDeliveriesComponent_Template_a_click_53_listener($event) { return ctx.nextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "app-connection-toast", null, 28);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("headings", ctx.navHeading)("showPrint", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "order_code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "order_code" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "order_code" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "order_date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "order_date" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "order_date" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "delivery_location");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "delivery_location" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "delivery_location" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "date_delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "date_delivered" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "date_delivered" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "delivery_status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "delivery_status" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "delivery_status" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.deliveriesGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isDataAvailable && !ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.disablePrev ? "disabled" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.pageNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.disableNext ? "disabled" : "");
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_4__.ModuleTopnavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtZGVsaXZlcmllcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 87355:
/*!****************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/deliveries/dashboard/dashboard.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/moment */ 76246);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_restaurant_src_app_services_modules_deliveries_api_deliveries_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/deliveries-api/deliveries-api.service */ 39416);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ 34459);







const _c0 = ["connectionToastComponentReference"];
class DashboardComponent {
    constructor(deliveriesApi) {
        this.deliveriesApi = deliveriesApi;
        this.navHeading = [
            { text: "Dashboard", url: "/home/deliveries/dashboard" },
        ];
        this.weekDeliveriesCount = 0;
        this.deliveriesLineChartData = [{ data: [0], label: 'Menu Groups' }];
        this.deliveriesLineChartLabels = [""];
        this.chartOptions = {};
        this.today = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()();
    }
    ngOnInit() {
        this.initChart();
        this.getWeekDelivery();
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
    getWeekDelivery() {
        this.deliveriesApi.getWeekDelivery(moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(this.today).add(-1, 'months').toDate(), this.today.toDate())
            .then(res => {
            console.log(res);
            this.weekDeliveriesData = res.docs;
            this.weekDeliveriesCount = res.docs.length;
            this.setDeliveryChartData();
        }, err => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    setDeliveryChartData() {
        this.deliveriesLineChartLabels = [];
        for (let i = 7; i > 0; i--) {
            var d = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(this.today).add(-i, 'days');
            this.deliveriesLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
        }
        console.log(this.deliveriesLineChartLabels);
        let dataCount = [];
        for (let i = 7; i > 0; i--) {
            dataCount.push(0);
        }
        console.log(dataCount);
        this.weekDeliveriesData.forEach((delivery) => {
            var deliveryDate = delivery.data().created_at.toDate().toISOString().slice(0, 10);
            for (let i = 7; i > 0; i--) {
                if (this.deliveriesLineChartLabels[i] == deliveryDate) {
                    dataCount[i]++;
                }
            }
        });
        console.log(dataCount);
        this.deliveriesLineChartData = [{ data: dataCount, label: 'Deliveries' }];
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_deliveries_api_deliveries_api_service__WEBPACK_IMPORTED_MODULE_2__.DeliveriesApiService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 23, vars: 7, consts: [[3, "headings"], [1, "container"], [1, "row"], [1, "col-md-3", "mb-4"], [1, "card", "border-left-secondary", "shadow", "h-100", "py-2"], [1, "card-body"], [1, "row", "no-gutters", "align-items-center"], [1, "col", "mr-2"], [1, "text-xs", "font-weight-bold", "text-uppercase", "mb-1"], [1, "h5", "mb-0", "font-weight-bold", "text-gray-800"], [1, "col-md-8"], [1, "card", "shadow", "mb-4"], [1, "card-header", "py-3", "d-flex", "flex-row", "align-items-center", "justify-content-between"], [1, "m-0", "font-weight-bold"], [1, "chart-area"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType"], ["connectionToastComponentReference", ""]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Deliveries this Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Total Deliveries by Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "canvas", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "app-connection-toast", null, 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("headings", ctx.navHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.weekDeliveriesCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datasets", ctx.deliveriesLineChartData)("labels", ctx.deliveriesLineChartLabels)("options", ctx.chartOptions)("legend", true)("chartType", "line");
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__.ModuleTopnavComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.BaseChartDirective, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 22159:
/*!****************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/deliveries/deliveries.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveriesModule": () => (/* binding */ DeliveriesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 34459);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 87355);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ 55543);
/* harmony import */ var _all_deliveries_all_deliveries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-deliveries/all-deliveries.component */ 50763);
/* harmony import */ var _delivery_form_delivery_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delivery-form/delivery-form.component */ 83513);
/* harmony import */ var _view_delivery_view_delivery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-delivery/view-delivery.component */ 8139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1858);











class DeliveriesModule {
}
DeliveriesModule.ɵfac = function DeliveriesModule_Factory(t) { return new (t || DeliveriesModule)(); };
DeliveriesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: DeliveriesModule });
DeliveriesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_10__.ChartsModule,
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DeliveriesModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__.SettingsComponent,
        _all_deliveries_all_deliveries_component__WEBPACK_IMPORTED_MODULE_3__.AllDeliveriesComponent,
        _delivery_form_delivery_form_component__WEBPACK_IMPORTED_MODULE_4__.DeliveryFormComponent,
        _view_delivery_view_delivery_component__WEBPACK_IMPORTED_MODULE_5__.ViewDeliveryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_10__.ChartsModule,
        projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule] }); })();


/***/ }),

/***/ 83513:
/*!************************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/deliveries/delivery-form/delivery-form.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryFormComponent": () => (/* binding */ DeliveryFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 869);




class DeliveryFormComponent {
    constructor(router) {
        this.router = router;
        this.deliveryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({});
    }
    ngOnInit() {
        this.initItemForm();
    }
    initItemForm() {
        this.deliveryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
            orderCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl({ value: '', disabled: true }),
            orderDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl({ value: '', disabled: true }),
            customerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl({ value: '', disabled: true }),
            dateDelivered: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            deliveryLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            deliveryStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
        });
    }
    gotoOrder() {
        sessionStorage.setItem('restaurant_order_id', this.orderId);
        this.router.navigateByUrl('/home/orders/view-order');
    }
}
DeliveryFormComponent.ɵfac = function DeliveryFormComponent_Factory(t) { return new (t || DeliveryFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
DeliveryFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DeliveryFormComponent, selectors: [["app-delivery-form"]], decls: 40, vars: 1, consts: [[1, "page-form", 3, "formGroup"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-md-end", "float-sm-start", "mt-1"], [1, "col-md-8"], [1, "input-group", "input-group-sm", "w-100"], ["formControlName", "orderCode", 1, "form-control"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-eye"], ["type", "datetime-local", "formControlName", "orderDate", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "customerName", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "deliveryLocation", 1, "form-control", "form-control-sm", "w-100"], ["type", "datetime-local", "formControlName", "dateDelivered", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "deliveryStatus", 1, "form-control", "form-control-sm", "w-100"]], template: function DeliveryFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Order ID :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeliveryFormComponent_Template_button_click_8_listener() { return ctx.gotoOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Order Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Customer Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Delivery Location :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Date Delivered :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Delivery Status :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.deliveryForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxpdmVyeS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 55543:
/*!**************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/deliveries/settings/settings.component.ts ***!
  \**************************************************************************************************/
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

/***/ 8139:
/*!************************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/deliveries/view-delivery/view-delivery.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDeliveryComponent": () => (/* binding */ ViewDeliveryComponent)
/* harmony export */ });
/* harmony import */ var _delivery_form_delivery_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../delivery-form/delivery-form.component */ 83513);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/delete-modal/delete-modal.component */ 88622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_deliveries_api_deliveries_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/deliveries-api/deliveries-api.service */ 39416);
/* harmony import */ var projects_restaurant_src_app_services_printing_deliveries_print_deliveries_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/restaurant/src/app/services/printing/deliveries-print/deliveries-print.service */ 15958);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 7005);












const _c0 = ["deliveryFormComponentReference"];
const _c1 = ["connectionToastComponentReference"];
const _c2 = ["deleteModalComponentReference"];
function ViewDeliveryComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewDeliveryComponent_div_7_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.confirmDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewDeliveryComponent_div_7_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.updateDelivery(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.isDeliveryDeleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.isDeliverySaving);
} }
function ViewDeliveryComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class ViewDeliveryComponent {
    constructor(router, deliveriesApi, deliveriesPrint) {
        this.router = router;
        this.deliveriesApi = deliveriesApi;
        this.deliveriesPrint = deliveriesPrint;
        this.navHeading = [
            { text: "View Delivery", url: "/home/deliveries/view-delivery" },
        ];
        this.isDeliveryLoading = false;
        this.isDeliverySaving = false;
        this.isDeliveryDeleting = false;
    }
    ngOnInit() {
        this.getDelivery();
    }
    getDelivery() {
        this.isDeliveryLoading = true;
        this.deliveriesApi.getDelivery()
            .then((res) => {
            console.log(res);
            this.deliveryData = res;
            this.isDeliveryLoading = false;
            this.deliveryForm.deliveryForm.controls.orderCode.setValue(this.deliveryData.data().order.order_code);
            this.deliveryForm.deliveryForm.controls.orderDate.setValue(this.deliveryData.data().order.order_date);
            this.deliveryForm.deliveryForm.controls.customerName.setValue(this.deliveryData.data().order.customer.customer_name);
            this.deliveryForm.deliveryForm.controls.dateDelivered.setValue(this.deliveryData.data().date_delivered);
            this.deliveryForm.deliveryForm.controls.deliveryLocation.setValue(this.deliveryData.data().delivery_location);
            this.deliveryForm.deliveryForm.controls.deliveryStatus.setValue(this.deliveryData.data().delivery_status);
            this.deliveryForm.orderId = this.deliveryData.id;
        }, (err) => {
            console.log(err);
            this.isDeliveryLoading = false;
            this.connectionToast.openToast();
        });
    }
    updateDelivery() {
        console.log('u are saving a new delivery');
        let data = {
            delivery_code: this.deliveryForm.deliveryForm.controls.deliveryCode.value,
            date_delivered: this.deliveryForm.deliveryForm.controls.dateDelivered.value,
            delivery_location: this.deliveryForm.deliveryForm.controls.deliveryLocation.value,
            delivery_status: this.deliveryForm.deliveryForm.controls.deliveryStatus.value,
            order: {
                id: this.deliveryData.data().order.id,
                order_code: this.deliveryData.data().order.order_code,
                order_date: this.deliveryData.data().order.order_date,
                customer: {
                    id: this.deliveryData.data().order.customer.id,
                    customer_name: this.deliveryForm.deliveryForm.controls.customerName.value,
                }
            }
        };
        console.log(data);
        this.isDeliverySaving = true;
        this.deliveriesApi.updateDelivery(data)
            .then((res) => {
            console.log(res);
            this.isDeliverySaving = false;
        }, (err) => {
            console.log(err);
            this.isDeliverySaving = false;
            this.connectionToast.openToast();
        });
    }
    confirmDelete() {
        this.deleteModal.openModal();
    }
    deleteDelivery() {
        this.isDeliveryDeleting = true;
        this.deliveriesApi.deleteDelivery()
            .then((res) => {
            console.log(res);
            this.router.navigateByUrl('/home/deliveries/all-deliveries');
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    onPrint() {
        console.log("lets start printing...");
        this.deliveriesPrint.printViewDelivery();
    }
}
ViewDeliveryComponent.ɵfac = function ViewDeliveryComponent_Factory(t) { return new (t || ViewDeliveryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_deliveries_api_deliveries_api_service__WEBPACK_IMPORTED_MODULE_3__.DeliveriesApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_printing_deliveries_print_deliveries_print_service__WEBPACK_IMPORTED_MODULE_4__.DeliveriesPrintService)); };
ViewDeliveryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ViewDeliveryComponent, selectors: [["app-view-delivery"]], viewQuery: function ViewDeliveryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5, _delivery_form_delivery_form_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryFormComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5, projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_2__.DeleteModalComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.deliveryForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.deleteModal = _t.first);
    } }, decls: 13, vars: 3, consts: [[3, "headings"], [1, "container"], [1, "row", "page-form"], [1, "col-md-6"], ["deliveryFormComponentReference", ""], ["class", "row page-form", 4, "ngIf"], ["connectionToastComponentReference", ""], [3, "confirmEvent"], ["deleteModalComponentReference", ""], [1, "col-md-12"], ["type", "button", "routerLink", "/home/deliveries/all-deliveries", 1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn", 3, "disabled", "click"], [1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-sm", "float-end", "ms-1", "btn-light", "page-form-btn"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm"], [1, "visually-hidden"]], template: function ViewDeliveryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-delivery-form", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ViewDeliveryComponent_div_7_Template, 8, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ViewDeliveryComponent_div_8_Template, 6, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-connection-toast", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "app-delete-modal", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("confirmEvent", function ViewDeliveryComponent_Template_app_delete_modal_confirmEvent_11_listener() { return ctx.deleteDelivery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("headings", ctx.navHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isDeliveryLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isDeliveryLoading);
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_5__.ModuleTopnavComponent, _delivery_form_delivery_form_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent, projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_2__.DeleteModalComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWRlbGl2ZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 90271:
/*!**************************************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/modules/deliveries/view-delivery.guard.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDeliveryGuard": () => (/* binding */ ViewDeliveryGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class ViewDeliveryGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        if (!!sessionStorage.getItem('restaurant_delivery_id')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/home/deliveries');
            return false;
        }
    }
}
ViewDeliveryGuard.ɵfac = function ViewDeliveryGuard_Factory(t) { return new (t || ViewDeliveryGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
ViewDeliveryGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewDeliveryGuard, factory: ViewDeliveryGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 57175:
/*!*****************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/deliveries-page/deliveries-page-routing.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveriesPageRoutingModule": () => (/* binding */ DeliveriesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _deliveries_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deliveries-page.component */ 16049);
/* harmony import */ var _components_modules_deliveries_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/modules/deliveries/dashboard/dashboard.component */ 87355);
/* harmony import */ var _components_modules_deliveries_all_deliveries_all_deliveries_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/modules/deliveries/all-deliveries/all-deliveries.component */ 50763);
/* harmony import */ var _components_modules_deliveries_view_delivery_view_delivery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modules/deliveries/view-delivery/view-delivery.component */ 8139);
/* harmony import */ var _guards_modules_deliveries_view_delivery_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../guards/modules/deliveries/view-delivery.guard */ 90271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);








const routes = [
    {
        path: "",
        component: _deliveries_page_component__WEBPACK_IMPORTED_MODULE_0__.DeliveriesPageComponent,
        children: [
            { path: "", component: _components_modules_deliveries_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent },
            { path: "dashboard", component: _components_modules_deliveries_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent },
            { path: "all-deliveries", component: _components_modules_deliveries_all_deliveries_all_deliveries_component__WEBPACK_IMPORTED_MODULE_2__.AllDeliveriesComponent },
            { path: "view-delivery", component: _components_modules_deliveries_view_delivery_view_delivery_component__WEBPACK_IMPORTED_MODULE_3__.ViewDeliveryComponent, canActivate: [_guards_modules_deliveries_view_delivery_guard__WEBPACK_IMPORTED_MODULE_4__.ViewDeliveryGuard] },
        ]
    }
];
class DeliveriesPageRoutingModule {
}
DeliveriesPageRoutingModule.ɵfac = function DeliveriesPageRoutingModule_Factory(t) { return new (t || DeliveriesPageRoutingModule)(); };
DeliveriesPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DeliveriesPageRoutingModule });
DeliveriesPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DeliveriesPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 16049:
/*!************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/deliveries-page/deliveries-page.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveriesPageComponent": () => (/* binding */ DeliveriesPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../application/src/app/components/main-navbar/main-navbar/main-navbar.component */ 28088);
/* harmony import */ var _personal_src_app_components_module_utilities_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../personal/src/app/components/module-utilities/module-sidenav/module-sidenav.component */ 7632);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 869);




class DeliveriesPageComponent {
    constructor() {
        this.navLinks = [
            { text: "All Deliveries", url: "/home/deliveries/all-deliveries", icon: "bi bi-list-ul" },
        ];
    }
    ngOnInit() {
    }
}
DeliveriesPageComponent.ɵfac = function DeliveriesPageComponent_Factory(t) { return new (t || DeliveriesPageComponent)(); };
DeliveriesPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DeliveriesPageComponent, selectors: [["app-deliveries-page"]], decls: 6, vars: 4, consts: [[3, "navBrand", "source"], ["id", "wrapper"], [3, "navLinks", "heading"], ["id", "content-wrapper", 1, "d-flex", "flex-column"], ["id", "content"]], template: function DeliveriesPageComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navLinks", ctx.navLinks)("heading", "Deliveries");
    } }, directives: [_application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__.MainNavbarComponent, _personal_src_app_components_module_utilities_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.ModuleSidenavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxpdmVyaWVzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 41100:
/*!*********************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/deliveries-page/deliveries-page.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveriesPageModule": () => (/* binding */ DeliveriesPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _deliveries_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deliveries-page-routing.module */ 57175);
/* harmony import */ var projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/application/src/app/components/main-navbar/main-navbar.module */ 7264);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _components_modules_deliveries_deliveries_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modules/deliveries/deliveries.module */ 22159);
/* harmony import */ var _deliveries_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deliveries-page.component */ 16049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);







class DeliveriesPageModule {
}
DeliveriesPageModule.ɵfac = function DeliveriesPageModule_Factory(t) { return new (t || DeliveriesPageModule)(); };
DeliveriesPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DeliveriesPageModule });
DeliveriesPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _deliveries_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeliveriesPageRoutingModule,
            projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
            _components_modules_deliveries_deliveries_module__WEBPACK_IMPORTED_MODULE_3__.DeliveriesModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DeliveriesPageModule, { declarations: [_deliveries_page_component__WEBPACK_IMPORTED_MODULE_4__.DeliveriesPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _deliveries_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeliveriesPageRoutingModule,
        projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
        projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
        _components_modules_deliveries_deliveries_module__WEBPACK_IMPORTED_MODULE_3__.DeliveriesModule] }); })();


/***/ }),

/***/ 39416:
/*!***********************************************************************************************!*\
  !*** ./projects/restaurant/src/app/services/modules/deliveries-api/deliveries-api.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveriesApiService": () => (/* binding */ DeliveriesApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);


class DeliveriesApiService {
    constructor(afs) {
        this.afs = afs;
        this.deliveryRef = this.afs.collection('restaurant/module_deliveries/restaurant_delivery');
    }
    // deliveries
    createDelivery(deliveryData) {
        return this.deliveryRef.doc(String(sessionStorage.getItem("restaurant_order_id"))).set(deliveryData);
    }
    getDelivery() {
        return this.deliveryRef.doc(String(sessionStorage.getItem("restaurant_delivery_id"))).ref.get();
    }
    updateDelivery(deliveryData) {
        return this.deliveryRef.doc(String(sessionStorage.getItem("restaurant_delivery_id"))).update(deliveryData);
    }
    deleteDelivery() {
        return this.deliveryRef.doc(String(sessionStorage.getItem("restaurant_delivery_id"))).delete();
    }
    getAccountDelivery(sorting, pageSize) {
        return this.deliveryRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .limit(pageSize)
            .get();
    }
    getAccountDeliveryNext(sorting, pageSize, pageStart) {
        return this.deliveryRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getAccountDeliveryPrev(sorting, pageSize, pageStart) {
        return this.deliveryRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllAccountDelivery() {
        return this.deliveryRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // dashboard
    getWeekDelivery(startDate, endDate) {
        return this.deliveryRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .where("created_at", "<", startDate).where("created_at", ">", endDate)
            .get();
    }
}
DeliveriesApiService.ɵfac = function DeliveriesApiService_Factory(t) { return new (t || DeliveriesApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
DeliveriesApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeliveriesApiService, factory: DeliveriesApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 15958:
/*!****************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/services/printing/deliveries-print/deliveries-print.service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveriesPrintService": () => (/* binding */ DeliveriesPrintService)
/* harmony export */ });
/* harmony import */ var C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 11733);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_services_pdf_print_pdf_print_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/services/pdf-print/pdf-print.service */ 46424);
/* harmony import */ var projects_restaurant_src_app_services_modules_deliveries_api_deliveries_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/deliveries-api/deliveries-api.service */ 39416);




class DeliveriesPrintService {
  constructor(pdfPrint, deliveriesApi) {
    this.pdfPrint = pdfPrint;
    this.deliveriesApi = deliveriesApi;
  } // all deliveries


  printAllDeliveries() {
    var _this = this;

    return (0,C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const deliveriesGridData = yield _this.deliveriesApi.getAllAccountDelivery();
      var body = [['Order ID', 'Customer Name', 'Delivery Location', 'Date Delivered', 'Delivery Status']];

      for (let data of deliveriesGridData.docs) {
        var row = [];
        let rowData = data.data();
        row.push(rowData.order.order_code);
        row.push(rowData.order.customer.customer_name);
        row.push(rowData.delivery_location);
        row.push(rowData.date_delivered);
        row.push(rowData.delivery_status);
        body.push(row);
      }

      let content = [{
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['15%', '20%', '30%', '20%', '15%'],
          body: body
        }
      }];

      _this.pdfPrint.openPdf(content);
    })();
  } // view delivery


  printViewDelivery() {
    var _this2 = this;

    return (0,C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const deliveryFormDate = yield _this2.deliveriesApi.getDelivery();
      let formData = deliveryFormDate.data();
      let content = [{
        columns: [[{
          text: 'Order ID: ' + formData.order.order_code
        }, {
          text: 'Order Date: ' + formData.order.order_date
        }, {
          text: 'Customer Name: ' + formData.order.customer.customer_name
        }, {
          text: 'Delivery Location: ' + formData.delivery_location
        }, {
          text: 'Date Delivered: ' + formData.date_delivered
        }, {
          text: 'Delivery Status: ' + formData.delivery_status
        }], []]
      }];

      _this2.pdfPrint.openPdf(content);
    })();
  }

}

DeliveriesPrintService.ɵfac = function DeliveriesPrintService_Factory(t) {
  return new (t || DeliveriesPrintService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](projects_personal_src_app_services_pdf_print_pdf_print_service__WEBPACK_IMPORTED_MODULE_1__.PdfPrintService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](projects_restaurant_src_app_services_modules_deliveries_api_deliveries_api_service__WEBPACK_IMPORTED_MODULE_2__.DeliveriesApiService));
};

DeliveriesPrintService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DeliveriesPrintService,
  factory: DeliveriesPrintService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=projects_restaurant_src_app_pages_modules_deliveries-page_deliveries-page_module_ts.js.map