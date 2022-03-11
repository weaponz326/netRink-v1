"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["projects_restaurant_src_app_pages_modules_customers-page_customers-page_module_ts"],{

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

/***/ 947:
/*!***********************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/customers/all-customers/all-customers.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllCustomersComponent": () => (/* binding */ AllCustomersComponent)
/* harmony export */ });
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_customers_api_customers_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/customers-api/customers-api.service */ 90365);
/* harmony import */ var projects_restaurant_src_app_services_printing_customers_print_customers_print_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/printing/customers-print/customers-print.service */ 80937);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);








const _c0 = ["connectionToastComponentReference"];
function AllCustomersComponent_i_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllCustomersComponent_i_16_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.sortTable("customer_code", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllCustomersComponent_i_17_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllCustomersComponent_i_17_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.sortTable("customer_code", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllCustomersComponent_i_18_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllCustomersComponent_i_18_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.sortTable("customer_code", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllCustomersComponent_i_21_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllCustomersComponent_i_21_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.sortTable("customer_name", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllCustomersComponent_i_22_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllCustomersComponent_i_22_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.sortTable("customer_name", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllCustomersComponent_i_23_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllCustomersComponent_i_23_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.sortTable("customer_name", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllCustomersComponent_i_26_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllCustomersComponent_i_26_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r25.sortTable("phone", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllCustomersComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllCustomersComponent_i_27_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.sortTable("phone", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllCustomersComponent_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllCustomersComponent_i_28_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.sortTable("phone", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllCustomersComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dblclick", function AllCustomersComponent_tr_30_Template_tr_dblclick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const data_r31 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.viewCustomer(data_r31.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r31 == null ? null : data_r31.data().customer_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r31 == null ? null : data_r31.data().customer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r31 == null ? null : data_r31.data().phone);
} }
function AllCustomersComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AllCustomersComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class AllCustomersComponent {
    constructor(router, customersApi, customersPrint) {
        this.router = router;
        this.customersApi = customersApi;
        this.customersPrint = customersPrint;
        this.navHeading = [
            { text: "All Customers", url: "/home/customers/all-customers" },
        ];
        this.customersGridData = [];
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
        this.getAccountCustomer();
    }
    getAccountCustomer() {
        this.isFetchingGridData = true;
        this.customersApi.getAccountCustomer(this.sortParams, 20)
            .then((res) => {
            console.log(res);
            this.customersGridData = res.docs;
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
        this.customersApi.getAccountCustomerNext(this.sortParams, 20, this.nextStartAfter)
            .then((res) => {
            console.log(res);
            this.customersGridData = res.docs;
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
        this.customersApi.getAccountCustomerPrev(this.sortParams, 20, this.prevStartAt)
            .then((res) => {
            console.log(res);
            this.customersGridData = res.docs;
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
        this.getAccountCustomer();
    }
    viewCustomer(customerId) {
        console.log(customerId);
        sessionStorage.setItem('restaurant_customer_id', customerId);
        this.router.navigateByUrl('/home/customers/view-customer');
    }
    onPrint() {
        console.log("lets start printing...");
        this.customersPrint.printAllCustomers();
    }
}
AllCustomersComponent.ɵfac = function AllCustomersComponent_Factory(t) { return new (t || AllCustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_customers_api_customers_api_service__WEBPACK_IMPORTED_MODULE_1__.CustomersApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_printing_customers_print_customers_print_service__WEBPACK_IMPORTED_MODULE_2__.CustomersPrintService)); };
AllCustomersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AllCustomersComponent, selectors: [["app-all-customers"]], viewQuery: function AllCustomersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 49, vars: 18, consts: [[3, "headings", "showPrint", "print"], [1, "container"], [1, "row"], [1, "col-md-8"], [1, "row", "mb-3"], [1, "col-md-12"], ["routerLink", "/home/customers/new-customer", 1, "btn", "btn-secondary", "page-add-btn"], [1, "btn", "btn-light", "border", "float-end", "page-refresh-btn", 3, "disabled", "click"], [1, "bi", "bi-arrow-clockwise"], [1, "overflow-auto"], [1, "table", "table-bordered", "table-sm", "w-100", "page-table"], [1, "bg-light"], ["width", "25%", 1, "min-width-2"], ["class", "bi bi-filter float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-down float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-up float-end list-pointer", 3, "click", 4, "ngIf"], ["width", "50%", 1, "min-width-4"], ["class", "table-pointer", 3, "dblclick", 4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["colspan", "3"], ["aria-label", "Page navigation", 1, "nav-light", "float-end"], [1, "pagination", "pagination-sm", "mb-0", "justify-content-end"], [1, "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-left-fill"], [1, "page-item"], ["href", "#", "aria-label", "Current", 1, "page-link", 3, "click"], ["href", "#", "aria-label", "Last", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-right-fill"], ["connectionToastComponentReference", ""], [1, "bi", "bi-filter", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-down", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-up", "float-end", "list-pointer", 3, "click"], [1, "table-pointer", 3, "dblclick"], [1, "text-center"], ["colspan", "4"], ["role", "status", 1, "spinner-grow", "m-4"], [1, "visually-hidden"], [1, "m-4"]], template: function AllCustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("print", function AllCustomersComponent_Template_app_module_topnav_print_0_listener() { return ctx.onPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "New Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllCustomersComponent_Template_button_click_8_listener() { return ctx.getAccountCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Customer ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, AllCustomersComponent_i_16_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, AllCustomersComponent_i_17_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, AllCustomersComponent_i_18_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Customer Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, AllCustomersComponent_i_21_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, AllCustomersComponent_i_22_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, AllCustomersComponent_i_23_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Phone No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AllCustomersComponent_i_26_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, AllCustomersComponent_i_27_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, AllCustomersComponent_i_28_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, AllCustomersComponent_tr_30_Template, 7, 3, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, AllCustomersComponent_tr_31_Template, 5, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, AllCustomersComponent_tr_32_Template, 4, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "nav", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllCustomersComponent_Template_a_click_39_listener($event) { return ctx.previousPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllCustomersComponent_Template_a_click_42_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AllCustomersComponent_Template_a_click_45_listener($event) { return ctx.nextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "i", 28);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "app-connection-toast", null, 29);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("headings", ctx.navHeading)("showPrint", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "customer_code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "customer_code" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "customer_code" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "customer_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "customer_name" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "customer_name" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "phone" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "phone" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.customersGridData);
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
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__.ModuleTopnavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtY3VzdG9tZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4872:
/*!***********************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/customers/customer-form/customer-form.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerFormComponent": () => (/* binding */ CustomerFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);



class CustomerFormComponent {
    constructor() {
        this.customerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({});
    }
    ngOnInit() {
        this.initCustomerForm();
    }
    initCustomerForm() {
        this.customerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
            customerCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            customerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            customerType: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            allergies: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
            preferences: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
        });
    }
}
CustomerFormComponent.ɵfac = function CustomerFormComponent_Factory(t) { return new (t || CustomerFormComponent)(); };
CustomerFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomerFormComponent, selectors: [["app-customer-form"]], decls: 76, vars: 1, consts: [[1, "page-form", 3, "formGroup"], [1, "row", "page-form"], [1, "col-md-12"], [1, "col-md-6"], [1, "row", "mb-1"], [1, "col-md-4"], [1, "float-md-end", "float-sm-start", "mt-1"], [1, "col-md-8"], ["formControlName", "customerCode", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "customerName", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "customerType", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "allergies", "rows", "3", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "preferences", "rows", "3", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "phone", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "email", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "address", "rows", "3", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "state", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "city", 1, "form-control", "form-control-sm", "w-100"]], template: function CustomerFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Customer Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Customer ID :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Customer Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Customer Type :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Individual");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Couple");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Allergies :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Preferences :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Phone No. :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Address :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "State/Region :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "City/Town :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.customerForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 45553:
/*!**************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/customers/customers.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersModule": () => (/* binding */ CustomersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ 34459);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 11394);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ 68161);
/* harmony import */ var _all_customers_all_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-customers/all-customers.component */ 947);
/* harmony import */ var _new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-customer/new-customer.component */ 51049);
/* harmony import */ var _view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-customer/view-customer.component */ 68276);
/* harmony import */ var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-form/customer-form.component */ 4872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1858);












class CustomersModule {
}
CustomersModule.ɵfac = function CustomersModule_Factory(t) { return new (t || CustomersModule)(); };
CustomersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CustomersModule });
CustomersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_11__.ChartsModule,
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CustomersModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__.SettingsComponent,
        _all_customers_all_customers_component__WEBPACK_IMPORTED_MODULE_3__.AllCustomersComponent,
        _new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_4__.NewCustomerComponent,
        _view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_5__.ViewCustomerComponent,
        _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_6__.CustomerFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_11__.ChartsModule,
        projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_0__.ModuleUtilitiesModule] }); })();


