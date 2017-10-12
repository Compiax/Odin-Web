webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/browse-package/browse-package.module": [
		"../../../../../src/app/browse-package/browse-package.module.ts",
		"browse-package.module"
	],
	"app/browse-projects/browse-projects.module": [
		"../../../../../src/app/browse-projects/browse-projects.module.ts",
		"browse-projects.module"
	],
	"app/login/login.module": [
		"../../../../../src/app/login/login.module.ts",
		"login.module",
		"common"
	],
	"app/register/register.module": [
		"../../../../../src/app/register/register.module.ts",
		"register.module",
		"common"
	],
	"app/view-package/view-package.module": [
		"../../../../../src/app/view-package/view-package.module.ts",
		"view-package.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    // private headers = new Headers({'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    //   'Access-Control-Allow-Origin': `${environment.api_url}`,
    //   'Access-Control-Allow-Credentials': true});
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.register = function (user) {
        var data = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* URLSearchParams */]();
        data.set('username', user.username);
        data.set('password', user.password);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_url + "/auth/register";
        console.log(url);
        console.log(data);
        return this.http.post(url, data, { withCredentials: true })
            .toPromise()
            .then(function (res) {
            return new Promise(function (resolve, reject) {
                // console.log(res.headers);
                resolve(res);
            });
        });
    };
    AuthService.prototype.login = function (username, password) {
        // const data = 'username=' + username + '&password=' + password;
        // const url = environment.api_url + '/auth/login';
        // console.log(url);
        // return this.http.post(url, data, {headers: this.headers, withCredentials: true})
        // .toPromise()
        // .then((res) => {
        //     return new Promise((resolve, reject) => {
        //       if (res.status === 200) {
        //         localStorage.setItem('currentUser', res.json().data[0]);
        //         console.log(localStorage.getItem('currentUser'));
        //         resolve(res);
        //         console.log("Logged in");
        //         console.log(res.headers);
        //       } else {
        //         reject(res);
        //       }
        //     });
        // });
    };
    AuthService.prototype.isLoggedIn = function () {
        // const url = environment.api_url + '/auth/loggedIn';
        // console.log(url);
        // console.log('Calling isLoggedIn');
        // return this.http.post(url, '', {headers: this.headers, withCredentials: true})
        // .toPromise();
    };
    AuthService.prototype.logOut = function () {
        // const url = environment.api_url + '/auth/logout';
        // console.log('Calling isLoggedIn');
        // localStorage.setItem('currentUser', null);
        // return this.http.post(url, '', {headers: this.headers, withCredentials: true}).toPromise();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/components.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentsService = (function () {
    function ComponentsService(http) {
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/X-www-form-urlencoded' });
    }
    ComponentsService.prototype.getComponents = function () {
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + '/components/';
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(function (res) {
            return new Promise(function (resolve, reject) {
                console.log(res);
                resolve(res);
            });
        });
    };
    ComponentsService.prototype.getComponent = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + '/components/' + id;
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(function (res) {
            return new Promise(function (resolve, reject) {
                console.log(res);
                resolve(res);
            });
        });
    };
    ComponentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ComponentsService);
    return ComponentsService;
    var _a;
}());

//# sourceMappingURL=components.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/guards/isAuthenticatedGuard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsAuthenticatedGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IsAuthenticatedGuard = (function () {
    function IsAuthenticatedGuard(http, authService, router) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/X-www-form-urlencoded' });
        this.as = authService;
        this.r = router;
    }
    IsAuthenticatedGuard.prototype.canActivate = function () {
        console.log('Calling canActivate');
        var self = this;
        return new Promise(function (resolve, reject) {
            // self.as.isLoggedIn().then(() => {
            //   resolve(true);
            // })
            // .catch((res) => {
            //   if (res.status === 401) {
            //     console.log("Not logged in");
            //     self.r.navigate(['/login']);
            //     resolve(false);
            //   };
            // });
        });
    };
    IsAuthenticatedGuard.prototype.isLoggedIn = function () {
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + '/auth/loggedIn';
        return this.http.post(url, '', { headers: this.headers })
            .toPromise();
    };
    IsAuthenticatedGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], IsAuthenticatedGuard);
    return IsAuthenticatedGuard;
    var _a, _b, _c;
}());

