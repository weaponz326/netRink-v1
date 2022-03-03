"use strict";
(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["projects_personal_src_app_pages_modules_settings-page_settings-page_module_ts"],{

/***/ 43462:
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/fire/fesm2015/angular-fire-compat-storage.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularFireStorage": () => (/* binding */ AngularFireStorage),
/* harmony export */   "AngularFireStorageModule": () => (/* binding */ AngularFireStorageModule),
/* harmony export */   "BUCKET": () => (/* binding */ BUCKET),
/* harmony export */   "GetDownloadURLPipe": () => (/* binding */ GetDownloadURLPipe),
/* harmony export */   "GetDownloadURLPipeModule": () => (/* binding */ GetDownloadURLPipeModule),
/* harmony export */   "MAX_OPERATION_RETRY_TIME": () => (/* binding */ MAX_OPERATION_RETRY_TIME),
/* harmony export */   "MAX_UPLOAD_RETRY_TIME": () => (/* binding */ MAX_UPLOAD_RETRY_TIME),
/* harmony export */   "USE_EMULATOR": () => (/* binding */ USE_EMULATOR),
/* harmony export */   "createStorageRef": () => (/* binding */ createStorageRef),
/* harmony export */   "createUploadTask": () => (/* binding */ createUploadTask),
/* harmony export */   "fromTask": () => (/* binding */ fromTask)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 93428);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 81092);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 92216);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 95280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 64058);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 72085);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 71061);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ 4350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat */ 27678);
/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/storage */ 67533);
/* harmony import */ var _angular_fire_app_check__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/app-check */ 20420);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 94462);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ 48870);












 // Things aren't working great, I'm having to put in a lot of work-arounds for what
// appear to be Firebase JS SDK bugs https://github.com/firebase/firebase-js-sdk/issues/4158

function fromTask(task) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    const progress = snap => subscriber.next(snap);

    const error = e => subscriber.error(e);

    const complete = () => subscriber.complete(); // emit the current snapshot, so they don't have to wait for state_changes
    // to fire next... this is stale if the task is no longer running :(


    progress(task.snapshot);
    const unsub = task.on('state_changed', progress); // it turns out that neither task snapshot nor 'state_changed' fire the last
    // snapshot before completion, the one with status 'success" and 100% progress
    // so let's use the promise form of the task for that

    task.then(snapshot => {
      progress(snapshot);
      complete();
    }, e => {
      // TODO investigate, again this is stale, we never fire a canceled or error it seems
      progress(task.snapshot);
      error(e);
    }); // on's type if Function, rather than () => void, need to wrap

    return function unsubscribe() {
      unsub();
    };
  }).pipe( // deal with sync emissions from first emitting `task.snapshot`, this makes sure
  // that if the task is already finished we don't emit the old running state
  (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(0));
}
/**
 * Create an AngularFireUploadTask from a regular UploadTask from the Storage SDK.
 * This method creates an observable of the upload and returns on object that provides
 * multiple methods for controlling and monitoring the file upload.
 */


function createUploadTask(task) {
  const inner$ = fromTask(task);
  return {
    task,
    then: task.then.bind(task),
    catch: task.catch.bind(task),
    pause: task.pause.bind(task),
    cancel: task.cancel.bind(task),
    resume: task.resume.bind(task),
    snapshotChanges: () => inner$,
    percentageChanges: () => inner$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(s => s.bytesTransferred / s.totalBytes * 100))
  };
}
/**
 * Create an AngularFire wrapped Storage Reference. This object
 * creates observable methods from promise based methods.
 */


function createStorageRef(ref) {
  return {
    getDownloadURL: () => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(undefined).pipe(_angular_fire__WEBPACK_IMPORTED_MODULE_6__.observeOutsideAngular, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => ref.getDownloadURL()), _angular_fire__WEBPACK_IMPORTED_MODULE_6__.keepUnstableUntilFirst),
    getMetadata: () => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(undefined).pipe(_angular_fire__WEBPACK_IMPORTED_MODULE_6__.observeOutsideAngular, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => ref.getMetadata()), _angular_fire__WEBPACK_IMPORTED_MODULE_6__.keepUnstableUntilFirst),
    delete: () => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(ref.delete()),
    child: path => createStorageRef(ref.child(path)),
    updateMetadata: meta => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(ref.updateMetadata(meta)),
    put: (data, metadata) => {
      const task = ref.put(data, metadata);
      return createUploadTask(task);
    },
    putString: (data, format, metadata) => {
      const task = ref.putString(data, format, metadata);
      return createUploadTask(task);
    },
    list: options => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(ref.list(options)),
    listAll: () => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(ref.listAll())
  };
}

const BUCKET = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.InjectionToken('angularfire2.storageBucket');
const MAX_UPLOAD_RETRY_TIME = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.InjectionToken('angularfire2.storage.maxUploadRetryTime');
const MAX_OPERATION_RETRY_TIME = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.InjectionToken('angularfire2.storage.maxOperationRetryTime');
const USE_EMULATOR = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.InjectionToken('angularfire2.storage.use-emulator');
/**
 * AngularFireStorage Service
 *
 * This service is the main entry point for this feature module. It provides
 * an API for uploading and downloading binary files from Cloud Storage for
 * Firebase.
 */

class AngularFireStorage {
  constructor(options, name, storageBucket, // tslint:disable-next-line:ban-types
  platformId, zone, schedulers, maxUploadRetryTime, maxOperationRetryTime, _useEmulator, _appCheckInstances) {
    const app = (0,_angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__["ɵfirebaseAppFactory"])(options, zone, name);
    this.storage = (0,_angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__["ɵcacheInstance"])(`${app.name}.storage.${storageBucket}`, 'AngularFireStorage', app.name, () => {
      const storage = zone.runOutsideAngular(() => app.storage(storageBucket || undefined));
      const useEmulator = _useEmulator;

      if (useEmulator) {
        storage.useEmulator(...useEmulator);
      }

      if (maxUploadRetryTime) {
        storage.setMaxUploadRetryTime(maxUploadRetryTime);
      }

      if (maxOperationRetryTime) {
        storage.setMaxOperationRetryTime(maxOperationRetryTime);
      }

      return storage;
    }, [maxUploadRetryTime, maxOperationRetryTime]);
  }

  ref(path) {
    return createStorageRef(this.storage.ref(path));
  }

  refFromURL(path) {
    return createStorageRef(this.storage.refFromURL(path));
  }

  upload(path, data, metadata) {
    const storageRef = this.storage.ref(path);
    const ref = createStorageRef(storageRef);
    return ref.put(data, metadata);
  }

}

AngularFireStorage.ɵfac = function AngularFireStorage_Factory(t) {
  return new (t || AngularFireStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.FIREBASE_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.FIREBASE_APP_NAME, 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](BUCKET, 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_6__["ɵAngularFireSchedulers"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](MAX_UPLOAD_RETRY_TIME, 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](MAX_OPERATION_RETRY_TIME, 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](USE_EMULATOR, 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_fire_app_check__WEBPACK_IMPORTED_MODULE_11__.AppCheckInstances, 8));
};

AngularFireStorage.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: AngularFireStorage,
  factory: AngularFireStorage.ɵfac,
  providedIn: 'any'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](AngularFireStorage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable,
    args: [{
      providedIn: 'any'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
        args: [_angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.FIREBASE_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
        args: [_angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.FIREBASE_APP_NAME]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
        args: [BUCKET]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_9__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }, {
      type: _angular_fire__WEBPACK_IMPORTED_MODULE_6__["ɵAngularFireSchedulers"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
        args: [MAX_UPLOAD_RETRY_TIME]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
        args: [MAX_OPERATION_RETRY_TIME]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
        args: [USE_EMULATOR]
      }]
    }, {
      type: _angular_fire_app_check__WEBPACK_IMPORTED_MODULE_11__.AppCheckInstances,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Optional
      }]
    }];
  }, null);
})();
/** to be used with in combination with | async */


class GetDownloadURLPipe {
  constructor(storage, cdr, state) {
    this.storage = storage;
    this.state = state;
    this.asyncPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe(cdr);
  }

  transform(path) {
    var _a;

    if (path !== this.path) {
      this.path = path;
      const key = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.makeStateKey)(`|getDownloadURL|${path}`);
      const existing = (_a = this.state) === null || _a === void 0 ? void 0 : _a.get(key, undefined);
      this.downloadUrl$ = existing ? (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(existing) : this.storage.ref(path).getDownloadURL().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(it => {
        var _a;

        return (_a = this.state) === null || _a === void 0 ? void 0 : _a.set(key, it);
      }));
    }

    return this.asyncPipe.transform(this.downloadUrl$);
  }

  ngOnDestroy() {
    this.asyncPipe.ngOnDestroy();
  }

}

GetDownloadURLPipe.ɵfac = function GetDownloadURLPipe_Factory(t) {
  return new (t || GetDownloadURLPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](AngularFireStorage, 16), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef, 16), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.TransferState, 24));
};

GetDownloadURLPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefinePipe"]({
  name: "getDownloadURL",
  type: GetDownloadURLPipe,
  pure: false
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](GetDownloadURLPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Pipe,
    args: [{
      name: 'getDownloadURL',
      pure: false
    }]
  }], function () {
    return [{
      type: AngularFireStorage
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.TransferState,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Optional
      }]
    }];
  }, null);
})();

class GetDownloadURLPipeModule {}

GetDownloadURLPipeModule.ɵfac = function GetDownloadURLPipeModule_Factory(t) {
  return new (t || GetDownloadURLPipeModule)();
};

GetDownloadURLPipeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: GetDownloadURLPipeModule
});
GetDownloadURLPipeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](GetDownloadURLPipeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule,
    args: [{
      declarations: [GetDownloadURLPipe],
      exports: [GetDownloadURLPipe]
    }]
  }], null, null);
})();

class AngularFireStorageModule {
  constructor() {
    firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__.default.registerVersion('angularfire', _angular_fire__WEBPACK_IMPORTED_MODULE_6__.VERSION.full, 'gcs-compat');
  }

}

AngularFireStorageModule.ɵfac = function AngularFireStorageModule_Factory(t) {
  return new (t || AngularFireStorageModule)();
};

AngularFireStorageModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AngularFireStorageModule
});
AngularFireStorageModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [AngularFireStorage],
  imports: [GetDownloadURLPipeModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](AngularFireStorageModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule,
    args: [{
      exports: [GetDownloadURLPipeModule],
      providers: [AngularFireStorage]
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 50517:
/*!**************************************************************!*\
  !*** ./node_modules/@firebase/storage/dist/index.esm2017.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringFormat": () => (/* binding */ StringFormat),
/* harmony export */   "_FbsBlob": () => (/* binding */ FbsBlob),
/* harmony export */   "_Location": () => (/* binding */ Location),
/* harmony export */   "_TaskEvent": () => (/* binding */ TaskEvent),
/* harmony export */   "_TaskState": () => (/* binding */ TaskState),
/* harmony export */   "_UploadTask": () => (/* binding */ UploadTask),
/* harmony export */   "_dataFromString": () => (/* binding */ dataFromString),
/* harmony export */   "_getChild": () => (/* binding */ _getChild),
/* harmony export */   "_invalidArgument": () => (/* binding */ invalidArgument),
/* harmony export */   "_invalidRootOperation": () => (/* binding */ invalidRootOperation),
/* harmony export */   "connectStorageEmulator": () => (/* binding */ connectStorageEmulator),
/* harmony export */   "deleteObject": () => (/* binding */ deleteObject),
/* harmony export */   "getBlob": () => (/* binding */ getBlob),
/* harmony export */   "getBytes": () => (/* binding */ getBytes),
/* harmony export */   "getDownloadURL": () => (/* binding */ getDownloadURL),
/* harmony export */   "getMetadata": () => (/* binding */ getMetadata),
/* harmony export */   "getStorage": () => (/* binding */ getStorage),
/* harmony export */   "getStream": () => (/* binding */ getStream),
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "listAll": () => (/* binding */ listAll),
/* harmony export */   "ref": () => (/* binding */ ref),
/* harmony export */   "updateMetadata": () => (/* binding */ updateMetadata),
/* harmony export */   "uploadBytes": () => (/* binding */ uploadBytes),
/* harmony export */   "uploadBytesResumable": () => (/* binding */ uploadBytesResumable),
/* harmony export */   "uploadString": () => (/* binding */ uploadString)
/* harmony export */ });
/* harmony import */ var C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 11733);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/app */ 1631);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ 63490);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/component */ 29191);




/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Constants used in the Firebase Storage library.
 */

/**
 * Domain name for firebase storage.
 */

const DEFAULT_HOST = 'firebasestorage.googleapis.com';
/**
 * The key in Firebase config json for the storage bucket.
 */

const CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
/**
 * 2 minutes
 *
 * The timeout for all operations except upload.
 */

const DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1000;
/**
 * 10 minutes
 *
 * The timeout for upload.
 */

const DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1000;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An error returned by the Firebase Storage SDK.
 * @public
 */

class StorageError extends _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError {
  /**
   * @param code - A StorageErrorCode string to be prefixed with 'storage/' and
   *  added to the end of the message.
   * @param message  - Error message.
   */
  constructor(code, message) {
    super(prependCode(code), `Firebase Storage: ${message} (${prependCode(code)})`);
    /**
     * Stores custom error data unque to StorageError.
     */

    this.customData = {
      serverResponse: null
    };
    this._baseMessage = this.message; // Without this, `instanceof StorageError`, in tests for example,
    // returns false.

    Object.setPrototypeOf(this, StorageError.prototype);
  }
  /**
   * Compares a StorageErrorCode against this error's code, filtering out the prefix.
   */


  _codeEquals(code) {
    return prependCode(code) === this.code;
  }
  /**
   * Optional response message that was added by the server.
   */


  get serverResponse() {
    return this.customData.serverResponse;
  }

  set serverResponse(serverResponse) {
    this.customData.serverResponse = serverResponse;

    if (this.customData.serverResponse) {
      this.message = `${this._baseMessage}\n${this.customData.serverResponse}`;
    } else {
      this.message = this._baseMessage;
    }
  }

}

function prependCode(code) {
  return 'storage/' + code;
}

function unknown() {
  const message = 'An unknown error occurred, please check the error payload for ' + 'server response.';
  return new StorageError("unknown"
  /* UNKNOWN */
  , message);
}

function objectNotFound(path) {
  return new StorageError("object-not-found"
  /* OBJECT_NOT_FOUND */
  , "Object '" + path + "' does not exist.");
}

function quotaExceeded(bucket) {
  return new StorageError("quota-exceeded"
  /* QUOTA_EXCEEDED */
  , "Quota for bucket '" + bucket + "' exceeded, please view quota on " + 'https://firebase.google.com/pricing/.');
}

function unauthenticated() {
  const message = 'User is not authenticated, please authenticate using Firebase ' + 'Authentication and try again.';
  return new StorageError("unauthenticated"
  /* UNAUTHENTICATED */
  , message);
}

function unauthorizedApp() {
  return new StorageError("unauthorized-app"
  /* UNAUTHORIZED_APP */
  , 'This app does not have permission to access Firebase Storage on this project.');
}

function unauthorized(path) {
  return new StorageError("unauthorized"
  /* UNAUTHORIZED */
  , "User does not have permission to access '" + path + "'.");
}

function retryLimitExceeded() {
  return new StorageError("retry-limit-exceeded"
  /* RETRY_LIMIT_EXCEEDED */
  , 'Max retry time for operation exceeded, please try again.');
}

function canceled() {
  return new StorageError("canceled"
  /* CANCELED */
  , 'User canceled the upload/download.');
}

function invalidUrl(url) {
  return new StorageError("invalid-url"
  /* INVALID_URL */
  , "Invalid URL '" + url + "'.");
}

function invalidDefaultBucket(bucket) {
  return new StorageError("invalid-default-bucket"
  /* INVALID_DEFAULT_BUCKET */
  , "Invalid default bucket '" + bucket + "'.");
}

function noDefaultBucket() {
  return new StorageError("no-default-bucket"
  /* NO_DEFAULT_BUCKET */
  , 'No default bucket ' + "found. Did you set the '" + CONFIG_STORAGE_BUCKET_KEY + "' property when initializing the app?");
}

function cannotSliceBlob() {
  return new StorageError("cannot-slice-blob"
  /* CANNOT_SLICE_BLOB */
  , 'Cannot slice blob for upload. Please retry the upload.');
}

function serverFileWrongSize() {
  return new StorageError("server-file-wrong-size"
  /* SERVER_FILE_WRONG_SIZE */
  , 'Server recorded incorrect upload file size, please retry the upload.');
}

function noDownloadURL() {
  return new StorageError("no-download-url"
  /* NO_DOWNLOAD_URL */
  , 'The given file does not have any download URLs.');
}
/**
 * @internal
 */


function invalidArgument(message) {
  return new StorageError("invalid-argument"
  /* INVALID_ARGUMENT */
  , message);
}

function appDeleted() {
  return new StorageError("app-deleted"
  /* APP_DELETED */
  , 'The Firebase app was deleted.');
}
/**
 * @param name - The name of the operation that was invalid.
 *
 * @internal
 */


function invalidRootOperation(name) {
  return new StorageError("invalid-root-operation"
  /* INVALID_ROOT_OPERATION */
  , "The operation '" + name + "' cannot be performed on a root reference, create a non-root " + "reference using child, such as .child('file.png').");
}
/**
 * @param format - The format that was not valid.
 * @param message - A message describing the format violation.
 */


function invalidFormat(format, message) {
  return new StorageError("invalid-format"
  /* INVALID_FORMAT */
  , "String does not match format '" + format + "': " + message);
}
/**
 * @param message - A message describing the internal error.
 */


function internalError(message) {
  throw new StorageError("internal-error"
  /* INTERNAL_ERROR */
  , 'Internal error: ' + message);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Firebase Storage location data.
 *
 * @internal
 */


class Location {
  constructor(bucket, path) {
    this.bucket = bucket;
    this.path_ = path;
  }

  get path() {
    return this.path_;
  }

  get isRoot() {
    return this.path.length === 0;
  }

  fullServerUrl() {
    const encode = encodeURIComponent;
    return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
  }

  bucketOnlyServerUrl() {
    const encode = encodeURIComponent;
    return '/b/' + encode(this.bucket) + '/o';
  }

  static makeFromBucketSpec(bucketString, host) {
    let bucketLocation;

    try {
      bucketLocation = Location.makeFromUrl(bucketString, host);
    } catch (e) {
      // Not valid URL, use as-is. This lets you put bare bucket names in
      // config.
      return new Location(bucketString, '');
    }

    if (bucketLocation.path === '') {
      return bucketLocation;
    } else {
      throw invalidDefaultBucket(bucketString);
    }
  }

  static makeFromUrl(url, host) {
    let location = null;
    const bucketDomain = '([A-Za-z0-9.\\-_]+)';

    function gsModify(loc) {
      if (loc.path.charAt(loc.path.length - 1) === '/') {
        loc.path_ = loc.path_.slice(0, -1);
      }
    }

    const gsPath = '(/(.*))?$';
    const gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
    const gsIndices = {
      bucket: 1,
      path: 3
    };

    function httpModify(loc) {
      loc.path_ = decodeURIComponent(loc.path);
    }

    const version = 'v[A-Za-z0-9_]+';
    const firebaseStorageHost = host.replace(/[.]/g, '\\.');
    const firebaseStoragePath = '(/([^?#]*).*)?$';
    const firebaseStorageRegExp = new RegExp(`^https?://${firebaseStorageHost}/${version}/b/${bucketDomain}/o${firebaseStoragePath}`, 'i');
    const firebaseStorageIndices = {
      bucket: 1,
      path: 3
    };
    const cloudStorageHost = host === DEFAULT_HOST ? '(?:storage.googleapis.com|storage.cloud.google.com)' : host;
    const cloudStoragePath = '([^?#]*)';
    const cloudStorageRegExp = new RegExp(`^https?://${cloudStorageHost}/${bucketDomain}/${cloudStoragePath}`, 'i');
    const cloudStorageIndices = {
      bucket: 1,
      path: 2
    };
    const groups = [{
      regex: gsRegex,
      indices: gsIndices,
      postModify: gsModify
    }, {
      regex: firebaseStorageRegExp,
      indices: firebaseStorageIndices,
      postModify: httpModify
    }, {
      regex: cloudStorageRegExp,
      indices: cloudStorageIndices,
      postModify: httpModify
    }];

    for (let i = 0; i < groups.length; i++) {
      const group = groups[i];
      const captures = group.regex.exec(url);

      if (captures) {
        const bucketValue = captures[group.indices.bucket];
        let pathValue = captures[group.indices.path];

        if (!pathValue) {
          pathValue = '';
        }

        location = new Location(bucketValue, pathValue);
        group.postModify(location);
        break;
      }
    }

    if (location == null) {
      throw invalidUrl(url);
    }

    return location;
  }

}
/**
 * A request whose promise always fails.
 */


class FailRequest {
  constructor(error) {
    this.promise_ = Promise.reject(error);
  }
  /** @inheritDoc */


  getPromise() {
    return this.promise_;
  }
  /** @inheritDoc */


  cancel(_appDelete = false) {}

}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */


function start(f, // eslint-disable-next-line @typescript-eslint/no-explicit-any
callback, timeout) {
  // TODO(andysoto): make this code cleaner (probably refactor into an actual
  // type instead of a bunch of functions with state shared in the closure)
  let waitSeconds = 1; // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
  // TODO: find a way to exclude Node type definition for storage because storage only works in browser
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  let retryTimeoutId = null; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  let globalTimeoutId = null;
  let hitTimeout = false;
  let cancelState = 0;

  function canceled() {
    return cancelState === 2;
  }

  let triggeredCallback = false;

  function triggerCallback(...args) {
    if (!triggeredCallback) {
      triggeredCallback = true;
      callback.apply(null, args);
    }
  }

  function callWithDelay(millis) {
    retryTimeoutId = setTimeout(() => {
      retryTimeoutId = null;
      f(handler, canceled());
    }, millis);
  }

  function clearGlobalTimeout() {
    if (globalTimeoutId) {
      clearTimeout(globalTimeoutId);
    }
  }

  function handler(success, ...args) {
    if (triggeredCallback) {
      clearGlobalTimeout();
      return;
    }

    if (success) {
      clearGlobalTimeout();
      triggerCallback.call(null, success, ...args);
      return;
    }

    const mustStop = canceled() || hitTimeout;

    if (mustStop) {
      clearGlobalTimeout();
      triggerCallback.call(null, success, ...args);
      return;
    }

    if (waitSeconds < 64) {
      /* TODO(andysoto): don't back off so quickly if we know we're offline. */
      waitSeconds *= 2;
    }

    let waitMillis;

    if (cancelState === 1) {
      cancelState = 2;
      waitMillis = 0;
    } else {
      waitMillis = (waitSeconds + Math.random()) * 1000;
    }

    callWithDelay(waitMillis);
  }

  let stopped = false;

  function stop(wasTimeout) {
    if (stopped) {
      return;
    }

    stopped = true;
    clearGlobalTimeout();

    if (triggeredCallback) {
      return;
    }

    if (retryTimeoutId !== null) {
      if (!wasTimeout) {
        cancelState = 2;
      }

      clearTimeout(retryTimeoutId);
      callWithDelay(0);
    } else {
      if (!wasTimeout) {
        cancelState = 1;
      }
    }
  }

  callWithDelay(0);
  globalTimeoutId = setTimeout(() => {
    hitTimeout = true;
    stop(true);
  }, timeout);
  return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */


function stop(id) {
  id(false);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function isJustDef(p) {
  return p !== void 0;
} // eslint-disable-next-line @typescript-eslint/ban-types


function isFunction(p) {
  return typeof p === 'function';
}

function isNonArrayObject(p) {
  return typeof p === 'object' && !Array.isArray(p);
}

function isString(p) {
  return typeof p === 'string' || p instanceof String;
}

function isNativeBlob(p) {
  return isNativeBlobDefined() && p instanceof Blob;
}

function isNativeBlobDefined() {
  return typeof Blob !== 'undefined';
}

function validateNumber(argument, minValue, maxValue, value) {
  if (value < minValue) {
    throw invalidArgument(`Invalid value for '${argument}'. Expected ${minValue} or greater.`);
  }

  if (value > maxValue) {
    throw invalidArgument(`Invalid value for '${argument}'. Expected ${maxValue} or less.`);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function makeUrl(urlPart, host, protocol) {
  let origin = host;

  if (protocol == null) {
    origin = `https://${host}`;
  }

  return `${protocol}://${origin}/v0${urlPart}`;
}

function makeQueryString(params) {
  const encode = encodeURIComponent;
  let queryPart = '?';

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const nextPart = encode(key) + '=' + encode(params[key]);
      queryPart = queryPart + nextPart + '&';
    }
  } // Chop off the extra '&' or '?' on the end


  queryPart = queryPart.slice(0, -1);
  return queryPart;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Error codes for requests made by the the XhrIo wrapper.
 */


var ErrorCode;

(function (ErrorCode) {
  ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
  ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
  ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Handles network logic for all Storage Requests, including error reporting and
 * retries with backoff.
 *
 * @param I - the type of the backend's network response.
 * @param - O the output type used by the rest of the SDK. The conversion
 * happens in the specified `callback_`.
 */


class NetworkRequest {
  constructor(url_, method_, headers_, body_, successCodes_, additionalRetryCodes_, callback_, errorCallback_, timeout_, progressCallback_, connectionFactory_) {
    this.url_ = url_;
    this.method_ = method_;
    this.headers_ = headers_;
    this.body_ = body_;
    this.successCodes_ = successCodes_;
    this.additionalRetryCodes_ = additionalRetryCodes_;
    this.callback_ = callback_;
    this.errorCallback_ = errorCallback_;
    this.timeout_ = timeout_;
    this.progressCallback_ = progressCallback_;
    this.connectionFactory_ = connectionFactory_;
    this.pendingConnection_ = null;
    this.backoffId_ = null;
    this.canceled_ = false;
    this.appDelete_ = false;
    this.promise_ = new Promise((resolve, reject) => {
      this.resolve_ = resolve;
      this.reject_ = reject;
      this.start_();
    });
  }
  /**
   * Actually starts the retry loop.
   */


  start_() {
    const doTheRequest = (backoffCallback, canceled) => {
      if (canceled) {
        backoffCallback(false, new RequestEndStatus(false, null, true));
        return;
      }

      const connection = this.connectionFactory_();
      this.pendingConnection_ = connection;

      const progressListener = progressEvent => {
        const loaded = progressEvent.loaded;
        const total = progressEvent.lengthComputable ? progressEvent.total : -1;

        if (this.progressCallback_ !== null) {
          this.progressCallback_(loaded, total);
        }
      };

      if (this.progressCallback_ !== null) {
        connection.addUploadProgressListener(progressListener);
      } // connection.send() never rejects, so we don't need to have a error handler or use catch on the returned promise.
      // eslint-disable-next-line @typescript-eslint/no-floating-promises


      connection.send(this.url_, this.method_, this.body_, this.headers_).then(() => {
        if (this.progressCallback_ !== null) {
          connection.removeUploadProgressListener(progressListener);
        }

        this.pendingConnection_ = null;
        const hitServer = connection.getErrorCode() === ErrorCode.NO_ERROR;
        const status = connection.getStatus();

        if (!hitServer || this.isRetryStatusCode_(status)) {
          const wasCanceled = connection.getErrorCode() === ErrorCode.ABORT;
          backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
          return;
        }

        const successCode = this.successCodes_.indexOf(status) !== -1;
        backoffCallback(true, new RequestEndStatus(successCode, connection));
      });
    };
    /**
     * @param requestWentThrough - True if the request eventually went
     *     through, false if it hit the retry limit or was canceled.
     */


    const backoffDone = (requestWentThrough, status) => {
      const resolve = this.resolve_;
      const reject = this.reject_;
      const connection = status.connection;

      if (status.wasSuccessCode) {
        try {
          const result = this.callback_(connection, connection.getResponse());

          if (isJustDef(result)) {
            resolve(result);
          } else {
            resolve();
          }
        } catch (e) {
          reject(e);
        }
      } else {
        if (connection !== null) {
          const err = unknown();
          err.serverResponse = connection.getErrorText();

          if (this.errorCallback_) {
            reject(this.errorCallback_(connection, err));
          } else {
            reject(err);
          }
        } else {
          if (status.canceled) {
            const err = this.appDelete_ ? appDeleted() : canceled();
            reject(err);
          } else {
            const err = retryLimitExceeded();
            reject(err);
          }
        }
      }
    };

    if (this.canceled_) {
      backoffDone(false, new RequestEndStatus(false, null, true));
    } else {
      this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
    }
  }
  /** @inheritDoc */


  getPromise() {
    return this.promise_;
  }
  /** @inheritDoc */


  cancel(appDelete) {
    this.canceled_ = true;
    this.appDelete_ = appDelete || false;

    if (this.backoffId_ !== null) {
      stop(this.backoffId_);
    }

    if (this.pendingConnection_ !== null) {
      this.pendingConnection_.abort();
    }
  }

  isRetryStatusCode_(status) {
    // The codes for which to retry came from this page:
    // https://cloud.google.com/storage/docs/exponential-backoff
    const isFiveHundredCode = status >= 500 && status < 600;
    const extraRetryCodes = [// Request Timeout: web server didn't receive full request in time.
    408, // Too Many Requests: you're getting rate-limited, basically.
    429];
    const isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
    const isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
    return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
  }

}
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled - Defaults to false.
 */


class RequestEndStatus {
  constructor(wasSuccessCode, connection, canceled) {
    this.wasSuccessCode = wasSuccessCode;
    this.connection = connection;
    this.canceled = !!canceled;
  }

}

function addAuthHeader_(headers, authToken) {
  if (authToken !== null && authToken.length > 0) {
    headers['Authorization'] = 'Firebase ' + authToken;
  }
}

function addVersionHeader_(headers, firebaseVersion) {
  headers['X-Firebase-Storage-Version'] = 'webjs/' + (firebaseVersion !== null && firebaseVersion !== void 0 ? firebaseVersion : 'AppManager');
}

function addGmpidHeader_(headers, appId) {
  if (appId) {
    headers['X-Firebase-GMPID'] = appId;
  }
}

function addAppCheckHeader_(headers, appCheckToken) {
  if (appCheckToken !== null) {
    headers['X-Firebase-AppCheck'] = appCheckToken;
  }
}

function makeRequest(requestInfo, appId, authToken, appCheckToken, requestFactory, firebaseVersion) {
  const queryPart = makeQueryString(requestInfo.urlParams);
  const url = requestInfo.url + queryPart;
  const headers = Object.assign({}, requestInfo.headers);
  addGmpidHeader_(headers, appId);
  addAuthHeader_(headers, authToken);
  addVersionHeader_(headers, firebaseVersion);
  addAppCheckHeader_(headers, appCheckToken);
  return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, requestFactory);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function getBlobBuilder() {
  if (typeof BlobBuilder !== 'undefined') {
    return BlobBuilder;
  } else if (typeof WebKitBlobBuilder !== 'undefined') {
    return WebKitBlobBuilder;
  } else {
    return undefined;
  }
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param args The values that will make up the resulting blob.
 * @return The blob.
 */


function getBlob$1(...args) {
  const BlobBuilder = getBlobBuilder();

  if (BlobBuilder !== undefined) {
    const bb = new BlobBuilder();

    for (let i = 0; i < args.length; i++) {
      bb.append(args[i]);
    }

    return bb.getBlob();
  } else {
    if (isNativeBlobDefined()) {
      return new Blob(args);
    } else {
      throw new StorageError("unsupported-environment"
      /* UNSUPPORTED_ENVIRONMENT */
      , "This browser doesn't seem to support creating Blobs");
    }
  }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */


function sliceBlob(blob, start, end) {
  if (blob.webkitSlice) {
    return blob.webkitSlice(start, end);
  } else if (blob.mozSlice) {
    return blob.mozSlice(start, end);
  } else if (blob.slice) {
    return blob.slice(start, end);
  }

  return null;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Converts a Base64 encoded string to a binary string. */


function decodeBase64(encoded) {
  return atob(encoded);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An enumeration of the possible string formats for upload.
 * @public
 */


const StringFormat = {
  /**
   * Indicates the string should be interpreted "raw", that is, as normal text.
   * The string will be interpreted as UTF-16, then uploaded as a UTF-8 byte
   * sequence.
   * Example: The string 'Hello! \\ud83d\\ude0a' becomes the byte sequence
   * 48 65 6c 6c 6f 21 20 f0 9f 98 8a
   */
  RAW: 'raw',

  /**
   * Indicates the string should be interpreted as base64-encoded data.
   * Padding characters (trailing '='s) are optional.
   * Example: The string 'rWmO++E6t7/rlw==' becomes the byte sequence
   * ad 69 8e fb e1 3a b7 bf eb 97
   */
  BASE64: 'base64',

  /**
   * Indicates the string should be interpreted as base64url-encoded data.
   * Padding characters (trailing '='s) are optional.
   * Example: The string 'rWmO--E6t7_rlw==' becomes the byte sequence
   * ad 69 8e fb e1 3a b7 bf eb 97
   */
  BASE64URL: 'base64url',

  /**
   * Indicates the string is a data URL, such as one obtained from
   * canvas.toDataURL().
   * Example: the string 'data:application/octet-stream;base64,aaaa'
   * becomes the byte sequence
   * 69 a6 9a
   * (the content-type "application/octet-stream" is also applied, but can
   * be overridden in the metadata object).
   */
  DATA_URL: 'data_url'
};

class StringData {
  constructor(data, contentType) {
    this.data = data;
    this.contentType = contentType || null;
  }

}
/**
 * @internal
 */


function dataFromString(format, stringData) {
  switch (format) {
    case StringFormat.RAW:
      return new StringData(utf8Bytes_(stringData));

    case StringFormat.BASE64:
    case StringFormat.BASE64URL:
      return new StringData(base64Bytes_(format, stringData));

    case StringFormat.DATA_URL:
      return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
    // do nothing
  } // assert(false);


  throw unknown();
}

function utf8Bytes_(value) {
  const b = [];

  for (let i = 0; i < value.length; i++) {
    let c = value.charCodeAt(i);

    if (c <= 127) {
      b.push(c);
    } else {
      if (c <= 2047) {
        b.push(192 | c >> 6, 128 | c & 63);
      } else {
        if ((c & 64512) === 55296) {
          // The start of a surrogate pair.
          const valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;

          if (!valid) {
            // The second surrogate wasn't there.
            b.push(239, 191, 189);
          } else {
            const hi = c;
            const lo = value.charCodeAt(++i);
            c = 65536 | (hi & 1023) << 10 | lo & 1023;
            b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
          }
        } else {
          if ((c & 64512) === 56320) {
            // Invalid low surrogate.
            b.push(239, 191, 189);
          } else {
            b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
          }
        }
      }
    }
  }

  return new Uint8Array(b);
}

function percentEncodedBytes_(value) {
  let decoded;

  try {
    decoded = decodeURIComponent(value);
  } catch (e) {
    throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
  }

  return utf8Bytes_(decoded);
}

function base64Bytes_(format, value) {
  switch (format) {
    case StringFormat.BASE64:
      {
        const hasMinus = value.indexOf('-') !== -1;
        const hasUnder = value.indexOf('_') !== -1;

        if (hasMinus || hasUnder) {
          const invalidChar = hasMinus ? '-' : '_';
          throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
        }

        break;
      }

    case StringFormat.BASE64URL:
      {
        const hasPlus = value.indexOf('+') !== -1;
        const hasSlash = value.indexOf('/') !== -1;

        if (hasPlus || hasSlash) {
          const invalidChar = hasPlus ? '+' : '/';
          throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
        }

        value = value.replace(/-/g, '+').replace(/_/g, '/');
        break;
      }
    // do nothing
  }

  let bytes;

  try {
    bytes = decodeBase64(value);
  } catch (e) {
    throw invalidFormat(format, 'Invalid character found');
  }

  const array = new Uint8Array(bytes.length);

  for (let i = 0; i < bytes.length; i++) {
    array[i] = bytes.charCodeAt(i);
  }

  return array;
}

class DataURLParts {
  constructor(dataURL) {
    this.base64 = false;
    this.contentType = null;
    const matches = dataURL.match(/^data:([^,]+)?,/);

    if (matches === null) {
      throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
    }

    const middle = matches[1] || null;

    if (middle != null) {
      this.base64 = endsWith(middle, ';base64');
      this.contentType = this.base64 ? middle.substring(0, middle.length - ';base64'.length) : middle;
    }

    this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
  }

}

function dataURLBytes_(dataUrl) {
  const parts = new DataURLParts(dataUrl);

  if (parts.base64) {
    return base64Bytes_(StringFormat.BASE64, parts.rest);
  } else {
    return percentEncodedBytes_(parts.rest);
  }
}

function dataURLContentType_(dataUrl) {
  const parts = new DataURLParts(dataUrl);
  return parts.contentType;
}

function endsWith(s, end) {
  const longEnough = s.length >= end.length;

  if (!longEnough) {
    return false;
  }

  return s.substring(s.length - end.length) === end;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param opt_elideCopy - If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 *
 * @internal
 */


class FbsBlob {
  constructor(data, elideCopy) {
    let size = 0;
    let blobType = '';

    if (isNativeBlob(data)) {
      this.data_ = data;
      size = data.size;
      blobType = data.type;
    } else if (data instanceof ArrayBuffer) {
      if (elideCopy) {
        this.data_ = new Uint8Array(data);
      } else {
        this.data_ = new Uint8Array(data.byteLength);
        this.data_.set(new Uint8Array(data));
      }

      size = this.data_.length;
    } else if (data instanceof Uint8Array) {
      if (elideCopy) {
        this.data_ = data;
      } else {
        this.data_ = new Uint8Array(data.length);
        this.data_.set(data);
      }

      size = data.length;
    }

    this.size_ = size;
    this.type_ = blobType;
  }

  size() {
    return this.size_;
  }

  type() {
    return this.type_;
  }

  slice(startByte, endByte) {
    if (isNativeBlob(this.data_)) {
      const realBlob = this.data_;
      const sliced = sliceBlob(realBlob, startByte, endByte);

      if (sliced === null) {
        return null;
      }

      return new FbsBlob(sliced);
    } else {
      const slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
      return new FbsBlob(slice, true);
    }
  }

  static getBlob(...args) {
    if (isNativeBlobDefined()) {
      const blobby = args.map(val => {
        if (val instanceof FbsBlob) {
          return val.data_;
        } else {
          return val;
        }
      });
      return new FbsBlob(getBlob$1.apply(null, blobby));
    } else {
      const uint8Arrays = args.map(val => {
        if (isString(val)) {
          return dataFromString(StringFormat.RAW, val).data;
        } else {
          // Blobs don't exist, so this has to be a Uint8Array.
          return val.data_;
        }
      });
      let finalLength = 0;
      uint8Arrays.forEach(array => {
        finalLength += array.byteLength;
      });
      const merged = new Uint8Array(finalLength);
      let index = 0;
      uint8Arrays.forEach(array => {
        for (let i = 0; i < array.length; i++) {
          merged[index++] = array[i];
        }
      });
      return new FbsBlob(merged, true);
    }
  }

  uploadData() {
    return this.data_;
  }

}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */


function jsonObjectOrNull(s) {
  let obj;

  try {
    obj = JSON.parse(s);
  } catch (e) {
    return null;
  }

  if (isNonArrayObject(obj)) {
    return obj;
  } else {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Contains helper methods for manipulating paths.
 */

/**
 * @return Null if the path is already at the root.
 */


function parent(path) {
  if (path.length === 0) {
    return null;
  }

  const index = path.lastIndexOf('/');

  if (index === -1) {
    return '';
  }

  const newPath = path.slice(0, index);
  return newPath;
}

function child(path, childPath) {
  const canonicalChildPath = childPath.split('/').filter(component => component.length > 0).join('/');

  if (path.length === 0) {
    return canonicalChildPath;
  } else {
    return path + '/' + canonicalChildPath;
  }
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */


function lastComponent(path) {
  const index = path.lastIndexOf('/', path.length - 2);

  if (index === -1) {
    return path;
  } else {
    return path.slice(index + 1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function noXform_(metadata, value) {
  return value;
}

class Mapping {
  constructor(server, local, writable, xform) {
    this.server = server;
    this.local = local || server;
    this.writable = !!writable;
    this.xform = xform || noXform_;
  }

}

let mappings_ = null;

function xformPath(fullPath) {
  if (!isString(fullPath) || fullPath.length < 2) {
    return fullPath;
  } else {
    return lastComponent(fullPath);
  }
}

function getMappings() {
  if (mappings_) {
    return mappings_;
  }

  const mappings = [];
  mappings.push(new Mapping('bucket'));
  mappings.push(new Mapping('generation'));
  mappings.push(new Mapping('metageneration'));
  mappings.push(new Mapping('name', 'fullPath', true));

  function mappingsXformPath(_metadata, fullPath) {
    return xformPath(fullPath);
  }

  const nameMapping = new Mapping('name');
  nameMapping.xform = mappingsXformPath;
  mappings.push(nameMapping);
  /**
   * Coerces the second param to a number, if it is defined.
   */

  function xformSize(_metadata, size) {
    if (size !== undefined) {
      return Number(size);
    } else {
      return size;
    }
  }

  const sizeMapping = new Mapping('size');
  sizeMapping.xform = xformSize;
  mappings.push(sizeMapping);
  mappings.push(new Mapping('timeCreated'));
  mappings.push(new Mapping('updated'));
  mappings.push(new Mapping('md5Hash', null, true));
  mappings.push(new Mapping('cacheControl', null, true));
  mappings.push(new Mapping('contentDisposition', null, true));
  mappings.push(new Mapping('contentEncoding', null, true));
  mappings.push(new Mapping('contentLanguage', null, true));
  mappings.push(new Mapping('contentType', null, true));
  mappings.push(new Mapping('metadata', 'customMetadata', true));
  mappings_ = mappings;
  return mappings_;
}

function addRef(metadata, service) {
  function generateRef() {
    const bucket = metadata['bucket'];
    const path = metadata['fullPath'];
    const loc = new Location(bucket, path);
    return service._makeStorageReference(loc);
  }

  Object.defineProperty(metadata, 'ref', {
    get: generateRef
  });
}

function fromResource(service, resource, mappings) {
  const metadata = {};
  metadata['type'] = 'file';
  const len = mappings.length;

  for (let i = 0; i < len; i++) {
    const mapping = mappings[i];
    metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
  }

  addRef(metadata, service);
  return metadata;
}

function fromResourceString(service, resourceString, mappings) {
  const obj = jsonObjectOrNull(resourceString);

  if (obj === null) {
    return null;
  }

  const resource = obj;
  return fromResource(service, resource, mappings);
}

function downloadUrlFromResourceString(metadata, resourceString, host, protocol) {
  const obj = jsonObjectOrNull(resourceString);

  if (obj === null) {
    return null;
  }

  if (!isString(obj['downloadTokens'])) {
    // This can happen if objects are uploaded through GCS and retrieved
    // through list, so we don't want to throw an Error.
    return null;
  }

  const tokens = obj['downloadTokens'];

  if (tokens.length === 0) {
    return null;
  }

  const encode = encodeURIComponent;
  const tokensList = tokens.split(',');
  const urls = tokensList.map(token => {
    const bucket = metadata['bucket'];
    const path = metadata['fullPath'];
    const urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
    const base = makeUrl(urlPart, host, protocol);
    const queryString = makeQueryString({
      alt: 'media',
      token
    });
    return base + queryString;
  });
  return urls[0];
}

function toResourceString(metadata, mappings) {
  const resource = {};
  const len = mappings.length;

  for (let i = 0; i < len; i++) {
    const mapping = mappings[i];

    if (mapping.writable) {
      resource[mapping.server] = metadata[mapping.local];
    }
  }

  return JSON.stringify(resource);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const PREFIXES_KEY = 'prefixes';
const ITEMS_KEY = 'items';

function fromBackendResponse(service, bucket, resource) {
  const listResult = {
    prefixes: [],
    items: [],
    nextPageToken: resource['nextPageToken']
  };

  if (resource[PREFIXES_KEY]) {
    for (const path of resource[PREFIXES_KEY]) {
      const pathWithoutTrailingSlash = path.replace(/\/$/, '');

      const reference = service._makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));

      listResult.prefixes.push(reference);
    }
  }

  if (resource[ITEMS_KEY]) {
    for (const item of resource[ITEMS_KEY]) {
      const reference = service._makeStorageReference(new Location(bucket, item['name']));

      listResult.items.push(reference);
    }
  }

  return listResult;
}

function fromResponseString(service, bucket, resourceString) {
  const obj = jsonObjectOrNull(resourceString);

  if (obj === null) {
    return null;
  }

  const resource = obj;
  return fromBackendResponse(service, bucket, resource);
}
/**
 * Contains a fully specified request.
 *
 * @param I - the type of the backend's network response.
 * @param O - the output response type used by the rest of the SDK.
 */


class RequestInfo {
  constructor(url, method,
  /**
   * Returns the value with which to resolve the request's promise. Only called
   * if the request is successful. Throw from this function to reject the
   * returned Request's promise with the thrown error.
   * Note: The XhrIo passed to this function may be reused after this callback
   * returns. Do not keep a reference to it in any way.
   */
  handler, timeout) {
    this.url = url;
    this.method = method;
    this.handler = handler;
    this.timeout = timeout;
    this.urlParams = {};
    this.headers = {};
    this.body = null;
    this.errorHandler = null;
    /**
     * Called with the current number of bytes uploaded and total size (-1 if not
     * computable) of the request body (i.e. used to report upload progress).
     */

    this.progressCallback = null;
    this.successCodes = [200];
    this.additionalRetryCodes = [];
  }

}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Throws the UNKNOWN StorageError if cndn is false.
 */


function handlerCheck(cndn) {
  if (!cndn) {
    throw unknown();
  }
}

function metadataHandler(service, mappings) {
  function handler(xhr, text) {
    const metadata = fromResourceString(service, text, mappings);
    handlerCheck(metadata !== null);
    return metadata;
  }

  return handler;
}

function listHandler(service, bucket) {
  function handler(xhr, text) {
    const listResult = fromResponseString(service, bucket, text);
    handlerCheck(listResult !== null);
    return listResult;
  }

  return handler;
}

function downloadUrlHandler(service, mappings) {
  function handler(xhr, text) {
    const metadata = fromResourceString(service, text, mappings);
    handlerCheck(metadata !== null);
    return downloadUrlFromResourceString(metadata, text, service.host, service._protocol);
  }

  return handler;
}

function sharedErrorHandler(location) {
  function errorHandler(xhr, err) {
    let newErr;

    if (xhr.getStatus() === 401) {
      if ( // This exact message string is the only consistent part of the
      // server's error response that identifies it as an App Check error.
      xhr.getErrorText().includes('Firebase App Check token is invalid')) {
        newErr = unauthorizedApp();
      } else {
        newErr = unauthenticated();
      }
    } else {
      if (xhr.getStatus() === 402) {
        newErr = quotaExceeded(location.bucket);
      } else {
        if (xhr.getStatus() === 403) {
          newErr = unauthorized(location.path);
        } else {
          newErr = err;
        }
      }
    }

    newErr.serverResponse = err.serverResponse;
    return newErr;
  }

  return errorHandler;
}

function objectErrorHandler(location) {
  const shared = sharedErrorHandler(location);

  function errorHandler(xhr, err) {
    let newErr = shared(xhr, err);

    if (xhr.getStatus() === 404) {
      newErr = objectNotFound(location.path);
    }

    newErr.serverResponse = err.serverResponse;
    return newErr;
  }

  return errorHandler;
}

function getMetadata$2(service, location, mappings) {
  const urlPart = location.fullServerUrl();
  const url = makeUrl(urlPart, service.host, service._protocol);
  const method = 'GET';
  const timeout = service.maxOperationRetryTime;
  const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}

function list$2(service, location, delimiter, pageToken, maxResults) {
  const urlParams = {};

  if (location.isRoot) {
    urlParams['prefix'] = '';
  } else {
    urlParams['prefix'] = location.path + '/';
  }

  if (delimiter && delimiter.length > 0) {
    urlParams['delimiter'] = delimiter;
  }

  if (pageToken) {
    urlParams['pageToken'] = pageToken;
  }

  if (maxResults) {
    urlParams['maxResults'] = maxResults;
  }

  const urlPart = location.bucketOnlyServerUrl();
  const url = makeUrl(urlPart, service.host, service._protocol);
  const method = 'GET';
  const timeout = service.maxOperationRetryTime;
  const requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
  requestInfo.urlParams = urlParams;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}

function getBytes$1(service, location, maxDownloadSizeBytes) {
  const urlPart = location.fullServerUrl();
  const url = makeUrl(urlPart, service.host, service._protocol) + '?alt=media';
  const method = 'GET';
  const timeout = service.maxOperationRetryTime;
  const requestInfo = new RequestInfo(url, method, (_, data) => data, timeout);
  requestInfo.errorHandler = objectErrorHandler(location);

  if (maxDownloadSizeBytes !== undefined) {
    requestInfo.headers['Range'] = `bytes=0-${maxDownloadSizeBytes}`;
    requestInfo.successCodes = [200
    /* OK */
    , 206
    /* Partial Content */
    ];
  }

  return requestInfo;
}

function getDownloadUrl(service, location, mappings) {
  const urlPart = location.fullServerUrl();
  const url = makeUrl(urlPart, service.host, service._protocol);
  const method = 'GET';
  const timeout = service.maxOperationRetryTime;
  const requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}

function updateMetadata$2(service, location, metadata, mappings) {
  const urlPart = location.fullServerUrl();
  const url = makeUrl(urlPart, service.host, service._protocol);
  const method = 'PATCH';
  const body = toResourceString(metadata, mappings);
  const headers = {
    'Content-Type': 'application/json; charset=utf-8'
  };
  const timeout = service.maxOperationRetryTime;
  const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
  requestInfo.headers = headers;
  requestInfo.body = body;
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}

function deleteObject$2(service, location) {
  const urlPart = location.fullServerUrl();
  const url = makeUrl(urlPart, service.host, service._protocol);
  const method = 'DELETE';
  const timeout = service.maxOperationRetryTime;

  function handler(_xhr, _text) {}

  const requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.successCodes = [200, 204];
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}

function determineContentType_(metadata, blob) {
  return metadata && metadata['contentType'] || blob && blob.type() || 'application/octet-stream';
}

function metadataForUpload_(location, blob, metadata) {
  const metadataClone = Object.assign({}, metadata);
  metadataClone['fullPath'] = location.path;
  metadataClone['size'] = blob.size();

  if (!metadataClone['contentType']) {
    metadataClone['contentType'] = determineContentType_(null, blob);
  }

  return metadataClone;
}
/**
 * Prepare RequestInfo for uploads as Content-Type: multipart.
 */


function multipartUpload(service, location, mappings, blob, metadata) {
  const urlPart = location.bucketOnlyServerUrl();
  const headers = {
    'X-Goog-Upload-Protocol': 'multipart'
  };

  function genBoundary() {
    let str = '';

    for (let i = 0; i < 2; i++) {
      str = str + Math.random().toString().slice(2);
    }

    return str;
  }

  const boundary = genBoundary();
  headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
  const metadata_ = metadataForUpload_(location, blob, metadata);
  const metadataString = toResourceString(metadata_, mappings);
  const preBlobPart = '--' + boundary + '\r\n' + 'Content-Type: application/json; charset=utf-8\r\n\r\n' + metadataString + '\r\n--' + boundary + '\r\n' + 'Content-Type: ' + metadata_['contentType'] + '\r\n\r\n';
  const postBlobPart = '\r\n--' + boundary + '--';
  const body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);

  if (body === null) {
    throw cannotSliceBlob();
  }

  const urlParams = {
    name: metadata_['fullPath']
  };
  const url = makeUrl(urlPart, service.host, service._protocol);
  const method = 'POST';
  const timeout = service.maxUploadRetryTime;
  const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
  requestInfo.urlParams = urlParams;
  requestInfo.headers = headers;
  requestInfo.body = body.uploadData();
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 */


class ResumableUploadStatus {
  constructor(current, total, finalized, metadata) {
    this.current = current;
    this.total = total;
    this.finalized = !!finalized;
    this.metadata = metadata || null;
  }

}

function checkResumeHeader_(xhr, allowed) {
  let status = null;

  try {
    status = xhr.getResponseHeader('X-Goog-Upload-Status');
  } catch (e) {
    handlerCheck(false);
  }

  const allowedStatus = allowed || ['active'];
  handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
  return status;
}

function createResumableUpload(service, location, mappings, blob, metadata) {
  const urlPart = location.bucketOnlyServerUrl();
  const metadataForUpload = metadataForUpload_(location, blob, metadata);
  const urlParams = {
    name: metadataForUpload['fullPath']
  };
  const url = makeUrl(urlPart, service.host, service._protocol);
  const method = 'POST';
  const headers = {
    'X-Goog-Upload-Protocol': 'resumable',
    'X-Goog-Upload-Command': 'start',
    'X-Goog-Upload-Header-Content-Length': `${blob.size()}`,
    'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
    'Content-Type': 'application/json; charset=utf-8'
  };
  const body = toResourceString(metadataForUpload, mappings);
  const timeout = service.maxUploadRetryTime;

  function handler(xhr) {
    checkResumeHeader_(xhr);
    let url;

    try {
      url = xhr.getResponseHeader('X-Goog-Upload-URL');
    } catch (e) {
      handlerCheck(false);
    }

    handlerCheck(isString(url));
    return url;
  }

  const requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.urlParams = urlParams;
  requestInfo.headers = headers;
  requestInfo.body = body;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */


function getResumableUploadStatus(service, location, url, blob) {
  const headers = {
    'X-Goog-Upload-Command': 'query'
  };

  function handler(xhr) {
    const status = checkResumeHeader_(xhr, ['active', 'final']);
    let sizeString = null;

    try {
      sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
    } catch (e) {
      handlerCheck(false);
    }

    if (!sizeString) {
      // null or empty string
      handlerCheck(false);
    }

    const size = Number(sizeString);
    handlerCheck(!isNaN(size));
    return new ResumableUploadStatus(size, blob.size(), status === 'final');
  }

  const method = 'POST';
  const timeout = service.maxUploadRetryTime;
  const requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.headers = headers;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */


const RESUMABLE_UPLOAD_CHUNK_SIZE = 256 * 1024;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */

function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
  // TODO(andysoto): standardize on internal asserts
  // assert(!(opt_status && opt_status.finalized));
  const status_ = new ResumableUploadStatus(0, 0);

  if (status) {
    status_.current = status.current;
    status_.total = status.total;
  } else {
    status_.current = 0;
    status_.total = blob.size();
  }

  if (blob.size() !== status_.total) {
    throw serverFileWrongSize();
  }

  const bytesLeft = status_.total - status_.current;
  let bytesToUpload = bytesLeft;

  if (chunkSize > 0) {
    bytesToUpload = Math.min(bytesToUpload, chunkSize);
  }

  const startByte = status_.current;
  const endByte = startByte + bytesToUpload;
  const uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
  const headers = {
    'X-Goog-Upload-Command': uploadCommand,
    'X-Goog-Upload-Offset': `${status_.current}`
  };
  const body = blob.slice(startByte, endByte);

  if (body === null) {
    throw cannotSliceBlob();
  }

  function handler(xhr, text) {
    // TODO(andysoto): Verify the MD5 of each uploaded range:
    // the 'x-range-md5' header comes back with status code 308 responses.
    // We'll only be able to bail out though, because you can't re-upload a
    // range that you previously uploaded.
    const uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
    const newCurrent = status_.current + bytesToUpload;
    const size = blob.size();
    let metadata;

    if (uploadStatus === 'final') {
      metadata = metadataHandler(service, mappings)(xhr, text);
    } else {
      metadata = null;
    }

    return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
  }

  const method = 'POST';
  const timeout = service.maxUploadRetryTime;
  const requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.headers = headers;
  requestInfo.body = body.uploadData();
  requestInfo.progressCallback = progressCallback || null;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An event that is triggered on a task.
 * @internal
 */


const TaskEvent = {
  /**
   * For this event,
   * <ul>
   *   <li>The `next` function is triggered on progress updates and when the
   *       task is paused/resumed with an `UploadTaskSnapshot` as the first
   *       argument.</li>
   *   <li>The `error` function is triggered if the upload is canceled or fails
   *       for another reason.</li>
   *   <li>The `complete` function is triggered if the upload completes
   *       successfully.</li>
   * </ul>
   */
  STATE_CHANGED: 'state_changed'
}; // type keys = keyof TaskState

/**
 * Represents the current state of a running upload.
 * @internal
 */

const TaskState = {
  /** The task is currently transferring data. */
  RUNNING: 'running',

  /** The task was paused by the user. */
  PAUSED: 'paused',

  /** The task completed successfully. */
  SUCCESS: 'success',

  /** The task was canceled. */
  CANCELED: 'canceled',

  /** The task failed with an error. */
  ERROR: 'error'
};

function taskStateFromInternalTaskState(state) {
  switch (state) {
    case "running"
    /* RUNNING */
    :
    case "pausing"
    /* PAUSING */
    :
    case "canceling"
    /* CANCELING */
    :
      return TaskState.RUNNING;

    case "paused"
    /* PAUSED */
    :
      return TaskState.PAUSED;

    case "success"
    /* SUCCESS */
    :
      return TaskState.SUCCESS;

    case "canceled"
    /* CANCELED */
    :
      return TaskState.CANCELED;

    case "error"
    /* ERROR */
    :
      return TaskState.ERROR;

    default:
      // TODO(andysoto): assert(false);
      return TaskState.ERROR;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class Observer {
  constructor(nextOrObserver, error, complete) {
    const asFunctions = isFunction(nextOrObserver) || error != null || complete != null;

    if (asFunctions) {
      this.next = nextOrObserver;
      this.error = error !== null && error !== void 0 ? error : undefined;
      this.complete = complete !== null && complete !== void 0 ? complete : undefined;
    } else {
      const observer = nextOrObserver;
      this.next = observer.next;
      this.error = observer.error;
      this.complete = observer.complete;
    }
  }

}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */
// eslint-disable-next-line @typescript-eslint/ban-types


function async(f) {
  return (...argsToForward) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Promise.resolve().then(() => f(...argsToForward));
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** An override for the text-based Connection. Used in tests. */


let textFactoryOverride = null;
/**
 * Network layer for browsers. We use this instead of goog.net.XhrIo because
 * goog.net.XhrIo is hyuuuuge and doesn't work in React Native on Android.
 */

class XhrConnection {
  constructor() {
    this.sent_ = false;
    this.xhr_ = new XMLHttpRequest();
    this.initXhr();
    this.errorCode_ = ErrorCode.NO_ERROR;
    this.sendPromise_ = new Promise(resolve => {
      this.xhr_.addEventListener('abort', () => {
        this.errorCode_ = ErrorCode.ABORT;
        resolve();
      });
      this.xhr_.addEventListener('error', () => {
        this.errorCode_ = ErrorCode.NETWORK_ERROR;
        resolve();
      });
      this.xhr_.addEventListener('load', () => {
        resolve();
      });
    });
  }

  send(url, method, body, headers) {
    if (this.sent_) {
      throw internalError('cannot .send() more than once');
    }

    this.sent_ = true;
    this.xhr_.open(method, url, true);

    if (headers !== undefined) {
      for (const key in headers) {
        if (headers.hasOwnProperty(key)) {
          this.xhr_.setRequestHeader(key, headers[key].toString());
        }
      }
    }

    if (body !== undefined) {
      this.xhr_.send(body);
    } else {
      this.xhr_.send();
    }

    return this.sendPromise_;
  }

  getErrorCode() {
    if (!this.sent_) {
      throw internalError('cannot .getErrorCode() before sending');
    }

    return this.errorCode_;
  }

  getStatus() {
    if (!this.sent_) {
      throw internalError('cannot .getStatus() before sending');
    }

    try {
      return this.xhr_.status;
    } catch (e) {
      return -1;
    }
  }

  getResponse() {
    if (!this.sent_) {
      throw internalError('cannot .getResponse() before sending');
    }

    return this.xhr_.response;
  }

  getErrorText() {
    if (!this.sent_) {
      throw internalError('cannot .getErrorText() before sending');
    }

    return this.xhr_.statusText;
  }
  /** Aborts the request. */


  abort() {
    this.xhr_.abort();
  }

  getResponseHeader(header) {
    return this.xhr_.getResponseHeader(header);
  }

  addUploadProgressListener(listener) {
    if (this.xhr_.upload != null) {
      this.xhr_.upload.addEventListener('progress', listener);
    }
  }

  removeUploadProgressListener(listener) {
    if (this.xhr_.upload != null) {
      this.xhr_.upload.removeEventListener('progress', listener);
    }
  }

}

class XhrTextConnection extends XhrConnection {
  initXhr() {
    this.xhr_.responseType = 'text';
  }

}

function newTextConnection() {
  return textFactoryOverride ? textFactoryOverride() : new XhrTextConnection();
}

class XhrBytesConnection extends XhrConnection {
  initXhr() {
    this.xhr_.responseType = 'arraybuffer';
  }

}

function newBytesConnection() {
  return new XhrBytesConnection();
}

class XhrBlobConnection extends XhrConnection {
  initXhr() {
    this.xhr_.responseType = 'blob';
  }

}

function newBlobConnection() {
  return new XhrBlobConnection();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 * @internal
 */


class UploadTask {
  /**
   * @param ref - The firebaseStorage.Reference object this task came
   *     from, untyped to avoid cyclic dependencies.
   * @param blob - The blob to upload.
   */
  constructor(ref, blob, metadata = null) {
    /**
     * Number of bytes transferred so far.
     */
    this._transferred = 0;
    this._needToFetchStatus = false;
    this._needToFetchMetadata = false;
    this._observers = [];
    this._error = undefined;
    this._uploadUrl = undefined;
    this._request = undefined;
    this._chunkMultiplier = 1;
    this._resolve = undefined;
    this._reject = undefined;
    this._ref = ref;
    this._blob = blob;
    this._metadata = metadata;
    this._mappings = getMappings();
    this._resumable = this._shouldDoResumable(this._blob);
    this._state = "running"
    /* RUNNING */
    ;

    this._errorHandler = error => {
      this._request = undefined;
      this._chunkMultiplier = 1;

      if (error._codeEquals("canceled"
      /* CANCELED */
      )) {
        this._needToFetchStatus = true;
        this.completeTransitions_();
      } else {
        this._error = error;

        this._transition("error"
        /* ERROR */
        );
      }
    };

    this._metadataErrorHandler = error => {
      this._request = undefined;

      if (error._codeEquals("canceled"
      /* CANCELED */
      )) {
        this.completeTransitions_();
      } else {
        this._error = error;

        this._transition("error"
        /* ERROR */
        );
      }
    };

    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;

      this._start();
    }); // Prevent uncaught rejections on the internal promise from bubbling out
    // to the top level with a dummy handler.

    this._promise.then(null, () => {});
  }

  _makeProgressCallback() {
    const sizeBefore = this._transferred;
    return loaded => this._updateProgress(sizeBefore + loaded);
  }

  _shouldDoResumable(blob) {
    return blob.size() > 256 * 1024;
  }

  _start() {
    if (this._state !== "running"
    /* RUNNING */
    ) {
      // This can happen if someone pauses us in a resume callback, for example.
      return;
    }

    if (this._request !== undefined) {
      return;
    }

    if (this._resumable) {
      if (this._uploadUrl === undefined) {
        this._createResumable();
      } else {
        if (this._needToFetchStatus) {
          this._fetchStatus();
        } else {
          if (this._needToFetchMetadata) {
            // Happens if we miss the metadata on upload completion.
            this._fetchMetadata();
          } else {
            this._continueUpload();
          }
        }
      }
    } else {
      this._oneShotUpload();
    }
  }

  _resolveToken(callback) {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Promise.all([this._ref.storage._getAuthToken(), this._ref.storage._getAppCheckToken()]).then(([authToken, appCheckToken]) => {
      switch (this._state) {
        case "running"
        /* RUNNING */
        :
          callback(authToken, appCheckToken);
          break;

        case "canceling"
        /* CANCELING */
        :
          this._transition("canceled"
          /* CANCELED */
          );

          break;

        case "pausing"
        /* PAUSING */
        :
          this._transition("paused"
          /* PAUSED */
          );

          break;
      }
    });
  } // TODO(andysoto): assert false


  _createResumable() {
    this._resolveToken((authToken, appCheckToken) => {
      const requestInfo = createResumableUpload(this._ref.storage, this._ref._location, this._mappings, this._blob, this._metadata);

      const createRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);

      this._request = createRequest;
      createRequest.getPromise().then(url => {
        this._request = undefined;
        this._uploadUrl = url;
        this._needToFetchStatus = false;
        this.completeTransitions_();
      }, this._errorHandler);
    });
  }

  _fetchStatus() {
    // TODO(andysoto): assert(this.uploadUrl_ !== null);
    const url = this._uploadUrl;

    this._resolveToken((authToken, appCheckToken) => {
      const requestInfo = getResumableUploadStatus(this._ref.storage, this._ref._location, url, this._blob);

      const statusRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);

      this._request = statusRequest;
      statusRequest.getPromise().then(status => {
        status = status;
        this._request = undefined;

        this._updateProgress(status.current);

        this._needToFetchStatus = false;

        if (status.finalized) {
          this._needToFetchMetadata = true;
        }

        this.completeTransitions_();
      }, this._errorHandler);
    });
  }

  _continueUpload() {
    const chunkSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
    const status = new ResumableUploadStatus(this._transferred, this._blob.size()); // TODO(andysoto): assert(this.uploadUrl_ !== null);

    const url = this._uploadUrl;

    this._resolveToken((authToken, appCheckToken) => {
      let requestInfo;

      try {
        requestInfo = continueResumableUpload(this._ref._location, this._ref.storage, url, this._blob, chunkSize, this._mappings, status, this._makeProgressCallback());
      } catch (e) {
        this._error = e;

        this._transition("error"
        /* ERROR */
        );

        return;
      }

      const uploadRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);

      this._request = uploadRequest;
      uploadRequest.getPromise().then(newStatus => {
        this._increaseMultiplier();

        this._request = undefined;

        this._updateProgress(newStatus.current);

        if (newStatus.finalized) {
          this._metadata = newStatus.metadata;

          this._transition("success"
          /* SUCCESS */
          );
        } else {
          this.completeTransitions_();
        }
      }, this._errorHandler);
    });
  }

  _increaseMultiplier() {
    const currentSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier; // Max chunk size is 32M.

    if (currentSize < 32 * 1024 * 1024) {
      this._chunkMultiplier *= 2;
    }
  }

  _fetchMetadata() {
    this._resolveToken((authToken, appCheckToken) => {
      const requestInfo = getMetadata$2(this._ref.storage, this._ref._location, this._mappings);

      const metadataRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);

      this._request = metadataRequest;
      metadataRequest.getPromise().then(metadata => {
        this._request = undefined;
        this._metadata = metadata;

        this._transition("success"
        /* SUCCESS */
        );
      }, this._metadataErrorHandler);
    });
  }

  _oneShotUpload() {
    this._resolveToken((authToken, appCheckToken) => {
      const requestInfo = multipartUpload(this._ref.storage, this._ref._location, this._mappings, this._blob, this._metadata);

      const multipartRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);

      this._request = multipartRequest;
      multipartRequest.getPromise().then(metadata => {
        this._request = undefined;
        this._metadata = metadata;

        this._updateProgress(this._blob.size());

        this._transition("success"
        /* SUCCESS */
        );
      }, this._errorHandler);
    });
  }

  _updateProgress(transferred) {
    const old = this._transferred;
    this._transferred = transferred; // A progress update can make the "transferred" value smaller (e.g. a
    // partial upload not completed by server, after which the "transferred"
    // value may reset to the value at the beginning of the request).

    if (this._transferred !== old) {
      this._notifyObservers();
    }
  }

  _transition(state) {
    if (this._state === state) {
      return;
    }

    switch (state) {
      case "canceling"
      /* CANCELING */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.RUNNING ||
        //        this.state_ === InternalTaskState.PAUSING);
        this._state = state;

        if (this._request !== undefined) {
          this._request.cancel();
        }

        break;

      case "pausing"
      /* PAUSING */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.RUNNING);
        this._state = state;

        if (this._request !== undefined) {
          this._request.cancel();
        }

        break;

      case "running"
      /* RUNNING */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.PAUSED ||
        //        this.state_ === InternalTaskState.PAUSING);
        const wasPaused = this._state === "paused"
        /* PAUSED */
        ;
        this._state = state;

        if (wasPaused) {
          this._notifyObservers();

          this._start();
        }

        break;

      case "paused"
      /* PAUSED */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.PAUSING);
        this._state = state;

        this._notifyObservers();

        break;

      case "canceled"
      /* CANCELED */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.PAUSED ||
        //        this.state_ === InternalTaskState.CANCELING);
        this._error = canceled();
        this._state = state;

        this._notifyObservers();

        break;

      case "error"
      /* ERROR */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.RUNNING ||
        //        this.state_ === InternalTaskState.PAUSING ||
        //        this.state_ === InternalTaskState.CANCELING);
        this._state = state;

        this._notifyObservers();

        break;

      case "success"
      /* SUCCESS */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.RUNNING ||
        //        this.state_ === InternalTaskState.PAUSING ||
        //        this.state_ === InternalTaskState.CANCELING);
        this._state = state;

        this._notifyObservers();

        break;
    }
  }

  completeTransitions_() {
    switch (this._state) {
      case "pausing"
      /* PAUSING */
      :
        this._transition("paused"
        /* PAUSED */
        );

        break;

      case "canceling"
      /* CANCELING */
      :
        this._transition("canceled"
        /* CANCELED */
        );

        break;

      case "running"
      /* RUNNING */
      :
        this._start();

        break;
    }
  }
  /**
   * A snapshot of the current task state.
   */


  get snapshot() {
    const externalState = taskStateFromInternalTaskState(this._state);
    return {
      bytesTransferred: this._transferred,
      totalBytes: this._blob.size(),
      state: externalState,
      metadata: this._metadata,
      task: this,
      ref: this._ref
    };
  }
  /**
   * Adds a callback for an event.
   * @param type - The type of event to listen for.
   * @param nextOrObserver -
   *     The `next` function, which gets called for each item in
   *     the event stream, or an observer object with some or all of these three
   *     properties (`next`, `error`, `complete`).
   * @param error - A function that gets called with a `StorageError`
   *     if the event stream ends due to an error.
   * @param completed - A function that gets called if the
   *     event stream ends normally.
   * @returns
   *     If only the event argument is passed, returns a function you can use to
   *     add callbacks (see the examples above). If more than just the event
   *     argument is passed, returns a function you can call to unregister the
   *     callbacks.
   */


  on(type, nextOrObserver, error, completed) {
    const observer = new Observer(nextOrObserver || undefined, error || undefined, completed || undefined);

    this._addObserver(observer);

    return () => {
      this._removeObserver(observer);
    };
  }
  /**
   * This object behaves like a Promise, and resolves with its snapshot data
   * when the upload completes.
   * @param onFulfilled - The fulfillment callback. Promise chaining works as normal.
   * @param onRejected - The rejection callback.
   */


  then(onFulfilled, onRejected) {
    // These casts are needed so that TypeScript can infer the types of the
    // resulting Promise.
    return this._promise.then(onFulfilled, onRejected);
  }
  /**
   * Equivalent to calling `then(null, onRejected)`.
   */


  catch(onRejected) {
    return this.then(null, onRejected);
  }
  /**
   * Adds the given observer.
   */


  _addObserver(observer) {
    this._observers.push(observer);

    this._notifyObserver(observer);
  }
  /**
   * Removes the given observer.
   */


  _removeObserver(observer) {
    const i = this._observers.indexOf(observer);

    if (i !== -1) {
      this._observers.splice(i, 1);
    }
  }

  _notifyObservers() {
    this._finishPromise();

    const observers = this._observers.slice();

    observers.forEach(observer => {
      this._notifyObserver(observer);
    });
  }

  _finishPromise() {
    if (this._resolve !== undefined) {
      let triggered = true;

      switch (taskStateFromInternalTaskState(this._state)) {
        case TaskState.SUCCESS:
          async(this._resolve.bind(null, this.snapshot))();
          break;

        case TaskState.CANCELED:
        case TaskState.ERROR:
          const toCall = this._reject;
          async(toCall.bind(null, this._error))();
          break;

        default:
          triggered = false;
          break;
      }

      if (triggered) {
        this._resolve = undefined;
        this._reject = undefined;
      }
    }
  }

  _notifyObserver(observer) {
    const externalState = taskStateFromInternalTaskState(this._state);

    switch (externalState) {
      case TaskState.RUNNING:
      case TaskState.PAUSED:
        if (observer.next) {
          async(observer.next.bind(observer, this.snapshot))();
        }

        break;

      case TaskState.SUCCESS:
        if (observer.complete) {
          async(observer.complete.bind(observer))();
        }

        break;

      case TaskState.CANCELED:
      case TaskState.ERROR:
        if (observer.error) {
          async(observer.error.bind(observer, this._error))();
        }

        break;

      default:
        // TODO(andysoto): assert(false);
        if (observer.error) {
          async(observer.error.bind(observer, this._error))();
        }

    }
  }
  /**
   * Resumes a paused task. Has no effect on a currently running or failed task.
   * @returns True if the operation took effect, false if ignored.
   */


  resume() {
    const valid = this._state === "paused"
    /* PAUSED */
    || this._state === "pausing"
    /* PAUSING */
    ;

    if (valid) {
      this._transition("running"
      /* RUNNING */
      );
    }

    return valid;
  }
  /**
   * Pauses a currently running task. Has no effect on a paused or failed task.
   * @returns True if the operation took effect, false if ignored.
   */


  pause() {
    const valid = this._state === "running"
    /* RUNNING */
    ;

    if (valid) {
      this._transition("pausing"
      /* PAUSING */
      );
    }

    return valid;
  }
  /**
   * Cancels a currently running or paused task. Has no effect on a complete or
   * failed task.
   * @returns True if the operation took effect, false if ignored.
   */


  cancel() {
    const valid = this._state === "running"
    /* RUNNING */
    || this._state === "pausing"
    /* PAUSING */
    ;

    if (valid) {
      this._transition("canceling"
      /* CANCELING */
      );
    }

    return valid;
  }

}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @internal
 * @param _location - An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */


class Reference {
  constructor(_service, location) {
    this._service = _service;

    if (location instanceof Location) {
      this._location = location;
    } else {
      this._location = Location.makeFromUrl(location, _service.host);
    }
  }
  /**
   * Returns the URL for the bucket and path this object references,
   *     in the form gs://<bucket>/<object-path>
   * @override
   */


  toString() {
    return 'gs://' + this._location.bucket + '/' + this._location.path;
  }

  _newRef(service, location) {
    return new Reference(service, location);
  }
  /**
   * A reference to the root of this object's bucket.
   */


  get root() {
    const location = new Location(this._location.bucket, '');
    return this._newRef(this._service, location);
  }
  /**
   * The name of the bucket containing this reference's object.
   */


  get bucket() {
    return this._location.bucket;
  }
  /**
   * The full path of this object.
   */


  get fullPath() {
    return this._location.path;
  }
  /**
   * The short name of this object, which is the last component of the full path.
   * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
   */


  get name() {
    return lastComponent(this._location.path);
  }
  /**
   * The `StorageService` instance this `StorageReference` is associated with.
   */


  get storage() {
    return this._service;
  }
  /**
   * A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
   * this reference is the root.
   */


  get parent() {
    const newPath = parent(this._location.path);

    if (newPath === null) {
      return null;
    }

    const location = new Location(this._location.bucket, newPath);
    return new Reference(this._service, location);
  }
  /**
   * Utility function to throw an error in methods that do not accept a root reference.
   */


  _throwIfRoot(name) {
    if (this._location.path === '') {
      throw invalidRootOperation(name);
    }
  }

}
/**
 * Download the bytes at the object's location.
 * @returns A Promise containing the downloaded bytes.
 */


function getBytesInternal(ref, maxDownloadSizeBytes) {
  ref._throwIfRoot('getBytes');

  const requestInfo = getBytes$1(ref.storage, ref._location, maxDownloadSizeBytes);
  return ref.storage.makeRequestWithTokens(requestInfo, newBytesConnection).then(bytes => maxDownloadSizeBytes !== undefined ? // GCS may not honor the Range header for small files
  bytes.slice(0, maxDownloadSizeBytes) : bytes);
}
/**
 * Download the bytes at the object's location.
 * @returns A Promise containing the downloaded blob.
 */


function getBlobInternal(ref, maxDownloadSizeBytes) {
  ref._throwIfRoot('getBlob');

  const requestInfo = getBytes$1(ref.storage, ref._location, maxDownloadSizeBytes);
  return ref.storage.makeRequestWithTokens(requestInfo, newBlobConnection).then(blob => maxDownloadSizeBytes !== undefined ? // GCS may not honor the Range header for small files
  blob.slice(0, maxDownloadSizeBytes) : blob);
}
/**
 * Uploads data to this object's location.
 * The upload is not resumable.
 *
 * @param ref - StorageReference where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the newly uploaded data.
 * @returns A Promise containing an UploadResult
 */


function uploadBytes$1(ref, data, metadata) {
  ref._throwIfRoot('uploadBytes');

  const requestInfo = multipartUpload(ref.storage, ref._location, getMappings(), new FbsBlob(data, true), metadata);
  return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection).then(finalMetadata => {
    return {
      metadata: finalMetadata,
      ref
    };
  });
}
/**
 * Uploads data to this object's location.
 * The upload can be paused and resumed, and exposes progress updates.
 * @public
 * @param ref - StorageReference where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the newly uploaded data.
 * @returns An UploadTask
 */


function uploadBytesResumable$1(ref, data, metadata) {
  ref._throwIfRoot('uploadBytesResumable');

  return new UploadTask(ref, new FbsBlob(data), metadata);
}
/**
 * Uploads a string to this object's location.
 * The upload is not resumable.
 * @public
 * @param ref - StorageReference where string should be uploaded.
 * @param value - The string to upload.
 * @param format - The format of the string to upload.
 * @param metadata - Metadata for the newly uploaded string.
 * @returns A Promise containing an UploadResult
 */


function uploadString$1(ref, value, format = StringFormat.RAW, metadata) {
  ref._throwIfRoot('uploadString');

  const data = dataFromString(format, value);
  const metadataClone = Object.assign({}, metadata);

  if (metadataClone['contentType'] == null && data.contentType != null) {
    metadataClone['contentType'] = data.contentType;
  }

  return uploadBytes$1(ref, data.data, metadataClone);
}
/**
 * List all items (files) and prefixes (folders) under this storage reference.
 *
 * This is a helper method for calling list() repeatedly until there are
 * no more results. The default pagination size is 1000.
 *
 * Note: The results may not be consistent if objects are changed while this
 * operation is running.
 *
 * Warning: listAll may potentially consume too many resources if there are
 * too many results.
 * @public
 * @param ref - StorageReference to get list from.
 *
 * @returns A Promise that resolves with all the items and prefixes under
 *      the current storage reference. `prefixes` contains references to
 *      sub-directories and `items` contains references to objects in this
 *      folder. `nextPageToken` is never returned.
 */


function listAll$1(ref) {
  const accumulator = {
    prefixes: [],
    items: []
  };
  return listAllHelper(ref, accumulator).then(() => accumulator);
}
/**
 * Separated from listAll because async functions can't use "arguments".
 * @param ref
 * @param accumulator
 * @param pageToken
 */


function listAllHelper(_x, _x2, _x3) {
  return _listAllHelper.apply(this, arguments);
}
/**
 * List items (files) and prefixes (folders) under this storage reference.
 *
 * List API is only available for Firebase Rules Version 2.
 *
 * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
 * delimited folder structure.
 * Refer to GCS's List API if you want to learn more.
 *
 * To adhere to Firebase Rules's Semantics, Firebase Storage does not
 * support objects whose paths end with "/" or contain two consecutive
 * "/"s. Firebase Storage List API will filter these unsupported objects.
 * list() may fail if there are too many unsupported objects in the bucket.
 * @public
 *
 * @param ref - StorageReference to get list from.
 * @param options - See ListOptions for details.
 * @returns A Promise that resolves with the items and prefixes.
 *      `prefixes` contains references to sub-folders and `items`
 *      contains references to objects in this folder. `nextPageToken`
 *      can be used to get the rest of the results.
 */


function _listAllHelper() {
  _listAllHelper = (0,C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (ref, accumulator, pageToken) {
    const opt = {
      // maxResults is 1000 by default.
      pageToken
    };
    const nextPage = yield list$1(ref, opt);
    accumulator.prefixes.push(...nextPage.prefixes);
    accumulator.items.push(...nextPage.items);

    if (nextPage.nextPageToken != null) {
      yield listAllHelper(ref, accumulator, nextPage.nextPageToken);
    }
  });
  return _listAllHelper.apply(this, arguments);
}

function list$1(ref, options) {
  if (options != null) {
    if (typeof options.maxResults === 'number') {
      validateNumber('options.maxResults',
      /* minValue= */
      1,
      /* maxValue= */
      1000, options.maxResults);
    }
  }

  const op = options || {};
  const requestInfo = list$2(ref.storage, ref._location,
  /*delimiter= */
  '/', op.pageToken, op.maxResults);
  return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * A `Promise` that resolves with the metadata for this object. If this
 * object doesn't exist or metadata cannot be retreived, the promise is
 * rejected.
 * @public
 * @param ref - StorageReference to get metadata from.
 */


function getMetadata$1(ref) {
  ref._throwIfRoot('getMetadata');

  const requestInfo = getMetadata$2(ref.storage, ref._location, getMappings());
  return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * Updates the metadata for this object.
 * @public
 * @param ref - StorageReference to update metadata for.
 * @param metadata - The new metadata for the object.
 *     Only values that have been explicitly set will be changed. Explicitly
 *     setting a value to null will remove the metadata.
 * @returns A `Promise` that resolves
 *     with the new metadata for this object.
 *     See `firebaseStorage.Reference.prototype.getMetadata`
 */


function updateMetadata$1(ref, metadata) {
  ref._throwIfRoot('updateMetadata');

  const requestInfo = updateMetadata$2(ref.storage, ref._location, metadata, getMappings());
  return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * Returns the download URL for the given Reference.
 * @public
 * @returns A `Promise` that resolves with the download
 *     URL for this object.
 */


function getDownloadURL$1(ref) {
  ref._throwIfRoot('getDownloadURL');

  const requestInfo = getDownloadUrl(ref.storage, ref._location, getMappings());
  return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection).then(url => {
    if (url === null) {
      throw noDownloadURL();
    }

    return url;
  });
}
/**
 * Deletes the object at this location.
 * @public
 * @param ref - StorageReference for object to delete.
 * @returns A `Promise` that resolves if the deletion succeeds.
 */


function deleteObject$1(ref) {
  ref._throwIfRoot('deleteObject');

  const requestInfo = deleteObject$2(ref.storage, ref._location);
  return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * Returns reference for object obtained by appending `childPath` to `ref`.
 *
 * @param ref - StorageReference to get child of.
 * @param childPath - Child path from provided ref.
 * @returns A reference to the object obtained by
 * appending childPath, removing any duplicate, beginning, or trailing
 * slashes.
 *
 */


function _getChild$1(ref, childPath) {
  const newPath = child(ref._location.path, childPath);
  const location = new Location(ref._location.bucket, newPath);
  return new Reference(ref.storage, location);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function isUrl(path) {
  return /^[A-Za-z]+:\/\//.test(path);
}
/**
 * Returns a firebaseStorage.Reference for the given url.
 */


function refFromURL(service, url) {
  return new Reference(service, url);
}
/**
 * Returns a firebaseStorage.Reference for the given path in the default
 * bucket.
 */


function refFromPath(ref, path) {
  if (ref instanceof FirebaseStorageImpl) {
    const service = ref;

    if (service._bucket == null) {
      throw noDefaultBucket();
    }

    const reference = new Reference(service, service._bucket);

    if (path != null) {
      return refFromPath(reference, path);
    } else {
      return reference;
    }
  } else {
    // ref is a Reference
    if (path !== undefined) {
      return _getChild$1(ref, path);
    } else {
      return ref;
    }
  }
}

function ref$1(serviceOrRef, pathOrUrl) {
  if (pathOrUrl && isUrl(pathOrUrl)) {
    if (serviceOrRef instanceof FirebaseStorageImpl) {
      return refFromURL(serviceOrRef, pathOrUrl);
    } else {
      throw invalidArgument('To use ref(service, url), the first argument must be a Storage instance.');
    }
  } else {
    return refFromPath(serviceOrRef, pathOrUrl);
  }
}

function extractBucket(host, config) {
  const bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];

  if (bucketString == null) {
    return null;
  }

  return Location.makeFromBucketSpec(bucketString, host);
}

function connectStorageEmulator$1(storage, host, port, options = {}) {
  storage.host = `${host}:${port}`;
  storage._protocol = 'http';
  const {
    mockUserToken
  } = options;

  if (mockUserToken) {
    storage._overrideAuthToken = typeof mockUserToken === 'string' ? mockUserToken : (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.createMockUserToken)(mockUserToken, storage.app.options.projectId);
  }
}
/**
 * A service that provides Firebase Storage Reference instances.
 * @param opt_url - gs:// url to a custom Storage Bucket
 *
 * @internal
 */


class FirebaseStorageImpl {
  constructor(
  /**
   * FirebaseApp associated with this StorageService instance.
   */
  app, _authProvider,
  /**
   * @internal
   */
  _appCheckProvider,
  /**
   * @internal
   */
  _url, _firebaseVersion) {
    this.app = app;
    this._authProvider = _authProvider;
    this._appCheckProvider = _appCheckProvider;
    this._url = _url;
    this._firebaseVersion = _firebaseVersion;
    this._bucket = null;
    /**
     * This string can be in the formats:
     * - host
     * - host:port
     */

    this._host = DEFAULT_HOST;
    this._protocol = 'https';
    this._appId = null;
    this._deleted = false;
    this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
    this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
    this._requests = new Set();

    if (_url != null) {
      this._bucket = Location.makeFromBucketSpec(_url, this._host);
    } else {
      this._bucket = extractBucket(this._host, this.app.options);
    }
  }
  /**
   * The host string for this service, in the form of `host` or
   * `host:port`.
   */


  get host() {
    return this._host;
  }

  set host(host) {
    this._host = host;

    if (this._url != null) {
      this._bucket = Location.makeFromBucketSpec(this._url, host);
    } else {
      this._bucket = extractBucket(host, this.app.options);
    }
  }
  /**
   * The maximum time to retry uploads in milliseconds.
   */


  get maxUploadRetryTime() {
    return this._maxUploadRetryTime;
  }

  set maxUploadRetryTime(time) {
    validateNumber('time',
    /* minValue=*/
    0,
    /* maxValue= */
    Number.POSITIVE_INFINITY, time);
    this._maxUploadRetryTime = time;
  }
  /**
   * The maximum time to retry operations other than uploads or downloads in
   * milliseconds.
   */


  get maxOperationRetryTime() {
    return this._maxOperationRetryTime;
  }

  set maxOperationRetryTime(time) {
    validateNumber('time',
    /* minValue=*/
    0,
    /* maxValue= */
    Number.POSITIVE_INFINITY, time);
    this._maxOperationRetryTime = time;
  }

  _getAuthToken() {
    var _this = this;

    return (0,C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this._overrideAuthToken) {
        return _this._overrideAuthToken;
      }

      const auth = _this._authProvider.getImmediate({
        optional: true
      });

      if (auth) {
        const tokenData = yield auth.getToken();

        if (tokenData !== null) {
          return tokenData.accessToken;
        }
      }

      return null;
    })();
  }

  _getAppCheckToken() {
    var _this2 = this;

    return (0,C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const appCheck = _this2._appCheckProvider.getImmediate({
        optional: true
      });

      if (appCheck) {
        const result = yield appCheck.getToken(); // TODO: What do we want to do if there is an error getting the token?
        // Context: appCheck.getToken() will never throw even if an error happened. In the error case, a dummy token will be
        // returned along with an error field describing the error. In general, we shouldn't care about the error condition and just use
        // the token (actual or dummy) to send requests.

        return result.token;
      }

      return null;
    })();
  }
  /**
   * Stop running requests and prevent more from being created.
   */


  _delete() {
    if (!this._deleted) {
      this._deleted = true;

      this._requests.forEach(request => request.cancel());

      this._requests.clear();
    }

    return Promise.resolve();
  }
  /**
   * Returns a new firebaseStorage.Reference object referencing this StorageService
   * at the given Location.
   */


  _makeStorageReference(loc) {
    return new Reference(this, loc);
  }
  /**
   * @param requestInfo - HTTP RequestInfo object
   * @param authToken - Firebase auth token
   */


  _makeRequest(requestInfo, requestFactory, authToken, appCheckToken) {
    if (!this._deleted) {
      const request = makeRequest(requestInfo, this._appId, authToken, appCheckToken, requestFactory, this._firebaseVersion);

      this._requests.add(request); // Request removes itself from set when complete.


      request.getPromise().then(() => this._requests.delete(request), () => this._requests.delete(request));
      return request;
    } else {
      return new FailRequest(appDeleted());
    }
  }

  makeRequestWithTokens(requestInfo, requestFactory) {
    var _this3 = this;

    return (0,C_Users_SAMMY_Documents_dev_ang_fire_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const [authToken, appCheckToken] = yield Promise.all([_this3._getAuthToken(), _this3._getAppCheckToken()]);
      return _this3._makeRequest(requestInfo, requestFactory, authToken, appCheckToken).getPromise();
    })();
  }

}

const name = "@firebase/storage";
const version = "0.9.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Type constant for Firebase Storage.
 */

const STORAGE_TYPE = 'storage';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Downloads the data at the object's location. Returns an error if the object
 * is not found.
 *
 * To use this functionality, you have to whitelist your app's origin in your
 * Cloud Storage bucket. See also
 * https://cloud.google.com/storage/docs/configuring-cors
 *
 * @public
 * @param ref - StorageReference where data should be downloaded.
 * @param maxDownloadSizeBytes - If set, the maximum allowed size in bytes to
 * retrieve.
 * @returns A Promise containing the object's bytes
 */

function getBytes(ref, maxDownloadSizeBytes) {
  ref = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(ref);
  return getBytesInternal(ref, maxDownloadSizeBytes);
}
/**
 * Uploads data to this object's location.
 * The upload is not resumable.
 * @public
 * @param ref - {@link StorageReference} where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the data to upload.
 * @returns A Promise containing an UploadResult
 */


function uploadBytes(ref, data, metadata) {
  ref = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(ref);
  return uploadBytes$1(ref, data, metadata);
}
/**
 * Uploads a string to this object's location.
 * The upload is not resumable.
 * @public
 * @param ref - {@link StorageReference} where string should be uploaded.
 * @param value - The string to upload.
 * @param format - The format of the string to upload.
 * @param metadata - Metadata for the string to upload.
 * @returns A Promise containing an UploadResult
 */


function uploadString(ref, value, format, metadata) {
  ref = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(ref);
  return uploadString$1(ref, value, format, metadata);
}
/**
 * Uploads data to this object's location.
 * The upload can be paused and resumed, and exposes progress updates.
 * @public
 * @param ref - {@link StorageReference} where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the data to upload.
 * @returns An UploadTask
 */


function uploadBytesResumable(ref, data, metadata) {
  ref = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(ref);
  return uploadBytesResumable$1(ref, data, metadata);
}
/**
 * A `Promise` that resolves with the metadata for this object. If this
 * object doesn't exist or metadata cannot be retreived, the promise is
 * rejected.
 * @public
 * @param ref - {@link StorageReference} to get metadata from.
 */


function getMetadata(ref) {
  ref = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(ref);
  return getMetadata$1(ref);
}
/**
 * Updates the metadata for this object.
 * @public
 * @param ref - {@link StorageReference} to update metadata for.
 * @param metadata - The new metadata for the object.
 *     Only values that have been explicitly set will be changed. Explicitly
 *     setting a value to null will remove the metadata.
 * @returns A `Promise` that resolves with the new metadata for this object.
 */


function updateMetadata(ref, metadata) {
  ref = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(ref);
  return updateMetadata$1(ref, metadata);
}
/**
 * List items (files) and prefixes (folders) under this storage reference.
 *
 * List API is only available for Firebase Rules Version 2.
 *
 * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
 * delimited folder structure.
 * Refer to GCS's List API if you want to learn more.
 *
 * To adhere to Firebase Rules's Semantics, Firebase Storage does not
 * support objects whose paths end with "/" or contain two consecutive
 * "/"s. Firebase Storage List API will filter these unsupported objects.
 * list() may fail if there are too many unsupported objects in the bucket.
 * @public
 *
 * @param ref - {@link StorageReference} to get list from.
 * @param options - See {@link ListOptions} for details.
 * @returns A `Promise` that resolves with the items and prefixes.
 *      `prefixes` contains references to sub-folders and `items`
 *      contains references to objects in this folder. `nextPageToken`
 *      can be used to get the rest of the results.
 */


function list(ref, options) {
  ref = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(ref);
  return list$1(ref, options);
}
/**
 * List all items (files) and prefixes (folders) under this storage reference.
 *
 * This is a helper method for calling list() repeatedly until there are
 * no more results. The default pagination size is 1000.
 *
 * Note: The results may not be consistent if objects are changed while this
 * operation is running.
 *
 * Warning: `listAll` may potentially consume too many resources if there are
 * too many results.
 * @public
 * @param ref - {@link StorageReference} to get list from.
 *
 * @returns A `Promise` that resolves with all the items and prefixes under
 *      the current storage reference. `prefixes` contains references to
 *      sub-directories and `items` contains references to objects in this
 *      folder. `nextPageToken` is never returned.
 */


function listAll(ref) {
  ref = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(ref);
  return listAll$1(ref);
}
/**
 * Returns the download URL for the given {@link StorageReference}.
 * @public
 * @param ref - {@link StorageReference} to get the download URL for.
 * @returns A `Promise` that resolves with the download
 *     URL for this object.
 */


function getDownloadURL(ref) {
  ref = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(ref);
  return getDownloadURL$1(ref);
}
/**
 * Deletes the object at this location.
 * @public
 * @param ref - {@link StorageReference} for object to delete.
 * @returns A `Promise` that resolves if the deletion succeeds.
 */


function deleteObject(ref) {
  ref = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(ref);
  return deleteObject$1(ref);
}

function ref(serviceOrRef, pathOrUrl) {
  serviceOrRef = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(serviceOrRef);
  return ref$1(serviceOrRef, pathOrUrl);
}
/**
 * @internal
 */


function _getChild(ref, childPath) {
  return _getChild$1(ref, childPath);
}
/**
 * Gets a {@link FirebaseStorage} instance for the given Firebase app.
 * @public
 * @param app - Firebase app to get {@link FirebaseStorage} instance for.
 * @param bucketUrl - The gs:// url to your Firebase Storage Bucket.
 * If not passed, uses the app's default Storage Bucket.
 * @returns A {@link FirebaseStorage} instance.
 */


function getStorage(app = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.getApp)(), bucketUrl) {
  app = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(app);

  const storageProvider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._getProvider)(app, STORAGE_TYPE);

  const storageInstance = storageProvider.getImmediate({
    identifier: bucketUrl
  });
  return storageInstance;
}
/**
 * Modify this {@link FirebaseStorage} instance to communicate with the Cloud Storage emulator.
 *
 * @param storage - The {@link FirebaseStorage} instance
 * @param host - The emulator host (ex: localhost)
 * @param port - The emulator port (ex: 5001)
 * @param options - Emulator options. `options.mockUserToken` is the mock auth
 * token to use for unit testing Security Rules.
 * @public
 */


function connectStorageEmulator(storage, host, port, options = {}) {
  connectStorageEmulator$1(storage, host, port, options);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Downloads the data at the object's location. Returns an error if the object
 * is not found.
 *
 * To use this functionality, you have to whitelist your app's origin in your
 * Cloud Storage bucket. See also
 * https://cloud.google.com/storage/docs/configuring-cors
 *
 * This API is not available in Node.
 *
 * @public
 * @param ref - StorageReference where data should be downloaded.
 * @param maxDownloadSizeBytes - If set, the maximum allowed size in bytes to
 * retrieve.
 * @returns A Promise that resolves with a Blob containing the object's bytes
 */


function getBlob(ref, maxDownloadSizeBytes) {
  ref = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(ref);
  return getBlobInternal(ref, maxDownloadSizeBytes);
}
/**
 * Downloads the data at the object's location. Raises an error event if the
 * object is not found.
 *
 * This API is only available in Node.
 *
 * @public
 * @param ref - StorageReference where data should be downloaded.
 * @param maxDownloadSizeBytes - If set, the maximum allowed size in bytes to
 * retrieve.
 * @returns A stream with the object's data as bytes
 */


function getStream(ref, maxDownloadSizeBytes) {
  throw new Error('getStream() is only supported by NodeJS builds');
}
/**
 * Cloud Storage for Firebase
 *
 * @packageDocumentation
 */


function factory(container, {
  instanceIdentifier: url
}) {
  const app = container.getProvider('app').getImmediate();
  const authProvider = container.getProvider('auth-internal');
  const appCheckProvider = container.getProvider('app-check-internal');
  return new FirebaseStorageImpl(app, authProvider, appCheckProvider, url, _firebase_app__WEBPACK_IMPORTED_MODULE_1__.SDK_VERSION);
}

function registerStorage() {
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__.Component(STORAGE_TYPE, factory, "PUBLIC"
  /* PUBLIC */
  ).setMultipleInstances(true)); //RUNTIME_ENV will be replaced during the compilation to "node" for nodejs and an empty string for browser


  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.registerVersion)(name, version, ''); // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation

  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.registerVersion)(name, version, 'esm2017');
}

registerStorage();


/***/ }),

/***/ 67533:
/*!****************************************************************!*\
  !*** ./node_modules/firebase/compat/storage/dist/index.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_storage_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/storage-compat */ 3222);



/***/ }),

/***/ 22949:
/*!******************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/settings/all-accounts/all-accounts.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllAccountsComponent": () => (/* binding */ AllAccountsComponent)
/* harmony export */ });
/* harmony import */ var _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_services_user_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/services/user/auth-api/auth-api.service */ 86491);
/* harmony import */ var projects_personal_src_app_services_user_user_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/services/user/user-api/user-api.service */ 59475);
/* harmony import */ var projects_personal_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/personal/src/app/services/modules/settings-api/settings-api.service */ 40867);
/* harmony import */ var projects_restaurant_src_app_services_modules_admin_api_admin_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/admin-api/admin-api.service */ 11934);
/* harmony import */ var _module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 7005);










