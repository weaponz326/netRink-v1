"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["projects_restaurant_src_app_pages_modules_tables-page_tables-page_module_ts"],{

/***/ 16448:
/*!***********************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractUserDataWriter": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.AbstractUserDataWriter),
/* harmony export */   "Bytes": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Bytes),
/* harmony export */   "CACHE_SIZE_UNLIMITED": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.CACHE_SIZE_UNLIMITED),
/* harmony export */   "CollectionReference": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.CollectionReference),
/* harmony export */   "DocumentReference": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.DocumentReference),
/* harmony export */   "DocumentSnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.DocumentSnapshot),
/* harmony export */   "FieldPath": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.FieldPath),
/* harmony export */   "FieldValue": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.FieldValue),
/* harmony export */   "Firestore": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Firestore),
/* harmony export */   "FirestoreError": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.FirestoreError),
/* harmony export */   "GeoPoint": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.GeoPoint),
/* harmony export */   "LoadBundleTask": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.LoadBundleTask),
/* harmony export */   "Query": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Query),
/* harmony export */   "QueryConstraint": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QueryConstraint),
/* harmony export */   "QueryDocumentSnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QueryDocumentSnapshot),
/* harmony export */   "QuerySnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QuerySnapshot),
/* harmony export */   "SnapshotMetadata": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.SnapshotMetadata),
/* harmony export */   "Timestamp": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Timestamp),
/* harmony export */   "Transaction": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Transaction),
/* harmony export */   "WriteBatch": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.WriteBatch),
/* harmony export */   "_DatabaseId": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._DatabaseId),
/* harmony export */   "_DocumentKey": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._DocumentKey),
/* harmony export */   "_EmptyAppCheckTokenProvider": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._EmptyAppCheckTokenProvider),
/* harmony export */   "_EmptyAuthCredentialsProvider": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._EmptyAuthCredentialsProvider),
/* harmony export */   "_FieldPath": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._FieldPath),
/* harmony export */   "_cast": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._cast),
/* harmony export */   "_debugAssert": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._debugAssert),
/* harmony export */   "_isBase64Available": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._isBase64Available),
/* harmony export */   "_logWarn": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._logWarn),
/* harmony export */   "_setIndexConfiguration": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._setIndexConfiguration),
/* harmony export */   "_validateIsNotUsedTogether": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._validateIsNotUsedTogether),
/* harmony export */   "addDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc),
/* harmony export */   "arrayRemove": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayRemove),
/* harmony export */   "arrayUnion": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion),
/* harmony export */   "clearIndexedDbPersistence": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.clearIndexedDbPersistence),
/* harmony export */   "collection": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection),
/* harmony export */   "collectionGroup": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collectionGroup),
/* harmony export */   "connectFirestoreEmulator": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.connectFirestoreEmulator),
/* harmony export */   "deleteDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc),
/* harmony export */   "deleteField": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteField),
/* harmony export */   "disableNetwork": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.disableNetwork),
/* harmony export */   "doc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc),
/* harmony export */   "documentId": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.documentId),
/* harmony export */   "enableIndexedDbPersistence": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.enableIndexedDbPersistence),
/* harmony export */   "enableMultiTabIndexedDbPersistence": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.enableMultiTabIndexedDbPersistence),
/* harmony export */   "enableNetwork": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.enableNetwork),
/* harmony export */   "endAt": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.endAt),
/* harmony export */   "endBefore": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.endBefore),
/* harmony export */   "ensureFirestoreConfigured": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.ensureFirestoreConfigured),
/* harmony export */   "executeWrite": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.executeWrite),
/* harmony export */   "getDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc),
/* harmony export */   "getDocFromCache": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocFromCache),
/* harmony export */   "getDocFromServer": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocFromServer),
/* harmony export */   "getDocs": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs),
/* harmony export */   "getDocsFromCache": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocsFromCache),
/* harmony export */   "getDocsFromServer": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocsFromServer),
/* harmony export */   "getFirestore": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore),
/* harmony export */   "increment": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.increment),
/* harmony export */   "initializeFirestore": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.initializeFirestore),
/* harmony export */   "limit": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.limit),
/* harmony export */   "limitToLast": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.limitToLast),
/* harmony export */   "loadBundle": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.loadBundle),
/* harmony export */   "namedQuery": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.namedQuery),
/* harmony export */   "onSnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.onSnapshot),
/* harmony export */   "onSnapshotsInSync": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.onSnapshotsInSync),
/* harmony export */   "orderBy": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.orderBy),
/* harmony export */   "query": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query),
/* harmony export */   "queryEqual": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.queryEqual),
/* harmony export */   "refEqual": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.refEqual),
/* harmony export */   "runTransaction": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.runTransaction),
/* harmony export */   "serverTimestamp": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp),
/* harmony export */   "setDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc),
/* harmony export */   "setLogLevel": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setLogLevel),
/* harmony export */   "snapshotEqual": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.snapshotEqual),
/* harmony export */   "startAfter": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.startAfter),
/* harmony export */   "startAt": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.startAt),
/* harmony export */   "terminate": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.terminate),
/* harmony export */   "updateDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc),
/* harmony export */   "waitForPendingWrites": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.waitForPendingWrites),
/* harmony export */   "where": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where),
/* harmony export */   "writeBatch": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)
/* harmony export */ });
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/firestore */ 94876);