/***/ }),

/***/ 11394:
/*!***************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/customers/dashboard/dashboard.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/moment */ 76246);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_restaurant_src_app_services_modules_customers_api_customers_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/customers-api/customers-api.service */ 90365);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ 34459);







const _c0 = ["connectionToastComponentReference"];
class DashboardComponent {
    constructor(customersApi) {
        this.customersApi = customersApi;
        this.navHeading = [
            { text: "Dashboard", url: "/home/customers/dashboard" },
        ];
        this.weekCustomersCount = 0;
        this.customersLineChartData = [{ data: [0], label: 'Menu Groups' }];
        this.customersLineChartLabels = [""];
        this.chartOptions = {};
        this.today = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()();
    }
    ngOnInit() {
        this.initChart();
        this.getWeekCustomer();
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
    getWeekCustomer() {
        this.customersApi.getWeekCustomer(moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(this.today).add(-1, 'months').toDate(), this.today.toDate())
            .then(res => {
            console.log(res);
            this.weekCustomersData = res.docs;
            this.weekCustomersCount = res.docs.length;
            this.setCustomerChartData();
        }, err => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    setCustomerChartData() {
        this.customersLineChartLabels = [];
        for (let i = 7; i > 0; i--) {
            var d = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(this.today).add(-i, 'days');
            this.customersLineChartLabels.push(d.toDate().toISOString().slice(0, 10));
        }
        console.log(this.customersLineChartLabels);
        let dataCount = [];
        for (let i = 7; i > 0; i--) {
            dataCount.push(0);
        }
        console.log(dataCount);
        this.weekCustomersData.forEach((customer) => {
            var customerDate = customer.data().created_at.toDate().toISOString().slice(0, 10);
            for (let i = 7; i > 0; i--) {
                if (this.customersLineChartLabels[i] == customerDate) {
                    dataCount[i]++;
                }
            }
        });
        console.log(dataCount);
        this.customersLineChartData = [{ data: dataCount, label: 'Customers' }];
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_customers_api_customers_api_service__WEBPACK_IMPORTED_MODULE_2__.CustomersApiService)); };
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "New Customers this Week");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "New Customers by Day");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.weekCustomersCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datasets", ctx.customersLineChartData)("labels", ctx.customersLineChartLabels)("options", ctx.chartOptions)("legend", true)("chartType", "line");
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__.ModuleTopnavComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.BaseChartDirective, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 51049:
/*!*********************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/customers/new-customer/new-customer.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewCustomerComponent": () => (/* binding */ NewCustomerComponent)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 16448);
/* harmony import */ var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer-form/customer-form.component */ 4872);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_customers_api_customers_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/customers-api/customers-api.service */ 90365);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);









