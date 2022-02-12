// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  baseUrl: "http://localhost:8000/",                // url for application backend
  personalUrl: "http://localhost:8001/",            // url for personal backend
  restaurantUrl: "http://localhost:8002/",          // url for restaurant backend

  firebase: {
    apiKey: "AIzaSyC-pUZi6j5AecjEKiBaQL1nTZrKWB_J9w0",
    authDomain: "netrink-test-v1.firebaseapp.com",
    databaseURL: "https://netrink-test-v1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "netrink-test-v1",
    storageBucket: "netrink-test-v1.appspot.com",
    messagingSenderId: "140608103001",
    appId: "1:140608103001:web:b8cbede412b0a45d78c748",
    measurementId: "G-JYYP2YE5FW"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
