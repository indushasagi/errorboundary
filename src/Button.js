const Button = () => {
    const buttonClick = () => {
        alert('test');
        throw new Error('Error boundary test')
    }
    return(
        <input type="button" value="Click" onClick={buttonClick}/>
    )
}

export default Button;