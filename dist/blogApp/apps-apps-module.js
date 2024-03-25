(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps-apps-module"],{

/***/ "+YCP":
/*!****************************************************************!*\
  !*** ./src/app/apps/blog/blog-detail/blog-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: BlogDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailComponent", function() { return BlogDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blog_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog-service.service */ "jYeG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function BlogDetailComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.blogDetail == null ? null : ctx_r0.blogDetail.image2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class BlogDetailComponent {
    constructor(activatedRouter, service, router) {
        this.service = service;
        this.router = router;
        this.blogDetail = null;
        this.id = activatedRouter.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.blogDetail = this.service.Blogs.filter(x => x.id === +this.id)[0];
    }
    loginClick() {
        this.router.navigate([('/login')]);
    }
    newPost() {
        this.service.showEdit = false;
        this.router.navigate([('/post')]);
    }
    editPost() {
        var _a;
        this.service.showEdit = false;
        this.router.navigate([('/editPost'), (_a = this.blogDetail) === null || _a === void 0 ? void 0 : _a.id]);
    }
}
BlogDetailComponent.ɵfac = function BlogDetailComponent_Factory(t) { return new (t || BlogDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceblogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
BlogDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogDetailComponent, selectors: [["app-blog-detail"]], decls: 23, vars: 5, consts: [[1, "banner-innerpage", 2, "background-image", "url(assets/images/landingpage/fire.jpg)"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "align-self-center", "text-center"], [1, "title"], [1, "container2", "align-self-center", "text-center"], [1, "col-md-8", "no-trans"], [1, "mini-spacer"], [1, "d-flex", "align-items-center", "text-uppercase", "m-t-40", "font-13", "font-medium"], [1, "ml-auto"], ["routerLink", "", 1, "link"], [1, "d-flex", "align-items-center", "justify-content-center"], ["alt", "Blog Image", "class", "img-fluid rounded", "style", "max-width: 200px; max-height: 200px;", 3, "src", 4, "ngIf"], [1, "title", "font-light"], [1, "m-t-30", "m-b-30"], ["alt", "Blog Image", 1, "img-fluid", "rounded", 2, "max-width", "200px", "max-height", "200px", 3, "src"]], template: function BlogDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DETAILS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BlogDetailComponent_img_15_Template, 1, 1, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.blogDetail == null ? null : ctx.blogDetail.blogDate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blogDetail == null ? null : ctx.blogDetail.image2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.heading, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.subHeading, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.blogDetail, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".banner-innerpage[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n    height: 80vh;\r\n    position: relative;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  \r\n  .title[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  @media (max-width: 767px) {\r\n    .m-t-30[_ngcontent-%COMP%], .m-b-30[_ngcontent-%COMP%] {\r\n      font-size: 14px; \r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFO01BQ0UsZUFBZSxFQUFFLDhDQUE4QztJQUNqRTtFQUNGIiwiZmlsZSI6ImJsb2ctZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyLWlubmVycGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLm0tdC0zMCwgLm0tYi0zMCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDsgLyogUHJpbGFnb2RpdGUgdmVsacSNaW51IHRla3N0YSBwcmVtYSBwb3RyZWJpICovXHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-detail',
                templateUrl: './blog-detail.component.html',
                styleUrls: ['./blog-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _blog_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceblogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "0MNC":
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js ***!
  \*******************************************************************/
/*! exports provided: BreakpointObserver, Breakpoints, LayoutModule, MediaMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function() { return BreakpointObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoints", function() { return Breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMatcher", function() { return MediaMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Global registry for all dynamically-created, injected media queries. */
const mediaQueriesForWebkitCompatibility = new Set();
/** Style tag that holds all of the dynamically-created media queries. */
let mediaQueryStyleNode;
/** A utility for calling matchMedia queries. */
class MediaMatcher {
    constructor(_platform) {
        this._platform = _platform;
        this._matchMedia = this._platform.isBrowser && window.matchMedia ?
            // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
            // call it from a different scope.
            window.matchMedia.bind(window) :
            noopMatchMedia;
    }
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     */
    matchMedia(query) {
        if (this._platform.WEBKIT) {
            createEmptyStyleRule(query);
        }
        return this._matchMedia(query);
    }
}
MediaMatcher.ɵfac = function MediaMatcher_Factory(t) { return new (t || MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); };
MediaMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MediaMatcher_Factory() { return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); }, token: MediaMatcher, providedIn: "root" });
MediaMatcher.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }]; }, null); })();
/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 */
function createEmptyStyleRule(query) {
    if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
    }
    try {
        if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement('style');
            mediaQueryStyleNode.setAttribute('type', 'text/css');
            document.head.appendChild(mediaQueryStyleNode);
        }
        if (mediaQueryStyleNode.sheet) {
            mediaQueryStyleNode.sheet
                .insertRule(`@media ${query} {.fx-query-test{ }}`, 0);
            mediaQueriesForWebkitCompatibility.add(query);
        }
    }
    catch (e) {
        console.error(e);
    }
}
/** No-op matchMedia replacement for non-browser platforms. */
function noopMatchMedia(query) {
    // Use `as any` here to avoid adding additional necessary properties for
    // the noop matcher.
    return {
        matches: query === 'all' || query === '',
        media: query,
        addListener: () => { },
        removeListener: () => { }
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Utility for checking the matching state of @media queries. */
class BreakpointObserver {
    constructor(_mediaMatcher, _zone) {
        this._mediaMatcher = _mediaMatcher;
        this._zone = _zone;
        /**  A map of all media queries currently being listened for. */
        this._queries = new Map();
        /** A subject for all other observables to takeUntil based on. */
        this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /** Completes the active subject, signalling to all other observables to complete. */
    ngOnDestroy() {
        this._destroySubject.next();
        this._destroySubject.complete();
    }
    /**
     * Whether one or more media queries match the current viewport size.
     * @param value One or more media queries to check.
     * @returns Whether any of the media queries match.
     */
    isMatched(value) {
        const queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(value));
        return queries.some(mediaQuery => this._registerQuery(mediaQuery).mql.matches);
    }
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param value One or more media queries to check.
     * @returns A stream of matches for the given queries.
     */
    observe(value) {
        const queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(value));
        const observables = queries.map(query => this._registerQuery(query).observable);
        let stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observables);
        // Emit the first state immediately, and then debounce the subsequent emissions.
        stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0)));
        return stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(breakpointStates => {
            const response = {
                matches: false,
                breakpoints: {},
            };
            breakpointStates.forEach(({ matches, query }) => {
                response.matches = response.matches || matches;
                response.breakpoints[query] = matches;
            });
            return response;
        }));
    }
    /** Registers a specific query to be listened for. */
    _registerQuery(query) {
        // Only set up a new MediaQueryList if it is not already being listened for.
        if (this._queries.has(query)) {
            return this._queries.get(query);
        }
        const mql = this._mediaMatcher.matchMedia(query);
        // Create callback for match changes and add it is as a listener.
        const queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
            // back into the zone because matchMedia is only included in Zone.js by loading the
            // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
            // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
            // patches it.
            const handler = (e) => this._zone.run(() => observer.next(e));
            mql.addListener(handler);
            return () => {
                mql.removeListener(handler);
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ matches }) => ({ query, matches })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroySubject));
        // Add the MediaQueryList to the set of queries.
        const output = { observable: queryObservable, mql };
        this._queries.set(query, output);
        return output;
    }
}
BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) { return new (t || BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
BreakpointObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function BreakpointObserver_Factory() { return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: BreakpointObserver, providedIn: "root" });
BreakpointObserver.ctorParameters = () => [
    { type: MediaMatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MediaMatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */
function splitQueries(queries) {
    return queries.map(query => query.split(','))
        .reduce((a1, a2) => a1.concat(a2))
        .map(query => query.trim());
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name
const Breakpoints = {
    XSmall: '(max-width: 599.98px)',
    Small: '(min-width: 600px) and (max-width: 959.98px)',
    Medium: '(min-width: 960px) and (max-width: 1279.98px)',
    Large: '(min-width: 1280px) and (max-width: 1919.98px)',
    XLarge: '(min-width: 1920px)',
    Handset: '(max-width: 599.98px) and (orientation: portrait), ' +
        '(max-width: 959.98px) and (orientation: landscape)',
    Tablet: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), ' +
        '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
    Web: '(min-width: 840px) and (orientation: portrait), ' +
        '(min-width: 1280px) and (orientation: landscape)',
    HandsetPortrait: '(max-width: 599.98px) and (orientation: portrait)',
    TabletPortrait: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)',
    WebPortrait: '(min-width: 840px) and (orientation: portrait)',
    HandsetLandscape: '(max-width: 959.98px) and (orientation: landscape)',
    TabletLandscape: '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
    WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "2iH7":
/*!***********************************************!*\
  !*** ./src/app/apps/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _blog_blog_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog/blog-service.service */ "jYeG");
/* harmony import */ var _About_Components_top_content_top_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About-Components/top-content/top-content.component */ "jfhW");
/* harmony import */ var _About_Components_relay_on_relay_on_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About-Components/relay-on/relay-on.component */ "RvGm");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/footer/footer.component */ "LsfF");






class AboutComponent {
    constructor(service) {
        this.service = service;
        this.service.showEdit = false;
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_blog_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceblogService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 41, vars: 0, consts: [[1, "main"], [1, "static-slider-head", 2, "background-image", "url(assets/images/landingpage/firee.webp)", "position", "relative", "height", "60vh"], [1, "container", 2, "position", "absolute", "bottom", "0", "left", "50%", "transform", "translateX(-50%)", "width", "100%"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "align-self-center", "text-center", "no-trans"], [1, "titleabout"], [1, "spacer", "feature22"], [1, "container"], [1, "bg-light", "spacer", "feature1"], [1, "col-md-7", "text-center", "no-trans", 2, "font-weight", "bold"], [1, "title"], [1, "subtitle", 2, "font-weight", "bold", "text-align", "center"], [1, "spacer"], [1, "title", "text-center"], [1, "row", "justify-content-center", "m-b-30", 2, "margin-top", "40px"], [1, "col-md-4", "text-center", "no-trans", 2, "font-family", "Kanit, sans-serif"], [1, "content-with-image"], ["src", "assets/images/innerpage/mostar2.jpg", "alt", "Image 3", 1, "img-fluid", "rounded-image"], [2, "font-family", "Kanit, sans-serif"], ["src", "assets/images/innerpage/rivernatual.webp", "alt", "Image 4", 1, "img-fluid", "rounded-image"], ["src", "assets/images/innerpage/mostar3.webp", "alt", "Image 4", 1, "img-fluid", "rounded-image"], ["footer", ""]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-top-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Services we offer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Here you can see the list of services that we offer that will complete your camp experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-relay-on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " More about camp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " The camp, which opened its doors in 2019, is located in a highly favorable geographical position near the city of Mostar, right along the picturesque Neretva River. This place offers the perfect combination of natural surroundings and a pleasant atmosphere, making it an ideal destination for adventure and nature enthusiasts. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " With top-notch equipment and expert guides providing support during each activity, our camp becomes your base for unforgettable adventures in the heart of nature. Experience Mostar and its surroundings in a unique way, filled with excitement, the beauty of nature, and unforgettable moments that will be etched in your memory. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Discover the rich cultural heritage surrounding the camp, with opportunities to visit historical sites, taste local cuisine, and immerse yourself in the vibrant traditions of Mostar. Whether you're an adventure seeker or a culture enthusiast, our camp offers a diverse range of experiences to make your stay truly memorable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-footer", null, 21);
    } }, directives: [_About_Components_top_content_top_content_component__WEBPACK_IMPORTED_MODULE_2__["TopContentComponent"], _About_Components_relay_on_relay_on_component__WEBPACK_IMPORTED_MODULE_3__["RelayOnComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".banner-innerpage[_ngcontent-%COMP%] {\r\n    background-size: cover; \r\n    height: 80vh; \r\n    margin-bottom: 20px; \r\n  }\r\n\r\n  .content-with-image[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px; \r\n  }\r\n\r\n  .rounded-image[_ngcontent-%COMP%] {\r\n    border-radius: 10px; \r\n    overflow: hidden;   \r\n  }\r\n\r\n  .main[_ngcontent-%COMP%]{\r\n    font-family: \"Kanit\", sans-serif;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%]{\r\n    font-family: \"Kanit\", sans-serif;\r\n  }\r\n\r\n  .spacer[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n  }\r\n\r\n  .titleabout[_ngcontent-%COMP%]{\r\n    font-family: \"Kanit\", sans-serif!important;\r\n    color: white!important;\r\n  }\r\n\r\n  .main[_ngcontent-%COMP%]{\r\n    font-family: \"Kanit\", sans-serif;\r\n  }\r\n\r\n  .subtitle[_ngcontent-%COMP%]{\r\n    font-family: \"Kanit\", sans-serif;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    text-align: justify;\r\n    font-size: 12px; \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0IsRUFBRSx1Q0FBdUM7SUFDL0QsWUFBWSxFQUFFLHdEQUF3RDtJQUN0RSxtQkFBbUIsRUFBRSxxREFBcUQ7RUFDNUU7O0VBRUE7SUFDRSxtQkFBbUIsRUFBRSwyREFBMkQ7RUFDbEY7O0VBRUE7SUFDRSxtQkFBbUIsRUFBRSxrREFBa0Q7SUFDdkUsZ0JBQWdCLElBQUksaUZBQWlGO0VBQ3ZHOztFQUVBO0lBQ0UsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsMENBQTBDO0lBQzFDLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlLEVBQUUsMkNBQTJDO0VBQzlEIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyLWlubmVycGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBpbGkgZHJ1Z2Ugb2Rnb3ZhcmFqdcSHZSB2cmlqZWRub3N0aSAqL1xyXG4gICAgaGVpZ2h0OiA4MHZoOyAvKiBEb2RhanRlIG92dSBsaW5panUga2FrbyBiaXN0ZSBvc2lndXJhbGkgcHVudSB2aXNpbnUgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIFByaWxhZ29kaXRlIG92dSB2cmlqZWRub3N0IHByZW1hIHZhxaFpbSBwb3RyZWJhbWEgKi9cclxuICB9XHJcblxyXG4gIC5jb250ZW50LXdpdGgtaW1hZ2Uge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogRG9kYWp0ZSDFvmVsamVuaSByYXptYWsgaXptZcSRdSBibG9rb3ZhIHRla3N0YSBzYSBzbGlrb20gKi9cclxuICB9XHJcbiAgXHJcbiAgLnJvdW5kZWQtaW1hZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgLyogUHJpbGFnb2RpdGUgdnJlZG5vc3QgcmFkaSDFvmVsamVub2cgemFvYmxqZW5qYSAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAvKiBPdm8gb3NpZ3VyYXZhIGRhIHNsaWthIGJ1ZGUgemFvYmxqZW5hLCDEjWFrIGkgYWtvIGplIGRpbWVuemlqYSB2ZcSHYSBvZCBva3ZpcmEgKi9cclxuICB9XHJcbiAgXHJcbiAgLm1haW57XHJcbiAgICBmb250LWZhbWlseTogXCJLYW5pdFwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIGZvbnQtZmFtaWx5OiBcIkthbml0XCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gXHJcbiAgLnNwYWNlciB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGVhYm91dHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkthbml0XCIsIHNhbnMtc2VyaWYhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYWlue1xyXG4gICAgZm9udC1mYW1pbHk6IFwiS2FuaXRcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5zdWJ0aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkthbml0XCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIGg2IHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBmb250LXNpemU6IDEycHg7IC8qIEp1c3RpZmljaXJhanRlIHRla3N0IHphIGJvbGppIHJhc3BvcmVkICovXHJcbiAgfVxyXG5cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return [{ type: _blog_blog_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceblogService"] }]; }, null); })();


/***/ }),

/***/ "3Zgo":
/*!********************************************************!*\
  !*** ./src/app/touch-slider/touch-slider.component.ts ***!
  \********************************************************/
