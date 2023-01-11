import { Book } from "./Book";
import { Librarian } from "./Librarian";

export type Member
={
    id: string;
    name: string;
    age:number;
    aadhar: string;
    
    votercard?: string;
    doj: Date;
    librarianRegsitered: Librarian;
    booksHeld: any;

    
}