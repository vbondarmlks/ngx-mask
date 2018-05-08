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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  mat-sidenav {\n    display: flex;\n    overflow: visible;\n  }\n</style>\n<mat-sidenav-container>\n  <mat-sidenav mode=\"side\" opened=\"false\">Side menu</mat-sidenav>\n  <header>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-7\">\n          <div class=\"logo align-middle\">\n            <a target=\"_blank\" href=\"http://jsdaddy.io/\"><img src=\"http://jsdaddy.io/img/logo.png\" alt=\"jsdaddy\"></a>\n          </div>\n\n        </div>\n        <div class=\"col-5\">\n          <h1 class=\"title\">\n            <span class=\"jq-label\">Angular</span>\n            <span class=\"plugin-name\">Mask Plugin</span>\n          </h1>\n          <span class=\"subtitle\">An Angular Plugin to make masks on form fields and html elements.</span>\n        </div>\n      </div>\n    </div>\n  </header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"mat-grid-wr\">\n          <mat-grid-list cols=\"1\" rowHeight=\"55px\">\n            <mat-grid-tile>\n              <mat-toolbar>\n                <span>Examples</span>\n              </mat-toolbar>\n            </mat-grid-tile>\n          </mat-grid-list>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"mat-card-wr\">\n          <mat-card>\n            <mat-card-header>\n              <mat-card-title>Mask common case</mat-card-title>\n              <mat-card-subtitle>An case of date mask</mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n              <div class=\"flex-row\">\n                <div class=\"flex-cell\">\n                  <mat-form-field>\n                    <input matInput placeholder=\"Date\" mask=\"00/00/0000\" [formControl]=\"form\" [(ngModel)]=\"dateModel\">\n                    <mat-hint><b>Mask:</b> 00/00/0000</mat-hint>\n                  </mat-form-field>\n                </div>\n                <div class=\"flex-cell\">\n                  <p><b>FormControl:</b>{{ form.value ? form.value : 'Empty' }}</p>\n                  <p><b>NgModel:</b> {{ dateModel ? dateModel : 'Empty' }}</p>\n                </div>\n              </div>\n            </mat-card-content>\n          </mat-card>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"mat-card-wr\">\n          <mat-card>\n            <mat-card-header>\n              <mat-card-title>Other common cases</mat-card-title>\n              <mat-card-subtitle>Other common cases that you could apply in your projects. Try your self. :D\n              </mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n              <div class=\"row\">\n                <div class=\"col-mat-3\">\n                  <div class=\"mat-form-wr\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Date and Hour\" mask=\"00/00/00 00:00:00\">\n                      <mat-hint><b>Mask:</b> 00/00/00 00:00:00</mat-hint>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"col-mat-3\">\n                  <div class=\"mat-form-wr\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Hour\" mask=\"00:00:00\">\n                      <mat-hint><b>Mask:</b> 00:00:00</mat-hint>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"col-mat-3\">\n                  <div class=\"mat-form-wr\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Mixed Type\" mask=\"AAA 000-S0S\">\n                      <mat-hint><b>Mask:</b> AAA 000-S0S</mat-hint>\n                    </mat-form-field>\n                  </div>\n                  s\n                </div>\n                <div class=\"col-mat-3\">\n                  <div class=\"mat-form-wr\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Phone\" mask=\"(000) 000-0000\">\n                      <mat-hint><b>Mask:</b> (000) 000-0000</mat-hint>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </mat-card-content>\n          </mat-card>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"mat-card-wr\">\n          <mat-card>\n            <mat-card-header>\n              <mat-card-title>Masks and special characters</mat-card-title>\n              <mat-card-subtitle>\n                You could define if you want special characters propagate to the model or not with the\n                attribute <b>dropSpecialCharacters</b>.\n              </mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n              <div class=\"flex-row\">\n                <div class=\"flex-cell\">\n                  <mat-form-field>\n                    <input matInput placeholder=\"CPF\" [dropSpecialCharacters]=\"false\" mask=\"000.000.000-00\"\n                           [formControl]=\"cpfFormControl\" [(ngModel)]=\"cpfModel\">\n                    <mat-hint><b>Mask:</b> 000.000.000-00</mat-hint>\n                  </mat-form-field>\n                </div>\n                <div class=\"flex-cell\">\n                  <p><b>FormControl:</b> {{ cpfFormControl.value ? cpfFormControl.value : 'Empty' }}</p>\n                  <p><b>NgModel:</b> {{ cpfModel ? cpfModel : 'Empty' }}</p>\n                </div>\n              </div>\n            </mat-card-content>\n          </mat-card>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"mat-card-wr\">\n          <mat-card>\n            <mat-card-header>\n              <mat-card-title>Clear if not match</mat-card-title>\n              <mat-card-subtitle>\n                You could clear the input if the value not match the mask, you'll just need to set <b>clearIfNotMatch</b>\n                attribute.\n              </mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n              <div class=\"flex-row\">\n                <div class=\"flex-cell\">\n                  <mat-form-field>\n                    <input matInput placeholder=\"Clear if not match\" [clearIfNotMatch]=\"true\" mask=\"000.000\"\n                           [formControl]=\"clearIfNotMatchForm\" [(ngModel)]=\"clearIfNotMatchModel\">\n                    <mat-hint><b>Mask:</b> 000.000</mat-hint>\n                  </mat-form-field>\n                </div>\n                <div class=\"flex-cell\">\n                  <p><b>FormControl:</b> {{ clearIfNotMatchForm.value ? clearIfNotMatchForm.value : 'Empty' }}</p>\n                  <p><b>NgModel:</b> {{ clearIfNotMatchModel ? clearIfNotMatchModel : 'Empty' }}</p>\n                </div>\n              </div>\n            </mat-card-content>\n          </mat-card>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"mat-grid-wr\">\n          <mat-grid-list cols=\"1\" rowHeight=\"55px\">\n            <mat-grid-tile>\n              <mat-toolbar>\n                <span>Documentation - see docs on\n                  <a class=\"git-link\" target=\"_blank\" href=\"https://github.com/JsDaddy/ngx-mask\">\n                    <img src=\"../assets/img/github.png\" alt=\"github\">\n                  </a>\n                </span>\n              </mat-toolbar>\n            </mat-grid-tile>\n          </mat-grid-list>\n        </div>\n      </div>\n    </div>\n  </div>\n</mat-sidenav-container>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

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
        this.dateModel = '23234235';
        this.cpfModel = '04787954778';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('23234234');
        this.cpfFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('04787954778');
        this.clearIfNotMatchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngx_mask_ngx_mask_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngx-mask/ngx-mask.module */ "./src/app/ngx-mask/ngx-mask.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _ngx_mask_ngx_mask_module__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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
    clearIfNotMatch: false,
    dropSpecialCharacters: true,
    specialCharacters: ['/', '(', ')', '.', ':', '-', ' ', '+', ','],
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
        }
    }
};


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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
            this._maskService.maskExpression = this._maskValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "specialCharacters", {
        set: function (value) {
            if (!value || !Array.isArray(value) || Array.isArray(value) && !value.length) {
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
    Object.defineProperty(MaskDirective.prototype, "dropSpecialCharacters", {
        set: function (value) {
            this._maskService.dropSpecialCharacters = value;
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
        if (!this._maskValue) {
            this.onChange(el.value);
            return;
        }
        var position = el.selectionStart;
        var caretShift = 0;
        this._maskService.applyValueChanges(position, function (shift) { return caretShift = shift; });
        // only set the selection if the element is active
        if (this.document.activeElement !== el) {
            return;
        }
        el.selectionStart = el.selectionEnd = position + (
        // tslint:disable-next-line
        e.inputType === 'deleteContentBackward'
            ? 0
            : caretShift);
    };
    MaskDirective.prototype.onBlur = function () {
        this._maskService.clearIfNotMatchFn();
        this.onTouch();
    };
    /** It writes the value in the input */
    MaskDirective.prototype.writeValue = function (inputValue) {
        return __awaiter(this, void 0, void 0, function () {
            var maskExpression;
            return __generator(this, function (_a) {
                if (inputValue === undefined || inputValue === null) {
                    return [2 /*return*/];
                }
                maskExpression = this._maskService.maskExpression;
                // || await this.maskSetter$$.pipe(take(1))
                // .toPromise();
                inputValue
                    ? this._maskService.formElementProperty = ['value', this._maskService.applyMask(inputValue, maskExpression)]
                    : this._maskService.formElementProperty = ['value', ''];
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
    ], MaskDirective.prototype, "dropSpecialCharacters", null);
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
            ],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _mask_service__WEBPACK_IMPORTED_MODULE_3__["MaskService"]])
    ], MaskDirective);
    return MaskDirective;
    var MaskDirective_1;
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



var MaskService = /** @class */ (function () {
    function MaskService(
    // tslint:disable-next-line
    document, _config, _elementRef, _renderer) {
        this.document = document;
        this._config = _config;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.maskExpression = '';
        // tslint:disable-next-line
        this.onChange = function (_) { };
        this.onTouch = function () { };
        this._shift = new Set();
        this.clearIfNotMatch = this._config.clearIfNotMatch;
        this.dropSpecialCharacters = this._config.dropSpecialCharacters;
        this.maskSpecialCharacters = this._config.specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this._formElement = this._elementRef.nativeElement;
    }
    MaskService.prototype.applyMask = function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        if (inputValue === undefined || inputValue === null || maskExpression === undefined) {
            return '';
        }
        var cursor = 0;
        var result = '';
        var inputArray = inputValue.toString()
            .split('');
        // tslint:disable-next-line
        for (var i = 0, inputSymbol = inputArray[0]; i
            < inputArray.length; i++, inputSymbol = inputArray[i]) {
            if (result.length === maskExpression.length) {
                break;
            }
            if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
                result += inputSymbol;
                cursor++;
            }
            else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                result += maskExpression[cursor];
                cursor++;
                this._shift.add(cursor);
                i--;
            }
            else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1
                && this.maskAvailablePatterns[maskExpression[cursor]]
                && this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                cursor++;
                i--;
            }
        }
        if (result.length + 1 === maskExpression.length
            && this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
            result += maskExpression[maskExpression.length - 1];
        }
        var shift = 1;
        var newPosition = position + 1;
        while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
        }
        cb(this._shift.has(position) ? shift : 0);
        Array.isArray(this.dropSpecialCharacters)
            ? this.onChange(this._removeMask(result, this.dropSpecialCharacters))
            : this.dropSpecialCharacters === true
                ? this.onChange(this._removeMask(result, this.maskSpecialCharacters))
                : this.onChange(result);
        return result;
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
    MaskService.prototype.clearIfNotMatchFn = function () {
        if (this.clearIfNotMatch === true && this.maskExpression.length
            !== this._formElement.value.length) {
            this.formElementProperty = ['value', ''];
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
    MaskService.prototype._checkSymbolMask = function (inputSymbol, maskSymbol) {
        return inputSymbol
            === maskSymbol
            || this.maskAvailablePatterns[maskSymbol] && this.maskAvailablePatterns[maskSymbol].pattern
                && this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol);
    };
    MaskService.prototype._regExpForRemove = function (specialCharactersForRemove) {
        return new RegExp(specialCharactersForRemove
            .map(function (item) { return "\\" + item; })
            .join('|'), 'gi');
    };
    MaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_1__["config"])),
        __metadata("design:paramtypes", [Object, Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], MaskService);
    return MaskService;
}());



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
/* harmony import */ var _mask_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mask.directive */ "./src/app/ngx-mask/mask.directive.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/app/ngx-mask/config.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
                    provide: _config__WEBPACK_IMPORTED_MODULE_2__["NEW_CONFIG"],
                    useValue: configValue
                },
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_2__["INITIAL_CONFIG"],
                    useValue: _config__WEBPACK_IMPORTED_MODULE_2__["initialConfig"]
                },
                {
                    provide: _config__WEBPACK_IMPORTED_MODULE_2__["config"],
                    useFactory: _configFactory,
                    deps: [_config__WEBPACK_IMPORTED_MODULE_2__["INITIAL_CONFIG"], _config__WEBPACK_IMPORTED_MODULE_2__["NEW_CONFIG"]]
                },
            ]
        };
    };
    NgxMaskModule = NgxMaskModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_mask_directive__WEBPACK_IMPORTED_MODULE_1__["MaskDirective"]],
            declarations: [_mask_directive__WEBPACK_IMPORTED_MODULE_1__["MaskDirective"]]
        })
    ], NgxMaskModule);
    return NgxMaskModule;
    var NgxMaskModule_1;
}());

/**
 * @internal
 */
function _configFactory(initConfig, configValue) {
    return (typeof configValue === 'function') ? configValue() : __assign({}, initConfig, configValue);
}


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

module.exports = __webpack_require__(/*! /Users/igornepipenko/work/ng2-mask/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map