

const Dummy_Places :Array<{id:string, Name:string}> =  [
    {id : 'L1' , Name:'Leeds Cinema' }, 
    {id : 'N1' , Name:'Northampton Cinema' }, 
    {id : 'M1' , Name:'Manchester Cinema' }, 
    {id : 'C1' , Name:'Chester Cinema' }, 
    {id : 'LN1' , Name:'London Cinema' }, 
    {id : 'B1' , Name:'Birmingham Cinema' },     
]; 
const GetLocationdata = async () =>  {
     return await Dummy_Places ; 
}

export default GetLocationdata; 