const _c0 = ["connectionToastComponentReference"];
function AllAccountsComponent_div_25_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](account_r5.data().account.data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](account_r5.data().account.data.location);
} }
function AllAccountsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Account Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AllAccountsComponent_div_25_tr_11_Template, 5, 2, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.suiteNames[i_r3], " Accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", data_r2);
} }
class AllAccountsComponent {
    constructor(authApi, userApi, settingsApi, restaurantAdminApi) {
        this.authApi = authApi;
        this.userApi = userApi;
        this.settingsApi = settingsApi;
        this.restaurantAdminApi = restaurantAdminApi;
        this.navHeading = [
            { text: "All Accounts", url: "/home/profile/all-accounts" },
        ];
        this.userEmail = "";
        this.restaurantData = [];
        // schoolData: any[] = [];
        // enterpriseData: any[] = [];
        // associationData: any[] = [];
        // hospitalData: any[] = [];
        // hotelData: any[] = [];
        // shopData: any[] = [];
        // productionData: any[] = [];
        this.suiteData = [
            this.restaurantData,
            // this.schoolData,
            // this.enterpriseData,
            // this.associationData,
            // this.hospitalData,
            // this.hotelData,
            // this.shopData,
            // this.productionData,
        ];
        this.suiteNames = [
            'Restaurant',
            // 'School',
            // 'Enterprise',
            // 'Association',
            // 'Hospital',
            // 'Hotel',
            // 'Shop',
            // 'Production',
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.getAuth();
        this.getUser();
        this.getRestaurantAccounts();
    }
    getAuth() {
        this.authApi.getAuth()
            .subscribe((res) => {
            console.log(res);
            this.userEmail = res.email;
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    getUser() {
        this.userApi.getUser()
            .then((res) => {
            console.log(res);
            this.userData = res;
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    // suites
    getRestaurantAccounts() {
        this.restaurantAdminApi.getUserAccountUser()
            .then((res) => {
            console.log(res);
            this.suiteData[0] = res.docs;
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
}
AllAccountsComponent.ɵfac = function AllAccountsComponent_Factory(t) { return new (t || AllAccountsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](projects_personal_src_app_services_user_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_1__.AuthApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](projects_personal_src_app_services_user_user_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__.UserApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](projects_personal_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_3__.SettingsApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_admin_api_admin_api_service__WEBPACK_IMPORTED_MODULE_4__.AdminApiService)); };
AllAccountsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AllAccountsComponent, selectors: [["app-all-accounts"]], viewQuery: function AllAccountsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 28, vars: 5, consts: [[3, "headings"], [1, "container"], [1, "row", "mb-3"], [1, "col-md-9"], ["routerLink", "/home/settings/invitations", 1, "btn", "btn-secondary", "float-end", "nr-standard-font"], [1, "bi", "bi-arrow-left-right", "me-2"], [1, "row"], [1, "mb-5"], [1, "mb-2"], [1, "table", "table-sm"], ["width", "50%", "scope", "col"], ["class", "mb-5", 4, "ngFor", "ngForOf"], ["connectionToastComponentReference", ""], ["width", "55%", "scope", "col"], ["width", "45%", "scope", "col"], [4, "ngFor", "ngForOf"]], template: function AllAccountsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Invitations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Personal Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, AllAccountsComponent_div_25_Template, 12, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "app-connection-toast", null, 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("headings", ctx.navHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.userData == null ? null : ctx.userData.data().first_name, " ", ctx.userData == null ? null : ctx.userData.data().last_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.userEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.suiteData);
    } }, directives: [_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_5__.ModuleTopnavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtYWNjb3VudHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 15191:
/*!************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/settings/dashboard/dashboard.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/personal/src/environments/environment */ 4197);
/* harmony import */ var _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/services/modules/settings-api/settings-api.service */ 40867);
/* harmony import */ var _module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ 34459);







const _c0 = ["connectionToastComponentReference"];
class DashboardComponent {
    constructor(settingsApi) {
        this.settingsApi = settingsApi;
        this.navHeading = [
            { text: "Dashboard", url: "/home/portal/dashboard" },
        ];
        this.allAccounts = 1;
        this.accountsData = [1, 0, 0, 0, 0, 0, 0, 0, 0];
        this.suiteUrls = [
            projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.restaurantUrl,
            projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.schoolUrl,
            projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.enterpriseUrl,
            projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.associationUrl,
            projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hospitalUrl,
            projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hotelUrl,
            projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.shopUrl,
            projects_personal_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.productionUrl,
        ];
        this.chartOptions = {
            responsive: true,
            scales: {
                yAxes: [{
                        min: 0,
                        ticks: {
                            stepSize: 1
                        }
                    }]
            }
        };
        this.accountsBarChartData = [
            { data: this.accountsData, label: 'Accounts' },
        ];
        this.accountsBarChartLabels = [
            'Personal',
            'Restaurant',
            'School',
            'Enterprise',
            'Association',
            'Hospital',
            'Hotel',
            'Shop',
            'Restaurant',
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.getSuiteAccounts();
    }
    getSuiteAccounts() {
        this.suiteUrls.forEach((url, index) => {
            // this.settingsApi.getUserAccounts(url)
            //   .subscribe(
            //     res => {
            //       console.log(res);
            //       this.accountsData[index + 1] = res.length;
            //       this.allAccounts = this.allAccounts + res.length;
            //       console.log(this.allAccounts);
            //     },
            //     err => {
            //       console.log(err);
            //       this.connectionToast.openToast();
            //     }
            //   )
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_personal_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_2__.SettingsApiService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "All Accounts");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "All netRink Accounts");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.allAccounts);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datasets", ctx.accountsBarChartData)("labels", ctx.accountsBarChartLabels)("options", ctx.chartOptions)("legend", true)("chartType", "bar");
    } }, directives: [_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__.ModuleTopnavComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.BaseChartDirective, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 61150:
/*!****************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/settings/invitations/invitations.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvitationsComponent": () => (/* binding */ InvitationsComponent)
/* harmony export */ });
/* harmony import */ var _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _view_invitation_view_invitation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view-invitation/view-invitation.component */ 61002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/services/modules/settings-api/settings-api.service */ 40867);
/* harmony import */ var _module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);









const _c0 = ["connectionToastComponentReference"];
const _c1 = ["viewInvitationComponentReference"];
function InvitationsComponent_i_18_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationsComponent_i_18_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.sortTable("created_at", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InvitationsComponent_i_19_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationsComponent_i_19_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.sortTable("created_at", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InvitationsComponent_i_20_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationsComponent_i_20_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.sortTable("created_at", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InvitationsComponent_i_23_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationsComponent_i_23_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.sortTable("invitee_name", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InvitationsComponent_i_24_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationsComponent_i_24_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r25.sortTable("invitee_name", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InvitationsComponent_i_25_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationsComponent_i_25_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.sortTable("invitee_name", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InvitationsComponent_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationsComponent_i_28_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.sortTable("invitee_name", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InvitationsComponent_i_29_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationsComponent_i_29_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r31.sortTable("invitee_name", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InvitationsComponent_i_30_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationsComponent_i_30_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.sortTable("invitee_name", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InvitationsComponent_i_33_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationsComponent_i_33_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r35.sortTable("invitation_status", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InvitationsComponent_i_34_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationsComponent_i_34_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r37.sortTable("invitation_status", "asc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InvitationsComponent_i_35_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationsComponent_i_35_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r39.sortTable("invitation_status", "desc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InvitationsComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dblclick", function InvitationsComponent_tr_37_Template_tr_dblclick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43); const data_r41 = restoredCtx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r42.openInvitation(data_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, data_r41 == null ? null : data_r41.data().created_at.toDate()));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r41 == null ? null : data_r41.data().account.data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r41 == null ? null : data_r41.data().account_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r41 == null ? null : data_r41.data().invitation_status);
} }
function InvitationsComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function InvitationsComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No data available");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class InvitationsComponent {
    constructor(settingsApi) {
        this.settingsApi = settingsApi;
        this.navHeading = [
            { text: "All Accounts", url: "/home/settings/all-accounts" },
            { text: "Invitations", url: "/home/settings/invitations" },
        ];
        this.invitationsGridData = [];
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
        this.getUserInvitation();
    }
    getUserInvitation() {
        this.isFetchingGridData = true;
        this.settingsApi.getUserInvitation(this.sortParams, 20)
            .then((res) => {
            console.log(res);
            this.invitationsGridData = res.docs;
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
        this.settingsApi.getUserInvitationNext(this.sortParams, 20, this.nextStartAfter)
            .then((res) => {
            console.log(res);
            this.invitationsGridData = res.docs;
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
        this.settingsApi.getUserInvitationPrev(this.sortParams, 20, this.prevStartAt)
            .then((res) => {
            console.log(res);
            this.invitationsGridData = res.docs;
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
    openInvitation(data) {
        this.viewInvitation.openModal(data);
    }
    sortTable(field, direction) {
        this.sortParams.field = field;
        this.sortParams.direction = direction;
        this.getUserInvitation();
    }
}
InvitationsComponent.ɵfac = function InvitationsComponent_Factory(t) { return new (t || InvitationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_personal_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_2__.SettingsApiService)); };
InvitationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: InvitationsComponent, selectors: [["app-invitations"]], viewQuery: function InvitationsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5, _view_invitation_view_invitation_component__WEBPACK_IMPORTED_MODULE_1__.ViewInvitationComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.viewInvitation = _t.first);
    } }, decls: 58, vars: 20, consts: [[3, "headings"], [1, "container"], [1, "row"], [1, "col-md-9"], [1, "row", "mb-3"], [1, "col-md-12"], ["routerLink", "/home/settings/all-accounts", 1, "btn", "btn-secondary", "float-end", "nr-standard-font"], [1, "bi", "bi-arrow-left-right", "me-2"], [1, "col"], [1, "btn", "btn-light", "border", "float-end", "page-refresh-btn", 3, "disabled", "click"], [1, "bi", "bi-arrow-clockwise"], [1, "table", "table-bordered", "table-sm", "w-100", "page-table"], [1, "bg-light"], ["width", "20%"], ["class", "bi bi-filter float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-down float-end list-pointer", 3, "click", 4, "ngIf"], ["class", "bi bi-sort-up float-end list-pointer", 3, "click", 4, "ngIf"], ["width", "40%"], ["class", "table-pointer", 3, "dblclick", 4, "ngFor", "ngForOf"], ["class", "text-center", 4, "ngIf"], ["colspan", "4"], ["aria-label", "Page navigation", 1, "nav-light", "float-end"], [1, "pagination", "pagination-sm", "mb-0", "justify-content-end"], [1, "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-left-fill"], [1, "page-item"], ["href", "#", "aria-label", "Current", 1, "page-link", 3, "click"], ["href", "#", "aria-label", "Last", 1, "page-link", 3, "click"], [1, "bi", "bi-caret-right-fill"], ["connectionToastComponentReference", ""], [3, "updatedEvent"], ["viewInvitationComponentReference", ""], [1, "bi", "bi-filter", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-down", "float-end", "list-pointer", 3, "click"], [1, "bi", "bi-sort-up", "float-end", "list-pointer", 3, "click"], [1, "table-pointer", 3, "dblclick"], [1, "text-center"], ["role", "status", 1, "spinner-grow", "m-4"], [1, "visually-hidden"], [1, "m-4"]], template: function InvitationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " All Accounts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationsComponent_Template_button_click_11_listener() { return ctx.getUserInvitation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Invitation Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, InvitationsComponent_i_18_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, InvitationsComponent_i_19_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, InvitationsComponent_i_20_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Account Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, InvitationsComponent_i_23_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, InvitationsComponent_i_24_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, InvitationsComponent_i_25_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Account Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, InvitationsComponent_i_28_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, InvitationsComponent_i_29_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, InvitationsComponent_i_30_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Invitation Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, InvitationsComponent_i_33_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, InvitationsComponent_i_34_Template, 1, 0, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, InvitationsComponent_i_35_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, InvitationsComponent_tr_37_Template, 10, 6, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, InvitationsComponent_tr_38_Template, 5, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, InvitationsComponent_tr_39_Template, 4, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "nav", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationsComponent_Template_a_click_46_listener($event) { return ctx.previousPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationsComponent_Template_a_click_49_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InvitationsComponent_Template_a_click_52_listener($event) { return ctx.nextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "i", 29);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "app-connection-toast", null, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "app-view-invitation", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("updatedEvent", function InvitationsComponent_Template_app_view_invitation_updatedEvent_56_listener() { return ctx.getUserInvitation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("headings", ctx.navHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isFetchingGridData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "created_at");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "created_at" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "created_at" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "invitee_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "invitee_name" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "invitee_name" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "invitee_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "invitee_name" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "invitee_name" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field != "invitation_status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "invitation_status" && ctx.sortParams.direction == "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortParams.field == "invitation_status" && ctx.sortParams.direction == "asc");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.invitationsGridData);
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
    } }, directives: [_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_3__.ModuleTopnavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent, _view_invitation_view_invitation_component__WEBPACK_IMPORTED_MODULE_1__.ViewInvitationComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZpdGF0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 71271:
/*!******************************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/settings/profile-content/additional/additional.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdditionalComponent": () => (/* binding */ AdditionalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _module_utilities_bday_input_bday_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../module-utilities/bday-input/bday-input.component */ 54709);
/* harmony import */ var _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/services/modules/settings-api/settings-api.service */ 40867);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7005);








const _c0 = ["bdayInputComponentReference"];
const _c1 = ["connectionToastComponentReference"];
function AdditionalComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AdditionalComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AdditionalComponent {
    constructor(settingsApi) {
        this.settingsApi = settingsApi;
        this.additionalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
        this.isExtendedProfileLoading = false;
    }
    ngOnInit() {
        this.initAdditionalForm();
    }
    initAdditionalForm() {
        this.additionalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(),
        });
    }
    updateExtendedProfile() {
        let data = {
            date_of_birth: this.bdayInput.value,
            gender: this.additionalForm.controls.gender.value,
        };
        this.isExtendedProfileLoading = true;
        this.settingsApi.updateExtendedProfile(data)
            .then((res) => {
            console.log(res);
            this.isExtendedProfileLoading = false;
        }, (err) => {
            console.log(err);
            this.isExtendedProfileLoading = false;
            this.connectionToast.openToast();
        });
    }
}
AdditionalComponent.ɵfac = function AdditionalComponent_Factory(t) { return new (t || AdditionalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_personal_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_2__.SettingsApiService)); };
AdditionalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AdditionalComponent, selectors: [["app-additional"]], viewQuery: function AdditionalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, _module_utilities_bday_input_bday_input_component__WEBPACK_IMPORTED_MODULE_0__.BdayInputComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.bdayInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 26, vars: 3, consts: [[1, "row", "m-2", "page-form"], [1, "col-md-6"], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "row", "mb-3"], [1, "col-md-12"], [1, "row", "mb-2"], [1, "col-md-4"], [1, "mt-1"], [1, "col-md-8"], ["bdayInputComponentReference", ""], ["formControlName", "gender", 1, "form-control", "form-control-sm", "w-100"], ["class", "row mt-3", 4, "ngIf"], [1, "row", "mt-3"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", "float-end", "page-form-btn"], ["type", "button", 1, "btn", "btn-sm", "float-end", "btn-light", "page-form-btn"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm"], [1, "visually-hidden"]], template: function AdditionalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AdditionalComponent_Template_form_ngSubmit_2_listener() { return ctx.updateExtendedProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Bio Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Date of Birth :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-bday-input", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Gender :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, AdditionalComponent_div_24_Template, 4, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, AdditionalComponent_div_25_Template, 6, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.additionalForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isExtendedProfileLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isExtendedProfileLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _module_utilities_bday_input_bday_input_component__WEBPACK_IMPORTED_MODULE_0__.BdayInputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRpdGlvbmFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 62846:
/*!********************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/settings/profile-content/basic/basic.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicComponent": () => (/* binding */ BasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_services_user_user_api_user_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/services/user/user-api/user-api.service */ 59475);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 7005);






const _c0 = ["connectionToastComponentReference"];
function BasicComponent_div_25_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.isUserSaving);
} }
function BasicComponent_div_26_Template(rf, ctx) { if (rf & 1) {
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
class BasicComponent {
    constructor(userApi) {
        this.userApi = userApi;
        this.basicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({});
        this.isUserLoading = false;
        this.isUserSaving = false;
    }
    ngOnInit() {
        this.initBasicForm();
    }
    initBasicForm() {
        this.basicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            about: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
        });
    }
    updateUser() {
        this.isUserSaving = true;
        let data = {
            first_name: this.basicForm.controls.first_name.value,
            last_name: this.basicForm.controls.last_name.value,
            about: this.basicForm.controls.about.value,
        };
        this.userApi.updateUser(data)
            .then((res) => {
            console.log(res);
            this.isUserSaving = false;
        }, (err) => {
            console.log(err);
            this.isUserSaving = false;
            this.connectionToast.openToast();
        });
    }
}
BasicComponent.ɵfac = function BasicComponent_Factory(t) { return new (t || BasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_personal_src_app_services_user_user_api_user_api_service__WEBPACK_IMPORTED_MODULE_1__.UserApiService)); };
BasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BasicComponent, selectors: [["app-basic"]], viewQuery: function BasicComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 27, vars: 3, consts: [[1, "row", "m-2", "page-form"], [1, "col-md-6"], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "row", "mb-3"], [1, "col-md-12"], [1, "row", "mb-2"], [1, "col-md-4"], [1, "mt-1"], [1, "col-md-8"], ["formControlName", "firstName", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "lastName", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "about", "rows", "3", 1, "form-control", "form-control-sm", "w-100"], ["class", "row mt-3", 4, "ngIf"], [1, "row", "mt-3"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", "float-end", "page-form-btn", 3, "disabled"], ["type", "button", 1, "btn", "btn-sm", "float-end", "btn-light", "page-form-btn"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm"], [1, "visually-hidden"]], template: function BasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function BasicComponent_Template_form_ngSubmit_2_listener() { return ctx.updateUser(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "First Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Last Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "About :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, BasicComponent_div_25_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, BasicComponent_div_26_Template, 6, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.basicForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isUserLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isUserLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 94889:
/*!************************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/settings/profile-content/contact/contact.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_services_user_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/services/user/auth-api/auth-api.service */ 86491);
/* harmony import */ var projects_personal_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/services/modules/settings-api/settings-api.service */ 40867);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7005);







const _c0 = ["connectionToastComponentReference"];
function ContactComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.isExtendedProfileSaving);
} }
function ContactComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class ContactComponent {
    constructor(authApi, settingsApi) {
        this.authApi = authApi;
        this.settingsApi = settingsApi;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
        this.isAuthLoading = false;
        this.isExtendedProfileLoading = false;
        this.isExtendedProfileSaving = false;
    }
    ngOnInit() {
        this.initContactForm();
    }
    initContactForm() {
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({ valaue: "", disabled: true }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(),
        });
    }
    updateExtendedProfile() {
        console.log();
        this.isExtendedProfileSaving = true;
        let data = {
            phone: this.contactForm.controls.phone.value,
            address: this.contactForm.controls.address.value,
        };
        this.settingsApi.updateExtendedProfile(data)
            .then((res) => {
            console.log(res);
            this.isExtendedProfileSaving = false;
        }, (err) => {
            console.log(err);
            this.isExtendedProfileSaving = false;
            this.connectionToast.openToast();
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_personal_src_app_services_user_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_1__.AuthApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_personal_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_2__.SettingsApiService)); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], viewQuery: function ContactComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 27, vars: 4, consts: [[1, "row", "m-2", "page-form"], [1, "col-md-6"], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "row", "mb-3"], [1, "col-md-12"], [1, "row", "mb-2"], [1, "col-md-4"], [1, "mt-1"], [1, "col-md-8"], ["formControlName", "email", 1, "form-control", "form-control-sm", "w-100", 3, "disabled"], ["formControlName", "phone", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "address", "rows", "3", 1, "form-control", "form-control-sm", "w-100"], ["class", "row mt-3", 4, "ngIf"], [1, "row", "mt-3"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", "float-end", "page-form-btn", 3, "disabled"], ["type", "button", 1, "btn", "btn-sm", "float-end", "btn-light", "page-form-btn"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm"], [1, "visually-hidden"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_2_listener() { return ctx.updateExtendedProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Contact Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Phone No. :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Address :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "teaxtarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ContactComponent_div_25_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ContactComponent_div_26_Template, 6, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.isAuthLoading || ctx.isExtendedProfileLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isAuthLoading || ctx.isExtendedProfileLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8231:
/*!**************************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/settings/profile-content/location/location.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationComponent": () => (/* binding */ LocationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_services_user_user_api_user_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/services/user/user-api/user-api.service */ 59475);
/* harmony import */ var projects_personal_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/services/modules/settings-api/settings-api.service */ 40867);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-google-places-autocomplete */ 37544);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);








