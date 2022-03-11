"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["projects_restaurant_src_app_pages_modules_settings-page_settings-page_module_ts"],{

/***/ 80395:
/*!************************************************************************!*\
  !*** ./node_modules/angular4-paystack/node_modules/tslib/tslib.es6.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 77838:
/*!***********************************************************************************!*\
  !*** ./node_modules/angular4-paystack/__ivy_ngcc__/fesm2015/angular4-paystack.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Angular4PaystackComponent": () => (/* binding */ Angular4PaystackComponent),
/* harmony export */   "Angular4PaystackDirective": () => (/* binding */ Angular4PaystackDirective),
/* harmony export */   "Angular4PaystackEmbedComponent": () => (/* binding */ Angular4PaystackEmbedComponent),
/* harmony export */   "Angular4PaystackModule": () => (/* binding */ Angular4PaystackModule),
/* harmony export */   "ɵa": () => (/* binding */ Angular4PaystackService),
/* harmony export */   "ɵb": () => (/* binding */ PUBLIC_KEY_TOKEN)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 80395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 7005);




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */



const _c0 = ["*"];
const PUBLIC_KEY_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('paystack.publickey');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow() { }
if (false) {}
class Angular4PaystackService {
    /**
     * @param {?} token
     */
    constructor(token) {
        this.token = token;
    }
    /**
     * @return {?}
     */
    loadScript() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (window.PaystackPop && typeof window.PaystackPop.setup === 'function') {
                resolve();
                return;
            }
            /** @type {?} */
            const script = window.document.createElement('script');
            window.document.head.appendChild(script);
            /** @type {?} */
            const onLoadFunc = (/**
             * @return {?}
             */
            () => {
                script.removeEventListener('load', onLoadFunc);
                resolve();
            });
            script.addEventListener('load', onLoadFunc);
            script.setAttribute('src', 'https://js.paystack.co/v1/inline.js');
        }));
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    checkInput(obj) {
        if (!obj.key && !this.token) {
            return 'ANGULAR-PAYSTACK: Please insert a your public key';
        }
        if (!obj.email) {
            return 'ANGULAR-PAYSTACK: Paystack email cannot be empty';
        }
        if (!obj.amount) {
            return 'ANGULAR-PAYSTACK: Paystack amount cannot be empty';
        }
        if (!obj.ref) {
            return 'ANGULAR-PAYSTACK: Paystack ref cannot be empty';
        }
        return '';
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    getPaystackOptions(obj) {
        /** @type {?} */
        const paystackOptions = {
            key: obj.key || this.token,
            email: obj.email,
            amount: obj.amount,
            ref: obj.ref,
            metadata: obj.metadata || {},
            currency: obj.currency || 'NGN',
            plan: obj.plan || '',
            channels: obj.channels,
            quantity: obj.quantity || '',
            subaccount: obj.subaccount || '',
            transaction_charge: obj.transaction_charge || 0,
            // tslint:disable-line
            bearer: obj.bearer || '',
        };
        return paystackOptions;
    }
}
Angular4PaystackService.ɵfac = function Angular4PaystackService_Factory(t) { return new (t || Angular4PaystackService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PUBLIC_KEY_TOKEN)); };
Angular4PaystackService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Angular4PaystackService, factory: Angular4PaystackService.ɵfac, providedIn: 'root' });
/** @nocollapse */
Angular4PaystackService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [PUBLIC_KEY_TOKEN,] }] }
];
/** @nocollapse */ Angular4PaystackService.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Angular4PaystackService_Factory() { return new Angular4PaystackService((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PUBLIC_KEY_TOKEN)); }, token: Angular4PaystackService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Angular4PaystackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [PUBLIC_KEY_TOKEN]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow$1() { }
if (false) {}
class Angular4PaystackComponent {
    /**
     * @param {?} paystackService
     */
    constructor(paystackService) {
        this.paystackService = paystackService;
        this.paymentInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // tslint:disable-line
        // tslint:disable-line
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        // tslint:disable-line
        this.isPaying = false;
    }
    /**
     * @return {?}
     */
    pay() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            /** @type {?} */
            let errorText = '';
            if (this.paystackOptions && Object.keys(this.paystackOptions).length >= 2) {
                errorText = this.valdateInput(this.paystackOptions);
                this.generateOptions(this.paystackOptions);
            }
            else {
                errorText = this.valdateInput(this);
                this.generateOptions(this);
            }
            if (errorText) {
                console.error(errorText);
                return errorText;
            }
            yield this.paystackService.loadScript();
            if (this.isPaying) {
                return;
            }
            if (this.paymentInit.observers.length) {
                this.paymentInit.emit();
            }
            /** @type {?} */
            const payment = window.PaystackPop.setup(this._paystackOptions);
            payment.openIframe();
            this.isPaying = true;
        });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    valdateInput(obj) {
        if (!this.callback.observers.length) {
            return 'ANGULAR-PAYSTACK: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
        }
        return this.paystackService.checkInput(obj);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    generateOptions(obj) {
        this._paystackOptions = this.paystackService.getPaystackOptions(obj);
        this._paystackOptions.onClose = (/**
         * @return {?}
         */
        () => {
            if (this.onClose.observers.length) {
                this.isPaying = false;
                this.onClose.emit();
            }
        });
        this._paystackOptions.callback = (/**
         * @param {...?} response
         * @return {?}
         */
        (...response) => {
            this.isPaying = false;
            this.callback.emit(...response);
        });
    }
}
Angular4PaystackComponent.ɵfac = function Angular4PaystackComponent_Factory(t) { return new (t || Angular4PaystackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Angular4PaystackService)); };
Angular4PaystackComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Angular4PaystackComponent, selectors: [["angular4-paystack"]], inputs: { key: "key", email: "email", amount: "amount", metadata: "metadata", ref: "ref", currency: "currency", plan: "plan", quantity: "quantity", channels: "channels", subaccount: "subaccount", transaction_charge: "transaction_charge", bearer: "bearer", class: "class", style: "style", paystackOptions: "paystackOptions" }, outputs: { paymentInit: "paymentInit", onClose: "onClose", callback: "callback" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[3, "ngClass", "ngStyle", "click"]], template: function Angular4PaystackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Angular4PaystackComponent_Template_button_click_0_listener() { return ctx.pay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.class)("ngStyle", ctx.style);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle], encapsulation: 2 });
/** @nocollapse */
Angular4PaystackComponent.ctorParameters = () => [
    { type: Angular4PaystackService }
];
Angular4PaystackComponent.propDecorators = {
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    metadata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    ref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    plan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    quantity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    channels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    subaccount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    transaction_charge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    bearer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    paystackOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    paymentInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    callback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Angular4PaystackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'angular4-paystack',
                template: `<button [ngClass]="class" [ngStyle]="style" (click)="pay()"><ng-content></ng-content></button>`
            }]
    }], function () { return [{ type: Angular4PaystackService }]; }, { paymentInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], callback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], amount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], metadata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], currency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], plan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], quantity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], channels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], subaccount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], transaction_charge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], bearer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], paystackOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow$2() { }
