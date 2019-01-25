/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { config, INITIAL_CONFIG, initialConfig, NEW_CONFIG } from './config';
import { MaskApplierService } from './mask-applier.service';
import { MaskDirective } from './mask.directive';
import { MaskPipe } from './mask.pipe';
export class NgxMaskModule {
    /**
     * @param {?=} configValue
     * @return {?}
     */
    static forRoot(configValue) {
        return {
            ngModule: NgxMaskModule,
            providers: [
                {
                    provide: NEW_CONFIG,
                    useValue: configValue
                },
                {
                    provide: INITIAL_CONFIG,
                    useValue: initialConfig
                },
                {
                    provide: config,
                    useFactory: _configFactory,
                    deps: [INITIAL_CONFIG, NEW_CONFIG]
                },
            ]
        };
    }
    /**
     * @param {?=} configValue
     * @return {?}
     */
    static forChild(configValue) {
        return {
            ngModule: NgxMaskModule,
        };
    }
}
NgxMaskModule.decorators = [
    { type: NgModule, args: [{
                providers: [MaskApplierService],
                exports: [MaskDirective, MaskPipe],
                declarations: [MaskDirective, MaskPipe]
            },] }
];
/**
 * \@internal
 * @param {?} initConfig
 * @param {?} configValue
 * @return {?}
 */
export function _configFactory(initConfig, configValue) {
    return (typeof configValue === 'function') ? configValue() : Object.assign({}, initConfig, configValue);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hc2subW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hc2svIiwic291cmNlcyI6WyJhcHAvbmd4LW1hc2svbmd4LW1hc2subW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFpQixNQUFNLFVBQVUsQ0FBQztBQUM1RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU92QyxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFFakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUEyQjtRQUMvQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxVQUFVO29CQUNuQixRQUFRLEVBQUUsV0FBVztpQkFDdEI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFFBQVEsRUFBRSxhQUFhO2lCQUN4QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsTUFBTTtvQkFDZixVQUFVLEVBQUUsY0FBYztvQkFDMUIsSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQztpQkFDbkM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUNNLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBMkI7UUFDaEQsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1NBQ3hCLENBQUM7SUFDSixDQUFDOzs7WUEvQkYsUUFBUSxTQUFDO2dCQUNSLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUMvQixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO2dCQUNsQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO2FBQ3hDOzs7Ozs7OztBQWlDRCxNQUFNLFVBQVUsY0FBYyxDQUM3QixVQUF5QixFQUFFLFdBQWtEO0lBQzVFLE9BQU8sQ0FBQyxPQUFPLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxtQkFBTSxVQUFVLEVBQUssV0FBVyxDQUFFLENBQUM7QUFDakcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBjb25maWcsIElOSVRJQUxfQ09ORklHLCBpbml0aWFsQ29uZmlnLCBORVdfQ09ORklHLCBvcHRpb25zQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgeyBNYXNrQXBwbGllclNlcnZpY2UgfSBmcm9tICcuL21hc2stYXBwbGllci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFza0RpcmVjdGl2ZSB9IGZyb20gJy4vbWFzay5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNYXNrUGlwZSB9IGZyb20gJy4vbWFzay5waXBlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgcHJvdmlkZXJzOiBbTWFza0FwcGxpZXJTZXJ2aWNlXSxcclxuICBleHBvcnRzOiBbTWFza0RpcmVjdGl2ZSwgTWFza1BpcGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW01hc2tEaXJlY3RpdmUsIE1hc2tQaXBlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TWFza01vZHVsZSB7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWdWYWx1ZT86IG9wdGlvbnNDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOZ3hNYXNrTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBORVdfQ09ORklHLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1ZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBJTklUSUFMX0NPTkZJRyxcclxuICAgICAgICAgIHVzZVZhbHVlOiBpbml0aWFsQ29uZmlnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBjb25maWcsXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBfY29uZmlnRmFjdG9yeSxcclxuICAgICAgICAgIGRlcHM6IFtJTklUSUFMX0NPTkZJRywgTkVXX0NPTkZJR11cclxuICAgICAgICB9LFxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIGZvckNoaWxkKGNvbmZpZ1ZhbHVlPzogb3B0aW9uc0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neE1hc2tNb2R1bGUsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9jb25maWdGYWN0b3J5XHJcbihpbml0Q29uZmlnOiBvcHRpb25zQ29uZmlnLCBjb25maWdWYWx1ZTogb3B0aW9uc0NvbmZpZyB8ICgoKSA9PiBvcHRpb25zQ29uZmlnKSk6IEZ1bmN0aW9uIHwgb3B0aW9uc0NvbmZpZyB7XHJcbiAgcmV0dXJuICh0eXBlb2YgY29uZmlnVmFsdWUgPT09ICdmdW5jdGlvbicpID8gY29uZmlnVmFsdWUoKSA6IHsgLi4uaW5pdENvbmZpZywgLi4uY29uZmlnVmFsdWUgfTtcclxufVxyXG4iXX0=