const _c0 = ["connectionToastComponentReference"];
function LocationComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isUserSaving || ctx_r1.isExtendedProfileSaving);
} }
function LocationComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class LocationComponent {
    constructor(userApi, settingsApi) {
        this.userApi = userApi;
        this.settingsApi = settingsApi;
        this.locationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
        this.isUserLoading = false;
        this.isExtendedProfileLoading = false;
        this.isUserSaving = false;
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
        this.updateUser();
        this.updateExtendedProfile();
    }
    updateUser() {
        let data = {
            location: this.locationForm.controls.location.value,
        };
        this.isUserSaving = true;
        this.userApi.updateUser(data)
            .then((res) => {
            console.log(res);
            this.isUserSaving = false;
        }, (err) => {
            console.log(err);
            this.isUserSaving = false;
            this.connectionToast.openToast();
        });
    }
    updateExtendedProfile() {
        console.log();
        this.isExtendedProfileSaving = true;
        let data = {
            country: this.locationForm.controls.country.value,
            state: this.locationForm.controls.state.value,
            city: this.locationForm.controls.city.value,
        };
        this.settingsApi.updateExtendedProfile(data)
            .then((res) => {
            console.log(res);
            this.isExtendedProfileSaving = false;
        }, (err) => {
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
LocationComponent.ɵfac = function LocationComponent_Factory(t) { return new (t || LocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_personal_src_app_services_user_user_api_user_api_service__WEBPACK_IMPORTED_MODULE_1__.UserApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_personal_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_2__.SettingsApiService)); };
LocationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LocationComponent, selectors: [["app-location"]], viewQuery: function LocationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 34, vars: 3, consts: [[1, "row", "m-2", "page-form"], [1, "col-md-6"], [1, "page-form", 3, "formGroup", "ngSubmit"], [1, "row", "mb-3"], [1, "col-md-12"], [1, "row", "mb-2"], [1, "col-md-4"], [1, "mt-1"], [1, "col-md-8"], ["formControlName", "country", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "state", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "city", 1, "form-control", "form-control-sm", "w-100"], ["formControlName", "location", "ngx-google-places-autocomplete", "", 1, "form-control", "form-control-sm", "w-100", 3, "onAddressChange"], ["placesRef", "ngx-places"], ["class", "row mt-3 page-form-div", 4, "ngIf"], ["class", "row mt-3", 4, "ngIf"], [1, "row", "mt-3", "page-form-div"], ["type", "submit", 1, "btn", "btn-secondary", "btn-sm", "float-end", "page-form-btn", 3, "disabled"], [1, "row", "mt-3"], ["type", "button", 1, "btn", "btn-sm", "float-end", "btn-light", "page-form-btn"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm"], [1, "visually-hidden"]], template: function LocationComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, LocationComponent_div_33_Template, 6, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.locationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx.isUserLoading || ctx.isExtendedProfileLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isUserLoading || ctx.isExtendedProfileLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__.GooglePlaceDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 94730:
/*!********************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/settings/profile-content/photo/photo.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoComponent": () => (/* binding */ PhotoComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 63604);
/* harmony import */ var projects_personal_src_app_components_module_utilities_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../module-utilities/image-input/image-input.component */ 84154);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/storage */ 43462);
/* harmony import */ var projects_personal_src_app_services_user_user_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/services/user/user-api/user-api.service */ 59475);







const _c0 = ["imageInputComponentReference"];
const _c1 = ["connectionToastComponentReference"];
class PhotoComponent {
    constructor(storage, userApi) {
        this.storage = storage;
        this.userApi = userApi;
        this.storageBasePath = "/personal/" + localStorage.getItem('personal_id') + "/user/";
        this.isUserSaving = false;
    }
    ngOnInit() {
    }
    uploadImage() {
        if (this.imageInput.isImageChanged) {
            this.isUserSaving = true;
            const storagePath = this.storageBasePath;
            const storageRef = this.storage.ref(storagePath);
            const task = this.storage.upload(storagePath, this.imageInput.image);
            task.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
                storageRef.getDownloadURL().subscribe(downloadUrl => {
                    this.updateUser({ photo: downloadUrl });
                });
            })).subscribe();
        }
    }
    updateUser(data) {
        this.userApi.updateUser(data)
            .then((res) => {
            console.log(res);
            this.isUserSaving = false;
        }, (err) => {
            console.log(err);
            this.isUserSaving = false;
            this.connectionToast.openToast();
        });
    }
}
PhotoComponent.ɵfac = function PhotoComponent_Factory(t) { return new (t || PhotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_5__.AngularFireStorage), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](projects_personal_src_app_services_user_user_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__.UserApiService)); };
PhotoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PhotoComponent, selectors: [["app-photo"]], viewQuery: function PhotoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, projects_personal_src_app_components_module_utilities_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_0__.ImageInputComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.imageInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 13, vars: 4, consts: [[1, "row", "m-2", "page-form"], [1, "col-md-6"], [1, "row", "mb-3"], [1, "col-md-12"], [1, "row", "mt-3", "page-form-div"], [3, "width", "height", "imgType"], [1, "btn", "btn-secondary", "btn-sm", "page-form-btn", 3, "disabled", "click"]], template: function PhotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Profile Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-image-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PhotoComponent_Template_button_click_11_listener() { return ctx.uploadImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", 180)("height", 200)("imgType", "photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isUserSaving);
    } }, directives: [projects_personal_src_app_components_module_utilities_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_0__.ImageInputComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90by5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 76584:
/*!********************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/settings/profile/profile.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var projects_personal_src_app_services_user_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/personal/src/app/services/user/auth-api/auth-api.service */ 86491);
/* harmony import */ var projects_personal_src_app_services_user_user_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/services/user/user-api/user-api.service */ 59475);
/* harmony import */ var projects_personal_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/personal/src/app/services/modules/settings-api/settings-api.service */ 40867);
/* harmony import */ var _module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../module-utilities/module-topnav/module-topnav.component */ 8972);
/* harmony import */ var _profile_content_basic_basic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile-content/basic/basic.component */ 62846);
/* harmony import */ var _profile_content_photo_photo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile-content/photo/photo.component */ 94730);
/* harmony import */ var _profile_content_additional_additional_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile-content/additional/additional.component */ 71271);
/* harmony import */ var _profile_content_location_location_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../profile-content/location/location.component */ 8231);
/* harmony import */ var _profile_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../profile-content/contact/contact.component */ 94889);












