import React, { useCallback, useState } from "react";

const Button = () =>{
 const [counter, setCounter] = useState(0);
    const buttonClick = useCallback(() => {
        // if(this.state.counter === 3){
        //     throw new Error('Error boundary test')
        // }
       setCounter(counter+1);
    },[counter])
 
        if(counter === 3){
            console.log('counter');
            throw new Error('Error boundary test')
        }
        return(
            <>
            <p>{counter}</p>
            <input type="button" value="Click" onClick={buttonClick}/>
            </>
        )
    
}

export default Button;