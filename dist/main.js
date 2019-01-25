(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  mat-sidenav {\r\n    display: flex;\r\n    overflow: visible;\r\n  }\r\n</style>\r\n<mat-sidenav-container>\r\n  <mat-sidenav mode=\"side\" opened=\"false\">Side menu</mat-sidenav>\r\n  <header>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-7\">\r\n          <div class=\"logo align-middle\">\r\n            <a target=\"_blank\" href=\"http://jsdaddy.io/\"><img src=\"assets/img/logo.png\" alt=\"jsdaddy\"></a>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-5\">\r\n          <h1 class=\"title\">\r\n            <span class=\"jq-label\">Angular</span>\r\n            <span class=\"plugin-name\">Mask Plugin</span>\r\n          </h1>\r\n          <span class=\"subtitle\">Angular Plugin to make masks on form fields and html elements.</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"mat-grid-wr\">\r\n          <mat-grid-list cols=\"1\" rowHeight=\"55px\">\r\n            <mat-grid-tile>\r\n              <mat-toolbar>\r\n                <span>Examples</span>\r\n              </mat-toolbar>\r\n            </mat-grid-tile>\r\n          </mat-grid-list>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"mat-card-wr\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <mat-card-title>Mask common case</mat-card-title>\r\n              <mat-card-subtitle>An case of date mask</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <br>\r\n              <div class=\"flex-row\">\r\n                <div class=\"flex-cell\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Date\" mask=\"00/00/0000\" [formControl]=\"formDate\" [(ngModel)]=\"formModelDate\">\r\n                    <mat-hint> <b>Mask:</b> \"00/00/0000\" </mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"flex-cell\">\r\n                  <p><b>FormControl:</b> {{ formDate.value ? formDate.value: 'Empty' }}</p>\r\n                  <p><b>NgModel:</b> {{ formModelDate ? formModelDate: 'Empty' }}</p>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"mat-card-wr\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <mat-card-title>Other common cases</mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div class=\"row\">\r\n                <div class=\"col-mat-3\">\r\n                  <div class=\"mat-form-wr\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Date and Hour\" mask=\"00/00/00 00:00:00\">\r\n                      <mat-hint> <b>Mask:</b> 00/00/00 00:00:00</mat-hint>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-mat-3\">\r\n                  <div class=\"mat-form-wr\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Hour\" mask=\"00:00:00\">\r\n                      <mat-hint> <b>Mask:</b> 00:00:00</mat-hint>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-mat-3\">\r\n                    <div class=\"mat-form-wr\">\r\n                      <mat-form-field>\r\n                        <input matInput placeholder=\"Valid 24 hour format\" mask=\"Hh:m0:s0\">\r\n                        <mat-hint> <b>Mask:</b> Hh:m0:s0</mat-hint>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                <div class=\"col-mat-3\">\r\n                  <div class=\"mat-form-wr\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Mixed Type\" mask=\"AAA 000-S0S\">\r\n                      <mat-hint> <b>Mask:</b> AAA 000-S0S</mat-hint>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-mat-3\">\r\n                  <div class=\"mat-form-wr\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Valid date and month\" mask=\"d0/m0/0000\" [dropSpecialCharacters]=\"true\">\r\n                      <mat-hint> <b>Mask:</b> d0/m0/0000</mat-hint>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-mat-3\">\r\n                  <div class=\"mat-form-wr\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Date and month with placeholder\" mask=\"d0/m0/0000\"\r\n                             [showMaskTyped]=\"true\"\r\n                             [shownMaskExpression]=\"'DD/MM/YYYY'\"\r\n                             [dropSpecialCharacters]=\"true\">\r\n                      <mat-hint> <b>Mask:</b> d0/m0/0000</mat-hint>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"mat-card-wr\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <mat-card-title>Masks and special characters</mat-card-title>\r\n              <mat-card-subtitle>\r\n                You could define if you want special characters propagate to the model or not with the\r\n                attribute <b>dropSpecialCharacters</b>.\r\n              </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div class=\"flex-row\">\r\n                <div class=\"flex-cell\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"CPF\" [dropSpecialCharacters]=\"true\" mask=\"000.000.000-00\"\r\n                      [formControl]=\"cpfFormControl\" [(ngModel)]=\"cpfModel\">\r\n                    <mat-hint> <b>Mask:</b> 000.000.000-00</mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"flex-cell\">\r\n                  <p><b>FormControl:</b> {{ cpfFormControl.value ? cpfFormControl.value: 'Empty' }}</p>\r\n                  <p><b>NgModel:</b> {{ cpfModel ? cpfModel: 'Empty' }}</p>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"mat-card-wr\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <mat-card-title>Clear if not match</mat-card-title>\r\n              <mat-card-subtitle>\r\n                You could clear the input if the value not match the mask, you'll just need to set <b>clearIfNotMatch</b>\r\n                attribute.\r\n              </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div class=\"flex-row\">\r\n                <div class=\"flex-cell\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Clear if not match\" [clearIfNotMatch]=\"true\" mask=\"000.000\"\r\n                      [formControl]=\"clearIfNotMatch\" [(ngModel)]=\"clearIfNotMatchModel\">\r\n                    <mat-hint><b>Mask:</b>000.000</mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"flex-cell\">\r\n                  <p><b>FormControl:</b> {{ clearIfNotMatch.value ? clearIfNotMatch.value: 'Empty' }}</p>\r\n                  <p><b>NgModel:</b> {{ clearIfNotMatchModel ? clearIfNotMatchModel: 'Empty' }}</p>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"mat-card-wr\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <mat-card-title>Percent valid mask</mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div class=\"flex-row\">\r\n                <div class=\"flex-cell\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Percent valid mask\"  mask=\"percent\" sufix=\"%\"\r\n                      [formControl]=\"percent\">\r\n                    <mat-hint><b>Mask:</b>percent</mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"flex-cell\">\r\n                  <p><b>FormControl:</b> {{ clearIfNotMatch.value ? clearIfNotMatch.value: 'Empty' }}</p>\r\n                  <p><b>NgModel:</b> {{ clearIfNotMatchModel ? clearIfNotMatchModel: 'Empty' }}</p>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"mat-card-wr\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <mat-card-title>Phone number</mat-card-title>\r\n              <mat-card-subtitle>\r\n                You can add prefix to you masked value\r\n              </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div class=\"flex-row\">\r\n                <div class=\"flex-cell-padding\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Phone number\" mask=\"(000) 000-0000\" prefix=\"+7\" [formControl]=\"form\"\r\n                      [(ngModel)]=\"dateModel\">\r\n                    <mat-hint><b>Mask: </b>+7 (000) 000 00 00</mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"flex-cell\">\r\n                  <p><b>FormControl:</b> {{ form.value ? form.value: 'Empty' }}</p>\r\n                  <p><b>NgModel:</b> {{ dateModel ? dateModel: 'Empty' }}</p>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"mat-card-wr\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <mat-card-title>Phone number</mat-card-title>\r\n              <mat-card-subtitle>\r\n                You can add 'showMaskTyped' property to see maskExpression with underscores while typing\r\n              </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div class=\"flex-row\">\r\n                <div class=\"flex-cell-padding\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Phone number\" mask=\"(000) 000-0000\" prefix=\"+5\" [showMaskTyped]=\"true\"\r\n                      [formControl]=\"form1\" [(ngModel)]=\"showMaskModel\">\r\n                    <mat-hint><b>Mask: </b>+5 (000) 000 0000</mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"flex-cell\">\r\n                  <p><b>FormControl:</b> {{ form1.value ? form1.value: 'Empty' }}</p>\r\n                  <p><b>NgModel:</b> {{ showMaskModel ? showMaskModel: 'Empty' }}</p>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"mat-card-wr\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <mat-card-title>SUFIX</mat-card-title>\r\n              <mat-card-subtitle>\r\n                You can add 'sufix' property\r\n              </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div class=\"flex-row\">\r\n                <div class=\"flex-cell-padding\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Sum\" mask='00.00' sufix=\" $\" [formControl]=\"sufixForm\" [(ngModel)]=\"sufixModel\">\r\n                    <mat-hint><b>Mask: </b>0000.00</mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"flex-cell\">\r\n                  <p><b>FormControl:</b> {{ sufixForm.value ? sufixForm.value: 'Empty' }}</p>\r\n                  <p><b>NgModel:</b> {{ sufixModel ? sufixModel: 'Empty' }}</p>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"mat-card-wr\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <mat-card-title>Number or string</mat-card-title>\r\n              <mat-card-subtitle>\r\n                You can pass in value of type number or string\r\n              </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div class=\"flex-row\">\r\n                <div class=\"flex-cell-padding\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Type number or string\" mask=\"00*.00\" [formControl]=\"numberOrStringForm\"\r\n                      [(ngModel)]=\"numberOrStringFormModel\">\r\n                    <mat-hint><b>Mask: </b>000.00</mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"flex-cell\">\r\n                  <p><b>FormControl:</b> {{ numberOrStringForm.value ? numberOrStringForm.value: 'Empty' }}</p>\r\n                  <p><b>NgModel:</b> {{ numberOrStringFormModel ? numberOrStringFormModel: 'Empty' }}</p>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"mat-card-wr\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <mat-card-title>Repeat mask</mat-card-title>\r\n              <mat-card-subtitle>\r\n                You can pass into mask pattern with brackets\r\n              </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div class=\"flex-row\">\r\n                <div class=\"flex-cell-padding\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Repeat mask\" mask=\"A{5}\" [formControl]=\"repeatForm\" [(ngModel)]=\"repeatFormModel\">\r\n                    <mat-hint><b>Mask: </b>00000</mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"flex-cell\">\r\n                  <p><b>FormControl:</b> {{ repeatForm.value ? repeatForm.value: 'Empty' }}</p>\r\n                  <p><b>NgModel:</b> {{ repeatFormModel ? repeatFormModel: 'Empty' }}</p>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"mat-card-wr\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <mat-card-title>Thousand separator mask</mat-card-title>\r\n              <mat-card-subtitle>\r\n                You can devide your input by thousands\r\n              </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div class=\"flex-row\">\r\n                <div class=\"flex-cell-padding\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Separator\" mask=\"coma_separator\" [formControl]=\"separatorForm\" [(ngModel)]=\"separatorFormModel\">\r\n                    <mat-hint><b>Mask: </b>separator</mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"flex-cell\">\r\n                    <p><b>FormControl:</b> {{ separatorForm.value ? separatorForm.value: 'Empty' }}</p>\r\n                    <p><b>NgModel:</b> {{ separatorFormModel ? separatorFormModel: 'Empty' }}</p>\r\n                  </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"mat-card-wr\">\r\n          <mat-card>\r\n            <mat-card-header>\r\n              <mat-card-title>Custom Pattern an mask in pipe</mat-card-title>\r\n              <mat-card-subtitle>\r\n                You can pass array of maskExpression and CutomPattern into pipe\r\n              </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div class=\"flex-row\">\r\n                <div class=\"flex-cell-padding\">\r\n                  <span>{{phone | mask: customMaska}}</span><br><br>\r\n                  <mat-hint>Mask: PPP-PPP-PPP</mat-hint>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"mat-grid-wr\">\r\n          <mat-grid-list cols=\"1\" rowHeight=\"55px\">\r\n            <mat-grid-tile>\r\n              <mat-toolbar>\r\n                <span>Documentation - see docs on\r\n                  <a class=\"git-link\" target=\"_blank\" href=\"https://github.com/JsDaddy/ngx-mask\">\r\n                    <img src=\"assets/img/github.png\" alt=\"github\">\r\n                  </a>\r\n                </span>\r\n              </mat-toolbar>\r\n            </mat-grid-tile>\r\n          </mat-grid-list>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.phone = 123456789;
        this.pattern = {
            'P': {
                pattern: new RegExp('\\d'),
            }
        };
        this.numberOrStringFormModel = '';
        this.clearIfNotMatchModel = '';
        this.formModelDate = '';
        this.cpfModel = '';
        this.dateModel = '';
        this.showMaskModel = '';
        this.suf = '+7';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.form1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.formDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.cpfFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.clearIfNotMatch = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.numberOrStringForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.sufixForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.repeatForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.separatorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.percent = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.customMaska = ['PPP-PPP-PPP', this.pattern];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_mask_test_utils_test_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-mask/test/utils/test-component.component */ "./src/app/ngx-mask/test/utils/test-component.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngx_mask_ngx_mask_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ngx-mask/ngx-mask.module */ "./src/app/ngx-mask/ngx-mask.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _ngx_mask_test_utils_test_component_component__WEBPACK_IMPORTED_MODULE_2__["TestMaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _ngx_mask_ngx_mask_module__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ngx-mask/config.ts":
/*!************************************!*\
  !*** ./src/app/ngx-mask/config.ts ***!
  \************************************/
/*! exports provided: config, NEW_CONFIG, INITIAL_CONFIG, initialConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_CONFIG", function() { return NEW_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_CONFIG", function() { return INITIAL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialConfig", function() { return initialConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var config = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('config');
var NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NEW_CONFIG');
var INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('INITIAL_CONFIG');
var initialConfig = {
    sufix: '',
    prefix: '',
    clearIfNotMatch: false,
    showTemplate: false,
    showMaskTyped: false,
    dropSpecialCharacters: true,
    shownMaskExpression: '',
    specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '\"', '\''],
    patterns: {
        '0': {
            pattern: new RegExp('\\d'),
        },
        '9': {
            pattern: new RegExp('\\d'),
            optional: true
        },
        'A': {
            pattern: new RegExp('\[a-zA-Z0-9\]')
        },
        'S': {
            pattern: new RegExp('\[a-zA-Z\]')
        },
        'd': {
            pattern: new RegExp('\\d'),
        },
        'm': {
            pattern: new RegExp('\\d'),
        },
        'H': {
            pattern: new RegExp('\\d'),
        },
        'h': {
            pattern: new RegExp('\\d'),
        },
        's': {
            pattern: new RegExp('\\d'),
        }
    }
};


/***/ }),

