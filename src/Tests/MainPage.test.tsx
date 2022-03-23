import React, {ReactNode ,useState as useStateMock }from 'react';
import  MainPage from'../Components/MainPage';
import {create, act} from 'react-test-renderer';
import ReactDOM from 'react-dom';

//https://ogzhanolguncu.com/blog/testing-with-react-testing-library-typescript-and-axios
//https://stackoverflow.com/questions/70400540/dispatch-a-custom-event-and-test-if-it-was-correctly-triggered-react-typescript
describe ('mainpage', () => {
    let SetInput: React.Dispatch<any>
    let SetSearchData:React.Dispatch<any>; 
    const oldCreatePortal = ReactDOM.createPortal;
    beforeAll (()=> {
        ReactDOM.createPortal = (node: ReactNode): React.ReactPortal =>
        node as React.ReactPortal;
    })
    afterAll(() => {
        ReactDOM.createPortal = oldCreatePortal;
      });
      beforeEach(()=> {
        SetInput = jest.fn(x=> {});
        SetSearchData = jest.fn(x=> {});

       React.useState = jest.fn().mockImplementationOnce ( x => [x,SetInput])
                                  .mockImplementationOnce(x => [x, SetSearchData])
    })
    it('create a mainpage snapshot', async() => {
        await act (async () => {
            const tree = await create(<MainPage/>)
            expect (tree).toMatchSnapshot(); 
        })
    }); 

    it ('create a snap shot after', () => {
        const tree =  create(<MainPage/>)
        expect (tree).toMatchSnapshot(); 
    })
    
    
    
})