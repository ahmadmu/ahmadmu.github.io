webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navi_navi_module__ = __webpack_require__("../../../../../src/app/navi/navi.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__navi_navi_module__["a" /* NaviModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"navbar\" [ngStyle]=\"{backgroundColor: getColor()}\">\n    <div class=\"navbar-brand text-center\" routerLink=\"/\" (click)=\"onClickStart()\">\n      <span id=\"brand\">Burogi</span>\n    </div>\n  </div>\n  <ul class=\"nav nav-pills nav-justified white\" id=\"navigation\">\n    <!-- routerLinkActive=\"active colors\" routerLink=\"\" -->\n    <li class=\"nav-item\" *ngFor=\"let navi of nav\">\n      <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"navi.link\" (click)=\"onClick($event)\" [ngStyle]=\"{backgroundColor: getColor()}\">{{ navi.name }}</a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  padding-bottom: 40px; }\n  nav .navbar .navbar-brand {\n    cursor: pointer;\n    outline: none; }\n  nav ul.nav.nav-pills.nav-justified li.nav-item a.nav-link {\n    border-radius: 0; }\n  nav ul.nav.nav-pills.nav-justified li.nav-link {\n    cursor: pointer; }\n  nav ul.nav.nav-pills.nav-justified .active {\n    border-radius: 0;\n    opacity: 0.8; }\n\na {\n  font-family: 'Advent Pro', sans-serif;\n  font-size: 18px;\n  color: white; }\n\n#brand {\n  font-family: 'Bubblegum Sans', cursive;\n  font-size: 50px;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.bgcolor = '#424242';
        this.nav = [
            {
                name: 'Entertainment',
                link: 'entertainment',
                color: '#EF6C00',
            },
            {
                name: ' Games',
                link: 'games',
                color: '#F44336',
            },
            {
                name: 'Books',
                link: 'books',
                color: '#3F51B5',
            },
            {
                name: 'History',
                link: 'history',
                color: '#795548',
            },
            {
                name: 'Life',
                link: 'life',
                color: '#4CAF50',
            },
            {
                name: 'General',
                link: 'general',
                color: '#607D8B',
            }
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onClick = function (e) {
        // console.log(e);
        for (var _i = 0, _a = this.nav; _i < _a.length; _i++) {
            var nav = _a[_i];
            if (e.srcElement.innerHTML === nav.name) {
                this.bgcolor = nav.color;
            }
        }
    };
    HeaderComponent.prototype.getColor = function () {
        return this.bgcolor;
    };
    HeaderComponent.prototype.onClickStart = function () {
        this.bgcolor = '#424242';
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/navi/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  books works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/navi/books/books.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navi/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BooksComponent = (function () {
    function BooksComponent() {
    }
    BooksComponent.prototype.ngOnInit = function () {
    };
    return BooksComponent;
}());
BooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-books',
        template: __webpack_require__("../../../../../src/app/navi/books/books.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navi/books/books.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BooksComponent);

//# sourceMappingURL=books.component.js.map

/***/ }),

/***/ "../../../../../src/app/navi/data-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_entry_entry_model__ = __webpack_require__("../../../../../src/app/navi/shared/entry/entry.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_favorites_favorite_model__ = __webpack_require__("../../../../../src/app/navi/shared/favorites/favorite.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataStorageService = (function () {
    function DataStorageService() {
        this.startedEditing = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.gEntriesChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.gFavoritesChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.gInfoChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.gEntries = [
            new __WEBPACK_IMPORTED_MODULE_2__shared_entry_entry_model__["a" /* Entry */]('Welcome to my General Blog', 'http://imgur.com/9r3ZUYA.jpg', 'Welcome to my first blog, hope you have a good time'),
            new __WEBPACK_IMPORTED_MODULE_2__shared_entry_entry_model__["a" /* Entry */]('Welcome to my 2nd GBlog', 'http://imgur.com/9r3ZUYA.jpg', 'This is another blog'),
        ];
        this.gFavorites = [
            new __WEBPACK_IMPORTED_MODULE_3__shared_favorites_favorite_model__["a" /* Favorite */]('Dance Dance Dance', 'http://i.imgur.com/LHNSRUX.jpg', 'Haruki Murakami'),
            new __WEBPACK_IMPORTED_MODULE_3__shared_favorites_favorite_model__["a" /* Favorite */]('Wind-up Bird Chronicles', 'http://i.imgur.com/GVA7O6P.jpg', 'Haruki Murakami'),
        ];
        this.infoGeneral = 'Information on the General category';
    }
    DataStorageService.prototype.getGeneralEntries = function () {
        return this.gEntries.slice();
    };
    DataStorageService.prototype.getGeneralEntry = function (i) {
        return this.gEntries[i];
    };
    DataStorageService.prototype.getGeneralFavorites = function () {
        return this.gFavorites.slice();
    };
    DataStorageService.prototype.getInfoGeneral = function () {
        return this.infoGeneral;
    };
    DataStorageService.prototype.addGeneralEntry = function (entry) {
        this.gEntries.push(entry);
        this.gEntriesChanged.next(this.gEntries.slice());
    };
    DataStorageService.prototype.addGeneralFavorite = function (fav) {
        this.gFavorites.push(fav);
        this.gFavoritesChanged.next(this.gFavorites.slice());
    };
    DataStorageService.prototype.setGeneralInfo = function (info) {
        this.infoGeneral = info;
    };
    DataStorageService.prototype.deleteGeneralFavorite = function (e) {
        this.gFavorites.splice(e, 1);
        this.gFavoritesChanged.next(this.gFavorites.slice());
    };
    DataStorageService.prototype.deleteGeneralEntry = function (e) {
        this.gEntries.splice(e, 1);
        this.gEntriesChanged.next(this.gEntries.slice());
    };
    return DataStorageService;
}());
DataStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataStorageService);