if (false) {}
class Angular4PaystackDirective {
    /**
     * @param {?} paystackService
     */
    constructor(paystackService) {
        this.paystackService = paystackService;
        this.paymentInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // tslint:disable-line
        // tslint:disable-line
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // tslint:disable-line
        // tslint:disable-line
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        // tslint:disable-line
        this.isPaying = false;
    }
    /**
     * @return {?}
     */
    pay() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            /** @type {?} */
            let errorText = '';
            if (this.paystackOptions && Object.keys(this.paystackOptions).length >= 2) {
                errorText = this.valdateInput(this.paystackOptions);
                this.generateOptions(this.paystackOptions);
            }
            else {
                errorText = this.valdateInput(this);
                this.generateOptions(this);
            }
            if (errorText) {
                console.error(errorText);
                return errorText;
            }
            yield this.paystackService.loadScript();
            if (this.isPaying) {
                return;
            }
            if (this.paymentInit.observers.length) {
                this.paymentInit.emit();
            }
            /** @type {?} */
            const payment = window.PaystackPop.setup(this._paystackOptions);
            payment.openIframe();
            this.isPaying = true;
        });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    valdateInput(obj) {
        if (!this.callback.observers.length) {
            return 'ANGULAR-PAYSTACK: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
        }
        return this.paystackService.checkInput(obj);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    generateOptions(obj) {
        this._paystackOptions = this.paystackService.getPaystackOptions(obj);
        this._paystackOptions.onClose = (/**
         * @return {?}
         */
        () => {
            if (this.onClose.observers.length) {
                this.isPaying = false;
                this.onClose.emit();
            }
        });
        this._paystackOptions.callback = (/**
         * @param {...?} response
         * @return {?}
         */
        (...response) => {
            this.isPaying = false;
            this.callback.emit(...response);
        });
    }
    /**
     * @return {?}
     */
    buttonClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.pay();
        });
    }
}
Angular4PaystackDirective.ɵfac = function Angular4PaystackDirective_Factory(t) { return new (t || Angular4PaystackDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Angular4PaystackService)); };
Angular4PaystackDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Angular4PaystackDirective, selectors: [["", "angular4-paystack", ""]], hostBindings: function Angular4PaystackDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Angular4PaystackDirective_click_HostBindingHandler() { return ctx.buttonClick(); });
    } }, inputs: { key: "key", email: "email", amount: "amount", metadata: "metadata", ref: "ref", currency: "currency", plan: "plan", quantity: "quantity", subaccount: "subaccount", channels: "channels", transaction_charge: "transaction_charge", bearer: "bearer", class: "class", style: "style", paystackOptions: "paystackOptions" }, outputs: { paymentInit: "paymentInit", onClose: "onClose", callback: "callback" } });
/** @nocollapse */
Angular4PaystackDirective.ctorParameters = () => [
    { type: Angular4PaystackService }
];
Angular4PaystackDirective.propDecorators = {
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    metadata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    ref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    plan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    quantity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    subaccount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    channels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    transaction_charge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    bearer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    paystackOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    paymentInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    callback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    buttonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Angular4PaystackDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[angular4-paystack]'
            }]
    }], function () { return [{ type: Angular4PaystackService }]; }, { paymentInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], callback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * @return {?}
     */
    buttonClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], amount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], metadata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], currency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], plan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], quantity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], subaccount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], channels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], transaction_charge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], bearer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], paystackOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow$3() { }
if (false) {}
class Angular4PaystackEmbedComponent {
    // tslint:disable-line
    /**
     * @param {?} paystackService
     */
    constructor(paystackService) {
        this.paystackService = paystackService;
        this.paymentInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // tslint:disable-line
        // tslint:disable-line
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * @return {?}
     */
    pay() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            /** @type {?} */
            let errorText = '';
            if (this.paystackOptions && Object.keys(this.paystackOptions).length >= 2) {
                errorText = this.valdateInput(this.paystackOptions);
                this.generateOptions(this.paystackOptions);
            }
            else {
                errorText = this.valdateInput(this);
                this.generateOptions(this);
            }
            if (errorText) {
                console.error(errorText);
                return errorText;
            }
            yield this.paystackService.loadScript();
            if (this.paymentInit.observers.length) {
                this.paymentInit.emit();
            }
            /** @type {?} */
            const payment = window.PaystackPop.setup(this._paystackOptions);
            payment.openIframe();
        });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    valdateInput(obj) {
        if (!this.callback.observers.length) {
            return 'ANGULAR-PAYSTACK: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
        }
        return this.paystackService.checkInput(obj);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    generateOptions(obj) {
        this._paystackOptions = this.paystackService.getPaystackOptions(obj);
        this._paystackOptions.onClose = (/**
         * @return {?}
         */
        () => {
            if (this.onClose.observers.length) {
                this.onClose.emit();
            }
        });
        this._paystackOptions.callback = (/**
         * @param {...?} response
         * @return {?}
         */
        (...response) => {
            this.callback.emit(...response);
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.error('ANGULAR-PAYSTACK: The paystack embed option is deprecated. Please use the paystack component or directive');
            this.pay();
        });
    }
}
Angular4PaystackEmbedComponent.ɵfac = function Angular4PaystackEmbedComponent_Factory(t) { return new (t || Angular4PaystackEmbedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Angular4PaystackService)); };
Angular4PaystackEmbedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Angular4PaystackEmbedComponent, selectors: [["angular4-paystack-embed"]], inputs: { key: "key", email: "email", amount: "amount", metadata: "metadata", channels: "channels", ref: "ref", currency: "currency", plan: "plan", quantity: "quantity", subaccount: "subaccount", transaction_charge: "transaction_charge", bearer: "bearer", paystackOptions: "paystackOptions" }, outputs: { paymentInit: "paymentInit", onClose: "onClose", callback: "callback" }, decls: 1, vars: 0, consts: [["id", "paystackEmbedContainer"]], template: function Angular4PaystackEmbedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
Angular4PaystackEmbedComponent.ctorParameters = () => [
    { type: Angular4PaystackService }
];
Angular4PaystackEmbedComponent.propDecorators = {
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    metadata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    channels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    ref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    plan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    quantity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    subaccount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    transaction_charge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    bearer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    paystackOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    paymentInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    callback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Angular4PaystackEmbedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'angular4-paystack-embed',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                template: `<div id="paystackEmbedContainer"></div>`
            }]
    }], function () { return [{ type: Angular4PaystackService }]; }, { paymentInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], callback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], amount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], metadata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], channels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], currency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], plan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], quantity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], subaccount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], transaction_charge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], bearer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], paystackOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Angular4PaystackModule {
    /**
     * @param {?} token
     * @return {?}
     */
    static forRoot(token) {
        return {
            ngModule: Angular4PaystackModule,
            providers: [
                Angular4PaystackService,
                { provide: PUBLIC_KEY_TOKEN, useValue: token }
            ]
        };
    }
}
Angular4PaystackModule.ɵfac = function Angular4PaystackModule_Factory(t) { return new (t || Angular4PaystackModule)(); };
Angular4PaystackModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Angular4PaystackModule });
Angular4PaystackModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Angular4PaystackModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
                exports: [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent],
                declarations: [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent],
                providers: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Angular4PaystackModule, { declarations: function () { return [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]; }, exports: function () { return [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent]; } }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





