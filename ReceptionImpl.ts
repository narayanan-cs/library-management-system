import { Librarian } from "./Librarian";
import { Admin } from "./Admin";
import { Member } from "./Member";
export class ReceptionImpl
{
    librarian: Librarian;

    members: any;
    
    constructor(librarian: Librarian)
    {
        this.members = new Map();
        
    }
    register(visitor:Member):void
    {
        console.log("registration logic..issue id to the new member");
        console.log("verifying visitors details");
        
        this.members.set(visitor.id,visitor);
    }

    unregister(member: Member)
    {
        this.members.delete(member.id);
    }
}