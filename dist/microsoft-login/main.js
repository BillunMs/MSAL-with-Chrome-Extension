(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nurbe\projects\OpenAiBot\angular2\angular-msal-login-example\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    messagesAPI_MS: 'https://graph.microsoft.com/v1.0/me/messages',
    emailList: 'https://billun.com/api/emails',
    categoriesAPI: 'https://graph.microsoft.com/beta/me/outlook/masterCategories',
    sendDataBillun: 'https://billun.com/api/Site/Declare'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IBF5":
/*!**************************************************************!*\
  !*** ./src/app/restricted-page/restricted-page.component.ts ***!
  \**************************************************************/
/*! exports provided: RestrictedPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestrictedPageComponent", function() { return RestrictedPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @azure/msal-angular */ "E8bv");



class RestrictedPageComponent {
    constructor(authService) {
        this.authService = authService;
    }
    getName() {
        if (this.authService.instance.getActiveAccount() == null) {
            return 'unknown';
        }
        return this.authService.instance.getActiveAccount().name;
    }
    ngOnInit() {
    }
}
RestrictedPageComponent.ɵfac = function RestrictedPageComponent_Factory(t) { return new (t || RestrictedPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__["MsalService"])); };
RestrictedPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RestrictedPageComponent, selectors: [["app-restricted-page"]], decls: 4, vars: 1, template: function RestrictedPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "restricted-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.getName(), "!");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RyaWN0ZWQtcGFnZS9yZXN0cmljdGVkLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestrictedPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-restricted-page',
                templateUrl: './restricted-page.component.html',
                styleUrls: ['./restricted-page.component.css']
            }]
    }], function () { return [{ type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_1__["MsalService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/msal-angular */ "E8bv");
/* harmony import */ var _ms_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ms-email.service */ "vCx1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _billun_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./billun.service */ "d1BK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AppComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Se connecter avec Outlook");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Deconnecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.set(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Verifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_18_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Demarquer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(authService, msEmailService, http, billun) {
        this.authService = authService;
        this.msEmailService = msEmailService;
        this.http = http;
        this.billun = billun;
        this.title = 'My Microsoft Login- Example';
        this.checker = null;
        this.resp = null;
        this.signal = '';
    }
    ngOnInit() {
        this.authService.instance.handleRedirectPromise().then(res => {
            if (res != null && res.account != null) {
                this.authService.instance.setActiveAccount(res.account);
            }
        });
    }
    isLoggedIn() {
        return this.authService.instance.getActiveAccount() != null;
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authService.loginPopup()
                .subscribe((response) => {
                this.authService.instance.setActiveAccount(response.account);
            });
        });
    }
    logout() {
        this.authService.logout();
    }
    set() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.msEmailService.setCategoriesByEmails();
        });
    }
    reset() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.msEmailService.resetCategoriesByEmails();
        });
    }
    sendSignal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.signal === '') {
                alert('Donner le nom de site ou email');
                return;
            }
            yield this.billun.send(this.signal).then(() => { this.signal = ''; });
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ms_email_service__WEBPACK_IMPORTED_MODULE_3__["MsEmailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_billun_service__WEBPACK_IMPORTED_MODULE_5__["BillunService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 4, consts: [["id", "body"], [1, "relative", "bg-white", "px-6", "pt-10", "shadow-xl", "ring-1", "ring-gray-900/5", "sm:mx-auto", "sm:max-w-lg", "sm:rounded-lg", "sm:px-10"], [1, "mx-auto", "max-w-md"], [1, "flex", "justify-center"], ["src", "../assets/icones/icone_32-bleu.png", "alt", "Tailwind Play", 1, "h-8", "mt-1"], [1, "block", "text-3xl", "font-extrabold", "text-gray-900", "ml-4"], [1, "px-6", "py-4"], [1, "mt-1", "text-center", "text-gray-400"], ["method", "post"], [1, "w-full", "mt-4"], ["name", "signal", "id", "signal", "type", "text", "placeholder", "Url / Email", 1, "block", "w-full", "px-4", "py-2", "mt-2", "text-white", "border", "rounded-lg", "bg-gray-800", "border-gray-600", "placeholder-gray-400", "focus:border-blue-300", "focus:ring-opacity-40", "focus:outline-none", "focus:ring", "focus:ring-blue-300", 3, "ngModel", "ngModelChange"], [1, "flex", "items-center", "justify-between", "mt-4"], ["type", "submit", "id", "sendData", 1, "px-6", "py-2", "text-sm", "font-medium", "tracking-wide", "text-white", "capitalize", "transition-colors", "duration-300", "transform", "bg-blue-500", "rounded-lg", "hover:bg-blue-400", "focus:outline-none", "focus:ring", "focus:ring-blue-300", "focus:ring-opacity-50", 3, "click"], ["style", "display:inline-block", "class", "px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50", 3, "click", 4, "ngIf"], ["class", "px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50", 3, "click", 4, "ngIf"], ["class", "vertical-center", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-4", "text-center"], ["href", "https://Billun.com", "target", "_blank", 1, "mx-2", "text-sm", "font-bold", "text-blue-400", "hover:underline"], [1, "px-6", "py-2", "text-sm", "font-medium", "tracking-wide", "text-white", "capitalize", "transition-colors", "duration-300", "transform", "bg-blue-500", "rounded-lg", "hover:bg-blue-400", "focus:outline-none", "focus:ring", "focus:ring-blue-300", "focus:ring-opacity-50", 2, "display", "inline-block", 3, "click"], [1, "px-6", "py-2", "text-sm", "font-medium", "tracking-wide", "text-white", "capitalize", "transition-colors", "duration-300", "transform", "bg-blue-500", "rounded-lg", "hover:bg-blue-400", "focus:outline-none", "focus:ring", "focus:ring-blue-300", "focus:ring-opacity-50", 3, "click"], [1, "vertical-center"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Billun");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Signaler une url ou une adresse email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_12_listener($event) { return ctx.signal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener() { return ctx.sendSignal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Signaler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AppComponent_button_16_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AppComponent_button_17_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AppComponent_div_18_Template, 5, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "A propos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.signal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["#body[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n}\r\n\r\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\r\n  box-sizing: border-box;\r\n  \r\n  border-width: 0;\r\n  \r\n  border-style: solid;\r\n  \r\n  border-color: #e5e7eb;\r\n  \r\n}\r\n\r\n[_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\r\n  --tw-content: '';\r\n}\r\n\r\n\r\n\r\n.vertical-center[_ngcontent-%COMP%] {\r\n  padding-top: 1%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  line-height: 1.5;\r\n  \r\n  -webkit-text-size-adjust: 100%;\r\n  \r\n  -moz-tab-size: 4;\r\n  \r\n  tab-size: 4;\r\n  \r\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  \r\n  font-feature-settings: normal;\r\n  \r\n}\r\n\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  \r\n  line-height: inherit;\r\n  \r\n}\r\n\r\n\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  height: 0;\r\n  \r\n  color: inherit;\r\n  \r\n  border-top-width: 1px;\r\n  \r\n}\r\n\r\n\r\n\r\nabbr[_ngcontent-%COMP%]:where([title]) {\r\n  -webkit-text-decoration: underline dotted;\r\n          text-decoration: underline dotted;\r\n}\r\n\r\n\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  font-size: inherit;\r\n  font-weight: inherit;\r\n}\r\n\r\n\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n\r\n\r\n\r\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\r\n  font-weight: bolder;\r\n}\r\n\r\n\r\n\r\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\r\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\r\n  \r\n  font-size: 1em;\r\n  \r\n}\r\n\r\n\r\n\r\nsmall[_ngcontent-%COMP%] {\r\n  font-size: 80%;\r\n}\r\n\r\n\r\n\r\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub[_ngcontent-%COMP%] {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup[_ngcontent-%COMP%] {\r\n  top: -0.5em;\r\n}\r\n\r\n\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  text-indent: 0;\r\n  \r\n  border-color: inherit;\r\n  \r\n  border-collapse: collapse;\r\n  \r\n}\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  \r\n  font-size: 100%;\r\n  \r\n  font-weight: inherit;\r\n  \r\n  line-height: inherit;\r\n  \r\n  color: inherit;\r\n  \r\n  margin: 0;\r\n  \r\n  padding: 0;\r\n  \r\n}\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n  text-transform: none;\r\n}\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%], [type='button'][_ngcontent-%COMP%], [type='reset'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%] {\r\n  -webkit-appearance: button;\r\n  \r\n  background-color: transparent;\r\n  \r\n  background-image: none;\r\n  \r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]:-moz-focusring {\r\n  outline: auto;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]:-moz-ui-invalid {\r\n  box-shadow: none;\r\n}\r\n\r\n\r\n\r\nprogress[_ngcontent-%COMP%] {\r\n  vertical-align: baseline;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n\r\n\r\n[type='search'][_ngcontent-%COMP%] {\r\n  -webkit-appearance: textfield;\r\n  \r\n  outline-offset: -2px;\r\n  \r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\r\n  -webkit-appearance: button;\r\n  \r\n  font: inherit;\r\n  \r\n}\r\n\r\n\r\n\r\nsummary[_ngcontent-%COMP%] {\r\n  display: list-item;\r\n}\r\n\r\n\r\n\r\nblockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\nfieldset[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nlegend[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n  resize: vertical;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\r\n  opacity: 1;\r\n  \r\n  color: #9ca3af;\r\n  \r\n}\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%], [role=\"button\"][_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]:disabled {\r\n  cursor: default;\r\n}\r\n\r\n\r\n\r\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%] {\r\n  display: block;\r\n  \r\n  vertical-align: middle;\r\n  \r\n}\r\n\r\n\r\n\r\nimg[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n\r\n\r\n[hidden][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-backdrop {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n[_ngcontent-%COMP%]::backdrop {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n.relative[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.mx-auto[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.mx-2[_ngcontent-%COMP%] {\r\n  margin-left: 0.5rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.mb-4[_ngcontent-%COMP%] {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.ml-4[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.mt-1[_ngcontent-%COMP%] {\r\n  margin-top: 0.25rem;\r\n}\r\n\r\n.mt-4[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.mt-2[_ngcontent-%COMP%] {\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.block[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.flex[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.h-8[_ngcontent-%COMP%] {\r\n  height: 2rem;\r\n}\r\n\r\n.w-full[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.max-w-md[_ngcontent-%COMP%] {\r\n  max-width: 28rem;\r\n}\r\n\r\n.transform[_ngcontent-%COMP%] {\r\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r\n}\r\n\r\n.items-center[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\r\n\r\n.justify-center[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n}\r\n\r\n.justify-between[_ngcontent-%COMP%] {\r\n  justify-content: space-between;\r\n}\r\n\r\n.rounded-lg[_ngcontent-%COMP%] {\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.border[_ngcontent-%COMP%] {\r\n  border-width: 1px;\r\n}\r\n\r\n.border-gray-600[_ngcontent-%COMP%] {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%] {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-gray-800[_ngcontent-%COMP%] {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-blue-500[_ngcontent-%COMP%] {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\r\n}\r\n\r\n.px-6[_ngcontent-%COMP%] {\r\n  padding-left: 1.5rem;\r\n  padding-right: 1.5rem;\r\n}\r\n\r\n.py-4[_ngcontent-%COMP%] {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.px-4[_ngcontent-%COMP%] {\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.py-2[_ngcontent-%COMP%] {\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.pt-10[_ngcontent-%COMP%] {\r\n  padding-top: 2.5rem;\r\n}\r\n\r\n.pb-8[_ngcontent-%COMP%] {\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.text-center[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.text-3xl[_ngcontent-%COMP%] {\r\n  font-size: 1.875rem;\r\n  line-height: 2.25rem;\r\n}\r\n\r\n.text-sm[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n  line-height: 1.25rem;\r\n}\r\n\r\n.font-extrabold[_ngcontent-%COMP%] {\r\n  font-weight: 800;\r\n}\r\n\r\n.font-medium[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n}\r\n\r\n.font-bold[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\r\n\r\n.capitalize[_ngcontent-%COMP%] {\r\n  text-transform: capitalize;\r\n}\r\n\r\n.tracking-wide[_ngcontent-%COMP%] {\r\n  letter-spacing: 0.025em;\r\n}\r\n\r\n.text-gray-900[_ngcontent-%COMP%] {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(17 24 39 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-gray-400[_ngcontent-%COMP%] {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(156 163 175 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-gray-700[_ngcontent-%COMP%] {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(55 65 81 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-white[_ngcontent-%COMP%] {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-blue-400[_ngcontent-%COMP%] {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(96 165 250 / var(--tw-text-opacity));\r\n}\r\n\r\n.placeholder-gray-400[_ngcontent-%COMP%]::placeholder {\r\n  --tw-placeholder-opacity: 1;\r\n  color: rgb(156 163 175 / var(--tw-placeholder-opacity));\r\n}\r\n\r\n.shadow-xl[_ngcontent-%COMP%] {\r\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\r\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\r\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r\n}\r\n\r\n.ring-1[_ngcontent-%COMP%] {\r\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\r\n}\r\n\r\n.ring-gray-900\\/5[_ngcontent-%COMP%] {\r\n  --tw-ring-color: rgb(17 24 39 / 0.05);\r\n}\r\n\r\n.transition-colors[_ngcontent-%COMP%] {\r\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\r\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\r\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\r\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r\n  transition-duration: 150ms;\r\n}\r\n\r\n.duration-300[_ngcontent-%COMP%] {\r\n  transition-duration: 300ms;\r\n}\r\n\r\n.hover\\[_ngcontent-%COMP%]:bg-blue-400:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(96 165 250 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\[_ngcontent-%COMP%]:underline:hover {\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n}\r\n\r\n.focus\\[_ngcontent-%COMP%]:border-blue-300:focus {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(147 197 253 / var(--tw-border-opacity));\r\n}\r\n\r\n.focus\\[_ngcontent-%COMP%]:outline-none:focus {\r\n  outline: 2px solid transparent;\r\n  outline-offset: 2px;\r\n}\r\n\r\n.focus\\[_ngcontent-%COMP%]:ring:focus {\r\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\r\n}\r\n\r\n.focus\\[_ngcontent-%COMP%]:ring-blue-300:focus {\r\n  --tw-ring-opacity: 1;\r\n  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));\r\n}\r\n\r\n.focus\\[_ngcontent-%COMP%]:ring-opacity-40:focus {\r\n  --tw-ring-opacity: 0.4;\r\n}\r\n\r\n.focus\\[_ngcontent-%COMP%]:ring-opacity-50:focus {\r\n  --tw-ring-opacity: 0.5;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n  .sm\\[_ngcontent-%COMP%]:mx-auto {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n  .sm\\[_ngcontent-%COMP%]:max-w-lg {\r\n    max-width: 32rem;\r\n  }\r\n\r\n  .sm\\[_ngcontent-%COMP%]:rounded-lg {\r\n    border-radius: 0.5rem;\r\n  }\r\n\r\n  .sm\\[_ngcontent-%COMP%]:px-10 {\r\n    padding-left: 2.5rem;\r\n    padding-right: 2.5rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUVBQWlFOztBQUVqRTs7O0NBR0M7O0FBQ0Q7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsTUFBTTtFQUNOLGVBQWU7RUFDZixNQUFNO0VBQ04sbUJBQW1CO0VBQ25CLE1BQU07RUFDTixxQkFBcUI7RUFDckIsTUFBTTtBQUNSOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTs7Ozs7O0NBTUM7O0FBS0Q7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLDhCQUE4QjtFQUM5QixNQUFNO0VBQ04sZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixXQUFXO0VBQ1gsTUFBTTtFQUNOLDROQUE0TjtFQUM1TixNQUFNO0VBQ04sNkJBQTZCO0VBQzdCLE1BQU07QUFDUjs7QUFFQTs7O0NBR0M7O0FBRUQ7RUFDRSxTQUFTO0VBQ1QsTUFBTTtFQUNOLG9CQUFvQjtFQUNwQixNQUFNO0FBQ1I7O0FBRUE7Ozs7Q0FJQzs7QUFFRDtFQUNFLFNBQVM7RUFDVCxNQUFNO0VBQ04sY0FBYztFQUNkLE1BQU07RUFDTixxQkFBcUI7RUFDckIsTUFBTTtBQUNSOztBQUVBOztDQUVDOztBQUVEO0VBQ0UseUNBQXlDO1VBQ2pDLGlDQUFpQztBQUMzQzs7QUFFQTs7Q0FFQzs7QUFFRDs7Ozs7O0VBTUUsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTs7Q0FFQzs7QUFFRDtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7QUFDMUI7O0FBRUE7O0NBRUM7O0FBRUQ7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOzs7Q0FHQzs7QUFFRDs7OztFQUlFLCtHQUErRztFQUMvRyxNQUFNO0VBQ04sY0FBYztFQUNkLE1BQU07QUFDUjs7QUFFQTs7Q0FFQzs7QUFFRDtF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QUF3RDtBQUMxRDs7QUFFQTtFQUNFLHVDQUF1QztVQUMvQiwrQkFBK0I7QUFDekM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseURBQXlEO0FBQzNEOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJHQUEyRztFQUMzRyx5R0FBeUc7RUFDekcsNEZBQTRGO0FBQzlGOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDBEQUEwRDtBQUM1RDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixxQkFBcUI7RUFDdkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogISB0YWlsd2luZGNzcyB2My4yLjQgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tICovXHJcblxyXG4vKlxyXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxyXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcclxuKi9cclxuI2JvZHl7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbiosXHJcbjo6YmVmb3JlLFxyXG46OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8qIDEgKi9cclxuICBib3JkZXItd2lkdGg6IDA7XHJcbiAgLyogMiAqL1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLyogMiAqL1xyXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjtcclxuICAvKiAyICovXHJcbn1cclxuXHJcbjo6YmVmb3JlLFxyXG46OmFmdGVyIHtcclxuICAtLXR3LWNvbnRlbnQ6ICcnO1xyXG59XHJcblxyXG4vKlxyXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cclxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXHJcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXHJcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXHJcbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxyXG4qL1xyXG5cclxuXHJcblxyXG5cclxuLnZlcnRpY2FsLWNlbnRlciB7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAvKiAxICovXHJcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gIC8qIDIgKi9cclxuICAtbW96LXRhYi1zaXplOiA0O1xyXG4gIC8qIDMgKi9cclxuICB0YWItc2l6ZTogNDtcclxuICAvKiAzICovXHJcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xyXG4gIC8qIDQgKi9cclxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcclxuICAvKiA1ICovXHJcbn1cclxuXHJcbi8qXHJcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cclxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXHJcbiovXHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgLyogMSAqL1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIC8qIDIgKi9cclxufVxyXG5cclxuLypcclxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxyXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcclxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cclxuKi9cclxuXHJcbmhyIHtcclxuICBoZWlnaHQ6IDA7XHJcbiAgLyogMSAqL1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIC8qIDIgKi9cclxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcbiAgLyogMyAqL1xyXG59XHJcblxyXG4vKlxyXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cclxuKi9cclxuXHJcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xyXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xyXG59XHJcblxyXG4vKlxyXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxyXG4qL1xyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4vKlxyXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxyXG4qL1xyXG5cclxuYSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKlxyXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxyXG4qL1xyXG5cclxuYixcclxuc3Ryb25nIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4vKlxyXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxyXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXHJcbiovXHJcblxyXG5jb2RlLFxyXG5rYmQsXHJcbnNhbXAsXHJcbnByZSB7XHJcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcclxuICAvKiAxICovXHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgLyogMiAqL1xyXG59XHJcblxyXG4vKlxyXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cclxuKi9cclxuXHJcbnNtYWxsIHtcclxuICBmb250LXNpemU6IDgwJTtcclxufVxyXG5cclxuLypcclxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cclxuKi9cclxuXHJcbnN1Yixcclxuc3VwIHtcclxuICBmb250LXNpemU6IDc1JTtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG5zdWIge1xyXG4gIGJvdHRvbTogLTAuMjVlbTtcclxufVxyXG5cclxuc3VwIHtcclxuICB0b3A6IC0wLjVlbTtcclxufVxyXG5cclxuLypcclxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcclxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxyXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cclxuKi9cclxuXHJcbnRhYmxlIHtcclxuICB0ZXh0LWluZGVudDogMDtcclxuICAvKiAxICovXHJcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gIC8qIDIgKi9cclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIC8qIDMgKi9cclxufVxyXG5cclxuLypcclxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXHJcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cclxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXHJcbiovXHJcblxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5vcHRncm91cCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgLyogMSAqL1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICAvKiAxICovXHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgLyogMSAqL1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIC8qIDEgKi9cclxuICBjb2xvcjogaW5oZXJpdDtcclxuICAvKiAxICovXHJcbiAgbWFyZ2luOiAwO1xyXG4gIC8qIDIgKi9cclxuICBwYWRkaW5nOiAwO1xyXG4gIC8qIDMgKi9cclxufVxyXG5cclxuLypcclxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxyXG4qL1xyXG5cclxuYnV0dG9uLFxyXG5zZWxlY3Qge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4vKlxyXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxyXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxyXG4qL1xyXG5cclxuYnV0dG9uLFxyXG5bdHlwZT0nYnV0dG9uJ10sXHJcblt0eXBlPSdyZXNldCddLFxyXG5bdHlwZT0nc3VibWl0J10ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG4gIC8qIDEgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAvKiAyICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAvKiAyICovXHJcbn1cclxuXHJcbi8qXHJcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXHJcbiovXHJcblxyXG46LW1vei1mb2N1c3Jpbmcge1xyXG4gIG91dGxpbmU6IGF1dG87XHJcbn1cclxuXHJcbi8qXHJcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXHJcbiovXHJcblxyXG46LW1vei11aS1pbnZhbGlkIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4vKlxyXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cclxuKi9cclxuXHJcbnByb2dyZXNzIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi8qXHJcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cclxuKi9cclxuXHJcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8qXHJcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxyXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cclxuKi9cclxuXHJcblt0eXBlPSdzZWFyY2gnXSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgLyogMSAqL1xyXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xyXG4gIC8qIDIgKi9cclxufVxyXG5cclxuLypcclxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxyXG4qL1xyXG5cclxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi8qXHJcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cclxuKi9cclxuXHJcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG4gIC8qIDEgKi9cclxuICBmb250OiBpbmhlcml0O1xyXG4gIC8qIDIgKi9cclxufVxyXG5cclxuLypcclxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXHJcbiovXHJcblxyXG5zdW1tYXJ5IHtcclxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbn1cclxuXHJcbi8qXHJcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cclxuKi9cclxuXHJcbmJsb2NrcXVvdGUsXHJcbmRsLFxyXG5kZCxcclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNixcclxuaHIsXHJcbmZpZ3VyZSxcclxucCxcclxucHJlIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxubGVnZW5kIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5vbCxcclxudWwsXHJcbm1lbnUge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8qXHJcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxyXG4qL1xyXG5cclxudGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbi8qXHJcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXHJcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXHJcbiovXHJcblxyXG5pbnB1dDo6cGxhY2Vob2xkZXIsXHJcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAvKiAxICovXHJcbiAgY29sb3I6ICM5Y2EzYWY7XHJcbiAgLyogMiAqL1xyXG59XHJcblxyXG4vKlxyXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxyXG4qL1xyXG5cclxuYnV0dG9uLFxyXG5bcm9sZT1cImJ1dHRvblwiXSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKlxyXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxyXG4qL1xyXG5cclxuOmRpc2FibGVkIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi8qXHJcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcclxuMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXHJcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cclxuKi9cclxuXHJcbmltZyxcclxuc3ZnLFxyXG52aWRlbyxcclxuY2FudmFzLFxyXG5hdWRpbyxcclxuaWZyYW1lLFxyXG5lbWJlZCxcclxub2JqZWN0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvKiAxICovXHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAvKiAyICovXHJcbn1cclxuXHJcbi8qXHJcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcclxuKi9cclxuXHJcbmltZyxcclxudmlkZW8ge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIE1ha2UgZWxlbWVudHMgd2l0aCB0aGUgSFRNTCBoaWRkZW4gYXR0cmlidXRlIHN0YXkgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuXHJcbltoaWRkZW5dIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XHJcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xyXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcclxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xyXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XHJcbiAgLS10dy1yb3RhdGU6IDA7XHJcbiAgLS10dy1za2V3LXg6IDA7XHJcbiAgLS10dy1za2V3LXk6IDA7XHJcbiAgLS10dy1zY2FsZS14OiAxO1xyXG4gIC0tdHctc2NhbGUteTogMTtcclxuICAtLXR3LXBhbi14OiAgO1xyXG4gIC0tdHctcGFuLXk6ICA7XHJcbiAgLS10dy1waW5jaC16b29tOiAgO1xyXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xyXG4gIC0tdHctb3JkaW5hbDogIDtcclxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcclxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xyXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xyXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcclxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XHJcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xyXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XHJcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XHJcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcclxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XHJcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcclxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XHJcbiAgLS10dy1ibHVyOiAgO1xyXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcclxuICAtLXR3LWNvbnRyYXN0OiAgO1xyXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xyXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcclxuICAtLXR3LWludmVydDogIDtcclxuICAtLXR3LXNhdHVyYXRlOiAgO1xyXG4gIC0tdHctc2VwaWE6ICA7XHJcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcclxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xyXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xyXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xyXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcclxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xyXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1iYWNrZHJvcCB7XHJcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xyXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcclxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xyXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XHJcbiAgLS10dy1yb3RhdGU6IDA7XHJcbiAgLS10dy1za2V3LXg6IDA7XHJcbiAgLS10dy1za2V3LXk6IDA7XHJcbiAgLS10dy1zY2FsZS14OiAxO1xyXG4gIC0tdHctc2NhbGUteTogMTtcclxuICAtLXR3LXBhbi14OiAgO1xyXG4gIC0tdHctcGFuLXk6ICA7XHJcbiAgLS10dy1waW5jaC16b29tOiAgO1xyXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xyXG4gIC0tdHctb3JkaW5hbDogIDtcclxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcclxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xyXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xyXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcclxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XHJcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xyXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XHJcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XHJcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcclxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XHJcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcclxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XHJcbiAgLS10dy1ibHVyOiAgO1xyXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcclxuICAtLXR3LWNvbnRyYXN0OiAgO1xyXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xyXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcclxuICAtLXR3LWludmVydDogIDtcclxuICAtLXR3LXNhdHVyYXRlOiAgO1xyXG4gIC0tdHctc2VwaWE6ICA7XHJcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcclxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xyXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xyXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xyXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcclxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xyXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XHJcbn1cclxuXHJcbjo6YmFja2Ryb3Age1xyXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcclxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XHJcbiAgLS10dy10cmFuc2xhdGUteDogMDtcclxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xyXG4gIC0tdHctcm90YXRlOiAwO1xyXG4gIC0tdHctc2tldy14OiAwO1xyXG4gIC0tdHctc2tldy15OiAwO1xyXG4gIC0tdHctc2NhbGUteDogMTtcclxuICAtLXR3LXNjYWxlLXk6IDE7XHJcbiAgLS10dy1wYW4teDogIDtcclxuICAtLXR3LXBhbi15OiAgO1xyXG4gIC0tdHctcGluY2gtem9vbTogIDtcclxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcclxuICAtLXR3LW9yZGluYWw6ICA7XHJcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XHJcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcclxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcclxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XHJcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xyXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcclxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xyXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xyXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XHJcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xyXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XHJcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xyXG4gIC0tdHctYmx1cjogIDtcclxuICAtLXR3LWJyaWdodG5lc3M6ICA7XHJcbiAgLS10dy1jb250cmFzdDogIDtcclxuICAtLXR3LWdyYXlzY2FsZTogIDtcclxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XHJcbiAgLS10dy1pbnZlcnQ6ICA7XHJcbiAgLS10dy1zYXR1cmF0ZTogIDtcclxuICAtLXR3LXNlcGlhOiAgO1xyXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xyXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcclxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xyXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xyXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcclxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcclxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcclxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xyXG59XHJcblxyXG4ucmVsYXRpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm14LWF1dG8ge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLm14LTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuXHJcbi5tYi00IHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ubWwtNCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5tdC0xIHtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG59XHJcblxyXG4ubXQtNCB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLm10LTIge1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLmJsb2NrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5oLTgge1xyXG4gIGhlaWdodDogMnJlbTtcclxufVxyXG5cclxuLnctZnVsbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXgtdy1tZCB7XHJcbiAgbWF4LXdpZHRoOiAyOHJlbTtcclxufVxyXG5cclxuLnRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XHJcbn1cclxuXHJcbi5pdGVtcy1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5qdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5qdXN0aWZ5LWJldHdlZW4ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnJvdW5kZWQtbGcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbi5ib3JkZXItZ3JheS02MDAge1xyXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNzUgODUgOTkgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xyXG59XHJcblxyXG4uYmctd2hpdGUge1xyXG4gIC0tdHctYmctb3BhY2l0eTogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XHJcbn1cclxuXHJcbi5iZy1ncmF5LTgwMCB7XHJcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSA0MSA1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcclxufVxyXG5cclxuLmJnLWJsdWUtNTAwIHtcclxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XHJcbn1cclxuXHJcbi5weC02IHtcclxuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbi5weS00IHtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnB4LTQge1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4ucHktMiB7XHJcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4ucHQtMTAge1xyXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XHJcbn1cclxuXHJcbi5wYi04IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0LTN4bCB7XHJcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcclxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcclxufVxyXG5cclxuLnRleHQtc20ge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XHJcbn1cclxuXHJcbi5mb250LWV4dHJhYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmZvbnQtbWVkaXVtIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZm9udC1ib2xkIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uY2FwaXRhbGl6ZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi50cmFja2luZy13aWRlIHtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcclxufVxyXG5cclxuLnRleHQtZ3JheS05MDAge1xyXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiByZ2IoMTcgMjQgMzkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcclxufVxyXG5cclxuLnRleHQtZ3JheS00MDAge1xyXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiByZ2IoMTU2IDE2MyAxNzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcclxufVxyXG5cclxuLnRleHQtZ3JheS03MDAge1xyXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiByZ2IoNTUgNjUgODEgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcclxufVxyXG5cclxuLnRleHQtd2hpdGUge1xyXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcclxufVxyXG5cclxuLnRleHQtYmx1ZS00MDAge1xyXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiByZ2IoOTYgMTY1IDI1MCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xyXG59XHJcblxyXG4ucGxhY2Vob2xkZXItZ3JheS00MDA6OnBsYWNlaG9sZGVyIHtcclxuICAtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgY29sb3I6IHJnYigxNTYgMTYzIDE3NSAvIHZhcigtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHkpKTtcclxufVxyXG5cclxuLnNoYWRvdy14bCB7XHJcbiAgLS10dy1zaGFkb3c6IDAgMjBweCAyNXB4IC01cHggcmdiKDAgMCAwIC8gMC4xKSwgMCA4cHggMTBweCAtNnB4IHJnYigwIDAgMCAvIDAuMSk7XHJcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAyMHB4IDI1cHggLTVweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDhweCAxMHB4IC02cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xyXG59XHJcblxyXG4ucmluZy0xIHtcclxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcclxuICAtLXR3LXJpbmctc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCBjYWxjKDFweCArIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSkgdmFyKC0tdHctcmluZy1jb2xvcik7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCB2YXIoLS10dy1zaGFkb3csIDAgMCAjMDAwMCk7XHJcbn1cclxuXHJcbi5yaW5nLWdyYXktOTAwXFwvNSB7XHJcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoMTcgMjQgMzkgLyAwLjA1KTtcclxufVxyXG5cclxuLnRyYW5zaXRpb24tY29sb3JzIHtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCBmaWxsLCBzdHJva2UsIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvcjtcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcclxufVxyXG5cclxuLmR1cmF0aW9uLTMwMCB7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XHJcbn1cclxuXHJcbi5ob3ZlclxcOmJnLWJsdWUtNDAwOmhvdmVyIHtcclxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk2IDE2NSAyNTAgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XHJcbn1cclxuXHJcbi5ob3ZlclxcOnVuZGVybGluZTpob3ZlciB7XHJcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxufVxyXG5cclxuLmZvY3VzXFw6Ym9yZGVyLWJsdWUtMzAwOmZvY3VzIHtcclxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDE0NyAxOTcgMjUzIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcclxufVxyXG5cclxuLmZvY3VzXFw6b3V0bGluZS1ub25lOmZvY3VzIHtcclxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcclxufVxyXG5cclxuLmZvY3VzXFw6cmluZzpmb2N1cyB7XHJcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcik7XHJcbiAgLS10dy1yaW5nLXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygzcHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93LCAwIDAgIzAwMDApO1xyXG59XHJcblxyXG4uZm9jdXNcXDpyaW5nLWJsdWUtMzAwOmZvY3VzIHtcclxuICAtLXR3LXJpbmctb3BhY2l0eTogMTtcclxuICAtLXR3LXJpbmctY29sb3I6IHJnYigxNDcgMTk3IDI1MyAvIHZhcigtLXR3LXJpbmctb3BhY2l0eSkpO1xyXG59XHJcblxyXG4uZm9jdXNcXDpyaW5nLW9wYWNpdHktNDA6Zm9jdXMge1xyXG4gIC0tdHctcmluZy1vcGFjaXR5OiAwLjQ7XHJcbn1cclxuXHJcbi5mb2N1c1xcOnJpbmctb3BhY2l0eS01MDpmb2N1cyB7XHJcbiAgLS10dy1yaW5nLW9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XHJcbiAgLnNtXFw6bXgtYXV0byB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5zbVxcOm1heC13LWxnIHtcclxuICAgIG1heC13aWR0aDogMzJyZW07XHJcbiAgfVxyXG5cclxuICAuc21cXDpyb3VuZGVkLWxnIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gIC5zbVxcOnB4LTEwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMi41cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"] }, { type: _ms_email_service__WEBPACK_IMPORTED_MODULE_3__["MsEmailService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _billun_service__WEBPACK_IMPORTED_MODULE_5__["BillunService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MSALInstanceFactory, MSALInterceptorConfigFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSALInstanceFactory", function() { return MSALInstanceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSALInterceptorConfigFactory", function() { return MSALInterceptorConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/msal-angular */ "E8bv");
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @azure/msal-browser */ "u8tD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _public_page_public_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public-page/public-page.component */ "veZ/");
/* harmony import */ var _restricted_page_restricted_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./restricted-page/restricted-page.component */ "IBF5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_interceptors_retry_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/interceptors/retry.interceptor */ "uQUG");











function MSALInstanceFactory() {
    return new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__["PublicClientApplication"]({
        auth: {
            clientId: 'e986f0aa-665a-44f8-a0c4-32bf87cd31ec',
            redirectUri: 'chrome-extension://dkgendnilbddeonpljnopkmilbanmbfi/index.html'
        }
    });
}
function MSALInterceptorConfigFactory() {
    const protectedResourceMap = new Map();
    protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', ['user.read', 'mail.read']);
    protectedResourceMap.set('https://graph.microsoft.com/v1.0/me/messages', ['user.read', 'Mail.ReadBasic', 'APIConnectors.ReadWrite.All', 'Mail.ReadWrite', 'APIConnectors.Read.All', 'Mail.ReadWrite', 'Mail.ReadWrite.Shared']);
    protectedResourceMap.set('https://graph.microsoft.com/beta/me/outlook/masterCategories', ['user.read', 'Mail.ReadWrite', 'MailboxSettings.ReadWrite', 'MailboxSettings.Read']);
    protectedResourceMap.set('http://localhost:8080/hello', ['api://d16e1a06-3be2-4ae1-8bd4-718c19cecac3/hello']);
    return {
        interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__["InteractionType"].Popup,
        protectedResourceMap
    };
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MSAL_INSTANCE"],
            useFactory: MSALInstanceFactory
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalInterceptor"],
            multi: true
        },
        {
            provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MSAL_INSTANCE"],
            useFactory: MSALInstanceFactory
        }, {
            provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MSAL_INTERCEPTOR_CONFIG"],
            useFactory: MSALInterceptorConfigFactory
        },
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _core_interceptors_retry_interceptor__WEBPACK_IMPORTED_MODULE_9__["RetryInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _public_page_public_page_component__WEBPACK_IMPORTED_MODULE_6__["PublicPageComponent"],
        _restricted_page_restricted_page_component__WEBPACK_IMPORTED_MODULE_7__["RestrictedPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _public_page_public_page_component__WEBPACK_IMPORTED_MODULE_6__["PublicPageComponent"],
                    _restricted_page_restricted_page_component__WEBPACK_IMPORTED_MODULE_7__["RestrictedPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
                ],
                providers: [
                    {
                        provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MSAL_INSTANCE"],
                        useFactory: MSALInstanceFactory
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalInterceptor"],
                        multi: true
                    },
                    {
                        provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MSAL_INSTANCE"],
                        useFactory: MSALInstanceFactory
                    }, {
                        provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MSAL_INTERCEPTOR_CONFIG"],
                        useFactory: MSALInterceptorConfigFactory
                    },
                    _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: _core_interceptors_retry_interceptor__WEBPACK_IMPORTED_MODULE_9__["RetryInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "d1BK":
/*!***********************************!*\
  !*** ./src/app/billun.service.ts ***!
  \***********************************/
/*! exports provided: BillunService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillunService", function() { return BillunService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class BillunService {
    constructor(http) {
        this.http = http;
        this.sendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].sendDataBillun;
    }
    send(signal) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = {
                data: signal
            };
            const options = { headers: { 'Content-Type': 'application/json' } };
            return new Promise((resolve, reject) => {
                this.http.post(this.sendUrl, JSON.stringify(data), options).subscribe(data => {
                    data !== undefined ? resolve(data) : reject(data);
                });
            });
        });
    }
}
BillunService.ɵfac = function BillunService_Factory(t) { return new (t || BillunService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
BillunService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BillunService, factory: BillunService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BillunService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "uQUG":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/retry.interceptor.ts ***!
  \********************************************************/
/*! exports provided: RetryInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetryInterceptor", function() { return RetryInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




class RetryInterceptor {
    constructor() {
        this.retryDelay = 1500;
        this.retryMaxAttempts = 25;
    }
    retryAfterDelay() {
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(errors => {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((resp, count) => {
                // throw error when we've retried ${retryMaxAttempts} number of times and still get an error
                if (resp.status !== 429) {
                    return;
                }
                if (count === this.retryMaxAttempts) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(resp);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(resp).pipe(
                //tap(error => console.log(`Retrying ${error.url}. Retry count ${count + 1}`)),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(this.retryDelay)));
            }));
        });
    }
    intercept(request, next) {
        return next.handle(request).pipe(this.retryAfterDelay());
    }
}
RetryInterceptor.ɵfac = function RetryInterceptor_Factory(t) { return new (t || RetryInterceptor)(); };
RetryInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RetryInterceptor, factory: RetryInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RetryInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vCx1":
/*!*************************************!*\
  !*** ./src/app/ms-email.service.ts ***!
  \*************************************/
/*! exports provided: MsEmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsEmailService", function() { return MsEmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class MsEmailService {
    constructor(http) {
        this.http = http;
        this.messagesAPI_MS = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].messagesAPI_MS;
        this.emailList_API = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].emailList;
        this.catalog_API = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].categoriesAPI;
    }
    fetchMSMessages() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.http.get(this.messagesAPI_MS).subscribe(data => {
                    var arrRet = [];
                    var rawData = data['value'];
                    console.log(rawData, 'rawData messages');
                    if (rawData === undefined) {
                        reject();
                    }
                    rawData.forEach((element) => {
                        var formatedData = {
                            idMessage: element.id,
                            sender: element.sender.emailAddress.address,
                            categories: element.categories
                        };
                        arrRet.push(formatedData);
                    });
                    resolve(arrRet);
                });
            });
        });
    }
    fetchWrongEmails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.http.get(this.emailList_API).subscribe(data => {
                    data !== undefined ? resolve(data) : reject(data);
                });
            });
        });
    }
    createCategorie(categorieObj) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.http.post(this.catalog_API, categorieObj).subscribe(data => {
                    data !== undefined ? resolve(data) : reject(data);
                });
            });
        });
    }
    getCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.http.get(this.catalog_API).subscribe(data => {
                    var arr = [];
                    if (data === undefined) {
                        reject(data);
                    }
                    console.log(data, 'data');
                    var rawData = data['value'];
                    rawData.forEach((element) => {
                        var form = {
                            displayName: element.displayName,
                            color: element.color
                        };
                        arr.push(form);
                    });
                    resolve(rawData);
                });
            });
        });
    }
    initCategoriesStage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getCategories().then((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var tempArr = resp;
                var redColor = tempArr.filter((element) => {
                    if (element.displayName === 'Non verifié' && element.color == 'preset0') {
                        return true;
                    }
                });
                console.log(redColor, 'redColor');
                var greenColor = tempArr.filter((element) => {
                    if (element.displayName === 'Verifié' && element.color == 'preset4') {
                        return true;
                    }
                });
                if (redColor.length === 0) {
                    var categRed = { displayName: 'Non verifié', color: 'preset0' };
                    yield this.createCategorie(categRed).then(resp => console.log('Red categorie created', resp))
                        .catch(error => { console.log('Error red', error); });
                }
                if (greenColor.length === 0) {
                    var categRed = { displayName: 'Verifié', color: 'preset4' };
                    yield this.createCategorie(categRed).then(resp => console.log('Green categorie created', resp))
                        .catch(error => { console.log('Error green', error); });
                }
            }));
        });
    }
    setCategorieByMessage(message, categorie) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var idMessage = message.idMessage;
            var categObject = { categories: categorie };
            return new Promise((resolve, reject) => {
                this.http.patch(this.messagesAPI_MS + '/' + idMessage, categObject).subscribe(data => {
                    data !== undefined ? resolve(data) : reject(data);
                });
            });
        });
    }
    setCategoriesByEmails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var emails = [];
            var messages = [];
            var promises = [];
            var p1 = this.initCategoriesStage();
            var p2 = this.fetchWrongEmails().then(resp => { emails = resp; });
            var p3 = this.fetchMSMessages().then(resp => { messages = resp; });
            yield Promise.all([p1, p2, p3]);
            var hashMap = {};
            emails.forEach((email) => {
                hashMap[email] = true;
            });
            messages.forEach((message) => {
                console.log('message ', message);
                var tempArr = message.categories.map(element => {
                    return element;
                });
                var prom = null;
                let hasRedOrGreenCategorie = message.categories.filter(element => { if (element === 'Verifié' || element === 'Non verifié')
                    return true; }).length >= 1;
                if (hashMap[message.sender] !== undefined && !hasRedOrGreenCategorie) {
                    tempArr.push('Verifié');
                    prom = this.setCategorieByMessage(message, tempArr);
                }
                //Have to verify does message already have red or green categorie so we dont need to push usseles promises
                else if (hashMap[message.sender] === undefined && !hasRedOrGreenCategorie) {
                    tempArr.push('Non verifié');
                    prom = this.setCategorieByMessage(message, tempArr);
                }
                promises.push(prom);
            });
            return Promise.all(promises);
        });
    }
    resetCategoriesByEmails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var emails = [];
            var messages = [];
            var promises = [];
            var p1 = this.initCategoriesStage();
            var p2 = this.fetchWrongEmails().then(resp => { emails = resp; });
            var p3 = this.fetchMSMessages().then(resp => { messages = resp; });
            yield Promise.all([p1, p2, p3]);
            messages.forEach((message) => {
                var prom = null;
                var arr = message.categories.filter(categorie => {
                    if (categorie === 'Verifié' || categorie === "Non verifié")
                        return false;
                    return true;
                });
                prom = this.setCategorieByMessage(message, arr);
                promises.push(prom);
            });
            return Promise.all(promises);
        });
    }
}
MsEmailService.ɵfac = function MsEmailService_Factory(t) { return new (t || MsEmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MsEmailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MsEmailService, factory: MsEmailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MsEmailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "veZ/":
/*!******************************************************!*\
  !*** ./src/app/public-page/public-page.component.ts ***!
  \******************************************************/
/*! exports provided: PublicPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicPageComponent", function() { return PublicPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PublicPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
PublicPageComponent.ɵfac = function PublicPageComponent_Factory(t) { return new (t || PublicPageComponent)(); };
PublicPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicPageComponent, selectors: [["app-public-page"]], decls: 2, vars: 0, template: function PublicPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "public-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy1wYWdlL3B1YmxpYy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-public-page',
                templateUrl: './public-page.component.html',
                styleUrls: ['./public-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map