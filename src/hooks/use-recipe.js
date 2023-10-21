import { useContext } from "react";
import RecipeContext from "../context/recipes";

function useRecipe()
{
    return useContext(RecipeContext);
}

export default useRecipe;