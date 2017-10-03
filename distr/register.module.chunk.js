webpackJsonp(["register.module"],{

/***/ "../../../../../src/app/_models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, password, id) {
        this.id = id || null;
        this.username = username;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/register/register-box/register-box.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Form with header-->\n<div class=\"card\">\n    <div class=\"card-block\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)='onSubmit()' novalidate>\n            <!--Header-->\n            <div class=\"form-header brand-color\">\n                <h3><i class=\"fa fa-user\"></i> Register</h3>\n            </div>\n    \n            <!--Body-->\n            <div class=\"md-form\">\n                <input type=\"text\" id=\"username\" formControlName=\"username\" class=\"form-control\" required>\n                <label for=\"username\">Your username</label>\n            </div>\n            <div class=\"md-form\">\n                <input type=\"text\" id=\"email\" formControlName=\"email\" class=\"form-control\" required>\n                <label for=\"email\">Your email</label>\n            </div>\n    \n            <div class=\"md-form\">\n                <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\" required>\n                <label for=\"password\">Your password</label>\n            </div>\n    \n            <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn brand-color btn-block\">Register</button>\n            </div>\n        </form>\n\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"container\">             \n            <div class=\"text-center\">\n                <small>\n                    Have an account?\n                    <a routerLink=\"/login\" routerLinkActive=\"active\">Log In.</a>\n                </small>\n            </div>\n        </div>\n    </div>\n</div>\n<!--/Form with header-->\n"

/***/ }),

/***/ "../../../../../src/app/register/register-box/register-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register-box/register-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user_model__ = __webpack_require__("../../../../../src/app/_models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterBoxComponent = (function () {
    function RegisterBoxComponent(authService, vcr, fb, router, toastr) {
        this.authService = authService;
        this.vcr = vcr;
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
        this.registerForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
        });
    }
    ;
    RegisterBoxComponent.prototype.onSubmit = function () {
        var _this = this;
        var formModel = this.registerForm.value;
        var form = this.registerForm;
        console.log(formModel);
        if (this.registerForm.status === 'INVALID') {
            if (this.registerForm.get('username').status === 'INVALID') {
                this.toastr.error('Username is missing');
            }
            if (this.registerForm.get('email').status === 'INVALID') {
                this.toastr.error('Email is missing');
            }
        }
        else {
            var user = new __WEBPACK_IMPORTED_MODULE_0__models_user_model__["a" /* User */](form.get('username').value, form.get('password').value);
            this.authService.register(user)
                .then(function (res) {
                if (res.status === 200) {
                    // We're good to go
                    _this.router.navigateByUrl('/login');
                }
            })
                .catch(function (res) {
                var errors = JSON.parse(res._body).detail;
                _this.toastr.error(errors);
                console.log(errors);
            });
        }
    };
    ;
    RegisterBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-register-box',
            template: __webpack_require__("../../../../../src/app/register/register-box/register-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register-box/register-box.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _e || Object])
    ], RegisterBoxComponent);
    return RegisterBoxComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=register-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__register_component__["a" /* RegisterComponent */]
    }
];
var RegisterRoutingModule = (function () {
    function RegisterRoutingModule() {
    }
    RegisterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forChild(routes)
            ]
        })
    ], RegisterRoutingModule);
    return RegisterRoutingModule;
}());

//# sourceMappingURL=register-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <br>\n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-3\"></div>\n    <div class=\"col-lg-4 col-md-3\"></div>\n    <div class=\"col-lg-4 col-md-6 col-sm-12\"><app-register-box></app-register-box></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#background {\n  background-color: #263238; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.scss")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_routing_module__ = __webpack_require__("../../../../../src/app/register/register-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_box_register_box_component__ = __webpack_require__("../../../../../src/app/register/register-box/register-box.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RegisterModule = (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__register_box_register_box_component__["a" /* RegisterBoxComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__register_routing_module__["a" /* RegisterRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */]
            ]
        })
    ], RegisterModule);
    return RegisterModule;
}());
/* harmony default export */ __webpack_exports__["default"] = (RegisterModule);
//# sourceMappingURL=register.module.js.map

/***/ })

});
//# sourceMappingURL=register.module.chunk.js.map