//# sourceMappingURL=data-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/navi/entertainment/entertainment.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  entertainment works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/navi/entertainment/entertainment.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navi/entertainment/entertainment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntertainmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EntertainmentComponent = (function () {
    function EntertainmentComponent() {
    }
    EntertainmentComponent.prototype.ngOnInit = function () {
    };
    return EntertainmentComponent;
}());
EntertainmentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-entertainment',
        template: __webpack_require__("../../../../../src/app/navi/entertainment/entertainment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navi/entertainment/entertainment.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], EntertainmentComponent);

//# sourceMappingURL=entertainment.component.js.map

/***/ }),

/***/ "../../../../../src/app/navi/games/games.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  games works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/navi/games/games.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navi/games/games.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GamesComponent = (function () {
    function GamesComponent() {
    }
    GamesComponent.prototype.ngOnInit = function () {
    };
    return GamesComponent;
}());
GamesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-games',
        template: __webpack_require__("../../../../../src/app/navi/games/games.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navi/games/games.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], GamesComponent);

//# sourceMappingURL=games.component.js.map

/***/ }),

/***/ "../../../../../src/app/navi/general/general.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <app-favorites [list]=\"favorites\"></app-favorites>\n    </div>\n     <div class=\"col-md-6\"> \n      <h1 class=\"text-center\">General</h1>\n      <hr>\n      <app-entry [list]=\"entries\"></app-entry>\n    </div>\n    <div class=\"col-md-3\">\n      <app-info [info]=\"info\"></app-info>\n    </div> \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/navi/general/general.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navi/general/general.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_storage_service__ = __webpack_require__("../../../../../src/app/navi/data-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneralComponent = (function () {
    function GeneralComponent(dataStorageService) {
        this.dataStorageService = dataStorageService;
    }
    GeneralComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entries = this.dataStorageService.getGeneralEntries();
        this.favorites = this.dataStorageService.getGeneralFavorites();
        this.entrySub = this.dataStorageService.gEntriesChanged.subscribe(function (entry) { _this.entries = entry; });
        this.favSub = this.dataStorageService.gFavoritesChanged.subscribe(function (fav) { _this.favorites = fav; });
        this.info = this.dataStorageService.getInfoGeneral();
        this.infoSub = this.dataStorageService.gInfoChanged.subscribe(function (info) { _this.info = info; });
    };
    GeneralComponent.prototype.ngOnDestroy = function () {
        this.entrySub.unsubscribe();
        this.favSub.unsubscribe();
        this.infoSub.unsubscribe();
    };
    return GeneralComponent;
}());
GeneralComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-general',
        template: __webpack_require__("../../../../../src/app/navi/general/general.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navi/general/general.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_storage_service__["a" /* DataStorageService */]) === "function" && _a || Object])
], GeneralComponent);

