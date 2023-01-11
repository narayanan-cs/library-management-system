"use strict";
exports.__esModule = true;
exports.MemberImpl = void 0;
var MemberImpl = /** @class */ (function () {
    function MemberImpl(id, name, age, aadhar, doj) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.aadhar = aadhar;
        this.doj = doj;
        this.booksHeld = new Map();
    }
    //methods
    MemberImpl.prototype.returnBooks = function (books) {
        this.booksHeld["delete"](books.forEach(function (book) { book.isbn, book; }));
    };
    MemberImpl.prototype.borrowBooks = function (books) {
        this.booksHeld.set(books.forEach(function (book) { book.isbn, book; }));
    };
    return MemberImpl;
}());
exports.MemberImpl = MemberImpl;