//# sourceMappingURL=isAuthenticatedGuard.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsService = (function () {
    function ProjectsService(http) {
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/X-www-form-urlencoded' });
    }
    ProjectsService.prototype.getProjects = function () {
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + '/projects/';
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(function (res) {
            return new Promise(function (resolve, reject) {
                console.log(res);
                resolve(res);
            });
        });
    };
    ProjectsService.prototype.getProject = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + '/projects/' + id;
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(function (res) {
            return new Promise(function (resolve, reject) {
                console.log(res);
                resolve(res);
            });
        });
    };
    ProjectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ProjectsService);
    return ProjectsService;
    var _a;
}());

//# sourceMappingURL=projects.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SessionService = (function () {
    function SessionService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    SessionService.prototype.executeSession = function (data) {
        var url = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].api_url + '/session/execute';
        console.log(url);
        return this.http.post(url, data, { headers: this.headers, withCredentials: true })
            .toPromise()
            .then(function (res) {
            return new Promise(function (resolve, reject) {
                if (res.status === 200) {
                    console.log("Success");
                    console.log(res);
                    resolve(res);
                }
                else {
                    console.log("ERROR");
                    console.log(res);
                    reject(res);
                }
            });
        });
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], SessionService);
    return SessionService;
    var _a;
}());