/***/ }),

/***/ 90910:
/*!**********************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/settings/billing/billing.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingComponent": () => (/* binding */ BillingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var projects_restaurant_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/restaurant/src/environments/environment */ 3241);
/* harmony import */ var projects_restaurant_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/settings-api/settings-api.service */ 2606);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular4-paystack */ 77838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 869);











const _c0 = ["paystackButtonElementReference"];
const _c1 = ["connectionToastComponentReference"];
function BillingComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subscription_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](subscription_r19);
} }
function BillingComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frequency_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](frequency_r20);
} }
function BillingComponent_p_30_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Should be multiples of 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BillingComponent_p_30_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Should be multiples of 50");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BillingComponent_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BillingComponent_p_30_small_1_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BillingComponent_p_30_small_2_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.subscriptionTypeValue == "Small Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.subscriptionTypeValue == "Large Team");
} }
function BillingComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Subscribe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r5.isSubscriptionSaving || ctx_r5.subscriptionTypeValue == "Individual" || ctx_r5.subscriptionTypeValue == "Comprehensive");
} }
function BillingComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BillingComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Individual Subscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Single User");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Free Upgrades");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BillingComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Small Team Subscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "10 Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Free Upgrades");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Technical Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BillingComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Large Team Subscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "50 Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Free Upgrades");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Technical Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BillingComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Comprehensive Subscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Single User");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Free Upgrades");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Technical Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Customized Functions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BillingComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BillingComponent_div_61_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Monthly Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "GHS 150");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BillingComponent_div_61_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Yearly Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "GHS 1,500");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Save GHS 300 per 10 Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BillingComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BillingComponent_div_61_div_1_Template, 6, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BillingComponent_div_61_div_2_Template, 8, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.selectedFrequency == "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.selectedFrequency == "Yearly");
} }
function BillingComponent_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Monthly Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "GHS 500");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BillingComponent_div_62_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Yearly Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "GHS 5,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Save GHS 1,000 per 50 Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BillingComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BillingComponent_div_62_div_1_Template, 6, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BillingComponent_div_62_div_2_Template, 8, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.selectedFrequency == "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.selectedFrequency == "Yearly");
} }
function BillingComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BillingComponent_div_65_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" GHS ", 150 * (ctx_r27.numberUsersValue / 10), " / month ");
} }
function BillingComponent_div_65_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" GHS ", 1500 * (ctx_r28.numberUsersValue / 10), " / year ");
} }
function BillingComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Total Bill :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BillingComponent_div_65_p_4_Template, 2, 1, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, BillingComponent_div_65_p_5_Template, 2, 1, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.selectedFrequency == "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.selectedFrequency == "Yearly");
} }
function BillingComponent_div_66_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" GHS ", 500 * (ctx_r29.numberUsersValue / 50), " / month ");
} }
function BillingComponent_div_66_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" GHS ", 5000 * (ctx_r30.numberUsersValue / 50), " / year ");
} }
function BillingComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Total Bill :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BillingComponent_div_66_p_4_Template, 2, 1, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, BillingComponent_div_66_p_5_Template, 2, 1, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r17.selectedFrequency == "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r17.selectedFrequency == "Yearly");
} }
class BillingComponent {
    constructor(settingsApi) {
        this.settingsApi = settingsApi;
        this.navHeading = [
            { text: "Subscription", url: "/home/settings/billing" },
        ];
        this.paystackPublicKey = projects_restaurant_src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.paystackLivePublicKey;
        this.isSubscriptionLoading = false;
        this.isSubscriptionSaving = false;
        this.emailValue = "";
        this.subscriptionTypeValue = "";
        this.billingFrequencyValue = "";
        this.numberUsersValue = 0;
        this.selectedSubscription = '';
        this.selectedFrequency = '';
        this.usersTextBoxIncrement = 1;
        this.subscriptionSource = ["Individual", "Small Team", "Large Team", "Comprehensive"];
        this.frequencySource = ["Monthly", "Yearly", ""];
        this.numberUsersStep = 1;
        this.isFrequencyDisabled = false;
        this.isnumberUsersDisabled = false;
        this.isEmailValid = false;
        this.isSubscriptionValid = true;
        this.isFrequencyValid = true;
        this.isNumberUsersValid = true;
        this.plans = {
            smallTeamMonthly: "PLN_scww6u5e6ocqtw6",
            smallTeamYearly: "PLN_qxq74hmegjdag94",
            largeTeamMonthly: "PLN_ts2kk0j0cek0sky",
            largeTeamYearly: "PLN_3p7epe1wgthaie7",
        };
        this.paystackOptions = {
            ref: `${Math.ceil(Math.random() * 10e10)}`,
            plan: "",
            quantity: "",
        };
    }
    ngOnInit() {
        this.getSubscription();
    }
    getSubscription() {
        this.isSubscriptionLoading = true;
        this.settingsApi.getSubscription()
            .then((res) => {
            console.log(res);
            this.subscriptionData = res;
            this.subscriptionTypeValue = this.subscriptionData.data().subscription_type;
            this.billingFrequencyValue = this.subscriptionData.data().billing_frequency;
            this.numberUsersValue = this.subscriptionData.data().number_users;
            this.isSubscriptionLoading = false;
            this.setSubscription(this.subscriptionTypeValue);
            this.setOptions();
        }, (err) => {
            console.log(err);
            this.isSubscriptionLoading = false;
            this.connectionToast.openToast();
        });
    }
    updateSubscription() {
        let data = {
            subscription_type: this.subscriptionTypeValue,
            billing_frequency: this.billingFrequencyValue,
            number_users: this.numberUsersValue,
        };
        this.settingsApi.updateSubscription(data)
            .then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    setSubscription(subscription) {
        this.selectedSubscription = subscription;
        console.log(this.selectedSubscription);
        if (this.selectedSubscription == "Individual") {
            this.billingFrequencyValue = "";
            this.numberUsersValue = 1;
            this.isFrequencyDisabled = true;
            this.isnumberUsersDisabled = true;
        }
        else if (this.selectedSubscription == "Small Team") {
            this.numberUsersStep = 10;
            this.numberUsersValue = 10;
            this.isFrequencyDisabled = false;
            this.isnumberUsersDisabled = false;
        }
        else if (this.selectedSubscription == "Large Team") {
            this.numberUsersStep = 50;
            this.numberUsersValue = 50;
            this.isFrequencyDisabled = false;
            this.isnumberUsersDisabled = false;
        }
        else if (this.selectedSubscription == "Comprehensive") {
            this.billingFrequencyValue = "";
            this.numberUsersValue = 0;
            this.isFrequencyDisabled = true;
            this.isnumberUsersDisabled = true;
        }
        this.setOptions();
    }
    setFrequency(event) {
        this.selectedFrequency = event.target.value;
        console.log(this.selectedFrequency);
        if (this.selectedSubscription == "Small Team") {
            this.numberUsersStep = 10;
            this.numberUsersValue = 10;
        }
        else if (this.selectedSubscription == "Large Team") {
            this.numberUsersStep = 50;
            this.numberUsersValue = 50;
        }
        this.setOptions();
    }
    setOptions() {
        var plan = "";
        var quantity = "";
        if (this.subscriptionTypeValue == "Small Team") {
            if (this.billingFrequencyValue == "Monthly")
                plan = this.plans.smallTeamMonthly;
            else if (this.billingFrequencyValue == "Yearly")
                plan = this.plans.smallTeamYearly;
        }
        else if (this.subscriptionTypeValue == "Large Team") {
            if (this.billingFrequencyValue == "Monthly")
                plan = this.plans.largeTeamMonthly;
            else if (this.billingFrequencyValue == "Yearly")
                plan = this.plans.largeTeamYearly;
        }
        if (this.subscriptionTypeValue == "Small Team") {
            quantity = String(this.numberUsersValue / 10);
        }
        else if (this.subscriptionTypeValue == "Large Team") {
            quantity = String(this.numberUsersValue / 50);
        }
        this.paystackOptions.plan = plan;
        this.paystackOptions.quantity = quantity;
    }
    validateSubcriptionForm(f) {
        if (f.controls.email.invalid) {
            console.log("email invalid");
            return false;
        }
        if ((this.subscriptionTypeValue == "Small Team" || this.subscriptionTypeValue == "Large Team") && this.billingFrequencyValue == "") {
            this.isFrequencyValid = false;
            return false;
        }
        else {
            this.isFrequencyValid = true;
        }
        if (this.subscriptionTypeValue == "Small Team" && (this.numberUsersValue % 10) != 0) {
            this.isNumberUsersValid = false;
            return false;
        }
        else {
            this.isNumberUsersValid = true;
        }
        if (this.subscriptionTypeValue == "Large Team" && (this.numberUsersValue % 50) != 0) {
            this.isNumberUsersValid = false;
            return false;
        }
        else {
            this.isNumberUsersValid = true;
        }
        console.log("opening paystack!");
        this.paystackButton.nativeElement.click();
        return true;
    }
    paymentInit() {
        console.log('Payment initialized');
        console.log(this.emailValue);
        console.log(this.paystackOptions);
    }
    paymentDone(ref) {
        console.log('Payment done');
    }
    paymentCancel() {
        console.log('payment failed');
        this.paystackOptions.ref = `${Math.ceil(Math.random() * 10e10)}`;
    }
}
BillingComponent.ɵfac = function BillingComponent_Factory(t) { return new (t || BillingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_2__.SettingsApiService)); };
BillingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BillingComponent, selectors: [["app-billing"]], viewQuery: function BillingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paystackButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 75, vars: 36, consts: [[3, "headings"], [1, "container"], [1, "row"], [1, "col-md-8"], [1, "row", "billing-form"], [1, "col-md-9"], [1, "mb-3"], [3, "ngSubmit"], ["f", "ngForm"], [1, "row", "mb-2"], [1, "col-md-4"], ["name", "subscription", 1, "form-control", "form-control-sm", "w-100", 3, "ngModel", "ngClass", "ngModelChange", "change"], [4, "ngFor", "ngForOf"], ["name", "frequency", 1, "form-control", "form-control-sm", "w-100", 3, "ngModel", "disabled", "ngClass", "ngModelChange", "change"], ["name", "users", "type", "number", "min", "0", 1, "form-control", "form-control-sm", "w-100", 3, "ngModel", "step", "disabled", "max", "ngClass", "ngModelChange", "change"], ["class", "text-danger m-0", 4, "ngIf"], ["type", "email", "name", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "required", "", 1, "form-control", "form-control-sm", "w-100", 3, "ngModel", "ngClass", "ngModelChange"], ["emailReference", "ngModel"], ["class", "row mb-3 page-form", 4, "ngIf"], ["angular4-paystack", "", 3, "hidden", "email", "amount", "currency", "ref", "plan", "quantity", "paymentInit", "onClose", "callback"], ["paystackButtonElementReference", ""], [1, "row", "mb-3"], [1, "col"], ["routerLink", "/home/settings/payments-history", 1, "btn", "btn-secondary", "float-end", "nr-standard-font"], [1, "bi", "bi-arrow-left-right", "me-2"], [1, "card", "shadow"], [1, "card-body"], [1, "h4"], [4, "ngIf"], [1, "m-0"], [1, "bi", "bi-person", "m-1"], [1, "h4", "mt-0"], ["connectionToastComponentReference", ""], [1, "text-danger", "m-0"], [1, "row", "mb-3", "page-form"], [1, "col-md-12"], [1, "btn", "btn-secondary", "float-end", 3, "disabled"], ["type", "button", 1, "btn", "float-end", "ms-1", "btn-light"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm"], [1, "visually-hidden"], [1, "h5", "mb-2"], [1, "h5"], [1, "h4", "m-0"], ["href", "mailto:sales@netrink.com"], [1, "btn", "btn-primary"], [1, "bi", "bi-cash", "m-1"], ["class", "h3 mt-0", 4, "ngIf"], [1, "h3", "mt-0"]], template: function BillingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Subscription Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function BillingComponent_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9); return ctx.validateSubcriptionForm(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Subscription Type :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BillingComponent_Template_select_ngModelChange_15_listener($event) { return ctx.subscriptionTypeValue = $event; })("change", function BillingComponent_Template_select_change_15_listener($event) { return ctx.setSubscription($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, BillingComponent_option_16_Template, 2, 1, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Billing Frequency :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BillingComponent_Template_select_ngModelChange_22_listener($event) { return ctx.billingFrequencyValue = $event; })("change", function BillingComponent_Template_select_change_22_listener($event) { return ctx.setFrequency($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, BillingComponent_option_23_Template, 2, 1, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "No. of Users :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BillingComponent_Template_input_ngModelChange_29_listener($event) { return ctx.numberUsersValue = $event; })("change", function BillingComponent_Template_input_change_29_listener() { return ctx.setOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, BillingComponent_p_30_Template, 3, 2, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BillingComponent_Template_input_ngModelChange_37_listener($event) { return ctx.emailValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, BillingComponent_div_39_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, BillingComponent_div_40_Template, 6, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("paymentInit", function BillingComponent_Template_button_paymentInit_41_listener() { return ctx.paymentInit(); })("onClose", function BillingComponent_Template_button_onClose_41_listener() { return ctx.paymentCancel(); })("callback", function BillingComponent_Template_button_callback_41_listener($event) { return ctx.paymentDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, " Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " Billing History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Subscription Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, BillingComponent_div_55_Template, 7, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, BillingComponent_div_56_Template, 9, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, BillingComponent_div_57_Template, 9, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, BillingComponent_div_58_Template, 11, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, BillingComponent_div_60_Template, 4, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, BillingComponent_div_61_Template, 3, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, BillingComponent_div_62_Template, 3, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, BillingComponent_div_63_Template, 4, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](65, BillingComponent_div_65_Template, 6, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, BillingComponent_div_66_Template, 6, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Total Users :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "app-connection-toast", null, 32);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("headings", ctx.navHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.subscriptionTypeValue)("ngClass", !ctx.isSubscriptionValid ? "is-invalid" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.subscriptionSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.billingFrequencyValue)("disabled", ctx.isFrequencyDisabled)("ngClass", !ctx.isFrequencyValid ? "is-invalid" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.frequencySource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.numberUsersValue)("step", ctx.numberUsersStep)("disabled", ctx.isnumberUsersDisabled)("max", ctx.numberUsersStep * 4)("ngClass", !ctx.isNumberUsersValid ? "is-invalid" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isNumberUsersValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.emailValue)("ngClass", _r4.touched && _r4.errors ? "is-invalid" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isSubscriptionLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSubscriptionLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", true)("email", ctx.emailValue)("amount", 200)("currency", "GHS")("ref", ctx.paystackOptions.ref)("plan", ctx.paystackOptions.plan)("quantity", ctx.paystackOptions.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedSubscription == "Individual");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedSubscription == "Small Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedSubscription == "Large Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedSubscription == "Comprehensive");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedSubscription == "Individual");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedSubscription == "Small Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedSubscription == "Large Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedSubscription == "Comprehensive");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedSubscription == "Small Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedSubscription == "Large Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.numberUsersValue, " ");
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__.ModuleTopnavComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, angular4_paystack__WEBPACK_IMPORTED_MODULE_7__.Angular4PaystackDirective, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWxsaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 73219:
/*!**************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/settings/dashboard/dashboard.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_restaurant_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/settings-api/settings-api.service */ 2606);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 7005);






const _c0 = ["connectionToastComponentReference"];
function DashboardComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(settingsApi) {
        this.settingsApi = settingsApi;
        this.navHeading = [
            { text: "Dashboard", url: "/home/settings/dashboard" },
        ];
    }
    ngOnInit() {
        this.getSubscription();
    }
    getSubscription() {
        this.settingsApi.getSubscription()
            .then((res) => {
            console.log(res);
            this.subscriptionData = res;
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_1__.SettingsApiService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 16, vars: 4, consts: [[3, "headings"], [1, "container"], [1, "row"], [1, "col-md-3", "mb-4"], [1, "card", "border-left-secondary", "shadow", "h-100", "py-2"], [1, "card-body"], [1, "row", "no-gutters", "align-items-center"], [1, "col", "mr-2"], [1, "text-xs", "font-weight-bold", "text-uppercase", "mb-1"], [1, "h5", "mb-0", "text-gray-800"], [4, "ngIf"], ["connectionToastComponentReference", ""]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Current Subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DashboardComponent_span_12_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "app-connection-toast", null, 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("headings", ctx.navHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.subscriptionData == null ? null : ctx.subscriptionData.data().subscription_type, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.subscriptionData == null ? null : ctx.subscriptionData.data().billing_frequency) != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.subscriptionData == null ? null : ctx.subscriptionData.data().billing_frequency, " ");
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_2__.ModuleTopnavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3500:
/*!****************************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/settings/payments-history/payments-history.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsHistoryComponent": () => (/* binding */ PaymentsHistoryComponent)
/* harmony export */ });
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_restaurant_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/settings-api/settings-api.service */ 2606);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 869);







const _c0 = ["connectionToastComponentReference"];
function PaymentsHistoryComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const history_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](history_r2.payment_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](history_r2.payment_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](history_r2.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](history_r2.status);
} }
class PaymentsHistoryComponent {
    constructor(settingsApi) {
        this.settingsApi = settingsApi;
        this.navHeading = [
            { text: "Subscription", url: "/home/settings/billing" },
            { text: "Billing History", url: "/home/settings/payments-history" },
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.getHistory();
    }
    getHistory() {
        // this.settingsApi.getHistory()
        //   .subscribe(
        //     res => {
        //       console.log(res);
        //       this.historyData = res;
        //     },
        //     err => {
        //       console.log(err);
        //       this.connectionToast.openToast();
        //     }
        //   )
    }
}
PaymentsHistoryComponent.ɵfac = function PaymentsHistoryComponent_Factory(t) { return new (t || PaymentsHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_1__.SettingsApiService)); };
PaymentsHistoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PaymentsHistoryComponent, selectors: [["app-payments-history"]], viewQuery: function PaymentsHistoryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 25, vars: 2, consts: [[3, "headings"], [1, "container"], [1, "row"], [1, "col-md-8"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "row", "mb-3"], [1, "col"], ["routerLink", "/home/settings/billing", 1, "btn", "btn-secondary", "float-end", "nr-standard-font"], [1, "bi", "bi-arrow-left-right", "me-2"], ["connectionToastComponentReference", ""]], template: function PaymentsHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Payment ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Payment Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, PaymentsHistoryComponent_tr_16_Template, 9, 4, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Billing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "app-connection-toast", null, 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("headings", ctx.navHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.historyData);
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_2__.ModuleTopnavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50cy1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 21369:
/*!**********************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/settings/profile-content/basic/basic.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicComponent": () => (/* binding */ BasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_restaurant_src_app_services_account_api_account_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/restaurant/src/app/services/account-api/account-api.service */ 18140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 7005);






