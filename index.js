"use strict";
exports.__esModule = true;
var AdminImpl_1 = require("./AdminImpl");
var Library_1 = require("./Library");
var ReceptionImpl_1 = require("./ReceptionImpl");
var Weapon_1 = require("./Weapon");
var ReadingRoomImpl_1 = require("./ReadingRoomImpl");
var BooksRoomImpl_1 = require("./BooksRoomImpl");
var Section_1 = require("./Section");
var MemberImpl_1 = require("./MemberImpl");
var admin = new AdminImpl_1.AdminImpl("A123", "Sree Anjaneyulu", 31, "WE123", "SE123");
var librarian = admin.hire([{ id: "2",
        name: "Ramulu",
        age: 35,
        aadhar: "T123",
        doj: new Date("2022-01-01"),
        bloodGroup: "O+" }, { id: "3",
        name: "Sita",
        age: 32,
        aadhar: "U123",
        votercard: "TQ123",
        doj: new Date("2022-06-01"),
        bloodGroup: "B+" }, { id: "4",
        name: "Kattula Rattayya",
        age: 40,
        aadhar: "E123",
        votercard: "VC123",
        doj: new Date("2022-12-20"),
        bloodGroup: "A-" }]);
console.log("Hired Librarian", librarian);
var guard = admin.hire([{ id: "2",
        name: "Ramulu",
        age: 35,
        aadhar: "T123",
        "weapon": Weapon_1.Weapon.BAYONET,
        weaponLicense: "123",
        doj: new Date("2022-01-01"),
        bloodGroup: "O+" }, { id: "3",
        name: "Sita",
        age: 32,
        aadhar: "U123",
        "weapon": Weapon_1.Weapon.KNIFE,
        weaponLicense: "123",
        votercard: "TQ123",
        doj: new Date("2022-06-01"),
        bloodGroup: "B+" }, { id: "4",
        name: "Kattula Rattayya",
        age: 40,
        "weapon": Weapon_1.Weapon.GUN,
        weaponLicense: "123",
        aadhar: "E123",
        votercard: "VC123",
        doj: new Date("2022-12-20"),
        bloodGroup: "A-" }]);
console.log("Hired Guard", guard);
var reception = new ReceptionImpl_1.ReceptionImpl(librarian);
var readingRooms = [new ReadingRoomImpl_1.ReadingRoomImpl(10, 5, 20), new ReadingRoomImpl_1.ReadingRoomImpl(10, 6, 21), new ReadingRoomImpl_1.ReadingRoomImpl(7, 5, 30)];
var booksRooms = [new BooksRoomImpl_1.BooksRoomImpl(Section_1.Section.BIOLOGY, 30), new BooksRoomImpl_1.BooksRoomImpl(Section_1.Section.BUSINESS, 30), new BooksRoomImpl_1.BooksRoomImpl(Section_1.Section.HISTORY, 30), new BooksRoomImpl_1.BooksRoomImpl(Section_1.Section.TECHNOLOGY, 30)];
var library = new Library_1.Library("OUCE Library", { street: "Tarnaka",
    pincode: "500001",
    city: "Hyderabad",
    state: "Telangana",
    country: "India" }, "B.N. Reddy Garu", new Date("1929-01-01"), 1, [{ reception: reception, readingRooms: readingRooms, booksRooms: booksRooms }], guard);
var floor = library.floorsDetails[0];
var members = floor.reception.register(new MemberImpl_1.MemberImpl("1", "Ajju", 40, "2728 6563", new Date("2018-03-01")));