const _c0 = ["basicComponentReference"];
const _c1 = ["additionalComponentReference"];
const _c2 = ["photoComponentReference"];
const _c3 = ["locationComponentReference"];
const _c4 = ["contactComponentReference"];
const _c5 = ["connectionToastComponentReference"];
class ProfileComponent {
    constructor(authApi, userApi, settingsApi) {
        this.authApi = authApi;
        this.userApi = userApi;
        this.settingsApi = settingsApi;
        this.navHeading = [
            { text: "Profile", url: "/home/profile/dashboard" },
        ];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.getAuth();
        this.getUser();
        this.getExtendedProfile();
    }
    getAuth() {
        this.contact.isAuthLoading = true;
        this.authApi.getAuth()
            .subscribe((res) => {
            console.log(res);
            this.contact.contactForm.controls.email.setValue(res.email);
            this.contact.isAuthLoading = false;
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    getUser() {
        this.basic.isUserLoading = true;
        this.location.isUserLoading = true;
        this.userApi.getUser()
            .then((res) => {
            console.log(res);
            this.userData = res;
            this.basic.basicForm.controls.firstName.setValue(this.userData.data().first_name);
            this.basic.basicForm.controls.lastName.setValue(this.userData.data().last_name);
            this.basic.basicForm.controls.about.setValue(this.userData.data().about);
            this.location.locationForm.controls.location.setValue(this.userData.data().location);
            this.photo.imageInput.imgSrc = this.userData.data().photo;
            this.basic.isUserLoading = false;
            this.location.isUserLoading = false;
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    getExtendedProfile() {
        this.additional.isExtendedProfileLoading = true;
        this.location.isExtendedProfileLoading = true;
        this.contact.isExtendedProfileLoading = true;
        this.settingsApi.getExtendedProfile()
            .then((res) => {
            console.log(res);
            this.extendedProfileData = res;
            this.additional.bdayInput.value = this.extendedProfileData.date_of_birth;
            this.additional.additionalForm.controls.gender.setValue(this.extendedProfileData.data().gender);
            this.location.locationForm.controls.country.setValue(this.extendedProfileData.data().country);
            this.location.locationForm.controls.state.setValue(this.extendedProfileData.data().state);
            this.location.locationForm.controls.city.setValue(this.extendedProfileData.data().city);
            this.contact.contactForm.controls.phone.setValue(this.extendedProfileData.data().phone);
            this.contact.contactForm.controls.address.setValue(this.extendedProfileData.data().address);
            this.additional.isExtendedProfileLoading = false;
            this.location.isExtendedProfileLoading = false;
            this.contact.isExtendedProfileLoading = false;
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](projects_personal_src_app_services_user_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_1__.AuthApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](projects_personal_src_app_services_user_user_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__.UserApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](projects_personal_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_3__.SettingsApiService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], viewQuery: function ProfileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c5, 5, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.basic = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.additional = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.photo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.location = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.contact = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, decls: 34, vars: 1, consts: [[3, "headings"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "settings-tabs"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "nav-basic-tab", "data-bs-toggle", "tab", "data-bs-target", "#nav-basic", "type", "button", "role", "tab", "aria-controls", "nav-basic", "aria-selected", "true", 1, "nav-link", "active"], ["id", "nav-photo-tab", "data-bs-toggle", "tab", "data-bs-target", "#nav-photo", "type", "button", "role", "tab", "aria-controls", "nav-photo", "aria-selected", "false", 1, "nav-link"], ["id", "nav-bio-tab", "data-bs-toggle", "tab", "data-bs-target", "#nav-bio", "type", "button", "role", "tab", "aria-controls", "nav-bio", "aria-selected", "false", 1, "nav-link"], ["id", "nav-location-tab", "data-bs-toggle", "tab", "data-bs-target", "#nav-location", "type", "button", "role", "tab", "aria-controls", "nav-location", "aria-selected", "false", 1, "nav-link"], ["id", "nav-contact-tab", "data-bs-toggle", "tab", "data-bs-target", "#nav-contact", "type", "button", "role", "tab", "aria-controls", "nav-contact", "aria-selected", "false", 1, "nav-link"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-basic", "role", "tabpanel", "aria-labelledby", "nav-basic-tab", 1, "tab-pane", "fade", "show", "active"], ["basicComponentReference", ""], ["id", "nav-photo", "role", "tabpanel", "aria-labelledby", "nav-photo-tab", 1, "tab-pane", "fade"], ["photoComponentReference", ""], ["id", "nav-bio", "role", "tabpanel", "aria-labelledby", "nav-bio-tab", 1, "tab-pane", "fade"], ["additionalComponentReference", ""], ["id", "nav-location", "role", "tabpanel", "aria-labelledby", "nav-location-tab", 1, "tab-pane", "fade"], ["locationComponentReference", ""], ["id", "nav-contact", "role", "tabpanel", "aria-labelledby", "nav-contact-tab", 1, "tab-pane", "fade"], ["contactComponentReference", ""], ["connectionToastComponentReference", ""]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-module-topnav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " Basic Profle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " Profle Photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, " Bio Profle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, " Location Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, " Contact Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "app-basic", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "app-photo", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "app-additional", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "app-location", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "app-contact", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "app-connection-toast", null, 22);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("headings", ctx.navHeading);
    } }, directives: [_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_4__.ModuleTopnavComponent, _profile_content_basic_basic_component__WEBPACK_IMPORTED_MODULE_5__.BasicComponent, _profile_content_photo_photo_component__WEBPACK_IMPORTED_MODULE_6__.PhotoComponent, _profile_content_additional_additional_component__WEBPACK_IMPORTED_MODULE_7__.AdditionalComponent, _profile_content_location_location_component__WEBPACK_IMPORTED_MODULE_8__.LocationComponent, _profile_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent, _module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_0__.ConnectionToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 24955:
/*!**********************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/settings/settings.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-google-places-autocomplete */ 37544);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-charts */ 34459);
/* harmony import */ var _module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 15191);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ 56538);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ 76584);
/* harmony import */ var _profile_content_basic_basic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-content/basic/basic.component */ 62846);
/* harmony import */ var _profile_content_additional_additional_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-content/additional/additional.component */ 71271);
/* harmony import */ var _profile_content_photo_photo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-content/photo/photo.component */ 94730);
/* harmony import */ var _profile_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-content/contact/contact.component */ 94889);
/* harmony import */ var _profile_content_location_location_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile-content/location/location.component */ 8231);
/* harmony import */ var _all_accounts_all_accounts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./all-accounts/all-accounts.component */ 22949);
/* harmony import */ var _invitations_invitations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./invitations/invitations.component */ 61150);
/* harmony import */ var _view_invitation_view_invitation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-invitation/view-invitation.component */ 61002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1858);


















