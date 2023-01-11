export class AddressImpl
{
    street: string;
    pincode: string;
    city: string;
    state: String;
    country: string;

    constructor(street: string,pincode:string,city:string,state:string,country:string)
    {
        this.street = street;
        this.pincode= pincode;
        this.city = city;
        this.state = state;
        this.country = country;
    }
}