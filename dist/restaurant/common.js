"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["common"],{

/***/ 18140:
/*!*********************************************************************************!*\
  !*** ./projects/restaurant/src/app/services/account-api/account-api.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountApiService": () => (/* binding */ AccountApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);


class AccountApiService {
    constructor(afs) {
        this.afs = afs;
        this.accountRef = this.afs.collection('restaurant/accounts/restaurant_account');
    }
    // extended profile
    createAccount(account) {
        return this.accountRef.add(account);
    }
    getAccount() {
        return this.accountRef.doc(String(localStorage.getItem('restaurant_id'))).ref.get();
    }
    updateAccount(account) {
        return this.accountRef.doc(String(localStorage.getItem('restaurant_id'))).update(account);
    }
    // TODO: move functionality to admin and remove
    getAllAccountAccount() {
        return this.accountRef.ref
            .where("account", "==", String(localStorage.getItem('restaurant_id')))
            .get();
    }
}
AccountApiService.ɵfac = function AccountApiService_Factory(t) { return new (t || AccountApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
AccountApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountApiService, factory: AccountApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 11934:
/*!*************************************************************************************!*\
  !*** ./projects/restaurant/src/app/services/modules/admin-api/admin-api.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminApiService": () => (/* binding */ AdminApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);


class AdminApiService {
    constructor(afs) {
        this.afs = afs;
        this.personalUserSearchRef = this.afs.collection('personal/users/personal_user');
        this.accountUserRef = this.afs.collection('restaurant/module_admin/restaurant_account_user');
        this.userAccessRef = this.afs.collection('restaurant/module_admin/restaurant_user_access');
        this.invitationRef = this.afs.collection('restaurant/module_admin/restaurant_invitation');
    }
    // accountUser search
    getSearchResult(searchQuery) {
        return this.personalUserSearchRef.ref
            .where("last_name", ">=", searchQuery)
            .where("last_name", "<", searchQuery + "z")
            .get();
    }
    getSearchDetail(personalId) {
        return this.personalUserSearchRef.doc(personalId).ref.get();
    }
    // accountUser
    createAccountUser(userData) {
        return this.accountUserRef.add(userData);
    }
    getAccountUser() {
        return this.accountUserRef.doc(String(sessionStorage.getItem('restaurant_account_user_id'))).ref.get();
    }
    updateAccountUser(userData) {
        return this.accountUserRef.doc(String(sessionStorage.getItem('restaurant_account_user_id'))).update(userData);
    }
    deleteAccountUser() {
        return this.accountUserRef.doc(String(sessionStorage.getItem('restaurant_account_user_id'))).delete();
    }
    getAccountAccountUser(ordering) {
        return this.accountUserRef.ref
            .where("account.id", "==", String(localStorage.getItem('restaurant_id')))
            .orderBy(ordering.field, ordering.direction)
            .get();
    }
    getUserAccountUser() {
        return this.accountUserRef.ref
            .where("user.id", "==", String(localStorage.getItem('personal_id')))
            .get();
    }
    // access
    createUserAccess(accountUserID, accessData) {
        return this.userAccessRef.doc(accountUserID).set(accessData);
    }
    getUserAccess() {
        return this.userAccessRef.doc(String(sessionStorage.getItem('restaurant_account_user_id'))).ref.get();
    }
    updateUserAccess(accessData) {
        return this.userAccessRef.doc(String(sessionStorage.getItem('restaurant_account_user_id'))).update(accessData);
    }
    deleteUserAccess() {
        return this.userAccessRef.doc(String(sessionStorage.getItem('restaurant_account_user_id'))).delete();
    }
    // invitations
    createInvitation(invitationData) {
        return this.invitationRef.add(invitationData);
    }
    getInvitation(invitationId) {
        return this.invitationRef.doc(invitationId).ref.get();
    }
    updateInvitation(invitationId, invitationData) {
        return this.invitationRef.doc(invitationId).update(invitationData);
    }
    deleteInvitation(invitationId) {
        return this.invitationRef.doc(invitationId).delete();
    }
    getAccountInvitation(sorting, pageSize) {
        return this.invitationRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .limit(pageSize)
            .get();
    }
    getAccountInvitationNext(sorting, pageSize, pageStart) {
        return this.invitationRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getAccountInvitationPrev(sorting, pageSize, pageStart) {
        return this.invitationRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
}
AdminApiService.ɵfac = function AdminApiService_Factory(t) { return new (t || AdminApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
AdminApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminApiService, factory: AdminApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 75307:
/*!*****************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/services/modules/kitchen-stock-api/kitchen-stock-api.service.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KitchenStockApiService": () => (/* binding */ KitchenStockApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);


class KitchenStockApiService {
    constructor(afs) {
        this.afs = afs;
        this.stockItemRef = this.afs.collection('restaurant/module_kitchen_stock/restaurant_stock_item');
    }
    // stock item
    createStockItem(itemData) {
        return this.stockItemRef.add(itemData);
    }
    getStockItem(itemId) {
        return this.stockItemRef.doc(itemId).ref.get();
    }
    updateStockItem(itemId, itemData) {
        return this.stockItemRef.doc(itemId).update(itemData);
    }
    deleteStockItem(itemId) {
        return this.stockItemRef.doc(itemId).delete();
    }
    getAccountStockItem(sorting, pageSize) {
        return this.stockItemRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .limit(pageSize)
            .get();
    }
    getAccountStockItemNext(sorting, pageSize, pageStart) {
        return this.stockItemRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getAccountStockItemPrev(sorting, pageSize, pageStart) {
        return this.stockItemRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllAccountStockItem() {
        return this.stockItemRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy("created_at", "desc")
            .get();
    }
}
KitchenStockApiService.ɵfac = function KitchenStockApiService_Factory(t) { return new (t || KitchenStockApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
KitchenStockApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KitchenStockApiService, factory: KitchenStockApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 99504:
/*!***************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/services/modules/reservations-api/reservations-api.service.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationsApiService": () => (/* binding */ ReservationsApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);


class ReservationsApiService {
    constructor(afs) {
        this.afs = afs;
        this.reservationRef = this.afs.collection('restaurant/module_reservations/restaurant_reservation');
        this.reservationTableRef = this.afs.collection('restaurant/module_reservations/restaurant_reservation_table');
    }
    // reservations
    createReservation(reservation) {
        return this.reservationRef.add(reservation);
    }
    getReservation() {
        return this.reservationRef.doc(String(sessionStorage.getItem('restaurant_reservation_id'))).ref.get();
    }
    updateReservation(reservation) {
        return this.reservationRef.doc(String(sessionStorage.getItem('restaurant_reservation_id'))).update(reservation);
    }
    deleteReservation() {
        return this.reservationRef.doc(String(sessionStorage.getItem('restaurant_reservation_id'))).delete();
    }
    getAccountReservation(sorting, pageSize) {
        return this.reservationRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .limit(pageSize)
            .get();
    }
    getAccountReservationNext(sorting, pageSize, pageStart) {
        return this.reservationRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getAccountReservationPrev(sorting, pageSize, pageStart) {
        return this.reservationRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllAccountReservation() {
        return this.reservationRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // reservation tables
    createReservationTable(reservationTableData) {
        return this.reservationTableRef.add(reservationTableData);
    }
    getReservationTable(reservationTableId) {
        return this.reservationTableRef.doc(reservationTableId).ref.get();
    }
    updateReservationTable(reservationTableId, reservationTableData) {
        return this.reservationTableRef.doc(reservationTableId).update(reservationTableData);
    }
    deleteReservationTable(reservationTableId) {
        return this.reservationTableRef.doc(reservationTableId).delete();
    }
    getReservationReservationTable() {
        return this.reservationTableRef.ref
            .where("reservation", "==", sessionStorage.getItem('restaurant_reservation_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // dashboard
    getWeekReservation(startDate, endDate) {
        return this.reservationTableRef.ref
            .where("account", "==", localStorage.getItem('restaurant_id'))
            .where("created_at", "<", startDate).where("created_at", ">", endDate)
            .get();
    }
}
ReservationsApiService.ɵfac = function ReservationsApiService_Factory(t) { return new (t || ReservationsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
ReservationsApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReservationsApiService, factory: ReservationsApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2606:
/*!*******************************************************************************************!*\
  !*** ./projects/restaurant/src/app/services/modules/settings-api/settings-api.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsApiService": () => (/* binding */ SettingsApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);


class SettingsApiService {
    constructor(afs) {
        this.afs = afs;
        this.extendedProfileRef = this.afs.collection('restaurant/module_settings/restaurant_extended_profile');
        this.subscriptionRef = this.afs.collection('restaurant/module_settings/restaurant_subscription');
    }
    // extended profile
    createExtendedProfile(extendedProfile) {
        return this.extendedProfileRef.doc(String(localStorage.getItem('restaurant_id'))).set(extendedProfile);
    }
    getExtendedProfile() {
        return this.extendedProfileRef.doc(String(localStorage.getItem('restaurant_id'))).ref.get();
    }
    updateExtendedProfile(extendedProfile) {
        return this.extendedProfileRef.doc(String(localStorage.getItem('restaurant_id'))).update(extendedProfile);
    }
    // subscription
    createSubscription(subscription) {
        return this.subscriptionRef.doc(String(localStorage.getItem('restaurant_id'))).set(subscription);
    }
    getSubscription() {
        return this.subscriptionRef.doc(String(localStorage.getItem('restaurant_id'))).ref.get();
    }
    updateSubscription(subscription) {
        return this.subscriptionRef.doc(String(localStorage.getItem('restaurant_id'))).update(subscription);
    }
}
SettingsApiService.ɵfac = function SettingsApiService_Factory(t) { return new (t || SettingsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
SettingsApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsApiService, factory: SettingsApiService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map