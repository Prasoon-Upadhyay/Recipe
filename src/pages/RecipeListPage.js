import RecipeList from "../components/RecipeList";
import { BiSolidChevronLeftCircle } from "react-icons/bi";
import Button from "../components/Button";
import useRecipe from "../hooks/use-recipe";


function RecipeListPage(){

    const {recipes} = useRecipe();    
    return(
    <div>
        <div className="m-4 flex flex-col items-center">
            <div>

                <Button classNames={" bg-green-700 rounded-full px-6 flex flex-row hover:bg-green-400 hover:text-green-700 hover:border hover:border-green-700"}> <BiSolidChevronLeftCircle className="mt-1 mr-2" /> Back to Home  </Button>
            
            </div>
        </div>
        <div className="text-center ">
            <h1 className="my-4 text-3xl border border-x-0   border-2 text-green-700 border-green-700" > S E A R C H &nbsp;&nbsp;  R E S U L T S ({recipes.length}) </h1>  
        </div>
        <div className="">
            <RecipeList />            
        </div>
    </div>)
}

export default RecipeListPage;
