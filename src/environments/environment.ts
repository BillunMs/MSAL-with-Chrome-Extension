// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  messagesAPI_MS:'https://graph.microsoft.com/v1.0/me/messages',
  emailList:'https://billun.com/api/emails',
  categoriesAPI:'https://graph.microsoft.com/beta/me/outlook/masterCategories',
  sendDataBillun:'https://billun.com/api/Site/Declare'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
