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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipebook_recipebook_component__ = __webpack_require__("../../../../../src/app/recipebook/recipebook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipebook_recipe_start_recipe_start_component__ = __webpack_require__("../../../../../src/app/recipebook/recipe-start/recipe-start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipebook_recipe_detail_recipe_detail_component__ = __webpack_require__("../../../../../src/app/recipebook/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recipebook_recipe_edit_recipe_edit_component__ = __webpack_require__("../../../../../src/app/recipebook/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shoppinglist_shopping_list_component__ = __webpack_require__("../../../../../src/app/shoppinglist/shopping-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', redirectTo: '/recipebook', pathMatch: 'full' },
    { path: 'recipebook', component: __WEBPACK_IMPORTED_MODULE_2__recipebook_recipebook_component__["a" /* RecipeBookComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__recipebook_recipe_start_recipe_start_component__["a" /* RecipeStartComponent */] },
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_5__recipebook_recipe_edit_recipe_edit_component__["a" /* RecipeEditComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_4__recipebook_recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */] },
            { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_5__recipebook_recipe_edit_recipe_edit_component__["a" /* RecipeEditComponent */] },
        ] },
    { path: 'shopping-list', component: __WEBPACK_IMPORTED_MODULE_6__shoppinglist_shopping_list_component__["a" /* ShoppingListComponent */] }
];
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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Boostrap injected in .angular.cli.json*/\r\n/* Global style in styles.css*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--(featureSelected)=\"onNavigate($event)\"-->\n<div class=\"container\">\n\n  <app-header ></app-header>\n  \n  <div class=\"row\">\n    <div class=\"col-md-12\">\n  \n      <router-outlet></router-outlet>  \n  \n    </div>\n  </div>\n</div>\n"

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
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipebook_recipebook_component__ = __webpack_require__("../../../../../src/app/recipebook/recipebook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recipebook_recipe_list_recipe_list_component__ = __webpack_require__("../../../../../src/app/recipebook/recipe-list/recipe-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recipebook_recipe_list_recipe_item_recipe_item_component__ = __webpack_require__("../../../../../src/app/recipebook/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recipebook_recipe_detail_recipe_detail_component__ = __webpack_require__("../../../../../src/app/recipebook/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shoppinglist_shopping_list_edit_shopping_list_edit_component__ = __webpack_require__("../../../../../src/app/shoppinglist/shopping-list-edit/shopping-list-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shoppinglist_shopping_list_component__ = __webpack_require__("../../../../../src/app/shoppinglist/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_dropdown_directive__ = __webpack_require__("../../../../../src/app/shared/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shoppinglist_shopping_list_service__ = __webpack_require__("../../../../../src/app/shoppinglist/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__recipebook_recipe_start_recipe_start_component__ = __webpack_require__("../../../../../src/app/recipebook/recipe-start/recipe-start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__recipebook_recipe_edit_recipe_edit_component__ = __webpack_require__("../../../../../src/app/recipebook/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__recipebook_recipe_service__ = __webpack_require__("../../../../../src/app/recipebook/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_filter_pipe__ = __webpack_require__("../../../../../src/app/shared/filter.pipe.ts");
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
        // Components, Pipes
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__recipebook_recipebook_component__["a" /* RecipeBookComponent */],
            __WEBPACK_IMPORTED_MODULE_7__recipebook_recipe_list_recipe_list_component__["a" /* RecipeListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__recipebook_recipe_list_recipe_item_recipe_item_component__["a" /* RecipeItemComponent */],
            __WEBPACK_IMPORTED_MODULE_9__recipebook_recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_10__shoppinglist_shopping_list_edit_shopping_list_edit_component__["a" /* ShoppingListEditComponent */],
            __WEBPACK_IMPORTED_MODULE_11__shoppinglist_shopping_list_component__["a" /* ShoppingListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__shared_dropdown_directive__["a" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_15__recipebook_recipe_start_recipe_start_component__["a" /* RecipeStartComponent */],
            __WEBPACK_IMPORTED_MODULE_16__recipebook_recipe_edit_recipe_edit_component__["a" /* RecipeEditComponent */],
            __WEBPACK_IMPORTED_MODULE_18__shared_filter_pipe__["a" /* FilterPipe */],
        ],
        // Modules
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */]
        ],
        // Services
        providers: [__WEBPACK_IMPORTED_MODULE_13__shoppinglist_shopping_list_service__["a" /* ShoppingListService */], __WEBPACK_IMPORTED_MODULE_17__recipebook_recipe_service__["a" /* RecipeService */]],
        // Entry Point
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n\n    <!-- Navbar Header -->\n    <div class=\"navbar-header\">\n      <a routerLink=\"/\" class=\"navbar-brand\">Shoppin</a>\n    </div>\n\n    <!-- Navbar Elements-->\n    <div class=\"navbar-default\" >\n      <ul class=\"nav navbar-nav\" >\n        <li routerLinkActive=\"active\"><a routerLink=\"/recipebook\">Recipes</a> </li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/shopping-list\">Shopping List</a></li>\n      </ul>\n    </div>\n    \n  </div>\n</nav>"

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

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipebook/recipe-detail/recipe-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"thumbnail\" >\n  <!-- Image -->\n  <div class=\"row\">\n    <div class=\"col-xs-12\" >\n      <img [src]=\"recipe.imagePath\" alt=\"{{ recipe.name }}\" class=\"img-responsive\" style=\"max-height: 100%; margin: 0 auto; display: block;\">\n    </div>\n  </div>\n\n  <!-- Name -->\n  <div class=\"row\">\n    <div class=\"col-xs-6\">\n      <h1>{{ recipe.name }}</h1>\n    </div>\n    <!-- Dropdown -->\n    <div class=\"col-xs-6 text-right\" style=\"margin-top: 25px;\" >\n      <div class=\"btn-group\" appDropdown>\n        <button type=\"button\" class=\"btn btn-primary dropdown-toggle\">Manage Recipe <span class=\"caret\"></span></button>\n        <ul class=\"dropdown-menu\">\n        <li><a (click)=\"onAddToShoppingList()\" >To Shopping List</a></li>\n        <li><a (click)=\"onEditRecipe()\">Edit Recipe</a></li>\n        <li><a (click)=\"onDeleteRecipe()\">Delete Recipe</a></li>\n      </ul>\n      </div>\n    </div>\n  </div>\n\n  \n\n  <!-- Description -->\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      {{ recipe.description }}\n    </div>\n  </div>\n\n  <hr>\n  \n  <!-- Ingredients -->\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" style=\"border: none;\">Ingredients: </li>\n        <li class=\"list-group-item\" style=\"border: none;\" *ngFor=\"let i of recipe.ingredients\">\n          {{ i.name }} - {{ i.amount }}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>  "

