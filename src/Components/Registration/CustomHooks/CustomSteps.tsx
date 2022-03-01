import React, {useState} from 'react';

 const CustomSteps = () => {
    const [currentSteps, SetcurrentSteps] = useState(1); 

    const _next = () => {
        let currentstep = currentSteps<3 ?currentSteps +1 : currentSteps;
           console.log(currentstep)    
         SetcurrentSteps(currentstep); 
    }
    const _prev =() => {
        let currentstep = currentSteps>1 ? currentSteps -1: currentSteps; 
        console.log(currentstep)
        SetcurrentSteps(currentstep); 
    }

    return{
        currentSteps, 
        _next,
        _prev
    }

}
export default CustomSteps; 