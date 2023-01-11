"use strict";
exports.__esModule = true;
exports.ReceptionImpl = void 0;
var ReceptionImpl = /** @class */ (function () {
    function ReceptionImpl(librarian) {
        this.members = new Map();
    }
    ReceptionImpl.prototype.register = function (visitor) {
        console.log("registration logic..issue id to the new member");
        console.log("verifying visitors details");
        this.members.set(visitor.id, visitor);
    };
    ReceptionImpl.prototype.unregister = function (member) {
        this.members["delete"](member.id);
    };
    return ReceptionImpl;
}());
exports.ReceptionImpl = ReceptionImpl;
