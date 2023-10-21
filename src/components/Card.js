import useNavigation from "../hooks/use-navigation";
import useRecipe from "../hooks/use-recipe";
import Button from "./Button"
import Tag from "./Tag";
import {TbChefHat} from "react-icons/tb";

function Card({ recipe, classNames })
{
    
    const {setCurrentRecipe, readableTagGenerator} = useRecipe();
    const {navigate} = useNavigation();

    const tags = ["vegetarian", "glutenFree", "dairyFree", "veryHealthy", "vegan"];
    
    const handleClick = () => {
        setCurrentRecipe(recipe);
        navigate("/recipe/item")
    }

    
    const renderedTags = tags.map((tag) => { 
        if(recipe.recipeSteps[tag] === true)
        {
            return <Tag classNames = "my-4 text-green-400 mr-2" tag = {readableTagGenerator(tag)} />
        }
        
    })
    return(
    <div className = {"bg-white flex flex-col p-6 w-fit shadow-lg shadow-green-600 rounded-lg " + classNames} key={recipe.id}>
        <img className="border border-2 border-green-500" src = {recipe.image} />   
        <div className="m-4 ">
            <h1 className="text-2xl font-bold text-green-500">{recipe.title}</h1>
            <Button onClick = {handleClick} classNames={"rounded-lg my-2 flex flex-row"}> Cook <TbChefHat className="text-xl" />  </Button>
        
            <div className="flex flex-row flex-wrap">     

                {renderedTags}
            </div>
        
        </div>
        
    </div>)
}

export default Card;