/***/ }),

/***/ 21504:
/*!************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/tables/add-table/add-table.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTableComponent": () => (/* binding */ AddTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 16448);
/* harmony import */ var _table_form_table_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../table-form/table-form.component */ 75944);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_tables_api_tables_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/tables-api/tables-api.service */ 45239);








const _c0 = ["tableFormComponentReference"];
const _c1 = ["addButtonElementReference"];
const _c2 = ["dismissButtonElementReference"];
const _c3 = ["connectionToastComponentReference"];
class AddTableComponent {
    constructor(router, tablesApi) {
        this.router = router;
        this.tablesApi = tablesApi;
        this.saveTableEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.isTableSaving = false;
    }
    ngOnInit() {
    }
    openModal() {
        this.addButton.nativeElement.click();
    }
    saveTable() {
        let data = {
            created_at: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
            account: localStorage.getItem('restaurant_id'),
            table_number: this.tableForm.tableForm.controls.tableNumber.value,
            table_type: this.tableForm.tableForm.controls.tableType.value,
            capacity: this.tableForm.tableForm.controls.capacity.value,
            location: this.tableForm.tableForm.controls.location.value,
            table_status: this.tableForm.tableForm.controls.tableStatus.value,
        };
        this.saveTableEvent.emit(data);
    }
    resetForm() {
        this.tableForm.tableForm.controls.tableNumber.setValue("");
        this.tableForm.tableForm.controls.tableType.setValue("");
        this.tableForm.tableForm.controls.capacity.setValue("");
        this.tableForm.tableForm.controls.location.setValue("");
        this.tableForm.tableForm.controls.tableStatus.setValue("");
    }
}
AddTableComponent.ɵfac = function AddTableComponent_Factory(t) { return new (t || AddTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_tables_api_tables_api_service__WEBPACK_IMPORTED_MODULE_3__.TablesApiService)); };
AddTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AddTableComponent, selectors: [["app-add-table"]], viewQuery: function AddTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _table_form_table_form_component__WEBPACK_IMPORTED_MODULE_1__.TableFormComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tableForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.addButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dismissButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, outputs: { saveTableEvent: "saveTableEvent" }, decls: 19, vars: 2, consts: [["data-bs-toggle", "modal", "data-bs-target", "#addTableModal", 3, "hidden"], ["addButtonElementReference", ""], ["id", "addTableModal", "tabindex", "-1", "aria-labelledby", "addTableModalLabel", "aria-hidden", "true", 1, "modal", "fade", "form-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-light"], ["id", "addTableModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["dismissButtonElementReference", ""], [1, "modal-body"], ["tableFormComponentReference", ""], [1, "modal-footer"], [1, "btn", "btn-sm", "btn-secondary", "modal-form-btn", 3, "disabled", "click"], ["data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn"]], template: function AddTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Add New Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-table-form", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddTableComponent_Template_button_click_15_listener() { return ctx.saveTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isTableSaving);
    } }, directives: [_table_form_table_form_component__WEBPACK_IMPORTED_MODULE_1__.TableFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 74898:
/*!**************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/tables/all-tables/all-tables.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllTablesComponent": () => (/* binding */ AllTablesComponent)
/* harmony export */ });
/* harmony import */ var _add_table_add_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-table/add-table.component */ 21504);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view-table/view-table.component */ 83699);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/delete-modal/delete-modal.component */ 88622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_tables_api_tables_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/tables-api/tables-api.service */ 45239);
/* harmony import */ var projects_restaurant_src_app_services_printing_tables_print_tables_print_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/restaurant/src/app/services/printing/tables-print/tables-print.service */ 39010);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 7005);














