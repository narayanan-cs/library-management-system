import { Book } from "./Book";
import { Librarian } from "./Librarian";

export class MemberImpl
{
    id: String;
    name: string;
    age:number;
    aadhar: string;
    
    votercard?: string;
    doj: Date;
    librarianRegsitered: Librarian;
    booksHeld: any;

    constructor(id:string,name:string,age:number,aadhar:string,doj:Date)
    {
        this.id= id;
        this.name = name;
        this.age = age;
        this.aadhar = aadhar;
        this.doj = doj;
        this.booksHeld = new Map();
    }
    //methods

    returnBooks(books:Book[])
    {
        this.booksHeld.delete(books.forEach((book)=>{book.isbn,book}))
    }

    borrowBooks(books:Book[])
    {
        this.booksHeld.set(books.forEach((book)=>{book.isbn,book}))
    }


}