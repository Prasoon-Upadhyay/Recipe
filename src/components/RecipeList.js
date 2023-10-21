import useRecipe from "../hooks/use-recipe";
import Card from "./Card";

function RecipeList()
{
    const {recipes} = useRecipe();

    const renderedRecipes = recipes.map( (recipe) => {
        
        return(
        <Card classNames={"m-4 "} recipe = {recipe} />)
    })

    return(
        <div className = "flex  flex-wrap">
            {renderedRecipes}
        </div>
    )
}

export default RecipeList;