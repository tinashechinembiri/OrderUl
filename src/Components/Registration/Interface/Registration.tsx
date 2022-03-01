import React from "react";
export interface IRegistration {
    email?:string, 
    password?:string, 
    firstname?:string, 
    lastname?:string, 
    phone?:string, 
    addressname?:string, 
    postcode?:string, 
    county?:string, 
    country?:string, 
}

export interface IErrors{
    [key: string] : string
}