const _c0 = ["customerFormComponentReference"];
const _c1 = ["connectionToastComponentReference"];
class NewCustomerComponent {
    constructor(router, customersApi) {
        this.router = router;
        this.customersApi = customersApi;
        this.navHeading = [
            { text: "New Customer", url: "/home/customers/new-customer" },
        ];
        this.isCustomerSaving = false;
    }
    ngOnInit() {
    }
    createCustomer() {
        console.log('u are saving a new customer');
        var data = {
            created_at: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
            account: localStorage.getItem('restaurant_id'),
            customer_code: this.customerForm.customerForm.controls.customerCode.value,
            customer_name: this.customerForm.customerForm.controls.customerName.value,
            customer_type: this.customerForm.customerForm.controls.customerType.value,
            phone: this.customerForm.customerForm.controls.phone.value,
            email: this.customerForm.customerForm.controls.email.value,
            address: this.customerForm.customerForm.controls.address.value,
            state: this.customerForm.customerForm.controls.state.value,
            city: this.customerForm.customerForm.controls.city.value,
            allergies: this.customerForm.customerForm.controls.allergies.value,
            preferences: this.customerForm.customerForm.controls.preferences.value,
        };
        console.log(data);
        this.isCustomerSaving = true;
        this.customersApi.createCustomer(data)
            .then((res) => {
            console.log(res);
            this.isCustomerSaving = false;
            sessionStorage.setItem('restaurant_customer_id', res.id);
            this.router.navigateByUrl('/home/customers/view-customer');
        }, (err) => {
            console.log(err);
            this.isCustomerSaving = false;
            this.connectionToast.openToast();
        });
    }
}
NewCustomerComponent.ɵfac = function NewCustomerComponent_Factory(t) { return new (t || NewCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_customers_api_customers_api_service__WEBPACK_IMPORTED_MODULE_3__.CustomersApiService)); };
NewCustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: NewCustomerComponent, selectors: [["app-new-customer"]], viewQuery: function NewCustomerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5, _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_1__.CustomerFormComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.customerForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 12, vars: 2, consts: [[3, "headings"], [1, "container"], ["customerFormComponentReference", ""], [1, "row", "page-form"], [1, "col-md-12"], ["type", "button", "routerLink", "/home/customers/all-customers", 1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn"], [1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn", 3, "disabled", "click"], ["connectionToastComponentReference", ""]], template: function NewCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-customer-form", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewCustomerComponent_Template_button_click_8_listener() { return ctx.createCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-connection-toast", null, 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("headings", ctx.navHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isCustomerSaving);
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_4__.ModuleTopnavComponent, _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_1__.CustomerFormComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_2__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctY3VzdG9tZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 68161:
/*!*************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/customers/settings/settings.component.ts ***!
  \*************************************************************************************************/
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

