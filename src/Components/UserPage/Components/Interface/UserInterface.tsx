import React from "react";
export interface UserInterface {
    user_id:string
    email :string, 
    password:string, 
    accounts: {
        Address: {
            addressname: string,
            postcode:string,
            county: string,
            country: string
        },  
        accountid: string,
        firstname: string,
        lastname: string,
        phone?: number,
    }
}
