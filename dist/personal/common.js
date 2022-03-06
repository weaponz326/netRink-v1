"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["common"],{

/***/ 54302:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/fromEvent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromEvent": () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 93428);
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ 67815);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 95678);
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/map */ 64058);




const toString = (() => Object.prototype.toString)();
function fromEvent(target, eventName, options, resultSelector) {
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe((0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.map)(args => (0,_util_isArray__WEBPACK_IMPORTED_MODULE_2__.isArray)(args) ? resultSelector(...args) : resultSelector(args)));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    let unsubscribe;
    if (isEventTarget(sourceObj)) {
        const source = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = () => source.removeEventListener(eventName, handler, options);
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        const source = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = () => source.off(eventName, handler);
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        const source = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = () => source.removeListener(eventName, handler);
    }
    else if (sourceObj && sourceObj.length) {
        for (let i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}


/***/ }),

/***/ 95280:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 66431);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 75007);


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    return (source) => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}
class DebounceTimeOperator {
    constructor(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    }
}
class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
    constructor(destination, dueTime, scheduler) {
        super(destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    _next(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    }
    _complete() {
        this.debouncedNext();
        this.destination.complete();
    }
    debouncedNext() {
        this.clearDebounce();
        if (this.hasValue) {
            const { lastValue } = this;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    }
    clearDebounce() {
        const debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    }
}
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}


/***/ }),

/***/ 39839:
/*!*****************************************************************************************!*\
  !*** ./projects/personal/src/app/services/modules/accounts-api/accounts-api.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsApiService": () => (/* binding */ AccountsApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);


