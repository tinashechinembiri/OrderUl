import React from 'react';
import Search from '../Components/HomePage/Search/Search';
import * as FilteredSearches from '../Components/HomePage/Helpers/FilteredSearches'
import { render, screen, act} from '@testing-library/react';
import * as SearchService from '../Components/HomePage/Service/SearchService'
import userEvent from '@testing-library/user-event'

describe ('Test search component', () => {
    let responsedata = [
        {id:3, Name: 'promibe', 
        MovieDetails:{
            Cast :['Actor 2', 'actor 4'], 
            Synopsis:'movies is about items and all that ', 
            Director:['direct 2']
        }},  {id:2, Name: 'powerranger', MovieDetails:{
        Cast :['Actor 2', 'actor 4'], 
        Synopsis:'movies is about items and all that ', 
        Director:['direct 2']
    }}, 
    ]
    let moviedataMock; 
    let filteredsearchmock ; 
    beforeEach (()=> {
        moviedataMock = jest.spyOn(SearchService, 'default').mockResolvedValue(responsedata); 
        
        //Array.prototype.filter = jest.fn(()=> {return responsedata})
    })
    afterEach(()=> {
        jest.clearAllMocks(); 
    })
    it('test user serching for a movie', async() => {
       await  act (async()=> {
            filteredsearchmock = jest.spyOn (FilteredSearches, 'default').mockReturnValue(responsedata)
             await render (<Search/>); 
            const userInput = screen.getByPlaceholderText('Start typing a film or event'); 
            userEvent.type(userInput, 'prom'); 
            //screen.getByRole('list', {name:'promibe'})
            expect( screen.getByText('promibe')).toBeTruthy(); 
            screen.debug(); 
           
        })
    })
 
})


