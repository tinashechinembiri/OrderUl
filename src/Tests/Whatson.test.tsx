import React, {ReactNode ,useState  ,lazy, Suspense}from 'react';
import WhatsOn from '../Components/HomePage/WhatsOn';
import * as GetLocationdata from '../Components/HomePage/Service/LocationService'
import { render, screen, act, waitFor} from '@testing-library/react';
import ReactDOM from 'react-dom';
import {create} from 'react-test-renderer';
import userEvent from '@testing-library/user-event'
//jest.mock('../Components/HomePage/WhatsOnPanel/AdvertPanel', () => <AdvertPanel/>);
//jest.mock('../Components/HomePage/Search/Search', () => require('./Search'));
//https://github.com/testing-library/react-hooks-testing-library/issues/425



//https://github.com/testing-library/react-testing-library/issues/281
describe ('whats on' , () => {
    let locationdata ; 
    const oldCreatePortal = ReactDOM.createPortal;
    beforeAll(()=> {
        ReactDOM.createPortal = (node: ReactNode): React.ReactPortal =>
        node as React.ReactPortal;
    })
    afterAll(()=> {
        ReactDOM.createPortal = oldCreatePortal; 
       
    })
    beforeEach (() => {
        //locationdata = () => Promise.resolve([ {id : 'L1' , Name:'Leeds Cinema' }])
        const mock = jest.spyOn (GetLocationdata,'default').mockResolvedValue([
            {
                id : 'B1' , 
                Name:'Birmingham Cinema' 
            }]);
    })
    afterEach (() => {
       
        jest.clearAllMocks(); 

    })
  
    it ('load the whats on page', async () => {
    await act (async ()=> {
         render (
            <Suspense fallback={<div>loading...</div>}>
                <WhatsOn/> 
            </Suspense>);
              expect(screen.getByText('Loading...')).toBeInTheDocument();
          
            }); 
     //  expect( getByRole('heading')).toBeInTheDocument();
           await waitFor (() => {
            expect( screen.getByText('Comming soon')).toBeTruthy(); 
           })
        
      
    })
    
    it ('load the whats on page - test', async() => { 
        // const test = create (
        //     <Suspense fallback={<div>loading...</div>}>

        //         <WhatsOn/> 
        //         </Suspense>
               
        // )
       
       // expect(test.toJSON()).toMatchSnapshot(); 
    }); 
    //https://www.carlrippon.com/how-to-mock-a-function-in-jest-with-typescript/
    //https://davidwcai.medium.com/react-testing-library-and-the-not-wrapped-in-act-errors-491a5629193b
 
    it ('user should be able to interact with the location modal', async() => {
    
             await waitFor (() => {
                  render ( 
                 <Suspense fallback={<div>loading...</div>}>
                 <WhatsOn/>
                 </Suspense>
                 ) 
             }); 
             await waitFor (() => {
                userEvent.click(screen.getByDisplayValue('choose your location'))
             })         
    }) 

})