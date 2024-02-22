(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\amujezin\Downloads\CampingNeretva\src\main.ts */"zUnb");


/***/ }),

/***/ "0jlr":
/*!***********************************************!*\
  !*** ./src/app/scroll-to-footer.directive.ts ***!
  \***********************************************/
/*! exports provided: ScrollToFooterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToFooterDirective", function() { return ScrollToFooterDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScrollToFooterDirective {
    constructor() { }
}
ScrollToFooterDirective.ɵfac = function ScrollToFooterDirective_Factory(t) { return new (t || ScrollToFooterDirective)(); };
ScrollToFooterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollToFooterDirective, selectors: [["", "appScrollToFooter", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollToFooterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appScrollToFooter]'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "78Gk":
/*!********************************************************!*\
  !*** ./src/app/gallery-test/gallery-test.component.ts ***!
  \********************************************************/
/*! exports provided: GalleryTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryTestComponent", function() { return GalleryTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gallery-lightbox/gallery-lightbox.component */ "vAhH");



class GalleryTestComponent {
    constructor() {
        this.data = [
            {
                imageSrc: 'assets/images/innerpage/camp.jpg',
                imageAlt: '1'
            },
            {
                imageSrc: 'assets/images/innerpage/campcamp.jpg',
                imageAlt: '2'
            },
            {
                imageSrc: 'assets/images/innerpage/campparking.jpg',
                imageAlt: '3'
            },
            {
                imageSrc: 'assets/images/innerpage/nature.jpg',
                imageAlt: '4'
            },
            {
                imageSrc: 'assets/images/innerpage/last.jpg',
                imageAlt: '5'
            },
            {
                imageSrc: 'assets/images/innerpage/nature1.jpg',
                imageAlt: '6'
            },
            {
                imageSrc: 'assets/images/innerpage/night1.jpg',
                imageAlt: '7'
            },
            {
                imageSrc: 'assets/images/innerpage/old.jpg',
                imageAlt: '8'
            },
            {
                imageSrc: 'assets/images/innerpage/oldtimer.jpg',
                imageAlt: '9'
            },
            {
                imageSrc: 'assets/images/innerpage/quad.jpg',
                imageAlt: '10'
            },
            {
                imageSrc: 'assets/images/innerpage/places.JPG',
                imageAlt: '11'
            },
            {
                imageSrc: 'assets/images/innerpage/tentbeach.jpg',
                imageAlt: '12'
            },
            {
                imageSrc: 'assets/images/innerpage/wooden.jpg',
                imageAlt: '12'
            },
            {
                imageSrc: 'assets/images/innerpage/camp2.jpg',
                imageAlt: '12'
            },
            {
                imageSrc: 'assets/images/innerpage/view.jpg',
                imageAlt: '12'
            },
            {
                imageSrc: 'assets/images/innerpage/bar.jpg',
                imageAlt: '12'
            },
            {
                imageSrc: 'assets/images/innerpage/enjoy.jpg',
                imageAlt: '12'
            },
            {
                imageSrc: 'assets/images/innerpage/ulaz.JPG',
                imageAlt: '12'
            },
            {
                imageSrc: 'assets/images/innerpage/place.JPG',
                imageAlt: '12'
            },
            {
                imageSrc: 'assets/images/innerpage/car.JPG',
                imageAlt: '12'
            },
            {
                imageSrc: 'assets/images/innerpage/carr.JPG',
                imageAlt: '12'
            },
            {
                imageSrc: 'assets/images/innerpage/dronedrone.JPG',
                imageAlt: '12'
            },
            {
                imageSrc: 'assets/images/innerpage/drone2.JPG',
                imageAlt: '12'
            },
            {
                imageSrc: 'assets/images/innerpage/car2.JPG',
                imageAlt: '12'
            },
            {
                imageSrc: 'assets/images/innerpage/sunsun.jpg',
                imageAlt: '12'
            }
        ];
    }
    ngOnInit() {
    }
}
GalleryTestComponent.ɵfac = function GalleryTestComponent_Factory(t) { return new (t || GalleryTestComponent)(); };
GalleryTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryTestComponent, selectors: [["app-gallery-test"]], decls: 1, vars: 2, consts: [[3, "galleryData", "showCount"]], template: function GalleryTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-gallery-lightbox", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("galleryData", ctx.data)("showCount", true);
    } }, directives: [_gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_1__["GalleryLightboxComponent"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,600,700,900&display=swap');\r\n*[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n}\r\n[_nghost-%COMP%] {\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnktdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhGQUE4RjtBQUM5RjtJQUNJLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakIiLCJmaWxlIjoiZ2FsbGVyeS10ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDYwMCw3MDAsOTAwJmRpc3BsYXk9c3dhcCcpO1xyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery-test',
                templateUrl: './gallery-test.component.html',
                styleUrls: ['./gallery-test.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8b/T":
/*!**********************************************!*\
  !*** ./src/app/reservation/email.service.ts ***!
  \**********************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
// email.service.ts




class EmailService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://nodemailer-backend-zm19.onrender.com'; // Promenite na odgovarajući URL vašeg Node.js servera
    }
    sendEmail(emailForm) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post(`${this.baseUrl}/api/sendEmail`, emailForm, { headers });
    }
    sendEmail1(data) {
        return this.http.post(`${this.baseUrl}/send-email`, data);
    }
    sendEmail2(data) {
        return this.http.post(`${this.baseUrl}/send-email`, data);
    }
}
EmailService.ɵfac = function EmailService_Factory(t) { return new (t || EmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EmailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmailService, factory: EmailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "MHc4":
/*!***************************************************!*\
  !*** ./src/app/apps/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 27, vars: 0, consts: [[1, "main"], [1, "static-slider-head", 2, "background-image", "url(assets/images/innerpage/naturee.jpg)", "position", "relative", "height", "60vh"], [1, "container", 2, "position", "absolute", "bottom", "0", "left", "50%", "transform", "translateX(-50%)", "width", "100%"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "align-self-center", "text-center", "no-trans"], [1, "title"], [1, "container", "text-center"], [1, "round-social", "light", "mb-3"], [1, "mb-3"], ["href", "https://www.facebook.com/p/Camping-Neretva-100063102887726/", 1, "link"], [1, "fa", "fa-facebook"], ["href", "https://www.youtube.com/@campingneretva6577", 1, "link"], [1, "fa", "fa-youtube-play"], ["href", "https://www.instagram.com/campingneretva/?hl=en", 1, "link"], [1, "fa", "fa-instagram"], [1, "mb-1"], [1, "fas", "fa-map-marker-alt"], ["href", "https://www.google.com/maps?q=43.3645,17.8159", "target", "_blank"], [1, "fas", "fa-phone"], [1, "mt-3", "copyright"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SOCIAL MEDIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Sjeverni Logor, Mostar 88000, Bosnia & Herzegovina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " +387 61 808 564");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Camping Neretva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".banner-innerpage[_ngcontent-%COMP%] {\r\n    background-size: cover; \r\n    height: 65vh; \r\n  }\r\n\r\n  .round-social[_ngcontent-%COMP%] {\r\n    margin-top: 30px; \r\n  }\r\n\r\n  .footer4[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    line-height: 1.5; \r\n  }\r\n\r\n  .round-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 24px; \r\n  }\r\n\r\n  .round-social[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px; \r\n  }\r\n\r\n  .footer4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    font-size: 16px;  \r\n  }\r\n\r\n  .title[_ngcontent-%COMP%]{\r\n    margin-bottom: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQixFQUFFLHVDQUF1QztJQUMvRCxZQUFZLEVBQUUsd0RBQXdEO0VBQ3hFOztFQUVBO0lBQ0UsZ0JBQWdCLEVBQUUscUVBQXFFO0VBQ3pGOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQixFQUFFLHFDQUFxQztFQUN6RDs7RUFHQTtJQUNFLGVBQWUsRUFBRSw4Q0FBOEM7RUFDakU7O0VBRUE7SUFDRSxtQkFBbUIsRUFBRSxvREFBb0Q7RUFDM0U7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZSxHQUFHLDZDQUE2QztFQUNqRTs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyLWlubmVycGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBpbGkgZHJ1Z2Ugb2Rnb3ZhcmFqdcSHZSB2cmlqZWRub3N0aSAqL1xyXG4gICAgaGVpZ2h0OiA2NXZoOyAvKiBEb2RhanRlIG92dSBsaW5panUga2FrbyBiaXN0ZSBvc2lndXJhbGkgcHVudSB2aXNpbnUgKi9cclxuICB9XHJcblxyXG4gIC5yb3VuZC1zb2NpYWwge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDsgLyogUHJpbGFnb2RpdGUgdnJlZG5vc3QgcHJlbWEgcG90cmViYW1hIGRhIGJpc3RlIGVsaW1pbmlzYWxpIHJhem1hayAqL1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyNCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41OyAvKiBQb3N0YXZpdGUgxb5lbGplbnUgdmVsacSNaW51IGZvbnRhICovXHJcbiAgfVxyXG4gIFxyXG5cclxuICAucm91bmQtc29jaWFsIGEgaSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7IC8qIFBvc3Rhdml0ZSDFvmVsamVudSB2ZWxpxI1pbnUgZm9udGEgemEgaWtvbmUgKi9cclxuICB9XHJcblxyXG4gIC5yb3VuZC1zb2NpYWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogUG9zdGF2aXRlIMW+ZWxqZW5pIHJhem1hayBpc3BvZCBkcnXFoXR2ZW5paCBpa29uYSAqL1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyNCBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7ICAvKiBQb3N0YXZpdGUgxb5lbGplbmkgcmF6bWFrIGlzcG9kIHBhcmFncmFmYSAqL1xyXG4gIH1cclxuXHJcbiAgLnRpdGxle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'blogApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _scroll_to_footer_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scroll-to-footer.directive */ "0jlr");
/* harmony import */ var _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reservation/reservation.component */ "zpWk");
/* harmony import */ var _apps_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apps/contact/contact.component */ "MHc4");
/* harmony import */ var _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gallery-lightbox/gallery-lightbox.component */ "vAhH");
/* harmony import */ var _gallery_test_gallery_test_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gallery-test/gallery-test.component */ "78Gk");
/* harmony import */ var _successful_booking_successful_booking_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./successful-booking/successful-booking.component */ "rJf+");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _scroll_to_footer_directive__WEBPACK_IMPORTED_MODULE_8__["ScrollToFooterDirective"],
        _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_9__["ReservationComponent"],
        _apps_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
        _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_11__["GalleryLightboxComponent"],
        _gallery_test_gallery_test_component__WEBPACK_IMPORTED_MODULE_12__["GalleryTestComponent"],
        _successful_booking_successful_booking_component__WEBPACK_IMPORTED_MODULE_13__["SuccessfulBookingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _scroll_to_footer_directive__WEBPACK_IMPORTED_MODULE_8__["ScrollToFooterDirective"],
                    _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_9__["ReservationComponent"],
                    _apps_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                    _gallery_lightbox_gallery_lightbox_component__WEBPACK_IMPORTED_MODULE_11__["GalleryLightboxComponent"],
                    _gallery_test_gallery_test_component__WEBPACK_IMPORTED_MODULE_12__["GalleryTestComponent"],
                    _successful_booking_successful_booking_component__WEBPACK_IMPORTED_MODULE_13__["SuccessfulBookingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "rJf+":
/*!********************************************************************!*\
  !*** ./src/app/successful-booking/successful-booking.component.ts ***!
  \********************************************************************/
/*! exports provided: SuccessfulBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessfulBookingComponent", function() { return SuccessfulBookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SuccessfulBookingComponent {
    constructor() { }
    ngOnInit() {
    }
}
SuccessfulBookingComponent.ɵfac = function SuccessfulBookingComponent_Factory(t) { return new (t || SuccessfulBookingComponent)(); };
SuccessfulBookingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessfulBookingComponent, selectors: [["app-successful-booking"]], decls: 9, vars: 0, consts: [[1, "main"], [1, "static-slider-head", 2, "background-image", "url(assets/images/landingpage/fire.jpg)", "position", "relative", "height", "100vh", "background-size", "cover", "background-position", "center"], [1, "container", 2, "position", "absolute", "bottom", "0", "left", "50%", "transform", "translateX(-50%)", "width", "100%"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "align-self-center", "text-center", "no-trans"], [1, "title"], [1, "subtitle"]], template: function SuccessfulBookingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "RESERVATION HAS BEEN SENT SUCCESSFULLY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "for confirmation, please wait for the administrator to contact you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".title[_ngcontent-%COMP%] {\r\n    font-size: 3rem; \r\n    margin-bottom: 0; \r\n    line-height: 1; \r\n  }\r\n  \r\n  \r\n  \r\n  @media (max-width: 767px) {\r\n    .title[_ngcontent-%COMP%] {\r\n      font-size: 2rem; \r\n      margin-bottom: 0; \r\n      line-height: 1; \r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3NmdWwtYm9va2luZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZSxFQUFFLCtDQUErQztJQUNoRSxnQkFBZ0IsRUFBRSw0RUFBNEU7SUFDOUYsY0FBYyxFQUFFLDJFQUEyRTtFQUM3Rjs7RUFFQSx5Q0FBeUM7O0VBQ3pDO0lBQ0U7TUFDRSxlQUFlLEVBQUUsK0RBQStEO01BQ2hGLGdCQUFnQixFQUFFLDRFQUE0RTtNQUM5RixjQUFjLEVBQUUsMkVBQTJFO0lBQzdGO0VBQ0YiLCJmaWxlIjoic3VjY2Vzc2Z1bC1ib29raW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzcmVtOyAvKiBQcmlsYWdvZGl0ZSB2ZWxpxI1pbnUgbmFzbG92YSBwcmVtYSBwb3RyZWJpICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwOyAvKiBQb3N0YXZpdGUgZG9uamkgbWFyZ2luIG5hIDAga2FrbyBiaXN0ZSBlbGltaW5pcmFsaSByYXptYWsgaXptZcSRdSByaWplxI1pICovXHJcbiAgICBsaW5lLWhlaWdodDogMTsgLyogUG9zdGF2aXRlIGxpbmUtaGVpZ2h0IG5hIDEga2FrbyBiaXN0ZSBlbGltaW5pcmFsaSByYXptYWsgaXptZcSRdSByZWRvdmEgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogU3RpbG92aSB6YSBuYXNsb3YgbmEgbWFuamltIGVrcmFuaW1hICovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07IC8qIFByaWxhZ29kaXRlIHZlbGnEjWludSBuYXNsb3ZhIHByZW1hIHBvdHJlYmkgemEgbWFuamUgZWtyYW5lICovXHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7IC8qIFBvc3Rhdml0ZSBkb25qaSBtYXJnaW4gbmEgMCBrYWtvIGJpc3RlIGVsaW1pbmlyYWxpIHJhem1hayBpem1lxJF1IHJpamXEjWkgKi9cclxuICAgICAgbGluZS1oZWlnaHQ6IDE7IC8qIFBvc3Rhdml0ZSBsaW5lLWhlaWdodCBuYSAxIGtha28gYmlzdGUgZWxpbWluaXJhbGkgcmF6bWFrIGl6bWXEkXUgcmVkb3ZhICovXHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessfulBookingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-successful-booking',
                templateUrl: './successful-booking.component.html',
                styleUrls: ['./successful-booking.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vAhH":
/*!****************************************************************!*\
  !*** ./src/app/gallery-lightbox/gallery-lightbox.component.ts ***!
  \****************************************************************/
/*! exports provided: GalleryLightboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryLightboxComponent", function() { return GalleryLightboxComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function GalleryLightboxComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryLightboxComponent_div_14_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onPreviewImage(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", data_r2.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", data_r2.imageAlt);
} }
function GalleryLightboxComponent_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r6.currentIndex + 1, "/", ctx_r6.totalImageCount, " ");
} }
function GalleryLightboxComponent_div_15_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryLightboxComponent_div_15_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.onClosePreview(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GalleryLightboxComponent_div_15_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryLightboxComponent_div_15_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GalleryLightboxComponent_div_15_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GalleryLightboxComponent_div_15_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { value: "visible" }; };
function GalleryLightboxComponent_div_15_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@animation.done", function GalleryLightboxComponent_div_15_div_5_Template_div_animation_animation_done_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.onAnimationEnd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r10.currentLightboxImage.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r10.currentLightboxImage.imageAlt);
} }
function GalleryLightboxComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GalleryLightboxComponent_div_15_span_1_Template, 2, 2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GalleryLightboxComponent_div_15_button_2_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GalleryLightboxComponent_div_15_button_3_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GalleryLightboxComponent_div_15_button_4_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GalleryLightboxComponent_div_15_div_5_Template, 2, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animation2", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.previewImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.previewImage);
} }
class GalleryLightboxComponent {
    constructor() {
        this.galleryData = [];
        this.showCount = false;
        this.previewImage = false;
        this.showMask = false;
        this.currentLightboxImage = this.galleryData[0];
        this.currentIndex = 0;
        this.controls = true;
        this.totalImageCount = 0;
    }
    ngOnInit() {
        this.totalImageCount = this.galleryData.length;
    }
    onPreviewImage(index) {
        this.showMask = true;
        this.previewImage = true;
        this.currentIndex = index;
        this.currentLightboxImage = this.galleryData[index];
    }
    onAnimationEnd(event) {
        if (event.toState === 'void') {
            this.showMask = false;
        }
    }
    onClosePreview() {
        this.previewImage = false;
    }
    next() {
        this.currentIndex = this.currentIndex + 1;
        if (this.currentIndex > this.galleryData.length - 1) {
            this.currentIndex = 0;
        }
        this.currentLightboxImage = this.galleryData[this.currentIndex];
    }
    prev() {
        this.currentIndex = this.currentIndex - 1;
        if (this.currentIndex < 0) {
            this.currentIndex = this.galleryData.length - 1;
        }
        this.currentLightboxImage = this.galleryData[this.currentIndex];
    }
}
GalleryLightboxComponent.ɵfac = function GalleryLightboxComponent_Factory(t) { return new (t || GalleryLightboxComponent)(); };
GalleryLightboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GalleryLightboxComponent, selectors: [["app-gallery-lightbox"]], inputs: { galleryData: "galleryData", showCount: "showCount" }, decls: 16, vars: 2, consts: [[1, "main"], [1, "static-slider-head", 2, "background-image", "url(assets/images/landingpage/droneview.jpg)", "position", "relative", "height", "60vh"], [1, "container", 2, "position", "absolute", "bottom", "0", "left", "50%", "transform", "translateX(-50%)", "width", "100%"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "align-self-center", "text-center", "no-trans"], [1, "title"], [1, "container", "text-center", "m-t-30"], [1, "subtitle", "op-4"], ["href", "https://tourmkr.com/F159gWEeDm/41003333p&186.15h&77.67t", "target", "blank", 1, "btn", "btn-md", "m-t-30", "btn-success-gradiant", "font-14"], [1, "gallery-lightbox-container"], [1, "gallery"], ["class", "gallery-img", 4, "ngFor", "ngForOf"], ["class", "lightbox", 4, "ngIf"], [1, "gallery-img"], [3, "src", "alt", "click"], [1, "lightbox"], ["class", "count", 4, "ngIf"], ["class", "close-btn", 3, "click", 4, "ngIf"], ["class", "btn-lightbox-carousel btn-prev", 3, "click", 4, "ngIf"], ["class", "btn-lightbox-carousel btn-next", 3, "click", 4, "ngIf"], ["class", "lightbox-img", 4, "ngIf"], [1, "count"], [1, "close-btn", 3, "click"], [1, "far", "fa-times"], [1, "btn-lightbox-carousel", "btn-prev", 3, "click"], [1, "fas", "fa-arrow-circle-left", "icon-lightbox-carousel", "icon-prev"], [1, "btn-lightbox-carousel", "btn-next", 3, "click"], [1, "fas", "fa-arrow-circle-right", "icon-lightbox-carousel", "icon-next"], [1, "lightbox-img"], [3, "src", "alt"]], template: function GalleryLightboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "GALLERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Embark on a new adventure with our cutting-edge camping web app! Whether you're a seasoned outdoors enthusiast or a novice camper, our app is designed to elevate your camping experience. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "360\u00B0 tour");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, GalleryLightboxComponent_div_14_Template, 2, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, GalleryLightboxComponent_div_15_Template, 6, 6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.galleryData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showMask);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,600,700,900&display=swap');\r\n*[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n[_nghost-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n}\r\n.banner-innerpage[_ngcontent-%COMP%] {\r\n    background-size: cover; \r\n    height: 50vh; \r\n    z-index: 900; \r\n  }\r\n.gallery-lightbox-container[_ngcontent-%COMP%] {\r\n    margin-top: 100px; \r\n    position: relative;\r\n    display: inline-block;\r\n    padding: 25px;\r\n    z-index: 1000; \r\n\r\n    .gallery {\r\n        line-height: 0;\r\n        column-count: 3;\r\n        column-gap: 30px;\r\n\r\n        .gallery-img img {\r\n            width: 100%;\r\n            height: auto;\r\n            cursor: zoom-in;\r\n            border-radius: .35rem;\r\n            margin-bottom: 30px;\r\n            box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .21);\r\n        }\r\n    }\r\n\r\n    .lightbox {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        background-color: rgba(0, 0, 0, .85);\r\n\r\n        .count {\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            width: 7%;\r\n            height: 10%;\r\n            color: #fff;\r\n            opacity: 0.7;\r\n            font-size: 18px;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            margin-left: 5px;\r\n        }\r\n\r\n        .close-btn {\r\n            position: absolute; \r\n            top: 10px;\r\n            right: 10px;\r\n            padding: 0;\r\n            color: #fff;\r\n            background: 0 0;\r\n            border: 0;\r\n            cursor: pointer;\r\n            width: 7%;\r\n            height: 10%;\r\n            z-index: 2;\r\n        \r\n            .fa-times {\r\n                font-size: 25px;\r\n            }\r\n        }\r\n        \r\n        \r\n\r\n        .btn-lightbox-carousel {\r\n            position: absolute;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            z-index: 1;\r\n            width: 8%;\r\n            height: 8%;\r\n            padding: 0;\r\n            color: #fff;\r\n            text-align: center;\r\n            background: 0 0;\r\n            border: 0;\r\n            cursor: pointer;\r\n        }\r\n\r\n        .btn-prev {\r\n            left: 0;\r\n        }\r\n\r\n        .btn-next {\r\n            right: 0;\r\n        }\r\n\r\n        .icon-lightbox-carousel {\r\n            color: #fff;\r\n            opacity: 0.5;\r\n            transition: all 0.15s ease;\r\n        }\r\n\r\n        .icon-lightbox-carousel:hover {\r\n            opacity: 0.9;\r\n        }\r\n\r\n        .icon-lightbox-carousel:active {\r\n            opacity: 0.5;\r\n        }\r\n\r\n        .icon-prev,\r\n        .icon-next {\r\n            font-size: 30px;\r\n        }\r\n\r\n        .lightbox-img img {\r\n            width: 100%;\r\n            border-radius: .35rem;\r\n        }\r\n\r\n    }\r\n}\r\n@media screen and (max-width: 1024px) {\r\n    .gallery-lightbox-container[_ngcontent-%COMP%] {\r\n        .gallery {\r\n            column-count: 2;\r\n            width: 100%;\r\n\r\n            .gallery-img img {\r\n                width: 100%;\r\n            }\r\n        }\r\n    }\r\n}\r\n@media screen and (max-width: 800px) {\r\n    .gallery-lightbox-container[_ngcontent-%COMP%] {\r\n        .gallery {\r\n            column-count: 2;\r\n\r\n            .gallery-img img {\r\n                max-width: 100%;\r\n            }\r\n        }\r\n    }\r\n}\r\n@media screen and (max-width: 650px) {\r\n    .gallery-lightbox-container[_ngcontent-%COMP%] {\r\n        .gallery {\r\n            column-count: 1;\r\n\r\n            .gallery-img img {\r\n                width: 100%;\r\n            }\r\n        }\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnktbGlnaHRib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RkFBOEY7QUFDOUY7SUFDSSxzQkFBc0I7QUFDMUI7QUFHQTs7SUFFSSxVQUFVO0lBQ1YsU0FBUztJQUNULGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksc0JBQXNCLEVBQUUsdUNBQXVDO0lBQy9ELFlBQVk7SUFDWixZQUFZLEVBQUUsbUNBQW1DO0VBQ25EO0FBRUY7SUFDSSxpQkFBaUIsRUFBRSx5Q0FBeUM7SUFDNUQsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsYUFBYTs7SUFFYjtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZ0JBQWdCOztRQUVoQjtZQUNJLFdBQVc7WUFDWCxZQUFZO1lBQ1osZUFBZTtZQUNmLHFCQUFxQjtZQUNyQixtQkFBbUI7WUFDbkIsMENBQTBDO1FBQzlDO0lBQ0o7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsTUFBTTtRQUNOLE9BQU87UUFDUCxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9DQUFvQzs7UUFFcEM7WUFDSSxrQkFBa0I7WUFDbEIsTUFBTTtZQUNOLE9BQU87WUFDUCxTQUFTO1lBQ1QsV0FBVztZQUNYLFdBQVc7WUFDWCxZQUFZO1lBQ1osZUFBZTtZQUNmLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLGdCQUFnQjtRQUNwQjs7UUFFQTtZQUNJLGtCQUFrQixFQUFFLGtDQUFrQztZQUN0RCxTQUFTO1lBQ1QsV0FBVztZQUNYLFVBQVU7WUFDVixXQUFXO1lBQ1gsZUFBZTtZQUNmLFNBQVM7WUFDVCxlQUFlO1lBQ2YsU0FBUztZQUNULFdBQVc7WUFDWCxVQUFVOztZQUVWO2dCQUNJLGVBQWU7WUFDbkI7UUFDSjs7OztRQUlBO1lBQ0ksa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLFVBQVU7WUFDVixTQUFTO1lBQ1QsVUFBVTtZQUNWLFVBQVU7WUFDVixXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixTQUFTO1lBQ1QsZUFBZTtRQUNuQjs7UUFFQTtZQUNJLE9BQU87UUFDWDs7UUFFQTtZQUNJLFFBQVE7UUFDWjs7UUFFQTtZQUNJLFdBQVc7WUFDWCxZQUFZO1lBQ1osMEJBQTBCO1FBQzlCOztRQUVBO1lBQ0ksWUFBWTtRQUNoQjs7UUFFQTtZQUNJLFlBQVk7UUFDaEI7O1FBRUE7O1lBRUksZUFBZTtRQUNuQjs7UUFFQTtZQUNJLFdBQVc7WUFDWCxxQkFBcUI7UUFDekI7O0lBRUo7QUFDSjtBQUVBO0lBQ0k7UUFDSTtZQUNJLGVBQWU7WUFDZixXQUFXOztZQUVYO2dCQUNJLFdBQVc7WUFDZjtRQUNKO0lBQ0o7QUFDSjtBQUVBO0lBQ0k7UUFDSTtZQUNJLGVBQWU7O1lBRWY7Z0JBQ0ksZUFBZTtZQUNuQjtRQUNKO0lBQ0o7QUFDSjtBQUVBO0lBQ0k7UUFDSTtZQUNJLGVBQWU7O1lBRWY7Z0JBQ0ksV0FBVztZQUNmO1FBQ0o7SUFDSjtBQUNKIiwiZmlsZSI6ImdhbGxlcnktbGlnaHRib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDAsNjAwLDcwMCw5MDAmZGlzcGxheT1zd2FwJyk7XHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJhbm5lci1pbm5lcnBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogaWxpIGRydWdlIG9kZ292YXJhanXEh2UgdnJpamVkbm9zdGkgKi9cclxuICAgIGhlaWdodDogNTB2aDsgXHJcbiAgICB6LWluZGV4OiA5MDA7IC8qIGFrbyBidWRlIHN0YSB6ZXphbG8gb2JyaXNpIG92byAqL1xyXG4gIH1cclxuICBcclxuLmdhbGxlcnktbGlnaHRib3gtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4OyAvKiBEb2RhanRlIMW+ZWxqZW5pIG1hcmdpbiB2cmh1IGdhbGVyaWplICovXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgei1pbmRleDogMTAwMDsgXHJcblxyXG4gICAgLmdhbGxlcnkge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgIGNvbHVtbi1jb3VudDogMztcclxuICAgICAgICBjb2x1bW4tZ2FwOiAzMHB4O1xyXG5cclxuICAgICAgICAuZ2FsbGVyeS1pbWcgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgY3Vyc29yOiB6b29tLWluO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMzVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjIxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpZ2h0Ym94IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44NSk7XHJcblxyXG4gICAgICAgIC5jb3VudCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogNyU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsb3NlLWJ0biB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogQ2hhbmdlIGZyb20gZml4ZWQgdG8gYWJzb2x1dGUgKi9cclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC5mYS10aW1lcyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC5idG4tbGlnaHRib3gtY2Fyb3VzZWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICB3aWR0aDogOCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogOCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuLXByZXYge1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ0bi1uZXh0IHtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWNvbi1saWdodGJveC1jYXJvdXNlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb24tbGlnaHRib3gtY2Fyb3VzZWw6aG92ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWNvbi1saWdodGJveC1jYXJvdXNlbDphY3RpdmUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWNvbi1wcmV2LFxyXG4gICAgICAgIC5pY29uLW5leHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlnaHRib3gtaW1nIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMzVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuZ2FsbGVyeS1saWdodGJveC1jb250YWluZXIge1xyXG4gICAgICAgIC5nYWxsZXJ5IHtcclxuICAgICAgICAgICAgY29sdW1uLWNvdW50OiAyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIC5nYWxsZXJ5LWltZyBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuZ2FsbGVyeS1saWdodGJveC1jb250YWluZXIge1xyXG4gICAgICAgIC5nYWxsZXJ5IHtcclxuICAgICAgICAgICAgY29sdW1uLWNvdW50OiAyO1xyXG5cclxuICAgICAgICAgICAgLmdhbGxlcnktaW1nIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICAuZ2FsbGVyeS1saWdodGJveC1jb250YWluZXIge1xyXG4gICAgICAgIC5nYWxsZXJ5IHtcclxuICAgICAgICAgICAgY29sdW1uLWNvdW50OiAxO1xyXG5cclxuICAgICAgICAgICAgLmdhbGxlcnktaW1nIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => visible', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.5)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('visible => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.5)' }))
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animation2', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.8 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GalleryLightboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-gallery-lightbox',
                templateUrl: './gallery-lightbox.component.html',
                styleUrls: ['./gallery-lightbox.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => visible', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.5)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('visible => void', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.5)' }))
                        ]),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animation2', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.8 }))
                        ])
                    ])
                ]
            }]
    }], function () { return []; }, { galleryData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: '',
        children: [
            // { path: '', redirectTo: '/apps', pathMatch: 'full' },
            { path: '', loadChildren: () => __webpack_require__.e(/*! import() | apps-apps-module */ "apps-apps-module").then(__webpack_require__.bind(null, /*! ./apps/apps.module */ "IYw8")).then(m => m.AppsModule) }
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zpWk":
/*!******************************************************!*\
  !*** ./src/app/reservation/reservation.component.ts ***!
  \******************************************************/
