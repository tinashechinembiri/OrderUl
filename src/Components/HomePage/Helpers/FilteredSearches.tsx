
const FilteredSearches = async(input:string , data :Array<any>) => {
    
    return data.filter((movies :{Name:string}) =>{
       
        return movies.Name.toLowerCase().includes(input.toLowerCase())
    })
}
export default FilteredSearches; 