const _c0 = ["connectionToastComponentReference"];
function BasicComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BasicComponent_div_19_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.updateAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.isBasicSaving);
} }
function BasicComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class BasicComponent {
    constructor(accountApi) {
        this.accountApi = accountApi;
        this.basicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({});
        this.isAccountLoading = true;
        this.isBasicSaving = true;
    }
    ngOnInit() {
        this.initBasicForm();
    }
    initBasicForm() {
        this.basicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            about: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
        });
    }
    updateAccount() {
        let data = {
            name: this.basicForm.controls.name.value,
            about: this.basicForm.controls.about.value,
        };
        this.isBasicSaving = true;
        this.accountApi.updateAccount(data)
            .then((res) => {
            console.log(res);
            this.isBasicSaving = false;
        }, (err) => {
            console.log(err);
            this.isBasicSaving = false;
            this.connectionToast.openToast();
        });
    }
}
BasicComponent.ɵfac = function BasicComponent_Factory(t) { return new (t || BasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_account_api_account_api_service__WEBPACK_IMPORTED_MODULE_1__.AccountApiService)); };
BasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BasicComponent, selectors: [["app-basic"]], viewQuery: function BasicComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 21, vars: 3, consts: [[1, "row", "m-2", "page-form"], [1, "col-md-6"], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "row", "mb-3"], [1, "col-md-12"], [1, "row", "mb-2"], [1, "col-md-4"], [1, "mt-1"], [1, "col-md-8"], ["formControlName", "name", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "about", "rows", "3", 1, "form-control", "form-control-sm", "w-100"], ["class", "row mt-3", 4, "ngIf"], [1, "row", "mt-3"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", "float-end", "page-form-btn", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-sm", "float-end", "btn-light", "page-form-btn"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm"], [1, "visually-hidden"]], template: function BasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function BasicComponent_Template_form_ngSubmit_2_listener() { return ctx.updateAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Basic Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Restaurant Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "About :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, BasicComponent_div_19_Template, 4, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, BasicComponent_div_20_Template, 6, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.basicForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isAccountLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAccountLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 63548:
/*!**************************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/settings/profile-content/contact/contact.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_restaurant_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/settings-api/settings-api.service */ 2606);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 7005);






