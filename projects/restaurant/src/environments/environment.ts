// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  baseUrl: "https://netrink-test-v1.web.app/",
  personalUrl: "https://netrink-test-personal-v1.web.app/",
  restaurantUrl: "https://netrink-test-restaurant-v1.web.app/",

  firebase: {
    apiKey: "AIzaSyC-pUZi6j5AecjEKiBaQL1nTZrKWB_J9w0",
    authDomain: "netrink-test-v1.firebaseapp.com",
    databaseURL: "https://netrink-test-v1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "netrink-test-v1",
    storageBucket: "netrink-test-v1.appspot.com",
    messagingSenderId: "140608103001",
    appId: "1:140608103001:web:b8cbede412b0a45d78c748",
    measurementId: "G-JYYP2YE5FW"
  },

  paystackTestPublicKey: "pk_test_275f8f544fab9c9c78a1e8789d8c883f0102f708",
  paystackLivePublicKey: "pk_live_921d89f7a824979fe69d35154cce546431f15d7b",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
