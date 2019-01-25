/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
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
export var config = new InjectionToken('config');
/** @type {?} */
export var NEW_CONFIG = new InjectionToken('NEW_CONFIG');
/** @type {?} */
export var INITIAL_CONFIG = new InjectionToken('INITIAL_CONFIG');
/** @type {?} */
export var initialConfig = {
    sufix: '',
    prefix: '',
    clearIfNotMatch: false,
    showTemplate: false,
    showMaskTyped: false,
    dropSpecialCharacters: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hc2svIiwic291cmNlcyI6WyJhcHAvbmd4LW1hc2svY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRS9DLDZCQWNDOzs7SUFiRyx3QkFBYzs7SUFDZCx5QkFBZTs7SUFDZixrQ0FBeUI7O0lBQ3pCLCtCQUFzQjs7SUFDdEIsZ0NBQXVCOztJQUN2Qix3Q0FBMEM7O0lBQzFDLG9DQUE0Qjs7SUFDNUIsMkJBS0U7OztBQUlOLE1BQU0sS0FBTyxNQUFNLEdBQTJCLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQzs7QUFDMUUsTUFBTSxLQUFPLFVBQVUsR0FBMkIsSUFBSSxjQUFjLENBQUMsWUFBWSxDQUFDOztBQUNsRixNQUFNLEtBQU8sY0FBYyxHQUE0QixJQUFJLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQzs7QUFFM0YsTUFBTSxLQUFPLGFBQWEsR0FBWTtJQUNsQyxLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0lBQ1YsZUFBZSxFQUFFLEtBQUs7SUFDdEIsWUFBWSxFQUFFLEtBQUs7SUFDbkIsYUFBYSxFQUFFLEtBQUs7SUFDcEIscUJBQXFCLEVBQUUsSUFBSTtJQUMzQixpQkFBaUIsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDM0YsUUFBUSxFQUFFO1FBQ04sR0FBRyxFQUFFO1lBQ0QsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztTQUM3QjtRQUNELEdBQUcsRUFBRTtZQUNELE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDMUIsUUFBUSxFQUFFLElBQUk7U0FDakI7UUFDRCxHQUFHLEVBQUU7WUFDRCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDO1NBQ3ZDO1FBQ0QsR0FBRyxFQUFFO1lBQ0QsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQztTQUNwQztRQUNELEdBQUcsRUFBRTtZQUNELE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDN0I7UUFDRCxHQUFHLEVBQUU7WUFDRCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQzdCO1FBQ0QsR0FBRyxFQUFFO1lBQ0QsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztTQUM3QjtRQUNELEdBQUcsRUFBRTtZQUNELE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDN0I7UUFDRCxHQUFHLEVBQUU7WUFDRCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQzdCO0tBQ0o7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb25maWcge1xyXG4gICAgc3VmaXg6IHN0cmluZztcclxuICAgIHByZWZpeDogc3RyaW5nO1xyXG4gICAgY2xlYXJJZk5vdE1hdGNoOiBib29sZWFuO1xyXG4gICAgc2hvd1RlbXBsYXRlOiBib29sZWFuO1xyXG4gICAgc2hvd01hc2tUeXBlZDogYm9vbGVhbjtcclxuICAgIGRyb3BTcGVjaWFsQ2hhcmFjdGVyczogYm9vbGVhbiB8IHN0cmluZ1tdO1xyXG4gICAgc3BlY2lhbENoYXJhY3RlcnM6IHN0cmluZ1tdO1xyXG4gICAgcGF0dGVybnM6IHtcclxuICAgICAgICBbY2hhcmFjdGVyOiBzdHJpbmddOiB7XHJcbiAgICAgICAgICAgIHBhdHRlcm46IFJlZ0V4cCxcclxuICAgICAgICAgICAgb3B0aW9uYWw/OiBib29sZWFuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgb3B0aW9uc0NvbmZpZyA9IFBhcnRpYWw8SUNvbmZpZz47XHJcbmV4cG9ydCBjb25zdCBjb25maWc6IEluamVjdGlvblRva2VuPHN0cmluZz4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ2NvbmZpZycpO1xyXG5leHBvcnQgY29uc3QgTkVXX0NPTkZJRzogSW5qZWN0aW9uVG9rZW48c3RyaW5nPiA9IG5ldyBJbmplY3Rpb25Ub2tlbignTkVXX0NPTkZJRycpO1xyXG5leHBvcnQgY29uc3QgSU5JVElBTF9DT05GSUc6IEluamVjdGlvblRva2VuPElDb25maWc+ID0gbmV3IEluamVjdGlvblRva2VuKCdJTklUSUFMX0NPTkZJRycpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxDb25maWc6IElDb25maWcgPSB7XHJcbiAgICBzdWZpeDogJycsXHJcbiAgICBwcmVmaXg6ICcnLFxyXG4gICAgY2xlYXJJZk5vdE1hdGNoOiBmYWxzZSxcclxuICAgIHNob3dUZW1wbGF0ZTogZmFsc2UsXHJcbiAgICBzaG93TWFza1R5cGVkOiBmYWxzZSxcclxuICAgIGRyb3BTcGVjaWFsQ2hhcmFjdGVyczogdHJ1ZSxcclxuICAgIHNwZWNpYWxDaGFyYWN0ZXJzOiBbJy0nLCAnLycsICcoJywgJyknLCAnLicsICc6JywgJyAnLCAnKycsICcsJywgJ0AnLCAnWycsICddJywgJ1xcXCInLCAnXFwnJ10sXHJcbiAgICBwYXR0ZXJuczoge1xyXG4gICAgICAgICcwJzoge1xyXG4gICAgICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdcXFxcZCcpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzknOiB7XHJcbiAgICAgICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoJ1xcXFxkJyksXHJcbiAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnQSc6IHtcclxuICAgICAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnXFxbYS16QS1aMC05XFxdJylcclxuICAgICAgICB9LFxyXG4gICAgICAgICdTJzoge1xyXG4gICAgICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdcXFthLXpBLVpcXF0nKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2QnOiB7XHJcbiAgICAgICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoJ1xcXFxkJyksXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnbSc6IHtcclxuICAgICAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnXFxcXGQnKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdIJzoge1xyXG4gICAgICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdcXFxcZCcpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2gnOiB7XHJcbiAgICAgICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoJ1xcXFxkJyksXHJcbiAgICAgICAgfSxcclxuICAgICAgICAncyc6IHtcclxuICAgICAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnXFxcXGQnKSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbiJdfQ==