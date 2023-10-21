

function Button({ children, classNames, ...rest})
{
    return <button {...rest} className = {"py-2 px-2 bg-green-500 text-white hover:bg-white hover:border hover:border-green-400 hover:text-green-400 duration-200 " + classNames} > {children} </button>
}

export default Button;