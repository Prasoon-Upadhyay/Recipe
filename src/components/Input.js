
function Input({ children, classNames, ...rest  })
{
    return <input {...rest} className = {" border border-0 border-b-2 text-green-400 border-green-400 px-1 py-2 placeholder:text-green-500 focus:text-md focus:border-green-600 duration-200 outline-none " + classNames}  placeholder = {children} / >
}

export default Input;