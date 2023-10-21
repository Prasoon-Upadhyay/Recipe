

function Tag( { tag, classNames } )
{
    return(<div className = {"border border-2 border-green-400 w-fit py-2 px-2 shadow-lg shadow-grey-400 rounded-full " + classNames}>
        <p>{tag}</p>
    </div>)
}

export default Tag;