/*! exports provided: TouchSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchSliderComponent", function() { return TouchSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TouchSliderComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r1.caption);
} }
const _c0 = function (a0, a1, a2, a3, a4) { return { "selected": a0, "prev": a1, "next": a2, "hideLeft": a3, "hideRight": a4 }; };
function TouchSliderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TouchSliderComponent_div_1_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("panright", function TouchSliderComponent_div_1_Template_img_panright_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.showPrev(i_r2); })("panleft", function TouchSliderComponent_div_1_Template_img_panleft_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r2 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.showNext(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](4, _c0, i_r2 === ctx_r0.selectedIndex, i_r2 === ctx_r0.selectedIndex - 1, i_r2 === ctx_r0.selectedIndex + 1, i_r2 < ctx_r0.selectedIndex - 1, i_r2 > ctx_r0.selectedIndex + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === ctx_r0.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r1.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", image_r1.imgAlt);
} }
class TouchSliderComponent {
    constructor() {
        this.images = [];
        this.selectedIndex = 0;
    }
    showPrev(i) {
        if (i > 0) {
            this.selectedIndex = i - 1;
        }
        else {
            this.selectedIndex = this.images.length - 1; // Ako je trenutni indeks 0, postavite ga na poslednji
        }
    }
    showNext(i) {
        var _a;
        if (i < ((_a = this.images) === null || _a === void 0 ? void 0 : _a.length) - 1) {
            this.selectedIndex = i + 1;
        }
        else {
            this.selectedIndex = 0; // Ako je trenutni indeks poslednji, postavite ga na prvi
        }
    }
    ngOnInit() {
        // Postavite interval za automatsko listanje svakih nekoliko sekundi
        setInterval(() => {
            this.showNext(this.selectedIndex); // Prosljeđivanje trenutnog indeksa
        }, 2000); // Podešavanje vremena u milisekundama (ovde 5000 ms = 5 sekundi)
    }
}
TouchSliderComponent.ɵfac = function TouchSliderComponent_Factory(t) { return new (t || TouchSliderComponent)(); };
TouchSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TouchSliderComponent, selectors: [["app-touch-slider"]], inputs: { images: "images" }, decls: 2, vars: 1, consts: [[1, "slider-container"], ["class", "slider-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "slider-item", 3, "ngClass"], ["class", "slider-caption", 4, "ngIf"], [1, "slider-img", 3, "src", "alt", "panright", "panleft"], [1, "slider-caption"]], template: function TouchSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TouchSliderComponent_div_1_Template, 3, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".slider-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 75%;\r\n    height: 100%;\r\n    margin: auto;\r\n\r\n    .slider-item {\r\n        position: absolute;\r\n        left: 0;\r\n        right: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        transition: z-index 250ms;\r\n\r\n        .slider-img {\r\n            position: relative;\r\n            left: 0;\r\n            top: 0;\r\n            width: 100%;\r\n            height: 100%;\r\n            box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);\r\n            transition: 500ms cubic-bezier(0.17, 0.67, 0.55, 1.43);\r\n            transform: scale(0);\r\n            opacity: 0;\r\n            border-radius: 15px;\r\n        }\r\n\r\n        &.hideLeft {\r\n            .slider-img {\r\n                transform: translateX(-50%) scale(0);\r\n            }\r\n        }\r\n\r\n        &.prev {\r\n            z-index: 1;\r\n            .slider-img {\r\n                opacity: 0.8;\r\n                transform: translateX(-25%) scale(0.8);\r\n            }\r\n        }\r\n\r\n        &.selected {\r\n            z-index: 2;\r\n\r\n            .slider-img {\r\n                opacity: 1;\r\n                transform: translateX(0%) scale(1);\r\n                cursor: grab;\r\n            }\r\n        }\r\n\r\n        &.next {\r\n            z-index: 1;\r\n            .slider-img {\r\n                opacity: 0.8;\r\n                transform: translateX(25%) scale(0.8);\r\n            }\r\n        }\r\n\r\n        &.hideRight {\r\n            .slider-img {\r\n                transform: translateX(50%) scale(0);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.slider-caption[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: #ffffff;\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    z-index: 3;\r\n}\r\n\r\n@media (max-width: 818px) {\r\n    .slider-container[_ngcontent-%COMP%] {\r\n        height: 50%;\r\n    }\r\n\r\n    .slider-caption[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    .slider-container[_ngcontent-%COMP%] {\r\n        height: 40%; \r\n    }\r\n\r\n    .slider-caption[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvdWNoLXNsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTs7SUFFWjtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsUUFBUTtRQUNSLFdBQVc7UUFDWCxZQUFZO1FBQ1oseUJBQXlCOztRQUV6QjtZQUNJLGtCQUFrQjtZQUNsQixPQUFPO1lBQ1AsTUFBTTtZQUNOLFdBQVc7WUFDWCxZQUFZO1lBQ1osNENBQTRDO1lBQzVDLHNEQUFzRDtZQUN0RCxtQkFBbUI7WUFDbkIsVUFBVTtZQUNWLG1CQUFtQjtRQUN2Qjs7UUFFQTtZQUNJO2dCQUNJLG9DQUFvQztZQUN4QztRQUNKOztRQUVBO1lBQ0ksVUFBVTtZQUNWO2dCQUNJLFlBQVk7Z0JBQ1osc0NBQXNDO1lBQzFDO1FBQ0o7O1FBRUE7WUFDSSxVQUFVOztZQUVWO2dCQUNJLFVBQVU7Z0JBQ1Ysa0NBQWtDO2dCQUNsQyxZQUFZO1lBQ2hCO1FBQ0o7O1FBRUE7WUFDSSxVQUFVO1lBQ1Y7Z0JBQ0ksWUFBWTtnQkFDWixxQ0FBcUM7WUFDekM7UUFDSjs7UUFFQTtZQUNJO2dCQUNJLG1DQUFtQztZQUN2QztRQUNKO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVcsRUFBRSxxQ0FBcUM7SUFDdEQ7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoidG91Y2gtc2xpZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgIC5zbGlkZXItaXRlbSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHotaW5kZXggMjUwbXM7XHJcblxyXG4gICAgICAgIC5zbGlkZXItaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiA1MDBtcyBjdWJpYy1iZXppZXIoMC4xNywgMC42NywgMC41NSwgMS40Myk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmhpZGVMZWZ0IHtcclxuICAgICAgICAgICAgLnNsaWRlci1pbWcge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnByZXYge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAuc2xpZGVyLWltZyB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSkgc2NhbGUoMC44KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICAgICAgICAuc2xpZGVyLWltZyB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKSBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZ3JhYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5uZXh0IHtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgLnNsaWRlci1pbWcge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1JSkgc2NhbGUoMC44KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5oaWRlUmlnaHQge1xyXG4gICAgICAgICAgICAuc2xpZGVyLWltZyB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSBzY2FsZSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNsaWRlci1jYXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogMztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgxOHB4KSB7XHJcbiAgICAuc2xpZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlci1jYXB0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnNsaWRlci1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogNDAlOyAvKiBQcmlsYWdvZGl0ZSB2aXNpbnUgcHJlbWEgcG90cmViaSAqL1xyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZXItY2FwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TouchSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-touch-slider',
                templateUrl: './touch-slider.component.html',
                styleUrls: ['./touch-slider.component.css']
            }]
    }], function () { return []; }, { images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7+Td":
/*!****************************************************!*\
  !*** ./src/app/apps/layout/full/full.component.ts ***!
  \****************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/banner/banner.component */ "XkWI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class FullComponent {
    constructor() { }
    ngOnInit() {
    }
    onWindowScroll() {
        const yOffset = window.pageYOffset;
        const scrollThreshold = 200; // Promenite ovu vrednost prema potrebi
        const scrollToTopButton = document.querySelector('.bt-top');
        if (scrollToTopButton) {
            if (yOffset > scrollThreshold) {
                scrollToTopButton.classList.add('show');
            }
            else {
                scrollToTopButton.classList.remove('show');
            }
        }
    }
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(); };
FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full"]], hostBindings: function FullComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function FullComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 9, vars: 0, consts: [["id", "main-wrapper"], [1, "page-wrapper"], [1, "container-fluid"], [1, "blog-home2"], [1, "bt-top", "btn", "btn-circle", "btn-lg", "btn-info", 3, "click"], [1, "ti-arrow-up"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_button_click_7_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@media (max-width: 767px) {\r\n    .blog-home2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0;\r\n    \r\n    max-width: 100%;\r\n    }\r\n}\r\n\r\n\r\n.blog-home2[_ngcontent-%COMP%]{\r\n    font-family: \"Kanit\", sans-serif;\r\n  }\r\n\r\n\r\n.bt-top[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    z-index: 1000; \r\n    background: linear-gradient(to right, #2cdd9b 0%, #1dc8cc 100%);\r\n    color: white;\r\n    border: none;\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    display: none; \r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n\r\n.bt-top.show[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    visibility: visible; \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0lBQ0Esa0JBQWtCO0lBQ2xCLFNBQVM7O0lBRVQsZUFBZTtJQUNmO0FBQ0o7OztBQUdBO0lBQ0ksZ0NBQWdDO0VBQ2xDOzs7QUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWEsRUFBRSxxREFBcUQ7SUFDcEUsK0RBQStEO0lBQy9ELFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWEsRUFBRSx5QkFBeUI7SUFDeEMsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6ImZ1bGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmJsb2ctaG9tZTIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uYmxvZy1ob21lMntcclxuICAgIGZvbnQtZmFtaWx5OiBcIkthbml0XCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAuYnQtdG9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgei1pbmRleDogMTAwMDsgLyogT3ZvIG9zaWd1cmF2YSBkYSBqZSBkdWdtZSBpem5hZCBvc3RhbG9nIHNhZHLFvmFqYSAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmNkZDliIDAlLCAjMWRjOGNjIDEwMCUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBJbmljaWphbG5vIHNha3JpdmVubyAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYnQtdG9wLnNob3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7IFxyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-full',
                templateUrl: './full.component.html',
                styleUrls: ['./full.component.css']
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', []]
        }] }); })();


/***/ }),

/***/ "8LU1":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/coercion.js ***!
  \********************************************************/
/*! exports provided: _isNumberValue, coerceArray, coerceBooleanProperty, coerceCssPixelValue, coerceElement, coerceNumberProperty, coerceStringArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function() { return coerceCssPixelValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceElement", function() { return coerceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceStringArray", function() { return coerceStringArray; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function coerceNumberProperty(value, fallbackValue = 0) {
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : `${value}px`;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 */
function coerceElement(elementOrRef) {
    return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Coerces a value to an array of trimmed non-empty strings.
 * Any input that is not an array, `null` or `undefined` will be turned into a string
 * via `toString()` and subsequently split with the given separator.
 * `null` and `undefined` will result in an empty array.
 * This results in the following outcomes:
 * - `null` -&gt; `[]`
 * - `[null]` -&gt; `["null"]`
 * - `["a", "b ", " "]` -&gt; `["a", "b"]`
 * - `[1, [2, 3]]` -&gt; `["1", "2,3"]`
 * - `[{ a: 0 }]` -&gt; `["[object Object]"]`
 * - `{ a: 0 }` -&gt; `["[object", "Object]"]`
 *
 * Useful for defining CSS classes or table columns.
 * @param value the value to coerce into an array of strings
 * @param separator split-separator if value isn't an array
 */
function coerceStringArray(value, separator = /\s+/) {
    const result = [];
    if (value != null) {
        const sourceValues = Array.isArray(value) ? value : `${value}`.split(separator);
        for (const sourceValue of sourceValues) {
            const trimmedString = `${sourceValue}`.trim();
            if (trimmedString) {
                result.push(trimmedString);
            }
        }
    }
    return result;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


//# sourceMappingURL=coercion.js.map


/***/ }),

/***/ "AXmv":
/*!****************************************!*\
  !*** ./src/app/apps/apps.component.ts ***!
  \****************************************/
/*! exports provided: AppsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsComponent", function() { return AppsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AppsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppsComponent.ɵfac = function AppsComponent_Factory(t) { return new (t || AppsComponent)(); };
AppsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppsComponent, selectors: [["app-apps"]], decls: 2, vars: 0, template: function AppsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "apps works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    background: #ebf0ed;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJhcHBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNlYmYwZWQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-apps',
                templateUrl: './apps.component.html',
                styleUrls: ['./apps.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Hhwx":
/*!****************************************!*\
  !*** ./src/app/apps/blog/blog-data.ts ***!
  \****************************************/
/*! exports provided: blogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blogs", function() { return blogs; });
const blogs = [
    {
        id: 1,
        image: 'assets/images/landingpage/rafting.png',
        image2: 'assets/images/innerpage/faft.jpg',
        heading: 'Raft tour',
        subHeading: 'Witness the breathtaking highlights from our exhilarating raft tours.',
        blogDate: '',
        blogDetail: 'For those craving an added thrill, we provide the opportunity for quad biking or the rental of cross motorcycles. This presents an exhilarating way to venture through the camps environs with speed and dynamism, all while immersing yourself in the excitement of traversing natural trails and pathways.',
    }, {
        id: 2,
        image: 'assets/images/landingpage/quad.png',
        image2: 'assets/images/innerpage/quad.jpg',
        heading: 'Quad biking or renting cross motorcycles',
        subHeading: 'Explore the Wild Side: Quad Biking and Cross Motorcycles Adventures Await!',
        blogDate: '',
        blogDetail: 'Tempor sint cupidatat cillum do ut. Ipsum exercitation est ex id. Sunt ut labore ad nulla.',
    }, {
        id: 3,
        image: 'assets/images/landingpage/mountain.png',
        image2: 'assets/images/innerpage/mountain.jpg',
        heading: 'Tours in the Mountains',
        subHeading: 'Explore the surrounding mountainous areas.',
        blogDate: '',
        blogDetail: 'Yet, the excitement extends beyond the river. Our camp offers diverse options to discover the nearby mountainous regions, encompassing the Prenj, Čvrsnica, and Velež mountains. Embark on a captivating hiking tour, guiding you through enchanting landscapes, featuring untouched nature, blooming wildflower meadows, and breathtaking viewpoints that provide memorable panoramas of the neighboring mountains and valleys.',
    }
];


/***/ }),

/***/ "IYw8":
/*!*************************************!*\
  !*** ./src/app/apps/apps.module.ts ***!
  \*************************************/
/*! exports provided: AppsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsModule", function() { return AppsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _apps_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apps-routing.module */ "aWwC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _apps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apps.component */ "AXmv");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog/blog.component */ "e6Sk");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "2iH7");
/* harmony import */ var _blog_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog/blog-detail/blog-detail.component */ "+YCP");
/* harmony import */ var _blog_blog_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog/blog-service.service */ "jYeG");
/* harmony import */ var _about_About_Components_relay_on_relay_on_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/About-Components/relay-on/relay-on.component */ "RvGm");
/* harmony import */ var _about_About_Components_top_content_top_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/About-Components/top-content/top-content.component */ "jfhW");
/* harmony import */ var _layout_full_full_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/full/full.component */ "7+Td");
/* harmony import */ var _shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/banner/banner.component */ "XkWI");
/* harmony import */ var _shared_banner_navigation_banner_navigation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/banner-navigation/banner-navigation.component */ "QaM/");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/footer/footer.component */ "LsfF");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../video/video.component */ "o9RM");
/* harmony import */ var _touch_slider_touch_slider_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../touch-slider/touch-slider.component */ "3Zgo");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./booking/booking.component */ "jbSb");
/* harmony import */ var _activities_activities_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./activities/activities.component */ "NWSH");
