//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_designspace_page_designspace_page_component__ = __webpack_require__("../../../../../src/app/pages/designspace-page/designspace-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: 'app/login/login.module'
    },
    {
        path: 'register',
        loadChildren: 'app/register/register.module'
    },
    {
        path: 'packages',
        loadChildren: 'app/browse-package/browse-package.module',
    },
    {
        path: 'packages/:id',
        loadChildren: 'app/view-package/view-package.module',
    },
    {
        path: 'projects/new',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_designspace_page_designspace_page_component__["a" /* DesignspacePageComponent */],
    },
    {
        path: 'projects',
        loadChildren: 'app/browse-projects/browse-projects.module',
    },
    {
        path: 'view-package',
        loadChildren: 'app/view-package/view-package.module',
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_session_service__ = __webpack_require__("../../../../../src/app/_services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_projects_service__ = __webpack_require__("../../../../../src/app/_services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_components_service__ = __webpack_require__("../../../../../src/app/_services/components.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_guards_isAuthenticatedGuard_service__ = __webpack_require__("../../../../../src/app/_services/guards/isAuthenticatedGuard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_designspace_page_designspace_page_component__ = __webpack_require__("../../../../../src/app/pages/designspace-page/designspace-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_designspace_page_designspace_page_component__["a" /* DesignspacePageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_8__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_guards_isAuthenticatedGuard_service__["a" /* IsAuthenticatedGuard */], __WEBPACK_IMPORTED_MODULE_2__services_components_service__["a" /* ComponentsService */], __WEBPACK_IMPORTED_MODULE_1__services_projects_service__["a" /* ProjectsService */], __WEBPACK_IMPORTED_MODULE_0__services_session_service__["a" /* SessionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/core/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__navbar_navbar_component__["a" /* NavbarComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"mb-1 navbar navbar-toggleable-md navbar-dark bg-unique red darken-2\" *ngIf=\"show\">\n    <div class=\"container\">\n        <div class=\"mr-auto\">\n            <a class=\"navbar-brand\" href=\"/\" routerLink=\"/\" routerLinkActive=\"active\">\n                ODIN\n            </a>               \n        </div>\n\n        <ul class=\"nav navbar-nav navbar-right nav-flex-icons ml-auto\">\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/projects\" routerLink=\"/projects\" routerLinkActive=\"active\"><span class=\"clearfix d-none d-sm-inline-block\">Projects</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/projects/new\" routerLink=\"/projects/new\" routerLinkActive=\"active\"><span class=\"clearfix d-none d-sm-inline-block\">New Project</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/packages\" routerLink=\"/packages\" routerLinkActive=\"active\"><span class=\"clearfix d-none d-sm-inline-block\">Packages</span></a>\n            <!-- </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/documentation\" routerLink=\"/documentation\" routerLinkActive=\"active\"><span class=\"clearfix d-none d-sm-inline-block\">Documentation</span></a>\n            </li> -->\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-user-circle\"></i> <strong>{{ username }}</strong></a>\n                <div class=\"dropdown-menu dropdown-primary\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" href=\"#\">Profile</a>\n                    <a class=\"dropdown-item\" href=\"#\">Settings</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\"\n                        (click)=\"logOut()\"\n                    >Log Out</a>\n                </div>\n            </li>\n\n        </ul>\n    </div>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/core/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(router, route, authService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.show = true;
        this.eval();
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    // Logs out
    NavbarComponent.prototype.logOut = function () {
        // this.authService.logOut()
        // .then(() => {
        //   console.log("In promise");
        //   this.router.navigateByUrl('/login');
        // });
    };
    NavbarComponent.prototype.updateUsername = function () {
        var self = this;
        // this.authService.isLoggedIn()
        // .then((res: any) => {
        //   console.log(res);
        //   let data = JSON.parse(res._body);
        //     self.username = data.username;
        // });
    };
    // Checks if the navbar should be displayed
    NavbarComponent.prototype.eval = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            console.log("Event");
            _this.updateUsername();
            var url = evt.url.substr(1, evt.url.length - 1).replace('/', '-');
            console.log(url);
            if (url === 'login' || url === 'register') {
                _this.show = false;
            }
            else {
                _this.show = true;
            }
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/core/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/designspace-page/designspace-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-2 p-0 px-2 mt-3\">\n        <div class=\"card-body components ml-4\">\n            <div class=\"card-header red darken-2 white-text\">Control</div>\n            <a (click)=\"addInput()\" class=\"list-group-item\"><i class=\"fa fa-pencil-square-o mr-2\"></i>Input</a>\n            <a (click)=\"addOutput()\" class=\"list-group-item\"><i class=\"fa fa-sign-out mr-2\"></i>Output</a>\n            <a (click)=\"executeSession()\" class=\"list-group-item\"><i class=\"fa fa-play mr-2\"></i>Execute</a>\n        </div>\n        <div class=\"card-body components ml-4 mt-3\">\n            <div class=\"card-header red darken-2 white-text\">Components</div>\n            <a (click)=\"addNode('Add', 'Math')\" class=\"list-group-item\"><i class=\"fa fa-calculator mr-2\"></i><span class='text-muted'>Math</span>/Add</a>\n            <a (click)=\"addNode('Subtract', 'Math')\" class=\"list-group-item\"><i class=\"fa fa-calculator mr-2\"></i><span class='text-muted'>Math</span>/Subtract</a>\n            <a (click)=\"addNode('Multiply', 'Math')\" class=\"list-group-item\"><i class=\"fa fa-calculator mr-2\"></i><span class='text-muted'>Math</span>/Multiply</a>\n            <a (click)=\"addNode('Divide', 'Math')\" class=\"list-group-item\"><i class=\"fa fa-calculator mr-2\"></i><span class='text-muted'>Math</span>/Divide</a>\n            <a *ngFor=\"let item of components\" (click)=\"addNode(item.name, item.author)\" class=\"list-group-item\"><i class=\"fa fa-cube mr-2\"></i><span class='text-muted'>{{ item.author }}</span>/{{ item.name }}</a>\n        </div>\n    </div>\n    <div class=\"col-xl-9 ml-4 p-0 mt-3\">\n        <svg id=\"mainsvg\" class=\"grey lighten-3\" #svgElement\n        (click)=\"click($event)\">\n            <line id=\"edgepath\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"0\" class=\"fakeEdge\"/>\n        </svg>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/designspace-page/designspace-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fakeEdge {\n  stroke: #BDBDBD;\n  stroke-width: 2px;\n  display: none;\n  stroke-dasharray: 5 7; }\n\nsvg {\n  border: 1px solid #D32F2F;\n  width: 100%;\n  height: 100%; }\n\n.components {\n  width: 100%; }\n\n.btn-execute {\n  width: 100%;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/designspace-page/designspace-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignspacePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_session_service__ = __webpack_require__("../../../../../src/app/_services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_components_service__ = __webpack_require__("../../../../../src/app/_services/components.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_drag__ = __webpack_require__("../../../../d3-drag/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__ = __webpack_require__("../../../../angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_uuid__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DesignspacePageComponent = (function () {
    function DesignspacePageComponent(componentsService, sessionService) {
        this.componentsService = componentsService;
        this.sessionService = sessionService;
        this.width = 900;
        this.height = 500;
        this.components = [];
        // Graph variables
        this.nodes = [];
        this.edges = [];
        this.updateNode = function (x, y) {
            this.mainRect.attr('x', x);
            this.mainRect.attr('y', y);
            this.headerRect.attr('x', x);
            this.headerRect.attr('y', y);
            this.inCircle.attr('cx', x);
            this.inCircle.attr('cy', y + 40);
            this.outCircle.attr('cx', x + 200);
            this.outCircle.attr('cy', y + 40);
            this.text.attr('x', x + 100);
            this.text.attr('y', y + 20);
        };
    }
    DesignspacePageComponent.prototype.ngOnInit = function () {
        this.initSvg();
        this.loadComponents();
    };
    DesignspacePageComponent.prototype.click = function (event) { };
    DesignspacePageComponent.prototype.addNode = function (componentName, authorName) {
        var node;
        node = {};
        node.id = 'node-' + __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__["UUID"].UUID();
        node.group = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */]('#mainsvg').append('g').attr('id', node.id);
        node.edges = [];
        node.outCircle =
            node.group.append('circle')
                .attr('r', 5)
                .attr('cx', this.width / 2 + 100)
                .attr('cy', this.height / 2 - 5 / 2)
                .attr('fill', 'grey')
                .call(__WEBPACK_IMPORTED_MODULE_4_d3_drag__["a" /* drag */]()
                .on('start', this.startEdgeDrag)
                .on('drag', this.dragEdge)
                .on('end', this.endEdgeDrag))
                .datum({ node: node });
        node.inCircle =
            node.group.append('circle')
                .attr('r', 5)
                .attr('cx', this.width / 2 - 100)
                .attr('cy', this.height / 2 - 5 / 2)
                .attr('fill', 'grey')
                .call(__WEBPACK_IMPORTED_MODULE_4_d3_drag__["a" /* drag */]()
                .on('start', this.startEdgeDrag)
                .on('drag', this.dragEdge)
                .on('end', this.endEdgeDrag))
                .datum({ node: node });
        node.mainRect =
            node.group.append('rect')
                .attr('x', this.width / 2 - 200 / 2)
                .attr('y', this.height / 2 - 80 / 2)
                .attr('width', 200)
                .attr('height', 80)
                .attr('fill', 'white')
                .attr('stroke-width', '1px')
                .attr('stroke', 'grey')
                .datum({ node: node });
        node.headerRect =
            node.group.append('rect')
                .attr('x', this.width / 2 - 200 / 2)
                .attr('y', this.height / 2 - 80 / 2)
                .attr('width', 200)
                .attr('height', 30)
                .attr('fill', '#D32F2F')
                .datum({ node: node });
        node.group.call(__WEBPACK_IMPORTED_MODULE_4_d3_drag__["a" /* drag */]()
            .on('start', this.startDrag)
            .on('drag', this.drag)
            .on('end', this.endDrag));
        this.nodes.push(node);
        node.text =
            node.group.append('text')
                .attr('text-anchor', 'middle')
                .text(componentName)
                .style('fill', 'white')
                .attr('x', this.width / 2)
                .attr('y', this.height / 2 - 20);
        node.componentName = componentName;
        node.authorName = authorName;
        node.group.datum({ node: node });
        node.update = this.updateNode;
    };
    DesignspacePageComponent.prototype.startDrag = function (d) {
    };
    DesignspacePageComponent.prototype.drag = function () {
        var self = this;
        var x = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["b" /* event */].x - 200 / 2;
        var y = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["b" /* event */].y - 80 / 2;
        var node = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */](this).datum().node;
        node.update(x, y);
        node.edges.forEach(function (edge) {
            var line = edge.line;
            console.log(edge);
            line.attr('x1', __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */](edge.sourceCircle).attr('cx'));
            line.attr('y1', __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */](edge.sourceCircle).attr('cy'));
            line.attr('x2', __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */](edge.targetCircle).attr('cx'));
            line.attr('y2', __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */](edge.targetCircle).attr('cy'));
        });
    };
    DesignspacePageComponent.prototype.endDrag = function (d) {
    };
    DesignspacePageComponent.prototype.startEdgeDrag = function () {
        var x = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* mouse */](__WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */]('#mainsvg').node())[0];
        var y = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* mouse */](__WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */]('#mainsvg').node())[1];
        __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */]('#edgepath').attr('x1', x).attr('y1', y);
    };
    DesignspacePageComponent.prototype.dragEdge = function () {
        var edge = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */]('#edgepath');
        var x = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* mouse */](__WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */]('#mainsvg').node())[0];
        var y = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* mouse */](__WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */]('#mainsvg').node())[1];
        edge.attr('x2', x).attr('y2', y);
        edge.style('display', 'block');
    };
    DesignspacePageComponent.prototype.endEdgeDrag = function () {
        __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */]('#edgepath').style('display', 'none');
        var self = this;
        var source = self;
        var target = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["b" /* event */].sourceEvent.target;
        if (target.tagName === 'circle' && source !== target) {
            var edge = {};
            edge.id = 'edge-' + __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__["UUID"].UUID();
            var x1 = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */]('#edgepath').attr('x1');
            var y1 = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */]('#edgepath').attr('y1');
            var x2 = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* mouse */](__WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */]('#mainsvg').node())[0];
            var y2 = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* mouse */](__WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */]('#mainsvg').node())[1];
            edge.source = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */](source).datum().node;
            edge.sourceCircle = source;
            edge.target = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */](target).datum().node;
            edge.targetCircle = target;
            edge.line = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */]('#mainsvg')
                .append('line')
                .attr('class', 'realEdge')
                .style('stroke', 'grey')
                .style('stroke-width', '2px')
                .attr('x1', x1)
                .attr('y1', y1)
                .attr('x2', x2)
                .attr('y2', y2)
                .attr('id', edge.id)
                .datum({ edge: edge });
            __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */](target).datum().node.edges.push(edge);
            __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */](source).datum().node.edges.push(edge);
        }
    };
    DesignspacePageComponent.prototype.initSvg = function () {
        this.svg = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */]('svg')
            .append('g');
    };
    DesignspacePageComponent.prototype.addOutput = function () {
        var node;
        node = {};
        node.id = 'output-' + __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__["UUID"].UUID();
        node.group = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */]('#mainsvg').append('g').attr('id', node.id);
        node.edges = [];
        node.inCircle =
            node.group.append('circle')
                .attr('r', 5)
                .attr('cx', this.width / 2 - 132)
                .attr('cy', this.height / 2 - 40)
                .attr('fill', 'grey')
                .call(__WEBPACK_IMPORTED_MODULE_4_d3_drag__["a" /* drag */]()
                .on('start', this.startEdgeDrag)
                .on('drag', this.dragEdge)
                .on('end', this.endEdgeDrag))
                .datum({ node: node });
        node.mainCircle =
            node.group.append('circle')
                .attr('cx', this.width / 2 - 200 / 2)
                .attr('cy', this.height / 2 - 80 / 2)
                .attr('r', 30)
                .attr('fill', '#EEEEEE')
                .attr('stroke-width', '5px')
                .attr('stroke', '#D32F2F')
                .datum({ node: node });
        node.text =
            node.group.append('text')
                .attr('text-anchor', 'middle')
                .text("OUT")
                .style('fill', '#D32F2F')
                .attr('x', this.width / 2 - 100)
                .attr('y', this.height / 2 - 34);
        node.group.call(__WEBPACK_IMPORTED_MODULE_4_d3_drag__["a" /* drag */]()
            .on('start', this.startDrag)
            .on('drag', this.drag)
            .on('end', this.endDrag));
        this.nodes.push(node);
        node.componentName = "Output";
        node.authorName = "Base";
        node.group.datum({ node: node });
        node.update = function () {
            var x = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["b" /* event */].x;
            var y = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["b" /* event */].y;
            this.mainCircle.attr('cx', x);
            this.mainCircle.attr('cy', y);
            this.inCircle.attr('cx', x - 32);
            this.inCircle.attr('cy', y);
            this.text.attr('x', x);
            this.text.attr('y', y + 5);
        };
    };
    DesignspacePageComponent.prototype.addInput = function () {
        var node;
        node = {};
        node.id = 'input-' + __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__["UUID"].UUID();
        node.group = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* select */]('#mainsvg').append('g').attr('id', node.id);
        node.edges = [];
        node.inCircle =
            node.group.append('circle')
                .attr('r', 5)
                .attr('cx', this.width / 2 - 68)
                .attr('cy', this.height / 2 - 40)
                .attr('fill', 'grey')
                .call(__WEBPACK_IMPORTED_MODULE_4_d3_drag__["a" /* drag */]()
                .on('start', this.startEdgeDrag)
                .on('drag', this.dragEdge)
                .on('end', this.endEdgeDrag))
                .datum({ node: node });
        node.mainCircle =
            node.group.append('circle')
                .attr('cx', this.width / 2 - 200 / 2)
                .attr('cy', this.height / 2 - 80 / 2)
                .attr('r', 30)
                .attr('fill', '#EEEEEE')
                .attr('stroke-width', '5px')
                .attr('stroke', '#D32F2F')
                .datum({ node: node });
        node.text =
            node.group.append('text')
                .attr('text-anchor', 'middle')
                .text("IN")
                .style('fill', '#D32F2F')
                .attr('x', this.width / 2 - 100)
                .attr('y', this.height / 2 - 34);
        node.group.call(__WEBPACK_IMPORTED_MODULE_4_d3_drag__["a" /* drag */]()
            .on('start', this.startDrag)
            .on('drag', this.drag)
            .on('end', this.endDrag));
        this.nodes.push(node);
        node.componentName = "Input";
        node.authorName = "Base";
        node.group.datum({ node: node });
        node.dimensions = ['2', '2'];
        node.values = ['1', '1', '1', '1'];
        node.update = function () {
            var x = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["b" /* event */].x;
            var y = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["b" /* event */].y;
            this.mainCircle.attr('cx', x);
            this.mainCircle.attr('cy', y);
            this.inCircle.attr('cx', x + 32);
            this.inCircle.attr('cy', y);
            this.text.attr('x', x);
            this.text.attr('y', y + 5);
        };
    };
    DesignspacePageComponent.prototype.executeSession = function () {
        console.log(this.nodes);
        var newNodes = this.nodes.map(function (node) {
            var resp = {
                id: node.id,
                author: node.authorName,
                component: node.componentName,
                edges: node.edges.map(function (edge) {
                    return edge.id;
                })
            };
            if (node.componentName == "Input") {
                resp.dimensions = node.dimensions;
                resp.values = node.values;
            }
            return resp;
        });
        this.sessionService.executeSession(newNodes);
        console.log(newNodes);
    };
    DesignspacePageComponent.prototype.loadComponents = function () {
        var self = this;
        return this.componentsService.getComponents()
            .then(function (res) {
            return new Promise(function (resolve, reject) {
                var data;
                if (JSON.parse(res._body).data === undefined) {
                    return [];
                }
                ;
                data = JSON.parse(res._body).data.map(function (item) {
                    return {
                        id: item.id,
                        description: item.attributes.description,
                        name: item.attributes.name,
                        stats: item.attributes.stats,
                        usage: item.attributes.usage,
                        author: item.attributes.author.username
                    };
                });
                self.components = data;
            });
        });
    };
    DesignspacePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-designspace-page',
            template: __webpack_require__("../../../../../src/app/pages/designspace-page/designspace-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/designspace-page/designspace-page.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_components_service__["a" /* ComponentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_components_service__["a" /* ComponentsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_session_service__["a" /* SessionService */]) === "function" && _b || Object])
    ], DesignspacePageComponent);
    return DesignspacePageComponent;
    var _a, _b;
}());

//# sourceMappingURL=designspace-page.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    api_url: 'http://localhost:3000',
    envName: 'source'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map