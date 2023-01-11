"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(name, address, founder, foundingYear, floors, floorsDetails, guard) {
        this.name = name;
        this.address = address;
        this.founder = founder;
        this.foundingYear = foundingYear;
        this.floors = floors;
        this.floorsDetails = floorsDetails;
        //const admin = new Admin();
        this.guard = guard;
        //this.librarian = admin.hire(this.candidates);
    }
    Library.prototype.open = function (date) {
        console.log("Library " + this.name + " opens at date at 9:00AM;");
    };
    Library.prototype.close = function (date) {
        console.log("Library " + this.name + " closes at date at 9:00PM;");
    };
    Library.prototype.details = function () {
        console.log("Library " + this.name + " was founded in the year " + this.foundingYear + " by " + this.founder + ". The address is " + this.address + ". It has " + this.floors + ". All the floor details are " + this.floorsDetails);
    };
    return Library;
}());
exports.Library = Library;
