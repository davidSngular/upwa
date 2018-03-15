(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dogs_component_1 = __webpack_require__("./src/components/dogs/dogs.component.ts");
var posts_component_1 = __webpack_require__("./src/components/posts/posts.component.ts");
var routes = [
    { path: 'dogs', component: dogs_component_1.DogsComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    {
        path: '',
        redirectTo: '/dogs',
        pathMatch: 'full'
    },
    { path: '**', component: dogs_component_1.DogsComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__("./src/app/app.component.css.shim.ngstyle.js");
var i1 = __webpack_require__("@angular/core");
var i2 = __webpack_require__("@angular/router");
var i3 = __webpack_require__("@angular/common");
var i4 = __webpack_require__("./src/app/app.component.ts");
var styles_AppComponent = [i0.styles];
var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ["\n    Welcome to ", "!\n  "])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵeld(6, 0, null, null, 15, "nav", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(8, 0, null, null, 5, "a", [["routerLink", "/dogs"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(9, 671744, [[2, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(10, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 1, { links: 1 }), i1.ɵqud(603979776, 2, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, null, ["DOGS"])), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(15, 0, null, null, 5, "a", [["routerLink", "/posts"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 16).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(16, 671744, [[4, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(17, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 3, { links: 1 }), i1.ɵqud(603979776, 4, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, null, ["POSTS"])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵted(-1, null, ["\n\n"])), (_l()(), i1.ɵeld(23, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(24, 212992, null, 0, i2.RouterOutlet, [i2.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var currVal_3 = "/dogs"; _ck(_v, 9, 0, currVal_3); var currVal_4 = "active"; _ck(_v, 10, 0, currVal_4); var currVal_7 = "/posts"; _ck(_v, 16, 0, currVal_7); var currVal_8 = "active"; _ck(_v, 17, 0, currVal_8); _ck(_v, 24, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 3, 0, currVal_0); var currVal_1 = i1.ɵnov(_v, 9).target; var currVal_2 = i1.ɵnov(_v, 9).href; _ck(_v, 8, 0, currVal_1, currVal_2); var currVal_5 = i1.ɵnov(_v, 16).target; var currVal_6 = i1.ɵnov(_v, 16).href; _ck(_v, 15, 0, currVal_5, currVal_6); }); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i1.ɵdid(1, 49152, null, 0, i4.AppComponent, [], null, null)], null, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i1.ɵccf("app-root", i4.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__("@angular/core");
var i1 = __webpack_require__("./src/app/app.server.module.ts");
var i2 = __webpack_require__("./src/app/app.component.ts");
var i3 = __webpack_require__("./src/components/dogs/dogs.component.ngfactory.js");
var i4 = __webpack_require__("./src/components/posts/posts.component.ngfactory.js");
var i5 = __webpack_require__("./src/app/app.component.ngfactory.js");
var i6 = __webpack_require__("@angular/common");
var i7 = __webpack_require__("@angular/platform-browser");
var i8 = __webpack_require__("@angular/platform-server");
var i9 = __webpack_require__("@angular/animations/browser");
var i10 = __webpack_require__("@angular/platform-browser/animations");
var i11 = __webpack_require__("@angular/common/http");
var i12 = __webpack_require__("./src/interceptors/browser-state.interceptor.ts");
var i13 = __webpack_require__("./src/interceptors/server-state.interceptor.ts");
var i14 = __webpack_require__("@angular/router");
var i15 = __webpack_require__("@angular/http");
var i16 = __webpack_require__("@angular/animations");
var i17 = __webpack_require__("./src/components/dogs/dogs.component.ts");
var i18 = __webpack_require__("./src/components/posts/posts.component.ts");
var i19 = __webpack_require__("./src/app/app-routing.module.ts");
var i20 = __webpack_require__("./src/app/app.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.DogsComponentNgFactory, i4.PostsComponentNgFactory, i5.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵq, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i6.NgLocalization, i6.NgLocaleLocalization, [i0.LOCALE_ID, [2, i6.ɵa]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵn, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵo, []), i0.ɵmpd(4608, i7.DomSanitizer, i7.ɵe, [i6.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i7.DomSanitizer]), i0.ɵmpd(4608, i7.HAMMER_GESTURE_CONFIG, i7.HammerGestureConfig, []), i0.ɵmpd(5120, i7.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new i7.ɵDomEventsPlugin(p0_0, p0_1), new i7.ɵKeyEventsPlugin(p1_0), new i7.ɵHammerGesturesPlugin(p2_0, p2_1)]; }, [i6.DOCUMENT, i0.NgZone, i6.DOCUMENT, i6.DOCUMENT, i7.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i7.EventManager, i7.EventManager, [i7.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i7.ɵDomSharedStylesHost, i7.ɵDomSharedStylesHost, [i6.DOCUMENT]), i0.ɵmpd(4608, i7.ɵDomRendererFactory2, i7.ɵDomRendererFactory2, [i7.EventManager, i7.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i8.ɵc, i8.ɵc, [i7.DOCUMENT, [2, i7.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i7.ɵSharedStylesHost, null, [i8.ɵc]), i0.ɵmpd(4608, i8.ɵServerRendererFactory2, i8.ɵServerRendererFactory2, [i0.NgZone, i7.DOCUMENT, i7.ɵSharedStylesHost]), i0.ɵmpd(4608, i9.AnimationDriver, i9.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i9.ɵAnimationStyleNormalizer, i10.ɵd, []), i0.ɵmpd(4608, i9.ɵAnimationEngine, i10.ɵb, [i9.AnimationDriver, i9.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i8.ɵa, [i8.ɵServerRendererFactory2, i9.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i7.Meta, i7.Meta, [i6.DOCUMENT]), i0.ɵmpd(4608, i7.Title, i7.Title, [i6.DOCUMENT]), i0.ɵmpd(4608, i11.HttpXsrfTokenExtractor, i11.ɵh, [i6.DOCUMENT, i0.PLATFORM_ID, i11.ɵf]), i0.ɵmpd(4608, i11.ɵi, i11.ɵi, [i11.HttpXsrfTokenExtractor, i11.ɵg]), i0.ɵmpd(4608, i7.TransferState, i7.TransferState, []), i0.ɵmpd(5120, i11.HTTP_INTERCEPTORS, function (p0_0, p1_0, p2_0) { return [p0_0, new i12.BrowserStateInterceptor(p1_0), new i13.ServerStateInterceptor(p2_0)]; }, [i11.ɵi, i7.TransferState, i7.TransferState]), i0.ɵmpd(4608, i11.XhrFactory, i8.ɵd, []), i0.ɵmpd(4608, i11.HttpXhrBackend, i11.HttpXhrBackend, [i11.XhrFactory]), i0.ɵmpd(6144, i11.HttpBackend, null, [i11.HttpXhrBackend]), i0.ɵmpd(5120, i11.HttpHandler, i8.ɵg, [i11.HttpBackend, [2, i11.HTTP_INTERCEPTORS]]), i0.ɵmpd(4608, i11.HttpClient, i11.HttpClient, [i11.HttpHandler]), i0.ɵmpd(4608, i11.ɵe, i11.ɵe, []), i0.ɵmpd(5120, i14.ActivatedRoute, i14.ɵf, [i14.Router]), i0.ɵmpd(4608, i14.NoPreloading, i14.NoPreloading, []), i0.ɵmpd(6144, i14.PreloadingStrategy, null, [i14.NoPreloading]), i0.ɵmpd(135680, i14.RouterPreloader, i14.RouterPreloader, [i14.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i14.PreloadingStrategy]), i0.ɵmpd(4608, i14.PreloadAllModules, i14.PreloadAllModules, []), i0.ɵmpd(5120, i14.ROUTER_INITIALIZER, i14.ɵi, [i14.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i14.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i15.BrowserXhr, i8.ɵd, []), i0.ɵmpd(4608, i15.ResponseOptions, i15.BaseResponseOptions, []), i0.ɵmpd(4608, i15.XSRFStrategy, i8.ɵe, []), i0.ɵmpd(4608, i15.XHRBackend, i15.XHRBackend, [i15.BrowserXhr, i15.ResponseOptions, i15.XSRFStrategy]), i0.ɵmpd(4608, i15.RequestOptions, i15.BaseRequestOptions, []), i0.ɵmpd(5120, i15.Http, i8.ɵf, [i15.XHRBackend, i15.RequestOptions]), i0.ɵmpd(4608, i16.AnimationBuilder, i10.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i7.DOCUMENT]), i0.ɵmpd(5120, i8.BEFORE_APP_SERIALIZED, function (p0_0, p0_1, p0_2) { return [i8.ɵb(p0_0, p0_1, p0_2)]; }, [i7.DOCUMENT, i0.APP_ID, i7.TransferState]), i0.ɵmpd(512, i6.CommonModule, i6.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i7.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i14.ɵb()]; }, []), i0.ɵmpd(512, i14.ɵg, i14.ɵg, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, "upwa", []), i0.ɵmpd(2048, i7.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [i7.ɵh(p0_0), i14.ɵh(p1_0), i7.ɵf(p2_0, p2_1, p2_2)]; }, [[2, i0.NgProbeToken], i14.ɵg, i7.ɵTRANSITION_ID, i6.DOCUMENT, i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i7.BrowserModule, i7.BrowserModule, [[3, i7.BrowserModule]]), i0.ɵmpd(512, i11.HttpClientXsrfModule, i11.HttpClientXsrfModule, []), i0.ɵmpd(512, i11.HttpClientModule, i11.HttpClientModule, []), i0.ɵmpd(1024, i14.ɵa, i14.ɵd, [[3, i14.Router]]), i0.ɵmpd(512, i14.UrlSerializer, i14.DefaultUrlSerializer, []), i0.ɵmpd(512, i14.ChildrenOutletContexts, i14.ChildrenOutletContexts, []), i0.ɵmpd(256, i14.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i6.LocationStrategy, i14.ɵc, [i6.PlatformLocation, [2, i6.APP_BASE_HREF], i14.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i6.Location, i6.Location, [i6.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i14.ROUTES, function () { return [[{ path: "dogs", component: i17.DogsComponent }, { path: "posts", component: i18.PostsComponent }, { path: "", redirectTo: "/dogs", pathMatch: "full" }, { path: "**", component: i17.DogsComponent }]]; }, []), i0.ɵmpd(1024, i14.Router, i14.ɵe, [i0.ApplicationRef, i14.UrlSerializer, i14.ChildrenOutletContexts, i6.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i14.ROUTES, i14.ROUTER_CONFIGURATION, [2, i14.UrlHandlingStrategy], [2, i14.RouteReuseStrategy]]), i0.ɵmpd(512, i14.RouterModule, i14.RouterModule, [[2, i14.ɵa], [2, i14.Router]]), i0.ɵmpd(512, i19.AppRoutingModule, i19.AppRoutingModule, []), i0.ɵmpd(512, i7.BrowserTransferStateModule, i7.BrowserTransferStateModule, []), i0.ɵmpd(512, i20.AppModule, i20.AppModule, []), i0.ɵmpd(512, i15.HttpModule, i15.HttpModule, []), i0.ɵmpd(512, i10.NoopAnimationsModule, i10.NoopAnimationsModule, []), i0.ɵmpd(512, i8.ServerModule, i8.ServerModule, []), i0.ɵmpd(512, i8.ServerTransferStateModule, i8.ServerTransferStateModule, []), i0.ɵmpd(512, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i11.ɵf, "XSRF-TOKEN", []), i0.ɵmpd(256, i11.ɵg, "X-XSRF-TOKEN", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/components/dogs/dogs.component.css.shim.ngstyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/components/dogs/dogs.component.ngfactory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__("./src/components/dogs/dogs.component.css.shim.ngstyle.js");
var i1 = __webpack_require__("@angular/core");
var i2 = __webpack_require__("@angular/common");
var i3 = __webpack_require__("./src/components/dogs/dogs.component.ts");
var i4 = __webpack_require__("@angular/common/http");
var styles_DogsComponent = [i0.styles];
var RenderType_DogsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_DogsComponent, data: {} });
exports.RenderType_DogsComponent = RenderType_DogsComponent;
function View_DogsComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["style", "text-align:center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n    Dogs\n  "])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵeld(6, 0, null, null, 2, "pre", [], null, null, null, null, null)), (_l()(), i1.ɵted(7, null, ["", ""])), i1.ɵpid(0, i2.JsonPipe, []), (_l()(), i1.ɵted(-1, null, ["\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵunv(_v, 7, 0, i1.ɵnov(_v, 8).transform(_co.dogs)); _ck(_v, 7, 0, currVal_0); }); }
exports.View_DogsComponent_0 = View_DogsComponent_0;
function View_DogsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_DogsComponent_0, RenderType_DogsComponent)), i1.ɵdid(1, 114688, null, 0, i3.DogsComponent, [i4.HttpClient], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_DogsComponent_Host_0 = View_DogsComponent_Host_0;
var DogsComponentNgFactory = i1.ɵccf("app-root", i3.DogsComponent, View_DogsComponent_Host_0, {}, {}, []);
exports.DogsComponentNgFactory = DogsComponentNgFactory;


/***/ }),

/***/ "./src/components/dogs/dogs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("@angular/common/http");
var DogsComponent = /** @class */ (function () {
    function DogsComponent(http) {
        this.http = http;
    }
    DogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get('https://dog.ceo/api/breeds/list/all')
            .subscribe(function (data) {
            // console.log(data);
            _this.dogs = data;
        });
    };
    return DogsComponent;
}());
exports.DogsComponent = DogsComponent;


/***/ }),

/***/ "./src/components/posts/posts.component.css.shim.ngstyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/components/posts/posts.component.ngfactory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__("./src/components/posts/posts.component.css.shim.ngstyle.js");
var i1 = __webpack_require__("@angular/core");
var i2 = __webpack_require__("@angular/common");
var i3 = __webpack_require__("./src/components/posts/posts.component.ts");
var i4 = __webpack_require__("@angular/common/http");
var styles_PostsComponent = [i0.styles];
var RenderType_PostsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_PostsComponent, data: {} });
exports.RenderType_PostsComponent = RenderType_PostsComponent;
function View_PostsComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["style", "text-align:center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n    Posts\n  "])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵeld(6, 0, null, null, 2, "pre", [], null, null, null, null, null)), (_l()(), i1.ɵted(7, null, ["", ""])), i1.ɵpid(0, i2.JsonPipe, []), (_l()(), i1.ɵted(-1, null, ["\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵunv(_v, 7, 0, i1.ɵnov(_v, 8).transform(_co.posts)); _ck(_v, 7, 0, currVal_0); }); }
exports.View_PostsComponent_0 = View_PostsComponent_0;
function View_PostsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_PostsComponent_0, RenderType_PostsComponent)), i1.ɵdid(1, 114688, null, 0, i3.PostsComponent, [i4.HttpClient], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_PostsComponent_Host_0 = View_PostsComponent_Host_0;
var PostsComponentNgFactory = i1.ɵccf("app-root", i3.PostsComponent, View_PostsComponent_Host_0, {}, {}, []);
exports.PostsComponentNgFactory = PostsComponentNgFactory;


/***/ }),

/***/ "./src/components/posts/posts.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("@angular/common/http");
var PostsComponent = /** @class */ (function () {
    function PostsComponent(http) {
        this.http = http;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get('https://jsonplaceholder.typicode.com/posts')
            .subscribe(function (data) {
            // console.log(data);
            _this.posts = data;
        });
    };
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;


/***/ }),

/***/ "./src/interceptors/browser-state.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("@angular/common/http");
var platform_browser_1 = __webpack_require__("@angular/platform-browser");
var of_1 = __webpack_require__("rxjs/observable/of");
var BrowserStateInterceptor = /** @class */ (function () {
    function BrowserStateInterceptor(_transferState) {
        this._transferState = _transferState;
    }
    BrowserStateInterceptor.prototype.intercept = function (req, next) {
        if (req.method !== 'GET') {
            return next.handle(req);
        }
        var storedResponse = this._transferState.get(platform_browser_1.makeStateKey(req.urlWithParams), null);
        if (storedResponse) {
            var response = new http_1.HttpResponse({ body: storedResponse, status: 200 });
            return of_1.of(response);
        }
        return next.handle(req);
    };
    return BrowserStateInterceptor;
}());
exports.BrowserStateInterceptor = BrowserStateInterceptor;


/***/ }),

/***/ "./src/interceptors/server-state.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("@angular/common/http");
var platform_browser_1 = __webpack_require__("@angular/platform-browser");
__webpack_require__("rxjs/add/operator/do");
var ServerStateInterceptor = /** @class */ (function () {
    function ServerStateInterceptor(_transferState) {
        this._transferState = _transferState;
    }
    ServerStateInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).do(function (event) {
            if (event instanceof http_1.HttpResponse) {
                _this._transferState.set(platform_browser_1.makeStateKey(req.urlWithParams), event.body);
            }
        });
    };
    return ServerStateInterceptor;
}());
exports.ServerStateInterceptor = ServerStateInterceptor;


/***/ }),

/***/ "./src/main.server.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__("./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var app_server_module_1 = __webpack_require__("./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/http":
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "rxjs/add/operator/do":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/do");

/***/ }),

/***/ "rxjs/observable/of":
/***/ (function(module, exports) {

module.exports = require("rxjs/observable/of");

/***/ })

/******/ })));