/***/ }),

/***/ "../../../../../src/app/recipebook/recipe-detail/recipe-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_service__ = __webpack_require__("../../../../../src/app/recipebook/recipe.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeDetailComponent = (function () {
    function RecipeDetailComponent(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // const id = this.route.snapshot.params['id'];
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.recipe = _this.recipeService.getRecipe(_this.id);
        });
    };
    RecipeDetailComponent.prototype.onAddToShoppingList = function () {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    };
    RecipeDetailComponent.prototype.onEditRecipe = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
        // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
    };
    RecipeDetailComponent.prototype.onDeleteRecipe = function () {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipebook']);
    };
    return RecipeDetailComponent;
}());
RecipeDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-recipe-detail',
        template: __webpack_require__("../../../../../src/app/recipebook/recipe-detail/recipe-detail.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], RecipeDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=recipe-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipebook/recipe-edit/recipe-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipebook/recipe-edit/recipe-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button class=\"btn btn-success\" [disabled]=\"!recipeForm.valid\">Save</button>\n          <button class=\"btn btn-danger\" (click)=\"onCancel()\">Cancel</button>\n        </div>\n      </div>\n\n      <!-- Name -->\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" id=\"name\" formControlName=\"name\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n\n      <!-- Image -->\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"imagePath\">Image URL</label>\n            <input type=\"text\" id=\"imagePath\" formControlName=\"imagePath\" class=\"form-control\" #imagePath>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <img [src]=\"imagePath.value\" alt=\"\" class=\"img-responsive\">\n        </div>\n      </div>\n\n      <!-- Description -->\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <textarea id=\"description\" class=\"form-control\" formControlName=\"description\" rows=6></textarea>\n          </div>\n        </div>\n      </div>\n\n      <!-- Ingredients -->\n      <div class=\"row\">\n        <div class=\"col-xs-12\" formArrayName=\"ingredients\">\n          <div \n              class=\"row\" \n              *ngFor=\"let ingredientCtrl of recipeForm.get('ingredients').controls; let i = index\"\n              [formGroupName]=\"i\"\n              style=\"margin-top: 10px;\">\n            <div class=\"col-xs-8\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n            </div>\n            <div class=\"col-xs-2\">\n              <input type=\"number\" class=\"form-control\" formControlName=\"amount\">\n            </div>\n            <div class=\"col-xs-2\">\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteI(i)\">X</button>\n            </div>\n          </div>\n          <hr>\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"onAddIngredient()\">Add Ingredient</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/recipebook/recipe-edit/recipe-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_service__ = __webpack_require__("../../../../../src/app/recipebook/recipe.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeEditComponent = (function () {
    function RecipeEditComponent(route, recipeService, router) {
        this.route = route;
        this.recipeService = recipeService;
        this.router = router;
        this.editMode = false;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    RecipeEditComponent.prototype.onSubmit = function () {
        // const newRecipe = new Recipe(
        //   this.recipeForm.value['name'],
        //   this.recipeForm.value['description'],
        //   this.recipeForm.value['imagePath'],
        //   this.recipeForm.value['ingredients']);
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, this.recipeForm.value);
        }
        else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }
        this.onCancel();
    };
    RecipeEditComponent.prototype.onAddIngredient = function () {
        // Cast ingredients to FormArray
        this.recipeForm.get('ingredients').push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            'amount': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                // regex for positive numbers plus zero
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern(/^[1-9]+[0-9]*$/)
            ])
        }));
    };
    RecipeEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    RecipeEditComponent.prototype.onDeleteI = function (index) {
        this.recipeForm.get('ingredients').removeAt(index);
    };
    // Reactive Form
    RecipeEditComponent.prototype.initForm = function () {
        var recipeName = '';
        var recipeImagePath = '';
        var recipeDescription = '';
        var recipeIngredients = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormArray */]([]);
        if (this.editMode) {
            var recipe = this.recipeService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            // Ingredients
            if (recipe['ingredients']) {
                for (var _i = 0, _a = recipe.ingredients; _i < _a.length; _i++) {
                    var ingredient = _a[_i];
                    recipeIngredients.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
                        'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */](ingredient.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
                        'amount': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */](ingredient.amount, [
                            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern(/^[1-9]+[0-9]*$/)
                        ])
                    }));
                }
            }
        }
        this.recipeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */](recipeName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            'imagePath': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */](recipeImagePath, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            'description': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */](recipeDescription, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            'ingredients': recipeIngredients
        });
    };
    return RecipeEditComponent;
}());
RecipeEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-recipe-edit',
        template: __webpack_require__("../../../../../src/app/recipebook/recipe-edit/recipe-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recipebook/recipe-edit/recipe-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__recipe_service__["a" /* RecipeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], RecipeEditComponent);

var _a, _b, _c;
//# sourceMappingURL=recipe-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipebook/recipe-list/recipe-item/recipe-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a style=\"cursor: pointer\" [routerLink]=\"[index]\" routerLinkActive=\"active\" class=\"list-group-item clearfix\">\n      \n      <span class=\"pull-left\">\n        <h4 class=\"list-group-item-heading\">{{  recipe.name }}</h4>\n        <p class=\"list-group-item-text\">{{  recipe.description | slice : 0 : 50 }} ..</p>\n      </span>\n      \n      <span class=\"pull-right\">\n        <img [src]=\"recipe.imagePath\" alt=\"{{ recipe.name }}\" class=\"img-responsive\" style=\"max-height: 50px\">\n      </span>\n</a>"

/***/ }),

