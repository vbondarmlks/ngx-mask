webpackJsonp([1,4],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = "<style>\nmd-sidenav {\n  display: flex;\n  overflow: visible;\n}\n\n</style>\n\n<md-sidenav-container>\n\n  <md-sidenav mode=\"side\" opened=\"false\">\n    Side menu\n  </md-sidenav>\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n        <header>\n          <h1>\n            <span class=\"jq-label\">Angular2</span>\n            <span class=\"plugin-name\">Mask Plugin</span>\n          </h1>\n          <span class=\"subtitle\">An Angular2 Plugin to make masks on form fields and html elements.</span>\n        </header>\n\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n        <md-grid-list cols=\"1\" rowHeight=\"140px\">\n\n          <md-grid-tile>\n            <md-toolbar color=\"primary\">\n              <span>Examples</span>\n            </md-toolbar>\n          </md-grid-tile>\n\n        </md-grid-list>\n\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n        <md-card>\n          <md-card-header>\n            <md-card-title>Mask common case</md-card-title>\n            <md-card-subtitle>An case of date mask</md-card-subtitle>\n          </md-card-header>\n          <md-card-content>\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <md-input-container>\n                  <input mdInput placeholder=\"Date\" mask=\"00/00/0000\" [formControl]=\"form\" [(ngModel)]=\"dateModel\">\n                  <md-hint><b>Mask:</b> 00/00/0000</md-hint>\n                </md-input-container>\n              </div>\n              <div class=\"col-md-3\">\n                <p><b>FormControl:</b> {{ form.value ? form.value : 'Empty' }}</p>\n              </div>\n              <div class=\"col-md-3\">\n                <p><b>NgModel:</b> {{ dateModel ? dateModel : 'Empty' }}</p>\n              </div>\n            </div>\n          </md-card-content>\n        </md-card>\n\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n        <md-card>\n          <md-card-header>\n            <md-card-title>Other common cases</md-card-title>\n            <md-card-subtitle>Other common cases that you could apply in your projects. Try your self. :D</md-card-subtitle>\n          </md-card-header>\n          <md-card-content>\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <md-input-container>\n                  <input mdInput placeholder=\"Date and Hour\" mask=\"00/00/00 00:00:00\">\n                  <md-hint><b>Mask:</b> 00/00/00 00:00:00</md-hint>\n                </md-input-container>\n              </div>\n\n              <div class=\"col-md-3\">\n                <md-input-container>\n                  <input mdInput placeholder=\"Hour\" mask=\"00:00:00\">\n                  <md-hint><b>Mask:</b> 00:00:00</md-hint>\n                </md-input-container>\n              </div>\n\n              <div class=\"col-md-3\">\n                <md-input-container>\n                  <input mdInput placeholder=\"Mixed Type\" mask=\"AAA 000-S0S\">\n                  <md-hint><b>Mask:</b> AAA 000-S0S</md-hint>\n                </md-input-container>\n              </div>\n\n              <div class=\"col-md-3\">\n                <md-input-container>\n                  <input mdInput placeholder=\"Phone\" mask=\"(000) 000-0000\">\n                  <md-hint><b>Mask:</b> (000) 000-0000</md-hint>\n                </md-input-container>\n              </div>\n            </div>\n          </md-card-content>\n        </md-card>\n\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n        <md-card>\n          <md-card-header>\n            <md-card-title>Masks and special characters</md-card-title>\n            <md-card-subtitle>\n              You could define if you want special characters propagate to the model or not with the\n              attribute <b>specialCharacters</b>.\n            </md-card-subtitle>\n          </md-card-header>\n          <md-card-content>\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <md-input-container>\n                  <input mdInput placeholder=\"CPF\" [specialCharacters]=\"false\" mask=\"000.000.000-00\" [formControl]=\"cpfFormControl\" [(ngModel)]=\"cpfModel\">\n                  <md-hint><b>Mask:</b> 000.000.000-00</md-hint>\n                </md-input-container>\n              </div>\n              <div class=\"col-md-3\">\n                <p><b>FormControl:</b> {{ cpfFormControl.value ? cpfFormControl.value : 'Empty' }}</p>\n              </div>\n              <div class=\"col-md-3\">\n                <p><b>NgModel:</b> {{ cpfModel ? cpfModel : 'Empty' }}</p>\n              </div>\n            </div>\n          </md-card-content>\n        </md-card>\n\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n        <md-grid-list cols=\"1\" rowHeight=\"140px\">\n\n          <md-grid-tile>\n            <md-toolbar color=\"primary\">\n              <span>Documentation - comming soon...</span>\n            </md-toolbar>\n          </md-grid-tile>\n\n        </md-grid-list>\n\n      </div>\n    </div>\n\n  </div>\n\n</md-sidenav-container>\n"

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);


/***/ }),