const _c0 = ["connectionToastComponentReference"];
function ContactComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.isExtendedProfileSaving);
} }
function ContactComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ContactComponent {
    constructor(settingsApi) {
        this.settingsApi = settingsApi;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({});
        this.isExtendedProfileLoading = true;
        this.isExtendedProfileSaving = false;
    }
    ngOnInit() {
        this.initContactForm();
    }
    initContactForm() {
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
        });
    }
    updateExtendedProfile() {
        let data = {
            email: this.contactForm.controls.email.value,
            phone: this.contactForm.controls.phone.value,
            address: this.contactForm.controls.address.value,
        };
        this.isExtendedProfileSaving = true;
        this.settingsApi.updateExtendedProfile(data)
            .then(res => {
            console.log(res);
            this.isExtendedProfileSaving = false;
        }, err => {
            console.log(err);
            this.isExtendedProfileSaving = false;
            this.connectionToast.openToast();
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_1__.SettingsApiService)); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], viewQuery: function ContactComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 27, vars: 3, consts: [[1, "row", "m-2", "page-form"], [1, "col-md-6"], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "row", "mb-3"], [1, "col-md-12"], [1, "row", "mb-2"], [1, "col-md-4"], [1, "mt-1"], [1, "col-md-8"], ["formControlName", "email", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "phone", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "address", "rows", "3", 1, "form-control", "form-control-sm", "w-100"], ["class", "row mt-3", 4, "ngIf"], [1, "row", "mt-3"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", "float-end", "page-form-btn", 3, "disabled"], ["type", "button", 1, "btn", "btn-sm", "float-end", "btn-light", "page-form-btn"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm"], [1, "visually-hidden"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_2_listener() { return ctx.updateExtendedProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Contact Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Phone No. :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Address :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "teaxtarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ContactComponent_div_25_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ContactComponent_div_26_Template, 6, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isExtendedProfileLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isExtendedProfileLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 75566:
/*!****************************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/settings/profile-content/location/location.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationComponent": () => (/* binding */ LocationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_restaurant_src_app_services_account_api_account_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/restaurant/src/app/services/account-api/account-api.service */ 18140);
/* harmony import */ var projects_restaurant_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/settings-api/settings-api.service */ 2606);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-google-places-autocomplete */ 37544);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);