var _a;
//# sourceMappingURL=general.component.js.map

/***/ }),

/***/ "../../../../../src/app/navi/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  history works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/navi/history/history.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navi/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoryComponent = (function () {
    function HistoryComponent() {
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    return HistoryComponent;
}());
HistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-history',
        template: __webpack_require__("../../../../../src/app/navi/history/history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navi/history/history.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HistoryComponent);

//# sourceMappingURL=history.component.js.map

/***/ }),

/***/ "../../../../../src/app/navi/life/life.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  life works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/navi/life/life.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navi/life/life.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LifeComponent = (function () {
    function LifeComponent() {
    }
    LifeComponent.prototype.ngOnInit = function () {
    };
    return LifeComponent;
}());
LifeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-life',
        template: __webpack_require__("../../../../../src/app/navi/life/life.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navi/life/life.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LifeComponent);

//# sourceMappingURL=life.component.js.map

/***/ }),

/***/ "../../../../../src/app/navi/navi-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_start_component__ = __webpack_require__("../../../../../src/app/navi/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_general_component__ = __webpack_require__("../../../../../src/app/navi/general/general.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__books_books_component__ = __webpack_require__("../../../../../src/app/navi/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entertainment_entertainment_component__ = __webpack_require__("../../../../../src/app/navi/entertainment/entertainment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__games_games_component__ = __webpack_require__("../../../../../src/app/navi/games/games.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__history_history_component__ = __webpack_require__("../../../../../src/app/navi/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__life_life_component__ = __webpack_require__("../../../../../src/app/navi/life/life.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NaviRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__start_start_component__["a" /* StartComponent */] },
    { path: 'general', component: __WEBPACK_IMPORTED_MODULE_3__general_general_component__["a" /* GeneralComponent */] },
    { path: 'general', component: __WEBPACK_IMPORTED_MODULE_3__general_general_component__["a" /* GeneralComponent */] },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_4__books_books_component__["a" /* BooksComponent */] },
    { path: 'entertainment', component: __WEBPACK_IMPORTED_MODULE_5__entertainment_entertainment_component__["a" /* EntertainmentComponent */] },
    { path: 'games', component: __WEBPACK_IMPORTED_MODULE_6__games_games_component__["a" /* GamesComponent */] },
    { path: 'history', component: __WEBPACK_IMPORTED_MODULE_7__history_history_component__["a" /* HistoryComponent */] },
    { path: 'life', component: __WEBPACK_IMPORTED_MODULE_8__life_life_component__["a" /* LifeComponent */] },
];
var NaviRoutingModule = (function () {
    function NaviRoutingModule() {
    }
    return NaviRoutingModule;
}());
NaviRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], NaviRoutingModule);