class SettingsModule {
}
SettingsModule.ɵfac = function SettingsModule_Factory(t) { return new (t || SettingsModule)(); };
SettingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__.GooglePlaceModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_17__.ChartsModule,
            _module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_1__.ModuleUtilitiesModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](SettingsModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__.SettingsComponent,
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent,
        _profile_content_basic_basic_component__WEBPACK_IMPORTED_MODULE_5__.BasicComponent,
        _profile_content_additional_additional_component__WEBPACK_IMPORTED_MODULE_6__.AdditionalComponent,
        _profile_content_photo_photo_component__WEBPACK_IMPORTED_MODULE_7__.PhotoComponent,
        _profile_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__.ContactComponent,
        _profile_content_location_location_component__WEBPACK_IMPORTED_MODULE_9__.LocationComponent,
        _all_accounts_all_accounts_component__WEBPACK_IMPORTED_MODULE_10__.AllAccountsComponent,
        _invitations_invitations_component__WEBPACK_IMPORTED_MODULE_11__.InvitationsComponent,
        _view_invitation_view_invitation_component__WEBPACK_IMPORTED_MODULE_12__.ViewInvitationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__.GooglePlaceModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_17__.ChartsModule,
        _module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_1__.ModuleUtilitiesModule] }); })();