/***/ 68276:
/*!***********************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/customers/view-customer/view-customer.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewCustomerComponent": () => (/* binding */ ViewCustomerComponent)
/* harmony export */ });
/* harmony import */ var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customer-form/customer-form.component */ 4872);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/delete-modal/delete-modal.component */ 88622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var projects_restaurant_src_app_services_modules_customers_api_customers_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/customers-api/customers-api.service */ 90365);
/* harmony import */ var projects_restaurant_src_app_services_printing_customers_print_customers_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/restaurant/src/app/services/printing/customers-print/customers-print.service */ 80937);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 7005);












const _c0 = ["customerFormComponentReference"];
const _c1 = ["connectionToastComponentReference"];
const _c2 = ["deleteModalComponentReference"];
function ViewCustomerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewCustomerComponent_div_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.confirmDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewCustomerComponent_div_4_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.updateCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.isCustomerDeleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.isCustomerSaving);
} }
function ViewCustomerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class ViewCustomerComponent {
    constructor(router, customersApi, customersPrint) {
        this.router = router;
        this.customersApi = customersApi;
        this.customersPrint = customersPrint;
        this.navHeading = [
            { text: "All Customers", url: "/home/customers/all-customers" },
            { text: "View Customer", url: "/home/customers/view-customer" },
        ];
        this.isCustomerLoading = false;
        this.isCustomerSaving = false;
        this.isCustomerDeleting = false;
    }
    ngOnInit() {
        this.getCustomer();
    }
    getCustomer() {
        this.isCustomerLoading = true;
        this.customersApi.getCustomer()
            .then((res) => {
            console.log(res);
            this.customerData = res;
            this.isCustomerLoading = false;
            this.customerForm.customerForm.controls.customerCode.setValue(this.customerData.data().customer_code);
            this.customerForm.customerForm.controls.customerName.setValue(this.customerData.data().customer_name);
            this.customerForm.customerForm.controls.customerType.setValue(this.customerData.data().customer_type);
            this.customerForm.customerForm.controls.phone.setValue(this.customerData.data().phone);
            this.customerForm.customerForm.controls.email.setValue(this.customerData.data().email);
            this.customerForm.customerForm.controls.address.setValue(this.customerData.data().address);
            this.customerForm.customerForm.controls.state.setValue(this.customerData.data().state);
            this.customerForm.customerForm.controls.city.setValue(this.customerData.data().city);
            this.customerForm.customerForm.controls.allergies.setValue(this.customerData.data().allergies);
            this.customerForm.customerForm.controls.preferences.setValue(this.customerData.data().preferences);
        }, (err) => {
            console.log(err);
            this.isCustomerLoading = false;
            this.connectionToast.openToast();
        });
    }
    updateCustomer() {
        console.log('u are saving a new customer');
        var data = {
            customer_code: this.customerForm.customerForm.controls.customerCode.value,
            customer_name: this.customerForm.customerForm.controls.customerName.value,
            customer_type: this.customerForm.customerForm.controls.customerType.value,
            phone: this.customerForm.customerForm.controls.phone.value,
            email: this.customerForm.customerForm.controls.email.value,
            address: this.customerForm.customerForm.controls.address.value,
            state: this.customerForm.customerForm.controls.state.value,
            city: this.customerForm.customerForm.controls.city.value,
            allergies: this.customerForm.customerForm.controls.allergies.value,
            preferences: this.customerForm.customerForm.controls.preferences.value,
        };
        console.log(data);
        this.isCustomerSaving = true;
        this.customersApi.updateCustomer(data)
            .then((res) => {
            console.log(res);
            this.isCustomerSaving = false;
        }, (err) => {
            console.log(err);
            this.isCustomerSaving = false;
            this.connectionToast.openToast();
        });
    }
    confirmDelete() {
        this.deleteModal.openModal();
    }
    deleteCustomer() {
        this.isCustomerDeleting = true;
        this.customersApi.deleteCustomer()
            .then((res) => {
            console.log(res);
            this.router.navigateByUrl('/home/customers/all-customers');
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    onPrint() {
        console.log("lets start printing...");
        this.customersPrint.printViewCustomer();
    }
}
ViewCustomerComponent.ɵfac = function ViewCustomerComponent_Factory(t) { return new (t || ViewCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_customers_api_customers_api_service__WEBPACK_IMPORTED_MODULE_3__.CustomersApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_printing_customers_print_customers_print_service__WEBPACK_IMPORTED_MODULE_4__.CustomersPrintService)); };
ViewCustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ViewCustomerComponent, selectors: [["app-view-customer"]], viewQuery: function ViewCustomerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5, _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_0__.CustomerFormComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5, projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_2__.DeleteModalComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.customerForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.deleteModal = _t.first);
    } }, decls: 10, vars: 3, consts: [[3, "headings"], [1, "container"], ["customerFormComponentReference", ""], ["class", "row page-form", 4, "ngIf"], ["connectionToastComponentReference", ""], [3, "confirmEvent"], ["deleteModalComponentReference", ""], [1, "row", "page-form"], [1, "col-md-12"], ["type", "button", "routerLink", "/home/customers/all-customers", 1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn", 3, "disabled", "click"], [1, "btn", "btn-secondary", "btn-sm", "float-end", "ms-1", "page-form-btn", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-sm", "float-end", "ms-1", "btn-light", "page-form-btn"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm"], [1, "visually-hidden"]], template: function ViewCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-customer-form", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ViewCustomerComponent_div_4_Template, 8, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ViewCustomerComponent_div_5_Template, 6, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-connection-toast", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "app-delete-modal", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("confirmEvent", function ViewCustomerComponent_Template_app_delete_modal_confirmEvent_8_listener() { return ctx.deleteCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("headings", ctx.navHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isCustomerLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isCustomerLoading);
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_5__.ModuleTopnavComponent, _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_0__.CustomerFormComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent, projects_personal_src_app_components_module_utilities_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_2__.DeleteModalComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 30805:
/*!*************************************************************************************!*\
  !*** ./projects/restaurant/src/app/guards/modules/customers/view-customer.guard.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewCustomerGuard": () => (/* binding */ ViewCustomerGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class ViewCustomerGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        if (!!sessionStorage.getItem('restaurant_customer_id')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/home/customers');
            return false;
        }
    }
}
ViewCustomerGuard.ɵfac = function ViewCustomerGuard_Factory(t) { return new (t || ViewCustomerGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
ViewCustomerGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewCustomerGuard, factory: ViewCustomerGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 63208:
/*!***************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/customers-page/customers-page-routing.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersPageRoutingModule": () => (/* binding */ CustomersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _customers_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers-page.component */ 68323);
/* harmony import */ var _components_modules_customers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/modules/customers/dashboard/dashboard.component */ 11394);
/* harmony import */ var _components_modules_customers_all_customers_all_customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/modules/customers/all-customers/all-customers.component */ 947);
/* harmony import */ var _components_modules_customers_new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modules/customers/new-customer/new-customer.component */ 51049);
/* harmony import */ var _components_modules_customers_view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/modules/customers/view-customer/view-customer.component */ 68276);
/* harmony import */ var _guards_modules_customers_view_customer_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../guards/modules/customers/view-customer.guard */ 30805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1858);