/***/ "../../../../../src/app/recipebook/recipe-list/recipe-item/recipe-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_model__ = __webpack_require__("../../../../../src/app/recipebook/recipe.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_service__ = __webpack_require__("../../../../../src/app/recipebook/recipe.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeItemComponent = (function () {
    function RecipeItemComponent(recipeService) {
        this.recipeService = recipeService;
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    return RecipeItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */]) === "function" && _a || Object)
], RecipeItemComponent.prototype, "recipe", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], RecipeItemComponent.prototype, "index", void 0);
RecipeItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-recipe-item',
        template: __webpack_require__("../../../../../src/app/recipebook/recipe-list/recipe-item/recipe-item.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */]) === "function" && _b || Object])
], RecipeItemComponent);

var _a, _b;
//# sourceMappingURL=recipe-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipebook/recipe-list/recipe-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-success\" (click)=\"onNewRecipe()\">New Recipe</button>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <!-- Passing values to app-recipe-item -->\n    <app-recipe-item *ngFor=\"let recipeEl of recipes; let i = index\" [recipe]=\"recipeEl\" [index]=\"i\"></app-recipe-item>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/recipebook/recipe-list/recipe-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_service__ = __webpack_require__("../../../../../src/app/recipebook/recipe.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeListComponent = (function () {
    // Inject RecipeService, Router and the activated route
    function RecipeListComponent(recipeService, router, route) {
        this.recipeService = recipeService;
        this.router = router;
        this.route = route;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.recipeService.recipesChanged
            .subscribe(function (recipes) {
            _this.recipes = recipes;
        });
        this.recipes = this.recipeService.getRecipes();
    };
    // unsubscribe from self-made (Subject) Observables to avoid memory leaks
    RecipeListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    RecipeListComponent.prototype.onNewRecipe = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    return RecipeListComponent;
}());
RecipeListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-recipe-list',
        template: __webpack_require__("../../../../../src/app/recipebook/recipe-list/recipe-list.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], RecipeListComponent);

var _a, _b, _c;
//# sourceMappingURL=recipe-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipebook/recipe-start/recipe-start.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Please select a recipe</h3>"

/***/ }),

