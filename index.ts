import { AdminImpl} from "./AdminImpl";
import { Library } from "./Library";
import { ReceptionImpl } from "./ReceptionImpl";
import { Librarian } from "./Librarian";
import { Guard } from "./Guard";
import { Weapon } from "./Weapon";
import { ReadingRoomImpl } from "./ReadingRoomImpl";
import { BooksRoomImpl } from "./BooksRoomImpl";
import { Section } from "./Section";
import { MemberImpl } from "./MemberImpl";
const admin = new AdminImpl("A123","Sree Anjaneyulu",31,"WE123","SE123");
let librarian: Librarian = admin.hire<Librarian>([{id: "2",
name: "Ramulu",
age: 35,
aadhar: "T123",


doj: new Date("2022-01-01"),
bloodGroup:"O+"},{id: "3",
    name: "Sita",
    age: 32,
    aadhar: "U123",
    
    votercard: "TQ123",
    doj: new Date("2022-06-01"),
    bloodGroup: "B+"},{id: "4",
        name: "Kattula Rattayya",
        age: 40,
        aadhar: "E123",
        votercard: "VC123",
        doj: new Date("2022-12-20"),
        bloodGroup: "A-"}])
console.log("Hired Librarian", librarian);
 const guard: Guard = admin.hire<Guard>([{id: "2",
        name: "Ramulu",
        age: 35,
        aadhar: "T123",
        "weapon":Weapon.BAYONET,
        weaponLicense:"123",
        
        doj: new Date("2022-01-01"),
        bloodGroup:"O+"},{id: "3",
            name: "Sita",
            age: 32,
            aadhar: "U123",
            "weapon":Weapon.KNIFE,
        weaponLicense:"123",
            votercard: "TQ123",
            doj: new Date("2022-06-01"),
            bloodGroup: "B+"},{id: "4",
                name: "Kattula Rattayya",
                age: 40,
                "weapon":Weapon.GUN,
        weaponLicense:"123",
                aadhar: "E123",
                votercard: "VC123",
                doj: new Date("2022-12-20"),
                bloodGroup: "A-"}]);
                console.log("Hired Guard", guard);
const reception = new ReceptionImpl(librarian);
const readingRooms = [new ReadingRoomImpl(10,5,20), new ReadingRoomImpl(10,6,21),new ReadingRoomImpl(7,5,30)];
const booksRooms  =[new BooksRoomImpl(Section.BIOLOGY,30),new BooksRoomImpl(Section.BUSINESS,30),new BooksRoomImpl(Section.HISTORY,30),new BooksRoomImpl(Section.TECHNOLOGY,30)];
const library = new Library("OUCE Library",{street: "Tarnaka",
    pincode: "500001",
    city: "Hyderabad",
    state: "Telangana",
    country: "India"},"B.N. Reddy Garu",new Date("1929-01-01"),1,
 [{reception, readingRooms, booksRooms}],guard)

 const floor = library.floorsDetails[0];
 const members = 
    floor.reception.register(new MemberImpl("1","Ajju",40,"2728 6563",new Date("2018-03-01")));
 