/***/ "./src/app/ngx-mask/mask-applier.service.ts":
/*!**************************************************!*\
  !*** ./src/app/ngx-mask/mask-applier.service.ts ***!
  \**************************************************/
/*! exports provided: MaskApplierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskApplierService", function() { return MaskApplierService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/app/ngx-mask/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MaskApplierService = /** @class */ (function () {
    function MaskApplierService(_config) {
        this._config = _config;
        this.maskExpression = "";
        this.shownMaskExpression = "";
        this.separator = function (str) {
            str += "";
            var x = str.split(".");
            var decimals = x.length > 1 ? "." + x[1] : "";
            var res = x[0];
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(res)) {
                res = res.replace(rgx, "$1" + " " + "$2");
            }
            return res + decimals;
        };
        this.dotSeparator = function (str) {
            str += "";
            var x = str.split(",");
            var decimals = x.length > 1 ? "," + x[1] : "";
            var res = x[0];
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(res)) {
                res = res.replace(rgx, "$1" + "." + "$2");
            }
            return res + decimals;
        };
        this.comaSeparator = function (str) {
            str += "";
            var x = str.split(".");
            var decimals = x.length > 1 ? "." + (+x[1] < 3 ? x[1] : x[1].substring(0, 2)) : "";
            var res = x[0];
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(res)) {
                res = res.replace(rgx, "$1" + "," + "$2");
            }
            return res + decimals;
        };
        this.percentage = function (str) {
            return Number(str) >= 0 && Number(str) <= 100;
        };
        this._shift = new Set();
        this.maskSpecialCharacters = this._config.specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.clearIfNotMatch = this._config.clearIfNotMatch;
        this.dropSpecialCharacters = this._config.dropSpecialCharacters;
        this.maskSpecialCharacters = this._config.specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.prefix = this._config.prefix;
        this.sufix = this._config.sufix;
    }
    // tslint:disable-next-line:no-any
    MaskApplierService.prototype.applyMaskWithPattern = function (inputValue, maskAndPattern) {
        var mask = maskAndPattern[0], customPattern = maskAndPattern[1];
        this.customPattern = customPattern;
        return this.applyMask(inputValue, mask);
    };
    MaskApplierService.prototype.applyMask = function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        if (inputValue === undefined ||
            inputValue === null ||
            maskExpression === undefined) {
            return "";
        }
        var cursor = 0;
        var result = "";
        var multi = false;
        if (inputValue.slice(0, this.prefix.length) === this.prefix) {
            inputValue = inputValue.slice(this.prefix.length, inputValue.length);
        }
        var inputArray = inputValue.toString().split("");
        if (maskExpression === "percent") {
            if (inputValue.match("[a-z]|[A-Z]") ||
                inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/)) {
                inputValue = inputValue.substring(0, inputValue.length - 1);
            }
            if (this.percentage(inputValue)) {
                result = inputValue;
            }
            else {
                result = inputValue.substring(0, inputValue.length - 1);
            }
        }
        else if (maskExpression === "separator") {
            if (inputValue.match("[a-z]|[A-Z]") ||
                inputValue.match(/[!$%^&*()_+|~=`{}\[\]:";'<>?\/]/)) {
                inputValue = inputValue.substring(0, inputValue.length - 1);
            }
            var strForSep = inputValue.replace(/\s/g, "");
            result = this.separator(strForSep);
            position = result.length + 1;
            cursor = position;
            var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                ? inputArray.length
                : cursor;
            this._shift.add(shiftStep + this.prefix.length || 0);
        }
        else if (maskExpression === "dot_separator") {
            if (inputValue.match("[a-z]|[A-Z]") ||
                inputValue.match(/[!$%^&*()_+|~=`{}\[\]:";'<>?\/]/)) {
                inputValue = inputValue.substring(0, inputValue.length - 1);
            }
            var strForSep = inputValue.replace(/\./g, "");
            result = this.dotSeparator(strForSep);
            position = result.length + 1;
            cursor = position;
            var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                ? inputArray.length
                : cursor;
            this._shift.add(shiftStep + this.prefix.length || 0);
        }
        else if (maskExpression === "coma_separator") {
            if (inputValue.match("[a-z]|[A-Z]") ||
                inputValue.match(/[!$%^&*()_+|~=`{}\[\]:";'<>?\/]/)) {
                inputValue = inputValue.substring(0, inputValue.length - 1);
            }
            var strForSep = inputValue.replace(/\,/g, "");
            result = this.comaSeparator(strForSep);
            position = result.length + 1;
            cursor = position;
            var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                ? inputArray.length
                : cursor;
            this._shift.add(shiftStep + this.prefix.length || 0);
        }
        else {
            // tslint:disable-next-line
            for (var i = 0, inputSymbol = inputArray[0]; i < inputArray.length; i++, inputSymbol = inputArray[i]) {
                if (cursor === maskExpression.length) {
                    break;
                }
                if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) &&
                    maskExpression[cursor + 1] === "?") {
                    result += inputSymbol;
                    cursor += 2;
                }
                else if (maskExpression[cursor + 1] === "*" &&
                    multi &&
                    this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                    result += inputSymbol;
                    cursor += 3;
                    multi = false;
                }
                else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) &&
                    maskExpression[cursor + 1] === "*") {
                    result += inputSymbol;
                    multi = true;
                }
                else if (maskExpression[cursor + 1] === "?" &&
                    this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                    result += inputSymbol;
                    cursor += 3;
                }
                else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
                    if (maskExpression[cursor] === "H") {
                        if (Number(inputSymbol) > 2) {
                            result += 0;
                            cursor += 1;
                            var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                ? inputArray.length
                                : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === "h") {
                        if (result === "2" && Number(inputSymbol) > 3) {
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === "m") {
                        if (Number(inputSymbol) > 5) {
                            result += 0;
                            cursor += 1;
                            var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                ? inputArray.length
                                : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === "s") {
                        if (Number(inputSymbol) > 5) {
                            result += 0;
                            cursor += 1;
                            var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                ? inputArray.length
                                : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    result += inputSymbol;
                    cursor++;
                }
                else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
                    if (maskExpression[cursor] === "d") {
                        if (Number(inputSymbol) > 3) {
                            result += 0;
                            cursor += 1;
                            var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                ? inputArray.length
                                : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor - 1] === "d") {
                        if (Number(inputValue.slice(cursor - 1, cursor + 1)) > 31) {
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === "m") {
                        if (Number(inputSymbol) > 1) {
                            result += 0;
                            cursor += 1;
                            var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                ? inputArray.length
                                : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor - 1] === "m") {
                        if (Number(inputValue.slice(cursor - 1, cursor + 1)) > 12) {
                            continue;
                        }
                    }
                    result += inputSymbol;
                    cursor++;
                }
                else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                    result += maskExpression[cursor];
                    cursor++;
                    var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                        ? inputArray.length
                        : cursor;
                    this._shift.add(shiftStep + this.prefix.length || 0);
                    i--;
                }
                else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1 &&
                    this.maskAvailablePatterns[maskExpression[cursor]] &&
                    this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                    cursor++;
                    i--;
                }
                else if (this.maskExpression[cursor + 1] === "*" &&
                    this._findSpecialChar(this.maskExpression[cursor + 2]) &&
                    this._findSpecialChar(inputSymbol) ===
                        this.maskExpression[cursor + 2] &&
                    multi) {
                    cursor += 3;
                    result += inputSymbol;
                }
            }
        }
        if (result.length + 1 === maskExpression.length &&
            this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
            result += maskExpression[maskExpression.length - 1];
        }
        var shift = 1;
        var newPosition = position + 1;
        while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
        }
        cb(this._shift.has(position) ? shift : 0);
        var res = "" + this.prefix + result;
        res = this.sufix
            ? "" + this.prefix + result + this.sufix
            : "" + this.prefix + result;
        if (result.length === 0) {
            res = "" + this.prefix + result;
        }
        return res;
    };
    MaskApplierService.prototype._findSpecialChar = function (inputSymbol) {
        var symbol = this.maskSpecialCharacters.find(function (val) { return val === inputSymbol; });
        return symbol;
    };
    MaskApplierService.prototype._checkSymbolMask = function (inputSymbol, maskSymbol) {
        this.maskAvailablePatterns = this.customPattern
            ? this.customPattern
            : this.maskAvailablePatterns;
        return (this.maskAvailablePatterns[maskSymbol] &&
            this.maskAvailablePatterns[maskSymbol].pattern &&
            this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol));
    };
    MaskApplierService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_1__["config"])),
        __metadata("design:paramtypes", [Object])
    ], MaskApplierService);
    return MaskApplierService;
}());



/***/ }),

/***/ "./src/app/ngx-mask/mask.directive.ts":
/*!********************************************!*\
  !*** ./src/app/ngx-mask/mask.directive.ts ***!
  \********************************************/
/*! exports provided: MaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskDirective", function() { return MaskDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mask_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask.service */ "./src/app/ngx-mask/mask.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};




var MaskDirective = /** @class */ (function () {
    function MaskDirective(
    // tslint:disable-next-line
    document, _maskService) {
        this.document = document;
        this._maskService = _maskService;
        this._position = null;
        // tslint:disable-next-line
        this.onChange = function (_) { };
        this.onTouch = function () { };
    }
    MaskDirective_1 = MaskDirective;
    Object.defineProperty(MaskDirective.prototype, "maskExpression", {
        set: function (value) {
            this._maskValue = value || '';
            if (!this._maskValue) {
                return;
            }
            this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue);
            this._maskService.formElementProperty = [
                'value',
                this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "specialCharacters", {
        set: function (value) {
            if (!value ||
                !Array.isArray(value) ||
                (Array.isArray(value) && !value.length)) {
                return;
            }
            this._maskService.maskSpecialCharacters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "patterns", {
        set: function (value) {
            if (!value) {
                return;
            }
            this._maskService.maskAvailablePatterns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "prefix", {
        set: function (value) {
            if (!value) {
                return;
            }
            this._maskService.prefix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "sufix", {
        set: function (value) {
            if (!value) {
                return;
            }
            this._maskService.sufix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "dropSpecialCharacters", {
        set: function (value) {
            this._maskService.dropSpecialCharacters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "showMaskTyped", {
        set: function (value) {
            if (!value) {
                return;
            }
            this._maskService.showMaskTyped = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "shownMaskExpression", {
        set: function (value) {
            if (!value) {
                return;
            }
            this._maskService.shownMaskExpression = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "showTemplate", {
        set: function (value) {
            this._maskService.showTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "clearIfNotMatch", {
        set: function (value) {
            this._maskService.clearIfNotMatch = value;
        },
        enumerable: true,
        configurable: true
    });
    MaskDirective.prototype.onInput = function (e) {
        var el = e.target;
        this._inputValue = el.value;
        if (!this._maskValue) {
            this.onChange(el.value);
            return;
        }
        var position = el.selectionStart === 1
            ? el.selectionStart + this._maskService.prefix.length
            : el.selectionStart;
        var caretShift = 0;
        this._maskService.applyValueChanges(position, function (shift) { return (caretShift = shift); });
        // only set the selection if the element is active
        if (this.document.activeElement !== el) {
            return;
        }
        el.selectionStart = el.selectionEnd =
            this._position !== null
                ? this._position
                : position +
                    // tslint:disable-next-line
                    (e.inputType === 'deleteContentBackward' ? 0 : caretShift);
        this._position = null;
    };
    MaskDirective.prototype.onBlur = function () {
        this._maskService.clearIfNotMatchFn();
        this.onTouch();
    };
    MaskDirective.prototype.onFocus = function (e) {
        var el = e.target;
        if (el !== null && el.selectionStart !== null &&
            el.selectionStart === el.selectionEnd &&
            el.selectionStart > this._maskService.prefix.length &&
            // tslint:disable-next-line
            e.keyCode !== 38) {
            return;
        }
        if (this._maskService.showMaskTyped) {
            this._maskService.maskIsShown = this._maskService.showMaskInInput();
        }
        el.value = !el.value || el.value === this._maskService.prefix
            ? this._maskService.prefix + this._maskService.maskIsShown
            : el.value;
        /** fix of cursor position with prefix when mouse click occur */
        if ((el.selectionStart || el.selectionEnd) <= this._maskService.prefix.length) {
            el.selectionStart = this._maskService.prefix.length;
            return;
        }
    };
    MaskDirective.prototype.a = function (e) {
        var el = e.target;
        if (e.keyCode === 38) {
            e.preventDefault();
        }
        if (e.keyCode === 37 || e.keyCode === 8) {
            if (el.selectionStart <= this._maskService.prefix.length
                && el.selectionEnd <= this._maskService.prefix.length) {
                e.preventDefault();
            }
            this.onFocus(e);
            if (e.keyCode === 8
                && el.selectionStart === 0
                && el.selectionEnd === el.value.length) {
                el.value = this._maskService.prefix;
                this._position = this._maskService.prefix ? this._maskService.prefix.length : 1;
                this.onInput(e);
            }
        }
    };
    MaskDirective.prototype.onPaste = function () {
        this._position = Number.MAX_SAFE_INTEGER;
    };
    /** It writes the value in the input */
    MaskDirective.prototype.writeValue = function (inputValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (inputValue === undefined) {
                    inputValue = '';
                }
                if (typeof inputValue === 'number') {
                    inputValue = String(inputValue);
                    this._maskService.isNumberValue = true;
                }
                inputValue && this._maskService.maskExpression ||
                    this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped)
                    ? (this._maskService.formElementProperty = [
                        'value',
                        this._maskService.applyMask(inputValue, this._maskService.maskExpression)
                    ])
                    : (this._maskService.formElementProperty = ['value', inputValue]);
                this._inputValue = inputValue;
                return [2 /*return*/];
            });
        });
    };
    // tslint:disable-next-line
    MaskDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
        this._maskService.onChange = this.onChange;
    };
    // tslint:disable-next-line
    MaskDirective.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    /** It disables the input element */
    MaskDirective.prototype.setDisabledState = function (isDisabled) {
        this._maskService.formElementProperty = ['disabled', isDisabled];
    };
    MaskDirective.prototype._repeatPatternSymbols = function (maskExp) {
        var _this = this;
        return maskExp.match(/{[0-9]+}/)
            && maskExp.split('')
                .reduce(function (accum, currval, index) {
                _this._start = (currval === '{') ? index : _this._start;
                if (currval !== '}') {
                    return _this._maskService._findSpecialChar(currval) ? accum + currval : accum;
                }
                _this._end = index;
                var repeatNumber = Number(maskExp
                    .slice(_this._start + 1, _this._end));
                var repaceWith = new Array(repeatNumber + 1)
                    .join(maskExp[_this._start - 1]);
                return accum + repaceWith;
            }, '') || maskExp;
    };
    var MaskDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mask'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MaskDirective.prototype, "maskExpression", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "specialCharacters", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "patterns", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "prefix", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "sufix", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "dropSpecialCharacters", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "showMaskTyped", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "shownMaskExpression", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "showTemplate", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "clearIfNotMatch", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MaskDirective.prototype, "onInput", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MaskDirective.prototype, "onBlur", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MaskDirective.prototype, "onFocus", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MaskDirective.prototype, "a", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('paste'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MaskDirective.prototype, "onPaste", null);
    MaskDirective = MaskDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mask]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MaskDirective_1; }),
                    multi: true
                },
                _mask_service__WEBPACK_IMPORTED_MODULE_3__["MaskService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _mask_service__WEBPACK_IMPORTED_MODULE_3__["MaskService"]])
    ], MaskDirective);
    return MaskDirective;
}());



/***/ }),

/***/ "./src/app/ngx-mask/mask.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/ngx-mask/mask.pipe.ts ***!
  \***************************************/
/*! exports provided: MaskPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskPipe", function() { return MaskPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mask_applier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mask-applier.service */ "./src/app/ngx-mask/mask-applier.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaskPipe = /** @class */ (function () {
    function MaskPipe(_maskService) {
        this._maskService = _maskService;
    }
    MaskPipe.prototype.transform = function (value, mask) {
        if (!value) {
            return '';
        }
        if (typeof mask === 'string') {
            return this._maskService.applyMask("" + value, mask);
        }
        return this._maskService.applyMaskWithPattern("" + value, mask);
    };
    MaskPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'mask',
            pure: true
        }),
        __metadata("design:paramtypes", [_mask_applier_service__WEBPACK_IMPORTED_MODULE_1__["MaskApplierService"]])
    ], MaskPipe);
    return MaskPipe;
}());



/***/ }),

/***/ "./src/app/ngx-mask/mask.service.ts":
/*!******************************************!*\
  !*** ./src/app/ngx-mask/mask.service.ts ***!
  \******************************************/
/*! exports provided: MaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskService", function() { return MaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/app/ngx-mask/config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mask_applier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask-applier.service */ "./src/app/ngx-mask/mask-applier.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MaskService = /** @class */ (function (_super) {
    __extends(MaskService, _super);
    function MaskService(
    // tslint:disable-next-line
    document, _config, _elementRef, _renderer) {
        var _this = _super.call(this, _config) || this;
        _this.document = document;
        _this._config = _config;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this.maskExpression = '';
        _this.isNumberValue = false;
        _this.showMaskTyped = false;
        _this.maskIsShown = '';
        // tslint:disable-next-line
        _this.onChange = function (_) { };
        _this.onTouch = function () { };
        _this._formElement = _this._elementRef.nativeElement;
        return _this;
    }
    MaskService.prototype.applyMask = function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : '';
        if (!inputValue && this.showMaskTyped) {
            return this.prefix + this.maskIsShown;
        }
        var result = _super.prototype.applyMask.call(this, inputValue, maskExpression, position, cb);
        Array.isArray(this.dropSpecialCharacters)
            ? this.onChange(this._removeMask(this._removeSufix(this._removePrefix(result)), this.dropSpecialCharacters))
            : this.dropSpecialCharacters === true
                ? this.onChange(this.isNumberValue
                    ? Number(this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters))
                    : this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters))
                : this.onChange(this._removeSufix(this._removePrefix(result)));
        var ifMaskIsShown = '';
        if (!this.showMaskTyped) {
            return result;
        }
        var resLen = result.length;
        var prefNmask = this.prefix + this.maskIsShown;
        ifMaskIsShown = prefNmask.slice(resLen);
        return result + ifMaskIsShown;
    };
    MaskService.prototype.applyValueChanges = function (position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        var maskedInput = this.applyMask(this._formElement.value, this.maskExpression, position, cb);
        this._formElement.value = maskedInput;
        if (this._formElement === this.document.activeElement) {
            return;
        }
        this.clearIfNotMatchFn();
    };
    MaskService.prototype.showMaskInInput = function () {
        if (this.showMaskTyped && !!this.shownMaskExpression) {
            if (this.maskExpression.length !== this.shownMaskExpression.length) {
                throw new Error('Mask expression must match mask placeholder length');
            }
            else {
                return this.shownMaskExpression;
            }
        }
        else if (this.showMaskTyped) {
            return this.maskExpression.replace(/\w/g, '_');
        }
        return '';
    };
    MaskService.prototype.clearIfNotMatchFn = function () {
        if (this.clearIfNotMatch === true &&
            this.maskExpression.length !== this._formElement.value.length) {
            this.formElementProperty = ['value', ''];
            this.applyMask(this._formElement.value, this.maskExpression);
        }
    };
    Object.defineProperty(MaskService.prototype, "formElementProperty", {
        set: function (_a) {
            var name = _a[0], value = _a[1];
            this._renderer.setProperty(this._formElement, name, value);
        },
        enumerable: true,
        configurable: true
    });
    MaskService.prototype._removeMask = function (value, specialCharactersForRemove) {
        return value
            ? value.replace(this._regExpForRemove(specialCharactersForRemove), '')
            : value;
    };
    MaskService.prototype._removePrefix = function (value) {
        if (!this.prefix) {
            return value;
        }
        return value
            ? value.replace(this.prefix, '')
            : value;
    };
    MaskService.prototype._removeSufix = function (value) {
        if (!this.sufix) {
            return value;
        }
        return value
            ? value.replace(this.sufix, '')
            : value;
    };
    MaskService.prototype._regExpForRemove = function (specialCharactersForRemove) {
        return new RegExp(specialCharactersForRemove.map(function (item) { return "\\" + item; }).join('|'), 'gi');
    };
    MaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_1__["config"])),
        __metadata("design:paramtypes", [Object, Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], MaskService);
    return MaskService;
}(_mask_applier_service__WEBPACK_IMPORTED_MODULE_3__["MaskApplierService"]));



/***/ }),

/***/ "./src/app/ngx-mask/ngx-mask.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ngx-mask/ngx-mask.module.ts ***!
  \*********************************************/
/*! exports provided: NgxMaskModule, _configFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMaskModule", function() { return NgxMaskModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_configFactory", function() { return _configFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/app/ngx-mask/config.ts");
/* harmony import */ var _mask_applier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mask-applier.service */ "./src/app/ngx-mask/mask-applier.service.ts");
/* harmony import */ var _mask_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask.directive */ "./src/app/ngx-mask/mask.directive.ts");
/* harmony import */ var _mask_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mask.pipe */ "./src/app/ngx-mask/mask.pipe.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NgxMaskModule = /** @class */ (function () {
    function NgxMaskModule() {
    }
    NgxMaskModule_1 = NgxMaskModule;
    NgxMaskModule.forRoot = function (configValue) {
        return {
            ngModule: NgxMaskModule_1,
            providers: [
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_1__["NEW_CONFIG"],
                    useValue: configValue
                },
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_1__["INITIAL_CONFIG"],
                    useValue: _config__WEBPACK_IMPORTED_MODULE_1__["initialConfig"]
                },
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_1__["config"],
                    useFactory: _configFactory,
                    deps: [_config__WEBPACK_IMPORTED_MODULE_1__["INITIAL_CONFIG"], _config__WEBPACK_IMPORTED_MODULE_1__["NEW_CONFIG"]]
                },
            ]
        };
    };
    NgxMaskModule.forChild = function (configValue) {
        return {
            ngModule: NgxMaskModule_1,
        };
    };
    var NgxMaskModule_1;
    NgxMaskModule = NgxMaskModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_mask_applier_service__WEBPACK_IMPORTED_MODULE_2__["MaskApplierService"]],
            exports: [_mask_directive__WEBPACK_IMPORTED_MODULE_3__["MaskDirective"], _mask_pipe__WEBPACK_IMPORTED_MODULE_4__["MaskPipe"]],
            declarations: [_mask_directive__WEBPACK_IMPORTED_MODULE_3__["MaskDirective"], _mask_pipe__WEBPACK_IMPORTED_MODULE_4__["MaskPipe"]]
        })
    ], NgxMaskModule);
    return NgxMaskModule;
}());

/**
 * @internal
 */
function _configFactory(initConfig, configValue) {
    return (typeof configValue === 'function') ? configValue() : __assign({}, initConfig, configValue);
}


/***/ }),

/***/ "./src/app/ngx-mask/test/utils/test-component.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ngx-mask/test/utils/test-component.component.ts ***!
  \*****************************************************************/
/*! exports provided: TestMaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestMaskComponent", function() { return TestMaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TestMaskComponent = /** @class */ (function () {
    function TestMaskComponent() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null);
        this.dropSpecialCharacters = true;
        this.clearIfNotMatch = false;
        this.prefix = '';
        this.sufix = '';
        this.showMaskTyped = false;
    }
    TestMaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'test-mask',
            template: "<input id='maska' [mask]=\"mask\"\n      [clearIfNotMatch]=\"clearIfNotMatch\"\n      [dropSpecialCharacters]=\"dropSpecialCharacters\"\n      [specialCharacters]=\"specialCharacters\"\n      [patterns]=\"patterns\"\n      [sufix]=\"sufix\"\n      [prefix]=\"prefix\"\n      [formControl]=\"form\"\n      [showMaskTyped] = \"showMaskTyped\"\n      [(ngModel)]=\"ngModelValue\">",
        })
    ], TestMaskComponent);
    return TestMaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WORK\Synergy\forks\ngx-mask\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map