/***/ }),

/***/ 56538:
/*!**********************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/settings/settings/settings.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../module-utilities/module-topnav/module-topnav.component */ 8972);


class SettingsComponent {
    constructor() {
        this.navHeading = [
            { text: "Settings", url: "/home/settings/dashboard" },
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
    } }, directives: [_module_utilities_module_topnav_module_topnav_component__WEBPACK_IMPORTED_MODULE_0__.ModuleTopnavComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 61002:
/*!************************************************************************************************************!*\
  !*** ./projects/personal/src/app/components/modules/settings/view-invitation/view-invitation.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewInvitationComponent": () => (/* binding */ ViewInvitationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 16448);
/* harmony import */ var projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../module-utilities/connection-toast/connection-toast.component */ 91580);
/* harmony import */ var projects_personal_src_app_services_user_user_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/personal/src/app/services/user/user-api/user-api.service */ 59475);
/* harmony import */ var projects_personal_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/personal/src/app/services/modules/settings-api/settings-api.service */ 40867);
/* harmony import */ var projects_restaurant_src_app_services_modules_admin_api_admin_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/restaurant/src/app/services/modules/admin-api/admin-api.service */ 11934);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);









const _c0 = ["editButtonElementReference"];
const _c1 = ["dismissButtonElementReference"];
const _c2 = ["connectionToastComponentReference"];
function ViewInvitationComponent_img_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r2.invitationData == null ? null : ctx_r2.invitationData.data().account.data.logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function ViewInvitationComponent_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 19);
} }
function ViewInvitationComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ViewInvitationComponent_div_37_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.updateInvitation("Accepted"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ViewInvitationComponent_div_37_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.updateInvitation("Declined"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Decline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ViewInvitationComponent {
    constructor(userApi, settingsApi, restaurantAdminApi) {
        this.userApi = userApi;
        this.settingsApi = settingsApi;
        this.restaurantAdminApi = restaurantAdminApi;
        this.updatedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.isUpdating = false;
    }
    ngOnInit() {
    }
    openModal(data) {
        console.log(data);
        this.invitationData = data;
        this.editButton.nativeElement.click();
    }
    updateInvitation(choice) {
        this.isUpdating = true;
        let data = { invitation_status: choice };
        this.settingsApi.updateInvitation(this.invitationData.id, data)
            .then((res) => {
            console.log(res);
            this.updatedEvent.emit();
            this.editButton.nativeElement.click();
            this.isUpdating = false;
        }, (err) => {
            console.log(err);
            this.isUpdating = false;
            this.connectionToast.openToast();
        });
        this.restaurantAdminApi.updateInvitation(this.invitationData.data().account_invitaion, data)
            .then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
        if (choice == "Accepted") {
            console.log("accepted invitation!");
            this.getUser();
        }
    }
    getUser() {
        this.userApi.getUser()
            .then((res) => {
            console.log(res);
            this.thisUser = res.data();
            this.createAccountUser();
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    createAccountUser() {
        let userData = {
            created_at: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),
            user: {
                id: localStorage.getItem('personal_id'),
                data: this.thisUser,
            },
            access_level: "Staff",
            account: {
                id: this.invitationData.data().account.id,
                data: this.invitationData.data().account.data,
            }
        };
        this.restaurantAdminApi.createAccountUser(userData)
            .then((res) => {
            console.log(res);
            this.createUserAccess(res.id);
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
    createUserAccess(accountUserId) {
        let accessData = {
            admin_access: false,
            customers_access: false,
            deliveries_access: false,
            kitchen_stock_access: false,
            menu_access: false,
            orders_access: false,
            payments_access: false,
            portal_access: false,
            roster_access: false,
            settings_access: false,
            staff_access: false,
            reservations_access: false,
            tables_access: false,
        };
        this.restaurantAdminApi.createUserAccess(accountUserId, accessData)
            .then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
            this.connectionToast.openToast();
        });
    }
}
ViewInvitationComponent.ɵfac = function ViewInvitationComponent_Factory(t) { return new (t || ViewInvitationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_personal_src_app_services_user_user_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__.UserApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_personal_src_app_services_modules_settings_api_settings_api_service__WEBPACK_IMPORTED_MODULE_3__.SettingsApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_restaurant_src_app_services_modules_admin_api_admin_api_service__WEBPACK_IMPORTED_MODULE_4__.AdminApiService)); };
ViewInvitationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ViewInvitationComponent, selectors: [["app-view-invitation"]], viewQuery: function ViewInvitationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.editButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.dismissButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.connectionToast = _t.first);
    } }, outputs: { updatedEvent: "updatedEvent" }, decls: 40, vars: 11, consts: [["data-bs-toggle", "modal", "data-bs-target", "#editItemModal", 3, "hidden"], ["editButtonElementReference", ""], ["id", "editItemModal", "tabindex", "-1", "aria-labelledby", "editItemModalLabel", "aria-hidden", "true", 1, "modal", "fade", "form-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "bg-light"], ["id", "editItemModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["dismissButtonElementReference", ""], [1, "modal-body", "text-center"], [1, "row", "mb-4"], [1, "col"], [1, "row", "mb-2"], ["alt", "", "width", "70", "height", "60", "class", "rounded", 3, "src", 4, "ngIf"], ["src", "../../../../../assets/images/utilities/logo-placeholder.jpg", "alt", "Company", "width", "70", "height", "60", "class", "rounded", 4, "ngIf"], [1, "row"], ["class", "row", 4, "ngIf"], ["connectionToastComponentReference", ""], ["alt", "", "width", "70", "height", "60", 1, "rounded", 3, "src"], ["src", "../../../../../assets/images/utilities/logo-placeholder.jpg", "alt", "Company", "width", "70", "height", "60", 1, "rounded"], [1, "btn", "btn-secondary", "page-add-btn", "m-1", 3, "click"]], template: function ViewInvitationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "View Invitation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Invitation Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ViewInvitationComponent_img_21_Template, 1, 1, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ViewInvitationComponent_img_22_Template, 1, 0, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Invitation Status :");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, ViewInvitationComponent_div_37_Template, 5, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "app-connection-toast", null, 17);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](18, 8, ctx.invitationData == null ? null : ctx.invitationData.data().created_at.toDate(), "MMMM d, y, hh:mm:ss a"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.invitationData == null ? null : ctx.invitationData.data().account.data.logo) != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.invitationData == null ? null : ctx.invitationData.data().account.data.logo) == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.invitationData == null ? null : ctx.invitationData.data().account.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.invitationData == null ? null : ctx.invitationData.data().account.data.location, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.invitationData == null ? null : ctx.invitationData.data().invitation_status, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.invitationData == null ? null : ctx.invitationData.data().invitation_status) == "Awaiting");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, projects_personal_src_app_components_module_utilities_connection_toast_connection_toast_component__WEBPACK_IMPORTED_MODULE_1__.ConnectionToastComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWludml0YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 64880:
/*!***********************************************************************************************!*\
  !*** ./projects/personal/src/app/pages/modules/settings-page/settings-page-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _settings_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-page.component */ 42724);
/* harmony import */ var _components_modules_settings_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/modules/settings/dashboard/dashboard.component */ 15191);
/* harmony import */ var _components_modules_settings_all_accounts_all_accounts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/modules/settings/all-accounts/all-accounts.component */ 22949);
/* harmony import */ var _components_modules_settings_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modules/settings/profile/profile.component */ 76584);
/* harmony import */ var _components_modules_settings_invitations_invitations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/modules/settings/invitations/invitations.component */ 61150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);








const routes = [
    {
        path: "",
        component: _settings_page_component__WEBPACK_IMPORTED_MODULE_0__.SettingsPageComponent,
        children: [
            { path: "", component: _components_modules_settings_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent },
            { path: "dashboard", component: _components_modules_settings_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent },
            { path: "profile", component: _components_modules_settings_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent },
            { path: "all-accounts", component: _components_modules_settings_all_accounts_all_accounts_component__WEBPACK_IMPORTED_MODULE_2__.AllAccountsComponent },
            { path: "invitations", component: _components_modules_settings_invitations_invitations_component__WEBPACK_IMPORTED_MODULE_4__.InvitationsComponent },
        ]
    }
];
class SettingsPageRoutingModule {
}
SettingsPageRoutingModule.ɵfac = function SettingsPageRoutingModule_Factory(t) { return new (t || SettingsPageRoutingModule)(); };
SettingsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SettingsPageRoutingModule });
SettingsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SettingsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 42724:
/*!******************************************************************************************!*\
  !*** ./projects/personal/src/app/pages/modules/settings-page/settings-page.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageComponent": () => (/* binding */ SettingsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../application/src/app/components/main-navbar/main-navbar/main-navbar.component */ 28088);
/* harmony import */ var _components_module_utilities_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/module-utilities/module-sidenav/module-sidenav.component */ 7632);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 869);




class SettingsPageComponent {
    constructor() {
        this.navLinks = [
            { text: "Profile", url: "/home/settings/profile", icon: "bi bi-person" },
            { text: "All Accounts", url: "/home/settings/all-accounts", icon: "bi bi-list-ul" },
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navBrand", "nR Personal")("source", "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navLinks", ctx.navLinks)("heading", "Settings");
    } }, directives: [_application_src_app_components_main_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_0__.MainNavbarComponent, _components_module_utilities_module_sidenav_module_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.ModuleSidenavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 93359:
/*!***************************************************************************************!*\
  !*** ./projects/personal/src/app/pages/modules/settings-page/settings-page.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _settings_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-page-routing.module */ 64880);
/* harmony import */ var projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/application/src/app/components/main-navbar/main-navbar.module */ 7264);
/* harmony import */ var _components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/module-utilities/module-utilities.module */ 45018);
/* harmony import */ var _components_modules_settings_settings_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modules/settings/settings.module */ 24955);
/* harmony import */ var _settings_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-page.component */ 42724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);







class SettingsPageModule {
}
SettingsPageModule.ɵfac = function SettingsPageModule_Factory(t) { return new (t || SettingsPageModule)(); };
SettingsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SettingsPageModule });
SettingsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _settings_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule,
            projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
            _components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
            _components_modules_settings_settings_module__WEBPACK_IMPORTED_MODULE_3__.SettingsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SettingsPageModule, { declarations: [_settings_page_component__WEBPACK_IMPORTED_MODULE_4__.SettingsPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _settings_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule,
        projects_application_src_app_components_main_navbar_main_navbar_module__WEBPACK_IMPORTED_MODULE_1__.MainNavbarModule,
        _components_module_utilities_module_utilities_module__WEBPACK_IMPORTED_MODULE_2__.ModuleUtilitiesModule,
        _components_modules_settings_settings_module__WEBPACK_IMPORTED_MODULE_3__.SettingsModule] }); })();


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

/***/ 3222:
/*!*************************************************************************!*\
  !*** ./node_modules/@firebase/storage-compat/dist/esm/index.esm2017.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerStorage": () => (/* binding */ registerStorage)
/* harmony export */ });
/* harmony import */ var _firebase_app_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app-compat */ 59072);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/storage */ 50517);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/component */ 29191);




/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class UploadTaskSnapshotCompat {
    constructor(_delegate, task, ref) {
        this._delegate = _delegate;
        this.task = task;
        this.ref = ref;
    }
    get bytesTransferred() {
        return this._delegate.bytesTransferred;
    }
    get metadata() {
        return this._delegate.metadata;
    }
    get state() {
        return this._delegate.state;
    }
    get totalBytes() {
        return this._delegate.totalBytes;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class UploadTaskCompat {
    constructor(_delegate, _ref) {
        this._delegate = _delegate;
        this._ref = _ref;
        this.cancel = this._delegate.cancel.bind(this._delegate);
        this.catch = this._delegate.catch.bind(this._delegate);
        this.pause = this._delegate.pause.bind(this._delegate);
        this.resume = this._delegate.resume.bind(this._delegate);
    }
    get snapshot() {
        return new UploadTaskSnapshotCompat(this._delegate.snapshot, this, this._ref);
    }
    then(onFulfilled, onRejected) {
        return this._delegate.then(snapshot => {
            if (onFulfilled) {
                return onFulfilled(new UploadTaskSnapshotCompat(snapshot, this, this._ref));
            }
        }, onRejected);
    }
    on(type, nextOrObserver, error, completed) {
        let wrappedNextOrObserver = undefined;
        if (!!nextOrObserver) {
            if (typeof nextOrObserver === 'function') {
                wrappedNextOrObserver = (taskSnapshot) => nextOrObserver(new UploadTaskSnapshotCompat(taskSnapshot, this, this._ref));
            }
            else {
                wrappedNextOrObserver = {
                    next: !!nextOrObserver.next
                        ? (taskSnapshot) => nextOrObserver.next(new UploadTaskSnapshotCompat(taskSnapshot, this, this._ref))
                        : undefined,
                    complete: nextOrObserver.complete || undefined,
                    error: nextOrObserver.error || undefined
                };
            }
        }
        return this._delegate.on(type, wrappedNextOrObserver, error || undefined, completed || undefined);
    }
}

class ListResultCompat {
    constructor(_delegate, _service) {
        this._delegate = _delegate;
        this._service = _service;
    }
    get prefixes() {
        return this._delegate.prefixes.map(ref => new ReferenceCompat(ref, this._service));
    }
    get items() {
        return this._delegate.items.map(ref => new ReferenceCompat(ref, this._service));
    }
    get nextPageToken() {
        return this._delegate.nextPageToken || null;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ReferenceCompat {
    constructor(_delegate, storage) {
        this._delegate = _delegate;
        this.storage = storage;
    }
    get name() {
        return this._delegate.name;
    }
    get bucket() {
        return this._delegate.bucket;
    }
    get fullPath() {
        return this._delegate.fullPath;
    }
    toString() {
        return this._delegate.toString();
    }
    /**
     * @returns A reference to the object obtained by
     * appending childPath, removing any duplicate, beginning, or trailing
     * slashes.
     */
    child(childPath) {
        const reference = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__._getChild)(this._delegate, childPath);
        return new ReferenceCompat(reference, this.storage);
    }
    get root() {
        return new ReferenceCompat(this._delegate.root, this.storage);
    }
    /**
     * @returns A reference to the parent of the
     * current object, or null if the current object is the root.
     */
    get parent() {
        const reference = this._delegate.parent;
        if (reference == null) {
            return null;
        }
        return new ReferenceCompat(reference, this.storage);
    }
    /**
     * Uploads a blob to this object's location.
     * @param data - The blob to upload.
     * @returns An UploadTask that lets you control and
     * observe the upload.
     */
    put(data, metadata) {
        this._throwIfRoot('put');
        return new UploadTaskCompat((0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.uploadBytesResumable)(this._delegate, data, metadata), this);
    }
    /**
     * Uploads a string to this object's location.
     * @param value - The string to upload.
     * @param format - The format of the string to upload.
     * @returns An UploadTask that lets you control and
     * observe the upload.
     */
    putString(value, format = _firebase_storage__WEBPACK_IMPORTED_MODULE_1__.StringFormat.RAW, metadata) {
        this._throwIfRoot('putString');
        const data = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__._dataFromString)(format, value);
        const metadataClone = Object.assign({}, metadata);
        if (metadataClone['contentType'] == null && data.contentType != null) {
            metadataClone['contentType'] = data.contentType;
        }
        return new UploadTaskCompat(new _firebase_storage__WEBPACK_IMPORTED_MODULE_1__._UploadTask(this._delegate, new _firebase_storage__WEBPACK_IMPORTED_MODULE_1__._FbsBlob(data.data, true), metadataClone), this);
    }
    /**
     * List all items (files) and prefixes (folders) under this storage reference.
     *
     * This is a helper method for calling list() repeatedly until there are
     * no more results. The default pagination size is 1000.
     *
     * Note: The results may not be consistent if objects are changed while this
     * operation is running.
     *
     * Warning: listAll may potentially consume too many resources if there are
     * too many results.
     *
     * @returns A Promise that resolves with all the items and prefixes under
     *  the current storage reference. `prefixes` contains references to
     *  sub-directories and `items` contains references to objects in this
     *  folder. `nextPageToken` is never returned.
     */
    listAll() {
        return (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.listAll)(this._delegate).then(r => new ListResultCompat(r, this.storage));
    }
    /**
     * List items (files) and prefixes (folders) under this storage reference.
     *
     * List API is only available for Firebase Rules Version 2.
     *
     * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
     * delimited folder structure. Refer to GCS's List API if you want to learn more.
     *
     * To adhere to Firebase Rules's Semantics, Firebase Storage does not
     * support objects whose paths end with "/" or contain two consecutive
     * "/"s. Firebase Storage List API will filter these unsupported objects.
     * list() may fail if there are too many unsupported objects in the bucket.
     *
     * @param options - See ListOptions for details.
     * @returns A Promise that resolves with the items and prefixes.
     * `prefixes` contains references to sub-folders and `items`
     * contains references to objects in this folder. `nextPageToken`
     * can be used to get the rest of the results.
     */
    list(options) {
        return (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.list)(this._delegate, options || undefined).then(r => new ListResultCompat(r, this.storage));
    }
    /**
     * A `Promise` that resolves with the metadata for this object. If this
     * object doesn't exist or metadata cannot be retreived, the promise is
     * rejected.
     */
    getMetadata() {
        return (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getMetadata)(this._delegate);
    }
    /**
     * Updates the metadata for this object.
     * @param metadata - The new metadata for the object.
     * Only values that have been explicitly set will be changed. Explicitly
     * setting a value to null will remove the metadata.
     * @returns A `Promise` that resolves
     * with the new metadata for this object.
     * @see firebaseStorage.Reference.prototype.getMetadata
     */
    updateMetadata(metadata) {
        return (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.updateMetadata)(this._delegate, metadata);
    }
    /**
     * @returns A `Promise` that resolves with the download
     * URL for this object.
     */
    getDownloadURL() {
        return (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getDownloadURL)(this._delegate);
    }
    /**
     * Deletes the object at this location.
     * @returns A `Promise` that resolves if the deletion succeeds.
     */
    delete() {
        this._throwIfRoot('delete');
        return (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.deleteObject)(this._delegate);
    }
    _throwIfRoot(name) {
        if (this._delegate._location.path === '') {
            throw (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__._invalidRootOperation)(name);
        }
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A service that provides firebaseStorage.Reference instances.
 * @param opt_url gs:// url to a custom Storage Bucket
 */
class StorageServiceCompat {
    constructor(app, _delegate) {
        this.app = app;
        this._delegate = _delegate;
    }
    get maxOperationRetryTime() {
        return this._delegate.maxOperationRetryTime;
    }
    get maxUploadRetryTime() {
        return this._delegate.maxUploadRetryTime;
    }
    /**
     * Returns a firebaseStorage.Reference for the given path in the default
     * bucket.
     */
    ref(path) {
        if (isUrl(path)) {
            throw (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__._invalidArgument)('ref() expected a child path but got a URL, use refFromURL instead.');
        }
        return new ReferenceCompat((0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.ref)(this._delegate, path), this);
    }
    /**
     * Returns a firebaseStorage.Reference object for the given absolute URL,
     * which must be a gs:// or http[s]:// URL.
     */
    refFromURL(url) {
        if (!isUrl(url)) {
            throw (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__._invalidArgument)('refFromURL() expected a full URL but got a child path, use ref() instead.');
        }
        try {
            _firebase_storage__WEBPACK_IMPORTED_MODULE_1__._Location.makeFromUrl(url, this._delegate.host);
        }
        catch (e) {
            throw (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__._invalidArgument)('refFromUrl() expected a valid full URL but got an invalid one.');
        }
        return new ReferenceCompat((0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.ref)(this._delegate, url), this);
    }
    setMaxUploadRetryTime(time) {
        this._delegate.maxUploadRetryTime = time;
    }
    setMaxOperationRetryTime(time) {
        this._delegate.maxOperationRetryTime = time;
    }
    useEmulator(host, port, options = {}) {
        (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_1__.connectStorageEmulator)(this._delegate, host, port, options);
    }
}
function isUrl(path) {
    return /^[A-Za-z]+:\/\//.test(path);
}

const name = "@firebase/storage-compat";
const version = "0.1.10";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type constant for Firebase Storage.
 */
const STORAGE_TYPE = 'storage-compat';
function factory(container, { instanceIdentifier: url }) {
    // Dependencies
    const app = container.getProvider('app-compat').getImmediate();
    const storageExp = container
        .getProvider('storage')
        .getImmediate({ identifier: url });
    const storageServiceCompat = new StorageServiceCompat(app, storageExp);
    return storageServiceCompat;
}
function registerStorage(instance) {
    const namespaceExports = {
        // no-inline
        TaskState: _firebase_storage__WEBPACK_IMPORTED_MODULE_1__._TaskState,
        TaskEvent: _firebase_storage__WEBPACK_IMPORTED_MODULE_1__._TaskEvent,
        StringFormat: _firebase_storage__WEBPACK_IMPORTED_MODULE_1__.StringFormat,
        Storage: StorageServiceCompat,
        Reference: ReferenceCompat
    };
    instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__.Component(STORAGE_TYPE, factory, "PUBLIC" /* PUBLIC */)
        .setServiceProps(namespaceExports)
        .setMultipleInstances(true));
    instance.registerVersion(name, version);
}
registerStorage(_firebase_app_compat__WEBPACK_IMPORTED_MODULE_0__.default);




/***/ })

}]);
//# sourceMappingURL=projects_personal_src_app_pages_modules_settings-page_settings-page_module_ts.js.map