const _c0 = ["connectionToastComponentReference"];
function LocationComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isExtendedProfileSaving || ctx_r1.isAccountSaving);
} }
function LocationComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class LocationComponent {
    constructor(accountApi, settingsApi) {
        this.accountApi = accountApi;
        this.settingsApi = settingsApi;
        this.locationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
        this.isAccountLoading = true;
        this.isExtendedProfileLoading = true;
        this.isAccountSaving = false;
        this.isExtendedProfileSaving = false;
    }
    ngOnInit() {
        this.initLocationForm();
    }
    initLocationForm() {
        this.locationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
        });
    }
    updateLocation() {
        this.updateAccount();
        this.updateExtendedProfile();
    }
    updateAccount() {
        let data = {
            location: this.locationForm.controls.location.value,
        };
        this.isAccountLoading = true;
        this.accountApi.updateAccount(data)
            .then((res) => {
            console.log(res);
            this.isAccountLoading = false;
        }, (err) => {
            console.log(err);
            this.isAccountLoading = false;
            this.connectionToast.openToast();
        });
    }
    // extended profile
    updateExtendedProfile() {
        let data = {
            country: this.locationForm.controls.country.value,
            state: this.locationForm.controls.state.value,
            city: this.locationForm.controls.city.value,
        };
        this.isExtendedProfileSaving = true;
        this.settingsApi.updateExtendedProfile(data)
            .then(res => {
            console.log(res);
            this.isExtendedProfileSaving = false;
        }, err => {
            console.log(err);
            this.isExtendedProfileSaving = false;
            this.connectionToast.openToast();
        });
    }
    onAddressChange(address) {
        this.locationForm.controls.location.setValue(address.formatted_address);
        console.log(address);
    }
}
LocationComponent.ɵfac = function LocationComponent_Factory(t) { return new (t || LocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_account_api_account_api_service__WEBPACK_IMPORTED_MODULE_1__.AccountApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_2__.SettingsApiService)); };
LocationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LocationComponent, selectors: [["app-location"]], viewQuery: function LocationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 34, vars: 3, consts: [[1, "row", "m-2", "page-form"], [1, "col-md-6"], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "row", "mb-3"], [1, "col-md-12"], [1, "row", "mb-2"], [1, "col-md-4"], [1, "mt-1"], [1, "col-md-8"], ["formControlName", "country", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "state", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "city", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "location", "ngx-google-places-autocomplete", "", 1, "form-control", "form-control-sm", "w-100", 3, "onAddressChange"], ["placesRef", "ngx-places"], ["class", "row mt-3", 4, "ngIf"], [1, "row", "mt-3"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", "float-end", "page-form-btn", 3, "disabled"], ["type", "button", 1, "btn", "btn-sm", "float-end", "btn-light", "page-form-btn"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm"], [1, "visually-hidden"]], template: function LocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LocationComponent_Template_form_ngSubmit_2_listener() { return ctx.updateLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Location Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Country :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Region / State :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "City / Town :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Location :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onAddressChange", function LocationComponent_Template_input_onAddressChange_30_listener($event) { return ctx.onAddressChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, LocationComponent_div_32_Template, 4, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, LocationComponent_div_33_Template, 6, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.locationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx.isExtendedProfileLoading || ctx.isAccountLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isExtendedProfileLoading || ctx.isAccountLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__.GooglePlaceDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 33186:
/*!********************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/settings/profile-content/logo/logo.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoComponent": () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 63604);
/* harmony import */ var projects_personal_src_app_components_module_utilities_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../personal/src/app/components/module-utilities/image-input/image-input.component */ 84154);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/storage */ 43462);
/* harmony import */ var projects_restaurant_src_app_services_account_api_account_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/account-api/account-api.service */ 18140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);








