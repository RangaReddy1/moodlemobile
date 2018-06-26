webpackJsonp([94],{

/***/ 1775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesSettingsPageModule", function() { return AddonMessagesSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(1886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(919);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddonMessagesSettingsPageModule = (function () {
    function AddonMessagesSettingsPageModule() {
    }
    AddonMessagesSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* AddonMessagesSettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* AddonMessagesComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* AddonMessagesSettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonMessagesSettingsPageModule);
    return AddonMessagesSettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 1886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_messages__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_user_providers_user__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__ = __webpack_require__(9);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Page that displays the messages settings page.
 */
var AddonMessagesSettingsPage = (function () {
    function AddonMessagesSettingsPage(messagesProvider, domUtils, userProvider) {
        this.messagesProvider = messagesProvider;
        this.domUtils = domUtils;
        this.userProvider = userProvider;
        this.blockNonContactsState = false;
    }
    /**
     * Runs when the page has loaded. This event only happens once per page being created.
     * If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
     * Setup code for the page.
     */
    AddonMessagesSettingsPage.prototype.ionViewDidLoad = function () {
        this.fetchPreferences();
    };
    /**
     * Fetches preference data.
     *
     * @return {Promise<any>} Resolved when done.
     */
    AddonMessagesSettingsPage.prototype.fetchPreferences = function () {
        var _this = this;
        return this.messagesProvider.getMessagePreferences().then(function (preferences) {
            _this.preferences = preferences;
            _this.blockNonContactsState = preferences.blocknoncontacts;
        }).catch(function (message) {
            _this.domUtils.showErrorModal(message);
        }).finally(function () {
            _this.preferencesLoaded = true;
        });
    };
    /**
     * Update preferences. The purpose is to store the updated data, it won't be reflected in the view.
     */
    AddonMessagesSettingsPage.prototype.updatePreferences = function () {
        var _this = this;
        this.messagesProvider.invalidateMessagePreferences().finally(function () {
            _this.fetchPreferences();
        });
    };
    /**
     * Update preferences after a certain time. The purpose is to store the updated data, it won't be reflected in the view.
     */
    AddonMessagesSettingsPage.prototype.updatePreferencesAfterDelay = function () {
        var _this = this;
        // Cancel pending updates.
        clearTimeout(this.updateTimeout);
        this.updateTimeout = setTimeout(function () {
            _this.updateTimeout = null;
            _this.updatePreferences();
        }, 5000);
    };
    /**
     * Block non contacts.
     *
     * @param {boolean} block If it should be blocked or not.
     */
    AddonMessagesSettingsPage.prototype.blockNonContacts = function (block) {
        var _this = this;
        var modal = this.domUtils.showModalLoading('core.sending', true);
        this.userProvider.updateUserPreference('message_blocknoncontacts', block ? 1 : 0).then(function () {
            // Update the preferences since they were modified.
            _this.updatePreferencesAfterDelay();
        }).catch(function (message) {
            // Show error and revert change.
            _this.domUtils.showErrorModal(message);
            _this.blockNonContactsState = !_this.blockNonContactsState;
        }).finally(function () {
            modal.dismiss();
        });
    };
    /**
     * Change the value of a certain preference.
     *
     * @param {any}    notification Notification object.
     * @param {string} state        State name, ['loggedin', 'loggedoff'].
     * @param {any}    processor    Notification processor.
     */
    AddonMessagesSettingsPage.prototype.changePreference = function (notification, state, processor) {
        var _this = this;
        var processorState = processor[state], preferenceName = notification.preferencekey + '_' + processorState.name, valueArray = [];
        var value = 'none';
        notification.processors.forEach(function (processor) {
            if (processor[state].checked) {
                valueArray.push(processor.name);
            }
        });
        if (value.length > 0) {
            value = valueArray.join(',');
        }
        if (!notification.updating) {
            notification.updating = {};
        }
        notification.updating[state] = true;
        this.userProvider.updateUserPreference(preferenceName, value).then(function () {
            // Update the preferences since they were modified.
            _this.updatePreferencesAfterDelay();
        }).catch(function (message) {
            // Show error and revert change.
            _this.domUtils.showErrorModal(message);
            processorState.checked = !processorState.checked;
        }).finally(function () {
            notification.updating[state] = false;
        });
    };
    /**
     * Refresh the list of preferences.
     *
     * @param {any} refresher Refresher.
     */
    AddonMessagesSettingsPage.prototype.refreshEvent = function (refresher) {
        var _this = this;
        this.messagesProvider.invalidateMessagePreferences().finally(function () {
            _this.fetchPreferences().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Page destroyed.
     */
    AddonMessagesSettingsPage.prototype.ngOnDestroy = function () {
        // If there is a pending action to update preferences, execute it right now.
        if (this.updateTimeout) {
            clearTimeout(this.updateTimeout);
            this.updatePreferences();
        }
    };
    AddonMessagesSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-messages-settings',template:/*ion-inline-start:"/var/www/html/apps/mobile2new/src/addon/messages/pages/settings/settings.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ \'addon.messages.messagepreferences\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="preferencesLoaded" (ionRefresh)="refreshPreferences($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]="preferencesLoaded">\n        <!-- Block non contacts. -->\n        <ion-card>\n            <ion-item>\n              <ion-label>{{ \'addon.messages.blocknoncontacts\' | translate }}</ion-label>\n              <ion-toggle [(ngModel)]="blockNonContactsState" (ionChange)="blockNonContacts(blockNonContactsState)"></ion-toggle>\n            </ion-item>\n        </ion-card>\n\n        <ng-container *ngIf="preferences">\n            <div *ngFor="let component of preferences.components">\n                <ion-card list *ngFor="let notification of component.notifications">\n                    <ion-item-divider color="light" text-wrap>\n                        <ion-row no-padding>\n                            <ion-col no-padding>{{ notification.displayname }}</ion-col>\n                            <ion-col col-2 text-center no-padding class="hidden-phone">{{ \'core.settings.loggedin\' | translate }}</ion-col>\n                            <ion-col col-2 text-center no-padding class="hidden-phone">{{ \'core.settings.loggedoff\' | translate }}</ion-col>\n                        </ion-row>\n                    </ion-item-divider>\n                    <ng-container *ngFor="let processor of notification.processors">\n                        <!-- Tablet view -->\n                        <ion-row text-wrap class="hidden-phone" align-items-center>\n                            <ion-col margin-horizontal>{{ processor.displayname }}</ion-col>\n                            <ion-col col-2 text-center *ngFor="let state of [\'loggedin\', \'loggedoff\']">\n                                <!-- If notifications not disabled, show toggle. -->\n                                <ion-spinner [hidden]="preferences.disableall || !(notification.updating && notification.updating[state])"></ion-spinner>\n                                <ion-toggle *ngIf="!preferences.disableall" [(ngModel)]="processor[state].checked" (ionChange)="changePreference(notification, state, processor)" [disabled]="processor.locked || (notification.updating && notification.updating[state])">\n                                </ion-toggle>\n                                <!-- If notifications are disabled, show "Disabled" instead of toggle. -->\n                                <span *ngIf="preferences.disableall">{{ \'core.settings.disabled\' | translate }}</span>\n                            </ion-col>\n                        </ion-row>\n                        <!-- Phone view -->\n                        <ion-list-header text-wrap class="hidden-tablet">{{ processor.displayname }}</ion-list-header>\n                        <!-- If notifications not disabled, show toggles. If notifications are disabled, show "Disabled" instead of toggle. -->\n                        <ion-item *ngFor="let state of [\'loggedin\', \'loggedoff\']" text-wrap class="hidden-tablet">\n                            <ion-label>{{ \'core.settings.\' + state | translate }}</ion-label>\n                            <ion-spinner item-end *ngIf="!preferences.disableall && (notification.updating && notification.updating[state])"></ion-spinner>\n                            <ion-toggle item-end *ngIf="!preferences.disableall" [(ngModel)]="processor[state].checked" (ionChange)="changePreference(notification, state, processor)" [disabled]="processor.locked || (notification.updating && notification.updating[state])">\n                            </ion-toggle>\n                            <ion-note item-end *ngIf="preferences.disableall">{{ \'core.settings.disabled\' | translate }}</ion-note>\n                        </ion-item>\n                    </ng-container>\n                </ion-card>\n            </div>\n        </ng-container>\n    </core-loading>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/apps/mobile2new/src/addon/messages/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_messages__["a" /* AddonMessagesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utils_dom__["a" /* CoreDomUtilsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__core_user_providers_user__["a" /* CoreUserProvider */]])
    ], AddonMessagesSettingsPage);
    return AddonMessagesSettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=94.js.map