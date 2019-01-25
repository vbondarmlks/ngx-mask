/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from "@angular/core";
import { config } from "./config";
export class MaskApplierService {
    /**
     * @param {?} _config
     */
    constructor(_config) {
        this._config = _config;
        this.maskExpression = "";
        this.separator = (str) => {
            str += "";
            /** @type {?} */
            const x = str.split(".");
            /** @type {?} */
            const decimals = x.length > 1 ? `.${x[1]}` : "";
            /** @type {?} */
            let res = x[0];
            /** @type {?} */
            const rgx = /(\d+)(\d{3})/;
            while (rgx.test(res)) {
                res = res.replace(rgx, "$1" + " " + "$2");
            }
            return res + decimals;
        };
        this.dotSeparator = (str) => {
            str += "";
            /** @type {?} */
            const x = str.split(",");
            /** @type {?} */
            const decimals = x.length > 1 ? `,${x[1]}` : "";
            /** @type {?} */
            let res = x[0];
            /** @type {?} */
            const rgx = /(\d+)(\d{3})/;
            while (rgx.test(res)) {
                res = res.replace(rgx, "$1" + "." + "$2");
            }
            return res + decimals;
        };
        this.comaSeparator = (str) => {
            str += "";
            /** @type {?} */
            const x = str.split(".");
            /** @type {?} */
            const decimals = x.length > 1
                ? `.${x[1].length < 3 ? x[1] : x[1].substring(0, 2)}`
                : `.00`;
            /** @type {?} */
            let res = x[0];
            /** @type {?} */
            const rgx = /(\d+)(\d{3})/;
            while (rgx.test(res)) {
                res = res.replace(rgx, "$1" + "," + "$2");
            }
            return res + decimals;
        };
        this.persantage = (str) => {
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
    /**
     * @param {?} inputValue
     * @param {?} maskAndPattern
     * @return {?}
     */
    applyMaskWithPattern(inputValue, maskAndPattern) {
        const [mask, customPattern] = maskAndPattern;
        this.customPattern = customPattern;
        return this.applyMask(inputValue, mask);
    }
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    applyMask(inputValue, maskExpression, position = 0, cb = () => { }) {
        if (inputValue === undefined ||
            inputValue === null ||
            maskExpression === undefined) {
            return "";
        }
        /** @type {?} */
        let cursor = 0;
        /** @type {?} */
        let result = ``;
        /** @type {?} */
        let multi = false;
        if (inputValue.slice(0, this.prefix.length) === this.prefix) {
            inputValue = inputValue.slice(this.prefix.length, inputValue.length);
        }
        /** @type {?} */
        const inputArray = inputValue.toString().split("");
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
            const strForSep = inputValue.replace(/\s/g, "");
            result = this.separator(strForSep);
            position = result.length + 1;
            cursor = position;
            /** @type {?} */
            const shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
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
            const strForSep = inputValue.replace(/\./g, "");
            result = this.dotSeparator(strForSep);
            position = result.length + 1;
            cursor = position;
            /** @type {?} */
            const shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
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
            const strForSep = inputValue.replace(/\,/g, "");
            result = this.comaSeparator(strForSep);
            position = result.length + 1;
            cursor = position;
            /** @type {?} */
            const shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                ? inputArray.length
                : cursor;
            this._shift.add(shiftStep + this.prefix.length || 0);
        }
        else {
            // tslint:disable-next-line
            for (let i = 0, inputSymbol = inputArray[0]; i < inputArray.length; i++, inputSymbol = inputArray[i]) {
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
                            const shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
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
                            const shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
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
                            const shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
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
                            const shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
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
                            const shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
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
                    const shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
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
        let shift = 1;
        /** @type {?} */
        let newPosition = position + 1;
        while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
        }
        cb(this._shift.has(position) ? shift : 0);
        /** @type {?} */
        let res = `${this.prefix}${result}`;
        res = this.sufix
            ? `${this.prefix}${result}${this.sufix}`
            : `${this.prefix}${result}`;
        if (result.length === 0) {
            res = `${this.prefix}${result}`;
        }
        return res;
    }
    /**
     * @param {?} inputSymbol
     * @return {?}
     */
    _findSpecialChar(inputSymbol) {
        /** @type {?} */
        const symbol = this.maskSpecialCharacters.find((val) => val === inputSymbol);
        return symbol;
    }
    /**
     * @private
     * @param {?} inputSymbol
     * @param {?} maskSymbol
     * @return {?}
     */
    _checkSymbolMask(inputSymbol, maskSymbol) {
        this.maskAvailablePatterns = this.customPattern
            ? this.customPattern
            : this.maskAvailablePatterns;
        return (this.maskAvailablePatterns[maskSymbol] &&
            this.maskAvailablePatterns[maskSymbol].pattern &&
            this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol));
    }
}
MaskApplierService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MaskApplierService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [config,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay1hcHBsaWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFzay8iLCJzb3VyY2VzIjpbImFwcC9uZ3gtbWFzay9tYXNrLWFwcGxpZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBVyxNQUFNLFVBQVUsQ0FBQztBQUczQyxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBYTdCLFlBQTZDLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFUdEQsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUF1VDNCLGNBQVMsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFO1lBQ2xDLEdBQUcsSUFBSSxFQUFFLENBQUM7O2tCQUNKLENBQUMsR0FBYSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7a0JBQzVCLFFBQVEsR0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTs7Z0JBQ25ELEdBQUcsR0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDOztrQkFDaEIsR0FBRyxHQUFXLGNBQWM7WUFDbEMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUMzQztZQUNELE9BQU8sR0FBRyxHQUFHLFFBQVEsQ0FBQztRQUN4QixDQUFDLENBQUM7UUFFTSxpQkFBWSxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDckMsR0FBRyxJQUFJLEVBQUUsQ0FBQzs7a0JBQ0osQ0FBQyxHQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMs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Qzs7SUFDN0MsNkNBQW1EOztJQUNuRCw0Q0FBbUM7O0lBQ25DLG1EQUEyRDs7SUFDM0QsbURBQWtEOztJQUNsRCxvQ0FBaUM7O0lBQ2pDLG1DQUErQjs7SUFDL0IsMkNBQTBDOzs7OztJQUUxQyxvQ0FBNEI7Ozs7O0lBZ1Q1Qix1Q0FVRTs7Ozs7SUFFRiwwQ0FVRTs7Ozs7SUFFRiwyQ0FhRTs7Ozs7SUFFRix3Q0FNRTs7Ozs7SUEzVmlCLHFDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGNvbmZpZywgSUNvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWFza0FwcGxpZXJTZXJ2aWNlIHtcclxuICBwdWJsaWMgZHJvcFNwZWNpYWxDaGFyYWN0ZXJzOiBJQ29uZmlnW1wiZHJvcFNwZWNpYWxDaGFyYWN0ZXJzXCJdO1xyXG4gIHB1YmxpYyBzaG93VGVtcGxhdGU6IElDb25maWdbXCJzaG93VGVtcGxhdGVcIl07XHJcbiAgcHVibGljIGNsZWFySWZOb3RNYXRjaDogSUNvbmZpZ1tcImNsZWFySWZOb3RNYXRjaFwiXTtcclxuICBwdWJsaWMgbWFza0V4cHJlc3Npb246IHN0cmluZyA9IFwiXCI7XHJcbiAgcHVibGljIG1hc2tTcGVjaWFsQ2hhcmFjdGVyczogSUNvbmZpZ1tcInNwZWNpYWxDaGFyYWN0ZXJzXCJdO1xyXG4gIHB1YmxpYyBtYXNrQXZhaWxhYmxlUGF0dGVybnM6IElDb25maWdbXCJwYXR0ZXJuc1wiXTtcclxuICBwdWJsaWMgcHJlZml4OiBJQ29uZmlnW1wicHJlZml4XCJdO1xyXG4gIHB1YmxpYyBzdWZpeDogSUNvbmZpZ1tcInN1Zml4XCJdO1xyXG4gIHB1YmxpYyBjdXN0b21QYXR0ZXJuOiBJQ29uZmlnW1wicGF0dGVybnNcIl07XHJcblxyXG4gIHByaXZhdGUgX3NoaWZ0OiBTZXQ8bnVtYmVyPjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKEBJbmplY3QoY29uZmlnKSBwcm90ZWN0ZWQgX2NvbmZpZzogSUNvbmZpZykge1xyXG4gICAgdGhpcy5fc2hpZnQgPSBuZXcgU2V0KCk7XHJcbiAgICB0aGlzLm1hc2tTcGVjaWFsQ2hhcmFjdGVycyA9IHRoaXMuX2NvbmZpZyEuc3BlY2lhbENoYXJhY3RlcnM7XHJcbiAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJucyA9IHRoaXMuX2NvbmZpZy5wYXR0ZXJucztcclxuICAgIHRoaXMuY2xlYXJJZk5vdE1hdGNoID0gdGhpcy5fY29uZmlnLmNsZWFySWZOb3RNYXRjaDtcclxuICAgIHRoaXMuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzID0gdGhpcy5fY29uZmlnLmRyb3BTcGVjaWFsQ2hhcmFjdGVycztcclxuICAgIHRoaXMubWFza1NwZWNpYWxDaGFyYWN0ZXJzID0gdGhpcy5fY29uZmlnIS5zcGVjaWFsQ2hhcmFjdGVycztcclxuICAgIHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zID0gdGhpcy5fY29uZmlnLnBhdHRlcm5zO1xyXG4gICAgdGhpcy5wcmVmaXggPSB0aGlzLl9jb25maWcucHJlZml4O1xyXG4gICAgdGhpcy5zdWZpeCA9IHRoaXMuX2NvbmZpZy5zdWZpeDtcclxuICB9XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHB1YmxpYyBhcHBseU1hc2tXaXRoUGF0dGVybihcclxuICAgIGlucHV0VmFsdWU6IHN0cmluZyxcclxuICAgIG1hc2tBbmRQYXR0ZXJuOiBbc3RyaW5nLCBJQ29uZmlnW1wicGF0dGVybnNcIl1dXHJcbiAgKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IFttYXNrLCBjdXN0b21QYXR0ZXJuXSA9IG1hc2tBbmRQYXR0ZXJuO1xyXG4gICAgdGhpcy5jdXN0b21QYXR0ZXJuID0gY3VzdG9tUGF0dGVybjtcclxuICAgIHJldHVybiB0aGlzLmFwcGx5TWFzayhpbnB1dFZhbHVlLCBtYXNrKTtcclxuICB9XHJcbiAgcHVibGljIGFwcGx5TWFzayhcclxuICAgIGlucHV0VmFsdWU6IHN0cmluZyxcclxuICAgIG1hc2tFeHByZXNzaW9uOiBzdHJpbmcsXHJcbiAgICBwb3NpdGlvbjogbnVtYmVyID0gMCxcclxuICAgIGNiOiBGdW5jdGlvbiA9ICgpID0+IHt9XHJcbiAgKTogc3RyaW5nIHtcclxuICAgIGlmIChcclxuICAgICAgaW5wdXRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIGlucHV0VmFsdWUgPT09IG51bGwgfHxcclxuICAgICAgbWFza0V4cHJlc3Npb24gPT09IHVuZGVmaW5lZFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgbGV0IGN1cnNvcjogbnVtYmVyID0gMDtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZyA9IGBgO1xyXG4gICAgbGV0IG11bHRpOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKGlucHV0VmFsdWUuc2xpY2UoMCwgdGhpcy5wcmVmaXgubGVuZ3RoKSA9PT0gdGhpcy5wcmVmaXgpIHtcclxuICAgICAgaW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUuc2xpY2UodGhpcy5wcmVmaXgubGVuZ3RoLCBpbnB1dFZhbHVlLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5wdXRBcnJheTogc3RyaW5nW10gPSBpbnB1dFZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoXCJcIik7XHJcbiAgICBpZiAobWFza0V4cHJlc3Npb24gPT09IFwicGVyY2VudFwiKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpbnB1dFZhbHVlLm1hdGNoKFwiW2Etel18W0EtWl1cIikgfHxcclxuICAgICAgICBpbnB1dFZhbHVlLm1hdGNoKC9bLSEkJV4mKigpXyt8fj1ge31cXFtcXF06XCI7Jzw+PyxcXC9dLylcclxuICAgICAgKSB7XHJcbiAgICAgICAgaW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUuc3Vic3RyaW5nKDAsIGlucHV0VmFsdWUubGVuZ3RoIC0gMSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGVyc2FudGFnZShpbnB1dFZhbHVlKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IGlucHV0VmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ID0gaW5wdXRWYWx1ZS5zdWJzdHJpbmcoMCwgaW5wdXRWYWx1ZS5sZW5ndGggLSAxKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChtYXNrRXhwcmVzc2lvbiA9PT0gXCJzZXBhcmF0b3JcIikge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaW5wdXRWYWx1ZS5tYXRjaChcIlthLXpdfFtBLVpdXCIpIHx8XHJcbiAgICAgICAgaW5wdXRWYWx1ZS5tYXRjaCgvWyEkJV4mKigpXyt8fj1ge31cXFtcXF06XCI7Jzw+P1xcL10vKVxyXG4gICAgICApIHtcclxuICAgICAgICBpbnB1dFZhbHVlID0gaW5wdXRWYWx1ZS5zdWJzdHJpbmcoMCwgaW5wdXRWYWx1ZS5sZW5ndGggLSAxKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzdHJGb3JTZXA6IHN0cmluZyA9IGlucHV0VmFsdWUucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xyXG4gICAgICByZXN1bHQgPSB0aGlzLnNlcGFyYXRvcihzdHJGb3JTZXApO1xyXG4gICAgICBwb3NpdGlvbiA9IHJlc3VsdC5sZW5ndGggKyAxO1xyXG4gICAgICBjdXJzb3IgPSBwb3NpdGlvbjtcclxuICAgICAgY29uc3Qgc2hpZnRTdGVwOiBudW1iZXIgPSAvXFwqfFxcPy9nLnRlc3QobWFza0V4cHJlc3Npb24uc2xpY2UoMCwgY3Vyc29yKSlcclxuICAgICAgICA/IGlucHV0QXJyYXkubGVuZ3RoXHJcbiAgICAgICAgOiBjdXJzb3I7XHJcbiAgICAgIHRoaXMuX3NoaWZ0LmFkZChzaGlmdFN0ZXAgKyB0aGlzLnByZWZpeC5sZW5ndGggfHwgMCk7XHJcbiAgICB9IGVsc2UgaWYgKG1hc2tFeHByZXNzaW9uID09PSBcImRvdF9zZXBhcmF0b3JcIikge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaW5wdXRWYWx1ZS5tYXRjaChcIlthLXpdfFtBLVpdXCIpIHx8XHJcbiAgICAgICAgaW5wdXRWYWx1ZS5tYXRjaCgvWyEkJV4mKigpXyt8fj1ge31cXFtcXF06XCI7Jzw+P1xcL10vKVxyXG4gICAgICApIHtcclxuICAgICAgICBpbnB1dFZhbHVlID0gaW5wdXRWYWx1ZS5zdWJzdHJpbmcoMCwgaW5wdXRWYWx1ZS5sZW5ndGggLSAxKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzdHJGb3JTZXA6IHN0cmluZyA9IGlucHV0VmFsdWUucmVwbGFjZSgvXFwuL2csIFwiXCIpO1xyXG4gICAgICByZXN1bHQgPSB0aGlzLmRvdFNlcGFyYXRvcihzdHJGb3JTZXApO1xyXG4gICAgICBwb3NpdGlvbiA9IHJlc3VsdC5sZW5ndGggKyAxO1xyXG4gICAgICBjdXJzb3IgPSBwb3NpdGlvbjtcclxuICAgICAgY29uc3Qgc2hpZnRTdGVwOiBudW1iZXIgPSAvXFwqfFxcPy9nLnRlc3QobWFza0V4cHJlc3Npb24uc2xpY2UoMCwgY3Vyc29yKSlcclxuICAgICAgICA/IGlucHV0QXJyYXkubGVuZ3RoXHJcbiAgICAgICAgOiBjdXJzb3I7XHJcbiAgICAgIHRoaXMuX3NoaWZ0LmFkZChzaGlmdFN0ZXAgKyB0aGlzLnByZWZpeC5sZW5ndGggfHwgMCk7XHJcbiAgICB9IGVsc2UgaWYgKG1hc2tFeHByZXNzaW9uID09PSBcImNvbWFfc2VwYXJhdG9yXCIpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGlucHV0VmFsdWUubWF0Y2goXCJbYS16XXxbQS1aXVwiKSB8fFxyXG4gICAgICAgIGlucHV0VmFsdWUubWF0Y2goL1shJCVeJiooKV8rfH49YHt9XFxbXFxdOlwiOyc8Pj9cXC9dLylcclxuICAgICAgKSB7XHJcbiAgICAgICAgaW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUuc3Vic3RyaW5nKDAsIGlucHV0VmFsdWUubGVuZ3RoIC0gMSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc3RyRm9yU2VwOiBzdHJpbmcgPSBpbnB1dFZhbHVlLnJlcGxhY2UoL1xcLC9nLCBcIlwiKTtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5jb21hU2VwYXJhdG9yKHN0ckZvclNlcCk7XHJcbiAgICAgIHBvc2l0aW9uID0gcmVzdWx0Lmxlbmd0aCArIDE7XHJcbiAgICAgIGN1cnNvciA9IHBvc2l0aW9uO1xyXG4gICAgICBjb25zdCBzaGlmdFN0ZXA6IG51bWJlciA9IC9cXCp8XFw/L2cudGVzdChtYXNrRXhwcmVzc2lvbi5zbGljZSgwLCBjdXJzb3IpKVxyXG4gICAgICAgID8gaW5wdXRBcnJheS5sZW5ndGhcclxuICAgICAgICA6IGN1cnNvcjtcclxuICAgICAgdGhpcy5fc2hpZnQuYWRkKHNoaWZ0U3RlcCArIHRoaXMucHJlZml4Lmxlbmd0aCB8fCAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICBmb3IgKFxyXG4gICAgICAgIGxldCBpOiBudW1iZXIgPSAwLCBpbnB1dFN5bWJvbDogc3RyaW5nID0gaW5wdXRBcnJheVswXTtcclxuICAgICAgICBpIDwgaW5wdXRBcnJheS5sZW5ndGg7XHJcbiAgICAgICAgaSsrLCBpbnB1dFN5bWJvbCA9IGlucHV0QXJyYXlbaV1cclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKGN1cnNvciA9PT0gbWFza0V4cHJlc3Npb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5fY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sLCBtYXNrRXhwcmVzc2lvbltjdXJzb3JdKSAmJlxyXG4gICAgICAgICAgbWFza0V4cHJlc3Npb25bY3Vyc29yICsgMV0gPT09IFwiP1wiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gaW5wdXRTeW1ib2w7XHJcbiAgICAgICAgICBjdXJzb3IgKz0gMjtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgbWFza0V4cHJlc3Npb25bY3Vyc29yICsgMV0gPT09IFwiKlwiICYmXHJcbiAgICAgICAgICBtdWx0aSAmJlxyXG4gICAgICAgICAgdGhpcy5fY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sLCBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAyXSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBpbnB1dFN5bWJvbDtcclxuICAgICAgICAgIGN1cnNvciArPSAzO1xyXG4gICAgICAgICAgbXVsdGkgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgdGhpcy5fY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sLCBtYXNrRXhwcmVzc2lvbltjdXJzb3JdKSAmJlxyXG4gICAgICAgICAgbWFza0V4cHJlc3Npb25bY3Vyc29yICsgMV0gPT09IFwiKlwiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gaW5wdXRTeW1ib2w7XHJcbiAgICAgICAgICBtdWx0aSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIG1hc2tFeHByZXNzaW9uW2N1cnNvciArIDFdID09PSBcIj9cIiAmJlxyXG4gICAgICAgICAgdGhpcy5fY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sLCBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAyXSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBpbnB1dFN5bWJvbDtcclxuICAgICAgICAgIGN1cnNvciArPSAzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sLCBtYXNrRXhwcmVzc2lvbltjdXJzb3JdKSkge1xyXG4gICAgICAgICAgaWYgKG1hc2tFeHByZXNzaW9uW2N1cnNvcl0gPT09IFwiSFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChOdW1iZXIoaW5wdXRTeW1ib2wpID4gMikge1xyXG4gICAgICAgICAgICAgIHJlc3VsdCArPSAwO1xyXG4gICAgICAgICAgICAgIGN1cnNvciArPSAxO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNoaWZ0U3RlcDogbnVtYmVyID0gL1xcKnxcXD8vZy50ZXN0KFxyXG4gICAgICAgICAgICAgICAgbWFza0V4cHJlc3Npb24uc2xpY2UoMCwgY3Vyc29yKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgID8gaW5wdXRBcnJheS5sZW5ndGhcclxuICAgICAgICAgICAgICAgIDogY3Vyc29yO1xyXG4gICAgICAgICAgICAgIHRoaXMuX3NoaWZ0LmFkZChzaGlmdFN0ZXAgKyB0aGlzLnByZWZpeC5sZW5ndGggfHwgMCk7XHJcbiAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobWFza0V4cHJlc3Npb25bY3Vyc29yXSA9PT0gXCJoXCIpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCIyXCIgJiYgTnVtYmVyKGlucHV0U3ltYm9sKSA+IDMpIHtcclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG1hc2tFeHByZXNzaW9uW2N1cnNvcl0gPT09IFwibVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChOdW1iZXIoaW5wdXRTeW1ib2wpID4gNSkge1xyXG4gICAgICAgICAgICAgIHJlc3VsdCArPSAwO1xyXG4gICAgICAgICAgICAgIGN1cnNvciArPSAxO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNoaWZ0U3RlcDogbnVtYmVyID0gL1xcKnxcXD8vZy50ZXN0KFxyXG4gICAgICAgICAgICAgICAgbWFza0V4cHJlc3Npb24uc2xpY2UoMCwgY3Vyc29yKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgID8gaW5wdXRBcnJheS5sZW5ndGhcclxuICAgICAgICAgICAgICAgIDogY3Vyc29yO1xyXG4gICAgICAgICAgICAgIHRoaXMuX3NoaWZ0LmFkZChzaGlmdFN0ZXAgKyB0aGlzLnByZWZpeC5sZW5ndGggfHwgMCk7XHJcbiAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobWFza0V4cHJlc3Npb25bY3Vyc29yXSA9PT0gXCJzXCIpIHtcclxuICAgICAgICAgICAgaWYgKE51bWJlcihpbnB1dFN5bWJvbCkgPiA1KSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0ICs9IDA7XHJcbiAgICAgICAgICAgICAgY3Vyc29yICs9IDE7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2hpZnRTdGVwOiBudW1iZXIgPSAvXFwqfFxcPy9nLnRlc3QoXHJcbiAgICAgICAgICAgICAgICBtYXNrRXhwcmVzc2lvbi5zbGljZSgwLCBjdXJzb3IpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgPyBpbnB1dEFycmF5Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgOiBjdXJzb3I7XHJcbiAgICAgICAgICAgICAgdGhpcy5fc2hpZnQuYWRkKHNoaWZ0U3RlcCArIHRoaXMucHJlZml4Lmxlbmd0aCB8fCAwKTtcclxuICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdCArPSBpbnB1dFN5bWJvbDtcclxuICAgICAgICAgIGN1cnNvcisrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sLCBtYXNrRXhwcmVzc2lvbltjdXJzb3JdKSkge1xyXG4gICAgICAgICAgaWYgKG1hc2tFeHByZXNzaW9uW2N1cnNvcl0gPT09IFwiZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChOdW1iZXIoaW5wdXRTeW1ib2wpID4gMykge1xyXG4gICAgICAgICAgICAgIHJlc3VsdCArPSAwO1xyXG4gICAgICAgICAgICAgIGN1cnNvciArPSAxO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNoaWZ0U3RlcDogbnVtYmVyID0gL1xcKnxcXD8vZy50ZXN0KFxyXG4gICAgICAgICAgICAgICAgbWFza0V4cHJlc3Npb24uc2xpY2UoMCwgY3Vyc29yKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgID8gaW5wdXRBcnJheS5sZW5ndGhcclxuICAgICAgICAgICAgICAgIDogY3Vyc29yO1xyXG4gICAgICAgICAgICAgIHRoaXMuX3NoaWZ0LmFkZChzaGlmdFN0ZXAgKyB0aGlzLnByZWZpeC5sZW5ndGggfHwgMCk7XHJcbiAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobWFza0V4cHJlc3Npb25bY3Vyc29yIC0gMV0gPT09IFwiZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChOdW1iZXIoaW5wdXRWYWx1ZS5zbGljZShjdXJzb3IgLSAxLCBjdXJzb3IgKyAxKSkgPiAzMSkge1xyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobWFza0V4cHJlc3Npb25bY3Vyc29yXSA9PT0gXCJtXCIpIHtcclxuICAgICAgICAgICAgaWYgKE51bWJlcihpbnB1dFN5bWJvbCkgPiAxKSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0ICs9IDA7XHJcbiAgICAgICAgICAgICAgY3Vyc29yICs9IDE7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2hpZnRTdGVwOiBudW1iZXIgPSAvXFwqfFxcPy9nLnRlc3QoXHJcbiAgICAgICAgICAgICAgICBtYXNrRXhwcmVzc2lvbi5zbGljZSgwLCBjdXJzb3IpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgPyBpbnB1dEFycmF5Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgOiBjdXJzb3I7XHJcbiAgICAgICAgICAgICAgdGhpcy5fc2hpZnQuYWRkKHNoaWZ0U3RlcCArIHRoaXMucHJlZml4Lmxlbmd0aCB8fCAwKTtcclxuICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChtYXNrRXhwcmVzc2lvbltjdXJzb3IgLSAxXSA9PT0gXCJtXCIpIHtcclxuICAgICAgICAgICAgaWYgKE51bWJlcihpbnB1dFZhbHVlLnNsaWNlKGN1cnNvciAtIDEsIGN1cnNvciArIDEpKSA+IDEyKSB7XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdCArPSBpbnB1dFN5bWJvbDtcclxuICAgICAgICAgIGN1cnNvcisrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICB0aGlzLm1hc2tTcGVjaWFsQ2hhcmFjdGVycy5pbmRleE9mKG1hc2tFeHByZXNzaW9uW2N1cnNvcl0pICE9PSAtMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IG1hc2tFeHByZXNzaW9uW2N1cnNvcl07XHJcbiAgICAgICAgICBjdXJzb3IrKztcclxuICAgICAgICAgIGNvbnN0IHNoaWZ0U3RlcDogbnVtYmVyID0gL1xcKnxcXD8vZy50ZXN0KFxyXG4gICAgICAgICAgICBtYXNrRXhwcmVzc2lvbi5zbGljZSgwLCBjdXJzb3IpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgID8gaW5wdXRBcnJheS5sZW5ndGhcclxuICAgICAgICAgICAgOiBjdXJzb3I7XHJcbiAgICAgICAgICB0aGlzLl9zaGlmdC5hZGQoc2hpZnRTdGVwICsgdGhpcy5wcmVmaXgubGVuZ3RoIHx8IDApO1xyXG4gICAgICAgICAgaS0tO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICB0aGlzLm1hc2tTcGVjaWFsQ2hhcmFjdGVycy5pbmRleE9mKGlucHV0U3ltYm9sKSA+IC0xICYmXHJcbiAgICAgICAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJuc1ttYXNrRXhwcmVzc2lvbltjdXJzb3JdXSAmJlxyXG4gICAgICAgICAgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnNbbWFza0V4cHJlc3Npb25bY3Vyc29yXV0ub3B0aW9uYWxcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGN1cnNvcisrO1xyXG4gICAgICAgICAgaS0tO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICB0aGlzLm1hc2tFeHByZXNzaW9uW2N1cnNvciArIDFdID09PSBcIipcIiAmJlxyXG4gICAgICAgICAgdGhpcy5fZmluZFNwZWNpYWxDaGFyKHRoaXMubWFza0V4cHJlc3Npb25bY3Vyc29yICsgMl0pICYmXHJcbiAgICAgICAgICB0aGlzLl9maW5kU3BlY2lhbENoYXIoaW5wdXRTeW1ib2wpID09PVxyXG4gICAgICAgICAgICB0aGlzLm1hc2tFeHByZXNzaW9uW2N1cnNvciArIDJdICYmXHJcbiAgICAgICAgICBtdWx0aVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY3Vyc29yICs9IDM7XHJcbiAgICAgICAgICByZXN1bHQgKz0gaW5wdXRTeW1ib2w7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIHJlc3VsdC5sZW5ndGggKyAxID09PSBtYXNrRXhwcmVzc2lvbi5sZW5ndGggJiZcclxuICAgICAgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMuaW5kZXhPZihcclxuICAgICAgICBtYXNrRXhwcmVzc2lvblttYXNrRXhwcmVzc2lvbi5sZW5ndGggLSAxXVxyXG4gICAgICApICE9PSAtMVxyXG4gICAgKSB7XHJcbiAgICAgIHJlc3VsdCArPSBtYXNrRXhwcmVzc2lvblttYXNrRXhwcmVzc2lvbi5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2hpZnQ6IG51bWJlciA9IDE7XHJcbiAgICBsZXQgbmV3UG9zaXRpb246IG51bWJlciA9IHBvc2l0aW9uICsgMTtcclxuXHJcbiAgICB3aGlsZSAodGhpcy5fc2hpZnQuaGFzKG5ld1Bvc2l0aW9uKSkge1xyXG4gICAgICBzaGlmdCsrO1xyXG4gICAgICBuZXdQb3NpdGlvbisrO1xyXG4gICAgfVxyXG5cclxuICAgIGNiKHRoaXMuX3NoaWZ0Lmhhcyhwb3NpdGlvbikgPyBzaGlmdCA6IDApO1xyXG4gICAgbGV0IHJlczogc3RyaW5nID0gYCR7dGhpcy5wcmVmaXh9JHtyZXN1bHR9YDtcclxuICAgIHJlcyA9IHRoaXMuc3VmaXhcclxuICAgICAgPyBgJHt0aGlzLnByZWZpeH0ke3Jlc3VsdH0ke3RoaXMuc3VmaXh9YFxyXG4gICAgICA6IGAke3RoaXMucHJlZml4fSR7cmVzdWx0fWA7XHJcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXMgPSBgJHt0aGlzLnByZWZpeH0ke3Jlc3VsdH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcbiAgcHVibGljIF9maW5kU3BlY2lhbENoYXIoaW5wdXRTeW1ib2w6IHN0cmluZyk6IHVuZGVmaW5lZCB8IHN0cmluZyB7XHJcbiAgICBjb25zdCBzeW1ib2w6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMubWFza1NwZWNpYWxDaGFyYWN0ZXJzLmZpbmQoXHJcbiAgICAgICh2YWw6IHN0cmluZykgPT4gdmFsID09PSBpbnB1dFN5bWJvbFxyXG4gICAgKTtcclxuICAgIHJldHVybiBzeW1ib2w7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jaGVja1N5bWJvbE1hc2soaW5wdXRTeW1ib2w6IHN0cmluZywgbWFza1N5bWJvbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJucyA9IHRoaXMuY3VzdG9tUGF0dGVyblxyXG4gICAgICA/IHRoaXMuY3VzdG9tUGF0dGVyblxyXG4gICAgICA6IHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnNbbWFza1N5bWJvbF0gJiZcclxuICAgICAgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnNbbWFza1N5bWJvbF0ucGF0dGVybiAmJlxyXG4gICAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJuc1ttYXNrU3ltYm9sXS5wYXR0ZXJuLnRlc3QoaW5wdXRTeW1ib2wpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXBhcmF0b3IgPSAoc3RyOiBzdHJpbmcpID0+IHtcclxuICAgIHN0ciArPSBcIlwiO1xyXG4gICAgY29uc3QgeDogc3RyaW5nW10gPSBzdHIuc3BsaXQoXCIuXCIpO1xyXG4gICAgY29uc3QgZGVjaW1hbHM6IHN0cmluZyA9IHgubGVuZ3RoID4gMSA/IGAuJHt4WzFdfWAgOiBcIlwiO1xyXG4gICAgbGV0IHJlczogc3RyaW5nID0geFswXTtcclxuICAgIGNvbnN0IHJneDogUmVnRXhwID0gLyhcXGQrKShcXGR7M30pLztcclxuICAgIHdoaWxlIChyZ3gudGVzdChyZXMpKSB7XHJcbiAgICAgIHJlcyA9IHJlcy5yZXBsYWNlKHJneCwgXCIkMVwiICsgXCIgXCIgKyBcIiQyXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcyArIGRlY2ltYWxzO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZG90U2VwYXJhdG9yID0gKHN0cjogc3RyaW5nKSA9PiB7XHJcbiAgICBzdHIgKz0gXCJcIjtcclxuICAgIGNvbnN0IHg6IHN0cmluZ1tdID0gc3RyLnNwbGl0KFwiLFwiKTtcclxuICAgIGNvbnN0IGRlY2ltYWxzOiBzdHJpbmcgPSB4Lmxlbmd0aCA+IDEgPyBgLCR7eFsxXX1gIDogXCJcIjtcclxuICAgIGxldCByZXM6IHN0cmluZyA9IHhbMF07XHJcbiAgICBjb25zdCByZ3g6IFJlZ0V4cCA9IC8oXFxkKykoXFxkezN9KS87XHJcbiAgICB3aGlsZSAocmd4LnRlc3QocmVzKSkge1xyXG4gICAgICByZXMgPSByZXMucmVwbGFjZShyZ3gsIFwiJDFcIiArIFwiLlwiICsgXCIkMlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXMgKyBkZWNpbWFscztcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGNvbWFTZXBhcmF0b3IgPSAoc3RyOiBzdHJpbmcpID0+IHtcclxuICAgIHN0ciArPSBcIlwiO1xyXG4gICAgY29uc3QgeDogc3RyaW5nW10gPSBzdHIuc3BsaXQoXCIuXCIpO1xyXG4gICAgY29uc3QgZGVjaW1hbHM6IHN0cmluZyA9XHJcbiAgICAgIHgubGVuZ3RoID4gMVxyXG4gICAgICAgID8gYC4ke3hbMV0ubGVuZ3RoIDwgMyA/IHhbMV0gOiB4WzFdLnN1YnN0cmluZygwLCAyKX1gXHJcbiAgICAgICAgOiBgLjAwYDtcclxuICAgIGxldCByZXM6IHN0cmluZyA9IHhbMF07XHJcbiAgICBjb25zdCByZ3g6IFJlZ0V4cCA9IC8oXFxkKykoXFxkezN9KS87XHJcbiAgICB3aGlsZSAocmd4LnRlc3QocmVzKSkge1xyXG4gICAgICByZXMgPSByZXMucmVwbGFjZShyZ3gsIFwiJDFcIiArIFwiLFwiICsgXCIkMlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXMgKyBkZWNpbWFscztcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHBlcnNhbnRhZ2UgPSAoc3RyOiBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICAgIGlmIChOdW1iZXIoc3RyKSA+PSAwICYmIE51bWJlcihzdHIpIDw9IDEwMCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==