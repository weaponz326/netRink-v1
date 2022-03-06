"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["default-projects_restaurant_src_app_components_select-windows_staff-windows_staff-windows_mod-4556f0"],{

/***/ 31592:
/*!********************************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/select-windows/staff-windows/select-staff/select-staff.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectStaffComponent": () => (/* binding */ SelectStaffComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var projects_restaurant_src_app_services_modules_staff_api_staff_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/staff-api/staff-api.service */ 80687);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 7005);






const _c0 = ["openButtonElementReference"];
const _c1 = ["closeButtonElementReference"];
const _c2 = ["connectionToastComponentReference"];
function SelectStaffComponent_i_16_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectStaffComponent_i_16_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.sortTable("staff_code", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectStaffComponent_i_17_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectStaffComponent_i_17_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.sortTable("staff_code", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectStaffComponent_i_18_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectStaffComponent_i_18_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.sortTable("staff_code", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectStaffComponent_i_21_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectStaffComponent_i_21_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.sortTable("staff_name", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectStaffComponent_i_22_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectStaffComponent_i_22_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.sortTable("staff_name", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectStaffComponent_i_23_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectStaffComponent_i_23_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.sortTable("staff_name", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectStaffComponent_i_26_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectStaffComponent_i_26_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r27.sortTable("job", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectStaffComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectStaffComponent_i_27_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.sortTable("job", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectStaffComponent_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectStaffComponent_i_28_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r31.sortTable("job", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SelectStaffComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dblclick", function SelectStaffComponent_tr_30_Template_tr_dblclick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35); const data_r33 = restoredCtx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r34.selectRow(data_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r33 == null ? null : data_r33.data().staff_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", data_r33 == null ? null : data_r33.data().first_name, " ", data_r33 == null ? null : data_r33.data().last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r33 == null ? null : data_r33.data().job);
} }
function SelectStaffComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
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
function SelectStaffComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class SelectStaffComponent {
    constructor(staffApi) {
        this.staffApi = staffApi;
        this.rowSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.staffGridData = [];
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
        this.getAccountStaff();
        this.openButton.nativeElement.click();
    }
    getAccountStaff() {
        this.isFetchingGridData = true;
        this.staffApi.getAccountStaff(this.sortParams, 15)
            .then((res) => {
            console.log(res);
            this.staffGridData = res.docs;
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
        this.staffApi.getAccountStaffNext(this.sortParams, 15, this.nextStartAfter)
            .then((res) => {
            console.log(res);
            this.staffGridData = res.docs;
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
        this.staffApi.getAccountStaffPrev(this.sortParams, 15, this.prevStartAt)
            .then((res) => {
            console.log(res);
            this.staffGridData = res.docs;
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
        this.getAccountStaff();
    }
    selectRow(row) {
        this.rowSelected.emit(row);
        this.closeButton.nativeElement.click();
        console.log(row);
    }
}
SelectStaffComponent.ɵfac = function SelectStaffComponent_Factory(t) { return new (t || SelectStaffComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_staff_api_staff_api_service__WEBPACK_IMPORTED_MODULE_1__.StaffApiService)); };
SelectStaffComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SelectStaffComponent, selectors: [["app-select-staff"]], viewQuery: function SelectStaffComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.openButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.closeButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, outputs: { rowSelected: "rowSelected" }, decls: 52, vars: 17, consts: [["data-bs-toggle", "modal", "data-bs-target", "#selectStaffModal", 3, "hidden"], ["openButtonElementReference", ""], ["id", "selectStaffModal", "tabindex", "-1", "aria-labelledby", "selectStaffModalLabel", "aria-hidden", "true", 1, "modal", "fade", "select-table-modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header", "bg-light"], ["id", "selectStaffModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "table", "table-bordered", "table-sm", "w-100", "page-table"], [1, "bg-light"], ["width", "20%"], ["class", "bi bi-filter float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-down float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-up float-end list-pointer", 3, "click", 4, "ngIf"], ["width", "50%"], ["width", "30%"], ["class", "table-pointer", 3, "dblclick", 4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["colspan", "4"], ["aria-label", "Page navigation", 1, "nav-light", "float-end"], [1, "pagination", "pagination-sm", "mb-0", "justify-content-end"], [1, "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-left-fill"], [1, "page-item"], ["href", "#", "aria-label", "Current", 1, "page-link", 3, "click"], ["href", "#", "aria-label", "Last", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-right-fill"], ["closeButtonElementReference", ""], ["connectionToastComponentReference", ""], [1, "bi", "bi-filter", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-down", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-up", "float-end", "list-pointer", 3, "click"], [1, "table-pointer", 3, "dblclick"], [1, "text-center"], ["role", "status", 1, "spinner-grow", "m-4"], [1, "visually-hidden"], [1, "m-4"]], template: function SelectStaffComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Select Restaurant Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Staff ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SelectStaffComponent_i_16_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, SelectStaffComponent_i_17_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SelectStaffComponent_i_18_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Staff Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, SelectStaffComponent_i_21_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SelectStaffComponent_i_22_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SelectStaffComponent_i_23_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Job ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, SelectStaffComponent_i_26_Template, 1, 0, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, SelectStaffComponent_i_27_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, SelectStaffComponent_i_28_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, SelectStaffComponent_tr_30_Template, 7, 4, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, SelectStaffComponent_tr_31_Template, 5, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, SelectStaffComponent_tr_32_Template, 4, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "nav", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectStaffComponent_Template_a_click_39_listener($event) { return ctx.previousPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectStaffComponent_Template_a_click_42_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectStaffComponent_Template_a_click_45_listener($event) { return ctx.nextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 0, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Launch demo modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "app-connection-toast", null, 30);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "staff_code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "staff_code" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "staff_code" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "staff_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "staff_name" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "staff_name" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "job");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "job" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "job" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.staffGridData);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3Qtc3RhZmYuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 52452:
/*!*****************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/select-windows/staff-windows/staff-windows.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffWindowsModule": () => (/* binding */ StaffWindowsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var smart_webcomponents_angular_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smart-webcomponents-angular/grid */ 50537);
/* harmony import */ var smart_webcomponents_angular_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smart-webcomponents-angular/window */ 42520);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _select_staff_select_staff_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-staff/select-staff.component */ 31592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);






class StaffWindowsModule {
}
StaffWindowsModule.ɵfac = function StaffWindowsModule_Factory(t) { return new (t || StaffWindowsModule)(); };
StaffWindowsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: StaffWindowsModule });
StaffWindowsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            smart_webcomponents_angular_grid__WEBPACK_IMPORTED_MODULE_0__.GridModule,
            smart_webcomponents_angular_window__WEBPACK_IMPORTED_MODULE_1__.WindowModule,
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](StaffWindowsModule, { declarations: [_select_staff_select_staff_component__WEBPACK_IMPORTED_MODULE_3__.SelectStaffComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        smart_webcomponents_angular_grid__WEBPACK_IMPORTED_MODULE_0__.GridModule,
        smart_webcomponents_angular_window__WEBPACK_IMPORTED_MODULE_1__.WindowModule,
        projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule], exports: [_select_staff_select_staff_component__WEBPACK_IMPORTED_MODULE_3__.SelectStaffComponent] }); })();


/***/ }),

/***/ 10970:
/*!***************************************************************************************!*\
  !*** ./projects/restaurant/src/app/services/modules/roster-api/roster-api.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RosterApiService": () => (/* binding */ RosterApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 33549);



class RosterApiService {
    constructor(afs, http) {
        this.afs = afs;
        this.http = http;
        this.rosterRef = this.afs.collection('restaurant/module_roster/restaurant_roster');
        this.shiftRef = this.afs.collection('restaurant/module_roster/restaurant_roster_shift');
        this.batchRef = this.afs.collection('restaurant/module_roster/restaurant_roster_batch');
        this.personnelRef = this.afs.collection('restaurant/module_roster/restaurant_roster_personnel');
        this.sheetRef = this.afs.collection('restaurant/module_roster/restaurant_roster_sheet');
    }
    // roster
    createRoster(roster) {
        return this.rosterRef.add(roster);
    }
    getRoster() {
        return this.rosterRef.doc(String(sessionStorage.getItem('restaurant_roster_id'))).ref.get();
    }
    updateRoster(roster) {
        return this.rosterRef.doc(String(sessionStorage.getItem('restaurant_roster_id'))).update(roster);
    }
    deleteRoster() {
        return this.rosterRef.doc(String(sessionStorage.getItem('restaurant_roster_id'))).delete();
    }
    getAccountRoster(sorting, pageSize) {
        return this.rosterRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .limit(pageSize)
            .get();
    }
    getAccountRosterNext(sorting, pageSize, pageStart) {
        return this.rosterRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getAccountRosterPrev(sorting, pageSize, pageStart) {
        return this.rosterRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllAccountRoster() {
        return this.rosterRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // shifts
    createShift(shiftData) {
        return this.shiftRef.add(shiftData);
    }
    getShift(shiftId) {
        return this.shiftRef.doc(shiftId).ref.get();
    }
    updateShift(shiftId, shiftData) {
        return this.shiftRef.doc(shiftId).update(shiftData);
    }
    deleteShift(shiftId) {
        return this.shiftRef.doc(shiftId).delete();
    }
    getRosterShift() {
        return this.shiftRef.ref
            .where("roster", "==", sessionStorage.getItem('restaurant_roster_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // batches
    createBatch(batchData) {
        return this.batchRef.add(batchData);
    }
    getBatch(batchId) {
        return this.batchRef.doc(batchId).ref.get();
    }
    updateBatch(batchId, batchData) {
        return this.batchRef.doc(batchId).update(batchData);
    }
    deleteBatch(batchId) {
        return this.batchRef.doc(batchId).delete();
    }
    getRosterBatch() {
        return this.batchRef.ref
            .where("roster", "==", sessionStorage.getItem('restaurant_roster_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // shift personnel
    createPersonnel(personnelData) {
        return this.personnelRef.add(personnelData);
    }
    getPersonnel(personnelId) {
        return this.personnelRef.doc(personnelId).ref.get();
    }
    updatePersonnel(personnelId, personnelData) {
        return this.personnelRef.doc(personnelId).update(personnelData);
    }
    deletePersonnel(personnelId) {
        return this.personnelRef.doc(personnelId).delete();
    }
    getRosterPersonnel() {
        return this.personnelRef.ref
            .where("roster", "==", sessionStorage.getItem('restaurant_roster_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // sheet
    createSheet(rosterId, sheetData) {
        return this.sheetRef.doc(rosterId).set(sheetData);
    }
    getSheet() {
        return this.sheetRef.doc(String(sessionStorage.getItem('restaurant_roster_id'))).ref.get();
    }
    updateSheet(sheetData) {
        return this.sheetRef.doc(String(sessionStorage.getItem('restaurant_roster_id'))).update(sheetData);
    }
    deleteSheet() {
        return this.sheetRef.doc(String(sessionStorage.getItem('restaurant_roster_id'))).delete();
    }
    getRosterSheet() {
        return this.sheetRef.ref
            .where("roster", "==", sessionStorage.getItem('restaurant_roster_id'))
            .orderBy("created_at", "desc")
            .get();
    }
}
RosterApiService.ɵfac = function RosterApiService_Factory(t) { return new (t || RosterApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
RosterApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RosterApiService, factory: RosterApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 80687:
/*!*************************************************************************************!*\
  !*** ./projects/restaurant/src/app/services/modules/staff-api/staff-api.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffApiService": () => (/* binding */ StaffApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/storage */ 43462);



class StaffApiService {
    constructor(afs, storage) {
        this.afs = afs;
        this.storage = storage;
        this.staffRef = this.afs.collection('restaurant/module_staff/restaurant_staff');
        this.storagePath = "/restaurant/" + localStorage.getItem('restaurant_id');
        this.storageRef = this.storage.ref(this.storagePath);
    }
    // staff
    createStaff(staff) {
        return this.staffRef.add(staff);
    }
    getStaff() {
        return this.staffRef.doc(String(sessionStorage.getItem('restaurant_staff_id'))).ref.get();
    }
    updateStaff(staff) {
        return this.staffRef.doc(String(sessionStorage.getItem('restaurant_staff_id'))).update(staff);
    }
    deleteStaff() {
        return this.staffRef.doc(String(sessionStorage.getItem('restaurant_staff_id'))).delete();
    }
    getAccountStaff(sorting, pageSize) {
        return this.staffRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .limit(pageSize)
            .get();
    }
    getAccountStaffNext(sorting, pageSize, pageStart) {
        return this.staffRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getAccountStaffPrev(sorting, pageSize, pageStart) {
        return this.staffRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllAccountStaff() {
        return this.staffRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy("created_at", "desc")
            .get();
    }
}
StaffApiService.ɵfac = function StaffApiService_Factory(t) { return new (t || StaffApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_2__.AngularFireStorage)); };
StaffApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StaffApiService, factory: StaffApiService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-projects_restaurant_src_app_components_select-windows_staff-windows_staff-windows_mod-4556f0.js.map