/***/ "../../../../../src/app/recipebook/recipe-start/recipe-start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeStartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipeStartComponent = (function () {
    function RecipeStartComponent() {
    }
    RecipeStartComponent.prototype.ngOnInit = function () {
    };
    return RecipeStartComponent;
}());
RecipeStartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-recipe-start',
        template: __webpack_require__("../../../../../src/app/recipebook/recipe-start/recipe-start.component.html"),
    }),
    __metadata("design:paramtypes", [])
], RecipeStartComponent);

//# sourceMappingURL=recipe-start.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipebook/recipe.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = (function () {
    function Recipe(name, description, imagePath, ingredients) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
}());

//# sourceMappingURL=recipe.model.js.map

/***/ }),

/***/ "../../../../../src/app/recipebook/recipe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_model__ = __webpack_require__("../../../../../src/app/recipebook/recipe.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_ingredient_model__ = __webpack_require__("../../../../../src/app/shared/ingredient.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shoppinglist_shopping_list_service__ = __webpack_require__("../../../../../src/app/shoppinglist/shopping-list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Use Injectable to be able to inject services in other services
var RecipeService = (function () {
    // Inject shopping list service
    function RecipeService(sls) {
        this.sls = sls;
        // recipeSelected = new EventEmitter<Recipe>();
        // emit new recipe everytime the list is recipes array is changed
        // Use Subject rather than EventEmitter, EventEmitter only with @Output
        // Subject is an Observable (and an Observer)
        this.recipesChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo mollis purus sed vehicula. Morbi ipsum sapien, dictum eu erat nec, consectetur volutpat lorem. Mauris hendrerit massa et mi efficitur ullamcorper. Curabitur gravida congue lacus ut molestie. Sed ut magna vel sapien efficitur condimentum. Donec interdum, odio finibus commodo ornare, elit augue semper risus, a posuere enim sem eu turpis. Praesent sapien urna, tincidunt non maximus et, laoreet eget ante. Donec efficitur tempus quam, quis tincidunt ligula dictum et. Integer eu ante posuere, ultricies nibh et, porta lacus.';
        this.recipes = [
            new __WEBPACK_IMPORTED_MODULE_2__recipe_model__["a" /* Recipe */]('Test Recipe', this.desc, 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg', [new __WEBPACK_IMPORTED_MODULE_3__shared_ingredient_model__["a" /* Ingredient */]('meat', 1)]),
            new __WEBPACK_IMPORTED_MODULE_2__recipe_model__["a" /* Recipe */]('Test Recipe2', this.desc, 'https://eat24-files-live.s3.amazonaws.com/cuisines/v4/chinese.jpg?Signature=cJOrJVMdszLtnSJ6u6C1TRsza%2B0%3D&Expires=1499349433&AWSAccessKeyId=AKIAIEJ2GCCJRT63TBYA', [new __WEBPACK_IMPORTED_MODULE_3__shared_ingredient_model__["a" /* Ingredient */]('meat', 1), new __WEBPACK_IMPORTED_MODULE_3__shared_ingredient_model__["a" /* Ingredient */]('pizza', 19)])
        ];
    }
    RecipeService.prototype.getRecipes = function () {
        // return a copy of the list not the list itself
        return this.recipes.slice();
    };
    RecipeService.prototype.getRecipe = function (i) {
        return this.recipes[i];
    };
    RecipeService.prototype.addIngredientsToShoppingList = function (ingredients) {
        this.sls.addIngredients(ingredients);
    };
    RecipeService.prototype.addRecipe = function (recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.updateRecipe = function (index, newRecipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.deleteRecipe = function (index) {
        // splice(index, number) deletes, slice copies
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    };
    return RecipeService;
}());
RecipeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shoppinglist_shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shoppinglist_shopping_list_service__["a" /* ShoppingListService */]) === "function" && _a || Object])
], RecipeService);

