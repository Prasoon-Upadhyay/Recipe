import { createContext, useState } from "react";
import axios from "axios";
import useNavigation from "../hooks/use-navigation";

const RecipeContext = createContext();

function RecipeProvider( { children })
{
    const [recipes, setRecipes] = useState([]);
    const [currentRecipe, setCurrentRecipe] = useState([]);
    const {currentPath, navigate} = useNavigation();    
    
    console.log(recipes);

    const searchByKeyword = async (keyword) => {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${keyword}&apiKey=f51575c5eb87465bb377e84f33cdd98f`)
        
        for(let recipe of response.data.results)
        {
            const recipeData = await getRecipeInstructions(recipe.id);

            const finalRecipes = await response.data.results.map( (rec) => {
                if(recipe.id === rec.id)
                {
                    rec.recipeSteps = recipeData.data;
                }
                return rec;
            })
            

            setRecipes([...finalRecipes])

        }
        navigate("/recipe/list")
    }   

    const getRecipeInstructions = async (id) => {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=f51575c5eb87465bb377e84f33cdd98f`)
        return response;
    }
    const readableTagGenerator = (tag) => {
        let tag1;
        let tag2;

        for(let i of tag)
        {
            if(i === i.toUpperCase())
            {
                 tag1 = tag.substring(0,tag.indexOf(i))
                 tag2 = tag.substring(tag.indexOf(i),tag.length);
            }
        }

        if(tag1?.charAt(0) !== tag1?.charAt(0).toUpperCase())
        {
              tag1 = tag1.charAt(0).toUpperCase() + tag1.substring(1,tag1.length);
        }

        else if(tag2?.charAt(0) !== tag2?.charAt(0).toUpperCase())
        {
              tag2 = tag2.charAt(0).toUpperCase() + tag2.substring(1,tag2.length);
        }

        if(tag1 === undefined)
        {
            return tag.charAt(0).toUpperCase() + tag.substring(1,tag.length);
        }

        else return tag1 + ' ' + tag2;    
    }


    return(
        <RecipeContext.Provider value ={{recipes, searchByKeyword, currentRecipe, setCurrentRecipe, getRecipeInstructions ,readableTagGenerator}}>
            {children}
        </RecipeContext.Provider>
    )
}

export {RecipeProvider}
export default RecipeContext;