"use strict";
exports.__esModule = true;
exports.Admin = void 0;
var lodash_1 = require("lodash");
var Admin = /** @class */ (function () {
    function Admin(id, name, age, aadhar, votercard) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.aadhar = aadhar;
        this.votercard = votercard;
    }
    Admin.prototype.hire = function (candidates) {
        var _this = this;
        console.log("Hiring criteria are....age 21-45...weapon license should be present blah blah");
        candidates.forEach(function (candidate) {
            if (_this.fulfillLibrarianCriteriaBy(candidate)) {
                return candidate;
            }
            if (_this.fulfillGuardCriteriaBy(candidate)) {
                return candidate;
            }
        });
        console.log("No candidate fulfills the creiteria. So librarian/guard for this floor not hired");
        return {};
    };
    Admin.prototype.fulfillLibrarianCriteriaBy = function (librarian) {
        return (librarian.age >= 21 && librarian.age <= 45) ? true : false;
    };
    Admin.prototype.fulfillGuardCriteriaBy = function (guard) {
        return ((guard.age >= 21 && guard.age <= 45) && (!lodash_1.isUndefined(guard.weaponLicense) && !lodash_1.isEmpty(guard.weaponLicense))) ? true : false;
    };
    return Admin;
}());
exports.Admin = Admin;
