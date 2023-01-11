import { ReadingRoom } from "./ReadingRoom";
import { Reception } from "./Reception";
import { BooksRoom } from "./BooksRoom";


export class FloorImpl
{
    
    reception : Reception;
    readingRooms: ReadingRoom[];
    booksRooms : BooksRoom[];
    

    constructor(readingRooms: ReadingRoom[],booksRooms:BooksRoom[], reception: Reception)
    {
        this.readingRooms = readingRooms;
        this.booksRooms = booksRooms;
        this.reception = reception;
        
    }

}