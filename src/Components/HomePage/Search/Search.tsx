import React, { useState } from "react";
import MovieSearchBar from "./MovieSearchBar"
import FilteredSearch from '../Helpers/FilteredSearches'; 
import SearchData from './SearchData'; 
import'../CustomHooks/CSS/WhatsOn.css'
const Dummy_Movies =[
    {id:1, Name: 'spaceranger', MovieDetails:{
        Cast :['Actor 1', 'actor 2'], 
        Synopsis:'movies is about items and all that ', 
        Director:['direct 1']
    }}, 
    {id:2, Name: 'powerranger', MovieDetails:{
        Cast :['Actor 2', 'actor 4'], 
        Synopsis:'movies is about items and all that ', 
        Director:['direct 2']
    }}, 
    {id:3, Name: 'promise', MovieDetails:{
        Cast :['Actor 2', 'actor 4'], 
        Synopsis:'movies is about items and all that ', 
        Director:['direct 2']
    }}
]
const Search = () => {
    const [UserIput, SetInput] = useState<any| null>(''); 
    const[searchData, SetSearchData] = useState<any| null>();
    
    const updateSearch = async(input:string) => {
        const filtereddata = await FilteredSearch(UserIput, Dummy_Movies) ; 
        
        SetInput(input)
        SetSearchData(filtereddata); 
 
        if (!input)
        {
            SetSearchData([])
        }
       
    }
    return(
        <div  className="movie-input">
        <MovieSearchBar
            input={UserIput}
            onchangeInput={updateSearch}
        />
     
        <SearchData
        responseData={searchData}
        /> 

        </div>

    )
}
export default Search; 