var _a;
//# sourceMappingURL=recipe.service.js.map

/***/ }),

/***/ "../../../../../src/app/recipebook/recipebook.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-5\">\r\n        <app-recipe-list></app-recipe-list>\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n        <router-outlet></router-outlet>\r\n        \r\n        <!-- other method to navigate without using routing, routing is better -->\r\n\r\n        <!--<app-recipe-detail *ngIf=\"selectedRecipe; else infoText\" [recipe]=selectedRecipe></app-recipe-detail>\r\n        <ng-template #infoText>\r\n            <p>Please select a Recipe</p>\r\n        </ng-template>-->\r\n    \r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/recipebook/recipebook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeBookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipeBookComponent = (function () {
    // selectedRecipe: Recipe;
    function RecipeBookComponent() {
    }
    // private recipeService: RecipeService
    RecipeBookComponent.prototype.ngOnInit = function () {
        // this.recipeService.recipeSelected
        //     .subscribe(
        //         (recipe: Recipe) => {
        //             this.selectedRecipe = recipe;
        //         }
        //     );
    };
    return RecipeBookComponent;
}());
RecipeBookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-recipebook',
        template: __webpack_require__("../../../../../src/app/recipebook/recipebook.component.html"),
        providers: []
    }),
    __metadata("design:paramtypes", [])
], RecipeBookComponent);

//# sourceMappingURL=recipebook.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// dropdown directive better than linking bootstrap.js
// to avoid DOM manipluation clashes between angular and bootstrap
var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    return DropdownDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostBinding */])('class.open'),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "isOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[appDropdown]'
    }),
    __metadata("design:paramtypes", [])
], DropdownDirective);

//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (list, search, name) {
        // if search is empty return list
        if (search === '') {
            return list;
        }
        // else return array of matching strings
        var arr = [];
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            if (item.name === search) {
                arr.push(item);
            }
        }
        return arr;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'filter',
        pure: false
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/ingredient.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Ingredient = (function () {
    // damn, typescript
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());

//# sourceMappingURL=ingredient.model.js.map

/***/ }),

