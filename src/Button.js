import React from "react";

class Button extends React.Component{
    constructor(props){
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
    }
    buttonClick () {
        alert('test');
        throw new Error('Error boundary test')
    }
    render() {
        return(
            <input type="button" value="Click" onClick={this.buttonClick}/>
        )
    }
}

export default Button;