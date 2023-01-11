"use strict";
exports.__esModule = true;
exports.Reception = void 0;
var Reception = /** @class */ (function () {
    function Reception(librarian) {
        this.members = new Map();
    }
    Reception.prototype.register = function (visitor) {
        console.log("registration logic..issue id to the new member");
        console.log("verifying visitors details");
        this.members.set(visitor.id, visitor);
    };
    Reception.prototype.unregister = function (member) {
        this.members["delete"](member.id);
    };
    return Reception;
}());
exports.Reception = Reception;
