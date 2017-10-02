webpackJsonp(["view-package.module"],{

/***/ "../../../../../src/app/view-package/view-package-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPackageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_package_component__ = __webpack_require__("../../../../../src/app/view-package/view-package.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__view_package_component__["a" /* ViewPackageComponent */]
    }
];
var ViewPackageRoutingModule = (function () {
    function ViewPackageRoutingModule() {
    }
    ViewPackageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)
            ]
        })
    ], ViewPackageRoutingModule);
    return ViewPackageRoutingModule;
}());

//# sourceMappingURL=view-package-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/view-package/view-package.component.html":
/***/ (function(module, exports) {

module.exports = "<!--View for package-->\n<br>\n<div class=\"container\">\n  <br>\n  <br>\n  <!-- Package header -->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <small><u>packages/{{ package.author }}/{{ package.name }}</u></small>\n\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-10\">\n\n      <br>\n      <h1 class=\"vp-header-text\"><span class=\"highlight-text\">{{ package.author }}/</span> {{ package.name }}</h1>\n    </div>\n    <div class=\"col-lg-2 hidden-md-down\">\n      <br>\n      <i class=\"fa fa-star-o fa-2x vp-header-icon\"></i>\n      <i class=\"fa fa-cloud-download fa-2x vp-header-icon\"></i>\n    </div>\n    <div class=\"col-lg-12\">\n      <hr>\n    </div>\n  </div>\n  <!-- /Package header -->\n\n  <!-- Nav tabs -->\n  <ul class=\"nav nav-tabs nav-justified red darken-2\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#about-panel\" role=\"tab\">About</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#usage-panel\" role=\"tab\">Usage</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tests-panel\" role=\"tab\">Tests</a>\n    </li>\n  </ul>\n  <!-- Tab panels -->\n  <div class=\"tab-content card\">\n    <!--Panel 1-->\n    <div class=\"tab-pane fade in show active\" id=\"about-panel\" role=\"tabpanel\">\n        <br>\n        <!-- Description and about the dev -->\n        <div class=\"row\">\n          <div class=\"col-lg-10\">\n            <h3>About</h3>\n            <p>{{ package.description }}</p>\n          </div>\n          <div class=\"col-lg-2 highlight-content red darken-2\">\n            <p class=\"highlight-content-header\">{{ package.stats.downloaded }} Downloads</p>\n            <p>{{ package.stats.stars }} Stars</p>\n          </div>\n        </div>\n        <!-- /Description and about the dev -->\n        \n    </div>\n    <!--/.Panel 1-->\n    <!--Panel 2-->\n    <div class=\"tab-pane fade\" id=\"usage-panel\" role=\"tabpanel\">\n        <br>\n        <!-- Description and about the dev -->\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <h3>Usage</h3>\n            <p>{{ package.usage }}</p>\n          </div>\n        </div>\n        <!-- /Description and about the dev -->\n        \n    </div>\n    <!--/.Panel 2-->\n    <!--Panel 3-->\n    <div class=\"tab-pane fade\" id=\"tests-panel\" role=\"tabpanel\">\n        <br>\n        <!-- Description and about the dev -->\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <h3>Test 1</h3>\n            <p>Some test description</p>\n            <br>\n            <h3>Test 2</h3>\n            <p>Some test description</p>\n            </div>\n        </div>\n        <!-- /Description and about the dev -->\n    </div>\n    <!--/.Panel 3-->\n  </div>\n</div>\n<!--/View for package-->\n"

/***/ }),

/***/ "../../../../../src/app/view-package/view-package.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vp-header-text {\n  margin-bottom: -20px; }\n\n.vp-header-icon {\n  margin-bottom: -20px;\n  padding-top: 0px;\n  padding-left: 7.5px;\n  padding-right: 7.5px; }\n\n.highlight-content {\n  background-color: #CC0000;\n  color: #f5f5f5; }\n\n.highlight-content-header {\n  padding-top: 10px; }\n\n.highlight-text {\n  color: #CC0000; }\n\n.tab-color {\n  color: #CC0000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-package/view-package.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPackageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_components_service__ = __webpack_require__("../../../../../src/app/_services/components.service.ts");
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



var ViewPackageComponent = (function () {
    function ViewPackageComponent(componentsService, route) {
        this.componentsService = componentsService;
        this.route = route;
        this.package = {};
    }
    ViewPackageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            console.log('Fetching package with id ' + params['id']);
            _this.loadComponents(params['id']);
        });
    };
    ViewPackageComponent.prototype.loadComponents = function (id) {
        var self = this;
        this.componentsService.getComponent(id)
            .then(function (res) {
            var data = JSON.parse(res._body).data[0];
            console.log(data);
            console.log(self.package);
            self.package.name = data.attributes.name;
            self.package.author = data.attributes.author.username;
            self.package.usage = data.attributes.usage;
            self.package.stats = data.attributes.stats;
            self.package.created = data.attributes.created;
            self.package.description = data.attributes.description;
            console.log(self.package);
        });
    };
    ;
    ViewPackageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-view-package-content',
            template: __webpack_require__("../../../../../src/app/view-package/view-package.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-package/view-package.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_components_service__["a" /* ComponentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_components_service__["a" /* ComponentsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], ViewPackageComponent);
    return ViewPackageComponent;
    var _a, _b;
}());

//# sourceMappingURL=view-package.component.js.map

/***/ }),

/***/ "../../../../../src/app/view-package/view-package.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_package_routing_module__ = __webpack_require__("../../../../../src/app/view-package/view-package-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_package_component__ = __webpack_require__("../../../../../src/app/view-package/view-package.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ViewPackageModule = (function () {
    function ViewPackageModule() {
    }
    ViewPackageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__view_package_component__["a" /* ViewPackageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__view_package_routing_module__["a" /* ViewPackageRoutingModule */]
            ]
        })
    ], ViewPackageModule);
    return ViewPackageModule;
}());
/* harmony default export */ __webpack_exports__["default"] = (ViewPackageModule);
//# sourceMappingURL=view-package.module.js.map

/***/ })

});
//# sourceMappingURL=view-package.module.chunk.js.map