const _c0 = ["addTableComponentReference"];
const _c1 = ["viewTableComponentReference"];
const _c2 = ["connectionToastComponentReference"];
const _c3 = ["deleteModalComponentReference"];
function AllTablesComponent_i_16_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllTablesComponent_i_16_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r16.sortTable("table_number", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllTablesComponent_i_17_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllTablesComponent_i_17_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r18.sortTable("table_number", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllTablesComponent_i_18_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllTablesComponent_i_18_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r20.sortTable("table_number", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllTablesComponent_i_21_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllTablesComponent_i_21_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r22.sortTable("table_type", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllTablesComponent_i_22_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllTablesComponent_i_22_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r24.sortTable("table_type", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllTablesComponent_i_23_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllTablesComponent_i_23_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r26.sortTable("table_type", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllTablesComponent_i_26_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllTablesComponent_i_26_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r28.sortTable("table_status", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllTablesComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllTablesComponent_i_27_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r30.sortTable("table_status", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllTablesComponent_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllTablesComponent_i_28_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r32.sortTable("table_status", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllTablesComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dblclick", function AllTablesComponent_tr_30_Template_tr_dblclick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36); const data_r34 = restoredCtx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r35.viewTable.openModal(data_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r34 == null ? null : data_r34.data().table_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r34 == null ? null : data_r34.data().table_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r34 == null ? null : data_r34.data().table_status);
} }
function AllTablesComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllTablesComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class AllTablesComponent {
    constructor(router, tablesApi, tablesPrint) {
        this.router = router;
        this.tablesApi = tablesApi;
        this.tablesPrint = tablesPrint;
        this.navHeading = [
            { text: "All Tables", url: "/home/tables/all-tables" },
        ];
        this.tablesGridData = [];
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
        this.getAccountTable();
    }
    getAccountTable() {
        this.isFetchingGridData = true;
        this.tablesApi.getAccountTable(this.sortParams, 20)
            .then((res) => {
            console.log(res);
            this.tablesGridData = res.docs;
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
        this.tablesApi.getAccountTableNext(this.sortParams, 20, this.nextStartAfter)
            .then((res) => {
            console.log(res);
            this.tablesGridData = res.docs;
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
        this.tablesApi.getAccountTablePrev(this.sortParams, 20, this.prevStartAt)
            .then((res) => {
            console.log(res);
            this.tablesGridData = res.docs;
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
        this.getAccountTable();
    }
    createTable(data) {
        console.log('u are saving a new table');
        console.log(data);
        this.addTable.isTableSaving = true;
        this.tablesApi.createTable(data)
            .then((res) => {
            console.log(res);
            this.addTable.isTableSaving = false;
            this.addTable.resetForm();
            this.addTable.dismissButton.nativeElement.click();
            this.isDataAvailable = false;
            this.getAccountTable();
        }, (err) => {
            console.log(err);
            this.addTable.isTableSaving = false;
            this.connectionToast.openToast();
        });
    }
    updateTable(table) {
        console.log('u are updating a table');
        console.log(table);
        this.viewTable.isTableSaving = true;
        this.tablesApi.updateTable(table.id, table.data)
            .then((res) => {
            console.log(res);
            this.viewTable.dismissButton.nativeElement.click();
            this.viewTable.isTableSaving = false;
            this.getAccountTable();
        }, (err) => {
            console.log(err);
            this.viewTable.isTableSaving = false;
            this.connectionToast.openToast();
        });
    }
    confirmDelete(id) {
        this.deleteId = id;
        this.deleteModal.openModal();
    }
    deleteTable() {
        this.viewTable.isTableDeleting = true;
        this.tablesApi.deleteTable(this.deleteId)
            .then((res) => {
            console.log(res);
            this.viewTable.isTableDeleting = false;
            this.viewTable.editButton.nativeElement.click();
            this.getAccountTable();
        }, (err) => {
            console.log(err);
            this.viewTable.isTableDeleting = false;
            this.connectionToast.openToast();
        });
    }
    onPrint() {
        console.log("lets start printing...");
        this.tablesPrint.printAllTables();
    }
}
AllTablesComponent.ɵfac = function AllTablesComponent_Factory(t) { return new (t || AllTablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_tables_api_tables_api_service__WEBPACK_IMPORTED_MODULE_4__.TablesApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_printing_tables_print_tables_print_service__WEBPACK_IMPORTED_MODULE_5__.TablesPrintService)); };
AllTablesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AllTablesComponent, selectors: [["app-all-tables"]], viewQuery: function AllTablesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5, _add_table_add_table_component__WEBPACK_IMPORTED_MODULE_0__.AddTableComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5, _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_1__.ViewTableComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c3, 5, projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__.DeleteModalComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.addTable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.deleteModal = _t.first);
    } }, decls: 55, vars: 18, consts: [[3, "headings", "showPrint", "print"], [1, "container"], [1, "row"], [1, "col-md-7"], [1, "row", "mb-3"], [1, "col-md-12"], [1, "btn", "btn-secondary", "page-add-btn", 3, "click"], [1, "btn", "btn-light", "border", "float-end", "page-refresh-btn", 3, "disabled", "click"], [1, "bi", "bi-arrow-clockwise"], [1, "overflow-auto"], [1, "table", "table-bordered", "table-sm", "w-100", "page-table"], [1, "bg-light"], ["width", "30%", 1, "min-width-2"], ["class", "bi bi-filter float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-down float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-up float-end list-pointer", 3, "click", 4, "ngIf"], ["width", "35%", 1, "min-width-3"], ["width", "35%", 1, "min-width-2"], ["class", "table-pointer", 3, "dblclick", 4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["colspan", "3"], ["aria-label", "Page navigation", 1, "nav-light", "float-end"], [1, "pagination", "pagination-sm", "mb-0", "justify-content-end"], [1, "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-left-fill"], [1, "page-item"], ["href", "#", "aria-label", "Current", 1, "page-link", 3, "click"], ["href", "#", "aria-label", "Last", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-right-fill"], [3, "saveTableEvent"], ["addTableComponentReference", ""], [3, "saveTableEvent", "deleteTableEvent"], ["viewTableComponentReference", ""], ["connectionToastComponentReference", ""], [3, "confirmEvent"], ["deleteModalComponentReference", ""], [1, "bi", "bi-filter", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-down", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-up", "float-end", "list-pointer", 3, "click"], [1, "table-pointer", 3, "dblclick"], [1, "text-center"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm", "m-2"], [1, "visually-hidden"], [1, "m-4"]], template: function AllTablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("print", function AllTablesComponent_Template_app_module_topnav_print_0_listener() { return ctx.onPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllTablesComponent_Template_button_click_6_listener() { return ctx.addTable.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Add New Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllTablesComponent_Template_button_click_8_listener() { return ctx.getAccountTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Table No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, AllTablesComponent_i_16_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, AllTablesComponent_i_17_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, AllTablesComponent_i_18_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " Table Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, AllTablesComponent_i_21_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, AllTablesComponent_i_22_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, AllTablesComponent_i_23_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Table Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, AllTablesComponent_i_26_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, AllTablesComponent_i_27_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, AllTablesComponent_i_28_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, AllTablesComponent_tr_30_Template, 7, 3, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, AllTablesComponent_tr_31_Template, 5, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, AllTablesComponent_tr_32_Template, 4, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "nav", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllTablesComponent_Template_a_click_39_listener($event) { return ctx.previousPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllTablesComponent_Template_a_click_42_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AllTablesComponent_Template_a_click_45_listener($event) { return ctx.nextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "app-add-table", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("saveTableEvent", function AllTablesComponent_Template_app_add_table_saveTableEvent_47_listener($event) { return ctx.createTable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "app-view-table", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("saveTableEvent", function AllTablesComponent_Template_app_view_table_saveTableEvent_49_listener($event) { return ctx.updateTable($event); })("deleteTableEvent", function AllTablesComponent_Template_app_view_table_deleteTableEvent_49_listener($event) { return ctx.confirmDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "app-connection-toast", null, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "app-delete-modal", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("confirmEvent", function AllTablesComponent_Template_app_delete_modal_confirmEvent_53_listener() { return ctx.deleteTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("headings", ctx.navHeading)("showPrint", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "table_number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "table_number" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "table_number" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "table_type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "table_type" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "table_type" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "table_status");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "table_status" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "table_status" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.tablesGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isDataAvailable && !ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.disablePrev ? "disabled" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.pageNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.disableNext ? "disabled" : "");
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_6__.ModuleTopnavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _add_table_add_table_component__WEBPACK_IMPORTED_MODULE_0__.AddTableComponent, _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_1__.ViewTableComponent, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent, projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__.DeleteModalComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtdGFibGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 18847:
/*!************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/tables/dashboard/dashboard.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_restaurant_src_app_services_modules_tables_api_tables_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/tables-api/tables-api.service */ 45239);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);





const _c0 = ["connectionToastComponentReference"];
class DashboardComponent {
    constructor(tablesApi) {
        this.tablesApi = tablesApi;
        this.navHeading = [
            { text: "Dashboard", url: "/home/tables/dashboard" },
        ];
        this.allTablesCount = 0;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.getAllAccountTable();
    }
    getAllAccountTable() {
        this.tablesApi.getAllAccountTable()
            .then(res => {
            console.log(res);
            this.allTablesCount = res.docs.length;
        }, err => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_tables_api_tables_api_service__WEBPACK_IMPORTED_MODULE_1__.TablesApiService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 14, vars: 2, consts: [[3, "headings"], [1, "container"], [1, "row"], [1, "col-md-3", "mb-4"], [1, "card", "border-left-secondary", "shadow", "h-100", "py-2"], [1, "card-body"], [1, "row", "no-gutters", "align-items-center"], [1, "col", "mr-2"], [1, "text-xs", "font-weight-bold", "text-uppercase", "mb-1"], [1, "h5", "mb-0", "font-weight-bold", "text-gray-800"], ["connectionToastComponentReference", ""]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "No. of Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-connection-toast", null, 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("headings", ctx.navHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.allTablesCount);
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_2__.ModuleTopnavComponent, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 12558:
/*!**********************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/tables/settings/settings.component.ts ***!
  \**********************************************************************************************/
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

/***/ 75944:
/*!**************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/tables/table-form/table-form.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableFormComponent": () => (/* binding */ TableFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);



class TableFormComponent {
    constructor() {
        this.tableForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({});
    }
    ngOnInit() {
        this.initTableForm();
    }
    initTableForm() {
        this.tableForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
            tableNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            tableType: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            capacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            tableStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
        });
    }
}
TableFormComponent.ɵfac = function TableFormComponent_Factory(t) { return new (t || TableFormComponent)(); };
TableFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TableFormComponent, selectors: [["app-table-form"]], decls: 42, vars: 1, consts: [[1, "page-form", 3, "formGroup"], [1, "row", "page-form"], [1, "col-md-12"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-md-end", "float-sm-start", "mt-1"], [1, "col-md-8"], ["formControlName", "tableNumber", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "tableType", 1, "form-control", "form-control-sm", "w-100"], ["type", "number", "min", "0", "formControlName", "capacity", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "location", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "tableStatus", 1, "form-control", "form-control-sm", "w-100"]], template: function TableFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Table Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Table No. :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Table Type :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Capacity :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Location :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Table Status :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Occupied");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Vacant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Need Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.tableForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 46445:
/*!********************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/tables/tables.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesModule": () => (/* binding */ TablesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ 34459);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 18847);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ 12558);
/* harmony import */ var _all_tables_all_tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-tables/all-tables.component */ 74898);
/* harmony import */ var _add_table_add_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-table/add-table.component */ 21504);
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-table/view-table.component */ 83699);
/* harmony import */ var _table_form_table_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-form/table-form.component */ 75944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1858);












class TablesModule {
}
TablesModule.ɵfac = function TablesModule_Factory(t) { return new (t || TablesModule)(); };
TablesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: TablesModule });
TablesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_11__.ChartsModule,
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](TablesModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__.SettingsComponent,
        _all_tables_all_tables_component__WEBPACK_IMPORTED_MODULE_3__.AllTablesComponent,
        _add_table_add_table_component__WEBPACK_IMPORTED_MODULE_4__.AddTableComponent,
        _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_5__.ViewTableComponent,
        _table_form_table_form_component__WEBPACK_IMPORTED_MODULE_6__.TableFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_11__.ChartsModule,
        projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule] }); })();