/***/ "../../../../../src/app/shoppinglist/shopping-list-edit/shopping-list-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shoppinglist/shopping-list-edit/shopping-list-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-5 form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" id=\"name\" class=\"form-control\" \n          name=\"name\" ngModel required>\n        </div>\n        <div class=\"row col-sm-2 form-group\">\n          <label for=\"amount\">Amount</label>\n          <input type=\"number\" id=\"amount\" class=\"form-control\"\n          name=\"amount\" ngModel required [pattern]=\"'^[1-9]*[0-9]*$'\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }} </button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n          <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDelete()\" *ngIf=\"editMode\">Delete</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shoppinglist/shopping-list-edit/shopping-list-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__ = __webpack_require__("../../../../../src/app/shared/ingredient.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_service__ = __webpack_require__("../../../../../src/app/shoppinglist/shopping-list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingListEditComponent = (function () {
    function ShoppingListEditComponent(sls) {
        this.sls = sls;
        this.editMode = false;
    }
    ShoppingListEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.sls.startedEditing.subscribe(function (index) {
            _this.editedItemIndex = index;
            _this.editMode = true;
            _this.editedItem = _this.sls.getIngredient(index);
            _this.slForm.setValue({
                name: _this.editedItem.name,
                amount: _this.editedItem.amount
            });
        });
    };
    ShoppingListEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppingListEditComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        var ingredient = new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */](value.name, value.amount);
        if (this.editMode) {
            this.sls.updateIngredient(this.editedItemIndex, ingredient);
        }
        else {
            this.sls.addIngredient(ingredient);
        }
        this.editMode = false;
        form.reset();
    };
    ShoppingListEditComponent.prototype.onClear = function () {
        this.slForm.reset();
        this.editMode = false;
    };
    ShoppingListEditComponent.prototype.onDelete = function () {
        this.sls.deleteIngredient(this.editedItemIndex);
        this.onClear();
    };
    return ShoppingListEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */]) === "function" && _a || Object)
], ShoppingListEditComponent.prototype, "slForm", void 0);
ShoppingListEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-shopping-list-edit',
        template: __webpack_require__("../../../../../src/app/shoppinglist/shopping-list-edit/shopping-list-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shoppinglist/shopping-list-edit/shopping-list-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shopping_list_service__["a" /* ShoppingListService */]) === "function" && _b || Object])
], ShoppingListEditComponent);

var _a, _b;
//# sourceMappingURL=shopping-list-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/shoppinglist/shopping-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shoppinglist/shopping-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-10\">\n    <app-shopping-list-edit></app-shopping-list-edit>\n    <hr>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"search\">\n    <ul class=\"list-group\">\n      <a class=\"list-group-item\" *ngFor=\"let ing of ingredients | filter : search : name; let i = index \"\n      (click)=\"onEditItem(i)\">\n        {{ ing.name }} ({{ ing.amount }})\n      </a>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shoppinglist/shopping-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__ = __webpack_require__("../../../../../src/app/shoppinglist/shopping-list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingListComponent = (function () {
    function ShoppingListComponent(sls) {
        this.sls = sls;
        this.search = '';
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.sls.getIngredients();
        this.sub = this.sls.ingredientsChanged.subscribe(function (i) {
            _this.ingredients = i;
        });
    };
    // unsubscribe from self-made (Subject) Observables to avoid memory leaks
    ShoppingListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ShoppingListComponent.prototype.onEditItem = function (index) {
        this.sls.startedEditing.next(index);
    };
    return ShoppingListComponent;
}());
ShoppingListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-shopping-list',
        template: __webpack_require__("../../../../../src/app/shoppinglist/shopping-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shoppinglist/shopping-list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingListService */]) === "function" && _a || Object])
], ShoppingListComponent);

var _a;
//# sourceMappingURL=shopping-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/shoppinglist/shopping-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__ = __webpack_require__("../../../../../src/app/shared/ingredient.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingListService = (function () {
    function ShoppingListService() {
        // Subject is an Observable (and an Observer)
        this.ingredientsChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.startedEditing = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.ingredients = [
            new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */]('Apples', 5),
            new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */]('Oranges', 5)
        ];
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.getIngredient = function (index) {
        return this.ingredients[index];
    };
    ShoppingListService.prototype.addIngredient = function (i) {
        this.ingredients.push(i);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.addIngredients = function (ingredients) {
        // for (let i of ingredients) {
        //   this.addIngredient(i);
        // }
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
        var _a;
    };
    ShoppingListService.prototype.updateIngredient = function (index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.deleteIngredient = function (index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    return ShoppingListService;
}());
ShoppingListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ShoppingListService);

//# sourceMappingURL=shopping-list.service.js.map

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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map