//# sourceMappingURL=navi-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/navi/navi.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navi_routing_module__ = __webpack_require__("../../../../../src/app/navi/navi-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_storage_service__ = __webpack_require__("../../../../../src/app/navi/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__start_start_component__ = __webpack_require__("../../../../../src/app/navi/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__general_general_component__ = __webpack_require__("../../../../../src/app/navi/general/general.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__life_life_component__ = __webpack_require__("../../../../../src/app/navi/life/life.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__games_games_component__ = __webpack_require__("../../../../../src/app/navi/games/games.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__books_books_component__ = __webpack_require__("../../../../../src/app/navi/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__history_history_component__ = __webpack_require__("../../../../../src/app/navi/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__entertainment_entertainment_component__ = __webpack_require__("../../../../../src/app/navi/entertainment/entertainment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_favorites_favorites_component__ = __webpack_require__("../../../../../src/app/navi/shared/favorites/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_info_info_component__ = __webpack_require__("../../../../../src/app/navi/shared/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_entry_entry_component__ = __webpack_require__("../../../../../src/app/navi/shared/entry/entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_entry_entry_edit_entry_edit_component__ = __webpack_require__("../../../../../src/app/navi/shared/entry/entry-edit/entry-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_favorites_favorites_add_favorites_add_component__ = __webpack_require__("../../../../../src/app/navi/shared/favorites/favorites-add/favorites-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_info_info_edit_info_edit_component__ = __webpack_require__("../../../../../src/app/navi/shared/info/info-edit/info-edit.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NaviModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var NaviModule = (function () {
    function NaviModule() {
    }
    return NaviModule;
}());
NaviModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__general_general_component__["a" /* GeneralComponent */],
            __WEBPACK_IMPORTED_MODULE_7__life_life_component__["a" /* LifeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__games_games_component__["a" /* GamesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__books_books_component__["a" /* BooksComponent */],
            __WEBPACK_IMPORTED_MODULE_10__history_history_component__["a" /* HistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_11__entertainment_entertainment_component__["a" /* EntertainmentComponent */],
            __WEBPACK_IMPORTED_MODULE_5__start_start_component__["a" /* StartComponent */],
            __WEBPACK_IMPORTED_MODULE_12__shared_favorites_favorites_component__["a" /* FavoritesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shared_info_info_component__["a" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shared_entry_entry_component__["a" /* EntryComponent */],
            __WEBPACK_IMPORTED_MODULE_15__shared_entry_entry_edit_entry_edit_component__["a" /* EntryEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__shared_favorites_favorites_add_favorites_add_component__["a" /* FavoritesAddComponent */],
            __WEBPACK_IMPORTED_MODULE_17__shared_info_info_edit_info_edit_component__["a" /* InfoEditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__navi_routing_module__["a" /* NaviRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__data_storage_service__["a" /* DataStorageService */]],
    })
], NaviModule);

//# sourceMappingURL=navi.module.js.map

/***/ }),

/***/ "../../../../../src/app/navi/shared/entry/entry-edit/entry-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\n  <div class=\"col-md-12\">\n    <form (ngSubmit)=\"onAddEntry(e)\" #e=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"form-group col-md-12\">\n          <label for=\"title\">Title</label>\n          <input type=\"text\" id=\"title\" name=\"title\" class=\"form-control\" ngModel required>\n        </div>\n        <div class=\"form-group  col-md-12\">\n          <label for=\"image\">Image Link</label>\n          <input type=\"text\" id=\"image\" name=\"image\" class=\"form-control\" ngModel required>\n        </div>\n        <div class=\"form-group  col-md-12\">\n          <label for=\"desc\">Description</label>\n          <textarea id=\"desc\" name=\"desc\" class=\"form-control\" ngModel></textarea>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <button type=\"submit\" class=\"btn\" [disabled]=\"!e.valid\">Add Entry</button>\n          </div>\n        </div>\n      </div>\n    </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/navi/shared/entry/entry-edit/entry-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form .row {\n  margin: 0 auto;\n  display: block;\n  width: 80%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navi/shared/entry/entry-edit/entry-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_storage_service__ = __webpack_require__("../../../../../src/app/navi/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entry_model__ = __webpack_require__("../../../../../src/app/navi/shared/entry/entry.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntryEditComponent = (function () {
    function EntryEditComponent(dss) {
        this.dss = dss;
        this.entryCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.editMode = false;
    }
    EntryEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editSub = this.dss.startedEditing.subscribe(function (index) {
            _this.editIndex = index;
            _this.editMode = true;
            _this.entry = _this.dss.getGeneralEntry(index);
            console.log(_this.form);
            _this.form.setValue({
                title: _this.entry.title,
                image: _this.entry.image,
                desc: _this.entry.desc
            });
        });
    };
    EntryEditComponent.prototype.ngOnDestroy = function () {
        this.editSub.unsubscribe();
    };
    EntryEditComponent.prototype.onAddEntry = function (form) {
        var value = form.value;
        var newEntry = new __WEBPACK_IMPORTED_MODULE_3__entry_model__["a" /* Entry */](value.title, value.image, value.desc);
        this.dss.addGeneralEntry(newEntry);
        this.entryCreated.emit();
    };
    return EntryEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('e'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], EntryEditComponent.prototype, "form", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", Object)
], EntryEditComponent.prototype, "entryCreated", void 0);
EntryEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-entry-edit',
        template: __webpack_require__("../../../../../src/app/navi/shared/entry/entry-edit/entry-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navi/shared/entry/entry-edit/entry-edit.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_storage_service__["a" /* DataStorageService */]) === "function" && _b || Object])
], EntryEditComponent);

