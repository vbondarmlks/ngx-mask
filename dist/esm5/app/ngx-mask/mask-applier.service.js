/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable } from "@angular/core";
import { config } from "./config";
var MaskApplierService = /** @class */ (function () {
    function MaskApplierService(_config) {
        this._config = _config;
        this.maskExpression = "";
        this.separator = function (str) {
            str += "";
            /** @type {?} */
            var x = str.split(".");
            /** @type {?} */
            var decimals = x.length > 1 ? "." + x[1] : "";
            /** @type {?} */
            var res = x[0];
            /** @type {?} */
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(res)) {
                res = res.replace(rgx, "$1" + " " + "$2");
            }
            return res + decimals;
        };
        this.dotSeparator = function (str) {
            str += "";
            /** @type {?} */
            var x = str.split(",");
            /** @type {?} */
            var decimals = x.length > 1 ? "," + x[1] : "";
            /** @type {?} */
            var res = x[0];
            /** @type {?} */
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(res)) {
                res = res.replace(rgx, "$1" + "." + "$2");
            }
            return res + decimals;
        };
        this.comaSeparator = function (str) {
            str += "";
            /** @type {?} */
            var x = str.split(".");
            /** @type {?} */
            var decimals = x.length > 1 ? "." + (x[1].length < 3 ? x[1] : x[1].substring(0, 2)) : "";
            /** @type {?} */
            var res = x[0];
            /** @type {?} */
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(res)) {
                res = res.replace(rgx, "$1" + "," + "$2");
            }
            return res + decimals;
        };
        this.persantage = function (str) {
            if (Number(str) >= 0 && Number(str) <= 100) {
                return true;
            }
            else {
                return false;
            }
        };
        this._shift = new Set();
        this.maskSpecialCharacters = (/** @type {?} */ (this._config)).specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.clearIfNotMatch = this._config.clearIfNotMatch;
        this.dropSpecialCharacters = this._config.dropSpecialCharacters;
        this.maskSpecialCharacters = (/** @type {?} */ (this._config)).specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.prefix = this._config.prefix;
        this.sufix = this._config.sufix;
    }
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} inputValue
     * @param {?} maskAndPattern
     * @return {?}
     */
    MaskApplierService.prototype.applyMaskWithPattern = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} inputValue
     * @param {?} maskAndPattern
     * @return {?}
     */
    function (inputValue, maskAndPattern) {
        var _a = tslib_1.__read(maskAndPattern, 2), mask = _a[0], customPattern = _a[1];
        this.customPattern = customPattern;
        return this.applyMask(inputValue, mask);
    };
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    MaskApplierService.prototype.applyMask = /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        if (inputValue === undefined ||
            inputValue === null ||
            maskExpression === undefined) {
            return "";
        }
        /** @type {?} */
        var cursor = 0;
        /** @type {?} */
        var result = "";
        /** @type {?} */
        var multi = false;
        if (inputValue.slice(0, this.prefix.length) === this.prefix) {
            inputValue = inputValue.slice(this.prefix.length, inputValue.length);
        }
        /** @type {?} */
        var inputArray = inputValue.toString().split("");
        if (maskExpression === "percent") {
            if (inputValue.match("[a-z]|[A-Z]") ||
                inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/)) {
                inputValue = inputValue.substring(0, inputValue.length - 1);
            }
            if (this.persantage(inputValue)) {
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
            /** @type {?} */
            var strForSep = inputValue.replace(/\s/g, "");
            result = this.separator(strForSep);
            position = result.length + 1;
            cursor = position;
            /** @type {?} */
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
            /** @type {?} */
            var strForSep = inputValue.replace(/\./g, "");
            result = this.dotSeparator(strForSep);
            position = result.length + 1;
            cursor = position;
            /** @type {?} */
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
            /** @type {?} */
            var strForSep = inputValue.replace(/\,/g, "");
            result = this.comaSeparator(strForSep);
            position = result.length + 1;
            cursor = position;
            /** @type {?} */
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
                            /** @type {?} */
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
                            /** @type {?} */
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
                            /** @type {?} */
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
                            /** @type {?} */
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
                            /** @type {?} */
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
                    /** @type {?} */
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
        /** @type {?} */
        var shift = 1;
        /** @type {?} */
        var newPosition = position + 1;
        while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
        }
        cb(this._shift.has(position) ? shift : 0);
        /** @type {?} */
        var res = "" + this.prefix + result;
        res = this.sufix
            ? "" + this.prefix + result + this.sufix
            : "" + this.prefix + result;
        if (result.length === 0) {
            res = "" + this.prefix + result;
        }
        return res;
    };
    /**
     * @param {?} inputSymbol
     * @return {?}
     */
    MaskApplierService.prototype._findSpecialChar = /**
     * @param {?} inputSymbol
     * @return {?}
     */
    function (inputSymbol) {
        /** @type {?} */
        var symbol = this.maskSpecialCharacters.find(function (val) { return val === inputSymbol; });
        return symbol;
    };
    /**
     * @private
     * @param {?} inputSymbol
     * @param {?} maskSymbol
     * @return {?}
     */
    MaskApplierService.prototype._checkSymbolMask = /**
     * @private
     * @param {?} inputSymbol
     * @param {?} maskSymbol
     * @return {?}
     */
    function (inputSymbol, maskSymbol) {
        this.maskAvailablePatterns = this.customPattern
            ? this.customPattern
            : this.maskAvailablePatterns;
        return (this.maskAvailablePatterns[maskSymbol] &&
            this.maskAvailablePatterns[maskSymbol].pattern &&
            this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol));
    };
    MaskApplierService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MaskApplierService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [config,] }] }
    ]; };
    return MaskApplierService;
}());
export { MaskApplierService };
if (false) {
    /** @type {?} */
    MaskApplierService.prototype.dropSpecialCharacters;
    /** @type {?} */
    MaskApplierService.prototype.showTemplate;
    /** @type {?} */
    MaskApplierService.prototype.clearIfNotMatch;
    /** @type {?} */
    MaskApplierService.prototype.maskExpression;
    /** @type {?} */
    MaskApplierService.prototype.maskSpecialCharacters;
    /** @type {?} */
    MaskApplierService.prototype.maskAvailablePatterns;
    /** @type {?} */
    MaskApplierService.prototype.prefix;
    /** @type {?} */
    MaskApplierService.prototype.sufix;
    /** @type {?} */
    MaskApplierService.prototype.customPattern;
    /**
     * @type {?}
     * @private
     */
    MaskApplierService.prototype._shift;
    /**
     * @type {?}
     * @private
     */
    MaskApplierService.prototype.separator;
    /**
     * @type {?}
     * @private
     */
    MaskApplierService.prototype.dotSeparator;
    /**
     * @type {?}
     * @private
     */
    MaskApplierService.prototype.comaSeparator;
    /**
     * @type {?}
     * @private
     */
    MaskApplierService.prototype.persantage;
    /**
     * @type {?}
     * @protected
     */
    MaskApplierService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay1hcHBsaWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFzay8iLCJzb3VyY2VzIjpbImFwcC9uZ3gtbWFzay9tYXNrLWFwcGxpZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQVcsTUFBTSxVQUFVLENBQUM7QUFFM0M7SUFjRSw0QkFBNkMsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQVR0RCxtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQXVUM0IsY0FBUyxHQUFHLFVBQUMsR0FBVztZQUM5QixHQUFHLElBQUksRUFBRSxDQUFDOztnQkFDSixDQUFDLEdBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O2dCQUM1QixRQUFRLEdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQUksQ0FBQyxDQUFDLENBQUMsQ0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFOztnQkFDbkQsR0FBRyxHQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUNoQixHQUFHLEdBQVcsY0FBYztZQUNsQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3BCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsT0FBTyxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLENBQUMsQ0FBQztRQUVNLGlCQUFZLEdBQUcsVUFBQyxHQUFXO1lBQ2pDLEdBQUcsSUFBSSxFQUFFLENBQUM7O2dCQUNKLENBQUMsR0FBYSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQzVCLFFBQVEsR0FBVyxDQUFDLENBQUMsTUFBTSxH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SUF3V0M7U0F2V1ksa0JBQWtCOzs7SUFDN0IsbURBQStEOztJQUMvRCwwQ0FBNkM7O0lBQzdDLDZDQUFtRDs7SUFDbkQsNENBQW1DOztJQUNuQyxtREFBMkQ7O0lBQzNELG1EQUFrRDs7SUFDbEQsb0NBQWlDOztJQUNqQyxtQ0FBK0I7O0lBQy9CLDJDQUEwQzs7Ozs7SUFFMUMsb0NBQTRCOzs7OztJQWdUNUIsdUNBVUU7Ozs7O0lBRUYsMENBVUU7Ozs7O0lBRUYsMkNBV0U7Ozs7O0lBRUYsd0NBTUU7Ozs7O0lBelZpQixxQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBjb25maWcsIElDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1hc2tBcHBsaWVyU2VydmljZSB7XHJcbiAgcHVibGljIGRyb3BTcGVjaWFsQ2hhcmFjdGVyczogSUNvbmZpZ1tcImRyb3BTcGVjaWFsQ2hhcmFjdGVyc1wiXTtcclxuICBwdWJsaWMgc2hvd1RlbXBsYXRlOiBJQ29uZmlnW1wic2hvd1RlbXBsYXRlXCJdO1xyXG4gIHB1YmxpYyBjbGVhcklmTm90TWF0Y2g6IElDb25maWdbXCJjbGVhcklmTm90TWF0Y2hcIl07XHJcbiAgcHVibGljIG1hc2tFeHByZXNzaW9uOiBzdHJpbmcgPSBcIlwiO1xyXG4gIHB1YmxpYyBtYXNrU3BlY2lhbENoYXJhY3RlcnM6IElDb25maWdbXCJzcGVjaWFsQ2hhcmFjdGVyc1wiXTtcclxuICBwdWJsaWMgbWFza0F2YWlsYWJsZVBhdHRlcm5zOiBJQ29uZmlnW1wicGF0dGVybnNcIl07XHJcbiAgcHVibGljIHByZWZpeDogSUNvbmZpZ1tcInByZWZpeFwiXTtcclxuICBwdWJsaWMgc3VmaXg6IElDb25maWdbXCJzdWZpeFwiXTtcclxuICBwdWJsaWMgY3VzdG9tUGF0dGVybjogSUNvbmZpZ1tcInBhdHRlcm5zXCJdO1xyXG5cclxuICBwcml2YXRlIF9zaGlmdDogU2V0PG51bWJlcj47XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihASW5qZWN0KGNvbmZpZykgcHJvdGVjdGVkIF9jb25maWc6IElDb25maWcpIHtcclxuICAgIHRoaXMuX3NoaWZ0ID0gbmV3IFNldCgpO1xyXG4gICAgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMgPSB0aGlzLl9jb25maWchLnNwZWNpYWxDaGFyYWN0ZXJzO1xyXG4gICAgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnMgPSB0aGlzLl9jb25maWcucGF0dGVybnM7XHJcbiAgICB0aGlzLmNsZWFySWZOb3RNYXRjaCA9IHRoaXMuX2NvbmZpZy5jbGVhcklmTm90TWF0Y2g7XHJcbiAgICB0aGlzLmRyb3BTcGVjaWFsQ2hhcmFjdGVycyA9IHRoaXMuX2NvbmZpZy5kcm9wU3BlY2lhbENoYXJhY3RlcnM7XHJcbiAgICB0aGlzLm1hc2tTcGVjaWFsQ2hhcmFjdGVycyA9IHRoaXMuX2NvbmZpZyEuc3BlY2lhbENoYXJhY3RlcnM7XHJcbiAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJucyA9IHRoaXMuX2NvbmZpZy5wYXR0ZXJucztcclxuICAgIHRoaXMucHJlZml4ID0gdGhpcy5fY29uZmlnLnByZWZpeDtcclxuICAgIHRoaXMuc3VmaXggPSB0aGlzLl9jb25maWcuc3VmaXg7XHJcbiAgfVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwdWJsaWMgYXBwbHlNYXNrV2l0aFBhdHRlcm4oXHJcbiAgICBpbnB1dFZhbHVlOiBzdHJpbmcsXHJcbiAgICBtYXNrQW5kUGF0dGVybjogW3N0cmluZywgSUNvbmZpZ1tcInBhdHRlcm5zXCJdXVxyXG4gICk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBbbWFzaywgY3VzdG9tUGF0dGVybl0gPSBtYXNrQW5kUGF0dGVybjtcclxuICAgIHRoaXMuY3VzdG9tUGF0dGVybiA9IGN1c3RvbVBhdHRlcm47XHJcbiAgICByZXR1cm4gdGhpcy5hcHBseU1hc2soaW5wdXRWYWx1ZSwgbWFzayk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhcHBseU1hc2soXHJcbiAgICBpbnB1dFZhbHVlOiBzdHJpbmcsXHJcbiAgICBtYXNrRXhwcmVzc2lvbjogc3RyaW5nLFxyXG4gICAgcG9zaXRpb246IG51bWJlciA9IDAsXHJcbiAgICBjYjogRnVuY3Rpb24gPSAoKSA9PiB7fVxyXG4gICk6IHN0cmluZyB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGlucHV0VmFsdWUgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICBpbnB1dFZhbHVlID09PSBudWxsIHx8XHJcbiAgICAgIG1hc2tFeHByZXNzaW9uID09PSB1bmRlZmluZWRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIGxldCBjdXJzb3I6IG51bWJlciA9IDA7XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmcgPSBgYDtcclxuICAgIGxldCBtdWx0aTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChpbnB1dFZhbHVlLnNsaWNlKDAsIHRoaXMucHJlZml4Lmxlbmd0aCkgPT09IHRoaXMucHJlZml4KSB7XHJcbiAgICAgIGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnNsaWNlKHRoaXMucHJlZml4Lmxlbmd0aCwgaW5wdXRWYWx1ZS5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlucHV0QXJyYXk6IHN0cmluZ1tdID0gaW5wdXRWYWx1ZS50b1N0cmluZygpLnNwbGl0KFwiXCIpO1xyXG4gICAgaWYgKG1hc2tFeHByZXNzaW9uID09PSBcInBlcmNlbnRcIikge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaW5wdXRWYWx1ZS5tYXRjaChcIlthLXpdfFtBLVpdXCIpIHx8XHJcbiAgICAgICAgaW5wdXRWYWx1ZS5tYXRjaCgvWy0hJCVeJiooKV8rfH49YHt9XFxbXFxdOlwiOyc8Pj8sXFwvXS8pXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnN1YnN0cmluZygwLCBpbnB1dFZhbHVlLmxlbmd0aCAtIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnBlcnNhbnRhZ2UoaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICByZXN1bHQgPSBpbnB1dFZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCA9IGlucHV0VmFsdWUuc3Vic3RyaW5nKDAsIGlucHV0VmFsdWUubGVuZ3RoIC0gMSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobWFza0V4cHJlc3Npb24gPT09IFwic2VwYXJhdG9yXCIpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGlucHV0VmFsdWUubWF0Y2goXCJbYS16XXxbQS1aXVwiKSB8fFxyXG4gICAgICAgIGlucHV0VmFsdWUubWF0Y2goL1shJCVeJiooKV8rfH49YHt9XFxbXFxdOlwiOyc8Pj9cXC9dLylcclxuICAgICAgKSB7XHJcbiAgICAgICAgaW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUuc3Vic3RyaW5nKDAsIGlucHV0VmFsdWUubGVuZ3RoIC0gMSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc3RyRm9yU2VwOiBzdHJpbmcgPSBpbnB1dFZhbHVlLnJlcGxhY2UoL1xccy9nLCBcIlwiKTtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5zZXBhcmF0b3Ioc3RyRm9yU2VwKTtcclxuICAgICAgcG9zaXRpb24gPSByZXN1bHQubGVuZ3RoICsgMTtcclxuICAgICAgY3Vyc29yID0gcG9zaXRpb247XHJcbiAgICAgIGNvbnN0IHNoaWZ0U3RlcDogbnVtYmVyID0gL1xcKnxcXD8vZy50ZXN0KG1hc2tFeHByZXNzaW9uLnNsaWNlKDAsIGN1cnNvcikpXHJcbiAgICAgICAgPyBpbnB1dEFycmF5Lmxlbmd0aFxyXG4gICAgICAgIDogY3Vyc29yO1xyXG4gICAgICB0aGlzLl9zaGlmdC5hZGQoc2hpZnRTdGVwICsgdGhpcy5wcmVmaXgubGVuZ3RoIHx8IDApO1xyXG4gICAgfSBlbHNlIGlmIChtYXNrRXhwcmVzc2lvbiA9PT0gXCJkb3Rfc2VwYXJhdG9yXCIpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGlucHV0VmFsdWUubWF0Y2goXCJbYS16XXxbQS1aXVwiKSB8fFxyXG4gICAgICAgIGlucHV0VmFsdWUubWF0Y2goL1shJCVeJiooKV8rfH49YHt9XFxbXFxdOlwiOyc8Pj9cXC9dLylcclxuICAgICAgKSB7XHJcbiAgICAgICAgaW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUuc3Vic3RyaW5nKDAsIGlucHV0VmFsdWUubGVuZ3RoIC0gMSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc3RyRm9yU2VwOiBzdHJpbmcgPSBpbnB1dFZhbHVlLnJlcGxhY2UoL1xcLi9nLCBcIlwiKTtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5kb3RTZXBhcmF0b3Ioc3RyRm9yU2VwKTtcclxuICAgICAgcG9zaXRpb24gPSByZXN1bHQubGVuZ3RoICsgMTtcclxuICAgICAgY3Vyc29yID0gcG9zaXRpb247XHJcbiAgICAgIGNvbnN0IHNoaWZ0U3RlcDogbnVtYmVyID0gL1xcKnxcXD8vZy50ZXN0KG1hc2tFeHByZXNzaW9uLnNsaWNlKDAsIGN1cnNvcikpXHJcbiAgICAgICAgPyBpbnB1dEFycmF5Lmxlbmd0aFxyXG4gICAgICAgIDogY3Vyc29yO1xyXG4gICAgICB0aGlzLl9zaGlmdC5hZGQoc2hpZnRTdGVwICsgdGhpcy5wcmVmaXgubGVuZ3RoIHx8IDApO1xyXG4gICAgfSBlbHNlIGlmIChtYXNrRXhwcmVzc2lvbiA9PT0gXCJjb21hX3NlcGFyYXRvclwiKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpbnB1dFZhbHVlLm1hdGNoKFwiW2Etel18W0EtWl1cIikgfHxcclxuICAgICAgICBpbnB1dFZhbHVlLm1hdGNoKC9bISQlXiYqKClfK3x+PWB7fVxcW1xcXTpcIjsnPD4/XFwvXS8pXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnN1YnN0cmluZygwLCBpbnB1dFZhbHVlLmxlbmd0aCAtIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHN0ckZvclNlcDogc3RyaW5nID0gaW5wdXRWYWx1ZS5yZXBsYWNlKC9cXCwvZywgXCJcIik7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuY29tYVNlcGFyYXRvcihzdHJGb3JTZXApO1xyXG4gICAgICBwb3NpdGlvbiA9IHJlc3VsdC5sZW5ndGggKyAxO1xyXG4gICAgICBjdXJzb3IgPSBwb3NpdGlvbjtcclxuICAgICAgY29uc3Qgc2hpZnRTdGVwOiBudW1iZXIgPSAvXFwqfFxcPy9nLnRlc3QobWFza0V4cHJlc3Npb24uc2xpY2UoMCwgY3Vyc29yKSlcclxuICAgICAgICA/IGlucHV0QXJyYXkubGVuZ3RoXHJcbiAgICAgICAgOiBjdXJzb3I7XHJcbiAgICAgIHRoaXMuX3NoaWZ0LmFkZChzaGlmdFN0ZXAgKyB0aGlzLnByZWZpeC5sZW5ndGggfHwgMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgZm9yIChcclxuICAgICAgICBsZXQgaTogbnVtYmVyID0gMCwgaW5wdXRTeW1ib2w6IHN0cmluZyA9IGlucHV0QXJyYXlbMF07XHJcbiAgICAgICAgaSA8IGlucHV0QXJyYXkubGVuZ3RoO1xyXG4gICAgICAgIGkrKywgaW5wdXRTeW1ib2wgPSBpbnB1dEFycmF5W2ldXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChjdXJzb3IgPT09IG1hc2tFeHByZXNzaW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMuX2NoZWNrU3ltYm9sTWFzayhpbnB1dFN5bWJvbCwgbWFza0V4cHJlc3Npb25bY3Vyc29yXSkgJiZcclxuICAgICAgICAgIG1hc2tFeHByZXNzaW9uW2N1cnNvciArIDFdID09PSBcIj9cIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xyXG4gICAgICAgICAgY3Vyc29yICs9IDI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIG1hc2tFeHByZXNzaW9uW2N1cnNvciArIDFdID09PSBcIipcIiAmJlxyXG4gICAgICAgICAgbXVsdGkgJiZcclxuICAgICAgICAgIHRoaXMuX2NoZWNrU3ltYm9sTWFzayhpbnB1dFN5bWJvbCwgbWFza0V4cHJlc3Npb25bY3Vyc29yICsgMl0pXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gaW5wdXRTeW1ib2w7XHJcbiAgICAgICAgICBjdXJzb3IgKz0gMztcclxuICAgICAgICAgIG11bHRpID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIHRoaXMuX2NoZWNrU3ltYm9sTWFzayhpbnB1dFN5bWJvbCwgbWFza0V4cHJlc3Npb25bY3Vyc29yXSkgJiZcclxuICAgICAgICAgIG1hc2tFeHByZXNzaW9uW2N1cnNvciArIDFdID09PSBcIipcIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xyXG4gICAgICAgICAgbXVsdGkgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAxXSA9PT0gXCI/XCIgJiZcclxuICAgICAgICAgIHRoaXMuX2NoZWNrU3ltYm9sTWFzayhpbnB1dFN5bWJvbCwgbWFza0V4cHJlc3Npb25bY3Vyc29yICsgMl0pXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gaW5wdXRTeW1ib2w7XHJcbiAgICAgICAgICBjdXJzb3IgKz0gMztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NoZWNrU3ltYm9sTWFzayhpbnB1dFN5bWJvbCwgbWFza0V4cHJlc3Npb25bY3Vyc29yXSkpIHtcclxuICAgICAgICAgIGlmIChtYXNrRXhwcmVzc2lvbltjdXJzb3JdID09PSBcIkhcIikge1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyKGlucHV0U3ltYm9sKSA+IDIpIHtcclxuICAgICAgICAgICAgICByZXN1bHQgKz0gMDtcclxuICAgICAgICAgICAgICBjdXJzb3IgKz0gMTtcclxuICAgICAgICAgICAgICBjb25zdCBzaGlmdFN0ZXA6IG51bWJlciA9IC9cXCp8XFw/L2cudGVzdChcclxuICAgICAgICAgICAgICAgIG1hc2tFeHByZXNzaW9uLnNsaWNlKDAsIGN1cnNvcilcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA/IGlucHV0QXJyYXkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA6IGN1cnNvcjtcclxuICAgICAgICAgICAgICB0aGlzLl9zaGlmdC5hZGQoc2hpZnRTdGVwICsgdGhpcy5wcmVmaXgubGVuZ3RoIHx8IDApO1xyXG4gICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG1hc2tFeHByZXNzaW9uW2N1cnNvcl0gPT09IFwiaFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IFwiMlwiICYmIE51bWJlcihpbnB1dFN5bWJvbCkgPiAzKSB7XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChtYXNrRXhwcmVzc2lvbltjdXJzb3JdID09PSBcIm1cIikge1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyKGlucHV0U3ltYm9sKSA+IDUpIHtcclxuICAgICAgICAgICAgICByZXN1bHQgKz0gMDtcclxuICAgICAgICAgICAgICBjdXJzb3IgKz0gMTtcclxuICAgICAgICAgICAgICBjb25zdCBzaGlmdFN0ZXA6IG51bWJlciA9IC9cXCp8XFw/L2cudGVzdChcclxuICAgICAgICAgICAgICAgIG1hc2tFeHByZXNzaW9uLnNsaWNlKDAsIGN1cnNvcilcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA/IGlucHV0QXJyYXkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA6IGN1cnNvcjtcclxuICAgICAgICAgICAgICB0aGlzLl9zaGlmdC5hZGQoc2hpZnRTdGVwICsgdGhpcy5wcmVmaXgubGVuZ3RoIHx8IDApO1xyXG4gICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG1hc2tFeHByZXNzaW9uW2N1cnNvcl0gPT09IFwic1wiKSB7XHJcbiAgICAgICAgICAgIGlmIChOdW1iZXIoaW5wdXRTeW1ib2wpID4gNSkge1xyXG4gICAgICAgICAgICAgIHJlc3VsdCArPSAwO1xyXG4gICAgICAgICAgICAgIGN1cnNvciArPSAxO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNoaWZ0U3RlcDogbnVtYmVyID0gL1xcKnxcXD8vZy50ZXN0KFxyXG4gICAgICAgICAgICAgICAgbWFza0V4cHJlc3Npb24uc2xpY2UoMCwgY3Vyc29yKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgID8gaW5wdXRBcnJheS5sZW5ndGhcclxuICAgICAgICAgICAgICAgIDogY3Vyc29yO1xyXG4gICAgICAgICAgICAgIHRoaXMuX3NoaWZ0LmFkZChzaGlmdFN0ZXAgKyB0aGlzLnByZWZpeC5sZW5ndGggfHwgMCk7XHJcbiAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gaW5wdXRTeW1ib2w7XHJcbiAgICAgICAgICBjdXJzb3IrKztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NoZWNrU3ltYm9sTWFzayhpbnB1dFN5bWJvbCwgbWFza0V4cHJlc3Npb25bY3Vyc29yXSkpIHtcclxuICAgICAgICAgIGlmIChtYXNrRXhwcmVzc2lvbltjdXJzb3JdID09PSBcImRcIikge1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyKGlucHV0U3ltYm9sKSA+IDMpIHtcclxuICAgICAgICAgICAgICByZXN1bHQgKz0gMDtcclxuICAgICAgICAgICAgICBjdXJzb3IgKz0gMTtcclxuICAgICAgICAgICAgICBjb25zdCBzaGlmdFN0ZXA6IG51bWJlciA9IC9cXCp8XFw/L2cudGVzdChcclxuICAgICAgICAgICAgICAgIG1hc2tFeHByZXNzaW9uLnNsaWNlKDAsIGN1cnNvcilcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA/IGlucHV0QXJyYXkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA6IGN1cnNvcjtcclxuICAgICAgICAgICAgICB0aGlzLl9zaGlmdC5hZGQoc2hpZnRTdGVwICsgdGhpcy5wcmVmaXgubGVuZ3RoIHx8IDApO1xyXG4gICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG1hc2tFeHByZXNzaW9uW2N1cnNvciAtIDFdID09PSBcImRcIikge1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyKGlucHV0VmFsdWUuc2xpY2UoY3Vyc29yIC0gMSwgY3Vyc29yICsgMSkpID4gMzEpIHtcclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG1hc2tFeHByZXNzaW9uW2N1cnNvcl0gPT09IFwibVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChOdW1iZXIoaW5wdXRTeW1ib2wpID4gMSkge1xyXG4gICAgICAgICAgICAgIHJlc3VsdCArPSAwO1xyXG4gICAgICAgICAgICAgIGN1cnNvciArPSAxO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNoaWZ0U3RlcDogbnVtYmVyID0gL1xcKnxcXD8vZy50ZXN0KFxyXG4gICAgICAgICAgICAgICAgbWFza0V4cHJlc3Npb24uc2xpY2UoMCwgY3Vyc29yKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgID8gaW5wdXRBcnJheS5sZW5ndGhcclxuICAgICAgICAgICAgICAgIDogY3Vyc29yO1xyXG4gICAgICAgICAgICAgIHRoaXMuX3NoaWZ0LmFkZChzaGlmdFN0ZXAgKyB0aGlzLnByZWZpeC5sZW5ndGggfHwgMCk7XHJcbiAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobWFza0V4cHJlc3Npb25bY3Vyc29yIC0gMV0gPT09IFwibVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChOdW1iZXIoaW5wdXRWYWx1ZS5zbGljZShjdXJzb3IgLSAxLCBjdXJzb3IgKyAxKSkgPiAxMikge1xyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXN1bHQgKz0gaW5wdXRTeW1ib2w7XHJcbiAgICAgICAgICBjdXJzb3IrKztcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMuaW5kZXhPZihtYXNrRXhwcmVzc2lvbltjdXJzb3JdKSAhPT0gLTFcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBtYXNrRXhwcmVzc2lvbltjdXJzb3JdO1xyXG4gICAgICAgICAgY3Vyc29yKys7XHJcbiAgICAgICAgICBjb25zdCBzaGlmdFN0ZXA6IG51bWJlciA9IC9cXCp8XFw/L2cudGVzdChcclxuICAgICAgICAgICAgbWFza0V4cHJlc3Npb24uc2xpY2UoMCwgY3Vyc29yKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgICA/IGlucHV0QXJyYXkubGVuZ3RoXHJcbiAgICAgICAgICAgIDogY3Vyc29yO1xyXG4gICAgICAgICAgdGhpcy5fc2hpZnQuYWRkKHNoaWZ0U3RlcCArIHRoaXMucHJlZml4Lmxlbmd0aCB8fCAwKTtcclxuICAgICAgICAgIGktLTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMuaW5kZXhPZihpbnB1dFN5bWJvbCkgPiAtMSAmJlxyXG4gICAgICAgICAgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnNbbWFza0V4cHJlc3Npb25bY3Vyc29yXV0gJiZcclxuICAgICAgICAgIHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zW21hc2tFeHByZXNzaW9uW2N1cnNvcl1dLm9wdGlvbmFsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjdXJzb3IrKztcclxuICAgICAgICAgIGktLTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgdGhpcy5tYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAxXSA9PT0gXCIqXCIgJiZcclxuICAgICAgICAgIHRoaXMuX2ZpbmRTcGVjaWFsQ2hhcih0aGlzLm1hc2tFeHByZXNzaW9uW2N1cnNvciArIDJdKSAmJlxyXG4gICAgICAgICAgdGhpcy5fZmluZFNwZWNpYWxDaGFyKGlucHV0U3ltYm9sKSA9PT1cclxuICAgICAgICAgICAgdGhpcy5tYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAyXSAmJlxyXG4gICAgICAgICAgbXVsdGlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGN1cnNvciArPSAzO1xyXG4gICAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICByZXN1bHQubGVuZ3RoICsgMSA9PT0gbWFza0V4cHJlc3Npb24ubGVuZ3RoICYmXHJcbiAgICAgIHRoaXMubWFza1NwZWNpYWxDaGFyYWN0ZXJzLmluZGV4T2YoXHJcbiAgICAgICAgbWFza0V4cHJlc3Npb25bbWFza0V4cHJlc3Npb24ubGVuZ3RoIC0gMV1cclxuICAgICAgKSAhPT0gLTFcclxuICAgICkge1xyXG4gICAgICByZXN1bHQgKz0gbWFza0V4cHJlc3Npb25bbWFza0V4cHJlc3Npb24ubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNoaWZ0OiBudW1iZXIgPSAxO1xyXG4gICAgbGV0IG5ld1Bvc2l0aW9uOiBudW1iZXIgPSBwb3NpdGlvbiArIDE7XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuX3NoaWZ0LmhhcyhuZXdQb3NpdGlvbikpIHtcclxuICAgICAgc2hpZnQrKztcclxuICAgICAgbmV3UG9zaXRpb24rKztcclxuICAgIH1cclxuXHJcbiAgICBjYih0aGlzLl9zaGlmdC5oYXMocG9zaXRpb24pID8gc2hpZnQgOiAwKTtcclxuICAgIGxldCByZXM6IHN0cmluZyA9IGAke3RoaXMucHJlZml4fSR7cmVzdWx0fWA7XHJcbiAgICByZXMgPSB0aGlzLnN1Zml4XHJcbiAgICAgID8gYCR7dGhpcy5wcmVmaXh9JHtyZXN1bHR9JHt0aGlzLnN1Zml4fWBcclxuICAgICAgOiBgJHt0aGlzLnByZWZpeH0ke3Jlc3VsdH1gO1xyXG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmVzID0gYCR7dGhpcy5wcmVmaXh9JHtyZXN1bHR9YDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG4gIHB1YmxpYyBfZmluZFNwZWNpYWxDaGFyKGlucHV0U3ltYm9sOiBzdHJpbmcpOiB1bmRlZmluZWQgfCBzdHJpbmcge1xyXG4gICAgY29uc3Qgc3ltYm9sOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLm1hc2tTcGVjaWFsQ2hhcmFjdGVycy5maW5kKFxyXG4gICAgICAodmFsOiBzdHJpbmcpID0+IHZhbCA9PT0gaW5wdXRTeW1ib2xcclxuICAgICk7XHJcbiAgICByZXR1cm4gc3ltYm9sO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sOiBzdHJpbmcsIG1hc2tTeW1ib2w6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnMgPSB0aGlzLmN1c3RvbVBhdHRlcm5cclxuICAgICAgPyB0aGlzLmN1c3RvbVBhdHRlcm5cclxuICAgICAgOiB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJucztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zW21hc2tTeW1ib2xdICYmXHJcbiAgICAgIHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zW21hc2tTeW1ib2xdLnBhdHRlcm4gJiZcclxuICAgICAgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnNbbWFza1N5bWJvbF0ucGF0dGVybi50ZXN0KGlucHV0U3ltYm9sKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VwYXJhdG9yID0gKHN0cjogc3RyaW5nKSA9PiB7XHJcbiAgICBzdHIgKz0gXCJcIjtcclxuICAgIGNvbnN0IHg6IHN0cmluZ1tdID0gc3RyLnNwbGl0KFwiLlwiKTtcclxuICAgIGNvbnN0IGRlY2ltYWxzOiBzdHJpbmcgPSB4Lmxlbmd0aCA+IDEgPyBgLiR7eFsxXX1gIDogXCJcIjtcclxuICAgIGxldCByZXM6IHN0cmluZyA9IHhbMF07XHJcbiAgICBjb25zdCByZ3g6IFJlZ0V4cCA9IC8oXFxkKykoXFxkezN9KS87XHJcbiAgICB3aGlsZSAocmd4LnRlc3QocmVzKSkge1xyXG4gICAgICByZXMgPSByZXMucmVwbGFjZShyZ3gsIFwiJDFcIiArIFwiIFwiICsgXCIkMlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXMgKyBkZWNpbWFscztcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGRvdFNlcGFyYXRvciA9IChzdHI6IHN0cmluZykgPT4ge1xyXG4gICAgc3RyICs9IFwiXCI7XHJcbiAgICBjb25zdCB4OiBzdHJpbmdbXSA9IHN0ci5zcGxpdChcIixcIik7XHJcbiAgICBjb25zdCBkZWNpbWFsczogc3RyaW5nID0geC5sZW5ndGggPiAxID8gYCwke3hbMV19YCA6IFwiXCI7XHJcbiAgICBsZXQgcmVzOiBzdHJpbmcgPSB4WzBdO1xyXG4gICAgY29uc3Qgcmd4OiBSZWdFeHAgPSAvKFxcZCspKFxcZHszfSkvO1xyXG4gICAgd2hpbGUgKHJneC50ZXN0KHJlcykpIHtcclxuICAgICAgcmVzID0gcmVzLnJlcGxhY2Uocmd4LCBcIiQxXCIgKyBcIi5cIiArIFwiJDJcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzICsgZGVjaW1hbHM7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBjb21hU2VwYXJhdG9yID0gKHN0cjogc3RyaW5nKSA9PiB7XHJcbiAgICBzdHIgKz0gXCJcIjtcclxuICAgIGNvbnN0IHg6IHN0cmluZ1tdID0gc3RyLnNwbGl0KFwiLlwiKTtcclxuICAgIGNvbnN0IGRlY2ltYWxzOiBzdHJpbmcgPVxyXG4gICAgICB4Lmxlbmd0aCA+IDEgPyBgLiR7eFsxXS5sZW5ndGggPCAzID8geFsxXSA6IHhbMV0uc3Vic3RyaW5nKDAsIDIpfWAgOiBgYDtcclxuICAgIGxldCByZXM6IHN0cmluZyA9IHhbMF07XHJcbiAgICBjb25zdCByZ3g6IFJlZ0V4cCA9IC8oXFxkKykoXFxkezN9KS87XHJcbiAgICB3aGlsZSAocmd4LnRlc3QocmVzKSkge1xyXG4gICAgICByZXMgPSByZXMucmVwbGFjZShyZ3gsIFwiJDFcIiArIFwiLFwiICsgXCIkMlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXMgKyBkZWNpbWFscztcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHBlcnNhbnRhZ2UgPSAoc3RyOiBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICAgIGlmIChOdW1iZXIoc3RyKSA+PSAwICYmIE51bWJlcihzdHIpIDw9IDEwMCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==