class AppsModule {
}
AppsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppsModule });
AppsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppsModule_Factory(t) { return new (t || AppsModule)(); }, providers: [_blog_blog_service_service__WEBPACK_IMPORTED_MODULE_10__["ServiceblogService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_20__["BsModalService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _apps_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppsRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HammerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapseModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppsModule, { declarations: [_apps_component__WEBPACK_IMPORTED_MODULE_6__["AppsComponent"],
        _video_video_component__WEBPACK_IMPORTED_MODULE_17__["VideoComponent"],
        _touch_slider_touch_slider_component__WEBPACK_IMPORTED_MODULE_18__["TouchSliderComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _blog_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_9__["BlogDetailComponent"],
        _about_About_Components_relay_on_relay_on_component__WEBPACK_IMPORTED_MODULE_11__["RelayOnComponent"],
        _about_About_Components_top_content_top_content_component__WEBPACK_IMPORTED_MODULE_12__["TopContentComponent"],
        _layout_full_full_component__WEBPACK_IMPORTED_MODULE_13__["FullComponent"],
        _shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_14__["BannerComponent"],
        // BannerContentComponent,
        _shared_banner_navigation_banner_navigation_component__WEBPACK_IMPORTED_MODULE_15__["BannerNavigationComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
        _booking_booking_component__WEBPACK_IMPORTED_MODULE_21__["BookingComponent"],
        _activities_activities_component__WEBPACK_IMPORTED_MODULE_22__["ActivitiesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _apps_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppsRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HammerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapseModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _apps_component__WEBPACK_IMPORTED_MODULE_6__["AppsComponent"],
                    _video_video_component__WEBPACK_IMPORTED_MODULE_17__["VideoComponent"],
                    _touch_slider_touch_slider_component__WEBPACK_IMPORTED_MODULE_18__["TouchSliderComponent"],
                    _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                    _blog_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_9__["BlogDetailComponent"],
                    _about_About_Components_relay_on_relay_on_component__WEBPACK_IMPORTED_MODULE_11__["RelayOnComponent"],
                    _about_About_Components_top_content_top_content_component__WEBPACK_IMPORTED_MODULE_12__["TopContentComponent"],
                    _layout_full_full_component__WEBPACK_IMPORTED_MODULE_13__["FullComponent"],
                    _shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_14__["BannerComponent"],
                    // BannerContentComponent,
                    _shared_banner_navigation_banner_navigation_component__WEBPACK_IMPORTED_MODULE_15__["BannerNavigationComponent"],
                    _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                    _booking_booking_component__WEBPACK_IMPORTED_MODULE_21__["BookingComponent"],
                    _activities_activities_component__WEBPACK_IMPORTED_MODULE_22__["ActivitiesComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _apps_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppsRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HammerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapseModule"]
                ],
                providers: [_blog_blog_service_service__WEBPACK_IMPORTED_MODULE_10__["ServiceblogService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_20__["BsModalService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "LsfF":
/*!********************************************************!*\
  !*** ./src/app/apps/shared/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 55, vars: 0, consts: [[1, "footer4", "b-t", "spacer", 2, "background", "linear-gradient(to right, #2cdd9b 0%, #1dc8cc 100%)", "color", "#ffffff"], [1, "container"], [1, "row"], [1, "col-md-6", "col-sm-12", "text-md-left"], [1, "round-social", "light", "mb-3"], ["href", "https://www.facebook.com/p/Camping-Neretva-100063102887726/", 1, "link"], [1, "fab", "fa-facebook"], ["href", "https://www.youtube.com/@campingneretva6577", 1, "link"], [1, "fab", "fa-youtube"], ["href", "https://www.instagram.com/campingneretva/?hl=en", 1, "link"], [1, "fab", "fa-instagram"], [1, "mb-3", 2, "font-family", "Kanit, sans-serif", "color", "#ffffff"], [1, "fas", "fa-map-marker-alt"], ["href", "https://www.google.com/maps?q=43.3645,17.8159", "target", "_blank", 2, "color", "#ffffff", "font-family", "Kanit, sans-serif"], [1, "fas", "fa-phone"], [1, "fas", "fa-envelope"], [1, "far", "fa-clock"], [1, "row", "mt-3"], [1, "col-md-12"], ["src", "assets/images/innerpage/visa.png", "alt", "Visa", 2, "width", "50px", "height", "40px", "margin-right", "5px"], ["src", "assets/images/innerpage/mastercard.png", "alt", "MasterCard", 2, "width", "50px", "height", "40px", "margin-right", "5px"], ["src", "assets/images/innerpage/maestro.png", "alt", "American Express", 2, "width", "50px", "height", "40px", "margin-right", "5px"], [1, "col-md-6", "col-sm-12", "text-md-right"], [1, "fas", "fa-book"], ["href", "/about", 1, "scroll-link", 2, "color", "#ffffff", "font-family", "Kanit, sans-serif"], [1, "fas", "fa-compass"], ["href", "https://tourmkr.com/F159gWEeDm/41003333p&186.15h&77.67t", "target", "_blank", 2, "color", "#ffffff"], [1, "fas", "fa-running"], ["href", "/activities", 1, "scroll-link", 2, "color", "#ffffff", "font-family", "Kanit, sans-serif"], [1, "fas", "fa-headset"], ["href", "/contact", 1, "scroll-link", 2, "color", "#ffffff", "font-family", "Kanit, sans-serif"], [1, "fas", "fa-calendar-check"], ["href", "/booking", 1, "scroll-link", 2, "color", "#ffffff", "font-family", "Kanit, sans-serif"], [1, "mt-3", "mb-3", "copyright"], ["href", "/", 2, "color", "#ffffff", 3, "click"], ["src", "assets/images/logos/logo.png", "alt", "Camping Neretva Logo", 1, "img", 2, "width", "64px", "height", "64px", "margin-right", "5px", "margin-bottom", "5px"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " SJEVERNI LOGOR, Mostar 88000, Bosnia & Herzegovina ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " +387 61 808 564 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " campingneretva@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Mon-Sun: 08:00 AM - 10:00 PM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " ABOUT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " 360\u00B0 VIEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " ACTIVITIES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " CONTACT US ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " RESERVATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_52_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Camping Neretva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer4[_ngcontent-%COMP%]{\r\n    margin-left: 0px;\r\n}\r\n\r\n.scroll-link[_ngcontent-%COMP%] {\r\n    scroll-behavior: smooth;\r\n  }\r\n\r\n.round-social[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    align-items: center;\r\n  }\r\n\r\n.round-social[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 10px; \r\n    margin-bottom: 20px; \r\n    \r\n  }\r\n\r\n@media (max-width: 767px) {\r\n    .round-social[_ngcontent-%COMP%] {\r\n        display: inline-flex; \r\n        align-items: center; \r\n    }\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    display: inline;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  \r\n    .text-md-right[_ngcontent-%COMP%] {\r\n      margin-top: 50px!important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsU0FBUyxFQUFFLG1EQUFtRDtJQUM5RCxtQkFBbUI7SUFDbkIsb0RBQW9EO0VBQ3REOztBQUVBO0lBQ0U7UUFDSSxvQkFBb0IsRUFBRSxxRUFBcUU7UUFDM0YsbUJBQW1CLEVBQUUsNkJBQTZCO0lBQ3REO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJO01BQ0UsMEJBQTBCO0lBQzVCO0FBQ0oiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyNHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5zY3JvbGwtbGluayB7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICB9XHJcbiAgXHJcbiAgLnJvdW5kLXNvY2lhbCAubGluayB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5yb3VuZC1zb2NpYWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4OyAvKiBPcGNpb25vOiBQb3N0YXZpdGUgxb5lbGplbmkgcmF6bWFrIGl6bWXEkXUgaWtvbmEgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IFxyXG4gICAgLyogUG9zdGF2aXRlIMW+ZWxqZW5pIHJhem1hayBpc3BvZCBkcnXFoXR2ZW5paCBpa29uYSAqL1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAucm91bmQtc29jaWFsIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgLyogUG9zdGF2aXRlIGRhIGVsZW1lbnRpIGlkdSBqZWRhbiBpc3BvZCBkcnVnb2dhIG5hIG1hbmppbSBla3JhbmltYSAqL1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRyaXJhbmplIHBvIHZlcnRpa2FsaSAqL1xyXG4gICAgfVxyXG59XHJcblxyXG5pbWd7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICBcclxuICAgIC50ZXh0LW1kLXJpZ2h0IHtcclxuICAgICAgbWFyZ2luLXRvcDogNTBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "NWSH":
/*!*********************************************************!*\
  !*** ./src/app/apps/activities/activities.component.ts ***!
  \*********************************************************/
/*! exports provided: ActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesComponent", function() { return ActivitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/footer/footer.component */ "LsfF");



class ActivitiesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ActivitiesComponent.ɵfac = function ActivitiesComponent_Factory(t) { return new (t || ActivitiesComponent)(); };
ActivitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivitiesComponent, selectors: [["app-activities"]], decls: 60, vars: 0, consts: [[1, "cover"], [1, "static-slider-head", 2, "background-image", "url(assets/images/innerpage/activities.webp)", "position", "relative", "height", "60vh", "margin-bottom", "20px"], [1, "container", 2, "position", "absolute", "bottom", "0", "left", "50%", "transform", "translateX(-50%)", "width", "100%"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "align-self-center", "text-center", "no-trans"], [1, "titleactivities"], [1, "containeractivities"], [1, "card"], [1, "card__header"], ["src", "assets/images/innerpage/raftingg.webp", "alt", "card__image", "width", "600", 1, "card__image"], [1, "card__body"], [1, "tag", "tag-blue"], [2, "text-align", "justify"], [1, "card__footer"], [1, "user"], ["src", "assets/images/logos/logo.png", "alt", "user__image", 1, "user__image", 2, "width", "44px", "height", "44px", "margin-bottom", "5px"], [1, "user__info"], ["src", "assets/images/innerpage/tourist.webp", "alt", "card__image", "width", "600", 1, "card__image"], [1, "tag", "tag-brown"], ["src", "assets/images/innerpage/quad.jpg", "alt", "card__image", "width", "600", 1, "card__image"], [1, "tag", "tag-red"]], template: function ActivitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ACTIVITIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Rafting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Thrilling Rafting Adventures in Mostar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "This year's offerings bring exciting rafting tours of Mostar, allowing you to experience the city from an entirely new perspective with a dose of adrenaline to awaken your adventurous side. Given the camp's attractive location along the Neretva River, prepare for an unforgettable experience descending through fast-flowing waters, surrounded by untouched nature that will captivate you with its beauty.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Camping Neretva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Hiking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Mountain Exploration Adventures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "The camp provides various opportunities to explore the surrounding mountainous areas, including the Prenj, \u010Cvrsnica, and Vele\u017E mountains. Our hiking tour takes you through enchanting landscapes where you can enjoy unspoiled nature, wild flower meadows, and impressive viewpoints offering unforgettable vistas of the surrounding mountains and valleys.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Camping Neretva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Driving");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Rev Up Your Adventure With Quad or Cross Motorcycles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "For those seeking an extra thrill, we offer the option of quad biking or renting cross motorcycles. This is a fantastic way to explore the camp's surroundings in a fast and dynamic manner, simultaneously experiencing the excitement of riding through natural trails and pathways.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Camping Neretva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "app-footer");
    } }, directives: [_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap\");\r\n\r\n\r\n.banner-innerpage[_ngcontent-%COMP%] {\r\n    background-size: cover; \r\n    height: 65vh;\r\n  }\r\n\r\n\r\n.titleactivities[_ngcontent-%COMP%] {\r\n    font-family: \"Kanit\", sans-serif!important;\r\n    color: white!important;\r\n  }\r\n\r\n\r\n*\r\n*[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: \"Kanit\", sans-serif;\r\n  display: grid;\r\n  place-items: center;\r\n  height: 100vh;\r\n  background: #7f7fd5;\r\n  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);\r\n}\r\n\r\n\r\n.containeractivities[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    max-width: 1200px;\r\n    margin: 2rem auto;\r\n    gap: 2rem;\r\n  }\r\n\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  display: block;\r\n  object-fit: cover;\r\n}\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: clamp(20rem, calc(20rem + 2vw), 22rem);\r\n  overflow: hidden;\r\n  box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);\r\n  border-radius: 1em;\r\n  background: #ECE9E6;\r\n  background: linear-gradient(to right, #FFFFFF, #ECE9E6);\r\n\r\n}\r\n\r\n\r\n.card__body[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: .5rem;\r\n  font-family: 'Kanit', sans-serif;\r\n}\r\n\r\n\r\n.tag[_ngcontent-%COMP%] {\r\n  align-self: flex-start;\r\n  padding: .25em .75em;\r\n  border-radius: 1em;\r\n  font-size: .75rem;\r\n}\r\n\r\n\r\n.tag[_ngcontent-%COMP%]    + .tag[_ngcontent-%COMP%] {\r\n  margin-left: .5em;\r\n}\r\n\r\n\r\n.tag-blue[_ngcontent-%COMP%] {\r\n  background: #56CCF2;\r\nbackground: linear-gradient(to bottom, #2F80ED, #56CCF2);\r\n  color: #fafafa;\r\n}\r\n\r\n\r\n.tag-brown[_ngcontent-%COMP%] {\r\n  background: #D1913C;\r\nbackground: linear-gradient(to bottom, #FFD194, #D1913C);\r\n  color: #fafafa;\r\n}\r\n\r\n\r\n.tag-red[_ngcontent-%COMP%] {\r\n  background: #cb2d3e;\r\nbackground: linear-gradient(to bottom, #ef473a, #cb2d3e);\r\n  color: #fafafa;\r\n}\r\n\r\n\r\n.card__body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-family: 'Kanit', sans-serif;\r\n  font-size: 1.5rem;\r\n  text-transform: capitalize;\r\n}\r\n\r\n\r\n.card__footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 1rem;\r\n  margin-top: auto;\r\n}\r\n\r\n\r\n.user[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: .5rem;\r\n}\r\n\r\n\r\n.user__image[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n.user__info[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\r\n  color: #666;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXRpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RkFBNEY7OztBQUc1RjtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7OztBQUVBO0lBQ0UsMENBQTBDO0lBQzFDLHNCQUFzQjtFQUN4Qjs7O0FBR0Y7OztFQUdFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0VBQWdFO0FBQ2xFOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsU0FBUztFQUNYOzs7QUFHRjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkNBQTZDO0VBQzdDLGdCQUFnQjtFQUNoQiwyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1REFBdUQ7O0FBRXpEOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7OztBQUdBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIsd0RBQXdEO0VBQ3RELGNBQWM7QUFDaEI7OztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCLHdEQUF3RDtFQUN0RCxjQUFjO0FBQ2hCOzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQix3REFBd0Q7RUFDdEQsY0FBYztBQUNoQjs7O0FBRUE7SUFDSSxnQ0FBZ0M7RUFDbEMsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoiYWN0aXZpdGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1aWNrc2FuZDp3Z2h0QDMwMC4uNzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcblxyXG4uYmFubmVyLWlubmVycGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgIGhlaWdodDogNjV2aDtcclxuICB9XHJcblxyXG4gIC50aXRsZWFjdGl2aXRpZXMge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiS2FuaXRcIiwgc2Fucy1zZXJpZiFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG4qXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkthbml0XCIsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogIzdmN2ZkNTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5MWVhZTQsICM4NmE4ZTcsICM3ZjdmZDUpO1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lcmFjdGl2aXRpZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgIGdhcDogMnJlbTtcclxuICB9XHJcbiAgXHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogY2xhbXAoMjByZW0sIGNhbGMoMjByZW0gKyAydncpLCAyMnJlbSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIC4xcmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICBiYWNrZ3JvdW5kOiAjRUNFOUU2O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGRkZGRiwgI0VDRTlFNik7XHJcblxyXG59XHJcblxyXG4uY2FyZF9fYm9keSB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAuNXJlbTtcclxuICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbi50YWcge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZzogLjI1ZW0gLjc1ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG59XHJcblxyXG4udGFnICsgLnRhZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IC41ZW07XHJcbn1cclxuXHJcbi50YWctYmx1ZSB7XHJcbiAgYmFja2dyb3VuZDogIzU2Q0NGMjtcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJGODBFRCwgIzU2Q0NGMik7XHJcbiAgY29sb3I6ICNmYWZhZmE7XHJcbn1cclxuXHJcbi50YWctYnJvd24ge1xyXG4gIGJhY2tncm91bmQ6ICNEMTkxM0M7XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkQxOTQsICNEMTkxM0MpO1xyXG4gIGNvbG9yOiAjZmFmYWZhO1xyXG59XHJcblxyXG4udGFnLXJlZCB7XHJcbiAgYmFja2dyb3VuZDogI2NiMmQzZTtcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VmNDczYSwgI2NiMmQzZSk7XHJcbiAgY29sb3I6ICNmYWZhZmE7XHJcbn1cclxuXHJcbi5jYXJkX19ib2R5IGg0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2FyZF9fZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5cclxuLnVzZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAuNXJlbTtcclxufVxyXG5cclxuLnVzZXJfX2ltYWdlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi51c2VyX19pbmZvID4gc21hbGwge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivitiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activities',
                templateUrl: './activities.component.html',
                styleUrls: ['./activities.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QaM/":
/*!******************************************************************************!*\
  !*** ./src/app/apps/shared/banner-navigation/banner-navigation.component.ts ***!
  \******************************************************************************/
/*! exports provided: BannerNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerNavigationComponent", function() { return BannerNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BannerNavigationComponent {
    constructor() {
        this.logoutStatus = false;
    }
    ngOnInit() {
    }
}
BannerNavigationComponent.ɵfac = function BannerNavigationComponent_Factory(t) { return new (t || BannerNavigationComponent)(); };
BannerNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerNavigationComponent, selectors: [["app-banner-navigation"]], decls: 0, vars: 0, template: function BannerNavigationComponent_Template(rf, ctx) { }, styles: [".active[_ngcontent-%COMP%] {\r\n    color: yellow;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2YiLCJmaWxlIjoiYmFubmVyLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner-navigation',
                templateUrl: './banner-navigation.component.html',
                styleUrls: ['./banner-navigation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RvGm":
/*!****************************************************************************!*\
  !*** ./src/app/apps/about/About-Components/relay-on/relay-on.component.ts ***!
  \****************************************************************************/
/*! exports provided: RelayOnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelayOnComponent", function() { return RelayOnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0, a1) { return { "col-sm-6": a0, "col-md-3": a1 }; };
function RelayOnComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const relay_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r0.isSmallScreen, !ctx_r0.isSmallScreen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", relay_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](relay_r3.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](relay_r3.fieldText);
} }
function RelayOnComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const relay_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r1.isSmallScreen, !ctx_r1.isSmallScreen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", relay_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](relay_r4.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](relay_r4.fieldText);
} }
function RelayOnComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const relay_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r2.isSmallScreen, !ctx_r2.isSmallScreen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", relay_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](relay_r5.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](relay_r5.fieldText);
} }
class RelayOnComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.relayOn = [
            {
                image: '../assets/images/innerpage/parkk.png',
                field: 'Parking room for more than 35 campers',
                fieldText: ''
            },
            {
                image: '../assets/images/innerpage/tentt.png',
                field: 'Tent area along a river',
                fieldText: ''
            },
            {
                image: '../assets/images/innerpage/beachhh.png',
                field: 'Private beach, drinkable water and place for fishing endemic trout',
                fieldText: ''
            }
        ];
        this.relayOn1 = [
            {
                image: '../assets/images/innerpage/coffee.png',
                field: 'Caffe bar with cold local craft beer and traditional drinks',
                fieldText: ''
            },
            {
                image: '../assets/images/innerpage/playgroundd.png',
                field: 'Playground area for kids',
                fieldText: ''
            },
            {
                image: '../assets/images/innerpage/wc.png',
                field: 'Modern sanitar with hot shower',
                fieldText: ''
            }
        ];
        this.relayOn2 = [
            {
                image: '../assets/images/innerpage/wood.png',
                field: 'Unique accomodation units wooden log cabin',
                fieldText: ''
            },
            {
                image: '../assets/images/innerpage/wifi.png',
                field: 'Wi-Fi area 24/7 free',
                fieldText: ''
            }
        ];
        this.isSmallScreen = false;
        this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small])
            .subscribe(result => {
            this.isSmallScreen = result.matches;
        });
    }
    ngOnInit() {
    }
}
RelayOnComponent.ɵfac = function RelayOnComponent_Factory(t) { return new (t || RelayOnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
RelayOnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RelayOnComponent, selectors: [["app-relay-on"]], decls: 4, vars: 3, consts: [[1, "row", "m-t-40"], ["class", "col-md-3 wrap-feature1-box", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-md-3", "wrap-feature1-box", 3, "ngClass"], ["data-aos", "fade-right", "data-aos-duration", "1200", 1, "card", "card-shadow"], [1, "card-body", "p-40", "text-center", 2, "font-family", "Kanit, sans-serif"], [1, "icon-space", "display-5"], ["alt", "Image", 1, "img-icon", 3, "src"], [1, "font-medium", 2, "font-family", "Kanit, sans-serif"], [1, "m-t-20"]], template: function RelayOnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RelayOnComponent_div_1_Template, 9, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RelayOnComponent_div_2_Template, 9, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RelayOnComponent_div_3_Template, 9, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.relayOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.relayOn1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.relayOn2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".wrap-feature1-box[_ngcontent-%COMP%] {\r\n    height: 400px; \r\n    margin-bottom: 20px; \r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\r\n  \r\n  .img-icon[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    margin: auto;\r\n  }\r\n  \r\n  .card-body[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center; \r\n  }\r\n  \r\n  .display-5[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .font-medium[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .m-t-20[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  @media (max-width: 767px) {\r\n    .wrap-feature1-box[_ngcontent-%COMP%] {\r\n      height: auto;\r\n      margin-bottom: 10px;\r\n    }\r\n  \r\n    .card-body[_ngcontent-%COMP%] {\r\n      padding: 20px;\r\n    }\r\n    .img-icon[_ngcontent-%COMP%] {\r\n      width: auto;\r\n      max-height: 120px; \r\n      object-fit: contain; \r\n    }\r\n    .font-medium[_ngcontent-%COMP%] {\r\n      font-size: 1.5rem;\r\n      margin-top: 10px;\r\n      margin-bottom: 5px;\r\n    }\r\n  \r\n    .m-t-20[_ngcontent-%COMP%] {\r\n      margin-top: 10px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGF5LW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0U7TUFDRSxZQUFZO01BQ1osbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRSxXQUFXO01BQ1gsaUJBQWlCLEVBQUUsOENBQThDO01BQ2pFLG1CQUFtQixFQUFFLHFEQUFxRDtJQUM1RTtJQUNBO01BQ0UsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRiIsImZpbGUiOiJyZWxheS1vbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAtZmVhdHVyZTEtYm94IHtcclxuICAgIGhlaWdodDogNDAwcHg7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgXHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmltZy1pY29uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICB9XHJcbiAgXHJcbiAgLmRpc3BsYXktNSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9udC1tZWRpdW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm0tdC0yMCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC53cmFwLWZlYXR1cmUxLWJveCB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmltZy1pY29uIHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEyMHB4OyAvKiBQb3N0YXZpdGUgbWFrc2ltYWxudSB2aXNpbnUgcHJlbWEgcG90cmViaSAqL1xyXG4gICAgICBvYmplY3QtZml0OiBjb250YWluOyAvKiBQcm9taWplbml0ZSBuYSBcImNvdmVyXCIgaWxpIFwiY29udGFpblwiIHByZW1hIMW+ZWxqaSAqL1xyXG4gICAgfVxyXG4gICAgLmZvbnQtbWVkaXVtIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5tLXQtMjAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelayOnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-relay-on',
                templateUrl: './relay-on.component.html',
                styleUrls: ['./relay-on.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "XkWI":
/*!********************************************************!*\
  !*** ./src/app/apps/shared/banner/banner.component.ts ***!
  \********************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _banner_navigation_banner_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../banner-navigation/banner-navigation.component */ "QaM/");





const _c0 = function () { return ["active"]; };
class BannerComponent {
    constructor(router) {
        this.router = router;
        this.isNavbarCollapsed = true;
    }
    ngOnInit() {
    }
    toggleNavbar() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }
    isHomePage() {
        return this.router.url === '/';
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 34, vars: 13, consts: [["id", "top", 1, "topbar", 2, "font-family", "Kanit, sans-serif"], [1, "header6"], [1, "container", "po-relative"], [1, "navbar", "navbar-expand-lg", "h6-nav-bar"], [1, "d-flex", "flex-grow-1", "justify-content-between", "align-items-center"], ["routerLink", "", 1, "navbar-brand"], ["src", "assets/images/logos/logo.webp", "rel", "preload", "alt", "campingNeretva", "href", "https://www.facebook.com/p/Camping-Neretva-100063102887726/"], [1, "ml-auto", "order-md-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#h6-info", "aria-controls", "h6-info", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "ti-menu"], ["id", "h6-info", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "ml-auto", "align-items-center"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], [1, "nav-item", 3, "routerLinkActive"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/gallery", 1, "nav-link"], ["routerLink", "/activities", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"], ["href", "https://tourmkr.com/F159gWEeDm/41003333p&186.15h&77.67t", "target", "_blank", 1, "nav-link"], ["routerLink", "/booking", 1, "btn", "btn-success-gradiant", "font-14"], [1, "ml-auto"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_Template_button_click_8_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Gallery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Activities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 360\u00B0 view ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Reservation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-banner-navigation", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isNavbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isHomePage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _banner_navigation_banner_navigation_component__WEBPACK_IMPORTED_MODULE_3__["BannerNavigationComponent"]], styles: [".navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 10rem;\r\n  height: auto;\r\n}\r\n\r\n.po-relative[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n}\r\n\r\n\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  font-size: 16px; \r\n  font-weight: bold; \r\n  text-transform: uppercase; \r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .navbar-nav[_ngcontent-%COMP%] {\r\n      flex-direction: column; \r\n      margin-right: 0; \r\n  }\r\n\r\n  .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n      margin-right: 10px; \r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSx5RUFBeUU7O0FBQ3pFO0VBQ0UsZUFBZSxFQUFFLDZDQUE2QztFQUM5RCxpQkFBaUIsRUFBRSwwQkFBMEI7RUFDN0MseUJBQXlCLEVBQUUsZ0RBQWdEO0FBQzdFOztBQUdBO0VBQ0U7TUFDSSxzQkFBc0IsRUFBRSxtREFBbUQ7TUFDM0UsZUFBZSxFQUFFLHVDQUF1QztFQUM1RDs7RUFFQTtNQUNJLGtCQUFrQixFQUFFLDJDQUEyQztFQUNuRTtBQUNGIiwiZmlsZSI6ImJhbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCBpbWcge1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5wby1yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4vKiBEb2RhanRlIHNsamVkZcSHZSBzdGlsb3ZlIHphIHBvdmXEh2FuamUgdmVsacSNaW5lIHNsb3ZhIGkgcG9kZWJsamF2YW5qZSAqL1xyXG4ubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMTZweDsgLyogUHJpbGFnb2RpdGUgdmVsacSNaW51IHNsb3ZhIHByZW1hIHBvdHJlYmkgKi9cclxuICBmb250LXdlaWdodDogYm9sZDsgLyogRG9kYWp0ZSBwb2RlYmxqYXZhbmplICovXHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgLyogT3BjaW9uYWxubzogUG9zdGF2aXRlIHRla3N0IG5hIHZlbGlrYSBzbG92YSAqL1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm5hdmJhci1uYXYge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBQb3N0YXZpdGUgc21qZXIgZmxla3NpYmlsbm9nIGtvbnRlam5lcmEgbmEgcmVkICovXHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDsgLyogUmVzZXRpcmFqdGUgbWFyZ2ludSBzIGRlc25lIHN0cmFuZSAqL1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1uYXYgLm5hdi1pdGVtIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBEb2RhanRlIHJhem1hayBpem1lxJF1IHN0YXZraSBpemJvcm5pa2EgKi9cclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "aWwC":
/*!*********************************************!*\
  !*** ./src/app/apps/apps-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AppsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsRoutingModule", function() { return AppsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog/blog.component */ "e6Sk");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "2iH7");
/* harmony import */ var _blog_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/blog-detail/blog-detail.component */ "+YCP");
/* harmony import */ var _layout_full_full_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/full/full.component */ "7+Td");
/* harmony import */ var _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reservation/reservation.component */ "zpWk");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "MHc4");
/* harmony import */ var _gallery_test_gallery_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery-test/gallery-test.component */ "LHPN");
/* harmony import */ var _successful_booking_successful_booking_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../successful-booking/successful-booking.component */ "rJf+");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./booking/booking.component */ "jbSb");
/* harmony import */ var _succesful_message_succesful_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../succesful-message/succesful-message.component */ "UNCC");
/* harmony import */ var _activities_activities_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./activities/activities.component */ "NWSH");















