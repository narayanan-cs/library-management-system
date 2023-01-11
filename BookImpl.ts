export class BookImpl
{
    isbn:string;
    name:string;
    category: string;
    author:string;
    publisher: string;
    edition:string;

    constructor(isbn:string,name:string,category:string,author:string,publisher:string,edition:string)
    {
        this.isbn=isbn;
        this.name= name;
        this.category = category;
        this.author= author;
        this.publisher = publisher;
        this.edition = edition;
    }


}