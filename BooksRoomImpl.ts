import { Section } from "./Section";
export class BooksRoomImpl
{
    section: Section;
    capacity: number;

    constructor(section:Section,capacity: number)
    {
        this.section= section;
        this.capacity= capacity;
    }
}