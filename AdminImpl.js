"use strict";
exports.__esModule = true;
exports.AdminImpl = void 0;
var lodash_1 = require("lodash");
var AdminImpl = /** @class */ (function () {
    function AdminImpl(id, name, age, aadhar, votercard) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.aadhar = aadhar;
        this.votercard = votercard;
    }
    AdminImpl.prototype.hire = function (candidates) {
        var _this = this;
        console.log("Hiring criteria are....age 21-45...weapon license should be present blah blah");
        var candidate = candidates.filter(function (candidate) {
            if (_this.fulfillLibrarianCriteriaBy(candidate)) {
                console.log("Inside librarian criteria");
                return candidate;
            }
            if (_this.fulfillGuardCriteriaBy(candidate)) {
                console.log("inside Guard criteria");
                return candidate;
            }
        });
        //console.log(`No candidate fulfills the creiteria. So librarian/guard for this floor not hired`)
        return candidate;
    };
    AdminImpl.prototype.fulfillLibrarianCriteriaBy = function (librarian) {
        console.log("librarian", librarian);
        return (librarian.age >= 21 && librarian.age <= 45) ? true : false;
    };
    AdminImpl.prototype.fulfillGuardCriteriaBy = function (guard) {
        console.log("librarian", guard);
        return ((guard.age >= 21 && guard.age <= 45) && (!lodash_1.isUndefined(guard.weaponLicense) && !lodash_1.isEmpty(guard.weaponLicense))) ? true : false;
    };
    return AdminImpl;
}());
exports.AdminImpl = AdminImpl;