/***/ }),

/***/ 83699:
/*!**************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/tables/view-table/view-table.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewTableComponent": () => (/* binding */ ViewTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _table_form_table_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../table-form/table-form.component */ 75944);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_tables_api_tables_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/tables-api/tables-api.service */ 45239);
/* harmony import */ var projects_restaurant_src_app_services_printing_tables_print_tables_print_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/restaurant/src/app/services/printing/tables-print/tables-print.service */ 39010);








const _c0 = ["editButtonElementReference"];
const _c1 = ["dismissButtonElementReference"];
const _c2 = ["tableFormComponentReference"];
const _c3 = ["connectionToastComponentReference"];
class ViewTableComponent {
    constructor(router, tablesApi, tablesPrint) {
        this.router = router;
        this.tablesApi = tablesApi;
        this.tablesPrint = tablesPrint;
        this.saveTableEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.deleteTableEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.isTableSaving = false;
        this.isTableDeleting = false;
    }
    ngOnInit() {
    }
    openModal(data) {
        this.tableData = data;
        this.tableForm.tableForm.controls.tableNumber.setValue(data.data().table_number);
        this.tableForm.tableForm.controls.tableType.setValue(data.data().table_type);
        this.tableForm.tableForm.controls.capacity.setValue(data.data().capacity);
        this.tableForm.tableForm.controls.location.setValue(data.data().location);
        this.tableForm.tableForm.controls.tableStatus.setValue(data.data().table_status);
        this.editButton.nativeElement.click();
    }
    saveTable() {
        let data = {
            table_number: this.tableForm.tableForm.controls.tableNumber.value,
            table_type: this.tableForm.tableForm.controls.tableType.value,
            capacity: this.tableForm.tableForm.controls.capacity.value,
            location: this.tableForm.tableForm.controls.location.value,
            table_status: this.tableForm.tableForm.controls.tableStatus.value,
        };
        let table = {
            id: this.tableData.id,
            data: data
        };
        this.saveTableEvent.emit(table);
    }
    deleteTable() {
        this.deleteTableEvent.emit(this.tableData.id);
    }
}
ViewTableComponent.ɵfac = function ViewTableComponent_Factory(t) { return new (t || ViewTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_tables_api_tables_api_service__WEBPACK_IMPORTED_MODULE_2__.TablesApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_printing_tables_print_tables_print_service__WEBPACK_IMPORTED_MODULE_3__.TablesPrintService)); };
ViewTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ViewTableComponent, selectors: [["app-view-table"]], viewQuery: function ViewTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5, _table_form_table_form_component__WEBPACK_IMPORTED_MODULE_0__.TableFormComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.editButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dismissButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tableForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, outputs: { saveTableEvent: "saveTableEvent", deleteTableEvent: "deleteTableEvent" }, decls: 21, vars: 3, consts: [["data-bs-toggle", "modal", "data-bs-target", "#editTableModal", 3, "hidden"], ["editButtonElementReference", ""], ["id", "editTableModal", "tabindex", "-1", "aria-labelledby", "editTableModalLabel", "aria-hidden", "true", 1, "modal", "fade", "form-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-light"], ["id", "editTableModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["dismissButtonElementReference", ""], [1, "modal-body"], ["tableFormComponentReference", ""], [1, "modal-footer"], [1, "btn", "btn-sm", "btn-secondary", "modal-form-btn", 3, "disabled", "click"], ["data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-secondary", "modal-form-btn"]], template: function ViewTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "View Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-table-form", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewTableComponent_Template_button_click_15_listener() { return ctx.saveTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewTableComponent_Template_button_click_17_listener() { return ctx.deleteTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isTableSaving);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isTableDeleting);
    } }, directives: [_table_form_table_form_component__WEBPACK_IMPORTED_MODULE_0__.TableFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 77022:
/*!*********************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/tables-page/tables-page-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesPageRoutingModule": () => (/* binding */ TablesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _tables_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tables-page.component */ 58661);
/* harmony import */ var _components_modules_tables_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/modules/tables/dashboard/dashboard.component */ 18847);
/* harmony import */ var _components_modules_tables_all_tables_all_tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/modules/tables/all-tables/all-tables.component */ 74898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);






