
const FilteredSearches = (input:string , data :Array<any>) => {
    let response 
    response = data?.filter((movies:{Name:string}) =>{
     
        return movies?.Name.toLowerCase().includes(input.toLowerCase())
    })
    return response; 
}
export default FilteredSearches; 