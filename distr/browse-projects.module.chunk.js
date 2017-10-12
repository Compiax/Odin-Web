webpackJsonp(["browse-projects.module"],{

/***/ "../../../../../src/app/browse-projects/browse-projects-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseProjectsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browse_projects_component__ = __webpack_require__("../../../../../src/app/browse-projects/browse-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__browse_projects_component__["a" /* BrowseProjectsComponent */]
    }
];
var BrowseProjectsRoutingModule = (function () {
    function BrowseProjectsRoutingModule() {
    }
    BrowseProjectsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forChild(routes)
            ]
        })
    ], BrowseProjectsRoutingModule);
    return BrowseProjectsRoutingModule;
}());

//# sourceMappingURL=browse-projects-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/browse-projects/browse-projects.component.html":
/***/ (function(module, exports) {

module.exports = "<!--View for package-->\n<br>\n<div class=\"container\">\n  <br>\n  <br>\n  <!-- Package header -->\n  <div class=\"row\">\n    <div class=\"col-lg-1\">\n      <h1 class=\"vp-header-text\"><span class=\"highlight-text\"></span>Projects</h1>\n      <hr>\n    </div>\n  </div>\n  <!-- /Package header -->\n\n  <!--Panel-->\n  <div class=\"card\">\n    <h3 class=\"card-header red darken-2 white-text\">Projects</h3>\n    <div class=\"card-body\">\n      <div class=\"list-group\">\n        <a [routerLink]=\"['/projects', item.id]\" class=\"list-group-item list-group-item-action flex-column align-items-start\" *ngFor=\"let item of projects\">\n          <div class=\"d-flex w-100 justify-content-between\">\n            <h5 class=\"mb-1\">{{ item.name }}</h5>\n          </div>\n          <p class=\"mb-1\">{{ item.description }}</p>\n        </a>\n      </div>\n    </div>\n  </div>\n  <!--/.Panel-->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/browse-projects/browse-projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_projects_service__ = __webpack_require__("../../../../../src/app/_services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrowseProjectsComponent = (function () {
    function BrowseProjectsComponent(projectsService) {
        this.projectsService = projectsService;
    }
    BrowseProjectsComponent.prototype.ngOnInit = function () {
        this.loadProjects();
    };
    BrowseProjectsComponent.prototype.loadProjects = function () {
        var self = this;
        return this.projectsService.getProjects()
            .then(function (res) {
            return new Promise(function (resolve, reject) {
                var data;
                console.log(res._body);
                if (JSON.parse(res._body).data === undefined) {
                    // There are no projects
                    return [];
                }
                ;
                data = JSON.parse(res._body).data.map(function (item) {
                    return {
                        id: item.id,
                        description: item.attributes.description,
                        name: item.attributes.name,
                        created: item.attributes.created
                    };
                });
                console.log(data);
                self.projects = data;
                console.log(self.projects);
            });
        });
    };
    BrowseProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-browse-projects',
            template: __webpack_require__("../../../../../src/app/browse-projects/browse-projects.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_projects_service__["a" /* ProjectsService */]) === "function" && _a || Object])
    ], BrowseProjectsComponent);
    return BrowseProjectsComponent;
    var _a;
}());

//# sourceMappingURL=browse-projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/browse-projects/browse-projects.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browse_projects_routing_module__ = __webpack_require__("../../../../../src/app/browse-projects/browse-projects-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browse_projects_component__ = __webpack_require__("../../../../../src/app/browse-projects/browse-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BrowseProjectsModule = (function () {
    function BrowseProjectsModule() {
    }
    BrowseProjectsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__browse_projects_component__["a" /* BrowseProjectsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__browse_projects_routing_module__["a" /* BrowseProjectsRoutingModule */]
            ]
        })
    ], BrowseProjectsModule);
    return BrowseProjectsModule;
}());
/* harmony default export */ __webpack_exports__["default"] = (BrowseProjectsModule);
//# sourceMappingURL=browse-projects.module.js.map

/***/ })

});
//# sourceMappingURL=browse-projects.module.chunk.js.map