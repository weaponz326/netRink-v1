// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  baseUrl: "https://netrink-test-v1.web.app/",
  personalUrl: "https://netrink-test-personal-v1.web.app/",
  schoolUrl: "https://netrink-test-school-v1.web.app/",

  firebase: {
    apiKey: "xxxxx",
    authDomain: "xxxxx",
    databaseURL: "xxxxx",
    projectId: "xxxxx",
    storageBucket: "xxxxx",
    messagingSenderId: "xxxxx",
    appId: "xxxxx",
    measurementId: "xxxxx"
  },

  paystackPublicKey: "pk_test_275f8f544fab9c9c78a1e8789d8c883f0102f708",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