var _a, _b;
//# sourceMappingURL=entry-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/navi/shared/entry/entry.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-block text-success\" (click)=\"onAdd()\">Add Entry</a>\n\n<app-entry-edit *ngIf=\"editMode\" (entryCreated)=\"changeEdit()\"></app-entry-edit>\n<div *ngIf=\"!editMode\" class=\"text-center\"  > \n  <div *ngFor=\"let item of list; let i = index\">\n    <h1>{{ item.title }}</h1>\n    <img [src]=\"item.image\" alt=\"\" class=\"img-responsive\" >\n    <div class=\"caption\">\n      <p>{{ item.desc }}</p>\n    </div>\n    <div>\n    <a class=\"btn text-primary\" (click)=\"onEdit(i)\">Edit</a>\n    <a class=\"btn text-danger\" (click)=\"onDelete(i)\">delete</a>\n    </div>\n  </div>\n  <hr width=\"50%\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/navi/shared/entry/entry.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  padding-top: 10px;\n  padding-bottom: 25px;\n  height: auto;\n  width: 100%; }\n\n.btn {\n  margin-bottom: 10px;\n  outline: none;\n  font-family: 'Advent Pro', sans-serif !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navi/shared/entry/entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_storage_service__ = __webpack_require__("../../../../../src/app/navi/data-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntryComponent = (function () {
    function EntryComponent(dss) {
        this.dss = dss;
        this.editMode = false;
    }
    EntryComponent.prototype.ngOnInit = function () {
    };
    EntryComponent.prototype.onEdit = function (i) {
        console.log(i);
        this.dss.startedEditing.next(i);
        this.editMode = true;
    };
    EntryComponent.prototype.onAdd = function () {
        this.editMode = true;
    };
    EntryComponent.prototype.onDelete = function (i) {
        this.dss.deleteGeneralEntry(i);
    };
    EntryComponent.prototype.changeEdit = function () {
        this.editMode = false;
    };
    return EntryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Array)
], EntryComponent.prototype, "list", void 0);
EntryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-entry',
        template: __webpack_require__("../../../../../src/app/navi/shared/entry/entry.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navi/shared/entry/entry.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_storage_service__["a" /* DataStorageService */]) === "function" && _a || Object])
], EntryComponent);

var _a;
//# sourceMappingURL=entry.component.js.map

/***/ }),

/***/ "../../../../../src/app/navi/shared/entry/entry.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entry; });
var Entry = (function () {
    function Entry(title, image, desc) {
        this.title = title;
        this.image = image;
        this.desc = desc;
    }
    return Entry;
}());

//# sourceMappingURL=entry.model.js.map

/***/ }),

/***/ "../../../../../src/app/navi/shared/favorites/favorite.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Favorite; });
var Favorite = (function () {
    function Favorite(name, image, author) {
        this.name = name;
        this.image = image;
        this.author = author;
    }
    return Favorite;
}());

//# sourceMappingURL=favorite.model.js.map

/***/ }),

