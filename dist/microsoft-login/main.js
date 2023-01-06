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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["#body[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n}\r\n\r\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\r\n  box-sizing: border-box;\r\n  \r\n  border-width: 0;\r\n  \r\n  border-style: solid;\r\n  \r\n  border-color: #e5e7eb;\r\n  \r\n}\r\n\r\n[_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\r\n  --tw-content: '';\r\n}\r\n\r\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-backdrop {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n[_ngcontent-%COMP%]::backdrop {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n.relative[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.mx-auto[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.mx-2[_ngcontent-%COMP%] {\r\n  margin-left: 0.5rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.mb-4[_ngcontent-%COMP%] {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.ml-4[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.mt-1[_ngcontent-%COMP%] {\r\n  margin-top: 0.25rem;\r\n}\r\n\r\n.mt-4[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.mt-2[_ngcontent-%COMP%] {\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.block[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.flex[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.h-8[_ngcontent-%COMP%] {\r\n  height: 2rem;\r\n}\r\n\r\n.w-full[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.max-w-md[_ngcontent-%COMP%] {\r\n  max-width: 28rem;\r\n}\r\n\r\n.transform[_ngcontent-%COMP%] {\r\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r\n}\r\n\r\n.items-center[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\r\n\r\n.justify-center[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n}\r\n\r\n.justify-between[_ngcontent-%COMP%] {\r\n  justify-content: space-between;\r\n}\r\n\r\n.rounded-lg[_ngcontent-%COMP%] {\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.border[_ngcontent-%COMP%] {\r\n  border-width: 1px;\r\n}\r\n\r\n.border-gray-600[_ngcontent-%COMP%] {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%] {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-gray-800[_ngcontent-%COMP%] {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-blue-500[_ngcontent-%COMP%] {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\r\n}\r\n\r\n.px-6[_ngcontent-%COMP%] {\r\n  padding-left: 1.5rem;\r\n  padding-right: 1.5rem;\r\n}\r\n\r\n.py-4[_ngcontent-%COMP%] {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.px-4[_ngcontent-%COMP%] {\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.py-2[_ngcontent-%COMP%] {\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.pt-10[_ngcontent-%COMP%] {\r\n  padding-top: 2.5rem;\r\n}\r\n\r\n.pb-8[_ngcontent-%COMP%] {\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.text-center[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.text-3xl[_ngcontent-%COMP%] {\r\n  font-size: 1.875rem;\r\n  line-height: 2.25rem;\r\n}\r\n\r\n.text-sm[_ngcontent-%COMP%] {\r\n  font-size: 0.875rem;\r\n  line-height: 1.25rem;\r\n}\r\n\r\n.font-extrabold[_ngcontent-%COMP%] {\r\n  font-weight: 800;\r\n}\r\n\r\n.font-medium[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n}\r\n\r\n.font-bold[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\r\n\r\n.capitalize[_ngcontent-%COMP%] {\r\n  text-transform: capitalize;\r\n}\r\n\r\n.tracking-wide[_ngcontent-%COMP%] {\r\n  letter-spacing: 0.025em;\r\n}\r\n\r\n.text-gray-900[_ngcontent-%COMP%] {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(17 24 39 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-gray-400[_ngcontent-%COMP%] {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(156 163 175 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-gray-700[_ngcontent-%COMP%] {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(55 65 81 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-white[_ngcontent-%COMP%] {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-blue-400[_ngcontent-%COMP%] {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(96 165 250 / var(--tw-text-opacity));\r\n}\r\n\r\n.placeholder-gray-400[_ngcontent-%COMP%]::placeholder {\r\n  --tw-placeholder-opacity: 1;\r\n  color: rgb(156 163 175 / var(--tw-placeholder-opacity));\r\n}\r\n\r\n.shadow-xl[_ngcontent-%COMP%] {\r\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\r\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\r\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r\n}\r\n\r\n.ring-1[_ngcontent-%COMP%] {\r\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\r\n}\r\n\r\n.ring-gray-900\\/5[_ngcontent-%COMP%] {\r\n  --tw-ring-color: rgb(17 24 39 / 0.05);\r\n}\r\n\r\n.transition-colors[_ngcontent-%COMP%] {\r\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\r\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\r\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\r\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r\n  transition-duration: 150ms;\r\n}\r\n\r\n.duration-300[_ngcontent-%COMP%] {\r\n  transition-duration: 300ms;\r\n}\r\n\r\n.hover\\[_ngcontent-%COMP%]:bg-blue-400:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(96 165 250 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\[_ngcontent-%COMP%]:underline:hover {\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n}\r\n\r\n.focus\\[_ngcontent-%COMP%]:border-blue-300:focus {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(147 197 253 / var(--tw-border-opacity));\r\n}\r\n\r\n.focus\\[_ngcontent-%COMP%]:outline-none:focus {\r\n  outline: 2px solid transparent;\r\n  outline-offset: 2px;\r\n}\r\n\r\n.focus\\[_ngcontent-%COMP%]:ring:focus {\r\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\r\n}\r\n\r\n.focus\\[_ngcontent-%COMP%]:ring-blue-300:focus {\r\n  --tw-ring-opacity: 1;\r\n  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));\r\n}\r\n\r\n.focus\\[_ngcontent-%COMP%]:ring-opacity-40:focus {\r\n  --tw-ring-opacity: 0.4;\r\n}\r\n\r\n.focus\\[_ngcontent-%COMP%]:ring-opacity-50:focus {\r\n  --tw-ring-opacity: 0.5;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n  .sm\\[_ngcontent-%COMP%]:mx-auto {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n  .sm\\[_ngcontent-%COMP%]:max-w-lg {\r\n    max-width: 32rem;\r\n  }\r\n\r\n  .sm\\[_ngcontent-%COMP%]:rounded-lg {\r\n    border-radius: 0.5rem;\r\n  }\r\n\r\n  .sm\\[_ngcontent-%COMP%]:px-10 {\r\n    padding-left: 2.5rem;\r\n    padding-right: 2.5rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUVBQWlFOztBQUVqRTs7O0NBR0M7O0FBQ0Q7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsTUFBTTtFQUNOLGVBQWU7RUFDZixNQUFNO0VBQ04sbUJBQW1CO0VBQ25CLE1BQU07RUFDTixxQkFBcUI7RUFDckIsTUFBTTtBQUNSOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNDQUFzQztFQUN0QyxrQ0FBa0M7RUFDbEMsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtF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QiwwREFBMEQ7QUFDNUQ7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIscUJBQXFCO0VBQ3ZCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICEgdGFpbHdpbmRjc3MgdjMuMi40IHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbSAqL1xyXG5cclxuLypcclxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcclxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXHJcbiovXHJcbiNib2R5e1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4qLFxyXG46OmJlZm9yZSxcclxuOjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvKiAxICovXHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIC8qIDIgKi9cclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC8qIDIgKi9cclxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7XHJcbiAgLyogMiAqL1xyXG59XHJcblxyXG46OmJlZm9yZSxcclxuOjphZnRlciB7XHJcbiAgLS10dy1jb250ZW50OiAnJztcclxufVxyXG5cclxuXHJcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcclxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XHJcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xyXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XHJcbiAgLS10dy10cmFuc2xhdGUteTogMDtcclxuICAtLXR3LXJvdGF0ZTogMDtcclxuICAtLXR3LXNrZXcteDogMDtcclxuICAtLXR3LXNrZXcteTogMDtcclxuICAtLXR3LXNjYWxlLXg6IDE7XHJcbiAgLS10dy1zY2FsZS15OiAxO1xyXG4gIC0tdHctcGFuLXg6ICA7XHJcbiAgLS10dy1wYW4teTogIDtcclxuICAtLXR3LXBpbmNoLXpvb206ICA7XHJcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XHJcbiAgLS10dy1vcmRpbmFsOiAgO1xyXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xyXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XHJcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XHJcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xyXG4gIC0tdHctcmluZy1pbnNldDogIDtcclxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XHJcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcclxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcclxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xyXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcclxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xyXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcclxuICAtLXR3LWJsdXI6ICA7XHJcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xyXG4gIC0tdHctY29udHJhc3Q6ICA7XHJcbiAgLS10dy1ncmF5c2NhbGU6ICA7XHJcbiAgLS10dy1odWUtcm90YXRlOiAgO1xyXG4gIC0tdHctaW52ZXJ0OiAgO1xyXG4gIC0tdHctc2F0dXJhdGU6ICA7XHJcbiAgLS10dy1zZXBpYTogIDtcclxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xyXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcclxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcclxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcclxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xyXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcclxufVxyXG5cclxuOjotd2Via2l0LWJhY2tkcm9wIHtcclxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XHJcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xyXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XHJcbiAgLS10dy10cmFuc2xhdGUteTogMDtcclxuICAtLXR3LXJvdGF0ZTogMDtcclxuICAtLXR3LXNrZXcteDogMDtcclxuICAtLXR3LXNrZXcteTogMDtcclxuICAtLXR3LXNjYWxlLXg6IDE7XHJcbiAgLS10dy1zY2FsZS15OiAxO1xyXG4gIC0tdHctcGFuLXg6ICA7XHJcbiAgLS10dy1wYW4teTogIDtcclxuICAtLXR3LXBpbmNoLXpvb206ICA7XHJcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XHJcbiAgLS10dy1vcmRpbmFsOiAgO1xyXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xyXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XHJcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XHJcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xyXG4gIC0tdHctcmluZy1pbnNldDogIDtcclxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XHJcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcclxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcclxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xyXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcclxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xyXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcclxuICAtLXR3LWJsdXI6ICA7XHJcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xyXG4gIC0tdHctY29udHJhc3Q6ICA7XHJcbiAgLS10dy1ncmF5c2NhbGU6ICA7XHJcbiAgLS10dy1odWUtcm90YXRlOiAgO1xyXG4gIC0tdHctaW52ZXJ0OiAgO1xyXG4gIC0tdHctc2F0dXJhdGU6ICA7XHJcbiAgLS10dy1zZXBpYTogIDtcclxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xyXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcclxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcclxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcclxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xyXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcclxufVxyXG5cclxuOjpiYWNrZHJvcCB7XHJcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xyXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcclxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xyXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XHJcbiAgLS10dy1yb3RhdGU6IDA7XHJcbiAgLS10dy1za2V3LXg6IDA7XHJcbiAgLS10dy1za2V3LXk6IDA7XHJcbiAgLS10dy1zY2FsZS14OiAxO1xyXG4gIC0tdHctc2NhbGUteTogMTtcclxuICAtLXR3LXBhbi14OiAgO1xyXG4gIC0tdHctcGFuLXk6ICA7XHJcbiAgLS10dy1waW5jaC16b29tOiAgO1xyXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xyXG4gIC0tdHctb3JkaW5hbDogIDtcclxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcclxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xyXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xyXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcclxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XHJcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xyXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XHJcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XHJcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcclxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XHJcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcclxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XHJcbiAgLS10dy1ibHVyOiAgO1xyXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcclxuICAtLXR3LWNvbnRyYXN0OiAgO1xyXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xyXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcclxuICAtLXR3LWludmVydDogIDtcclxuICAtLXR3LXNhdHVyYXRlOiAgO1xyXG4gIC0tdHctc2VwaWE6ICA7XHJcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcclxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xyXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XHJcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xyXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xyXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcclxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xyXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XHJcbn1cclxuXHJcbi5yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubXgtYXV0byB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubXgtMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLm1iLTQge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5tbC00IHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLm10LTEge1xyXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5tdC00IHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4ubXQtMiB7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4uYmxvY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmgtOCB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4udy1mdWxsIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1heC13LW1kIHtcclxuICBtYXgtd2lkdGg6IDI4cmVtO1xyXG59XHJcblxyXG4udHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcclxufVxyXG5cclxuLml0ZW1zLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmp1c3RpZnktY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmp1c3RpZnktYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucm91bmRlZC1sZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxufVxyXG5cclxuLmJvcmRlci1ncmF5LTYwMCB7XHJcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcclxuICBib3JkZXItY29sb3I6IHJnYig3NSA4NSA5OSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XHJcbn1cclxuXHJcbi5iZy13aGl0ZSB7XHJcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcclxufVxyXG5cclxuLmJnLWdyYXktODAwIHtcclxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxIDQxIDU1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xyXG59XHJcblxyXG4uYmctYmx1ZS01MDAge1xyXG4gIC0tdHctYmctb3BhY2l0eTogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcclxufVxyXG5cclxuLnB4LTYge1xyXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuLnB5LTQge1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ucHgtNCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5weS0yIHtcclxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5wdC0xMCB7XHJcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcclxufVxyXG5cclxuLnBiLTgge1xyXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtM3hsIHtcclxuICBmb250LXNpemU6IDEuODc1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xyXG59XHJcblxyXG4udGV4dC1zbSB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcclxufVxyXG5cclxuLmZvbnQtZXh0cmFib2xkIHtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uZm9udC1tZWRpdW0ge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5mb250LWJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5jYXBpdGFsaXplIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLnRyYWNraW5nLXdpZGUge1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xyXG59XHJcblxyXG4udGV4dC1ncmF5LTkwMCB7XHJcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XHJcbiAgY29sb3I6IHJnYigxNyAyNCAzOSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xyXG59XHJcblxyXG4udGV4dC1ncmF5LTQwMCB7XHJcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XHJcbiAgY29sb3I6IHJnYigxNTYgMTYzIDE3NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xyXG59XHJcblxyXG4udGV4dC1ncmF5LTcwMCB7XHJcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XHJcbiAgY29sb3I6IHJnYig1NSA2NSA4MSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xyXG59XHJcblxyXG4udGV4dC13aGl0ZSB7XHJcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XHJcbiAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xyXG59XHJcblxyXG4udGV4dC1ibHVlLTQwMCB7XHJcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XHJcbiAgY29sb3I6IHJnYig5NiAxNjUgMjUwIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XHJcbn1cclxuXHJcbi5wbGFjZWhvbGRlci1ncmF5LTQwMDo6cGxhY2Vob2xkZXIge1xyXG4gIC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICBjb2xvcjogcmdiKDE1NiAxNjMgMTc1IC8gdmFyKC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eSkpO1xyXG59XHJcblxyXG4uc2hhZG93LXhsIHtcclxuICAtLXR3LXNoYWRvdzogMCAyMHB4IDI1cHggLTVweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDhweCAxMHB4IC02cHggcmdiKDAgMCAwIC8gMC4xKTtcclxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDIwcHggMjVweCAtNXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgOHB4IDEwcHggLTZweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XHJcbn1cclxuXHJcbi5yaW5nLTEge1xyXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkgdmFyKC0tdHctcmluZy1vZmZzZXQtY29sb3IpO1xyXG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMXB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3cpLCB2YXIoLS10dy1yaW5nLXNoYWRvdyksIHZhcigtLXR3LXNoYWRvdywgMCAwICMwMDAwKTtcclxufVxyXG5cclxuLnJpbmctZ3JheS05MDBcXC81IHtcclxuICAtLXR3LXJpbmctY29sb3I6IHJnYigxNyAyNCAzOSAvIDAuMDUpO1xyXG59XHJcblxyXG4udHJhbnNpdGlvbi1jb2xvcnMge1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGZpbGwsIHN0cm9rZSwgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2U7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xyXG59XHJcblxyXG4uZHVyYXRpb24tMzAwIHtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcclxufVxyXG5cclxuLmhvdmVyXFw6YmctYmx1ZS00MDA6aG92ZXIge1xyXG4gIC0tdHctYmctb3BhY2l0eTogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYgMTY1IDI1MCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcclxufVxyXG5cclxuLmhvdmVyXFw6dW5kZXJsaW5lOmhvdmVyIHtcclxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uZm9jdXNcXDpib3JkZXItYmx1ZS0zMDA6Zm9jdXMge1xyXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTQ3IDE5NyAyNTMgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xyXG59XHJcblxyXG4uZm9jdXNcXDpvdXRsaW5lLW5vbmU6Zm9jdXMge1xyXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xyXG59XHJcblxyXG4uZm9jdXNcXDpyaW5nOmZvY3VzIHtcclxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcclxuICAtLXR3LXJpbmctc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCBjYWxjKDNweCArIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSkgdmFyKC0tdHctcmluZy1jb2xvcik7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCB2YXIoLS10dy1zaGFkb3csIDAgMCAjMDAwMCk7XHJcbn1cclxuXHJcbi5mb2N1c1xcOnJpbmctYmx1ZS0zMDA6Zm9jdXMge1xyXG4gIC0tdHctcmluZy1vcGFjaXR5OiAxO1xyXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDE0NyAxOTcgMjUzIC8gdmFyKC0tdHctcmluZy1vcGFjaXR5KSk7XHJcbn1cclxuXHJcbi5mb2N1c1xcOnJpbmctb3BhY2l0eS00MDpmb2N1cyB7XHJcbiAgLS10dy1yaW5nLW9wYWNpdHk6IDAuNDtcclxufVxyXG5cclxuLmZvY3VzXFw6cmluZy1vcGFjaXR5LTUwOmZvY3VzIHtcclxuICAtLXR3LXJpbmctb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuICAuc21cXDpteC1hdXRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnNtXFw6bWF4LXctbGcge1xyXG4gICAgbWF4LXdpZHRoOiAzMnJlbTtcclxuICB9XHJcblxyXG4gIC5zbVxcOnJvdW5kZWQtbGcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLnNtXFw6cHgtMTAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @azure/msal-browser */ "Czdx");
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
            //redirectUri: 'chrome-extension://dkgendnilbddeonpljnopkmilbanmbfi/index.html'
            redirectUri: 'http://localhost:4200'
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