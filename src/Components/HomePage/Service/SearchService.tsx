import React from 'react';
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
    {id:3, Name: 'promibe', MovieDetails:{
        Cast :['Actor 2', 'actor 4'], 
        Synopsis:'movies is about items and all that ', 
        Director:['direct 2']
    }}
]
const SearchService = async () => {
const movies =  Dummy_Movies; 

return movies; 
}
export default SearchService; 