/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function IConfig() { }
if (false) {
    /** @type {?} */
    IConfig.prototype.sufix;
    /** @type {?} */
    IConfig.prototype.prefix;
    /** @type {?} */
    IConfig.prototype.clearIfNotMatch;
    /** @type {?} */
    IConfig.prototype.showTemplate;
    /** @type {?} */
    IConfig.prototype.showMaskTyped;
    /** @type {?} */
    IConfig.prototype.dropSpecialCharacters;
    /** @type {?} */
    IConfig.prototype.specialCharacters;
    /** @type {?} */
    IConfig.prototype.patterns;
}
/** @type {?} */
export const config = new InjectionToken("config");
/** @type {?} */
export const NEW_CONFIG = new InjectionToken("NEW_CONFIG");
/** @type {?} */
export const INITIAL_CONFIG = new InjectionToken("INITIAL_CONFIG");
/** @type {?} */
export const initialConfig = {
    sufix: "",
    prefix: "",
    clearIfNotMatch: false,
    showTemplate: false,
    showMaskTyped: false,
    dropSpecialCharacters: true,
    specialCharacters: [
        "-",
        "/",
        "(",
        ")",
        ":",
        " ",
        "+",
        ",",
        "@",
        "[",
        "]",
        '"',
        "'"
    ],
    patterns: {
        "0": {
            pattern: new RegExp("\\d")
        },
        "9": {
            pattern: new RegExp("\\d"),
            optional: true
        },
        A: {
            pattern: new RegExp("[a-zA-Z0-9]")
        },
        S: {
            pattern: new RegExp("[a-zA-Z]")
        },
        d: {
            pattern: new RegExp("\\d")
        },
        m: {
            pattern: new RegExp("\\d")
        },
        H: {
            pattern: new RegExp("\\d")
        },
        h: {
            pattern: new RegExp("\\d")
        },
        s: {
            pattern: new RegExp("\\d")
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hc2svIiwic291cmNlcyI6WyJhcHAvbmd4LW1hc2svY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRS9DLDZCQWNDOzs7SUFiQyx3QkFBYzs7SUFDZCx5QkFBZTs7SUFDZixrQ0FBeUI7O0lBQ3pCLCtCQUFzQjs7SUFDdEIsZ0NBQXVCOztJQUN2Qix3Q0FBMEM7O0lBQzFDLG9DQUE0Qjs7SUFDNUIsMkJBS0U7OztBQUlKLE1BQU0sT0FBTyxNQUFNLEdBQTJCLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQzs7QUFDMUUsTUFBTSxPQUFPLFVBQVUsR0FBMkIsSUFBSSxjQUFjLENBQ2xFLFlBQVksQ0FDYjs7QUFDRCxNQUFNLE9BQU8sY0FBYyxHQUE0QixJQUFJLGNBQWMsQ0FDdkUsZ0JBQWdCLENBQ2pCOztBQUVELE1BQU0sT0FBTyxhQUFhLEdBQVk7SUFDcEMsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsRUFBRTtJQUNWLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLFlBQVksRUFBRSxLQUFLO0lBQ25CLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLHFCQUFxQixFQUFFLElBQUk7SUFDM0IsaUJBQWlCLEVBQUU7UUFDakIsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNKO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsR0FBRyxFQUFFO1lBQ0gsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMzQjtRQUNELEdBQUcsRUFBRTtZQUNILE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDMUIsUUFBUSxFQUFFLElBQUk7U0FDZjtRQUNELENBQUMsRUFBRTtZQUNELE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUM7U0FDbkM7UUFDRCxDQUFDLEVBQUU7WUFDRCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ2hDO1FBQ0QsQ0FBQyxFQUFFO1lBQ0QsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMzQjtRQUNELENBQUMsRUFBRTtZQUNELE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFDRCxDQUFDLEVBQUU7WUFDRCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQzNCO1FBQ0QsQ0FBQyxFQUFFO1lBQ0QsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMzQjtRQUNELENBQUMsRUFBRTtZQUNELE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDM0I7S0FDRjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlnIHtcclxuICBzdWZpeDogc3RyaW5nO1xyXG4gIHByZWZpeDogc3RyaW5nO1xyXG4gIGNsZWFySWZOb3RNYXRjaDogYm9vbGVhbjtcclxuICBzaG93VGVtcGxhdGU6IGJvb2xlYW47XHJcbiAgc2hvd01hc2tUeXBlZDogYm9vbGVhbjtcclxuICBkcm9wU3BlY2lhbENoYXJhY3RlcnM6IGJvb2xlYW4gfCBzdHJpbmdbXTtcclxuICBzcGVjaWFsQ2hhcmFjdGVyczogc3RyaW5nW107XHJcbiAgcGF0dGVybnM6IHtcclxuICAgIFtjaGFyYWN0ZXI6IHN0cmluZ106IHtcclxuICAgICAgcGF0dGVybjogUmVnRXhwO1xyXG4gICAgICBvcHRpb25hbD86IGJvb2xlYW47XHJcbiAgICB9O1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIG9wdGlvbnNDb25maWcgPSBQYXJ0aWFsPElDb25maWc+O1xyXG5leHBvcnQgY29uc3QgY29uZmlnOiBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+ID0gbmV3IEluamVjdGlvblRva2VuKFwiY29uZmlnXCIpO1xyXG5leHBvcnQgY29uc3QgTkVXX0NPTkZJRzogSW5qZWN0aW9uVG9rZW48c3RyaW5nPiA9IG5ldyBJbmplY3Rpb25Ub2tlbihcclxuICBcIk5FV19DT05GSUdcIlxyXG4pO1xyXG5leHBvcnQgY29uc3QgSU5JVElBTF9DT05GSUc6IEluamVjdGlvblRva2VuPElDb25maWc+ID0gbmV3IEluamVjdGlvblRva2VuKFxyXG4gIFwiSU5JVElBTF9DT05GSUdcIlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxDb25maWc6IElDb25maWcgPSB7XHJcbiAgc3VmaXg6IFwiXCIsXHJcbiAgcHJlZml4OiBcIlwiLFxyXG4gIGNsZWFySWZOb3RNYXRjaDogZmFsc2UsXHJcbiAgc2hvd1RlbXBsYXRlOiBmYWxzZSxcclxuICBzaG93TWFza1R5cGVkOiBmYWxzZSxcclxuICBkcm9wU3BlY2lhbENoYXJhY3RlcnM6IHRydWUsXHJcbiAgc3BlY2lhbENoYXJhY3RlcnM6IFtcclxuICAgIFwiLVwiLFxyXG4gICAgXCIvXCIsXHJcbiAgICBcIihcIixcclxuICAgIFwiKVwiLFxyXG4gICAgXCI6XCIsXHJcbiAgICBcIiBcIixcclxuICAgIFwiK1wiLFxyXG4gICAgXCIsXCIsXHJcbiAgICBcIkBcIixcclxuICAgIFwiW1wiLFxyXG4gICAgXCJdXCIsXHJcbiAgICAnXCInLFxyXG4gICAgXCInXCJcclxuICBdLFxyXG4gIHBhdHRlcm5zOiB7XHJcbiAgICBcIjBcIjoge1xyXG4gICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKFwiXFxcXGRcIilcclxuICAgIH0sXHJcbiAgICBcIjlcIjoge1xyXG4gICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKFwiXFxcXGRcIiksXHJcbiAgICAgIG9wdGlvbmFsOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgQToge1xyXG4gICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKFwiW2EtekEtWjAtOV1cIilcclxuICAgIH0sXHJcbiAgICBTOiB7XHJcbiAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoXCJbYS16QS1aXVwiKVxyXG4gICAgfSxcclxuICAgIGQ6IHtcclxuICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChcIlxcXFxkXCIpXHJcbiAgICB9LFxyXG4gICAgbToge1xyXG4gICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKFwiXFxcXGRcIilcclxuICAgIH0sXHJcbiAgICBIOiB7XHJcbiAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoXCJcXFxcZFwiKVxyXG4gICAgfSxcclxuICAgIGg6IHtcclxuICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChcIlxcXFxkXCIpXHJcbiAgICB9LFxyXG4gICAgczoge1xyXG4gICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKFwiXFxcXGRcIilcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==