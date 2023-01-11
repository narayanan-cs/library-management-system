import { Guard } from "./Guard";
import { Librarian } from "./Librarian";
import {isUndefined, isEmpty} from 'lodash';
export class AdminImpl
{
    id: string;
    name: string;
    age: number;
    aadhar: string;
    votercard? : string;

    constructor(id: string,name: string,age:number,aadhar:string,votercard:string)
    {
        this.id= id;
        this.name=  name;
        this.age = age;
        this.aadhar = aadhar;
        this.votercard=  votercard;
    }
    public hire<T>(candidates: T[]): T
    {
        console.log("Hiring criteria are....age 21-45...weapon license should be present blah blah");
       const candidate = candidates.filter(candidate=>{
            if(this.fulfillLibrarianCriteriaBy(<Librarian><unknown>candidate))
            {console.log("Inside librarian criteria")
                 return candidate;
                
            }
            if(this.fulfillGuardCriteriaBy(<Guard><unknown>candidate))
            {
        console.log("inside Guard criteria")
                return candidate;
            }

        })
        
        //console.log(`No candidate fulfills the creiteria. So librarian/guard for this floor not hired`)
        return <T><unknown>candidate;
    }

    public fulfillLibrarianCriteriaBy(librarian: Librarian)
    {console.log("librarian",librarian)
        return (librarian.age >=21 && librarian.age <=45) ? true:false;
    }
    public fulfillGuardCriteriaBy(guard: Guard)
    {console.log("librarian",guard)
        return ((guard.age >=21 && guard. age <=45) && (!isUndefined(guard.weaponLicense) && !isEmpty(guard.weaponLicense))) ? true:false;
    }

}