const _c0 = ["imageInputComponentReference"];
const _c1 = ["connectionToastComponentReference"];
function LogoComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LogoComponent_div_9_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.uploadImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.isLogoSaving);
} }
function LogoComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class LogoComponent {
    constructor(storage, accountApi) {
        this.storage = storage;
        this.accountApi = accountApi;
        this.storageBasePath = "/restaurant/" + localStorage.getItem('restaurant_id') + "/account/";
        this.isAccountLoading = false;
        this.isLogoSaving = false;
    }
    ngOnInit() {
    }
    uploadImage() {
        if (this.imageInput.isImageChanged) {
            this.isLogoSaving = true;
            const storagePath = this.storageBasePath;
            const storageRef = this.storage.ref(storagePath);
            const task = this.storage.upload(storagePath, this.imageInput.image);
            task.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => {
                storageRef.getDownloadURL().subscribe(downloadUrl => {
                    this.updateAccount({ logo: downloadUrl });
                });
            })).subscribe();
        }
    }
    updateAccount(data) {
        this.accountApi.updateAccount(data)
            .then((res) => {
            console.log(res);
            this.isLogoSaving = false;
        }, (err) => {
            console.log(err);
            this.isLogoSaving = false;
            this.connectionToast.openToast();
        });
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_5__.AngularFireStorage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_account_api_account_api_service__WEBPACK_IMPORTED_MODULE_2__.AccountApiService)); };
LogoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], viewQuery: function LogoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_0__.ImageInputComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.imageInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 11, vars: 5, consts: [[1, "row", "m-2", "page-form"], [1, "col-md-6"], [1, "row", "mb-3"], [1, "col-md-12"], [1, "row", "mt-3", "page-form-div"], [3, "width", "height", "imgType"], ["class", "row mt-3", 4, "ngIf"], [1, "row", "mt-3"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", "page-form-btn", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-sm", "float-end", "btn-light", "page-form-btn"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm"], [1, "visually-hidden"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Restaurant Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-image-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, LogoComponent_div_9_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, LogoComponent_div_10_Template, 6, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 180)("height", 180)("imgType", "logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isAccountLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isAccountLoading);
    } }, directives: [projects_personal_src_app_components_module_utilities_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_0__.ImageInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 34296:
/*!**********************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/settings/profile/profile.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_restaurant_src_app_services_account_api_account_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/restaurant/src/app/services/account-api/account-api.service */ 18140);
/* harmony import */ var projects_restaurant_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/settings-api/settings-api.service */ 2606);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _profile_content_basic_basic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-content/basic/basic.component */ 21369);
/* harmony import */ var _profile_content_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile-content/logo/logo.component */ 33186);
/* harmony import */ var _profile_content_location_location_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile-content/location/location.component */ 75566);
/* harmony import */ var _profile_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile-content/contact/contact.component */ 63548);










const _c0 = ["basicComponentReference"];
const _c1 = ["logoComponentReference"];
const _c2 = ["locationComponentReference"];
const _c3 = ["contactComponentReference"];
const _c4 = ["connectionToastComponentReference"];
class ProfileComponent {
    constructor(accountApi, settingsApi) {
        this.accountApi = accountApi;
        this.settingsApi = settingsApi;
        this.navHeading = [
            { text: "Profile", url: "/home/settings/profile" },
        ];
    }
    ngOnInit() {
        this.getAccount();
        this.getExtendedProfile();
    }
    getAccount() {
        // this.basic.isAccountLoading = true;
        // this.location.isAccountLoading = true;
        this.accountApi.getAccount()
            .then((res) => {
            console.log(res);
            this.accountData = res;
            this.basic.basicForm.controls.name.setValue(this.accountData.data().name);
            this.basic.basicForm.controls.about.setValue(this.accountData.data().about);
            this.location.locationForm.controls.location.setValue(this.accountData.data().location);
            this.basic.isAccountLoading = false;
            this.location.isAccountLoading = false;
        }, (err) => {
            console.log(err);
            this.basic.isAccountLoading = false;
            this.location.isAccountLoading = false;
            this.connectionToast.openToast();
        });
    }
    getExtendedProfile() {
        // this.location.isExtendedProfileLoading = true;
        // this.contact.isExtendedProfileLoading = true;
        this.settingsApi.getExtendedProfile()
            .then((res) => {
            console.log(res);
            this.extendedProfileData = res;
            this.location.locationForm.controls.country.setValue(this.extendedProfileData.data().country);
            this.location.locationForm.controls.state.setValue(this.extendedProfileData.data().state);
            this.location.locationForm.controls.city.setValue(this.extendedProfileData.data().city);
            this.contact.contactForm.controls.email.setValue(this.extendedProfileData.data().email);
            this.contact.contactForm.controls.phone.setValue(this.extendedProfileData.data().phone);
            this.contact.contactForm.controls.address.setValue(this.extendedProfileData.data().address);
            this.location.isExtendedProfileLoading = false;
            this.contact.isExtendedProfileLoading = false;
        }, (err) => {
            console.log(err);
            this.location.isExtendedProfileLoading = false;
            this.contact.isExtendedProfileLoading = false;
            this.connectionToast.openToast();
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_account_api_account_api_service__WEBPACK_IMPORTED_MODULE_1__.AccountApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_2__.SettingsApiService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], viewQuery: function ProfileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c4, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.basic = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.logo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.location = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.contact = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 29, vars: 1, consts: [[3, "headings"], [1, "container"], [1, "row", "settings-tabs"], [1, "col-md-12"], [1, "settings-tabs"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "nav-basic-tab", "data-bs-toggle", "tab", "data-bs-target", "#nav-basic", "type", "button", "role", "tab", "aria-controls", "nav-basic", "aria-selected", "true", 1, "nav-link", "active"], ["id", "nav-photo-tab", "data-bs-toggle", "tab", "data-bs-target", "#nav-photo", "type", "button", "role", "tab", "aria-controls", "nav-photo", "aria-selected", "false", 1, "nav-link"], ["id", "nav-location-tab", "data-bs-toggle", "tab", "data-bs-target", "#nav-location", "type", "button", "role", "tab", "aria-controls", "nav-location", "aria-selected", "false", 1, "nav-link"], ["id", "nav-contact-tab", "data-bs-toggle", "tab", "data-bs-target", "#nav-contact", "type", "button", "role", "tab", "aria-controls", "nav-contact", "aria-selected", "false", 1, "nav-link"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-basic", "role", "tabpanel", "aria-labelledby", "nav-basic-tab", 1, "tab-pane", "fade", "show", "active"], ["basicComponentReference", ""], ["id", "nav-photo", "role", "tabpanel", "aria-labelledby", "nav-photo-tab", 1, "tab-pane", "fade"], ["logoComponentReference", ""], ["id", "nav-location", "role", "tabpanel", "aria-labelledby", "nav-location-tab", 1, "tab-pane", "fade"], ["locationComponentReference", ""], ["id", "nav-contact", "role", "tabpanel", "aria-labelledby", "nav-contact-tab", 1, "tab-pane", "fade"], ["contactComponentReference", ""], ["connectionToastComponentReference", ""]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Basic Profle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " Restaurant Logo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " Location Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Contact Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "app-basic", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "app-logo", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "app-location", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "app-contact", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "app-connection-toast", null, 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("headings", ctx.navHeading);
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__.ModuleTopnavComponent, _profile_content_basic_basic_component__WEBPACK_IMPORTED_MODULE_4__.BasicComponent, _profile_content_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__.LogoComponent, _profile_content_location_location_component__WEBPACK_IMPORTED_MODULE_6__.LocationComponent, _profile_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__.ContactComponent, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent], styles: [".settings-tabs .smart-tabs-content-section,   .settings-tabs .smart-tabs-header-section {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBQTtBQUNGIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnNldHRpbmdzLXRhYnMgLnNtYXJ0LXRhYnMtY29udGVudC1zZWN0aW9uLFxyXG46Om5nLWRlZXAgLnNldHRpbmdzLXRhYnMgLnNtYXJ0LXRhYnMtaGVhZGVyLXNlY3Rpb257XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 68312:
/*!************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/settings/settings.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-charts */ 34459);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-google-places-autocomplete */ 37544);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular4-paystack */ 77838);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 73219);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ 23425);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ 34296);
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./billing/billing.component */ 90910);
/* harmony import */ var _profile_content_basic_basic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-content/basic/basic.component */ 21369);
/* harmony import */ var _profile_content_logo_logo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-content/logo/logo.component */ 33186);
/* harmony import */ var _profile_content_location_location_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-content/location/location.component */ 75566);
/* harmony import */ var _profile_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile-content/contact/contact.component */ 63548);
/* harmony import */ var _payments_history_payments_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payments-history/payments-history.component */ 3500);
/* harmony import */ var projects_restaurant_src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! projects/restaurant/src/environments/environment */ 3241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1858);



















