function Button({children, clickFunction = () => {} , classes, name}){

    return(
    <>
    <button className={classes} onClick={()=> {clickFunction(name || "user")}}>{children}</button>    
    </>
    )
}

export default Button