const routes = [
    {
        path: '',
        component: _layout_full_full_component__WEBPACK_IMPORTED_MODULE_5__["FullComponent"],
        children: [
            { path: '', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"] },
            { path: 'blogDetail/:id', component: _blog_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_4__["BlogDetailComponent"] },
            { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
            { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
            { path: 'gallery', component: _gallery_test_gallery_test_component__WEBPACK_IMPORTED_MODULE_8__["GalleryTestComponent"] },
            { path: 'reservation', component: _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_6__["ReservationComponent"] },
            { path: 'successful-reservation', component: _successful_booking_successful_booking_component__WEBPACK_IMPORTED_MODULE_9__["SuccessfulBookingComponent"] },
            { path: 'booking', component: _booking_booking_component__WEBPACK_IMPORTED_MODULE_10__["BookingComponent"] },
            { path: 'successful-message', component: _succesful_message_succesful_message_component__WEBPACK_IMPORTED_MODULE_11__["SuccesfulMessageComponent"] },
            { path: 'activities', component: _activities_activities_component__WEBPACK_IMPORTED_MODULE_12__["ActivitiesComponent"] },
        ]
    }
];
class AppsRoutingModule {
}
AppsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppsRoutingModule });
AppsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppsRoutingModule_Factory(t) { return new (t || AppsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "e6Sk":
/*!*********************************************!*\
  !*** ./src/app/apps/blog/blog.component.ts ***!
  \*********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _blog_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-service.service */ "jYeG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../video/video.component */ "o9RM");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/footer/footer.component */ "LsfF");








function BlogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r5 === ctx_r0.itemActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r4.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.description);
} }
function BlogComponent__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent__svg_svg_4_Template__svg_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.thumbnailClick(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r7 === ctx_r1.itemActive);
} }
function BlogComponent_button_72_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 46);
} }
function BlogComponent_button_72_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_button_72_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.hideImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_button_72_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.redirectToLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlogComponent_button_72_img_3_Template, 1, 0, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showImage);
} }
class BlogComponent {
    constructor(service, router, http) {
        this.service = service;
        this.router = router;
        this.http = http;
        this.blogsDetail = [];
        this.videoSource = 'assets/images/innerpage/Camping Neretva.mp4';
        this.images = [
            {
                imgSrc: '../assets/images/innerpage/faft.jpg',
                imgAlt: 'Image 1',
                caption: 'Raft tours'
            },
            {
                imgSrc: '../assets/images/innerpage/oldbridge.jpg',
                imgAlt: 'Image 2',
                caption: 'Discover the Charms of Mostar'
            },
            {
                imgSrc: '../assets/images/innerpage/quad.jpg',
                imgAlt: 'Image 3',
                caption: 'Quad biking or renting cross motorcycles'
            },
            {
                imgSrc: '../assets/images/innerpage/mountain.jpg',
                imgAlt: 'Image 3',
                caption: 'Explore the surrounding mountainous areas'
            },
            {
                imgSrc: '../assets/images/innerpage/campcamp.jpg',
                imgAlt: 'Image 3',
                caption: 'The most beautiful sunsets'
            },
            {
                imgSrc: '../assets/images/innerpage/wooden.jpg',
                imgAlt: 'Image 2',
                caption: 'Unique accomodation units wooden log cabin'
            },
            {
                imgSrc: '../assets/images/innerpage/vine.jpg',
                imgAlt: 'Image 3',
                caption: 'Try the Local Wines and Beers'
            },
            {
                imgSrc: '../assets/images/innerpage/tentbeach.jpg',
                imgAlt: 'Image 3',
                caption: 'Tent area'
            },
            {
                imgSrc: '../assets/images/innerpage/enjoy.jpg',
                imgAlt: 'Image 4',
                caption: 'Enjoy the Evening Atmosphere'
            },
            {
                imgSrc: '../assets/images/innerpage/nature.jpg',
                imgAlt: 'Image 4',
                caption: '40 parking places'
            },
            {
                imgSrc: '../assets/images/innerpage/old.jpg',
                imgAlt: 'Image 4',
                caption: ''
            },
            {
                imgSrc: '../assets/images/innerpage/sun.jpg',
                imgAlt: 'Image 2',
                caption: ''
            }
        ];
        //////////////////
        //ZA SLIDER
        this.items = [
            { imageSrc: 'assets/images/innerpage/drone2.webp', design: '', title: 'CampingNeretva', description: '' },
            { imageSrc: 'assets/images/innerpage/camparking.jpg', design: '', title: 'Our camp', description: '' },
            { imageSrc: 'assets/images/innerpage/mostar.jpg', design: '', title: 'Visit Old Bridge', description: '' },
            { imageSrc: 'assets/images/innerpage/rafting.jpg', design: '', title: 'Come with us on raft tours', description: '' },
            { imageSrc: 'assets/images/innerpage/motor.webp', design: '', title: 'Explore cross motorcycle tours', description: '' },
        ];
        this.thumbnails = [
            { imageSrc: 'assets/images/innerpage/drone2.webp', name: '' },
            { imageSrc: 'assets/images/innerpage/camparking.jpg', name: '' },
            { imageSrc: 'assets/images/innerpage/mostar.jpg', name: '' },
            { imageSrc: 'assets/images/innerpage/rafting.jpg', name: '' },
            { imageSrc: 'assets/images/innerpage/motor.webp', name: '' },
        ];
        this.itemActive = 0; // Make sure this property exists
        this.showImage = false;
        this.hasScrolled = false;
        this.service.showEdit = false;
        this.initSlider();
    }
    ngOnInit() {
        this.initSlider();
        //this.checkScreenSize();
        if (this.service.Blogs.length === 0)
            this.service.getBlog().subscribe((d) => (this.service.Blogs = d));
        // Učitajte YouTube API
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        // Callback funkcija nakon učitavanja YouTube API
        window.onYouTubeIframeAPIReady = () => {
            // Kreirajte YouTube igrača
            const player = new window.YT.Player('youtube-player', {
                videoId: '09pfnX0seH8',
                playerVars: {
                    autoplay: 1,
                    loop: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    mute: 1,
                    modestbranding: 1,
                    iv_load_policy: 3,
                },
                events: {
                    onReady: (event) => {
                        event.target.playVideo(); // Pokrenite video kada je spreman
                    },
                    onStateChange: (event) => {
                        if (event.data === window.YT.PlayerState.ENDED) {
                            event.target.playVideo(); // Ponovno pokrenite video kada završi
                        }
                    }
                }
            });
        };
    }
    /*@HostListener('window:resize', ['$event'])
    onResize(event: any): void {
      // Provjeri veličinu ekrana kada se prozor promijeni veličinu
      this.checkScreenSize();
    }
  
    /*private checkScreenSize(): void {
      const video = this.renderer.selectRootElement('#myVideo');
  
      // Postavi autoplay na true samo ako je širina ekrana manja od 768 piksela
      video.autoplay = window.innerWidth < 768;
    }
    */
    loginClick() {
        this.router.navigate(['/login']);
    }
    newPost() {
        this.router.navigate(['/post']);
    }
    viewDetail(id) {
        this.service.detailId = id;
        if (this.service.loginStatusService)
            this.service.showEdit = true;
        this.router.navigate(['/blogDetail', id]);
    }
    initSlider() {
        this.refreshInterval = setInterval(() => {
            this.nextClick();
        }, 5000);
    }
    nextClick() {
        this.itemActive = (this.itemActive + 1) % this.items.length;
        this.showSlider();
    }
    prevClick() {
        this.itemActive = (this.itemActive - 1 + this.items.length) % this.items.length;
        this.showSlider();
    }
    thumbnailClick(index) {
        this.itemActive = index;
        this.showSlider();
    }
    showSlider() {
        clearInterval(this.refreshInterval);
        this.refreshInterval = setInterval(() => {
            this.nextClick();
        }, 5000);
    }
    hideImage() {
        this.showImage = false;
        this.hasScrolled = true;
    }
    onWindowScroll() {
        const yOffset = window.pageYOffset;
        const scrollThreshold = 200;
        const scrollToTopButton = document.querySelector('.bt-top2');
        if (!this.hasScrolled) {
            this.showImage = yOffset > scrollThreshold;
        }
        if (scrollToTopButton) {
            if (yOffset > scrollThreshold) {
                scrollToTopButton.classList.add('show');
            }
            else {
                scrollToTopButton.classList.remove('show');
            }
        }
    }
    redirectToLink() {
        window.location.href = 'https://g.co/kgs/1TFBSGE';
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceblogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], hostBindings: function BlogComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function BlogComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 75, vars: 3, consts: [[1, "slider"], [1, "list"], ["class", "item", 3, "active", 4, "ngFor", "ngForOf"], [1, "thumbnail"], ["class", "indicator", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "container", "spacer2", "text-center"], [1, "title", 2, "color", "#343a40", "font-family", "Kanit, sans-serif", "font-weight", "bold", "margin-top", "50px"], [1, "previous-div"], [1, "row", "justify-content-center"], [1, "col-md-12", "no-trans", "text-center", 2, "background-color", "#f8f9fa", "padding", "30px", "margin-bottom", "0px"], [1, "text-justify", 2, "font-weight", "bold", "margin-bottom", "15px"], [1, "text-justify", 2, "font-weight", "bold"], [1, "row", "justify-content-center", "text-center"], [1, "col-md-4"], ["src", "assets/images/landingpage/vanmountain.webp", 1, "img-fluid", "icon-image", "mx-auto"], [1, "icon-text", 2, "color", "#343a40", "font-family", "Kanit, sans-serif", "font-weight", "bold"], [1, "icon-text"], ["src", "assets/images/landingpage/boywithcamper.webp", 1, "img-fluid", "icon-image", "mx-auto"], ["src", "assets/images/landingpage/vanrivver.webp", 1, "img-fluid", "icon-image", "mx-auto"], [1, "container", "spacer"], [1, "col-md-8", "no-trans", "text-center", 2, "background-color", "#f8f9fa", "padding", "20px"], [1, "title", 2, "color", "#343a40", "font-family", "Kanit, sans-serif", "font-weight", "bold"], [1, "subtitle", 2, "color", "#6c757d", "font-family", "Kanit, sans-serif"], [1, "container2"], [1, "card__container"], [1, "card__article"], ["src", "assets/images/innerpage/grouprafting.webp", "alt", "image", 1, "card__img"], [1, "click-overlay"], [1, "card__data"], [1, "card__description"], ["href", "/activities", 1, "card__button"], ["src", "assets/images/innerpage/exploremountain.jpg", "alt", "image", 1, "card__img"], [1, "card__title"], ["src", "assets/images/innerpage/motor2.jpg", "alt", "image", 1, "card__img"], ["class", "bt-top2 btn btn-circle btn-lg btn-info", 4, "ngIf"], [2, "margin-bottom", "0"], ["footer", ""], [1, "item"], [3, "src"], [1, "content"], [1, "indicator", 3, "click"], ["cx", "12", "cy", "12", "r", "8", "fill", "white"], [1, "bt-top2", "btn", "btn-circle", "btn-lg", "btn-info"], [1, "fas", "fa-times", "exit-icon", 3, "click"], ["href", "https://g.co/kgs/1TFBSGE", "target", "_blank", 3, "click"], ["src", "assets/images/innerpage/googler.png", "alt", "Google review", "class", "slika", 4, "ngIf"], ["src", "assets/images/innerpage/googler.png", "alt", "Google review", 1, "slika"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlogComponent_div_2_Template, 7, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlogComponent__svg_svg_4_Template, 2, 2, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "WELCOME TO CAMPING NERETVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " At the heart of Mostar is Camping Neretva, your gateway to unforgettable adventures. The camp offers the perfect blend of comfort and direct contact with nature. Situated right along the banks of the Neretva, the camp provides spectacular views and access to a variety of water activities. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Whether you enjoy camping under the open sky, exploring the surroundings on a bicycle, or relaxing to the sounds of the river, Camping Neretva promises a unique experience that will awaken your adventurous spirit. Visit us and experience the fusion of nature, culture, and excitement in the heart of this irresistible part of Bosnia and Herzegovina. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "EXPLORE NEARBY MOUNTAINS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Prenj, \u010Cvrsnica, Vele\u017E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "ENJOY SUNNY DAYS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Explore the beauty of Mostar and the Neretva River");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "THE PERFECT LOCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Only 3km from Old Bridge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Discover Our Special Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Special Offers Just for You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "article", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Witness the breathtaking highlights from our exhilarating raft tours.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "article", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Explore the surrounding mountainous areas(Prenj, \u010Cvrsnica, Vele\u017E)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Tours in the Mountains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "article", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Explore the Wild Side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Quad biking or renting cross motorcycles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, BlogComponent_button_72_Template, 4, 1, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "app-footer", 35, 36);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showImage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap\");\r\n\r\n\r\n.touchSlider[_ngcontent-%COMP%] {\r\n    width: 800px;\r\n    height: 500px;\r\n    position: relative;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n\r\n.text-content[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    text-align: justify; \r\n    font-size: 1.0em;\r\n  }\r\n\r\n\r\n.previous-div[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n\r\n.video-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n  right: 0;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  padding: 100px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: #111;\r\n  transition: 0.5s;\r\n  z-index: 2;\r\n  }\r\n\r\n\r\niframe[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n\r\n#youtube-player[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 80%;\r\n  border: none;\r\n  overflow: hidden;\r\n  background-color: transparent; \r\n}\r\n\r\n\r\n.video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  transform: translateY(-25%); \r\n}\r\n\r\n\r\n#youtube-player[_ngcontent-%COMP%]:hover   .ytp-chrome-top[_ngcontent-%COMP%], #youtube-player[_ngcontent-%COMP%]:hover   .ytp-chrome-bottom[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n}\r\n\r\n\r\n.static-slider-head[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n\r\n.static-slider-head[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  margin-bottom: 5%;\r\n  \r\n}\r\n\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #03a9f4;\r\n  mix-blend-mode: overlay;\r\n  z-index: 1; \r\n}\r\n\r\n\r\n.row.justify-content-center.mt-3.mb-3[_ngcontent-%COMP%], .touchSlider[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 2; \r\n}\r\n\r\n\r\n.overlay[_ngcontent-%COMP%]\r\n{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #03a9f4;\r\n  mix-blend-mode: overlay;\r\n}\r\n\r\n\r\n.container.spacer[_ngcontent-%COMP%] {\r\n  min-height: 900px; \r\n  min-width: 1500px; \r\n}\r\n\r\n\r\n@media (max-width: 767px) {\r\n  .container.spacer[_ngcontent-%COMP%] {\r\n    min-height: auto; \r\n    min-width: auto;  \r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 767px) {\r\n  .col-md-2[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    margin-left: 2px; \r\n  }\r\n  \r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.col-md-2[_ngcontent-%COMP%]   h6.card-subtitle[_ngcontent-%COMP%] {\r\n  white-space: nowrap; \r\n  overflow: hidden; \r\n  text-overflow: ellipsis; \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 767px) {\r\n  .col-md-2[_ngcontent-%COMP%] {\r\n    text-align: center; \r\n  }\r\n\r\n  .col-md-2[_ngcontent-%COMP%]   h6.card-subtitle[_ngcontent-%COMP%] {\r\n    margin: 0; \r\n    padding: 5px; \r\n    background-color: #f8f9fa; \r\n    display: inline-block; \r\n    max-width: 100%; \r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 767px) {\r\n  .blog-heading[_ngcontent-%COMP%], .blog-subheading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0;\r\n    padding: 5px;\r\n    max-width: 100%;\r\n  }\r\n}\r\n\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-family: \"Kanit\", sans-serif;\r\n  font-weight: 50;\r\n  font-style: normal;\r\n  font-size: xx-large;\r\n}\r\n\r\n\r\n.rounded-image[_ngcontent-%COMP%] {\r\n  border-radius: 10px; \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 767px) {\r\n  .blog-text[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .blog-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 100%; \r\n    display: inline-block; \r\n    margin: 0 auto; \r\n  }\r\n\r\n  .blog-heading[_ngcontent-%COMP%], .blog-subheading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n\r\n.icon-image[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.container-spacer2[_ngcontent-%COMP%]{\r\n  font-family: \"Kanit\", sans-serif;\r\n\r\n}\r\n\r\n\r\n@media (max-width: 767px) {\r\n  .icon-image[_ngcontent-%COMP%] {\r\n    width: 50%; \r\n    height: auto;\r\n  }\r\n}\r\n\r\n\r\n@media (max-width: 767px) {\r\n.blog-image[_ngcontent-%COMP%] {\r\n  height: 200px; \r\n  width: auto; \r\n  border: none; \r\n\r\n\r\n}\r\n.blog-heading[_ngcontent-%COMP%] {\r\n  font-size: 24px; \r\n  font-family: \"Kanit\", sans-serif;\r\n}\r\n}\r\n\r\n\r\n.blog-heading[_ngcontent-%COMP%] {\r\n  font-family: \"Kanit\", sans-serif;\r\n}\r\n\r\n\r\n.blog-image[_ngcontent-%COMP%] {\r\n  border: none; \r\n\r\n}\r\n\r\n\r\n.custom-rounded-button[_ngcontent-%COMP%] {\r\n  border-radius: 80px; \r\n}\r\n\r\n\r\n.blog-text[_ngcontent-%COMP%]{\r\n  font-family: \"Kanit\", sans-serif;\r\n\r\n}\r\n\r\n\r\n.blog-heading[_ngcontent-%COMP%] {\r\n  font-family: \"Kanit\", sans-serif !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nsvg[_ngcontent-%COMP%]{\r\n  width: 25px;\r\n}\r\n\r\n\r\nheader[_ngcontent-%COMP%]{\r\n  width: 1200px;\r\n  max-width: 90%;\r\n  margin: auto;\r\n  display: grid;\r\n  grid-template-columns: 50px 1fr 50px;\r\n  grid-template-rows: 50px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  z-index: 100;\r\n}\r\n\r\n\r\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n\r\n\r\nheader[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 20px;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.slider[_ngcontent-%COMP%]{\r\n  height: 120vh;\r\n  margin-top: -50px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.slider[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  inset: 0 0 0 0;\r\n  overflow: hidden;\r\n  opacity: 0;\r\n  transition: .5s;\r\n}\r\n\r\n\r\n.slider[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n\r\n.slider[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]::after{\r\n  content: '';\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  background-image: linear-gradient(\r\n      to top, #000 15%, transparent\r\n  );\r\n}\r\n\r\n\r\n.slider[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n\r\n.slider[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  left: 10%;\r\n  top: 50%;\r\n  width: 500px;\r\n  max-width: 80%;\r\n  z-index: 1;\r\n}\r\n\r\n\r\n.slider[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1){\r\n  text-transform: uppercase;\r\n  letter-spacing: 10px;\r\n}\r\n\r\n\r\n.slider[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 60px;\r\n  margin: 0;\r\n  color: rgb(206, 206, 206);\r\n  white-space: pre-wrap;\r\n  font-family: 'Kanit', sans-serif;\r\n}\r\n\r\n\r\n.slider[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n  z-index: 10;\r\n}\r\n\r\n\r\n@keyframes showContent {\r\n  to{\r\n      transform: translateY(0);\r\n      filter: blur(0);\r\n      opacity: 1;\r\n  }\r\n}\r\n\r\n\r\n.slider[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1), .slider[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3){\r\n  transform: translateY(30px);\r\n  filter: blur(20px);\r\n  opacity: 0;\r\n  animation: showContent .5s .7s ease-in-out 1 forwards;\r\n}\r\n\r\n\r\n.slider[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  animation-delay: 1s;\r\n}\r\n\r\n\r\n.slider[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3){\r\n  animation-duration: 1.3s;\r\n}\r\n\r\n\r\n.arrows[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 30%;\r\n  right: 50px;\r\n  z-index: 100;\r\n}\r\n\r\n\r\n.arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  background-color: #eee5;\r\n  border: none;\r\n  font-family: monospace;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 5px;\r\n  font-size: x-large;\r\n  color: #eee;\r\n  transition: .5s;\r\n}\r\n\r\n\r\n.arrows[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n  background-color: #eee;\r\n  color: black;\r\n}\r\n\r\n\r\n.indicator[_ngcontent-%COMP%] {\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  background-color: #ffffff; \r\n  margin: 0 5px; \r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.indicator.active[_ngcontent-%COMP%] {\r\n  background-color: #436137; \r\n}\r\n\r\n\r\n.thumbnail[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  bottom: 10px;\r\n  z-index: 11;\r\n  display: flex;\r\n  gap: 10px;\r\n  width: 100%;\r\n  height: 50px;\r\n  padding: 0 50px;\r\n  box-sizing: border-box;\r\n  overflow: auto;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n.thumbnail[_ngcontent-%COMP%]::-webkit-scrollbar{\r\n  width: 0;\r\n}\r\n\r\n\r\n.thumbnail[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\r\n  width: 150px;\r\n  height: 220px;\r\n  filter: brightness(.5);\r\n  transition: .5s;\r\n  flex-shrink: 0;\r\n}\r\n\r\n\r\n.thumbnail[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  border-radius: 10px;\r\n}\r\n\r\n\r\n.thumbnail[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]{\r\n  filter: brightness(1.5);\r\n}\r\n\r\n\r\n.thumbnail[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  inset: auto 10px 10px 10px;\r\n}\r\n\r\n\r\n@media screen and (max-width: 678px) {\r\n  .thumbnail[_ngcontent-%COMP%]{\r\n      justify-content: start;\r\n  }\r\n  .slider[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 20px; \r\n    display: block;\r\n    text-align: center; \r\n    color:rgb(206, 206, 206);\r\n    margin-top: 30px!important;\r\n  } \r\n  .arrows[_ngcontent-%COMP%]{\r\n      top: 10%;\r\n  } \r\n  .slider[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  top: 75%;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media (max-width: 767px) {\r\n  .thumbnail[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n    display: block;\r\n  }\r\n}\r\n\r\n\r\n.text-justify[_ngcontent-%COMP%] {\r\n  opacity: 0; \r\n  transform: translateY(20px); \r\n  animation: fadeInUp 3s ease-out forwards; \r\n}\r\n\r\n\r\n\r\n\r\n\r\n@keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n\r\n.fade-in-up[_ngcontent-%COMP%] {\r\n  animation: fadeInUp 1s ease-out forwards;\r\n  opacity: 0; \r\n  transform: translateY(20px); \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]:root {\r\n  \r\n  \r\n  --first-color: hsl(82, 60%, 28%);\r\n  --title-color: hsl(0, 0%, 15%);\r\n  --text-color: hsl(0, 0%, 35%);\r\n  --body-color: hsl(0, 0%, 95%);\r\n  --container-color: hsl(0, 0%, 100%);\r\n\r\n  \r\n  \r\n  --body-font: \"Poppins\", sans-serif;\r\n  --h2-font-size: 1.25rem;\r\n  --small-font-size: .813rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media screen and (min-width: 1120px) {\r\n  [_ngcontent-%COMP%]:root {\r\n    --h2-font-size: 1.5rem;\r\n    --small-font-size: .875rem;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.container2[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  place-items: center;\r\n  margin-inline: 1.5rem;\r\n  align-content: space-between;\r\n}\r\n\r\n\r\n.card__container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  row-gap: 3.5rem;\r\n}\r\n\r\n\r\n.card__article[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.card__img[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n\r\n.card__data[_ngcontent-%COMP%] {\r\n  width: 280px;\r\n  background-color: var(--container-color);\r\n  padding: 1.5rem 2rem;\r\n  box-shadow: 0 8px 24px hsla(0, 0%, 0%, .15);\r\n  border-radius: 1rem;\r\n  position: absolute;\r\n  bottom: -9rem;\r\n  left: 0;\r\n  right: 0;\r\n  margin-inline: auto;\r\n  opacity: 0;\r\n  transition: opacity 1s 1s;\r\n}\r\n\r\n\r\n.card__description[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: var(--small-font-size);\r\n  margin-bottom: .25rem;\r\n}\r\n\r\n\r\n.card__title[_ngcontent-%COMP%] {\r\n  font-size: var(--h2-font-size);\r\n  font-weight: 500;\r\n  color: var(--title-color);\r\n  margin-bottom: .75rem;\r\n}\r\n\r\n\r\n.card__button[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  font-size: var(--small-font-size);\r\n  font-weight: 500;\r\n  color: var(--first-color);\r\n}\r\n\r\n\r\n.card__button[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.card__article[_ngcontent-%COMP%]:hover   .card__data[_ngcontent-%COMP%] {\r\n  animation: show-data 1s forwards;\r\n  opacity: 1;\r\n  transition: opacity .3s;\r\n}\r\n\r\n\r\n.card__article[_ngcontent-%COMP%]:hover {\r\n  animation: remove-overflow 2s forwards;\r\n}\r\n\r\n\r\n.card__article[_ngcontent-%COMP%]:not(:hover) {\r\n  animation: show-overflow 2s forwards;\r\n}\r\n\r\n\r\n.card__article[_ngcontent-%COMP%]:not(:hover)   .card__data[_ngcontent-%COMP%] {\r\n  animation: remove-data 1s forwards;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@keyframes show-data {\r\n  50% {\r\n    transform: translateY(-10rem);\r\n  }\r\n  100% {\r\n    transform: translateY(-7rem);\r\n  }\r\n}\r\n\r\n\r\n@keyframes remove-overflow {\r\n  to {\r\n    overflow: initial;\r\n  }\r\n}\r\n\r\n\r\n@keyframes remove-data {\r\n  0% {\r\n    transform: translateY(-7rem);\r\n  }\r\n  50% {\r\n    transform: translateY(-10rem);\r\n  }\r\n  100% {\r\n    transform: translateY(.5rem);\r\n  }\r\n}\r\n\r\n\r\n@keyframes show-overflow {\r\n  0% {\r\n    overflow: initial;\r\n    pointer-events: none;\r\n  }\r\n  50% {\r\n    overflow: hidden;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media screen and (max-width: 340px) {\r\n  .container2[_ngcontent-%COMP%] {\r\n    margin-inline: 1rem;\r\n  }\r\n\r\n  .card__data[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n    padding: 1rem;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media screen and (min-width: 768px) {\r\n  .card__container[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(1, 1fr);\r\n    column-gap: 1.5rem;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media screen and (min-width: 1120px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n  }\r\n\r\n  .card__container[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n  .card__img[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n  }\r\n  .card__data[_ngcontent-%COMP%] {\r\n    width: 316px;\r\n    padding-inline: 2.5rem;\r\n  }\r\n\r\n  .row[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    flex-wrap: wrap;\r\n    \r\n    \r\n  }\r\n}\r\n\r\n\r\n.spacer2[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\r\n\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n}\r\n\r\n\r\n@media screen and (max-width: 767px) {\r\n  .container2[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    padding: 2rem;\r\n}\r\n\r\n  .card__article[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.5rem; \r\n  }\r\n\r\n}\r\n\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  flex-wrap: wrap;\r\n  \r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.click-overlay[_ngcontent-%COMP%] {\r\n position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer; \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.click-overlay[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  width: 0;\r\n  height: 0;\r\n  border: 10px solid transparent;\r\n  border-top-color: #fff; \r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n  .click-overlay[_ngcontent-%COMP%] {\r\n    display: none; \r\n  }\r\n\r\n}\r\n\r\n\r\n.bt-top2[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  transition: opacity 0.3s ease;\r\ndisplay: flex;\r\nalign-items: center;\r\njustify-content: center;\r\nwidth: 180px; \r\nheight: 100px; \r\nborder-radius: 20px; \r\npadding: 0; \r\nz-index: -1; \r\n\r\n}\r\n\r\n\r\n.bt-top2.show[_ngcontent-%COMP%] {\r\n  opacity: 1; \r\n  z-index: 999; \r\n\r\n}\r\n\r\n\r\n.slika[_ngcontent-%COMP%] {\r\n  width: 100%; \r\n  height: 100%;\r\n  border-radius: 20px;\r\n}\r\n\r\n\r\n.exit-icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 8px; \r\n  right: 8px; \r\n  font-size: 20px; \r\n  color: rgb(0, 0, 0); \r\n  display:flex; \r\n}\r\n\r\n\r\n.bt-top2[_ngcontent-%COMP%]:hover   .exit-icon[_ngcontent-%COMP%] {\r\n  display: block; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5RkFBeUY7OztBQUd6RjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7OztBQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCOzs7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQixRQUFRO0VBQ1IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Y7OztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7RUFDZDs7O0FBRUY7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9COzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOzs7QUFFQTs7SUFFSSx3QkFBd0I7QUFDNUI7OztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVUsRUFBRSx1RUFBdUU7QUFDckY7OztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixVQUFVLEVBQUUsMENBQTBDO0FBQ3hEOzs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7OztBQUVBO0VBQ0UsaUJBQWlCLEVBQUUsNkNBQTZDO0VBQ2hFLGlCQUFpQixFQUFFLDZDQUE2QztBQUNsRTs7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQixFQUFFLDZGQUE2RjtJQUMvRyxlQUFlLEdBQUcsNkZBQTZGO0VBQ2pIO0FBQ0Y7OztBQUVBLDZEQUE2RDs7O0FBQzdEO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUUsOENBQThDO0VBQ2xFOztFQUVBLHFDQUFxQztBQUN2Qzs7O0FBR0EsK0RBQStEOzs7QUFDL0Q7RUFDRSxtQkFBbUIsRUFBRSx5Q0FBeUM7RUFDOUQsZ0JBQWdCLEVBQUUsb0NBQW9DO0VBQ3RELHVCQUF1QixFQUFFLHFDQUFxQztBQUNoRTs7O0FBRUEsb0RBQW9EOzs7QUFDcEQsNEVBQTRFOzs7QUFDNUUsNEVBQTRFOzs7QUFDNUU7RUFDRTtJQUNFLGtCQUFrQixFQUFFLDZDQUE2QztFQUNuRTs7RUFFQTtJQUNFLFNBQVMsRUFBRSx3REFBd0Q7SUFDbkUsWUFBWSxFQUFFLDJDQUEyQztJQUN6RCx5QkFBeUIsRUFBRSw4REFBOEQ7SUFDekYscUJBQXFCLEVBQUUsd0VBQXdFO0lBQy9GLGVBQWUsRUFBRSw4RUFBOEU7RUFDakc7QUFDRjs7O0FBRUEsUUFBUTs7O0FBQ1I7RUFDRTs7SUFFRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBQ0Y7OztBQUdBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLG1CQUFtQixFQUFFLG9EQUFvRDtBQUMzRTs7O0FBRUEseURBQXlEOzs7QUFFekQsc0RBQXNEOzs7QUFFdEQsb0RBQW9EOzs7QUFFcEQ7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWUsRUFBRSxzRUFBc0U7SUFDdkYscUJBQXFCLEVBQUUsZ0NBQWdDO0lBQ3ZELGNBQWMsRUFBRSxpQ0FBaUM7RUFDbkQ7O0VBRUE7O0lBRUUsa0JBQWtCO0VBQ3BCO0FBQ0Y7OztBQUVBO0VBQ0UsV0FBVztBQUNiOzs7QUFFQTtFQUNFLGdDQUFnQzs7QUFFbEM7OztBQUVBO0VBQ0U7SUFDRSxVQUFVLEVBQUUsbURBQW1EO0lBQy9ELFlBQVk7RUFDZDtBQUNGOzs7QUFDQTtBQUNBO0VBQ0UsYUFBYSxFQUFFLDBDQUEwQztFQUN6RCxXQUFXLEVBQUUsK0NBQStDO0VBQzVELFlBQVksRUFBRSx3Q0FBd0M7OztBQUd4RDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztBQUNsQztBQUNBOzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7O0FBRUE7RUFDRSxZQUFZLEVBQUUsd0NBQXdDOztBQUV4RDs7O0FBRUE7RUFDRSxtQkFBbUIsRUFBRSx1Q0FBdUM7QUFDOUQ7OztBQUdBO0VBQ0UsZ0NBQWdDOztBQUVsQzs7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7OztBQUlBLGNBQWM7OztBQUNkO0VBQ0UsV0FBVztBQUNiOzs7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOzs7QUFDQSxlQUFlOzs7QUFDZjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixlQUFlO0FBQ2pCOzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNUOztHQUE0RTtBQUM5RTs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZO0VBQ1osY0FBYztFQUNkLFVBQVU7QUFDWjs7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOzs7QUFDQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQ0FBZ0M7QUFDbEM7OztBQUlBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7O0FBQ0E7RUFDRTtNQUNJLHdCQUF3QjtNQUN4QixlQUFlO01BQ2YsVUFBVTtFQUNkO0FBQ0Y7OztBQUNBOzs7RUFHRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixxREFBcUQ7QUFDdkQ7OztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7OztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOzs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7OztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUUsMEJBQTBCO0VBQ3JELGFBQWEsRUFBRSxnQ0FBZ0M7RUFDL0MsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSx5QkFBeUI7QUFDdEQ7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7O0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7OztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7OztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOzs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOzs7QUFDQTtFQUNFO01BQ0ksc0JBQXNCO0VBQzFCO0VBQ0E7SUFDRSxlQUFlLEVBQUUsMkNBQTJDO0lBQzVELGNBQWM7SUFDZCxrQkFBa0IsRUFBRSxvQkFBb0I7SUFDeEMsd0JBQXdCO0lBQ3hCLDBCQUEwQjtFQUM1QjtFQUNBO01BQ0ksUUFBUTtFQUNaO0VBQ0E7RUFDQSxRQUFRO0VBQ1I7O0FBRUY7OztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjtBQUNGOzs7QUFFQTtFQUNFLFVBQVUsRUFBRSxvQ0FBb0M7RUFDaEQsMkJBQTJCLEVBQUUsd0NBQXdDO0VBQ3JFLHdDQUF3QyxFQUFFLHlCQUF5QjtBQUNyRTs7O0FBRUEsa0NBQWtDOzs7QUFDbEM7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsVUFBVSxFQUFFLHdFQUF3RTtFQUNwRiwyQkFBMkIsRUFBRSwwRUFBMEU7QUFDekc7OztBQUVBLEdBQUc7OztBQUVILCtDQUErQzs7O0FBRS9DLGdEQUFnRDs7O0FBQ2hEO0VBQ0UsK0JBQStCO0VBQy9CLDZDQUE2QztFQUM3QyxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsbUNBQW1DOztFQUVuQyw0Q0FBNEM7RUFDNUMsZ0NBQWdDO0VBQ2hDLGtDQUFrQztFQUNsQyx1QkFBdUI7RUFDdkIsMEJBQTBCO0FBQzVCOzs7QUFFQSw4Q0FBOEM7OztBQUM5QztFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtFQUM1QjtBQUNGOzs7QUFFQSx1Q0FBdUM7OztBQUV2QztFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtBQUNkOzs7QUFFQSx1Q0FBdUM7OztBQUN2QztFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDRCQUE0QjtBQUM5Qjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxvQkFBb0I7RUFDcEIsMkNBQTJDO0VBQzNDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLE9BQU87RUFDUCxRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UsY0FBYztFQUNkLGlDQUFpQztFQUNqQyxxQkFBcUI7QUFDdkI7OztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7OztBQUVBLCtCQUErQjs7O0FBQy9CO0VBQ0UsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7OztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7OztBQUVBLG1CQUFtQjs7O0FBQ25CO0VBQ0U7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGOzs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7OztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0Y7OztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7O0FBRUEsOENBQThDOzs7QUFDOUMsc0JBQXNCOzs7QUFDdEI7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7QUFDRjs7O0FBSUEsdUJBQXVCOzs7QUFDdkI7RUFDRTtJQUNFLHFDQUFxQztJQUNyQyxrQkFBa0I7RUFDcEI7QUFDRjs7O0FBRUEsc0JBQXNCOzs7QUFDdEI7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHFDQUFxQztFQUN2QztFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0lBQ1osc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsd0JBQXdCO0VBQzFCO0FBQ0Y7OztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztFQUVFO0lBQ0UscUJBQXFCLEVBQUUsa0NBQWtDO0VBQzNEOztBQUVGOzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHdCQUF3QjtBQUMxQjs7O0FBR0EsMEJBQTBCOzs7QUFDMUI7Q0FDQyxrQkFBa0I7RUFDakIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBRSxpQ0FBaUM7QUFDcEQ7OztBQUVBLHlCQUF5Qjs7O0FBQ3pCO0VBQ0UsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLHNCQUFzQixFQUFFLGtCQUFrQjtFQUMxQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCwyQkFBMkI7QUFDN0I7OztBQUdBLDREQUE0RDs7O0FBQzVEO0VBQ0U7SUFDRSxhQUFhLEVBQUUscUNBQXFDO0VBQ3REOztBQUVGOzs7QUFHQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9CLGFBQWE7QUFDYixtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLFlBQVksRUFBRSxxQ0FBcUM7QUFDbkQsYUFBYSxFQUFFLHFDQUFxQztBQUNwRCxtQkFBbUIsRUFBRSw0Q0FBNEM7QUFDakUsVUFBVSxFQUFFLDBDQUEwQztBQUN0RCxXQUFXLEVBQUUsK0RBQStEOztBQUU1RTs7O0FBRUE7RUFDRSxVQUFVLEVBQUUsbUNBQW1DO0VBQy9DLFlBQVksRUFBRSw0REFBNEQ7O0FBRTVFOzs7QUFFQTtFQUNFLFdBQVcsRUFBRSxvREFBb0Q7RUFDakUsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUSxFQUFFLHNDQUFzQztFQUNoRCxVQUFVLEVBQUUsc0NBQXNDO0VBQ2xELGVBQWUsRUFBRSw2Q0FBNkM7RUFDOUQsbUJBQW1CLEVBQUUseUNBQXlDO0VBQzlELFlBQVksRUFBRSwyQkFBMkI7QUFDM0M7OztBQUVBO0VBQ0UsY0FBYyxFQUFFLDREQUE0RDtBQUM5RSIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuXHJcbi50b3VjaFNsaWRlciB7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLnRleHQtY29udGVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyBcclxuICAgIGZvbnQtc2l6ZTogMS4wZW07XHJcbiAgfVxyXG4gIC5wcmV2aW91cy1kaXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMTExO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgei1pbmRleDogMjtcclxuICB9XHJcbiAgXHJcbiAgaWZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4jeW91dHViZS1wbGF5ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgXHJcbn1cclxuXHJcbi52aWRlby1jb250YWluZXIgaWZyYW1lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNSUpOyBcclxufVxyXG5cclxuI3lvdXR1YmUtcGxheWVyOmhvdmVyIC55dHAtY2hyb21lLXRvcCxcclxuI3lvdXR1YmUtcGxheWVyOmhvdmVyIC55dHAtY2hyb21lLWJvdHRvbSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGF0aWMtc2xpZGVyLWhlYWQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnN0YXRpYy1zbGlkZXItaGVhZCB2aWRlbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAvKiBvcGFjaXR5ICovXHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMwM2E5ZjQ7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG92ZXJsYXk7XHJcbiAgei1pbmRleDogMTsgLyogU2V0IGEgaGlnaGVyIHotaW5kZXggdGhhbiBvdGhlciBlbGVtZW50cyBpbnNpZGUgc3RhdGljLXNsaWRlci1oZWFkICovXHJcbn1cclxuXHJcbi5yb3cuanVzdGlmeS1jb250ZW50LWNlbnRlci5tdC0zLm1iLTMsXHJcbi50b3VjaFNsaWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7IC8qIFNldCBhIGhpZ2hlciB6LWluZGV4IHRoYW4gdGhlIG92ZXJsYXkgKi9cclxufVxyXG5cclxuLm92ZXJsYXlcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzAzYTlmNDtcclxuICBtaXgtYmxlbmQtbW9kZTogb3ZlcmxheTtcclxufVxyXG5cclxuLmNvbnRhaW5lci5zcGFjZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDkwMHB4OyAvKiBQcmlsYWdvZGl0ZSB2aXNpbnUgcHJlbWEgdmHFoWltIHBvdHJlYmFtYSAqL1xyXG4gIG1pbi13aWR0aDogMTUwMHB4OyAvKiBQcmlsYWdvZGl0ZSDFoWlyaW51IHByZW1hIHZhxaFpbSBwb3RyZWJhbWEgKi9cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNvbnRhaW5lci5zcGFjZXIge1xyXG4gICAgbWluLWhlaWdodDogYXV0bzsgLyogUG9uacWhdGF2YW5qZSB2aXNpbmUgbmEgbW9iaWxuaW0gdXJlxJFhamltYSwgbW/FvmV0ZSBwb3N0YXZpdGkgbmEgYXV0byBpbGkgZHJ1Z3UgdnJpamVkbm9zdCAqL1xyXG4gICAgbWluLXdpZHRoOiBhdXRvOyAgLyogUG9uacWhdGF2YW5qZSDFoWlyaW5lIG5hIG1vYmlsbmltIHVyZcSRYWppbWEsIG1vxb5ldGUgcG9zdGF2aXRpIG5hIGF1dG8gaWxpIGRydWd1IHZyaWplZG5vc3QgKi9cclxuICB9XHJcbn1cclxuXHJcbi8qIFByaW1qZXIgcHJpbGFnb2RiZSB2ZWxpxI1pbmUgdGVrc3RhIG5hIG1vYmlsbmltIHVyZcSRYWppbWEgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNvbC1tZC0yIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7IC8qIFByaWxhZ29kaXRlIHZlbGnEjWludSB0ZWtzdGEgcHJlbWEgcG90cmViaSAqL1xyXG4gIH1cclxuICBcclxuICAvKiBEb2RhdG5lIHByaWxhZ29kYmUgcHJlbWEgcG90cmViaSAqL1xyXG59XHJcblxyXG5cclxuLyogRGVmYXVsdCBzdGlsb3ZpIGtvamkgc2UgcHJpbWplbmp1anUgbmEgc3ZlIHZlbGnEjWluZSBla3JhbmEgKi9cclxuLmNvbC1tZC0yIGg2LmNhcmQtc3VidGl0bGUge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIFNwcmplxI1hdmEgcHJlbGF6YWsgdGVrc3RhIHUgbm92aSByZWQgKi9cclxuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBTYWtyaXZhIGV2ZW50dWFsbmkgdmnFoWFrIHRla3N0YSAqL1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAvKiBEb2RhamUgXCIuLi5cIiBha28gamUgdGVrc3QgcHJlZHVnICovXHJcbn1cclxuXHJcbi8qIFN0aWxvdmkgemEgbWFuamUgZWtyYW5lLCBwb3B1dCBtb2JpbG5paCB1cmXEkWFqYSAqL1xyXG4vKiBEb2RhdG5pIHN0aWxvdmkgemEgcG9ib2xqxaFhbmplIHZpZGxqaXZvc3RpIHRla3N0YSBuYSBtb2JpbG5pbSB1cmXEkWFqaW1hICovXHJcbi8qIERvZGF0bmkgc3RpbG92aSB6YSBwb2JvbGrFoWFuamUgdmlkbGppdm9zdGkgdGVrc3RhIG5hIG1vYmlsbmltIHVyZcSRYWppbWEgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNvbC1tZC0yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudHJpcmFuamUgdGVrc3RhIG5hIG1vYmlsbmltIHVyZcSRYWppbWEgKi9cclxuICB9XHJcblxyXG4gIC5jb2wtbWQtMiBoNi5jYXJkLXN1YnRpdGxlIHtcclxuICAgIG1hcmdpbjogMDsgLyogVWtsYW5qYW5qZSBtYXJnaW5hIGtha28gYmkgdGVrc3QgYmlvIGJsacW+ZSBydWJvdmltYSAqL1xyXG4gICAgcGFkZGluZzogNXB4OyAvKiBEb2RhdmFuamUgZG9kYXRub2cgcHJvc3RvcmEgb2tvIHRla3N0YSAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTsgLyogRG9kYXZhbmplIHBvemFkaW5za2UgYm9qZSBrYWtvIGJpIHRla3N0IGJpbyBib2xqZSB2aWRsaml2ICovXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIE92byBtb8W+ZSBwb21vxIdpIHUgcmplxaFhdmFuanUgcHJvYmxlbWEgcyBwcmlrYXpvbSBuYSBuZWtpbSB1cmXEkWFqaW1hICovXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIE92byBvZ3JhbmnEjWF2YSDFoWlyaW51IG5hIG1ha3NpbWFsbnUgZG9zdHVwbnUgxaFpcmludSByb2RpdGVsanNrb2cgZWxlbWVudGEgKi9cclxuICB9XHJcbn1cclxuXHJcbi8qIENTUyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuYmxvZy1oZWFkaW5nLFxyXG4gIC5ibG9nLXN1YmhlYWRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiS2FuaXRcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcblxyXG4ucm91bmRlZC1pbWFnZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgLyogUHJpbGFnb2RpdGUgdnJpamVkbm9zdCBwcmVtYSB2YcWhaW0gcHJlZmVyZW5jYW1hICovXHJcbn1cclxuXHJcbi8qIERvZGFqdGUgb3ZvIG5hIGRubyB2YcWhZWcgQ1NTLWEgaWxpIHN0eWxlcy5zY3NzIGZhamxhICovXHJcblxyXG4vKiBEb2RhanRlIG92byB1IHN0aWxpemFjaWp1IHZhxaFlIEFuZ3VsYXIga29tcG9uZW50ZSAqL1xyXG5cclxuLyogRG9kYWp0ZSBvdm8gdSB2YcWhIENTUyBzdGlsIGlsaSBzdHlsZXMuc2NzcyBmYWpsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuYmxvZy10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5ibG9nLXRleHQgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTsgLyogTWFrc2ltYWxuYSDFoWlyaW5hIHNsaWthIMSHZSBiaXRpIDEwMCUgxaFpcmluZSByb2RpdGVsanNrb2cgZWxlbWVudGEgKi9cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogT21vZ3XEh3VqZSBjZW50cmlyYW5qZSBzbGlrZSAqL1xyXG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIEF1dG9tYXRza28gY2VudHJpcmFuamUgc2xpa2UgKi9cclxuICB9XHJcblxyXG4gIC5ibG9nLWhlYWRpbmcsXHJcbiAgLmJsb2ctc3ViaGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbi1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXItc3BhY2VyMntcclxuICBmb250LWZhbWlseTogXCJLYW5pdFwiLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmljb24taW1hZ2Uge1xyXG4gICAgd2lkdGg6IDUwJTsgLyogUHJpbGFnb2RpdGUgdmVsacSNaW51IHNsaWthIHByZW1hIHZhxaFpbSDFvmVsamFtYSAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuLmJsb2ctaW1hZ2Uge1xyXG4gIGhlaWdodDogMjAwcHg7IC8qIFNldCB0aGUgZGVzaXJlZCBoZWlnaHQgZm9yIHRoZSBpbWFnZXMgKi9cclxuICB3aWR0aDogYXV0bzsgLyogQXV0by1hZGp1c3Qgd2lkdGggdG8gbWFpbnRhaW4gYXNwZWN0IHJhdGlvICovXHJcbiAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgdGhlIGJvcmRlciBhcm91bmQgdGhlIGltYWdlcyAqL1xyXG5cclxuXHJcbn1cclxuLmJsb2ctaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAyNHB4OyBcclxuICBmb250LWZhbWlseTogXCJLYW5pdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbn1cclxuXHJcbi5ibG9nLWhlYWRpbmcge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkthbml0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5ibG9nLWltYWdlIHtcclxuICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSB0aGUgYm9yZGVyIGFyb3VuZCB0aGUgaW1hZ2VzICovXHJcblxyXG59XHJcblxyXG4uY3VzdG9tLXJvdW5kZWQtYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiA4MHB4OyAvKiBBZGp1c3QgdGhlIGJvcmRlci1yYWRpdXMgYXMgbmVlZGVkICovXHJcbn1cclxuXHJcblxyXG4uYmxvZy10ZXh0e1xyXG4gIGZvbnQtZmFtaWx5OiBcIkthbml0XCIsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4uYmxvZy1oZWFkaW5nIHtcclxuICBmb250LWZhbWlseTogXCJLYW5pdFwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyogWkEgU0xJREVSICovXHJcbnN2Z3tcclxuICB3aWR0aDogMjVweDtcclxufVxyXG5oZWFkZXJ7XHJcbiAgd2lkdGg6IDEyMDBweDtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMWZyIDUwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5oZWFkZXIgLmxvZ297XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuaGVhZGVyIC5tZW51e1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4vKiBjc3Mgc2xpZGVyICovXHJcbi5zbGlkZXJ7XHJcbiAgaGVpZ2h0OiAxMjB2aDtcclxuICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnNsaWRlciAubGlzdCAuaXRlbXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDAgMCAwIDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG4uc2xpZGVyIC5saXN0IC5pdGVtIGltZ3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLnNsaWRlciAubGlzdCAuaXRlbTo6YWZ0ZXJ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHRvIHRvcCwgIzAwMCAxNSUsIHRyYW5zcGFyZW50XHJcbiAgKTtcclxufVxyXG5cclxuLnNsaWRlciAubGlzdCAuaXRlbSAuY29udGVudDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5zbGlkZXIgLmxpc3QgLml0ZW0gLmNvbnRlbnR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDEwJTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uc2xpZGVyIC5saXN0IC5pdGVtIC5jb250ZW50IHA6bnRoLWNoaWxkKDEpe1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XHJcbn1cclxuLnNsaWRlciAubGlzdCAuaXRlbSAuY29udGVudCBoMiB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogcmdiKDIwNiwgMjA2LCAyMDYpO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcblxyXG4uc2xpZGVyIC5saXN0IC5pdGVtLmFjdGl2ZXtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbkBrZXlmcmFtZXMgc2hvd0NvbnRlbnQge1xyXG4gIHRve1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIGZpbHRlcjogYmx1cigwKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuLnNsaWRlciAubGlzdCAuaXRlbS5hY3RpdmUgcDpudGgtY2hpbGQoMSksXHJcbi5zbGlkZXIgLmxpc3QgLml0ZW0uYWN0aXZlIGgyLFxyXG4uc2xpZGVyIC5saXN0IC5pdGVtLmFjdGl2ZSBwOm50aC1jaGlsZCgzKXtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XHJcbiAgZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uOiBzaG93Q29udGVudCAuNXMgLjdzIGVhc2UtaW4tb3V0IDEgZm9yd2FyZHM7XHJcbn1cclxuLnNsaWRlciAubGlzdCAuaXRlbS5hY3RpdmUgaDJ7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxufVxyXG4uc2xpZGVyIC5saXN0IC5pdGVtLmFjdGl2ZSBwOm50aC1jaGlsZCgzKXtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEuM3M7XHJcbn1cclxuLmFycm93c3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMCU7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcbi5hcnJvd3MgYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU1O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIGNvbG9yOiAjZWVlO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG4uYXJyb3dzIGJ1dHRvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcbi5pbmRpY2F0b3Ige1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogU2V0IHRoZSBkZWZhdWx0IGNvbG9yICovXHJcbiAgbWFyZ2luOiAwIDVweDsgLyogQWRqdXN0IHRoZSBtYXJnaW4gYXMgbmVlZGVkICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW5kaWNhdG9yLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNjEzNzsgLyogU2V0IHRoZSBhY3RpdmUgY29sb3IgKi9cclxufVxyXG5cclxuXHJcbi50aHVtYm5haWx7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTBweDtcclxuICB6LWluZGV4OiAxMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMCA1MHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRodW1ibmFpbDo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuLnRodW1ibmFpbCAuaXRlbXtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAyMjBweDtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoLjUpO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG4udGh1bWJuYWlsIC5pdGVtIGltZ3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4udGh1bWJuYWlsIC5pdGVtLmFjdGl2ZXtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KTtcclxufVxyXG4udGh1bWJuYWlsIC5pdGVtIC5jb250ZW50e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBpbnNldDogYXV0byAxMHB4IDEwcHggMTBweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzhweCkge1xyXG4gIC50aHVtYm5haWx7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgfVxyXG4gIC5zbGlkZXIgLmxpc3QgLml0ZW0gLmNvbnRlbnQgaDIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4OyAvKiBBZGp1c3QgZm9udCBzaXplIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgdGV4dCAqL1xyXG4gICAgY29sb3I6cmdiKDIwNiwgMjA2LCAyMDYpO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweCFpbXBvcnRhbnQ7XHJcbiAgfSBcclxuICAuYXJyb3dze1xyXG4gICAgICB0b3A6IDEwJTtcclxuICB9IFxyXG4gIC5zbGlkZXIgLmxpc3QgLml0ZW0gLmNvbnRlbnQge1xyXG4gIHRvcDogNzUlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC50aHVtYm5haWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLnRleHQtanVzdGlmeSB7XHJcbiAgb3BhY2l0eTogMDsgLyogUG9zdGF2aXRlIHBvxI1ldG51IHZyZWRub3N0IG5hIDAgKi9cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IC8qIFBvbWVyaXRlIHRla3N0IHphIDIwIHBpa3NlbGEgbmFkb2xlICovXHJcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAzcyBlYXNlLW91dCBmb3J3YXJkczsgLyogRGVmaW5pxaFpdGUgYW5pbWFjaWp1ICovXHJcbn1cclxuXHJcbi8qIERlZmluacWhaXRlIGFuaW1hY2lqdSBmYWRlSW5VcCAqL1xyXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFkZS1pbi11cCB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAxcyBlYXNlLW91dCBmb3J3YXJkcztcclxuICBvcGFjaXR5OiAwOyAvKiBJbmljaWphbG5vIHBvc3Rhdml0ZSBvcGFjaXR5IG5hIDAga2FrbyBiaXN0ZSBnYSBwb3N0ZXBlbm8gcHJpa2F6YWxpICovXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyAvKiBQb21lcml0ZSB0ZWtzdCB6YSAyMCBwaWtzZWxhIG5hZG9sZSBrYWtvIGJpc3RlIGdhIHBvc3RlcGVubyBwcmlrYXphbGkgKi9cclxufVxyXG5cclxuLyoqL1xyXG5cclxuLyo9PT09PT09PT09PT09PT0gR09PR0xFIEZPTlRTID09PT09PT09PT09PT09PSovXHJcblxyXG4vKj09PT09PT09PT09PT09PSBWQVJJQUJMRVMgQ1NTID09PT09PT09PT09PT09PSovXHJcbjpyb290IHtcclxuICAvKj09PT09PT09PT0gQ29sb3JzID09PT09PT09PT0qL1xyXG4gIC8qQ29sb3IgbW9kZSBIU0woaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpKi9cclxuICAtLWZpcnN0LWNvbG9yOiBoc2woODIsIDYwJSwgMjglKTtcclxuICAtLXRpdGxlLWNvbG9yOiBoc2woMCwgMCUsIDE1JSk7XHJcbiAgLS10ZXh0LWNvbG9yOiBoc2woMCwgMCUsIDM1JSk7XHJcbiAgLS1ib2R5LWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XHJcbiAgLS1jb250YWluZXItY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XHJcblxyXG4gIC8qPT09PT09PT09PSBGb250IGFuZCB0eXBvZ3JhcGh5ID09PT09PT09PT0qL1xyXG4gIC8qLjVyZW0gPSA4cHggfCAxcmVtID0gMTZweCAuLi4qL1xyXG4gIC0tYm9keS1mb250OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAtLWgyLWZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAtLXNtYWxsLWZvbnQtc2l6ZTogLjgxM3JlbTtcclxufVxyXG5cclxuLyo9PT09PT09PT09IFJlc3BvbnNpdmUgdHlwb2dyYXBoeSA9PT09PT09PT09Ki9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEyMHB4KSB7XHJcbiAgOnJvb3Qge1xyXG4gICAgLS1oMi1mb250LXNpemU6IDEuNXJlbTtcclxuICAgIC0tc21hbGwtZm9udC1zaXplOiAuODc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT0gQkFTRSA9PT09PT09PT09PT09PT0qL1xyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PSBDQVJEID09PT09PT09PT09PT09PSovXHJcbi5jb250YWluZXIyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWlubGluZTogMS41cmVtO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYXJkX19jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcm93LWdhcDogMy41cmVtO1xyXG59XHJcblxyXG4uY2FyZF9fYXJ0aWNsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkX19pbWcge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkX19kYXRhIHtcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGFpbmVyLWNvbG9yKTtcclxuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcclxuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IGhzbGEoMCwgMCUsIDAlLCAuMTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTlyZW07XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyAxcztcclxufVxyXG5cclxuLmNhcmRfX2Rlc2NyaXB0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQtc2l6ZSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xyXG59XHJcblxyXG4uY2FyZF9fdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0taDItZm9udC1zaXplKTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xyXG59XHJcblxyXG4uY2FyZF9fYnV0dG9uIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250LXNpemUpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcclxufVxyXG5cclxuLmNhcmRfX2J1dHRvbjpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi8qIE5hbWluZyBhbmltYXRpb25zIGluIGhvdmVyICovXHJcbi5jYXJkX19hcnRpY2xlOmhvdmVyIC5jYXJkX19kYXRhIHtcclxuICBhbmltYXRpb246IHNob3ctZGF0YSAxcyBmb3J3YXJkcztcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xyXG59XHJcblxyXG4uY2FyZF9fYXJ0aWNsZTpob3ZlciB7XHJcbiAgYW5pbWF0aW9uOiByZW1vdmUtb3ZlcmZsb3cgMnMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5jYXJkX19hcnRpY2xlOm5vdCg6aG92ZXIpIHtcclxuICBhbmltYXRpb246IHNob3ctb3ZlcmZsb3cgMnMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5jYXJkX19hcnRpY2xlOm5vdCg6aG92ZXIpIC5jYXJkX19kYXRhIHtcclxuICBhbmltYXRpb246IHJlbW92ZS1kYXRhIDFzIGZvcndhcmRzO1xyXG59XHJcblxyXG4vKiBDYXJkIGFuaW1hdGlvbiAqL1xyXG5Aa2V5ZnJhbWVzIHNob3ctZGF0YSB7XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTByZW0pO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3JlbSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJlbW92ZS1vdmVyZmxvdyB7XHJcbiAgdG8ge1xyXG4gICAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJlbW92ZS1kYXRhIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdyZW0pO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHJlbSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC41cmVtKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvdy1vdmVyZmxvdyB7XHJcbiAgMCUge1xyXG4gICAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4vKj09PT09PT09PT09PT09PSBCUkVBS1BPSU5UUyA9PT09PT09PT09PT09PT0qL1xyXG4vKiBGb3Igc21hbGwgZGV2aWNlcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNDBweCkge1xyXG4gIC5jb250YWluZXIyIHtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZF9fZGF0YSB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiBGb3IgbWVkaXVtIGRldmljZXMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY2FyZF9fY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICBjb2x1bW4tZ2FwOiAxLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vKiBGb3IgbGFyZ2UgZGV2aWNlcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTIwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG5cclxuICAuY2FyZF9fY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgfVxyXG4gIC5jYXJkX19pbWcge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxuICAuY2FyZF9fZGF0YSB7XHJcbiAgICB3aWR0aDogMzE2cHg7XHJcbiAgICBwYWRkaW5nLWlubGluZTogMi41cmVtO1xyXG4gIH1cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC8qIG1hcmdpbi1yaWdodDogLTE1cHg7ICovXHJcbiAgICAvKiBtYXJnaW4tbGVmdDogLTE1cHg7ICovXHJcbiAgfVxyXG59XHJcblxyXG4uc3BhY2VyMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY29udGFpbmVyMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbiAgLmNhcmRfX2FydGljbGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtOyAvKiBEb2RhanRlIHJhem1hayBpem1lxJF1IGthcnRpY2EgKi9cclxuICB9XHJcblxyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLyogbWFyZ2luLXJpZ2h0OiAtMTVweDsgKi9cclxuICAvKiBtYXJnaW4tbGVmdDogLTE1cHg7ICovXHJcbn1cclxuXHJcblxyXG4vKiBTdGlsaXphY2lqYSBvdmVybGF5LWEgKi9cclxuLmNsaWNrLW92ZXJsYXkge1xyXG4gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBQcm9tZW5pdGUga3Vyc29yIHUgcG9rYXppdmHEjSAqL1xyXG59XHJcblxyXG4vKiBTdGlsaXphY2lqYSBzdHJlbGljZSAqL1xyXG4uY2xpY2stb3ZlcmxheTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjsgLyogQm9qYSBzdHJlbGljZSAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG5cclxuXHJcbi8qIENTUyBtZWRpYSB1cGl0IHphIHByaWtheiB0ZWtzdGEgc2FtbyBuYSBtYW5qaW0gZWtyYW5pbWEgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNsaWNrLW92ZXJsYXkge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogU2FrcmlqdGUgdGVrc3QgbmEgdmXEh2ltIGVrcmFuaW1hICovXHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbi5idC10b3AyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG53aWR0aDogMTgwcHg7IC8qIFByb21pamVuaXRlIMWhaXJpbnUgcHJlbWEgcG90cmViaSAqL1xyXG5oZWlnaHQ6IDEwMHB4OyAvKiBQcm9taWplbml0ZSB2aXNpbnUgcHJlbWEgcG90cmViaSAqL1xyXG5ib3JkZXItcmFkaXVzOiAyMHB4OyAvKiBQcm9taWplbml0ZSByYWRpanVzIGl2aWNhIHByZW1hIHBvdHJlYmkgKi9cclxucGFkZGluZzogMDsgLyogVWtsb25pdGUgdW51dGFybmppIHBhZGRpbmcgYWtvIGdhIGltYSAqL1xyXG56LWluZGV4OiAtMTsgLyogUG9zdGF2aXRlIHBvxI1ldG51IHZyaWplZG5vc3Qgei1pbmRleC1hIG5hIG5pc2t1IHZyaWplZG5vc3QgKi9cclxuXHJcbn1cclxuXHJcbi5idC10b3AyLnNob3cge1xyXG4gIG9wYWNpdHk6IDE7IC8qIFByaWthxb5pIGR1Z21lIGthZGEgamUgdmlkbGppdm8gKi9cclxuICB6LWluZGV4OiA5OTk7IC8qIFBvc3Rhdml0ZSB2ZcSHdSB2cmlqZWRub3N0IHotaW5kZXgtYSBvZCBkcnVnaWggZWxlbWVuYXRhICovXHJcblxyXG59XHJcblxyXG4uc2xpa2Ege1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBQcmlsYWdvZGl0ZSDFoWlyaW51IGkgdmlzaW51IHNsaWtlIHByZW1hIHBvdHJlYmkgKi9cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmV4aXQtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOHB4OyAvKiBQcm9taWplbml0ZSBwb2xvxb5haiBwcmVtYSBwb3RyZWJpICovXHJcbiAgcmlnaHQ6IDhweDsgLyogUHJvbWlqZW5pdGUgcG9sb8W+YWogcHJlbWEgcG90cmViaSAqL1xyXG4gIGZvbnQtc2l6ZTogMjBweDsgLyogUHJvbWlqZW5pdGUgdmVsacSNaW51IGlrb25lIHByZW1hIHBvdHJlYmkgKi9cclxuICBjb2xvcjogcmdiKDAsIDAsIDApOyAvKiBQcm9taWplbml0ZSBib2p1IGlrb25lIHByZW1hIHBvdHJlYmkgKi9cclxuICBkaXNwbGF5OmZsZXg7IC8qIFBvxI1ldG5vIHNha3JpanRlIGlrb251ICovXHJcbn1cclxuXHJcbi5idC10b3AyOmhvdmVyIC5leGl0LWljb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBQcmlrYcW+aXRlIGlrb251IGthZGEga29yaXNuaWsgcHJlxJFlIG1pxaFlbSBwcmVrbyBidXR0b25hICovXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.css'],
            }]
    }], function () { return [{ type: _blog_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceblogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', []]
        }] }); })();


