export class ReadingRoomImpl
{
    chairs: number;
    tables: number;
    capacity: number;

    constructor(chairs:number,tables: number, capacity: number)
    {
        this.chairs= chairs;
        this.tables = tables;
        this.capacity= capacity;
    }

}