const routes = [
    {
        path: "",
        component: _customers_page_component__WEBPACK_IMPORTED_MODULE_0__.CustomersPageComponent,
        children: [
            { path: "", component: _components_modules_customers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent },
            { path: "dashboard", component: _components_modules_customers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent },
            { path: "all-customers", component: _components_modules_customers_all_customers_all_customers_component__WEBPACK_IMPORTED_MODULE_2__.AllCustomersComponent },
            { path: "new-customer", component: _components_modules_customers_new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_3__.NewCustomerComponent },
            { path: "view-customer", component: _components_modules_customers_view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_4__.ViewCustomerComponent, canActivate: [_guards_modules_customers_view_customer_guard__WEBPACK_IMPORTED_MODULE_5__.ViewCustomerGuard] }
        ]
    }
];
class CustomersPageRoutingModule {
}
CustomersPageRoutingModule.ɵfac = function CustomersPageRoutingModule_Factory(t) { return new (t || CustomersPageRoutingModule)(); };
CustomersPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CustomersPageRoutingModule });
CustomersPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CustomersPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 68323:
/*!**********************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/customers-page/customers-page.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersPageComponent": () => (/* binding */ CustomersPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../application/src/app/components/main-navbar/main-navbar/main-navbar.component */ 28088);
/* harmony import */ var _personal_src_app_components_module_utilities_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../personal/src/app/components/module-utilities/module-sidenav/module-sidenav.component */ 7632);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 869);




