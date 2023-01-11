import { ReadingRoom } from "./ReadingRoom";
import { Reception } from "./Reception";
import { BooksRoom } from "./BooksRoom";


export type Floor
={
    
    reception : Reception;
    readingRooms: ReadingRoom[];
    booksRooms : BooksRoom[];
    

 
}