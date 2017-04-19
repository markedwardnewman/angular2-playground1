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
var http_data_service_1 = require('./http-data.service');
var AppComponent = (function () {
    function AppComponent(httpDataService) {
        this.httpDataService = httpDataService;
        this.httpData = [];
        this.value = '';
    }
    // ngOnInit() {
    // }
    AppComponent.prototype.onEnterVolume = function (value) {
        var urlAPI = 'https://www.googleapis.com/books/v1/volumes?q=';
        var url = urlAPI + value;
        this.value = url;
        this.getData(url);
    };
    AppComponent.prototype.getData = function (url) {
        var _this = this;
        this.httpDataService.getHttpData(url)
            .subscribe(function (data) {
            _this.httpData = data;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h2>Angular2 Asynchronous API Call</h2>\n    <p>This is my Angular2 playground app. It\u2026</p>\n    <ul>\n      <li>\u2026uses the HttpModule with an Observable to asynchronously connect to the Google Books API</li>\n      <li>\u2026populates a table with the first 10 returned entries</li>\n      <li>\u2026uses OrderByPipe to sort by page count<sup>1</sup></li>\n      <li>\n        \u2026uses angular-cli-ghpages to deploy to any gh-pages branch on GitHub like so:<br>\n        <code>&nbsp;&nbsp;$ tsc --target ES5</code>\n      </li>\n    </ul>\n    <label>Enter the name of any book:</label>\n    <input #volumeQuery\n      (keyup.enter)=\"onEnterVolume(volumeQuery.value)\">\n    <p *ngIf=\"value\">\n      JSON data link: <a href=\"{{value}}\"  target=\"_blank\">{{value}}</a>\n    </p>\n\n    <table>\n      <tbody>\n        <tr *ngIf=\"httpData.items\">\n          <td>Title</td>\n          <td>Page Count</td>\n        </tr>\n        <tr *ngFor=\"let item of httpData.items | orderByPipe\">\n          <td>{{ item.volumeInfo.title }}</td>\n          <td>{{ item.volumeInfo.pageCount }}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <!-- If successful, show this -->\n    <div *ngIf=\"httpData.totalItems\">\n      <p>\n        10 out of {{ httpData.totalItems }} entries shown\n      </p>\n      <h3>FUN TIDBITS:</h3>\n      <ul>\n        <li>- In your local dev enviro, open the app side-by-side in both Chrome and Firefox. Refresh both, then in Chrome, type something in the input field. Neat!</li>\n        <li>\n          - Using TypeScript, you can specify the target ECMAScript version with the CLI --target option like so:<br>\n          <code>&nbsp;&nbsp;$ tsc --target ES5</code>\n        </li>\n      </ul>\n      <h3>TODO:</h3>\n      <ul>\n        <li>- Show entries dynamically based upon input</li>\n        <li>- Allow different types of sorting</li>\n        <li>- Break the app up into sub-components</li>\n      </ul>\n      <h3>KNOWN ISSUES:</h3>\n      <ul>\n        <li><sup>1</sup>The sorting doesn't always work when returned entries contain no pageCount. Also verify that the API's pageCount is always an int.</li>\n        <li><sup>x</sup></li>\n      </ul>\n    </div>\n  ",
            styles: ["\n    tr:first-child {\n      font-weight: bold;\n    }\n    table {\n      margin-top: 24px;\n    }\n    td {\n      padding-right: 24px;\n    }\n    ul {\n      list-style: none\n    }\n  "],
            providers: [http_data_service_1.HttpDataService]
        }), 
        __metadata('design:paramtypes', [http_data_service_1.HttpDataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map