class CustomersPageComponent {
    constructor() {
        this.navLinks = [
            { text: "All Customers", url: "/home/customers/all-customers", icon: "bi bi-list-ul" },
            { text: "New Customer", url: "/home/customers/new-customer", icon: "bi bi-plus-square" },
        ];
    }
    ngOnInit() {
    }
}
CustomersPageComponent.ɵfac = function CustomersPageComponent_Factory(t) { return new (t || CustomersPageComponent)(); };
CustomersPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomersPageComponent, selectors: [["app-customers-page"]], decls: 6, vars: 4, consts: [[3, "navBrand", "source"], ["id", "wrapper"], [3, "navLinks", "heading"], ["id", "content-wrapper", 1, "d-flex", "flex-column"], ["id", "content"]], template: function CustomersPageComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navLinks", ctx.navLinks)("heading", "Customers");
    } }, directives: [_application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__.MainNavbarComponent, _personal_src_app_components_module_utilities_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.ModuleSidenavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lcnMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 70358:
/*!*******************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/customers-page/customers-page.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersPageModule": () => (/* binding */ CustomersPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _customers_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers-page-routing.module */ 63208);
/* harmony import */ var projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/application/src/app/components/main-navbar/main-navbar.module */ 7264);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _components_modules_customers_customers_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modules/customers/customers.module */ 45553);
/* harmony import */ var _customers_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers-page.component */ 68323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);







class CustomersPageModule {
}
CustomersPageModule.ɵfac = function CustomersPageModule_Factory(t) { return new (t || CustomersPageModule)(); };
CustomersPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CustomersPageModule });
CustomersPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _customers_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomersPageRoutingModule,
            projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
            _components_modules_customers_customers_module__WEBPACK_IMPORTED_MODULE_3__.CustomersModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CustomersPageModule, { declarations: [_customers_page_component__WEBPACK_IMPORTED_MODULE_4__.CustomersPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _customers_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomersPageRoutingModule,
        projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
        projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
        _components_modules_customers_customers_module__WEBPACK_IMPORTED_MODULE_3__.CustomersModule] }); })();


/***/ }),

