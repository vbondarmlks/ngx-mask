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
            var decimals = x.length > 1
                ? "." + (x[1].length > 0
                    ? x[1].length > 2
                        ? x[1].substring(0, 2)
                        : x[1]
                    : x[1])
                : "00";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay1hcHBsaWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFzay8iLCJzb3VyY2VzIjpbImFwcC9uZ3gtbWFzay9tYXNrLWFwcGxpZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQVcsTUFBTSxVQUFVLENBQUM7QUFFM0M7SUFjRSw0QkFBNkMsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQVR0RCxtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQXVUM0IsY0FBUyxHQUFHLFVBQUMsR0FBVztZQUM5QixHQUFHLElBQUksRUFBRSxDQUFDOztnQkFDSixDQUFDLEdBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O2dCQUM1QixRQUFRLEdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQUksQ0FBQyxDQUFDLENBQUMsQ0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFOztnQkFDbkQsR0FBRyxHQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUNoQixHQUFHLEdBQVcsY0FBYztZQUNsQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3BCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsT0FBTyxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLENBQUMsQ0FBQztRQUVNLGlCQUFZLEdBQUcsVUFBQyxHQUFXO1lBQ2pDLEdBQUcsSUFBSSxFQUFFLENBQUM7O2dCQUNKLENBQUMsR0FBYSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQzVCLFFBQVEsR0FBVyxDQUFDLENBQUMsTUFBTSxH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QUMsV0FBVyxDQUFDLENBQ2pFLENBQUM7SUFDSixDQUFDOztnQkExVEYsVUFBVTs7OztnREFjVyxNQUFNLFNBQUMsTUFBTTs7SUFrV25DLHlCQUFDO0NBQUEsQUFoWEQsSUFnWEM7U0EvV1ksa0JBQWtCOzs7SUFDN0IsbURBQStEOztJQUMvRCwwQ0FBNkM7O0lBQzdDLDZDQUFtRDs7SUFDbkQsNENBQW1DOztJQUNuQyxtREFBMkQ7O0lBQzNELG1EQUFrRDs7SUFDbEQsb0NBQWlDOztJQUNqQyxtQ0FBK0I7O0lBQy9CLDJDQUEwQzs7Ozs7SUFFMUMsb0NBQTRCOzs7OztJQWdUNUIsdUNBVUU7Ozs7O0lBRUYsMENBVUU7Ozs7O0lBRUYsMkNBbUJFOzs7OztJQUVGLHdDQU1FOzs7OztJQWpXaUIscUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgY29uZmlnLCBJQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNYXNrQXBwbGllclNlcnZpY2Uge1xyXG4gIHB1YmxpYyBkcm9wU3BlY2lhbENoYXJhY3RlcnM6IElDb25maWdbXCJkcm9wU3BlY2lhbENoYXJhY3RlcnNcIl07XHJcbiAgcHVibGljIHNob3dUZW1wbGF0ZTogSUNvbmZpZ1tcInNob3dUZW1wbGF0ZVwiXTtcclxuICBwdWJsaWMgY2xlYXJJZk5vdE1hdGNoOiBJQ29uZmlnW1wiY2xlYXJJZk5vdE1hdGNoXCJdO1xyXG4gIHB1YmxpYyBtYXNrRXhwcmVzc2lvbjogc3RyaW5nID0gXCJcIjtcclxuICBwdWJsaWMgbWFza1NwZWNpYWxDaGFyYWN0ZXJzOiBJQ29uZmlnW1wic3BlY2lhbENoYXJhY3RlcnNcIl07XHJcbiAgcHVibGljIG1hc2tBdmFpbGFibGVQYXR0ZXJuczogSUNvbmZpZ1tcInBhdHRlcm5zXCJdO1xyXG4gIHB1YmxpYyBwcmVmaXg6IElDb25maWdbXCJwcmVmaXhcIl07XHJcbiAgcHVibGljIHN1Zml4OiBJQ29uZmlnW1wic3VmaXhcIl07XHJcbiAgcHVibGljIGN1c3RvbVBhdHRlcm46IElDb25maWdbXCJwYXR0ZXJuc1wiXTtcclxuXHJcbiAgcHJpdmF0ZSBfc2hpZnQ6IFNldDxudW1iZXI+O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoQEluamVjdChjb25maWcpIHByb3RlY3RlZCBfY29uZmlnOiBJQ29uZmlnKSB7XHJcbiAgICB0aGlzLl9zaGlmdCA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMubWFza1NwZWNpYWxDaGFyYWN0ZXJzID0gdGhpcy5fY29uZmlnIS5zcGVjaWFsQ2hhcmFjdGVycztcclxuICAgIHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zID0gdGhpcy5fY29uZmlnLnBhdHRlcm5zO1xyXG4gICAgdGhpcy5jbGVhcklmTm90TWF0Y2ggPSB0aGlzLl9jb25maWcuY2xlYXJJZk5vdE1hdGNoO1xyXG4gICAgdGhpcy5kcm9wU3BlY2lhbENoYXJhY3RlcnMgPSB0aGlzLl9jb25maWcuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzO1xyXG4gICAgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMgPSB0aGlzLl9jb25maWchLnNwZWNpYWxDaGFyYWN0ZXJzO1xyXG4gICAgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnMgPSB0aGlzLl9jb25maWcucGF0dGVybnM7XHJcbiAgICB0aGlzLnByZWZpeCA9IHRoaXMuX2NvbmZpZy5wcmVmaXg7XHJcbiAgICB0aGlzLnN1Zml4ID0gdGhpcy5fY29uZmlnLnN1Zml4O1xyXG4gIH1cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHVibGljIGFwcGx5TWFza1dpdGhQYXR0ZXJuKFxyXG4gICAgaW5wdXRWYWx1ZTogc3RyaW5nLFxyXG4gICAgbWFza0FuZFBhdHRlcm46IFtzdHJpbmcsIElDb25maWdbXCJwYXR0ZXJuc1wiXV1cclxuICApOiBzdHJpbmcge1xyXG4gICAgY29uc3QgW21hc2ssIGN1c3RvbVBhdHRlcm5dID0gbWFza0FuZFBhdHRlcm47XHJcbiAgICB0aGlzLmN1c3RvbVBhdHRlcm4gPSBjdXN0b21QYXR0ZXJuO1xyXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlNYXNrKGlucHV0VmFsdWUsIG1hc2spO1xyXG4gIH1cclxuICBwdWJsaWMgYXBwbHlNYXNrKFxyXG4gICAgaW5wdXRWYWx1ZTogc3RyaW5nLFxyXG4gICAgbWFza0V4cHJlc3Npb246IHN0cmluZyxcclxuICAgIHBvc2l0aW9uOiBudW1iZXIgPSAwLFxyXG4gICAgY2I6IEZ1bmN0aW9uID0gKCkgPT4ge31cclxuICApOiBzdHJpbmcge1xyXG4gICAgaWYgKFxyXG4gICAgICBpbnB1dFZhbHVlID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgaW5wdXRWYWx1ZSA9PT0gbnVsbCB8fFxyXG4gICAgICBtYXNrRXhwcmVzc2lvbiA9PT0gdW5kZWZpbmVkXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICBsZXQgY3Vyc29yOiBudW1iZXIgPSAwO1xyXG4gICAgbGV0IHJlc3VsdDogc3RyaW5nID0gYGA7XHJcbiAgICBsZXQgbXVsdGk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoaW5wdXRWYWx1ZS5zbGljZSgwLCB0aGlzLnByZWZpeC5sZW5ndGgpID09PSB0aGlzLnByZWZpeCkge1xyXG4gICAgICBpbnB1dFZhbHVlID0gaW5wdXRWYWx1ZS5zbGljZSh0aGlzLnByZWZpeC5sZW5ndGgsIGlucHV0VmFsdWUubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnB1dEFycmF5OiBzdHJpbmdbXSA9IGlucHV0VmFsdWUudG9TdHJpbmcoKS5zcGxpdChcIlwiKTtcclxuICAgIGlmIChtYXNrRXhwcmVzc2lvbiA9PT0gXCJwZXJjZW50XCIpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGlucHV0VmFsdWUubWF0Y2goXCJbYS16XXxbQS1aXVwiKSB8fFxyXG4gICAgICAgIGlucHV0VmFsdWUubWF0Y2goL1stISQlXiYqKClfK3x+PWB7fVxcW1xcXTpcIjsnPD4/LFxcL10vKVxyXG4gICAgICApIHtcclxuICAgICAgICBpbnB1dFZhbHVlID0gaW5wdXRWYWx1ZS5zdWJzdHJpbmcoMCwgaW5wdXRWYWx1ZS5sZW5ndGggLSAxKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5wZXJzYW50YWdlKGlucHV0VmFsdWUpKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gaW5wdXRWYWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgPSBpbnB1dFZhbHVlLnN1YnN0cmluZygwLCBpbnB1dFZhbHVlLmxlbmd0aCAtIDEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG1hc2tFeHByZXNzaW9uID09PSBcInNlcGFyYXRvclwiKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpbnB1dFZhbHVlLm1hdGNoKFwiW2Etel18W0EtWl1cIikgfHxcclxuICAgICAgICBpbnB1dFZhbHVlLm1hdGNoKC9bISQlXiYqKClfK3x+PWB7fVxcW1xcXTpcIjsnPD4/XFwvXS8pXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnN1YnN0cmluZygwLCBpbnB1dFZhbHVlLmxlbmd0aCAtIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHN0ckZvclNlcDogc3RyaW5nID0gaW5wdXRWYWx1ZS5yZXBsYWNlKC9cXHMvZywgXCJcIik7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuc2VwYXJhdG9yKHN0ckZvclNlcCk7XHJcbiAgICAgIHBvc2l0aW9uID0gcmVzdWx0Lmxlbmd0aCArIDE7XHJcbiAgICAgIGN1cnNvciA9IHBvc2l0aW9uO1xyXG4gICAgICBjb25zdCBzaGlmdFN0ZXA6IG51bWJlciA9IC9cXCp8XFw/L2cudGVzdChtYXNrRXhwcmVzc2lvbi5zbGljZSgwLCBjdXJzb3IpKVxyXG4gICAgICAgID8gaW5wdXRBcnJheS5sZW5ndGhcclxuICAgICAgICA6IGN1cnNvcjtcclxuICAgICAgdGhpcy5fc2hpZnQuYWRkKHNoaWZ0U3RlcCArIHRoaXMucHJlZml4Lmxlbmd0aCB8fCAwKTtcclxuICAgIH0gZWxzZSBpZiAobWFza0V4cHJlc3Npb24gPT09IFwiZG90X3NlcGFyYXRvclwiKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpbnB1dFZhbHVlLm1hdGNoKFwiW2Etel18W0EtWl1cIikgfHxcclxuICAgICAgICBpbnB1dFZhbHVlLm1hdGNoKC9bISQlXiYqKClfK3x+PWB7fVxcW1xcXTpcIjsnPD4/XFwvXS8pXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnN1YnN0cmluZygwLCBpbnB1dFZhbHVlLmxlbmd0aCAtIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHN0ckZvclNlcDogc3RyaW5nID0gaW5wdXRWYWx1ZS5yZXBsYWNlKC9cXC4vZywgXCJcIik7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuZG90U2VwYXJhdG9yKHN0ckZvclNlcCk7XHJcbiAgICAgIHBvc2l0aW9uID0gcmVzdWx0Lmxlbmd0aCArIDE7XHJcbiAgICAgIGN1cnNvciA9IHBvc2l0aW9uO1xyXG4gICAgICBjb25zdCBzaGlmdFN0ZXA6IG51bWJlciA9IC9cXCp8XFw/L2cudGVzdChtYXNrRXhwcmVzc2lvbi5zbGljZSgwLCBjdXJzb3IpKVxyXG4gICAgICAgID8gaW5wdXRBcnJheS5sZW5ndGhcclxuICAgICAgICA6IGN1cnNvcjtcclxuICAgICAgdGhpcy5fc2hpZnQuYWRkKHNoaWZ0U3RlcCArIHRoaXMucHJlZml4Lmxlbmd0aCB8fCAwKTtcclxuICAgIH0gZWxzZSBpZiAobWFza0V4cHJlc3Npb24gPT09IFwiY29tYV9zZXBhcmF0b3JcIikge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaW5wdXRWYWx1ZS5tYXRjaChcIlthLXpdfFtBLVpdXCIpIHx8XHJcbiAgICAgICAgaW5wdXRWYWx1ZS5tYXRjaCgvWyEkJV4mKigpXyt8fj1ge31cXFtcXF06XCI7Jzw+P1xcL10vKVxyXG4gICAgICApIHtcclxuICAgICAgICBpbnB1dFZhbHVlID0gaW5wdXRWYWx1ZS5zdWJzdHJpbmcoMCwgaW5wdXRWYWx1ZS5sZW5ndGggLSAxKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzdHJGb3JTZXA6IHN0cmluZyA9IGlucHV0VmFsdWUucmVwbGFjZSgvXFwsL2csIFwiXCIpO1xyXG4gICAgICByZXN1bHQgPSB0aGlzLmNvbWFTZXBhcmF0b3Ioc3RyRm9yU2VwKTtcclxuICAgICAgcG9zaXRpb24gPSByZXN1bHQubGVuZ3RoICsgMTtcclxuICAgICAgY3Vyc29yID0gcG9zaXRpb247XHJcbiAgICAgIGNvbnN0IHNoaWZ0U3RlcDogbnVtYmVyID0gL1xcKnxcXD8vZy50ZXN0KG1hc2tFeHByZXNzaW9uLnNsaWNlKDAsIGN1cnNvcikpXHJcbiAgICAgICAgPyBpbnB1dEFycmF5Lmxlbmd0aFxyXG4gICAgICAgIDogY3Vyc29yO1xyXG4gICAgICB0aGlzLl9zaGlmdC5hZGQoc2hpZnRTdGVwICsgdGhpcy5wcmVmaXgubGVuZ3RoIHx8IDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgIGZvciAoXHJcbiAgICAgICAgbGV0IGk6IG51bWJlciA9IDAsIGlucHV0U3ltYm9sOiBzdHJpbmcgPSBpbnB1dEFycmF5WzBdO1xyXG4gICAgICAgIGkgPCBpbnB1dEFycmF5Lmxlbmd0aDtcclxuICAgICAgICBpKyssIGlucHV0U3ltYm9sID0gaW5wdXRBcnJheVtpXVxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAoY3Vyc29yID09PSBtYXNrRXhwcmVzc2lvbi5sZW5ndGgpIHtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLl9jaGVja1N5bWJvbE1hc2soaW5wdXRTeW1ib2wsIG1hc2tFeHByZXNzaW9uW2N1cnNvcl0pICYmXHJcbiAgICAgICAgICBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAxXSA9PT0gXCI/XCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBpbnB1dFN5bWJvbDtcclxuICAgICAgICAgIGN1cnNvciArPSAyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAxXSA9PT0gXCIqXCIgJiZcclxuICAgICAgICAgIG11bHRpICYmXHJcbiAgICAgICAgICB0aGlzLl9jaGVja1N5bWJvbE1hc2soaW5wdXRTeW1ib2wsIG1hc2tFeHByZXNzaW9uW2N1cnNvciArIDJdKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xyXG4gICAgICAgICAgY3Vyc29yICs9IDM7XHJcbiAgICAgICAgICBtdWx0aSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICB0aGlzLl9jaGVja1N5bWJvbE1hc2soaW5wdXRTeW1ib2wsIG1hc2tFeHByZXNzaW9uW2N1cnNvcl0pICYmXHJcbiAgICAgICAgICBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAxXSA9PT0gXCIqXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBpbnB1dFN5bWJvbDtcclxuICAgICAgICAgIG11bHRpID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgbWFza0V4cHJlc3Npb25bY3Vyc29yICsgMV0gPT09IFwiP1wiICYmXHJcbiAgICAgICAgICB0aGlzLl9jaGVja1N5bWJvbE1hc2soaW5wdXRTeW1ib2wsIG1hc2tFeHByZXNzaW9uW2N1cnNvciArIDJdKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xyXG4gICAgICAgICAgY3Vyc29yICs9IDM7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jaGVja1N5bWJvbE1hc2soaW5wdXRTeW1ib2wsIG1hc2tFeHByZXNzaW9uW2N1cnNvcl0pKSB7XHJcbiAgICAgICAgICBpZiAobWFza0V4cHJlc3Npb25bY3Vyc29yXSA9PT0gXCJIXCIpIHtcclxuICAgICAgICAgICAgaWYgKE51bWJlcihpbnB1dFN5bWJvbCkgPiAyKSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0ICs9IDA7XHJcbiAgICAgICAgICAgICAgY3Vyc29yICs9IDE7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2hpZnRTdGVwOiBudW1iZXIgPSAvXFwqfFxcPy9nLnRlc3QoXHJcbiAgICAgICAgICAgICAgICBtYXNrRXhwcmVzc2lvbi5zbGljZSgwLCBjdXJzb3IpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgPyBpbnB1dEFycmF5Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgOiBjdXJzb3I7XHJcbiAgICAgICAgICAgICAgdGhpcy5fc2hpZnQuYWRkKHNoaWZ0U3RlcCArIHRoaXMucHJlZml4Lmxlbmd0aCB8fCAwKTtcclxuICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChtYXNrRXhwcmVzc2lvbltjdXJzb3JdID09PSBcImhcIikge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBcIjJcIiAmJiBOdW1iZXIoaW5wdXRTeW1ib2wpID4gMykge1xyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobWFza0V4cHJlc3Npb25bY3Vyc29yXSA9PT0gXCJtXCIpIHtcclxuICAgICAgICAgICAgaWYgKE51bWJlcihpbnB1dFN5bWJvbCkgPiA1KSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0ICs9IDA7XHJcbiAgICAgICAgICAgICAgY3Vyc29yICs9IDE7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2hpZnRTdGVwOiBudW1iZXIgPSAvXFwqfFxcPy9nLnRlc3QoXHJcbiAgICAgICAgICAgICAgICBtYXNrRXhwcmVzc2lvbi5zbGljZSgwLCBjdXJzb3IpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgPyBpbnB1dEFycmF5Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgOiBjdXJzb3I7XHJcbiAgICAgICAgICAgICAgdGhpcy5fc2hpZnQuYWRkKHNoaWZ0U3RlcCArIHRoaXMucHJlZml4Lmxlbmd0aCB8fCAwKTtcclxuICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChtYXNrRXhwcmVzc2lvbltjdXJzb3JdID09PSBcInNcIikge1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyKGlucHV0U3ltYm9sKSA+IDUpIHtcclxuICAgICAgICAgICAgICByZXN1bHQgKz0gMDtcclxuICAgICAgICAgICAgICBjdXJzb3IgKz0gMTtcclxuICAgICAgICAgICAgICBjb25zdCBzaGlmdFN0ZXA6IG51bWJlciA9IC9cXCp8XFw/L2cudGVzdChcclxuICAgICAgICAgICAgICAgIG1hc2tFeHByZXNzaW9uLnNsaWNlKDAsIGN1cnNvcilcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA/IGlucHV0QXJyYXkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA6IGN1cnNvcjtcclxuICAgICAgICAgICAgICB0aGlzLl9zaGlmdC5hZGQoc2hpZnRTdGVwICsgdGhpcy5wcmVmaXgubGVuZ3RoIHx8IDApO1xyXG4gICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xyXG4gICAgICAgICAgY3Vyc29yKys7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jaGVja1N5bWJvbE1hc2soaW5wdXRTeW1ib2wsIG1hc2tFeHByZXNzaW9uW2N1cnNvcl0pKSB7XHJcbiAgICAgICAgICBpZiAobWFza0V4cHJlc3Npb25bY3Vyc29yXSA9PT0gXCJkXCIpIHtcclxuICAgICAgICAgICAgaWYgKE51bWJlcihpbnB1dFN5bWJvbCkgPiAzKSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0ICs9IDA7XHJcbiAgICAgICAgICAgICAgY3Vyc29yICs9IDE7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2hpZnRTdGVwOiBudW1iZXIgPSAvXFwqfFxcPy9nLnRlc3QoXHJcbiAgICAgICAgICAgICAgICBtYXNrRXhwcmVzc2lvbi5zbGljZSgwLCBjdXJzb3IpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgPyBpbnB1dEFycmF5Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgOiBjdXJzb3I7XHJcbiAgICAgICAgICAgICAgdGhpcy5fc2hpZnQuYWRkKHNoaWZ0U3RlcCArIHRoaXMucHJlZml4Lmxlbmd0aCB8fCAwKTtcclxuICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChtYXNrRXhwcmVzc2lvbltjdXJzb3IgLSAxXSA9PT0gXCJkXCIpIHtcclxuICAgICAgICAgICAgaWYgKE51bWJlcihpbnB1dFZhbHVlLnNsaWNlKGN1cnNvciAtIDEsIGN1cnNvciArIDEpKSA+IDMxKSB7XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChtYXNrRXhwcmVzc2lvbltjdXJzb3JdID09PSBcIm1cIikge1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyKGlucHV0U3ltYm9sKSA+IDEpIHtcclxuICAgICAgICAgICAgICByZXN1bHQgKz0gMDtcclxuICAgICAgICAgICAgICBjdXJzb3IgKz0gMTtcclxuICAgICAgICAgICAgICBjb25zdCBzaGlmdFN0ZXA6IG51bWJlciA9IC9cXCp8XFw/L2cudGVzdChcclxuICAgICAgICAgICAgICAgIG1hc2tFeHByZXNzaW9uLnNsaWNlKDAsIGN1cnNvcilcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA/IGlucHV0QXJyYXkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA6IGN1cnNvcjtcclxuICAgICAgICAgICAgICB0aGlzLl9zaGlmdC5hZGQoc2hpZnRTdGVwICsgdGhpcy5wcmVmaXgubGVuZ3RoIHx8IDApO1xyXG4gICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG1hc2tFeHByZXNzaW9uW2N1cnNvciAtIDFdID09PSBcIm1cIikge1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyKGlucHV0VmFsdWUuc2xpY2UoY3Vyc29yIC0gMSwgY3Vyc29yICsgMSkpID4gMTIpIHtcclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xyXG4gICAgICAgICAgY3Vyc29yKys7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIHRoaXMubWFza1NwZWNpYWxDaGFyYWN0ZXJzLmluZGV4T2YobWFza0V4cHJlc3Npb25bY3Vyc29yXSkgIT09IC0xXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gbWFza0V4cHJlc3Npb25bY3Vyc29yXTtcclxuICAgICAgICAgIGN1cnNvcisrO1xyXG4gICAgICAgICAgY29uc3Qgc2hpZnRTdGVwOiBudW1iZXIgPSAvXFwqfFxcPy9nLnRlc3QoXHJcbiAgICAgICAgICAgIG1hc2tFeHByZXNzaW9uLnNsaWNlKDAsIGN1cnNvcilcclxuICAgICAgICAgIClcclxuICAgICAgICAgICAgPyBpbnB1dEFycmF5Lmxlbmd0aFxyXG4gICAgICAgICAgICA6IGN1cnNvcjtcclxuICAgICAgICAgIHRoaXMuX3NoaWZ0LmFkZChzaGlmdFN0ZXAgKyB0aGlzLnByZWZpeC5sZW5ndGggfHwgMCk7XHJcbiAgICAgICAgICBpLS07XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIHRoaXMubWFza1NwZWNpYWxDaGFyYWN0ZXJzLmluZGV4T2YoaW5wdXRTeW1ib2wpID4gLTEgJiZcclxuICAgICAgICAgIHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zW21hc2tFeHByZXNzaW9uW2N1cnNvcl1dICYmXHJcbiAgICAgICAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJuc1ttYXNrRXhwcmVzc2lvbltjdXJzb3JdXS5vcHRpb25hbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY3Vyc29yKys7XHJcbiAgICAgICAgICBpLS07XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIHRoaXMubWFza0V4cHJlc3Npb25bY3Vyc29yICsgMV0gPT09IFwiKlwiICYmXHJcbiAgICAgICAgICB0aGlzLl9maW5kU3BlY2lhbENoYXIodGhpcy5tYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAyXSkgJiZcclxuICAgICAgICAgIHRoaXMuX2ZpbmRTcGVjaWFsQ2hhcihpbnB1dFN5bWJvbCkgPT09XHJcbiAgICAgICAgICAgIHRoaXMubWFza0V4cHJlc3Npb25bY3Vyc29yICsgMl0gJiZcclxuICAgICAgICAgIG11bHRpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjdXJzb3IgKz0gMztcclxuICAgICAgICAgIHJlc3VsdCArPSBpbnB1dFN5bWJvbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgcmVzdWx0Lmxlbmd0aCArIDEgPT09IG1hc2tFeHByZXNzaW9uLmxlbmd0aCAmJlxyXG4gICAgICB0aGlzLm1hc2tTcGVjaWFsQ2hhcmFjdGVycy5pbmRleE9mKFxyXG4gICAgICAgIG1hc2tFeHByZXNzaW9uW21hc2tFeHByZXNzaW9uLmxlbmd0aCAtIDFdXHJcbiAgICAgICkgIT09IC0xXHJcbiAgICApIHtcclxuICAgICAgcmVzdWx0ICs9IG1hc2tFeHByZXNzaW9uW21hc2tFeHByZXNzaW9uLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzaGlmdDogbnVtYmVyID0gMTtcclxuICAgIGxldCBuZXdQb3NpdGlvbjogbnVtYmVyID0gcG9zaXRpb24gKyAxO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLl9zaGlmdC5oYXMobmV3UG9zaXRpb24pKSB7XHJcbiAgICAgIHNoaWZ0Kys7XHJcbiAgICAgIG5ld1Bvc2l0aW9uKys7XHJcbiAgICB9XHJcblxyXG4gICAgY2IodGhpcy5fc2hpZnQuaGFzKHBvc2l0aW9uKSA/IHNoaWZ0IDogMCk7XHJcbiAgICBsZXQgcmVzOiBzdHJpbmcgPSBgJHt0aGlzLnByZWZpeH0ke3Jlc3VsdH1gO1xyXG4gICAgcmVzID0gdGhpcy5zdWZpeFxyXG4gICAgICA/IGAke3RoaXMucHJlZml4fSR7cmVzdWx0fSR7dGhpcy5zdWZpeH1gXHJcbiAgICAgIDogYCR7dGhpcy5wcmVmaXh9JHtyZXN1bHR9YDtcclxuICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJlcyA9IGAke3RoaXMucHJlZml4fSR7cmVzdWx0fWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuICBwdWJsaWMgX2ZpbmRTcGVjaWFsQ2hhcihpbnB1dFN5bWJvbDogc3RyaW5nKTogdW5kZWZpbmVkIHwgc3RyaW5nIHtcclxuICAgIGNvbnN0IHN5bWJvbDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMuZmluZChcclxuICAgICAgKHZhbDogc3RyaW5nKSA9PiB2YWwgPT09IGlucHV0U3ltYm9sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHN5bWJvbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NoZWNrU3ltYm9sTWFzayhpbnB1dFN5bWJvbDogc3RyaW5nLCBtYXNrU3ltYm9sOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zID0gdGhpcy5jdXN0b21QYXR0ZXJuXHJcbiAgICAgID8gdGhpcy5jdXN0b21QYXR0ZXJuXHJcbiAgICAgIDogdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJuc1ttYXNrU3ltYm9sXSAmJlxyXG4gICAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJuc1ttYXNrU3ltYm9sXS5wYXR0ZXJuICYmXHJcbiAgICAgIHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zW21hc2tTeW1ib2xdLnBhdHRlcm4udGVzdChpbnB1dFN5bWJvbClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlcGFyYXRvciA9IChzdHI6IHN0cmluZykgPT4ge1xyXG4gICAgc3RyICs9IFwiXCI7XHJcbiAgICBjb25zdCB4OiBzdHJpbmdbXSA9IHN0ci5zcGxpdChcIi5cIik7XHJcbiAgICBjb25zdCBkZWNpbWFsczogc3RyaW5nID0geC5sZW5ndGggPiAxID8gYC4ke3hbMV19YCA6IFwiXCI7XHJcbiAgICBsZXQgcmVzOiBzdHJpbmcgPSB4WzBdO1xyXG4gICAgY29uc3Qgcmd4OiBSZWdFeHAgPSAvKFxcZCspKFxcZHszfSkvO1xyXG4gICAgd2hpbGUgKHJneC50ZXN0KHJlcykpIHtcclxuICAgICAgcmVzID0gcmVzLnJlcGxhY2Uocmd4LCBcIiQxXCIgKyBcIiBcIiArIFwiJDJcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzICsgZGVjaW1hbHM7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBkb3RTZXBhcmF0b3IgPSAoc3RyOiBzdHJpbmcpID0+IHtcclxuICAgIHN0ciArPSBcIlwiO1xyXG4gICAgY29uc3QgeDogc3RyaW5nW10gPSBzdHIuc3BsaXQoXCIsXCIpO1xyXG4gICAgY29uc3QgZGVjaW1hbHM6IHN0cmluZyA9IHgubGVuZ3RoID4gMSA/IGAsJHt4WzFdfWAgOiBcIlwiO1xyXG4gICAgbGV0IHJlczogc3RyaW5nID0geFswXTtcclxuICAgIGNvbnN0IHJneDogUmVnRXhwID0gLyhcXGQrKShcXGR7M30pLztcclxuICAgIHdoaWxlIChyZ3gudGVzdChyZXMpKSB7XHJcbiAgICAgIHJlcyA9IHJlcy5yZXBsYWNlKHJneCwgXCIkMVwiICsgXCIuXCIgKyBcIiQyXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcyArIGRlY2ltYWxzO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgY29tYVNlcGFyYXRvciA9IChzdHI6IHN0cmluZykgPT4ge1xyXG4gICAgc3RyICs9IFwiXCI7XHJcbiAgICBjb25zdCB4OiBzdHJpbmdbXSA9IHN0ci5zcGxpdChcIi5cIik7XHJcbiAgICBjb25zdCBkZWNpbWFsczogc3RyaW5nID1cclxuICAgICAgeC5sZW5ndGggPiAxXHJcbiAgICAgICAgPyBgLiR7XHJcbiAgICAgICAgICAgIHhbMV0ubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgID8geFsxXS5sZW5ndGggPiAyXHJcbiAgICAgICAgICAgICAgICA/IHhbMV0uc3Vic3RyaW5nKDAsIDIpXHJcbiAgICAgICAgICAgICAgICA6IHhbMV1cclxuICAgICAgICAgICAgICA6IHhbMV1cclxuICAgICAgICAgIH1gXHJcbiAgICAgICAgOiBcIjAwXCI7XHJcbiAgICBsZXQgcmVzOiBzdHJpbmcgPSB4WzBdO1xyXG4gICAgY29uc3Qgcmd4OiBSZWdFeHAgPSAvKFxcZCspKFxcZHszfSkvO1xyXG4gICAgd2hpbGUgKHJneC50ZXN0KHJlcykpIHtcclxuICAgICAgcmVzID0gcmVzLnJlcGxhY2Uocmd4LCBcIiQxXCIgKyBcIixcIiArIFwiJDJcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzICsgZGVjaW1hbHM7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBwZXJzYW50YWdlID0gKHN0cjogc3RyaW5nKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAoTnVtYmVyKHN0cikgPj0gMCAmJiBOdW1iZXIoc3RyKSA8PSAxMDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=