/***/ }),

/***/ "jYeG":
/*!***************************************************!*\
  !*** ./src/app/apps/blog/blog-service.service.ts ***!
  \***************************************************/
/*! exports provided: ServiceblogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceblogService", function() { return ServiceblogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _blog_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-data */ "Hhwx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ServiceblogService {
    constructor(http) {
        this.http = http;
        this.Blogs = [];
        this.loginStatusService = false;
        this.detailId = -1;
        this.showEdit = false;
    }
    getBlog() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_blog_data__WEBPACK_IMPORTED_MODULE_2__["blogs"]);
    }
    addPost(bl) {
        this.Blogs.splice(0, 0, bl);
    }
    deletePost(id) {
        this.Blogs = this.Blogs.filter(b => b.id !== id);
    }
}
ServiceblogService.ɵfac = function ServiceblogService_Factory(t) { return new (t || ServiceblogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ServiceblogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServiceblogService, factory: ServiceblogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceblogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jbSb":
/*!***************************************************!*\
  !*** ./src/app/apps/booking/booking.component.ts ***!
  \***************************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_reservation_email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/reservation/email.service */ "8b/T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/footer/footer.component */ "LsfF");







function BookingComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter your name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingComponent_div_26_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0 == null ? null : _r0.errors == null ? null : _r0.errors.required);
} }
function BookingComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingComponent_div_32_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a valid phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingComponent_div_32_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookingComponent_div_32_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2 == null ? null : _r2.errors == null ? null : _r2.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2 == null ? null : _r2.errors == null ? null : _r2.errors.pattern);
} }
function BookingComponent_div_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter your email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingComponent_div_38_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingComponent_div_38_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookingComponent_div_38_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4 == null ? null : _r4.errors == null ? null : _r4.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4 == null ? null : _r4.errors == null ? null : _r4.errors.pattern);
} }
function BookingComponent_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter your type of vehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingComponent_div_44_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6 == null ? null : _r6.errors == null ? null : _r6.errors.required);
} }
function BookingComponent_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter number of guests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingComponent_div_50_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a valid number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingComponent_div_50_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookingComponent_div_50_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8 == null ? null : _r8.errors == null ? null : _r8.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8 == null ? null : _r8.errors == null ? null : _r8.errors.pattern);
} }
function BookingComponent_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter check in date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingComponent_div_56_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10 == null ? null : _r10.errors == null ? null : _r10.errors.required);
} }
function BookingComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check In date cannot be after Check Out date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingComponent_div_63_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter check out date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingComponent_div_63_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13 == null ? null : _r13.errors == null ? null : _r13.errors.required);
} }
function BookingComponent_div_99_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please fill in the required fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingComponent_div_99_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.errors == null ? null : _r0.errors.required) || (_r4 == null ? null : _r4.errors == null ? null : _r4.errors.required) || (_r2 == null ? null : _r2.errors == null ? null : _r2.errors.required) || (_r6 == null ? null : _r6.errors == null ? null : _r6.errors.required) || (_r8 == null ? null : _r8.errors == null ? null : _r8.errors.required));
} }
const _c0 = function () { return { standalone: true }; };
class BookingComponent {
    constructor(emailService, router) {
        this.emailService = emailService;
        this.router = router;
        this.emailForm = {
            to: 'didamujezin@gmail.com',
            formData: {
                Name: '',
                PhoneNumber: '',
                Email: '',
                TypeOfVehicle: '',
                CheckBox1: false,
                CheckBox2: false,
                NumberOfGuests: '',
                CheckIn: '',
                CheckOut: '',
                Message: '',
                TypeOfCamping: ''
            }
        };
        this.missingFields = false;
        this.dateError = false;
        this.formSubmitted = false;
    }
    submitForm() {
        this.formSubmitted = true;
        this.sendReservationEmail(); // Ovdje možete pozvati funkciju koja šalje email
    }
    sendReservationEmail() {
        this.emailService.sendEmail(this.emailForm).subscribe(response => {
            console.log('Email sent successfully', response);
            // Nakon uspješnog slanja emaila, preusmjeri korisnika na drugu stranicu
            this.router.navigateByUrl('/successful-reservation');
        }, error => {
            console.error('Error sending email:', error);
        });
    }
    updateTypeOfCamping(event) {
        this.emailForm.formData.TypeOfCamping = event.target.value;
    }
    checkDates() {
        const checkInDate = new Date(this.emailForm.formData.CheckIn);
        const checkOutDate = new Date(this.emailForm.formData.CheckOut);
        // Provjera jesu li datumi ispravni
        if (checkInDate > checkOutDate) {
            this.dateError = true;
        }
        else {
            this.dateError = false;
        }
    }
    isSubmitDisabled() {
        return (this.emailForm.formData.Name === ''
            || this.emailForm.formData.Email === ''
            || this.emailForm.formData.PhoneNumber === ''
            || this.emailForm.formData.TypeOfVehicle === ''
            || this.emailForm.formData.NumberOfGuests === '');
    }
    checkFields() {
        this.missingFields = !(this.emailForm.formData.Name &&
            this.emailForm.formData.PhoneNumber &&
            this.emailForm.formData.Email &&
            this.emailForm.formData.TypeOfVehicle &&
            this.emailForm.formData.NumberOfGuests);
    }
    ngOnInit() {
        this.checkFields();
    }
}
BookingComponent.ɵfac = function BookingComponent_Factory(t) { return new (t || BookingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_reservation_email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BookingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingComponent, selectors: [["app-booking"]], decls: 101, vars: 35, consts: [[1, "main"], [1, "static-slider-head", 2, "background-image", "url(assets/images/innerpage/reservation.jpg)", "position", "relative", "height", "60vh"], [1, "container", 2, "position", "absolute", "bottom", "0", "left", "50%", "transform", "translateX(-50%)", "width", "100%"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-4", "align-self-center", "text-center", "no-trans"], [1, "titlebooking"], [1, "main2"], [1, "container2"], [1, "row"], [1, "col-md-6", "col-sm-12", "text-md-right"], [1, "panel", "right-panel"], [1, "content"], [1, "title2", 2, "font-family", "Kanit, sans-serif", "text-align", "center", "margin-top", "30px"], ["src", "assets/images/landingpage/pricess.png", "alt", "Image 3", 1, "img-fluid", "rounded-image"], [1, "col-md-6", "col-sm-12", "text-md-left"], [1, "signin-signup"], ["action", "", "method", "POST", 1, "sign-in-form"], [1, "title2", 2, "font-family", "Kanit, sans-serif", "text-align", "center"], [1, "input-field"], ["for", "name"], ["type", "text", "required", "", "value", "", "name", "Name", "id", "name", 1, "ng-touched", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["name", "ngModel"], [4, "ngIf"], ["for", "phoneNumber"], ["type", "text", "required", "", "pattern", "(\\+[0-9]+)|([0-9]+)", "name", "PhoneNumber", "id", "phoneNumber", 1, "ng-touched", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["phoneNumber", "ngModel"], ["for", "email"], ["type", "email", "required", "", "pattern", "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}", "name", "Email", "id", "email", 1, "ng-touched", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["email", "ngModel"], ["for", "typeOfVehicle"], ["type", "text", "required", "", "name", "typeOfVehicle", "id", "typeOfVehicle", 1, "ng-touched", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["typeOfVehicle", "ngModel"], ["for", "numberOfGuests"], ["type", "text", "required", "", "name", "NumberOfGuests", "id", "numberOfGuests", "pattern", "\\d+", 1, "ng-touched", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["numberOfGuests", "ngModel"], ["for", "checkIn"], ["type", "date", "required", "", "id", "checkIn", "name", "checkIn", "placeholder", "Check In", 1, "ng-touched", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["checkIn", "ngModel"], ["class", "error-message", 4, "ngIf"], ["for", "checkOut"], ["type", "date", "required", "", "id", "checkOut", "name", "checkOut", "placeholder", "Check Out", 1, "ng-touched", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["checkOut", "ngModel"], ["for", "additional"], [1, "mb-4"], [1, "custom-control", "custom-checkbox", "mb-2.5", "last:mb-0"], ["id", "fid_preview_checkboxes_option_2ED14DD9-4A0E-4FCD-BB4A-37759E6CC047", "name", "option_checkboxes_option_2ED14DD9-4A0E-4FCD-BB4A-37759E6CC047", "type", "checkbox", "value", "place_holder_option_1", 1, "custom-control-input", "fb-builder-checkbox", "sr-only", 3, "ngModel", "ngModelChange"], ["for", "fid_preview_checkboxes_option_2ED14DD9-4A0E-4FCD-BB4A-37759E6CC047", 1, "custom-control-label", "relative", "flex", "cursor-pointer", "text-base", "text-black"], [1, "absolute", "left-0", "top-0", "flex", "h-full", "w-full", "items-center", "justify-center", "rounded", "opacity-0"], ["id", "fid_preview_checkboxes_option_456E49C0-0296-40D6-9392-891ED69A2B04", "name", "option_checkboxes_option_456E49C0-0296-40D6-9392-891ED69A2B04", "type", "checkbox", "value", "place_holder_option_2", 1, "custom-control-input", "fb-builder-checkbox", "sr-only", 3, "ngModel", "ngModelChange"], ["for", "fid_preview_checkboxes_option_456E49C0-0296-40D6-9392-891ED69A2B04", 1, "custom-control-label", "relative", "flex", "cursor-pointer", "text-base", "text-black"], ["for", "typeOfCamping"], ["id", "typeOfCamping", "name", "TypeOfCamping", 1, "styled-select", "w-full", "rounded", "border", "border-stroke", "bg-white", "px-5", "py-3", "text-base", "text-black", "outline-none", "focus:border-primary", 3, "ngModel", "ngModelChange"], ["value", "motohome"], ["value", "van"], ["value", "caravan"], ["value", "tent"], ["value", "tent-car"], ["value", "bungalow"], [1, "input-message"], ["for", "message"], ["id", "message", "name", "message", 1, "custom-textarea", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "SUBMIT", 1, "btn", 3, "disabled", "click"], [1, "error-message"]], template: function BookingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "RESERVATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Camping site reservation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Secure your spot now for an unforgettable experience \u2013 fill out the reservation form below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingComponent_Template_input_ngModelChange_24_listener($event) { return ctx.emailForm.formData.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BookingComponent_div_26_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingComponent_Template_input_ngModelChange_30_listener($event) { return ctx.emailForm.formData.PhoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, BookingComponent_div_32_Template, 3, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingComponent_Template_input_ngModelChange_36_listener($event) { return ctx.emailForm.formData.Email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, BookingComponent_div_38_Template, 3, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Type of vehicle:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingComponent_Template_input_ngModelChange_42_listener($event) { return ctx.emailForm.formData.TypeOfVehicle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, BookingComponent_div_44_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Number of guests:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingComponent_Template_input_ngModelChange_48_listener($event) { return ctx.emailForm.formData.NumberOfGuests = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, BookingComponent_div_50_Template, 3, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Check In:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingComponent_Template_input_ngModelChange_54_listener($event) { return ctx.emailForm.formData.CheckIn = $event; })("ngModelChange", function BookingComponent_Template_input_ngModelChange_54_listener() { return ctx.checkDates(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, BookingComponent_div_56_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, BookingComponent_div_57_Template, 2, 0, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Check Out:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingComponent_Template_input_ngModelChange_61_listener($event) { return ctx.emailForm.formData.CheckOut = $event; })("ngModelChange", function BookingComponent_Template_input_ngModelChange_61_listener() { return ctx.checkDates(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, BookingComponent_div_63_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Additional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingComponent_Template_input_ngModelChange_69_listener($event) { return ctx.emailForm.formData.CheckBox1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Pets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingComponent_Template_input_ngModelChange_74_listener($event) { return ctx.emailForm.formData.CheckBox2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Electricity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Type of Camping:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "select", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingComponent_Template_select_ngModelChange_81_listener($event) { return ctx.emailForm.formData.TypeOfCamping = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Motohome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Van");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Caravan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Tent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Tent-Car");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Bungalow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Message:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "textarea", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingComponent_Template_textarea_ngModelChange_97_listener($event) { return ctx.emailForm.formData.Message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingComponent_Template_input_click_98_listener() { return ctx.sendReservationEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, BookingComponent_div_99_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.Name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.invalid) && ((_r0 == null ? null : _r0.dirty) || (_r0 == null ? null : _r0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.PhoneNumber)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r2 == null ? null : _r2.invalid) && ((_r2 == null ? null : _r2.dirty) || (_r2 == null ? null : _r2.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.Email)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r4 == null ? null : _r4.invalid) && ((_r4 == null ? null : _r4.dirty) || (_r4 == null ? null : _r4.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.TypeOfVehicle)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r6 == null ? null : _r6.invalid) && ((_r6 == null ? null : _r6.dirty) || (_r6 == null ? null : _r6.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.NumberOfGuests)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r8 == null ? null : _r8.invalid) && ((_r8 == null ? null : _r8.dirty) || (_r8 == null ? null : _r8.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.CheckIn)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r10 == null ? null : _r10.invalid) && ((_r10 == null ? null : _r10.dirty) || (_r10 == null ? null : _r10.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dateError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.CheckOut)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r13 == null ? null : _r13.invalid) && ((_r13 == null ? null : _r13.dirty) || (_r13 == null ? null : _r13.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.CheckBox1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.CheckBox2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.TypeOfCamping);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.Message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isSubmitDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0 == null ? null : _r0.invalid) && ((_r0 == null ? null : _r0.dirty) || (_r0 == null ? null : _r0.touched)) || (_r4 == null ? null : _r4.invalid) && ((_r4 == null ? null : _r4.dirty) || (_r4 == null ? null : _r4.touched)) || (_r2 == null ? null : _r2.invalid) && ((_r2 == null ? null : _r2.dirty) || (_r2 == null ? null : _r2.touched)) || (_r6 == null ? null : _r6.invalid) && ((_r6 == null ? null : _r6.dirty) || (_r6 == null ? null : _r6.touched)) || (_r8 == null ? null : _r8.invalid) && ((_r8 == null ? null : _r8.dirty) || (_r8 == null ? null : _r8.touched)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".btn[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to right, #2cdd9b 0%, #1dc8cc 100%);\r\n    margin-top: 10px;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    color: white;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    transition: background 0.3s;\r\n  }\r\n  \r\n  .btn[_ngcontent-%COMP%]:hover {\r\n    background: linear-gradient(to right, #2cb99b 0%, #1cb8cc 100%);\r\n  }\r\n  \r\n  .btn[_ngcontent-%COMP%]:active {\r\n    background: linear-gradient(to right, #1a8f6f 0%, #0f7d8b 100%);\r\n  }\r\n  \r\n  .btn[_ngcontent-%COMP%]:not(:active) {\r\n    background: linear-gradient(to right, #2cdd9b 0%, #1dc8cc 100%);\r\n  }\r\n  \r\n  .styled-select[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-left: 10px;\r\n}\r\n  \r\n  .container2[_ngcontent-%COMP%] {\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    font-family: 'Kanit', sans-serif;\r\n    \r\n    padding: 0rem;\r\n    margin-inline: 0rem;\r\n    margin-bottom: 20px; \r\n}\r\n  \r\n  .row[_ngcontent-%COMP%] {\r\n    margin-bottom: 0; \r\n}\r\n  \r\n  .signin-signup[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    padding: 2rem;\r\n    width: 100%;\r\n}\r\n  \r\n  .sign-in-form[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    max-width: 400px;\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n}\r\n  \r\n  input[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    width: 100%;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    \r\n    background: none;\r\n     border: none;\r\n    outline: none;\r\n    border-bottom: 1px solid #bbb;\r\n\r\n}\r\n  \r\n  .img-fluid[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n  \r\n  .custom-control.custom-checkbox[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n}\r\n  \r\n  .custom-control-label[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n}\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    .container2[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .col-md-6[_ngcontent-%COMP%] {\r\n        order: -1;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .img-fluid[_ngcontent-%COMP%] {\r\n        margin-top: 0;\r\n    }\r\n}\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    .custom-control.custom-checkbox[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        align-items: baseline; \r\n    }\r\n\r\n    .custom-control-input[_ngcontent-%COMP%] {\r\n        margin-right: 5px; \r\n    }\r\n\r\n    .custom-control-label[_ngcontent-%COMP%] {\r\n        flex: 1;\r\n        display: flex; \r\n    }\r\n}\r\n  \r\n  .static-slider-head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n}\r\n  \r\n  .titlebooking[_ngcontent-%COMP%]{\r\n    font-family: \"Kanit\", sans-serif!important;\r\n    color: white!important;\r\n}\r\n  \r\n  span[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n}\r\n  \r\n  @media screen and (min-width: 769px) {\r\n    .sign-in-form[_ngcontent-%COMP%] {\r\n        max-width: 80%;\r\n        max-height: 100%;\r\n        height: auto; \r\n    }\r\n\r\n    .container2[_ngcontent-%COMP%] {\r\n        \r\n        display: inline;\r\n        align-items: flex-start; \r\n        margin-bottom: 20px; \r\n    }\r\n\r\n    .row[_ngcontent-%COMP%] {\r\n        flex-direction: row; \r\n    }\r\n\r\n    .col-md-6[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px; \r\n    }\r\n}\r\n  \r\n  label[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-bottom: 0.5rem;\r\n    font-size: 20px;\r\n    margin-top: 0.5rem;\r\n}\r\n  \r\n  .styled-select[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 50px;\r\n    margin-left: 0rem!important;\r\n    \r\n    padding: 0px!important;\r\n    background: none;\r\n    border: none;\r\n    outline: none;\r\n    border: 1px solid #bbb!important;\r\n  }\r\n  \r\n  \r\n  \r\n  .custom-textarea[_ngcontent-%COMP%] {\r\n    \r\n    background: none;\r\n  border: none;\r\n  outline: none;\r\n  border: 1px solid #bbb;\r\n    width: 100%; \r\n    height: 150px; \r\n  }\r\n  \r\n  .input-message[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column; \r\n  }\r\n  \r\n  .error-message[_ngcontent-%COMP%]{\r\n    color: #ca0000!important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSwrREFBK0Q7SUFDL0QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsK0RBQStEO0VBQ2pFOztFQUVBO0lBQ0UsK0RBQStEO0VBQ2pFOztFQUVBO0lBQ0UsK0RBQStEO0VBQ2pFOztFQUdGO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7RUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0VBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0VBR0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFdBQVc7QUFDZjs7RUFFQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7RUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEI7eUJBQ3FCO0lBQ3JCLGdCQUFnQjtLQUNmLFlBQVk7SUFDYixhQUFhO0lBQ2IsNkJBQTZCOztBQUVqQzs7RUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztFQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztFQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztFQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksU0FBUztRQUNULG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7RUFHQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLE9BQU87UUFDUCxhQUFhO0lBQ2pCO0FBQ0o7O0VBRUE7SUFDSSxlQUFlO0FBQ25COztFQUVBO0lBQ0ksMENBQTBDO0lBQzFDLHNCQUFzQjtBQUMxQjs7RUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7RUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0kscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0VBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0VBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQjttQ0FDK0I7SUFDL0Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdDQUFnQztFQUNsQzs7RUFFRDs7O0lBR0c7O0VBRUY7SUFDRTttQ0FDK0I7SUFDL0IsZ0JBQWdCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCIiwiZmlsZSI6ImJvb2tpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJjZGQ5YiAwJSwgIzFkYzhjYyAxMDAlKTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLmJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyY2I5OWIgMCUsICMxY2I4Y2MgMTAwJSk7XHJcbiAgfVxyXG5cclxuICAuYnRuOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxYThmNmYgMCUsICMwZjdkOGIgMTAwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG46bm90KDphY3RpdmUpIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJjZGQ5YiAwJSwgIzFkYzhjYyAxMDAlKTtcclxuICB9XHJcbiAgXHJcblxyXG4uc3R5bGVkLXNlbGVjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIyIHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdLYW5pdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAvKm1pbi1oZWlnaHQ6IDE1MHZoOyovXHJcbiAgICBwYWRkaW5nOiAwcmVtO1xyXG4gICAgbWFyZ2luLWlubGluZTogMHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IFxyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7IFxyXG59XHJcblxyXG5cclxuLnNpZ25pbi1zaWdudXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNpZ24taW4tZm9ybSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8qYm9yZGVyOiAycHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7Ki9cclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiO1xyXG5cclxufVxyXG5cclxuLmltZy1mbHVpZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wuY3VzdG9tLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbC1sYWJlbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRhaW5lcjIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLW1kLTYge1xyXG4gICAgICAgIG9yZGVyOiAtMTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWctZmx1aWQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmN1c3RvbS1jb250cm9sLmN1c3RvbS1jaGVja2JveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7IFxyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b20tY29udHJvbC1pbnB1dCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IFxyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b20tY29udHJvbC1sYWJlbCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIH1cclxufVxyXG5cclxuLnN0YXRpYy1zbGlkZXItaGVhZCAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4udGl0bGVib29raW5ne1xyXG4gICAgZm9udC1mYW1pbHk6IFwiS2FuaXRcIiwgc2Fucy1zZXJpZiFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG59XHJcbnNwYW57XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gICAgLnNpZ24taW4tZm9ybSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87IFxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXIyIHtcclxuICAgICAgICAvKm1pbi1oZWlnaHQ6IDE1MHZoOyovXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyBcclxuICAgIH1cclxuXHJcbiAgICAucm93IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICAgIH1cclxuXHJcbiAgICAuY29sLW1kLTYge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IFxyXG4gICAgfVxyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4uc3R5bGVkLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcmVtIWltcG9ydGFudDtcclxuICAgIC8qYm9yZGVyOiAycHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHghaW1wb3J0YW50OyovXHJcbiAgICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gLyoubWItNHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IWltcG9ydGFudDtcclxuICB9Ki9cclxuXHJcbiAgLmN1c3RvbS10ZXh0YXJlYSB7XHJcbiAgICAvKmJvcmRlcjogMnB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IWltcG9ydGFudDsqL1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgaGVpZ2h0OiAxNTBweDsgXHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dC1tZXNzYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICB9XHJcblxyXG4gIC5lcnJvci1tZXNzYWdle1xyXG4gICAgY29sb3I6ICNjYTAwMDAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-booking',
                templateUrl: './booking.component.html',
                styleUrls: ['./booking.component.css']
            }]
    }], function () { return [{ type: src_app_reservation_email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "jfhW":
/*!**********************************************************************************!*\
  !*** ./src/app/apps/about/About-Components/top-content/top-content.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TopContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopContentComponent", function() { return TopContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class TopContentComponent {
    constructor() {
        this.imagePath = '../assets/images/innerpage/mostar.jpg';
        this.imagePath2 = '../assets/images/innerpage/nature.jpg';
    }
    ngOnInit() {
    }
    redirectToLink() {
        window.location.href = 'https://g.co/kgs/1TFBSGE';
    }
}
TopContentComponent.ɵfac = function TopContentComponent_Factory(t) { return new (t || TopContentComponent)(); };
TopContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopContentComponent, selectors: [["app-top-content"]], decls: 18, vars: 1, consts: [[1, "row", "wrap-feature-22"], [1, "col-lg-12", "no-trans", "text-center"], [1, "text-box"], [1, "font-light", 2, "font-size", "24px", "margin-top", "40px", "margin-bottom", "40px", "color", "#000000", "font-weight", "bold"], [2, "font-size", "18px", "margin-bottom", "40px", "text-align", "justify"], ["data-aos", "flip-up", "data-aos-duration", "1200", 1, "col-lg-12", "text-center"], [1, "row"], [1, "col-md-12"], ["alt", "campingneretva", 1, "rounded", "img-responsive", 3, "src"], [1, "col-md-12", "m-t-20", 2, "margin-bottom", "40px"], ["data-toggle", "collapse", "routerLink", "/gallery", 1, "btn", "btn-success-gradiant", "btn-md", "btn-arrow", "font-14"], [1, "ti-arrow-right"], [1, "col-md-12", "text-center", "mt-3", 2, "margin-top", "-30px!important"], ["src", "assets/images/innerpage/googler.png", "alt", "Slika", 1, "img-fluid", "mx-auto", 2, "cursor", "pointer", 3, "click"]], template: function TopContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Escape from everyday life to the tranquility of nature ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Along the coast of the coldest river in Europe and one of the most beautiful rivers in Europe, Neretva in Mostar inside the city is the location of the property, which is at the entrance to town from the North. The campsite is only 3 km from the old town (Old Bridge), 1 km from the railway, 100 m from the gas station, and 500 m from the largest shopping mall in the city. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View gallery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopContentComponent_Template_img_click_17_listener() { return ctx.redirectToLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".text-info[_ngcontent-%COMP%]{\r\n    font-family: \"Kanit\", sans-serif;\r\n    color: #28a745;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsY0FBYztBQUNsQiIsImZpbGUiOiJ0b3AtY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtaW5mb3tcclxuICAgIGZvbnQtZmFtaWx5OiBcIkthbml0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzI4YTc0NTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-content',
                templateUrl: './top-content.component.html',
                styleUrls: ['./top-content.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nLfN":
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js ***!
  \*********************************************************************/
/*! exports provided: Platform, PlatformModule, _getShadowRoot, _supportsShadowDom, getRtlScrollAxisType, getSupportedInputTypes, normalizePassiveListenerOptions, supportsPassiveEventListeners, supportsScrollBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getShadowRoot", function() { return _getShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function() { return _supportsShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function() { return getRtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function() { return normalizePassiveListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.

let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    hasV8BreakIterator = (typeof Intl !== 'undefined' && Intl.v8BreakIterator);
}
catch (_a) {
    hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
class Platform {
    constructor(_platformId) {
        this._platformId = _platformId;
        // We want to use the Angular platform check because if the Document is shimmed
        // without the navigator, the following checks will fail. This is preferred because
        // sometimes the Document may be shimmed without the user's knowledge or intention
        /** Whether the Angular application is being rendered in the browser. */
        this.isBrowser = this._platformId ?
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /** Whether the current browser is Microsoft Edge. */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /** Whether the current rendering engine is Microsoft Trident. */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        /** Whether the current rendering engine is Blink. */
        this.BLINK = this.isBrowser && (!!(window.chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        /** Whether the current rendering engine is WebKit. */
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /** Whether the current platform is Apple iOS. */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window);
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        /** Whether the current browser is Firefox. */
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /** Whether the current platform is Android. */
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        /** Whether the current browser is Safari. */
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
}
Platform.ɵfac = function Platform_Factory(t) { return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
Platform.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); }, token: Platform, providedIn: "root" });
Platform.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Platform, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class PlatformModule {
}
PlatformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlatformModule });
PlatformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlatformModule_Factory(t) { return new (t || PlatformModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Cached result Set of input types support by the current browser. */
let supportedInputTypes;
/** Types of `<input>` that *might* be supported. */
const candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/** @returns The input types supported by this browser. */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    let featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(value => {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Cached result of whether the user's browser supports passive event listeners. */
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
                get: () => supportsPassiveEvents = true
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param options Object to be normalized.
 */
function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */
let rtlScrollAxisType;
/** Cached result of the check that indicates whether the browser supports scroll behaviors. */
let scrollBehaviorSupported;
/** Check whether the browser supports scroll behaviors. */
function supportsScrollBehavior() {
    if (scrollBehaviorSupported == null) {
        // If we're not in the browser, it can't be supported. Also check for `Element`, because
        // some projects stub out the global `document` during SSR which can throw us off.
        if (typeof document !== 'object' || !document || typeof Element !== 'function' || !Element) {
            scrollBehaviorSupported = false;
            return scrollBehaviorSupported;
        }
        // If the element can have a `scrollBehavior` style, we can be sure that it's supported.
        if ('scrollBehavior' in document.documentElement.style) {
            scrollBehaviorSupported = true;
        }
        else {
            // At this point we have 3 possibilities: `scrollTo` isn't supported at all, it's
            // supported but it doesn't handle scroll behavior, or it has been polyfilled.
            const scrollToFunction = Element.prototype.scrollTo;
            if (scrollToFunction) {
                // We can detect if the function has been polyfilled by calling `toString` on it. Native
                // functions are obfuscated using `[native code]`, whereas if it was overwritten we'd get
                // the actual function source. Via https://davidwalsh.name/detect-native-function. Consider
                // polyfilled functions as supporting scroll behavior.
                scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
            }
            else {
                scrollBehaviorSupported = false;
            }
        }
    }
    return scrollBehaviorSupported;
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 */
function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return 0 /* NORMAL */;
    }
    if (rtlScrollAxisType == null) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        const scrollContainer = document.createElement('div');
        const containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        const content = document.createElement('div');
        const contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = 0 /* NORMAL */;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? 1 /* NEGATED */ : 2 /* INVERTED */;
        }
        scrollContainer.parentNode.removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let shadowDomIsSupported;
/** Checks whether the user's browser support Shadow DOM. */
function _supportsShadowDom() {
    if (shadowDomIsSupported == null) {
        const head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
    }
    return shadowDomIsSupported;
}
/** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */
function _getShadowRoot(element) {
    if (_supportsShadowDom()) {
        const rootNode = element.getRootNode ? element.getRootNode() : null;
        // Note that this should be caught by `_supportsShadowDom`, but some
        // teams have been able to hit this code path on unsupported browsers.
        if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
            return rootNode;
        }
    }
    return null;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=platform.js.map

/***/ }),

/***/ "o9RM":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class VideoComponent {
    constructor() { }
    ngOnInit() {
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], decls: 3, vars: 0, consts: [[1, "background-container"], [1, "video-container"], ["id", "youtube-player", "width", "100%", "height", "100%", "src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.youtube.com/embed/09pfnX0seH8?autoplay=1&loop=1&controls=0&showinfo=0&rel=0&mute=1&modestbranding=1"), "frameborder", "0", "allowfullscreen", ""]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".background-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 0;\r\n    padding-bottom: 56.25%; \r\n    overflow: hidden;\r\n  }\r\n  \r\n  .background-image[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n  }\r\n  \r\n  .video-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-shadow: 0 9px 20px rgba(91, 177, 73, 0.1); \r\n    border-radius: 10px; \r\n  }\r\n  \r\n  .video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    height: 80%;\r\n    border-radius: 20px; \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxzQkFBc0IsRUFBRSwrQ0FBK0M7SUFDdkUsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDZDQUE2QyxFQUFFLGdCQUFnQjtJQUMvRCxtQkFBbUIsRUFBRSxzQkFBc0I7RUFDN0M7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQixFQUFFLHFDQUFxQztFQUM1RCIsImZpbGUiOiJ2aWRlby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDU2LjI1JTsgLyogMTY6OSBhc3BlY3QgcmF0aW8gZm9yIHRoZSBiYWNrZ3JvdW5kIGltYWdlICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgXHJcbiAgLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCA5cHggMjBweCByZ2JhKDkxLCAxNzcsIDczLCAwLjEpOyAvKiBEb2RhaiBzZW5rdSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgLyogWmFvYmxqZW5pIGNvc2tvdmkgKi9cclxuICB9XHJcbiAgXHJcbiAgLnZpZGVvLWNvbnRhaW5lciBpZnJhbWUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgLyogRG9kYWogemFvYmxqZW5qZSBpZnJhbWUgZWxlbWVudHUgKi9cclxuICB9XHJcbiAgXHJcbiAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video',
                templateUrl: './video.component.html',
                styleUrls: ['./video.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=apps-apps-module.js.map