/***/ 82:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 82;


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(93);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormControl */]('30081991');
        this.cpfFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormControl */]('04787954778');
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(153),
        styles: [__webpack_require__(151)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng2_mask_ng2_mask_module__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_8__ng2_mask_ng2_mask_module__["a" /* Ng2MaskModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var resolvedPromise = Promise.resolve(null);
/** TODO(custom special characters) */
/** TODO(custom patterns) */
/** TODO(cursor position) */
/** TODO(create special characters object to specialCharacters directive) */
/** TODO(clean value when mask is not right) */
var MaskDirective = MaskDirective_1 = (function () {
    function MaskDirective(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._maskSpecialCharacters = ['/', '(', ')', '.', ':', '-', ' ', '+'];
        this._maskAwaliablePatterns = {
            '0': /\d/,
            '9': /\d/,
            'A': /[a-zA-Z0-9]/,
            'S': /[a-zA-Z]/
        };
        // tslint:disable-next-line
        this._onChange = function (_) { };
        this.modelWithSpecialCharacters = true;
    }
    MaskDirective.prototype.ngOnInit = function () {
        var _this = this;
        resolvedPromise.then(function () { return _this._applyValueChanges(); });
    };
    Object.defineProperty(MaskDirective.prototype, "maskExpression", {
        set: function (value) {
            if (!value) {
                return;
            }
            this._maskExpression = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "modelWithSpecialCharacters", {
        get: function () {
            return this._modelWithSpecialCharacters;
        },
        set: function (value) {
            this._modelWithSpecialCharacters = value;
        },
        enumerable: true,
        configurable: true
    });
    MaskDirective.prototype.onInput = function () {
        this._applyValueChanges();
    };
    /** It writes the value in the input */
    MaskDirective.prototype.writeValue = function (inputValue) {
        if (!inputValue) {
            return;
        }
        this._elementRef.nativeElement.value = this._applyMask(inputValue, this._maskExpression);
    };
    // tslint:disable-next-line
    MaskDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
        return;
    };
    /* TODO */
    // tslint:disable-next-line
    MaskDirective.prototype.registerOnTouched = function (fn) { };
    /** It disables the input element */
    MaskDirective.prototype.setDisabledState = function (isDisabled) {
        if (isDisabled) {
            this._renderer.setAttribute(this._elementRef.nativeElement, 'disabled', 'true');
        }
        else {
            this._renderer.setAttribute(this._elementRef.nativeElement, 'disabled', 'false');
        }
    };
    MaskDirective.prototype._applyMask = function (inputValue, maskExpression) {
        var cursor = 0;
        var result = '';
        var inputArray = inputValue.split('');
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
            else if (this._maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                result += maskExpression[cursor];
                cursor++;
                i--;
            }
            else if (maskExpression[cursor] === '9') {
                cursor++;
                i--;
            }
        }
        if (result.length + 1 === maskExpression.length
            && this._maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
            result += maskExpression[maskExpression.length - 1];
        }
        return result;
    };
    /** Remove mask from value, based on specialCharacters */
    MaskDirective.prototype._removeMask = function (value) {
        if (!value) {
            return value;
        }
        return value.replace(/(\/|\.|-|\(|\)| : | |\+)/gi, '');
    };
    MaskDirective.prototype._checkSymbolMask = function (inputSymbol, maskSymbol) {
        return inputSymbol === maskSymbol
            || this._maskAwaliablePatterns[maskSymbol]
                && this._maskAwaliablePatterns[maskSymbol].test(inputSymbol);
    };
    /** It applies the mask in the input and updates the control's value. */
    MaskDirective.prototype._applyValueChanges = function () {
        var val = this._elementRef.nativeElement.value;
        var maskedInput = this._applyMask(val, this._maskExpression);
        this._elementRef.nativeElement.value = maskedInput;
        if (this.modelWithSpecialCharacters === true) {
            this._onChange(maskedInput);
            return;
        }
        this._onChange(this._removeMask(val));
    };
    return MaskDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('mask'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MaskDirective.prototype, "maskExpression", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('specialCharacters'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MaskDirective.prototype, "modelWithSpecialCharacters", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])('input'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MaskDirective.prototype, "onInput", null);
MaskDirective = MaskDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[mask]',
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* forwardRef */])(function () { return MaskDirective_1; }),
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Renderer2 */]) === "function" && _b || Object])
], MaskDirective);

var MaskDirective_1, _a, _b;
//# sourceMappingURL=mask.directive.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mask_directive__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2MaskModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Ng2MaskModule = (function () {
    function Ng2MaskModule() {
    }
    return Ng2MaskModule;
}());
Ng2MaskModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__mask_directive__["a" /* MaskDirective */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__mask_directive__["a" /* MaskDirective */]]
    })
], Ng2MaskModule);

//# sourceMappingURL=ng2-mask.module.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.bundle.js.map