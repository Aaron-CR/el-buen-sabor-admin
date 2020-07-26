// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://localhost:8080/api/v1',
  firebaseConfig: {
    apiKey: 'AIzaSyDZHRmttCMVr-usvy0A8poGxRDgglHfMBU',
    authDomain: 'elbuensabor-admin.firebaseapp.com',
    databaseURL: 'https://elbuensabor-admin.firebaseio.com',
    projectId: 'elbuensabor-admin',
    storageBucket: 'elbuensabor-admin.appspot.com',
    messagingSenderId: '984980672664',
    appId: '1:984980672664:web:0388ade6fe1721a84300ed',
    measurementId: 'G-3D6FX85VBR'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
