import { Weapon } from "./Weapon";
export type Guard=
{
    id: String;
    name: string;
    age:number;
    aadhar: string;
    weaponLicense: string;
    votercard?: string;
    doj: Date;
    bloodGroup: string;
    weapon: Weapon;
}