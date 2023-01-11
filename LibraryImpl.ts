import {Address} from './Address';
import {Floor} from './Floor';
import { Guard } from './Guard';
import { Librarian } from './Librarian';
export class LibraryImpl
{
    public name: String;
    public address: Address;
    public founder: string;
    foundingYear: Date;
    floors: number;
    floorsDetails: Floor[];
    guard:Guard;
    librarian:Librarian;
    

    constructor(name: string, address:Address,founder:string,foundingYear: Date,floors:number, floorsDetails:Floor[],guard: Guard)
    {
        this.name= name;
        this.address = address;
        this.founder = founder;
        this.foundingYear =foundingYear;
        this.floors = floors;
        this.floorsDetails = floorsDetails;
        //const admin = new Admin();
        this.guard = guard;
        //this.librarian = admin.hire(this.candidates);
    }

    public open(date: Date)
    {
        console.log(`Library ${this.name} opens at date at 9:00AM;`)
    }

    public close(date: Date)
    {
        console.log(`Library ${this.name} closes at date at 9:00PM;`)
    }

    public details()
    {
        console.log(  `Library ${this.name} was founded in the year ${this.foundingYear} by ${this.founder}. The address is ${this.address}. It has ${this.floors}. All the floor details are ${this.floorsDetails}`)
    }
 
   
}