/***/ "../../../../../src/app/navi/shared/favorites/favorites-add/favorites-add.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  favorites-add works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/navi/shared/favorites/favorites-add/favorites-add.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navi/shared/favorites/favorites-add/favorites-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FavoritesAddComponent = (function () {
    function FavoritesAddComponent() {
    }
    FavoritesAddComponent.prototype.ngOnInit = function () {
    };
    return FavoritesAddComponent;
}());
FavoritesAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-favorites-add',
        template: __webpack_require__("../../../../../src/app/navi/shared/favorites/favorites-add/favorites-add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navi/shared/favorites/favorites-add/favorites-add.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FavoritesAddComponent);

//# sourceMappingURL=favorites-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/navi/shared/favorites/favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h1>Favorites:</h1>\n  <a class=\"btn btn-block text-success\">Add New Favorite</a>\n  <div *ngFor=\"let fav of list; let i = index\">\n    <img [src]=\"fav.image\" class=\"img-responsive img-thumbnail\">\n    <p>{{ fav.name }} - {{ fav.author }}</p>\n    <a class=\"btn text-danger\" (click)=\"onDelete(i)\">delete</a>\n    <!-- <div>\n      <img src=\"http://i.imgur.com/LHNSRUX.jpg\" alt=\"\" class=\"img-responsive img-thumbnail\">\n      <p>Dance Dance Dance - Haruki Murakami</p>\n      <a class=\"btn text-danger\">delete</a>\n    </div>\n    <div>\n      <img src=\"http://i.imgur.com/GVA7O6P.jpg\" alt=\"\" class=\"img-responsive img-thumbnail\">\n      <p>Wind-up Bird Chronicles - Haruki Murakami</p>\n    </div> -->\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/navi/shared/favorites/favorites.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  margin-top: 10px;\n  width: 225px; }\n\np {\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navi/shared/favorites/favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_storage_service__ = __webpack_require__("../../../../../src/app/navi/data-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritesComponent = (function () {
    function FavoritesComponent(dss) {
        this.dss = dss;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
    };
    FavoritesComponent.prototype.onDelete = function (i) {
        this.dss.deleteGeneralFavorite(i);
    };
    return FavoritesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], FavoritesComponent.prototype, "list", void 0);
FavoritesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-favorites',
        template: __webpack_require__("../../../../../src/app/navi/shared/favorites/favorites.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navi/shared/favorites/favorites.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_storage_service__["a" /* DataStorageService */]) === "function" && _a || Object])
], FavoritesComponent);

var _a;
//# sourceMappingURL=favorites.component.js.map

/***/ }),

/***/ "../../../../../src/app/navi/shared/info/info-edit/info-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  info-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/navi/shared/info/info-edit/info-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navi/shared/info/info-edit/info-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoEditComponent = (function () {
    function InfoEditComponent() {
    }
    InfoEditComponent.prototype.ngOnInit = function () {
    };
    return InfoEditComponent;
}());
InfoEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-info-edit',
        template: __webpack_require__("../../../../../src/app/navi/shared/info/info-edit/info-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navi/shared/info/info-edit/info-edit.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InfoEditComponent);

//# sourceMappingURL=info-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/navi/shared/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n  </div>\n  <div class=\"panel panel-default\" >\n    <div class=\"text-left\">\n        {{ info }}\n        <!-- This is the well info text box, where all the info related to the section are presented -->\n    </div>\n    <a class=\"btn btn-block text-primary\">Edit</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/navi/shared/info/info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navi/shared/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoComponent = (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    return InfoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], InfoComponent.prototype, "info", void 0);
InfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-info',
        template: __webpack_require__("../../../../../src/app/navi/shared/info/info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navi/shared/info/info.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InfoComponent);

//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ "../../../../../src/app/navi/start/start.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 text-center\" style=\"margin: 0 auto; margin-top: 50px\">\n    <h1>Welcome to my blog</h1>\n    <br>\n    <h2>This blog is still under construction. </h2>\n    <h4>For now only the color-changing navi and some functionalities in the General category work.</h4>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/navi/start/start.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navi/start/start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartComponent = (function () {
    function StartComponent() {
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    return StartComponent;
}());
StartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-start',
        template: __webpack_require__("../../../../../src/app/navi/start/start.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navi/start/start.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], StartComponent);

//# sourceMappingURL=start.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map