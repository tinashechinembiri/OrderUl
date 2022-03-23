import React, { Fragment, useEffect, useState } from "react";
import MovieSearchBar from "./MovieSearchBar"
import FilteredSearches from '../Helpers/FilteredSearches'; 
import SearchData from './SearchData'; 
import SearchService from '../Service/SearchService'
import'../CustomHooks/CSS/WhatsOn.css'

const Search = () => {
    const [UserIput, SetInput] = useState<any| null>(''); 
    const[searchData, SetSearchData] = useState<any| null>(null);
    const [movieData, setMovieData] = useState <any| null>(null);
    async function moviessearchdata () {
        try{
        const movies =  await SearchService(); 
        setMovieData(movies);
        }catch(ex:any)
        {
            console.log(ex); 
        } 
   }
    useEffect (()=> {
         moviessearchdata();  
    }, [])
    const updateSearch = (input:string) => { 
        SetInput(input);
    }
    function searchuser (){
        const filtereddata =  FilteredSearches(UserIput, movieData) ; 
     
        SetSearchData(filtereddata); 
        if (!UserIput)
        {
            SetSearchData([])
        } 
    }
    useEffect (()=> {
        searchuser(); 
    }, [UserIput])
    return(
       <Fragment>
        <MovieSearchBar
            input={UserIput}
            onchangeInput={updateSearch}
        />
     
        <SearchData
         responseData={searchData}
        /> 
     </Fragment>
    )
}
export default Search; 