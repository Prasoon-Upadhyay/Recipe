
function Ingredient( {ingredient, classNames} )
{
    
    const ingredientGenerator = (ing) => {
        
        return ing?.charAt(0).toUpperCase() + ing?.substring(1, ing.length);
    }
    const amount = <span className="font-bold text-xl">{ingredient.measures.metric.amount + " " + ingredient.measures.metric.unitShort}</span>;
    return <p className="m-2 font-thin"> {amount}{ " " + ingredientGenerator(ingredient.nameClean)}</p>
}

export default Ingredient;