class SettingsModule {
}
SettingsModule.ɵfac = function SettingsModule_Factory(t) { return new (t || SettingsModule)(); };
SettingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_16__.ChartsModule,
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__.GooglePlaceModule,
            angular4_paystack__WEBPACK_IMPORTED_MODULE_17__.Angular4PaystackModule.forRoot(projects_restaurant_src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.paystackLivePublicKey),
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_1__.ModuleUtilitiesModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SettingsModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__.SettingsComponent,
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent,
        _billing_billing_component__WEBPACK_IMPORTED_MODULE_5__.BillingComponent,
        _profile_content_basic_basic_component__WEBPACK_IMPORTED_MODULE_6__.BasicComponent,
        _profile_content_logo_logo_component__WEBPACK_IMPORTED_MODULE_7__.LogoComponent,
        _profile_content_location_location_component__WEBPACK_IMPORTED_MODULE_8__.LocationComponent,
        _profile_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent,
        _payments_history_payments_history_component__WEBPACK_IMPORTED_MODULE_10__.PaymentsHistoryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_16__.ChartsModule,
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__.GooglePlaceModule, angular4_paystack__WEBPACK_IMPORTED_MODULE_17__.Angular4PaystackModule, projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_1__.ModuleUtilitiesModule] }); })();


/***/ }),

/***/ 23425:
/*!************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/components/modules/settings/settings/settings.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../personal/src/app/components/module-utilities/module-topnav/module-topnav.component */ 8972);


class SettingsComponent {
    constructor() {
        this.navHeading = [
            { text: "Settings", url: "/home/settings/settings" },
        ];
    }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 1, vars: 1, consts: [[3, "headings"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-module-topnav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("headings", ctx.navHeading);
    } }, directives: [_personal_src_app_components_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_0__.ModuleTopnavComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 89500:
/*!*************************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/settings-page/settings-page-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _settings_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-page.component */ 94688);
/* harmony import */ var _components_modules_settings_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/modules/settings/dashboard/dashboard.component */ 73219);
/* harmony import */ var _components_modules_settings_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/modules/settings/settings/settings.component */ 23425);
/* harmony import */ var _components_modules_settings_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modules/settings/profile/profile.component */ 34296);
/* harmony import */ var _components_modules_settings_billing_billing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/modules/settings/billing/billing.component */ 90910);
/* harmony import */ var _components_modules_settings_payments_history_payments_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/modules/settings/payments-history/payments-history.component */ 3500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1858);









const routes = [
    {
        path: "",
        component: _settings_page_component__WEBPACK_IMPORTED_MODULE_0__.SettingsPageComponent,
        children: [
            { path: "", component: _components_modules_settings_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent },
            { path: "settings", component: _components_modules_settings_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__.SettingsComponent },
            { path: "dashboard", component: _components_modules_settings_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent },
            { path: "profile", component: _components_modules_settings_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent },
            { path: "billing", component: _components_modules_settings_billing_billing_component__WEBPACK_IMPORTED_MODULE_4__.BillingComponent },
            { path: "payments-history", component: _components_modules_settings_payments_history_payments_history_component__WEBPACK_IMPORTED_MODULE_5__.PaymentsHistoryComponent },
        ]
    }
];
class SettingsPageRoutingModule {
}
SettingsPageRoutingModule.ɵfac = function SettingsPageRoutingModule_Factory(t) { return new (t || SettingsPageRoutingModule)(); };
SettingsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SettingsPageRoutingModule });
SettingsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SettingsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 94688:
/*!********************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/settings-page/settings-page.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageComponent": () => (/* binding */ SettingsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../application/src/app/components/main-navbar/main-navbar/main-navbar.component */ 28088);
/* harmony import */ var _personal_src_app_components_module_utilities_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../personal/src/app/components/module-utilities/module-sidenav/module-sidenav.component */ 7632);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 869);




class SettingsPageComponent {
    constructor() {
        this.navLinks = [
            { text: "Profile", url: "/home/settings/profile", icon: "bi bi-building" },
            { text: "Subscription", url: "/home/settings/billing", icon: "bi bi-cash" },
        ];
    }
    ngOnInit() {
    }
}
SettingsPageComponent.ɵfac = function SettingsPageComponent_Factory(t) { return new (t || SettingsPageComponent)(); };
SettingsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SettingsPageComponent, selectors: [["app-settings-page"]], decls: 6, vars: 4, consts: [[3, "navBrand", "source"], ["id", "wrapper"], [3, "navLinks", "heading"], ["id", "content-wrapper", 1, "d-flex", "flex-column"], ["id", "content"]], template: function SettingsPageComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navLinks", ctx.navLinks)("heading", "Settings");
    } }, directives: [_application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__.MainNavbarComponent, _personal_src_app_components_module_utilities_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.ModuleSidenavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 16721:
/*!*****************************************************************************************!*\
  !*** ./projects/restaurant/src/app/pages/modules/settings-page/settings-page.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _settings_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-page-routing.module */ 89500);
/* harmony import */ var projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/application/src/app/components/main-navbar/main-navbar.module */ 7264);
/* harmony import */ var projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _components_modules_settings_settings_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modules/settings/settings.module */ 68312);
/* harmony import */ var _settings_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-page.component */ 94688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);







class SettingsPageModule {
}
SettingsPageModule.ɵfac = function SettingsPageModule_Factory(t) { return new (t || SettingsPageModule)(); };
SettingsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SettingsPageModule });
SettingsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _settings_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule,
            projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
            projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
            _components_modules_settings_settings_module__WEBPACK_IMPORTED_MODULE_3__.SettingsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SettingsPageModule, { declarations: [_settings_page_component__WEBPACK_IMPORTED_MODULE_4__.SettingsPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _settings_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule,
        projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
        projects_personal_src_app_components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
        _components_modules_settings_settings_module__WEBPACK_IMPORTED_MODULE_3__.SettingsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_restaurant_src_app_pages_modules_settings-page_settings-page_module_ts.js.map