import React, {ReactNode}from 'react';
import { render, screen,  } from '@testing-library/react';
//import MainPage from './Components/MainPage'; 
import Login from './Components/Login/Login'; 
import {Usercontext} from './Components/UserPage/Components/CustomHooks/UserContextdat'
import Header from  './Components/Headers/HeadersNav'
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import {MemoryRouter } from 'react-router-dom'

import {create} from 'react-test-renderer';
import {  createMemoryHistory } from 'history';
//https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

import MainPage from './Components/MainPage';
jest.mock('./Components/MainPage.tsx'); 

jest.mock('./Components/Headers/HeadersNav.tsx')
// jest.mock('./Components/Login/Login.tsx')
// jest.mock('./Components/Registration/CreateUser.tsx')
// jest.mock('./Components/UserPage/UserPage.tsx')
// jest.mock('./Components/UserPage/EditPage.tsx')

describe ('app ts', ()=>{
    let mockMainpagecomponent:jest.MockedFunction < typeof MainPage>
    let mockHeadercomponent:jest.MockedFunction < typeof Header>
beforeEach(() => {
    mockMainpagecomponent = MainPage as jest.MockedFunction < typeof MainPage>;
    mockHeadercomponent = Header as jest.MockedFunction < typeof Header>;
    mockMainpagecomponent.mockImplementation ( () => {
        return (
            <>
            HomePageMock
            </>
        )
    }); 
    mockHeadercomponent.mockImplementation(() => { return (<div> PageHeaderMock</div>)})
}); 
afterEach (()=> {
    jest.clearAllMocks(); 
})
it('create a snapshot of the app', () => {

    const component = create (<App/>)
   let tree =  component.toJSON(); 
   expect (tree).toMatchSnapshot(); 
});
it('should render the main page on the router', ()=> {  
    render(<App/> ); 
expect(screen.getByText("PageHeaderMock")).toBeInTheDocument();
expect(screen.getByText("HomePageMock")).toBeInTheDocument();
});
it('check the current router', ()=> {  
 
});
})