/*! exports provided: ReservationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationComponent", function() { return ReservationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email.service */ "8b/T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class ReservationComponent {
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
    }
    sendReservationEmail() {
        this.emailService.sendEmail(this.emailForm).subscribe(response => {
            console.log('Email sent successfully', response);
            // Nakon uspješnog slanja emaila, preusmjeri korisnika na drugu stranicu
            this.router.navigate(['/successful-reservation']);
        }, error => {
            console.error('Error sending email:', error);
        });
    }
    updateTypeOfCamping(event) {
        this.emailForm.formData.TypeOfCamping = event.target.value;
    }
}
ReservationComponent.ɵfac = function ReservationComponent_Factory(t) { return new (t || ReservationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ReservationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReservationComponent, selectors: [["app-reservation"]], decls: 86, vars: 11, consts: [[1, "main"], [1, "static-slider-head", 2, "background-image", "url(assets/images/innerpage/dronedark.JPG)", "position", "relative", "height", "60vh"], [1, "container", 2, "position", "absolute", "bottom", "0", "left", "50%", "transform", "translateX(-50%)", "width", "100%"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "align-self-center", "text-center", "no-trans"], [1, "title"], [1, "container2"], [1, "signin-signup"], ["action", "", "method", "POST", 1, "sign-in-form"], [1, "title2"], [1, "input-field"], ["for", "name"], ["type", "text", "required", "", "value", "", "name", "Name", "id", "name", 3, "ngModel", "ngModelChange"], ["for", "phoneNumber"], ["type", "text", "required", "", "value", "", "name", "PhoneNumber", "id", "phoneNumber", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "text", "required", "", "value", "", "name", "Email", "id", "email", 3, "ngModel", "ngModelChange"], ["for", "typeOfVehicle"], ["type", "text", "required", "", "value", "", "name", "TypeOfVehicle", "id", "typeOfVehicle", 3, "ngModel", "ngModelChange"], ["for", "typeOfCamping"], ["id", "typeOfCamping", "name", "TypeOfCamping", 1, "styled-select", "w-full", "rounded", "border", "border-stroke", "bg-white", "px-5", "py-3", "text-base", "text-black", "outline-none", "focus:border-primary", 3, "ngModel", "ngModelChange"], ["value", "motohome"], ["value", "van"], ["value", "caravan"], ["value", "tent"], ["value", "tent-car"], ["value", "bungalow"], [1, "select-arrow"], ["type", "text", "required", "", "value", "", "name", "NumberOfGuests", "id", "numberOfGuests", 3, "ngModel", "ngModelChange"], ["for", "checkIn"], ["type", "date", "id", "checkIn", "name", "checkOut", "placeholder", "Check In", 3, "ngModel", "ngModelChange"], ["for", "checkOut"], ["type", "date", "id", "checkOut", "name", "checkOut", "placeholder", "Check Out", 3, "ngModel", "ngModelChange"], [1, "SortableItem", "fb-builder-item"], [1, "mb-4"], [1, "form-label", "mb-4", "text-base", "text-black"], [1, "custom-control", "custom-checkbox", "mb-2.5", "last:mb-0"], ["id", "fid_preview_checkboxes_option_2ED14DD9-4A0E-4FCD-BB4A-37759E6CC047", "name", "option_checkboxes_option_2ED14DD9-4A0E-4FCD-BB4A-37759E6CC047", "type", "checkbox", "value", "place_holder_option_1", 1, "custom-control-input", "fb-builder-checkbox", "sr-only", 3, "ngModel", "ngModelChange"], ["for", "fid_preview_checkboxes_option_2ED14DD9-4A0E-4FCD-BB4A-37759E6CC047", 1, "custom-control-label", "relative", "flex", "cursor-pointer", "text-base", "text-black"], [1, "relative", "mr-2.5", "mt-0.5", "block", "h-[18px]", "w-[18px]", "rounded", "border", "border-stroke", "bg-white"], [1, "absolute", "left-0", "top-0", "flex", "h-full", "w-full", "items-center", "justify-center", "rounded", "opacity-0"], ["id", "fid_preview_checkboxes_option_456E49C0-0296-40D6-9392-891ED69A2B04", "name", "option_checkboxes_option_456E49C0-0296-40D6-9392-891ED69A2B04", "type", "checkbox", "value", "place_holder_option_2", 1, "custom-control-input", "fb-builder-checkbox", "sr-only", 3, "ngModel", "ngModelChange"], ["for", "fid_preview_checkboxes_option_456E49C0-0296-40D6-9392-891ED69A2B04", 1, "custom-control-label", "relative", "flex", "cursor-pointer", "text-base", "text-black"], ["for", "message"], ["type", "text", "id", "message", "name", "message", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "SUBMIT", 1, "btn", 3, "click"], ["action", "", 1, "sign-up-form"], [1, "panels-container"], [1, "panel", "left-panel"], [1, "content"], [1, "panel", "right-panel"]], template: function ReservationComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Camping site reservation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_15_listener($event) { return ctx.emailForm.formData.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Phone Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_19_listener($event) { return ctx.emailForm.formData.PhoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_23_listener($event) { return ctx.emailForm.formData.Email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Type Of Vehicle:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_27_listener($event) { return ctx.emailForm.formData.TypeOfVehicle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Type of Camping:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_select_ngModelChange_31_listener($event) { return ctx.emailForm.formData.TypeOfCamping = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Motohome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Van");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Caravan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Tent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Tent-Car");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Bungalow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u25BC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Number of guests:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_49_listener($event) { return ctx.emailForm.formData.NumberOfGuests = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Check In:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_53_listener($event) { return ctx.emailForm.formData.CheckIn = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Check Out:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_57_listener($event) { return ctx.emailForm.formData.CheckOut = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Additional:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_64_listener($event) { return ctx.emailForm.formData.CheckBox1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Pets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_70_listener($event) { return ctx.emailForm.formData.CheckBox2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Electricity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Message:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_78_listener($event) { return ctx.emailForm.formData.Message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReservationComponent_Template_input_click_79_listener() { return ctx.sendReservationEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "form", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.PhoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.TypeOfVehicle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.TypeOfCamping);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.NumberOfGuests);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.CheckIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.CheckOut);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.CheckBox1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.CheckBox2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailForm.formData.Message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"]], styles: ["*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  background: #000;\r\n}\r\n\r\n.banner-innerpage[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n  height: 80vh;\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.container2[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 10vh;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  width: 80vw; \r\n  max-width: 600px; \r\n  height: auto;\r\n  background: #fff;\r\n  border-radius: 20px;\r\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);\r\n  overflow: hidden;\r\n  z-index: 1;\r\n}\r\n\r\n.signin-signup[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  padding: 20px;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  margin: 20px 0;\r\n}\r\n\r\nform.sign-in-form[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  transition: 0.5s ease-in-out;\r\n  transition-delay: 1s;\r\n}\r\n\r\nform.sign-up-form[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  transition: 0.5s ease-in-out;\r\n  transition-delay: 1s;\r\n}\r\n\r\n.title2[_ngcontent-%COMP%] {\r\n  font-size: 35px;\r\n  color: #05491f;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 60px; \r\n  margin-bottom: 10px;\r\n  background: #f0f0f0;\r\n  margin: 10px 0;\r\n  border: 0.5px solid #4fdf4a;\r\n  border-radius: 5px;\r\n  display: flex;\r\n  align-items: center;\r\n  pointer-events: auto; \r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  text-align: center;\r\n  color: #666;\r\n  font-size: 18px;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  flex: 5;\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  width: 100%;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  color: #444;\r\n  z-index: 1;\r\n}\r\n\r\n.SortableItem[_ngcontent-%COMP%] { \r\n  height: 200px;\r\n  width: 100%;\r\n  background: #f0f0f0;\r\n  margin: 10px 0;\r\n  border: 0.5px solid #4fdf4a;\r\n  border-radius: 5px;\r\n}\r\n\r\n.SortableItem[_ngcontent-%COMP%]   .mb-4[_ngcontent-%COMP%] {\r\n  padding: 20px; \r\n}\r\n\r\n.SortableItem[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\n.SortableItem[_ngcontent-%COMP%]   .custom-control[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px; \r\n}\r\n\r\n\r\n\r\n.SortableItem[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n.SortableItem[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n\r\n\r\n.SortableItem[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  height: 50px;\r\n  border: none;\r\n  border-radius: 50px;\r\n  background: #3e9e56;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  margin: 10px 0;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n  z-index: 2;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  background: #659469;\r\n}\r\n\r\n.social-text[_ngcontent-%COMP%] {\r\n  margin: 10px 0;\r\n  font-size: 16px;\r\n}\r\n\r\n.social-media[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.social-icon[_ngcontent-%COMP%] {\r\n  height: 45px;\r\n  width: 45px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #444;\r\n  border: 1px solid #444;\r\n  border-radius: 50px;\r\n  margin: 0 5px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n.social-icon[_ngcontent-%COMP%]:hover {\r\n  color: #69a881;\r\n  border-color: #4ebd92;\r\n}\r\n\r\n.panels-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  width: 35%;\r\n  min-width: 238px;\r\n  padding: 0 10px;\r\n  text-align: center;\r\n  z-index: 6;\r\n}\r\n\r\n.left-panel[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  transition: 1.1s ease-in-out;\r\n  transition-delay: 0.5s;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  padding: 10px 0;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  transition: 1.1s ease-in-out;\r\n  transition-delay: 0.4s;\r\n}\r\n\r\n.left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(-200%);\r\n}\r\n\r\n.right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(0);\r\n}\r\n\r\n.account-text[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n\r\n\r\n.container.sign-up-mode[_ngcontent-%COMP%]::before {\r\n  transform: translateX(0);\r\n}\r\n\r\n.container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(200%);\r\n}\r\n\r\n.container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(0);\r\n}\r\n\r\n.container.sign-up-mode[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\r\n\r\n.container.sign-up-mode[_ngcontent-%COMP%]   form.sign-up-form[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n\r\n.container.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n}\r\n\r\n.container.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\r\n  pointer-events: all;\r\n}\r\n\r\n\r\n\r\n@media (max-width:779px) {\r\n  .container[_ngcontent-%COMP%] {\r\n      width: 100vw;\r\n      height: 100vh;\r\n      position: relative;\r\n  }\r\n}\r\n\r\n@media (max-width:635px) {\r\n  .container[_ngcontent-%COMP%]::before {\r\n      display: none;\r\n  }\r\n  form[_ngcontent-%COMP%] {\r\n      width: 80%;\r\n  }\r\n  form.sign-up-form[_ngcontent-%COMP%] {\r\n      display: none;\r\n  }\r\n  .container.sign-up-mode2[_ngcontent-%COMP%]   form.sign-up-form[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      opacity: 1;\r\n  }\r\n  .container.sign-up-mode2[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%] {\r\n      display: none;\r\n  }\r\n  .panels-container[_ngcontent-%COMP%] {\r\n      display: none;\r\n  }\r\n  .account-text[_ngcontent-%COMP%] {\r\n      display: initial;\r\n      margin-top: 30px;\r\n  }\r\n}\r\n\r\n@media (max-width:320px) {\r\n  form[_ngcontent-%COMP%] {\r\n      width: 90%;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n  .container2[_ngcontent-%COMP%] {\r\n    width: 60vw;\r\n  }\r\n\r\n  form[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (max-width: 767px) {\r\n  .container2[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n  }\r\n\r\n  form[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (max-width: 480px) {\r\n  .container2[_ngcontent-%COMP%] {\r\n    width: 90vw;\r\n  }\r\n\r\n  form[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n  }\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   input[type=\"date\"][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  color: #444;\r\n  padding: 10px; \r\n  box-sizing: border-box; \r\n}\r\n\r\n@media (max-width: 767px) {\r\n  \r\n\r\n  .static-slider-head[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]\r\n  {\r\n    font-size:50px;\r\n  }\r\n\r\n  \r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.styled-select-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  z-index: 2; \r\n  pointer-events: auto;\r\n}\r\n\r\n.styled-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  color: #444;\r\n}\r\n\r\n.styled-select[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 0px;\r\n  font-size: 16px;\r\n  border-radius: 4px;\r\n  background-color: transparent !important;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  cursor: pointer;\r\n  z-index: 2;\r\n  outline:none;\r\n   \r\n  top: 0;\r\n  left: 0;\r\n\r\n}\r\n\r\n.styled-select[_ngcontent-%COMP%]::before {\r\n  content: '\\25BC';\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 10px;\r\n  transform: translateY(-50%);\r\n  font-size: 14px;\r\n  color: #333;\r\n  pointer-events: none;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .styled-select[_ngcontent-%COMP%] {\r\n    background-color: transparent !important;\r\n    border: 1px solid #ffffff;\r\n    border-radius: 4px;\r\n    padding: 8px;\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  \r\n  .styled-select-container[_ngcontent-%COMP%] {\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    padding: 8px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VydmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qiw2RUFBNkU7QUFDL0U7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsV0FBVyxFQUFFLHFEQUFxRDtFQUNsRSxnQkFBZ0IsRUFBRSxtQ0FBbUM7RUFDckQsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNEVBQTRFO0VBQzVFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBSUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFHQTtFQUNFLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFFLHFDQUFxQztFQUNuRCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CLEVBQUUsNENBQTRDO0FBQ3BFOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhLEVBQUUsOENBQThDO0FBQy9EOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CLEVBQUUsaUVBQWlFO0FBQ3hGOztBQUVBLDBEQUEwRDs7QUFDMUQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBLDJEQUEyRDs7QUFDM0Q7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsd0RBQXdEOztBQUN4RDtFQUNFLE9BQU87QUFDVDs7QUFFQSxxQ0FBcUM7O0FBR3JDO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUtBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBQ0E7O0VBRUUsNEJBQTRCO0FBQzlCOztBQUNBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQSxZQUFZOztBQUNaO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUNBOztFQUVFLDJCQUEyQjtBQUM3Qjs7QUFDQTs7RUFFRSx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0EsYUFBYTs7QUFDYjtFQUNFO01BQ0ksWUFBWTtNQUNaLGFBQWE7TUFDYixrQkFBa0I7RUFDdEI7QUFDRjs7QUFDQTtFQUNFO01BQ0ksYUFBYTtFQUNqQjtFQUNBO01BQ0ksVUFBVTtFQUNkO0VBQ0E7TUFDSSxhQUFhO0VBQ2pCO0VBQ0E7TUFDSSxhQUFhO01BQ2IsVUFBVTtFQUNkO0VBQ0E7TUFDSSxhQUFhO0VBQ2pCO0VBQ0E7TUFDSSxhQUFhO0VBQ2pCO0VBQ0E7TUFDSSxnQkFBZ0I7TUFDaEIsZ0JBQWdCO0VBQ3BCO0FBQ0Y7O0FBQ0E7RUFDRTtNQUNJLFVBQVU7RUFDZDtBQUNGOztBQUVBLG1CQUFtQjs7QUFDbkI7RUFDRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBLG1CQUFtQjs7QUFDbkI7RUFDRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFDRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWEsRUFBRSwyQ0FBMkM7RUFDMUQsc0JBQXNCLEVBQUUsNENBQTRDO0FBQ3RFOztBQUVBOzs7RUFHRTs7SUFFRSxjQUFjO0VBQ2hCOztFQUVBLG1FQUFtRTs7O0FBR3JFOztBQUNBLG1FQUFtRTs7QUFDbkUsd0NBQXdDOztBQUN4QztFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVSxFQUFFLHVCQUF1QjtFQUNuQyxvQkFBb0I7QUFDdEI7O0FBR0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4Qyx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7R0FDWCwwRkFBMEY7RUFDM0YsTUFBTTtFQUNOLE9BQU87O0FBRVQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUtBO0VBQ0U7SUFDRSx3Q0FBd0M7SUFDeEMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFFQSxvREFBb0Q7RUFDcEQ7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InJlc2VydmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG5cclxuLmJhbm5lci1pbm5lcnBhZ2Uge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyMiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB3aWR0aDogODB2dzsgLyogQ2hhbmdlIHRoaXMgdG8gYSBsYXJnZXIgdmFsdWUsIGUuZy4sIDkwJSBvciAxMDAlICovXHJcbiAgbWF4LXdpZHRoOiA2MDBweDsgLyogQWRqdXN0IHRoZSBtYXgtd2lkdGggYXMgbmVlZGVkICovXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcblxyXG4uc2lnbmluLXNpZ251cCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcblxyXG5mb3JtLnNpZ24taW4tZm9ybSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xyXG59XHJcbmZvcm0uc2lnbi11cC1mb3JtIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMXM7XHJcbn1cclxuLnRpdGxlMiB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGNvbG9yOiAjMDU0OTFmO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDsgLyogUHJpbGFnb2RpdGUgdmlzaW51IHByZW1hIHBvdHJlYmkgKi9cclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjNGZkZjRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87IC8qIERvZGFqdGUgb3ZvIGlsaSB1a2xvbml0ZSBwb2ludGVyLWV2ZW50cyAqL1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmlucHV0LWZpZWxkIGkge1xyXG4gIGZsZXg6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uaW5wdXQtZmllbGQgaW5wdXQge1xyXG4gIGZsZXg6IDU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ0NDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5Tb3J0YWJsZUl0ZW0geyBcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjNGZkZjRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLlNvcnRhYmxlSXRlbSAubWItNCB7XHJcbiAgcGFkZGluZzogMjBweDsgLyogRG9kYWp0ZSBvZGdvdmFyYWp1xIdpIHJhem1hayBwcmVtYSBwb3RyZWJpICovXHJcbn1cclxuXHJcbi5Tb3J0YWJsZUl0ZW0gbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uU29ydGFibGVJdGVtIC5jdXN0b20tY29udHJvbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyogRG9kYWp0ZSBvZGdvdmFyYWp1xIdpIHJhem1hayBpem1lxJF1IGN1c3RvbS1jaGVja2JveCBlbGVtZW5hdGEgKi9cclxufVxyXG5cclxuLyogQWtvIMW+ZWxpdGUgcHJpbWlqZW5pdGkgc3RpbGl6YWNpanUgbmEgY3VzdG9tLWNoZWNrYm94ICovXHJcbi5Tb3J0YWJsZUl0ZW0gLmN1c3RvbS1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBBa28gxb5lbGl0ZSBzdGlsaXppcmF0aSBjaGVja2JveCB1bnV0YXIgY3VzdG9tLWNoZWNrYm94ICovXHJcbi5Tb3J0YWJsZUl0ZW0gLmN1c3RvbS1jaGVja2JveCBpbnB1dCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vKiBBa28gxb5lbGl0ZSBzdGlsaXppcmF0aSB0ZWtzdCB1bnV0YXIgY3VzdG9tLWNoZWNrYm94ICovXHJcbi5Tb3J0YWJsZUl0ZW0gLmN1c3RvbS1jaGVja2JveCBsYWJlbCB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLyogRG9kYXRuZSBwcmlsYWdvZGJlIHByZW1hIHBvdHJlYmkgKi9cclxuXHJcblxyXG4uYnRuIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMzZTllNTY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2NTk0Njk7XHJcbn1cclxuLnNvY2lhbC10ZXh0IHtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnNvY2lhbC1tZWRpYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uc29jaWFsLWljb24ge1xyXG4gIGhlaWdodDogNDVweDtcclxuICB3aWR0aDogNDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG1hcmdpbjogMCA1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uc29jaWFsLWljb246aG92ZXIge1xyXG4gIGNvbG9yOiAjNjlhODgxO1xyXG4gIGJvcmRlci1jb2xvcjogIzRlYmQ5MjtcclxufVxyXG4ucGFuZWxzLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLnBhbmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB3aWR0aDogMzUlO1xyXG4gIG1pbi13aWR0aDogMjM4cHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiA2O1xyXG59XHJcbi5sZWZ0LXBhbmVsIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uY29udGVudCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogMS4xcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xyXG59XHJcbi5wYW5lbCBoMyB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnBhbmVsIHAge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMS4xcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcbi5sZWZ0LXBhbmVsIC5pbWFnZSxcclxuLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XHJcbn1cclxuLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxuLmFjY291bnQtdGV4dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKkFuaW1hdGlvbiovXHJcbi5jb250YWluZXIuc2lnbi11cC1tb2RlOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG4uY29udGFpbmVyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmltYWdlLFxyXG4uY29udGFpbmVyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcclxufVxyXG4uY29udGFpbmVyLnNpZ24tdXAtbW9kZSAubGVmdC1wYW5lbCAuaW1hZ2UsXHJcbi5jb250YWluZXIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5jb250ZW50IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxuLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgZm9ybS5zaWduLWluLWZvcm0ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgZm9ybS5zaWduLXVwLWZvcm0ge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uY29udGFpbmVyLnNpZ24tdXAtbW9kZSAubGVmdC1wYW5lbCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG4vKlJlc3BvbnNpdmUqL1xyXG5AbWVkaWEgKG1heC13aWR0aDo3NzlweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6NjM1cHgpIHtcclxuICAuY29udGFpbmVyOjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBmb3JtIHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbiAgZm9ybS5zaWduLXVwLWZvcm0ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuY29udGFpbmVyLnNpZ24tdXAtbW9kZTIgZm9ybS5zaWduLXVwLWZvcm0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAuY29udGFpbmVyLnNpZ24tdXAtbW9kZTIgZm9ybS5zaWduLWluLWZvcm0ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAucGFuZWxzLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5hY2NvdW50LXRleHQge1xyXG4gICAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDozMjBweCkge1xyXG4gIGZvcm0ge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG5cclxuLyogTGFyZ2VyIHNjcmVlbnMgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhaW5lcjIge1xyXG4gICAgd2lkdGg6IDYwdnc7XHJcbiAgfVxyXG5cclxuICBmb3JtIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNZWRpdW0gc2NyZWVucyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY29udGFpbmVyMiB7XHJcbiAgICB3aWR0aDogODB2dztcclxuICB9XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmNvbnRhaW5lcjIge1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgfVxyXG5cclxuICBmb3JtIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgcGFkZGluZzogMTBweDsgLyogQWRkIHBhZGRpbmcgdG8gbWFrZSBpdCBlYXNpZXIgdG8gY2xpY2sgKi9cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBFbnN1cmUgcGFkZGluZyBpcyBpbmNsdWRlZCBpbiB0aGUgd2lkdGggKi9cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgXHJcblxyXG4gIC5zdGF0aWMtc2xpZGVyLWhlYWQgLnRpdGxlXHJcbiAge1xyXG4gICAgZm9udC1zaXplOjUwcHg7XHJcbiAgfVxyXG5cclxuICAvKiBEb2RhanRlIG92ZSBzdGlsb3ZlIGlzcG9kIHBvc3RvamXEh2loIHN0aWxvdmEgemEgLnN0eWxlZC1zZWxlY3QgKi9cclxuXHJcblxyXG59XHJcbi8qIERvZGFqdGUgb3ZlIHN0aWxvdmUgaXNwb2QgcG9zdG9qZcSHaWggc3RpbG92YSB6YSAuc3R5bGVkLXNlbGVjdCAqL1xyXG4vKiBTdGlsb3ZpIHphIC5zdHlsZWQtc2VsZWN0LWNvbnRhaW5lciAqL1xyXG4uc3R5bGVkLXNlbGVjdC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgei1pbmRleDogMjsgLyogRG9kYWp0ZSBvdnUgbGluaWp1ICovXHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbn1cclxuXHJcblxyXG4uc3R5bGVkLXNlbGVjdCBvcHRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbn1cclxuXHJcbi5zdHlsZWQtc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogMjtcclxuICBvdXRsaW5lOm5vbmU7XHJcbiAgIC8qIFBvc3RhdmxqYW5qZSBhcHNvbHV0bm9nIHBvbG/FvmFqYSBrYWtvIGJpIHNlIHVrbG9waWxvIHVudXRhciByb2RpdGVsanNrb2cgaW5wdXQgZmllbGRhICovXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG59XHJcblxyXG4uc3R5bGVkLXNlbGVjdDo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFwyNUJDJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzMzMztcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5zdHlsZWQtc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC8qIERvZGF0bmkgc3RpbG92aSB6YSBzdHJlbGljdSBuYSBtb2JpbG5vbSBwcmlrYXp1ICovXHJcbiAgLnN0eWxlZC1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reservation',
                templateUrl: './reservation.component.html',
                styleUrls: ['./reservation.component.css']
            }]
    }], function () { return [{ type: _email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map