const routes = [
    {
        path: "",
        component: _tables_page_component__WEBPACK_IMPORTED_MODULE_0__.TablesPageComponent,
        children: [
            { path: "", component: _components_modules_tables_all_tables_all_tables_component__WEBPACK_IMPORTED_MODULE_2__.AllTablesComponent },
            { path: "dashboard", component: _components_modules_tables_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent },
            { path: "all-tables", component: _components_modules_tables_all_tables_all_tables_component__WEBPACK_IMPORTED_MODULE_2__.AllTablesComponent },
        ]
    }
];
class TablesPageRoutingModule {
}
TablesPageRoutingModule.ɵfac = function TablesPageRoutingModule_Factory(t) { return new (t || TablesPageRoutingModule)(); };
TablesPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TablesPageRoutingModule });
TablesPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TablesPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 58661:
/*!****************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/tables-page/tables-page.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesPageComponent": () => (/* binding */ TablesPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../application/src/app/components/main-navbar/main-navbar/main-navbar.component */ 28088);
/* harmony import */ var _personal_src_app_components_module_utilities_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../personal/src/app/components/module-utilities/module-sidenav/module-sidenav.component */ 7632);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 869);




class TablesPageComponent {
    constructor() {
        this.navLinks = [
            { text: "All Tables", url: "/home/tables/all-tables", icon: "bi bi-list-ul" },
        ];
    }
    ngOnInit() {
    }
}
TablesPageComponent.ɵfac = function TablesPageComponent_Factory(t) { return new (t || TablesPageComponent)(); };
TablesPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TablesPageComponent, selectors: [["app-tables-page"]], decls: 6, vars: 4, consts: [[3, "navBrand", "source"], ["id", "wrapper"], [3, "navLinks", "heading"], ["id", "content-wrapper", 1, "d-flex", "flex-column"], ["id", "content"]], template: function TablesPageComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navLinks", ctx.navLinks)("heading", "Tables");
    } }, directives: [_application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__.MainNavbarComponent, _personal_src_app_components_module_utilities_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.ModuleSidenavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZXMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 23616:
/*!*************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/tables-page/tables-page.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesPageModule": () => (/* binding */ TablesPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _tables_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tables-page-routing.module */ 77022);
/* harmony import */ var projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/application/src/app/components/main-navbar/main-navbar.module */ 7264);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _components_modules_tables_tables_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modules/tables/tables.module */ 46445);
/* harmony import */ var _tables_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tables-page.component */ 58661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);







