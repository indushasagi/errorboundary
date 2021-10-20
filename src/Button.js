import React from "react";

class Button extends React.Component{
    constructor(props){
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
        this.state={
            counter: 0
        }
    }
    buttonClick () {
        if(counter === 3){
            throw new Error('Error boundary test')
        }
       this.setState({counter: counter+1});
    }
    render() {
        return(
            <>
            <p>{this.state.counter}</p>
            <input type="button" value="Click" onClick={this.buttonClick}/>
            </>
        )
    }
}

export default Button;