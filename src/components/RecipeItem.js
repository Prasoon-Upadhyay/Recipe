import useRecipe from "../hooks/use-recipe";
import { GiCookingPot } from "react-icons/gi";
import Button from "./Button";
import Tag from "./Tag";
import { BiSolidChevronLeftCircle } from "react-icons/bi";  
import Step from "./Step";
import Accordion from "./Accordion";

function RecipeItem()
{
    const {currentRecipe, readableTagGenerator} = useRecipe();
    const tags = ["vegetarian", "glutenFree", "dairyFree", "veryHealthy", "vegan"];
    
    const renderedSteps = currentRecipe?.recipeSteps?.analyzedInstructions[0]?.steps.map( (step) => {
        return <Step step={step}/>
    } )

    const renderedTags = tags.map((tag) => { 
        if(currentRecipe.recipeSteps[tag] === true)
        {
            return <Tag classNames = "my-4 text-green-400 mr-2" tag = {readableTagGenerator(tag)} />
        }
        
    })

    const imageUrl = "'" + currentRecipe.image + "'";
    ;
    return(
        <div className="flex flex-col items-center">
            <Button classNames={" m-4 bg-green-700 rounded-full px-6 flex flex-row hover:bg-green-400 hover:text-green-700 hover:border hover:border-green-700 "}> <BiSolidChevronLeftCircle className="mt-1 mr-2" /> Back to Home  </Button>
            
            <div className="flex flex-row mt-4 justify-center p-8 ">
                <div >
                    <div className= " flex flex-col bg-white  p-8 items-center shadow-lg relative shadow-green-500  w-96 h-96  bg-cover bg-center " style={{backgroundImage: `linear-gradient(to bottom,rgba(220,220,220,0.1), rgba(192,192,192, 0.42), rgba(128,128,128, 0.79), rgba(47,79,79,0.9)),url(${imageUrl})`}}>             
                        <div className="flex flex-wrap flex-col absolute bottom-12 p-4 justify-center">
                            <h1 className="text-4xl text-zinc-200 font-extrabold ">{currentRecipe.title}</h1>
                            <div className="flex flex-row flex-wrap">
                                {renderedTags}
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="bg-white p-4 shadow-lg shadow-green-500 shadow-lg shadow-zinc-400 shadow-inner flex flex-col ">
                        <h1 className="text-4xl flex flex-row justify-center mb-4 text-rose-500"> <GiCookingPot className="mt-1 mr-2 "/> Recipe</h1>
                        {renderedSteps}
                    
                    </div> 
                    <div className="">
                        <div className="bg-white ">
                            <div className=" "> 
                                <Accordion />
                            </div>
                            
                        </div>
                    </div>  

                </div>
        </div>

        </div>
    )
}

export default RecipeItem;