class TablesPageModule {
}
TablesPageModule.ɵfac = function TablesPageModule_Factory(t) { return new (t || TablesPageModule)(); };
TablesPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: TablesPageModule });
TablesPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _tables_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.TablesPageRoutingModule,
            projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
            _components_modules_tables_tables_module__WEBPACK_IMPORTED_MODULE_3__.TablesModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TablesPageModule, { declarations: [_tables_page_component__WEBPACK_IMPORTED_MODULE_4__.TablesPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _tables_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.TablesPageRoutingModule,
        projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
        projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
        _components_modules_tables_tables_module__WEBPACK_IMPORTED_MODULE_3__.TablesModule] }); })();


/***/ }),

/***/ 45239:
/*!***************************************************************************************!*\
  !*** ./projects/restaurant/src/app/services/modules/tables-api/tables-api.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesApiService": () => (/* binding */ TablesApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);


class TablesApiService {
    constructor(afs) {
        this.afs = afs;
        this.tableRef = this.afs.collection('restaurant/module_tables/restaurant_table');
    }
    // tables
    createTable(tableData) {
        return this.tableRef.add(tableData);
    }
    getTable(tableId) {
        return this.tableRef.doc(tableId).ref.get();
    }
    updateTable(tableId, tableData) {
        console.log(tableId);
        console.log(tableData);
        return this.tableRef.doc(tableId).update(tableData);
    }
    deleteTable(tableId) {
        return this.tableRef.doc(tableId).delete();
    }
    getAccountTable(sorting, pageSize) {
        return this.tableRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .limit(pageSize)
            .get();
    }
    getAccountTableNext(sorting, pageSize, pageStart) {
        return this.tableRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getAccountTablePrev(sorting, pageSize, pageStart) {
        return this.tableRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllAccountTable() {
        return this.tableRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy("created_at", "desc")
            .get();
    }
}
TablesApiService.ɵfac = function TablesApiService_Factory(t) { return new (t || TablesApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
TablesApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TablesApiService, factory: TablesApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 39010:
/*!********************************************************************************************!*\
  !*** ./projects/restaurant/src/app/services/printing/tables-print/tables-print.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesPrintService": () => (/* binding */ TablesPrintService)
/* harmony export */ });
/* harmony import */ var C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 11733);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_services_pdf_print_pdf_print_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/services/pdf-print/pdf-print.service */ 46424);
/* harmony import */ var projects_restaurant_src_app_services_modules_tables_api_tables_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/tables-api/tables-api.service */ 45239);




