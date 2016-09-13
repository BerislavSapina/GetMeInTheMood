"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var localstorage_service_1 = require('../localstorage-service');
require('rxjs/add/operator/toPromise');
var UserService = (function () {
    function UserService(http, localStorage) {
        this.http = http;
        this.localStorage = localStorage;
        this.loggedIn = false;
        // this.loggedIn = !!localStorage.getToken();
    }
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    UserService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var body = "username=" + username + "&password=" + password;
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        return this.http.post('localhost:3030/api/login', body, options).toPromise().then(function (res) {
            console.log(res);
            if (res.ok) {
                var token = res.json().token;
                _this.localStorage.setToken(token);
                return res;
            }
        }).catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        this.localStorage.removeToken('auth_token');
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, localstorage_service_1.LocalStorageService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map