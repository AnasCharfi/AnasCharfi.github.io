(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Github\MyWebsite\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var d = new Date();
var monthName = months[d.getMonth()];
class HomeComponent extends _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"] {
    constructor() {
        super();
        this.days = this.dateDiff("Feb 2011");
    }
    dateDiff(b1) {
        var currentYear = new Date().getFullYear();
        var currentMonth = new Date().getMonth();
        var b = new Date(b1);
        var e = new Date(monthName + currentYear);
        var bMonth = b.getMonth();
        var bYear = b.getFullYear();
        var eYear = e.getFullYear();
        var eMonth = e.getMonth();
        var bDay = b.getDate();
        var eDay = e.getDate() + 1;
        if ((eMonth == 0) || (eMonth == 2) || (eMonth == 4) || (eMonth == 6) || (eMonth == 7) || (eMonth == 9) || (eMonth == 11)) {
            var eDays = 31;
        }
        if ((eMonth == 3) || (eMonth == 5) || (eMonth == 8) || (eMonth == 10)) {
            var eDays = 30;
        }
        if (eMonth == 1 && ((eYear % 4 == 0) && (eYear % 100 != 0)) || (eYear % 400 == 0)) {
            var eDays = 29;
        }
        if (eMonth == 1 && ((eYear % 4 != 0) || (eYear % 100 == 0))) {
            var eDays = 28;
        }
        if ((bMonth == 0) || (bMonth == 2) || (bMonth == 4) || (bMonth == 6) || (bMonth == 7) || (bMonth == 9) || (bMonth == 11)) {
            var bDays = 31;
        }
        if ((bMonth == 3) || (bMonth == 5) || (bMonth == 8) || (bMonth == 10)) {
            var bDays = 30;
        }
        if (bMonth == 1 && ((bYear % 4 == 0) && (bYear % 100 != 0)) || (bYear % 400 == 0)) {
            var bDays = 29;
        }
        if (bMonth == 1 && ((bYear % 4 != 0) || (bYear % 100 == 0))) {
            var bDays = 28;
        }
        var FirstMonthDiff = bDays - bDay + 1;
        if (eDay - bDay < 0) {
            eMonth = eMonth - 1;
            eDay = eDay + eDays;
        }
        var daysDiff = eDay - bDay;
        if (eMonth - bMonth < 0) {
            eYear = eYear - 1;
            eMonth = eMonth + 12;
        }
        var monthDiff = eMonth - bMonth;
        var yearDiff = eYear - bYear;
        if (daysDiff == eDays) {
            daysDiff = 0;
            monthDiff = monthDiff + 1;
            if (monthDiff == 12) {
                monthDiff = 0;
                yearDiff = yearDiff + 1;
            }
        }
        if ((FirstMonthDiff != bDays) && (eDay - 1 == eDays)) {
            daysDiff = FirstMonthDiff;
        }
        var Days;
        return Days = yearDiff + " Year(s)" + " " + monthDiff + " month(s)";
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 623, vars: 2, consts: [["id", "top"], [1, "bg-light"], [1, "page-content", 2, "margin-bottom", "10px"], ["id", "content"], [1, "cover", "bg-light", 2, "background", "linear-gradient(180deg ,  #91bdf8, #F5F7FA  )"], [1, "container", "px-3"], [1, "row"], ["align", "center", 1, "col-lg-6", "p-4", "pt-0"], [1, "mt-5"], ["src", "/assets/images/hello.jpg", "width", "340", "height", "auto", "alt", "hello", 1, "img-fluid", 2, "border-radius", "50%"], [1, "col-lg-6"], [1, "lead", "text-uppercase", "mb-1"], ["data-aos", "fade-left", "data-aos-delay", "20", 1, "intro-title", "marker"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "lead", "fw-normal", "mt-3"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "social-nav"], ["role", "navigation"], [1, "nav", "justify-content-left"], [1, "nav-item"], ["href", "https://twitter.com/CharfiAnas", "title", "Twitter", 1, "nav-link"], [1, "fab", "fa-twitter"], [1, "menu-title", "sr-only"], ["href", "https://www.facebook.com/The.Hakerz.Zinger/", "title", "Facebook", 1, "nav-link"], [1, "fab", "fa-facebook-f"], ["href", "https://www.instagram.com/anascharfi/", "title", "Instagram", 1, "nav-link"], [1, "fab", "fa-instagram"], ["href", "https://www.linkedin.com/in/anas-charfi/", "title", "LinkedIn", 1, "nav-link"], [1, "fab", "fa-linkedin"], ["href", "https://github.com/AnasCharfi", "title", "Behance", 1, "nav-link"], [1, "fab", "fa-github"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "mt-3"], ["href", "#contact", 1, "btn", "btn-primary", "shadow-sm", "mt-1", "hover-effect"], [1, "fas", "fa-arrow-right"], [1, "page-content"], [1, "container"], [1, "cover", "shadow-lg", "bg-white"], [1, "cover-bg", "p-3", "p-lg-4", "text-white"], [1, "col-lg-4", "col-md-5"], [1, "avatar", "hover-effect", "bg-white", "shadow-sm", "p-1"], ["src", "/assets/2nd/images/dsc.jpg", "width", "200", "height", "200"], [1, "col-lg-8", "col-md-7", "text-center", "text-md-start"], ["data-aos", "fade-left", "data-aos-delay", "0", 1, "h1", "mt-2"], ["data-aos", "fade-left", "data-aos-delay", "100"], ["data-aos", "fade-left", "data-aos-delay", "200", 1, "d-print-none"], ["href", "assets/Anas-CHARFI.pdf", "target", "_blank", 1, "btn", "btn-light", "text-dark", "shadow-sm", "mt-1", "me-1"], ["href", "#contact", 1, "btn", "btn-success", "shadow-sm", "mt-1"], [1, "about-section", "pt-4", "px-3", "px-lg-4", "mt-1"], [1, "col-md-6"], [1, "h3", "mb-3"], [2, "text-align", "justify", "text-justify", "inter-word"], [1, "col-md-5", "offset-md-1", 2, "border", "solid rgba(128, 128, 128, 0.527) 1px", "border-radius", "10px"], [1, "row", "mt-2"], [1, "col-sm-4"], [1, "pb-1"], [1, "col-sm-8"], [1, "pb-1", "text-secondary"], [1, "col-sm-7"], [2, "color", "#4A89DC"], [2, "color", "#656D78"], [2, "color", "#37BC9B"], [1, "d-print-none"], [1, "skills-section", "px-3", "px-lg-4"], ["id", "skills", 1, "h3", "mb-3"], [1, "mb-2"], [1, "progress", "my-1"], ["role", "progressbar", "data-aos", "zoom-in-right", "data-aos-delay", "100", "data-aos-anchor", ".skills-section", "aria-valuenow", "90", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "90%"], ["role", "progressbar", "data-aos", "zoom-in-right", "data-aos-delay", "200", "data-aos-anchor", ".skills-section", "aria-valuenow", "85", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "85%"], ["role", "progressbar", "data-aos", "zoom-in-right", "data-aos-delay", "300", "data-aos-anchor", ".skills-section", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "75%"], ["role", "progressbar", "data-aos", "zoom-in-right", "data-aos-delay", "400", "data-aos-anchor", ".skills-section", "aria-valuenow", "90", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "90%"], ["role", "progressbar", "data-aos", "zoom-in-right", "data-aos-delay", "500", "data-aos-anchor", ".skills-section", "aria-valuenow", "85", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "85%"], ["role", "progressbar", "data-aos", "zoom-in-right", "data-aos-delay", "600", "data-aos-anchor", ".skills-section", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "90%"], ["role", "progressbar", "data-aos", "zoom-in-right", "data-aos-delay", "300", "data-aos-anchor", ".skills-section", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "95%"], ["role", "progressbar", "data-aos", "zoom-in-right", "data-aos-delay", "400", "data-aos-anchor", ".skills-section", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "100%"], ["role", "progressbar", "data-aos", "zoom-in-right", "data-aos-delay", "500", "data-aos-anchor", ".skills-section", "aria-valuenow", "90", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "90%"], ["role", "progressbar", "data-aos", "zoom-in-right", "data-aos-delay", "600", "data-aos-anchor", ".skills-section", "aria-valuenow", "85", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "85%"], ["role", "progressbar", "data-aos", "zoom-in-right", "data-aos-delay", "600", "data-aos-anchor", ".skills-section", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "20%"], [1, "work-experience-section", "px-3", "px-lg-4"], [1, "h3", "mb-4"], [1, "timeline"], [1, "timeline-card", "timeline-card-primary", "card", "shadow-sm"], [1, "card-body"], [1, "h5", "mb-1"], [1, "text-muted", "h6"], [1, "text-muted", "text-small", "mb-2"], [1, "page-break"], [1, "education-section", "px-3", "px-lg-4", "pb-4"], [1, "timeline-card", "timeline-card-success", "card", "shadow-sm"], [2, "font-size", "70%"], ["routerLink", "../portfolio", "fragment", "Logistics_Company"], ["routerLink", "../portfolio", "fragment", "trency"], ["routerLink", "../portfolio", "fragment", "Terrainet"], ["id", "volunteer", 1, "contant-section", "px-3", "px-lg-4", "pb-4"], ["align", "center", 1, "h5"], [1, ""], ["src", "/assets/images/logos/logo_gdg.png", "ALIGN", "left", "HSPACE", "50", "width", "188", "height", "39"], ["align", "center", 1, "col-sm-2"], [1, "pb-1", "text-secondary", 2, "margin-bottom", "0pt"], [1, "pb-1", 2, "margin-top", "0pt"], ["src", "/assets/images/logos/dsc_esprit_logo.png", "ALIGN", "left", "HSPACE", "50", "width", "185", "height", "81"], ["src", "/assets/images/logos/logo_dsc.png", "ALIGN", "left", "HSPACE", "50", "width", "175", "height", "110"], ["src", "/assets/images/logos/isima_google_club_logo.png", "ALIGN", "left", "HSPACE", "50", "width", "173", "height", "98"], [1, "", 2, "margin-bottom", "0%"], [1, "row", "mt-2", 2, "margin-bottom", "0%"], ["id", "contact", 1, "contant-section", "px-3", "px-lg-4", "pb-4"], [1, "h3", "text", "mb-3"], [1, "col-md-7", "d-print-none"], [1, "my-2"], ["action", "https://formspree.io/f/mrgrakjk", "method", "POST", "name", "formspree"], [1, "col-6"], ["type", "text", "id", "name", "name", "name", "placeholder", "Your Name", "required", "", 1, "form-control"], ["type", "email", "id", "email", "name", "_replyto", "placeholder", "Your E-mail", "required", "", 1, "form-control"], [1, "form-group", "my-2"], ["id", "message", "name", "message", "rows", "4", "placeholder", "Your Message", "required", "", 1, "form-control", 2, "resize", "none"], ["type", "submit", 1, "btn", "btn-primary", "mt-2"], [1, "col"], [1, "mt-2"], [1, "h6"], [1, "pb-2", "text-secondary"], [2, "margin-bottom", "0"], [1, "pt-4", "pb-4", "text-muted", "text-center", "d-print-none"], [1, "my-3"], [1, "h4"], [1, "footer-nav"], [1, "nav", "justify-content-center"], ["href", "https://github.com/AnasCharfi", "title", "Github", 1, "nav-link"], [1, "text-small"], [1, "mb-1"], ["target", "_blank"], ["id", "scrolltop", 2, "position", "relative", "z-index", "999"], ["href", "#top", 1, "btn", "btn-primary", "smooth-scroll"], [1, "icon"], [1, "fas", "fa-angle-up", "fa-2x"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Hello!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "I\u2019m Anas CHARFI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " 'ERP-BI' Engineering Student \"Last grade\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Freelance Developer & Data Scientist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nav", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Behance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Get In Touch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Anas CHARFI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Developer & Data Scientist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Download CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Hire Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Hello there! Welcome to my Resume, I am Anas a self-directed and driven Business Intelligence last grade Engineering student. Enthusiast developer and self-learner. Digital Marketing and Java Trainer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "CharfiAnas1@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "+216-53-072-794");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Ksar Hellal, Monastir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Ariana Soghra, Tunis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "hr", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "h2", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Professional Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Spring Framework/Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Power BI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Scikit-learn / Keras / Tensor Flow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "R Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "CRISP-DM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Agile SCRUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Digital Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Adobe Photoshop / Illustrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Arabic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "French");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "German");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](200, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "hr", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "h2", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Internship - Fullstack Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "at Quality of Services Design `QoS Design`");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "1 Aug, 2021 - 15 Sept, 2021 [6 weeks]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Short experience along with Two supervisors and one team mate was just phenomenal, it was an opportunity for me to improve my french communication skills. Besides, the internship topic focused on the study, design and development of a prototype of a web application allowing the intelligent collection and analysis of promotional offers published on social networks. Given the health situation related to Covid-19, the internship was conducted remotely with regular supervision and follow-up of the trainee. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Key words:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, " Python, Flask, SQL, Angular, NodeJS, Sentiment Analysis, RestAPI, Web Scraping, Open Source Tools, Postman, Team Work. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Internship - Junior Data Scientist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "at Digital Research & Technologies `DRT`");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Feb, 2020 - Jul, 2020 [6 months]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "The journey in this company was incredibly beneficial for me as I improved my Communication & Technical Skills & Project Management & Team Work, it was for my Graduation Project to get my licence, the project was an Automatic Platform for the Analysis of Social Media. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Key words:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, " SCRUM, Python, NumPy, Pandas, Flask, MongoDB, Angular, NodeJS, Sentiment Analysis, Statistics, Charts, RestAPI, Web Scraping, Team Work.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](234, "hr", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](235, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "h2", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "2nd grade Computer Science Engineering ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "[");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "specialized in Business Intelligence 'BI'");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, " Student ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "at Esprit University, Ariana, Tunisia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "2021 - 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, " After getting a licence in CS, I felt that it wasn't enough knowledge for me to really get in the professional world, so I find out that the best choice is the continous within my studies, and after one year I'm sure that it was the Best Choice for me, getting courses at Esprit is really pumping my brain with more and more knowledge and experiences. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, "Fundamental Licence in Computer Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "from Higher Institute of C.S of Mahdia, Tunisia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "2017 - 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, " At this stage in my life and as a technology enthusiastic, it was a future vision for me till my High to study CS; 3 years at this institute was just Amazing, I felt that it was the place where I really should be, I've learned a lot of technologies, Problem Solving and Concepts such as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "Algorithm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "UML");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "JAVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "JAVA Swing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "Android");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "Basic Web Developement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "[HTML,CSS,JavaScript,Bootstrap,...], ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "Computer Network");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "[CCNA], ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "Artificial Intelligence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](289, " and more. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Baccalaureate in Technical Sciences ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "from 2 March High School, Ksar Hellal, Monastir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](298, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "hr", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](300, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "h2", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](303, "Projects Realized");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, " Desktop application for the management and control of stores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "for Amazon LLC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](314, " This tool was developed for an Amazon Store in Germany, a detailed description was given at first where my client specified every task the software was supposed to do, and it was for the stores employees where everyone of them could track the packages that he's supposed to work on or deliver for trucks that delivers them to Amazons clients; also a control feature to track Time and Calculate for the employee how much packages he delivered, supposed to deliver and wait to treat, and Finally, Advanced Filtering with low run time is primordial feature in stores at the scale of Amazon ones. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](315, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, " An executable file was delivered and a Training on how to Install and Personalize this software (colors, screen resolution, table columns size,...) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](319, "Key words:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, " Python, Getting Data From Amazon Servers, Numpy, Pandas, Tkinter, Selenium.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "more info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, "Decision support web platform for investment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](328, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](331, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, "Key words:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, " ML, RNN, LSTM, TensorFlow 2.x, Keras, Python, Flask, MongoDB, Angular, SpringBoot, Statistics, Charts (collecte, analyse, pr\u00E9vision et visualisation des donn\u00E9es), Team Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "more info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "Management of private sports fields ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, "as an Academic Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](345, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, " A project was done by 6 team members, the module I've done within this project was 'Field Management', where I had 4 entities, Category (Field sport, Number of team members in a game, Period of game,...), Field (Name, Adress, Lat, Lon, #category,...), Calendar (that must be created automaticly with the creation of the Field) and Finally Reservation (Time, Date, #idField, #idPlayer,...). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](352, "Key words:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, " SCRUM, SQL, Java, JavaFX, CodeNameOne, Symfony 4.4, Web, Desktop, Mobile, DB Centralized, Team Work, Github, Google Maps, FullCalendar, Mailing API.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "more info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](357, "hr", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](361, "Volunteer experiences");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](363, "Hello there! I am passionate about Developement and Data Science. I am a skilled Web and Desktop developer with some skills in Data Science and Graphic Design tools such as Photoshop. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](364, "hr", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "h2", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](367, "Google Developers Group Monastir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](369, "IMG", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](371, "Google Developer Groups (GDGs) are for developers who are interested in Google's, Open Source and other Companies Technologies; everything from the Android, Chrome, Drive, and Google Cloud platforms, to product APIs like the Cast API, Maps API, and YouTube API. A GDG can take many forms -- from just a few people getting together to watch our latest video, to large gatherings with demos and tech talks, to events like code sprints and hackathons. However, at the core, GDGs are focused on developers and technical content, and the core audience should be developers. 'Google LLC'. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](376, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](379, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](381, "Organizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, "Jan 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](389, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](391, "Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, "Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](396);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](399, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](400, "hr", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "h2", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](403, "Google Developers Students Club Esprit University");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](405, "IMG", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](407, "My job is Performing market research, Analyzing social media metrics and try to observe patterns of behavior, Connecting user behavior with a viable marketing strategy, Liaising with the marketing team to brainstorm a marketing campaign, Keeping abreast of social media trends. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](408, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](412, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](414, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](415, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417, "Marketing Stratigist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](420, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](422, "Sep 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](425, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](427, "Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](430, "Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](432);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](434, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](435, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](436, "hr", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](438, "h2", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](439, "Google Developers Students Club Mahdia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](441, "IMG", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](442, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](443, "After being the Founder and Leader of this initiative provided by Google LLC, my superiors honored me to be a Mentor for another year. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](444, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](448, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](451, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](454, "Mentor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](457, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](458, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](459, "Aug 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](460, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](462, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](464, "Sept 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, "1 Year, 1 Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](471, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](472, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](473, "hr", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](474, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](475, "h2", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](476, "Google Developers Students Club Mahdia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](477, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](478, "IMG", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](479, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](480, "DSC is a program powered by Google where DevTechs are our First concern to study and train other students on. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](482, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](483, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](485, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](487, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](488, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](489, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](490, "Founder & Leader");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](491, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](492, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](493, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](494, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](495, "Oct 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](496, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](497, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](498, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](499, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](500, "Aug 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](501, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](502, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](503, "Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](504, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](505, "9 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](506, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](507, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](508, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](509, "hr", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](510, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](511, "h2", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](512, "ISIMa Google Club");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](513, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](514, "IMG", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](515, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](516, "Hello there! I am passionate about Developement and Data Science. Web and Desktop developer with some skills in Data Science and Graphic Design tools such as Photoshop. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](517, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](518, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](520, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](521, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](522, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](524, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](525, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](526, "President");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](527, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](528, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](529, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](530, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](531, "Aug 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](532, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](533, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](534, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](535, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](536, "Jan 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](537, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](538, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](539, "Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](540, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](541, "1 Year, 4 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](542, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](543, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](544, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](545, "hr", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](546, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](547, "h2", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](548, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](549, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](550, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](551, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](552, "form", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](553, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](554, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](555, "input", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](556, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](557, "input", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](558, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](559, "textarea", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](560, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](561, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](562, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](563, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](564, "h3", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](565, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](566, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](567, "ul", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](568, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](569, "Ksar Hellal, Monastir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](570, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](571, "Ariana Soghra, Tunis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](572, "h3", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](573, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](574, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](575, "+216-53-072-794");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](576, "h3", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](577, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](578, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](579, "CharfiAnas1@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](580, "footer", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](581, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](582, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](583, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](584, "Anas CHARFI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](585, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](586, "nav", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](587, "ul", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](588, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](589, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](590, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](591, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](592, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](593, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](594, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](595, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](596, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](597, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](598, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](599, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](600, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](601, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](602, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](603, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](604, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](605, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](606, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](607, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](608, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](609, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](610, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](611, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](612, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](613, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](614, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](615, "\u00A9 My Resume. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](616, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](617, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](618, "Have a nice LIFE!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](619, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](620, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](621, "span", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](622, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](396);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dateDiff("Jan 2021"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dateDiff("Sep 2020"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */", "[data-aos][_ngcontent-%COMP%] {\n    opacity: 1 !important;\n    transform: translate(0) scale(1) !important;\n  }"] });


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
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 43, vars: 0, consts: [["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "preconnect", "href", "https://fonts.gstatic.com", "crossorigin", "crossorigin"], ["rel", "preload", "as", "style", "href", "https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Nunito+Sans:wght@300;400;600;700&display=swap"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Nunito+Sans:wght@300;400;600;700&display=swap", "media", "print", "onload", "this.media='all'"], ["rel", "preload", "as", "style", "href", "https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto:wght@300;400;500;700&display=swap"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto:wght@300;400;500;700&display=swap", "media", "print", "onload", "this.media='all'"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto:wght@300;400;500;700&display=swap"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Nunito+Sans:wght@300;400;600;700&display=swap"], ["href", "/assets/css/bootstrap.min.css?ver=1.1.0", "rel", "stylesheet"], ["href", "/assets/css/font-awesome/css/all.min.css?ver=1.1.0", "rel", "stylesheet"], ["href", "/assets/css/aos.css?ver=1.1.0", "rel", "stylesheet"], ["href", "/assets/css/main.css?ver=1.1.0", "rel", "stylesheet"], ["href", "/assets/2nd/css/font-awesome/css/all.min.css?ver=1.2.0", "rel", "stylesheet"], ["href", "/assets/2nd/css/bootstrap.min.css?ver=1.2.0", "rel", "stylesheet"], ["href", "/assets/2nd/css/aos.css?ver=1.2.0", "rel", "stylesheet"], ["href", "/assets/2nd/css/main.css?ver=1.2.0", "rel", "stylesheet"], ["href", "/assets/2nd/css/mine.css?ver=1.2.0", "rel", "stylesheet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "noscript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "link", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "link", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "link", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "link", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "link", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "link", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "link", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "link", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "noscript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "link", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "link", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "link", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "link", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "link", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "link", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "link", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "link", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "noscript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "router-outlet");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */", "[data-aos][_ngcontent-%COMP%] {\n        opacity: 1 !important;\n        transform: translate(0) scale(1) !important;\n      }"] });


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./certificates/certificates.component */ "mo2b");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "zyDg");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_4__["CertificatesComponent"],
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]] }); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavbarComponent {
    constructor() {
        this.mobileMenuState = false;
    }
    ngOnInit() {
    }
    showHideNavbar() {
        const element = document.getElementById('navbarSupportedContent');
        if (element && this.mobileMenuState == false) {
            element.classList.add('show');
            //element.setAttribute("style", "background-color:#FFFFFF;");
            this.mobileMenuState = true;
        }
        else if (element && this.mobileMenuState == true) {
            element.classList.remove('show');
            this.mobileMenuState = false;
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 30, vars: 0, consts: [["id", "header-nav", "role", "navigation", 1, "navbar", "navbar-expand-lg", 2, "background", "#91bdf8"], [1, "container"], ["href", "#", 1, "nav-link", "smooth-scroll"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 2, "background-image", "url('/assets/images/bars-solid.svg')", "background-repeat", "no-repeat", "background-size", "contain", "background-position-x", "center", "position", "relative", "z-index", "999", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "me-2"], [1, "nav-item"], [1, "nav-item", 2, "border-top", "1px dashed  #6194d6", "border-bottom", "1px dashed #6194d6"], ["href", "#about", 1, "nav-link", "smooth-scroll"], ["href", "#services", 1, "nav-link", "smooth-scroll"], ["href", "#skills", 1, "nav-link", "smooth-scroll"], ["routerLink", "portfolio", 1, "nav-link", "smooth-scroll"], ["href", "#experience", 1, "nav-link", "smooth-scroll"], ["routerLink", "certificates", "routerLinkActive", "active", 1, "nav-link", "smooth-scroll"], ["href", "#contact", 1, "nav-link", "smooth-scroll"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener() { return ctx.showHideNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Certificates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "mo2b":
/*!********************************************************!*\
  !*** ./src/app/certificates/certificates.component.ts ***!
  \********************************************************/
/*! exports provided: CertificatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesComponent", function() { return CertificatesComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["carousel"];
function CertificatesComponent_ngb_carousel_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CertificatesComponent_ngb_carousel_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.images[1], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CertificatesComponent_ngb_carousel_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.images[2], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CertificatesComponent_ngb_carousel_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r5.images[3], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CertificatesComponent_ngb_carousel_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r6.images[4], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CertificatesComponent_ngb_carousel_3_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r7.images[5], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CertificatesComponent_ngb_carousel_3_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r8.images[6], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CertificatesComponent_ngb_carousel_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r9.images[7], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CertificatesComponent_ngb_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CertificatesComponent_ngb_carousel_3_ng_template_1_Template, 2, 1, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CertificatesComponent_ngb_carousel_3_ng_template_2_Template, 2, 1, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CertificatesComponent_ngb_carousel_3_ng_template_3_Template, 2, 1, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CertificatesComponent_ngb_carousel_3_ng_template_4_Template, 2, 1, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CertificatesComponent_ngb_carousel_3_ng_template_5_Template, 2, 1, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CertificatesComponent_ngb_carousel_3_ng_template_6_Template, 2, 1, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CertificatesComponent_ngb_carousel_3_ng_template_7_Template, 2, 1, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CertificatesComponent_ngb_carousel_3_ng_template_8_Template, 2, 1, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CertificatesComponent_tr_24_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td");
} }
function CertificatesComponent_tr_24_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const certificate_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", certificate_r10.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CertificatesComponent_tr_24_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CertificatesComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CertificatesComponent_tr_24_td_7_Template, 1, 0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CertificatesComponent_tr_24_ng_template_8_Template, 3, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CertificatesComponent_tr_24_ng_template_10_Template, 2, 0, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const certificate_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", certificate_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](certificate_r10.provider);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", certificate_r10.link)("ngIfThen", _r13)("ngIfElse", _r15);
} }
const CERTIFICATES = [
    {
        name: 'Data Science Methodology',
        provider: 'IBM',
        link: "https://courses.cognitiveclass.ai/certificates/2763acb81f1c4248bf07fbe3a1d35179",
    },
    {
        name: 'Sentiment Analysis on Tunisian Google Play Store',
        provider: 'Zindi',
        link: "https://zindi.africa/users/AnasCharfi/competitions/certificate",
    },
    {
        name: 'ML Hackathon',
        provider: 'DSC Tunisia',
        link: "",
    },
    {
        name: 'Hub Organizer 2020',
        provider: 'Google LLC',
        link: "",
    },
    {
        name: 'Hub Organizer',
        provider: 'Google LLC',
        link: "",
    },
    {
        name: 'Python',
        provider: 'Solo Learn',
        link: "https://www.sololearn.com/Certificate/1073-12105060/jpg/",
    },
    {
        name: 'Php',
        provider: 'Solo Learn',
        link: "https://www.sololearn.com/Certificate/1059-12105060/jpg/",
    },
    {
        name: 'SQL',
        provider: 'Solo Learn',
        link: "https://www.sololearn.com/certificates/course/en/12105060/1060/landscape/png",
    },
];
class CertificatesComponent {
    constructor() {
        this.images = ["/assets/images/certifications/DataScienceMethodology.png",
            "/assets/images/certifications/AnasCharfi - Zindi.png",
            "/assets/images/certifications/Ml Competition -DSC Tunisia-.jpg",
            "/assets/images/certifications/Hash Code 2020 - Hub Organizer.png",
            "/assets/images/certifications/Hash Code 2019 - Hub Organizer.png",
            "/assets/images/certifications/python-sololearn.jpg",
            "/assets/images/certifications/php-sololearn.jpg",
            "/assets/images/certifications/sql-sololearn.png"
        ];
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = false;
        this.pauseOnFocus = true;
        this.certificates = CERTIFICATES;
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    ngOnInit() {
    }
}
CertificatesComponent.ɵfac = function CertificatesComponent_Factory(t) { return new (t || CertificatesComponent)(); };
CertificatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CertificatesComponent, selectors: [["app-certificates"]], viewQuery: function CertificatesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 72, vars: 2, consts: [["id", "top"], ["align", "center", 2, "margin-top", "2%"], ["class", "text-lg-center", 4, "ngIf"], ["align", "center", 2, "padding-top", "20px"], [2, "font-size", "10pt"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "bg-light"], [1, "page-content", 2, "margin-bottom", "10px"], ["id", "content"], [1, "cover", "bg-light", 2, "background", "linear-gradient(180deg ,  #91bdf8, #F5F7FA  )"], [1, "pt-4", "pb-4", "text-muted", "text-center", "d-print-none"], [1, "container"], [1, "my-3"], [1, "h4"], [1, "footer-nav"], ["role", "navigation"], [1, "nav", "justify-content-center"], [1, "nav-item"], ["href", "https://twitter.com/CharfiAnas", "title", "Twitter", 1, "nav-link"], [1, "fab", "fa-twitter"], [1, "menu-title", "sr-only"], ["href", "https://www.facebook.com/The.Hakerz.Zinger/", "title", "Facebook", 1, "nav-link"], [1, "fab", "fa-facebook-f"], ["href", "https://www.instagram.com/anascharfi/", "title", "Instagram", 1, "nav-link"], [1, "fab", "fa-instagram"], ["href", "https://www.linkedin.com/in/anas-charfi/", "title", "LinkedIn", 1, "nav-link"], [1, "fab", "fa-linkedin"], ["href", "https://github.com/AnasCharfi", "title", "Behance", 1, "nav-link"], [1, "fab", "fa-github"], [1, "text-small"], [1, "mb-1"], ["target", "_blank"], ["id", "scrolltop"], ["href", "#top", 1, "btn", "btn-primary", "smooth-scroll"], [1, "icon"], [1, "fas", "fa-angle-up", "fa-2x"], [1, "text-lg-center"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 3, "src"], ["alt", "Random second slide", 2, "max-width", "941px", "max-height", "559", 3, "src"], ["alt", "Random third slide", 2, "max-width", "941px", "max-height", "559", 3, "src"], ["scope", "row"], [2, "word-wrap", "normal"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["existsBlock", ""], ["elseBlock", ""], ["target", "_blank", 3, "href"], ["src", "/assets/images/link.svg"]], template: function CertificatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Below you will find the certificates that I've seen to be the most important ones");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CertificatesComponent_ngb_carousel_3_Template, 9, 0, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Within the table below you will find a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " [if exists] to check the certificate credentials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "more is coming soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Certificate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Provider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CertificatesComponent_tr_24_Template, 12, 6, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "header", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "footer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Anas CHARFI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "nav", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Behance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "\u00A9 My Resume. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Have a nice LIFE!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.certificates);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZXJ0aWZpY2F0ZXMuY29tcG9uZW50LmNzcyJ9 */", "[data-aos][_ngcontent-%COMP%] {\n    opacity: 1 !important;\n    transform: translate(0) scale(1) !important;\n  }"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificates/certificates.component */ "mo2b");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "zyDg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: 'certificates', component: _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_2__["CertificatesComponent"] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: '**', redirectTo: 'home' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { anchorScrolling: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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

/***/ "zyDg":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["carousel"];
function PortfolioComponent_ngb_carousel_54_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "10 seconds between slides...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel uses customized default values.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.trency_images[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_ngb_carousel_54_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No mouse events...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel doesn't pause or resume on mouse events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.trency_images[1], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_ngb_carousel_54_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No mouse events...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel doesn't pause or resume on mouse events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.trency_images[2], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_ngb_carousel_54_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No mouse events...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel doesn't pause or resume on mouse events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r5.trency_images[3], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_ngb_carousel_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PortfolioComponent_ngb_carousel_54_ng_template_1_Template, 7, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PortfolioComponent_ngb_carousel_54_ng_template_2_Template, 7, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PortfolioComponent_ngb_carousel_54_ng_template_3_Template, 7, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PortfolioComponent_ngb_carousel_54_ng_template_4_Template, 7, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PortfolioComponent_ngb_carousel_75_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "10 seconds between slides...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel uses customized default values.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r6.terrainet_images[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_ngb_carousel_75_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No mouse events...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel doesn't pause or resume on mouse events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r7.terrainet_images[1], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_ngb_carousel_75_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No mouse events...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel doesn't pause or resume on mouse events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r8.terrainet_images[2], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_ngb_carousel_75_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No mouse events...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel doesn't pause or resume on mouse events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r9.terrainet_images[3], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_ngb_carousel_75_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No mouse events...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel doesn't pause or resume on mouse events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r10.terrainet_images[4], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_ngb_carousel_75_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No mouse events...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel doesn't pause or resume on mouse events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r11.terrainet_images[5], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_ngb_carousel_75_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No mouse events...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel doesn't pause or resume on mouse events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r12.terrainet_images[6], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_ngb_carousel_75_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No mouse events...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel doesn't pause or resume on mouse events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r13.terrainet_images[7], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_ngb_carousel_75_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No mouse events...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel doesn't pause or resume on mouse events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r14.terrainet_images[8], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_ngb_carousel_75_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No mouse events...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel doesn't pause or resume on mouse events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r15.terrainet_images[9], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_ngb_carousel_75_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No mouse events...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This carousel doesn't pause or resume on mouse events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r16.terrainet_images[10], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_ngb_carousel_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PortfolioComponent_ngb_carousel_75_ng_template_1_Template, 7, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PortfolioComponent_ngb_carousel_75_ng_template_2_Template, 7, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PortfolioComponent_ngb_carousel_75_ng_template_3_Template, 7, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PortfolioComponent_ngb_carousel_75_ng_template_4_Template, 7, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PortfolioComponent_ngb_carousel_75_ng_template_5_Template, 7, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PortfolioComponent_ngb_carousel_75_ng_template_6_Template, 7, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PortfolioComponent_ngb_carousel_75_ng_template_7_Template, 7, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PortfolioComponent_ngb_carousel_75_ng_template_8_Template, 7, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PortfolioComponent_ngb_carousel_75_ng_template_9_Template, 7, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PortfolioComponent_ngb_carousel_75_ng_template_10_Template, 7, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PortfolioComponent_ngb_carousel_75_ng_template_11_Template, 7, 1, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const CERTIFICATES = [
    {
        name: 'Data Science Methodology',
        provider: 'IBM',
        link: "https://courses.cognitiveclass.ai/certificates/2763acb81f1c4248bf07fbe3a1d35179",
    },
    {
        name: 'Sentiment Analysis on Tunisian Google Play Store',
        provider: 'Zindi',
        link: "https://zindi.africa/users/AnasCharfi/competitions/certificate",
    },
    {
        name: 'ML Hackathon',
        provider: 'DSC Tunisia',
        link: "",
    },
];
class PortfolioComponent {
    constructor() {
        this.trency_images = [
            "/assets/images/portfolio/dev/trency/training.PNG",
            "/assets/images/portfolio/dev/trency/prediction.PNG",
            "/assets/images/portfolio/dev/trency/convertir_devise.png",
            "/assets/images/portfolio/dev/trency/evolution_bourse.png",
        ];
        this.terrainet_images = [
            "/assets/images/portfolio/dev/TerraiNet/Gestion_terrains.png",
            "/assets/images/portfolio/dev/TerraiNet/Maps_terrain.png",
            "/assets/images/portfolio/dev/TerraiNet/List_Categories.png",
            "/assets/images/portfolio/dev/TerraiNet/ajouter_categ_admin.png",
            "/assets/images/portfolio/dev/TerraiNet/acceuil_admin.png",
            "/assets/images/portfolio/dev/TerraiNet/Filter.png",
            "/assets/images/portfolio/dev/TerraiNet/admin_gestion_category.png",
            "/assets/images/portfolio/dev/TerraiNet/admin_gestion_terrain.png",
            "/assets/images/portfolio/dev/TerraiNet/Tous_terrains.png",
            "/assets/images/portfolio/dev/TerraiNet/Un_terrain.png",
            "/assets/images/portfolio/dev/TerraiNet/Vos_terrains.png",
        ];
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = false;
        this.pauseOnFocus = true;
        this.certificates = CERTIFICATES;
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    ngOnInit() {
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], viewQuery: function PortfolioComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 154, vars: 2, consts: [["id", "top"], [1, "page-content"], [1, "container"], [1, "cover", "shadow-lg", "p-lg-4", 2, "margin-top", "50px"], [1, "cover-dev"], [1, "row"], [1, "text-center", "text-md-start"], ["data-aos", "fade-left", "data-aos-delay", "100"], ["data-aos", "fade-left", "data-aos-delay", "0", "align", "center", 1, "h1", "mb-3", 2, "color", "white"], ["data-aos", "fade-left", "data-aos-delay", "200", 1, "d-print-none"], ["id", "Logistics_Company", 1, "about-section", "pt-4", "px-3", "px-lg-4", "mt-1"], [1, ""], [1, "h4", "mb-1"], [1, "text-muted", "h5"], [1, "text-muted", "h6", 2, "font-size", "50%"], [1, "text-muted", "h6"], ["align", "center"], ["width", "720", "height", "405", "controls", "", "controlsList", "nodownload"], ["src", "/assets/videos/Logistics_Company.mp4", "type", "video/mp4"], [2, "text-align", "justify", "text-justify", "inter-word"], [1, "h6", "mb-1"], ["src", "/assets/images/portfolio/reviews_dev/Logistics_Company.PNG", 1, "client-review"], [1, "d-print-none"], ["id", "trency", 1, "about-section", "pt-4", "px-3", "px-lg-4", "mt-1"], ["class", "text-lg-center", 4, "ngIf"], ["id", "Terrainet", 1, "about-section", "pt-4", "px-3", "px-lg-4", "mt-1"], [1, "cover-design"], [1, "about-section", "pt-4", "px-3", "px-lg-4", "mt-1"], ["src", "/assets/images/portfolio/design/logo_trency.png", "width", "400", "height", "200", "alt", "logo_anit", 1, "img-fluid", 2, "border-radius", "10px"], ["src", "/assets/images/portfolio/design/logo_anit.png", "width", "200", "height", "200", "alt", "logo_anit", 1, "img-fluid"], ["src", "/assets/images/portfolio/design/logo_datasense.png", "width", "400", "height", "200", "alt", "logo_anit", 1, "img-fluid"], ["src", "/assets/images/portfolio/design/business_card_front.png", "width", "500", "alt", "business_card_front", 1, "img-fluid"], ["align", "center", 1, "h4", "mb-1"], ["src", "/assets/images/portfolio/design/business_card_back.png", "width", "500", "alt", "business_card_back", 1, "img-fluid"], [1, "text-lg-center"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 2, "height", "100%", "width", "100%", "object-fit", "contain", 3, "src"], [1, "carousel-caption"], ["alt", "Random second slide", 2, "height", "100%", "width", "100%", "object-fit", "contain", 3, "src"], ["alt", "Random third slide", 2, "height", "100%", "width", "100%", "object-fit", "contain", 3, "src"], ["alt", "Random fourth slide", 2, "height", "100%", "width", "100%", "object-fit", "contain", 3, "src"], ["alt", "Random second slide", 2, "height", "100%", "width", "110%", "object-fit", "contain", 3, "src"], ["alt", "Random fourth slide", 3, "src"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Coding");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Management and control of stores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " for Amazon LLC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " [");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Desktop application");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "video", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "source", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "The figure below shows the logo of our platform, we chose to use the colors of the Instagram and Twitter logos whose platform provides a targeted service to users of these social networks, also the abbreviation of the project name and An for analysis, I for Instagram, T for Twitter and finally IT is the English abbreviation for 'Information Technology'. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Client Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Decision support for investment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " for Confidential");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " [");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Web Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, PortfolioComponent_ngb_carousel_54_Template, 5, 0, "ngb-carousel", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "The figure below shows the logo of our platform, we chose to use the colors of the Instagram and Twitter logos whose platform provides a targeted service to users of these social networks, also the abbreviation of the project name and An for analysis, I for Instagram, T for Twitter and finally IT is the English abbreviation for 'Information Technology'. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Client Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Management of private sports fields ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " as an Academic Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " [");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Web, Mobile & Desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, PortfolioComponent_ngb_carousel_75_Template, 12, 0, "ngb-carousel", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "The figure below shows the logo of our platform, we chose to use the colors of the Instagram and Twitter logos whose platform provides a targeted service to users of these social networks, also the abbreviation of the project name and An for analysis, I for Instagram, T for Twitter and finally IT is the English abbreviation for 'Information Technology'. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Trency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "La figure [61] ci-dessus expose le logo de notre plateforme qui est minimale et simple puisque c'est la tendance. La loupe qui contient une charte expose l'id\u00E9e que notre projet donne un plus que les autres projets qui sont bas\u00E9s juste sur l'affichage des chartes d'\u00E9volution des prix. Le nom de notre projet est compos\u00E9 de deux mots : Tr + ency -\u201DTr\u201D c'est pour le \"Trading'\" et c'est le jeu des stocks et d'investissement, -\u201Dency\u201D c'est pour \"Currency'\" et c'est la devise. Finalement, nous avons choisi la d\u00E9gradation des couleurs pour mettre en valeur l'id\u00E9e de l'\u00E9volution et l'oranger pour donner l'impression dynamique et rapide. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Anit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "The figure below shows the logo made for my Graduation Project, I chose to use the colors of the Instagram and Twitter logos whose platform provides a targeted service to users of these social networks, also the abbreviation of the project name and An for analysis, I for Instagram, T for Twitter and finally IT is the English abbreviation for 'Information Technology'. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "DataSense");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, " Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "The figure below shows the logo of our platform, we chose to use the colors of the Instagram and Twitter logos whose platform provides a targeted service to users of these social networks, also the abbreviation of the project name and An for analysis, I for Instagram, T for Twitter and finally IT is the English abbreviation for 'Information Technology'. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Advocate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, " Business Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Front Face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Back Face");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "The figure below shows the logo of our platform, we chose to use the colors of the Instagram and Twitter logos whose platform provides a targeted service to users of these social networks, also the abbreviation of the project name and An for analysis, I for Instagram, T for Twitter and finally IT is the English abbreviation for 'Information Technology'. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.trency_images);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.terrainet_images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */", "[data-aos][_ngcontent-%COMP%] {\n        opacity: 1 !important;\n        transform: translate(0) scale(1) !important;\n    }"] });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map