class AccountsApiService {
    constructor(afs) {
        this.afs = afs;
        this.accountRef = this.afs.collection('personal/module_accounts/personal_account');
        this.transactionRef = this.afs.collection('personal/module_accounts/personal_account_transaction');
    }
    // account
    createAccount(account) {
        return this.accountRef.add(account);
    }
    getAccount() {
        return this.accountRef.doc(String(sessionStorage.getItem('personal_account_id'))).ref.get();
    }
    updateAccount(account) {
        return this.accountRef.doc(String(sessionStorage.getItem('personal_account_id'))).update(account);
    }
    deleteAccount() {
        return this.accountRef.doc(String(sessionStorage.getItem('personal_account_id'))).delete();
    }
    getUserAccount(sorting, pageSize) {
        return this.accountRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .limit(pageSize)
            .get();
    }
    getUserAccountNext(sorting, pageSize, pageStart) {
        return this.accountRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getUserAccountPrev(sorting, pageSize, pageStart) {
        return this.accountRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllUserAccount() {
        return this.accountRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // transactions
    createTransaction(transaction) {
        return this.transactionRef.add(transaction);
    }
    updateTransaction(transactionId, transaction) {
        return this.transactionRef.doc(transactionId).update(transaction);
    }
    deleteTransaction(transactionId) {
        return this.transactionRef.doc(transactionId).delete();
    }
    getAccountTransaction() {
        return this.transactionRef.ref
            .where("account.id", "==", String(sessionStorage.getItem('personal_account_id')))
            .orderBy("created_at", "desc")
            .get();
    }
    getUserTransaction(sorting, pageSize) {
        return this.transactionRef.ref
            .where("account.data.user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .limit(pageSize)
            .get();
    }
    getUserTransactionNext(sorting, pageSize, pageStart) {
        return this.transactionRef.ref
            .where("account.data.user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getUserTransactionPrev(sorting, pageSize, pageStart) {
        return this.transactionRef.ref
            .where("account.data.user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllUserTransaction() {
        return this.transactionRef.ref
            .where("account.data.user", "==", localStorage.getItem('personal_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // dashboard
    getWeekTransaction(startDate, endDate) {
        return this.transactionRef.ref
            .where("account.data.user", "==", localStorage.getItem('personal_id'))
            .where("created_at", "<", startDate).where("created_at", ">", endDate)
            .get();
    }
}
AccountsApiService.ɵfac = function AccountsApiService_Factory(t) { return new (t || AccountsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
AccountsApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountsApiService, factory: AccountsApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 61886:
/*!*************************************************************************************!*\
  !*** ./projects/personal/src/app/services/modules/budget-api/budget-api.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetApiService": () => (/* binding */ BudgetApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);


class BudgetApiService {
    constructor(afs) {
        this.afs = afs;
        this.budgetRef = this.afs.collection('personal/module_budget/personal_budget');
        this.incomeRef = this.afs.collection('personal/module_budget/personal_budget_income');
        this.expenditureRef = this.afs.collection('personal/module_budget/personal_budget_expenditure');
    }
    // budget
    createBudget(budget) {
        return this.budgetRef.add(budget);
    }
    getBudget() {
        return this.budgetRef.doc(String(sessionStorage.getItem('personal_budget_id'))).ref.get();
    }
    updateBudget(budget) {
        return this.budgetRef.doc(String(sessionStorage.getItem('personal_budget_id'))).update(budget);
    }
    deleteBudget() {
        return this.budgetRef.doc(String(sessionStorage.getItem('personal_budget_id'))).delete();
    }
    getUserBudget(sorting, pageSize) {
        return this.budgetRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .limit(pageSize)
            .get();
    }
    getUserBudgetNext(sorting, pageSize, pageStart) {
        return this.budgetRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getUserBudgetPrev(sorting, pageSize, pageStart) {
        return this.budgetRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllUserBudget() {
        return this.budgetRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // income
    createIncome(budget) {
        return this.incomeRef.add(budget);
    }
    updateIncome(incomeId, income) {
        return this.incomeRef.doc(incomeId).update(income);
    }
    deleteIncome(incomeId) {
        return this.incomeRef.doc(incomeId).delete();
    }
    getBudgetIncome() {
        return this.incomeRef.ref
            .where("budget.id", "==", String(sessionStorage.getItem('personal_budget_id')))
            .orderBy("created_at", "asc")
            .get();
    }
    // expenditure
    createExpenditure(budget) {
        return this.expenditureRef.add(budget);
    }
    updateExpenditure(expenditureId, expenditure) {
        return this.expenditureRef.doc(expenditureId).update(expenditure);
    }
    deleteExpenditure(expenditureId) {
        return this.expenditureRef.doc(expenditureId).delete();
    }
    getBudgetExpenditure() {
        return this.expenditureRef.ref
            .where("budget.id", "==", String(sessionStorage.getItem('personal_budget_id')))
            .orderBy("created_at", "asc")
            .get();
    }
    // dashboard
    getMonthBudget(startDate, endDate) {
        return this.budgetRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .where("created_at", "<", startDate).where("created_at", ">", endDate)
            .get();
    }
    getWeekIncome(startDate, endDate) {
        return this.incomeRef.ref
            .where("budget.data.user", "==", localStorage.getItem('personal_id'))
            .where("created_at", "<", startDate).where("created_at", ">", endDate)
            .get();
    }
    getWeekExpenditure(startDate, endDate) {
        return this.expenditureRef.ref
            .where("budget.data.user", "==", localStorage.getItem('personal_id'))
            .where("created_at", "<", startDate).where("created_at", ">", endDate)
            .get();
    }
}
BudgetApiService.ɵfac = function BudgetApiService_Factory(t) { return new (t || BudgetApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
BudgetApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BudgetApiService, factory: BudgetApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9878:
/*!*****************************************************************************************!*\
  !*** ./projects/personal/src/app/services/modules/calendar-api/calendar-api.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarApiService": () => (/* binding */ CalendarApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);


class CalendarApiService {
    constructor(afs) {
        this.afs = afs;
        this.calendarRef = this.afs.collection('personal/module_calendar/personal_calendar');
        this.scheduleRef = this.afs.collection('personal/module_calendar/personal_calendar_schedule');
    }
    // calendar
    createCalendar(calendar) {
        return this.calendarRef.add(calendar);
    }
    getCalendar() {
        return this.calendarRef.doc(String(sessionStorage.getItem('personal_calendar_id'))).ref.get();
    }
    updateCalendar(calendar) {
        return this.calendarRef.doc(String(sessionStorage.getItem('personal_calendar_id'))).update(calendar);
    }
    deleteCalendar() {
        return this.calendarRef.doc(String(sessionStorage.getItem('personal_calendar_id'))).delete();
    }
    getUserCalendar(sorting, pageSize) {
        return this.calendarRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .limit(pageSize)
            .get();
    }
    getUserCalendarNext(sorting, pageSize, pageStart) {
        return this.calendarRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getUserCalendarPrev(sorting, pageSize, pageStart) {
        return this.calendarRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllUserCalendar() {
        return this.calendarRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // schedule
    createSchedule(schedule) {
        return this.scheduleRef.add(schedule);
    }
    getSchedule(scheduleId) {
        return this.scheduleRef.doc(scheduleId).ref.get();
    }
    updateSchedule(scheduleId, schedule) {
        return this.scheduleRef.doc(scheduleId).update(schedule);
    }
    deleteSchedule(scheduleId) {
        return this.scheduleRef.doc(scheduleId).delete();
    }
    getCalendarSchedule() {
        return this.scheduleRef.ref
            .where("calendar.id", "==", sessionStorage.getItem('personal_calendar_id'))
            .get();
    }
    getUserSchedule(sorting, pageSize) {
        return this.scheduleRef.ref
            .where("calendar.data.user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .limit(pageSize)
            .get();
    }
    getUserScheduleNext(sorting, pageSize, pageStart) {
        return this.calendarRef.ref
            .where("calendar.data.user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getUserSchedulePrev(sorting, pageSize, pageStart) {
        return this.calendarRef.ref
            .where("calendar.data.user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllUserSchedule() {
        return this.scheduleRef.ref
            .where("calendar.data.user", "==", localStorage.getItem('personal_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // dashboard
    getMonthCalendar(startDate, endDate) {
        return this.calendarRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .where("created_at", "<", startDate).where("created_at", ">", endDate)
            .get();
    }
    getWeekSchedule(startDate, endDate) {
        return this.calendarRef.ref
            .where("calendar.data.user", "==", localStorage.getItem('personal_id'))
            .where("created_at", "<", startDate).where("created_at", ">", endDate)
            .get();
    }
}
CalendarApiService.ɵfac = function CalendarApiService_Factory(t) { return new (t || CalendarApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
CalendarApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalendarApiService, factory: CalendarApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 91475:
/*!***********************************************************************************!*\
  !*** ./projects/personal/src/app/services/modules/notes-api/notes-api.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotesApiService": () => (/* binding */ NotesApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);


class NotesApiService {
    constructor(afs) {
        this.afs = afs;
        this.noteRef = this.afs.collection('personal/module_notes/personal_note');
    }
    // note
    createNote(note) {
        return this.noteRef.add(note);
    }
    getNote() {
        return this.noteRef.doc(String(sessionStorage.getItem('personal_note_id'))).ref.get();
    }
    updateNote(note) {
        return this.noteRef.doc(String(sessionStorage.getItem('personal_note_id'))).update(note);
    }
    deleteNote() {
        return this.noteRef.doc(String(sessionStorage.getItem('personal_note_id'))).delete();
    }
    getUserNote(sorting, pageSize) {
        return this.noteRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .limit(pageSize)
            .get();
    }
    getUserNoteNext(sorting, pageSize, pageStart) {
        return this.noteRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getUserNotePrev(sorting, pageSize, pageStart) {
        return this.noteRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllUserNote() {
        return this.noteRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // dashboard
    getWeekNote(startDate, endDate) {
        return this.noteRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .where("created_at", "<", startDate).where("created_at", ">", endDate)
            .get();
    }
}
NotesApiService.ɵfac = function NotesApiService_Factory(t) { return new (t || NotesApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
NotesApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotesApiService, factory: NotesApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 40867:
/*!*****************************************************************************************!*\
  !*** ./projects/personal/src/app/services/modules/settings-api/settings-api.service.ts ***!
  \*****************************************************************************************/
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
        this.extendedProfileRef = this.afs.collection('personal/module_settings/personal_extended_profile');
        this.invitationsRef = this.afs.collection('personal/module_settings/personal_invitation');
    }
    // extended profile
    createExtendedProfile(personalId, extendedProfile) {
        return this.extendedProfileRef.doc(personalId).set(extendedProfile);
    }
    getExtendedProfile() {
        return this.extendedProfileRef.doc(String(localStorage.getItem('personal_id'))).ref.get();
    }
    updateExtendedProfile(extendedProfile) {
        return this.extendedProfileRef.doc(String(localStorage.getItem('personal_id'))).update(extendedProfile);
    }
    // invitations
    createInvitation(invitationData) {
        return this.invitationsRef.add(invitationData);
    }
    getInvitation(invitationId) {
        return this.invitationsRef.doc(invitationId).ref.get();
    }
    updateInvitation(invitationId, invitationData) {
        return this.invitationsRef.doc(invitationId).update(invitationData);
    }
    deleteInvitation(invitationId) {
        return this.invitationsRef.doc(invitationId).delete();
    }
    getUserInvitation(sorting, pageSize) {
        return this.invitationsRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .limit(pageSize)
            .get();
    }
    getUserInvitationNext(sorting, pageSize, pageStart) {
        return this.invitationsRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getUserInvitationPrev(sorting, pageSize, pageStart) {
        return this.invitationsRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting === null || sorting === void 0 ? void 0 : sorting.field, sorting === null || sorting === void 0 ? void 0 : sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
}
SettingsApiService.ɵfac = function SettingsApiService_Factory(t) { return new (t || SettingsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
SettingsApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsApiService, factory: SettingsApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 51527:
/*!***********************************************************************************!*\
  !*** ./projects/personal/src/app/services/modules/tasks-api/tasks-api.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksApiService": () => (/* binding */ TasksApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);


class TasksApiService {
    constructor(afs) {
        this.afs = afs;
        this.taskGroupRef = this.afs.collection('personal/module_tasks/personal_task_group');
        this.taskItemRef = this.afs.collection('personal/module_tasks/personal_task_item');
    }
    // task groups
    createTaskGroup(taskGroup) {
        return this.taskGroupRef.add(taskGroup);
    }
    getTaskGroup() {
        return this.taskGroupRef.doc(String(sessionStorage.getItem('personal_task_group_id'))).ref.get();
    }
    updateTaskGroup(taskGroup) {
        return this.taskGroupRef.doc(String(sessionStorage.getItem('personal_task_group_id'))).update(taskGroup);
    }
    deleteTaskGroup() {
        return this.taskGroupRef.doc(String(sessionStorage.getItem('personal_task_group_id'))).delete();
    }
    getUserTaskGroup(sorting, pageSize) {
        return this.taskGroupRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .limit(pageSize)
            .get();
    }
    getUserTaskGroupNext(sorting, pageSize, pageStart) {
        return this.taskGroupRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getUserTaskGroupPrev(sorting, pageSize, pageStart) {
        return this.taskGroupRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllUserTaskGroup() {
        return this.taskGroupRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // task items
    createTaskItem(taskItem) {
        return this.taskItemRef.add(taskItem);
    }
    getTaskItem(taskItemId) {
        return this.taskItemRef.doc(taskItemId).ref.get();
    }
    updateTaskItem(taskItemId, taskItem) {
        return this.taskItemRef.doc(taskItemId).update(taskItem);
    }
    deleteTaskItem(taskItemId) {
        return this.taskItemRef.doc(taskItemId).delete();
    }
    getTaskGroupTaskItem() {
        return this.taskItemRef.ref
            .where("task_group.id", "==", String(sessionStorage.getItem('personal_task_group_id')))
            .get();
    }
    getUserTaskItem(sorting, pageSize) {
        return this.taskItemRef.ref
            .where("task_group.data.user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .limit(pageSize)
            .get();
    }
    getUserTaskItemNext(sorting, pageSize, pageStart) {
        return this.taskItemRef.ref
            .where("task_group.data.user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .startAfter(pageStart)
            .limit(pageSize)
            .get();
    }
    getUserTaskItemPrev(sorting, pageSize, pageStart) {
        return this.taskItemRef.ref
            .where("task_group.data.user", "==", localStorage.getItem('personal_id'))
            .orderBy(sorting.field, sorting.direction)
            .startAt(pageStart)
            .limit(pageSize)
            .get();
    }
    getAllUserTaskItem() {
        return this.taskItemRef.ref
            .where("task_group.data.user", "==", localStorage.getItem('personal_id'))
            .orderBy("created_at", "desc")
            .get();
    }
    // dashboard
    getWeekTaskGroup(startDate, endDate) {
        return this.taskItemRef.ref
            .where("user", "==", localStorage.getItem('personal_id'))
            .where("created_at", "<", startDate).where("created_at", ">", endDate)
            .get();
    }
    getWeekTaskItem(startDate, endDate) {
        return this.taskItemRef.ref
            .where("task_group.data.user", "==", localStorage.getItem('personal_id'))
            .where("created_at", "<", startDate).where("created_at", ">", endDate)
            .get();
    }
}
TasksApiService.ɵfac = function TasksApiService_Factory(t) { return new (t || TasksApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
TasksApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TasksApiService, factory: TasksApiService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map