/***/ 90365:
/*!*********************************************************************************************!*\
  !*** ./projects/restaurant/src/app/services/modules/customers-api/customers-api.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersApiService": () => (/* binding */ CustomersApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);


class CustomersApiService {
    constructor(afs) {
        this.afs = afs;
        this.customerRef = this.afs.collection('restaurant/module_customers/restaurant_customer');
    }
    // customers
    createCustomer(customer) {
        return this.customerRef.add(customer);
    }
    getCustomer() {
        return this.customerRef.doc(String(sessionStorage.getItem('restaurant_customer_id'))).ref.get();
    }
    updateCustomer(customer) {
        return this.customerRef.doc(String(sessionStorage.getItem('restaurant_customer_id'))).update(customer);
    }
    deleteCustomer() {
        return this.customerRef.doc(String(sessionStorage.getItem('restaurant_customer_id'))).delete();
    }
    getAccountCustomer(sorting, pageSize) {
        return this.customerRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .limit(pageSize)
            .get();
    }
    getAccountCustomerNext(sorting, pageSize, pageStart) {
        return this.customerRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getAccountCustomerPrev(sorting, pageSize, pageStart) {
        return this.customerRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllAccountCustomer() {
        return this.customerRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy("created_by", "desc")
            .get();
    }
    // dashboard
    getWeekCustomer(startDate, endDate) {
        return this.customerRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .where("created_at", "<", startDate).where("created_at", ">", endDate)
            .get();
    }
}
CustomersApiService.ɵfac = function CustomersApiService_Factory(t) { return new (t || CustomersApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
CustomersApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomersApiService, factory: CustomersApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 80937:
/*!**************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/services/printing/customers-print/customers-print.service.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersPrintService": () => (/* binding */ CustomersPrintService)
/* harmony export */ });
/* harmony import */ var C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 11733);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_services_pdf_print_pdf_print_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/services/pdf-print/pdf-print.service */ 46424);
/* harmony import */ var projects_restaurant_src_app_services_modules_customers_api_customers_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/customers-api/customers-api.service */ 90365);




class CustomersPrintService {
  constructor(pdfPrint, customersApi) {
    this.pdfPrint = pdfPrint;
    this.customersApi = customersApi;
  } // all customers


  printAllCustomers() {
    var _this = this;

    return (0,C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const customersGridData = yield _this.customersApi.getAllAccountCustomer();
      var body = [['Customer ID', 'Customer Name', 'Phone No.']];

      for (let data of customersGridData.docs) {
        var row = [];
        let rowData = data.data();
        row.push(rowData.customer_code);
        row.push(rowData.customer_name);
        row.push(rowData.phone);
        body.push(row);
      }

      let content = [{
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['25%', '50%', '25%'],
          body: body
        }
      }];

      _this.pdfPrint.openPdf(content);
    })();
  } // view customer


  printViewCustomer() {
    var _this2 = this;

    return (0,C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const customerFormData = yield _this2.customersApi.getCustomer();
      let formData = customerFormData.data();
      let content = [{
        columns: [[{
          text: 'Customer Code: ' + formData.customer_code
        }, {
          text: 'Customer Name: ' + formData.customer_name
        }, {
          text: 'Customer Type: ' + formData.customer_type
        }, {
          text: 'Allergies: ' + formData.allergies
        }, {
          text: 'Preferences: ' + formData.preferences
        }, {
          text: 'Phone No.: ' + formData.phone
        }, {
          text: 'Email: ' + formData.email
        }, {
          text: 'Address: ' + formData.address
        }, {
          text: 'state: ' + formData.state
        }, {
          text: 'city: ' + formData.city
        }]]
      }];

      _this2.pdfPrint.openPdf(content);
    })();
  }

}

CustomersPrintService.ɵfac = function CustomersPrintService_Factory(t) {
  return new (t || CustomersPrintService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](projects_personal_src_app_services_pdf_print_pdf_print_service__WEBPACK_IMPORTED_MODULE_1__.PdfPrintService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](projects_restaurant_src_app_services_modules_customers_api_customers_api_service__WEBPACK_IMPORTED_MODULE_2__.CustomersApiService));
};

CustomersPrintService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CustomersPrintService,
  factory: CustomersPrintService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=projects_restaurant_src_app_pages_modules_customers-page_customers-page_module_ts.js.map