class TablesPrintService {
  constructor(pdfPrint, tablesApi) {
    this.pdfPrint = pdfPrint;
    this.tablesApi = tablesApi;
  } // all tables


  printAllTables() {
    var _this = this;

    return (0,C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const tablesGridData = yield _this.tablesApi.getAllAccountTable();
      var body = [['Table No.', 'Table Type', 'Table Status']];

      for (let data of tablesGridData.docs) {
        var row = [];
        let rowData = data.data();
        row.push(rowData.table_number);
        row.push(rowData.table_type);
        row.push(rowData.table_status);
        body.push(row);
      }

      let content = [{
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['30%', '35%', '35%'],
          body: body
        }
      }];

      _this.pdfPrint.openPdf(content);
    })();
  }

}

TablesPrintService.ɵfac = function TablesPrintService_Factory(t) {
  return new (t || TablesPrintService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](projects_personal_src_app_services_pdf_print_pdf_print_service__WEBPACK_IMPORTED_MODULE_1__.PdfPrintService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](projects_restaurant_src_app_services_modules_tables_api_tables_api_service__WEBPACK_IMPORTED_MODULE_2__.TablesApiService));
};

TablesPrintService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TablesPrintService,
  factory: TablesPrintService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=projects_restaurant_src_app_pages_modules_tables-page_tables-page_module_ts.js.map