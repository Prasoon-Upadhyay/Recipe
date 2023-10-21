import { useState } from "react";
import {GoChevronDown, GoChevronUp} from "react-icons/go"
import { TbToolsKitchen } from "react-icons/tb";
import useRecipe from "../hooks/use-recipe";
import Ingredient from "./Ingredient";

function Accordion( {chidlren} )
{
    const {currentRecipe} = useRecipe();

    const [isExpanded, setIsExpanded] = useState(false);
    {
        const handleClickOpen = () => {
            setIsExpanded(!isExpanded); 
        }
        
        const renderedCuisines = currentRecipe.recipeSteps.cuisines.map( (cuisine) => {
            
            return(<span className="m-2 bg-rose-500 text-white p-2 rounded-full">{cuisine}</span>)
        })

        const healthColorGenerator = (healthPts) => {
            
            return `rgb(${255 - healthPts *4},${0 + healthPts * 4} ,0)`
        }

        const renderedIngredients = currentRecipe.recipeSteps.extendedIngredients.map( (ingredient) => {
            return <Ingredient ingredient={ingredient} />
        }) 
        healthColorGenerator(89)
        

        const content = (isExpanded ? <div>
            <div className=" my-4 text-rose-400 shadow-inner shadow-neutral-300 " >
                    <div className=" justify-between flex flex-row p-8 ">
                        <div className="flex flex-col items-center m-2 ">
                            <h1 className="text-4xl font-extrabold flex-row flex"> <TbToolsKitchen className="m-2"/> Ingredients</h1>
                            <div className="flex flex-wrap ">
                                {renderedIngredients}
                            </div>
                        </div> 
                    </div>
                </div>
                <hr className=" " />
                <div className="flex flex-row p-8 m-2" >
                    <div className="m-5">
                        <p className="text-2xl text-rose-500 ">Ready in : <span className=" font-extrabold">{currentRecipe.recipeSteps.readyInMinutes}</span> minutes</p>
                   </div>
                    <div className="m-5">
                        <p className="text-2xl text-rose-500 "> Cost: $ <span className=" font-extrabold" >{currentRecipe.recipeSteps.pricePerServing/100}</span> / serving</p>
                    </div>
                    <div className="m-5">
                        <p className = {`text-2xl text-rose-500 `} >Health Meter   <span style= { {color: `${healthColorGenerator(currentRecipe.recipeSteps.healthScore)}`, backgroundColor:`${healthColorGenerator(currentRecipe.recipeSteps.healthScore)}`}} className={` w-20 rounded-lg text-lg`}> {".".repeat(currentRecipe.recipeSteps.healthScore + 2)}</span></p>
                    </div>
                    <div className="m-5">
                        <p>{renderedCuisines}</p>
                    </div>
                    
                </div>
        </div> : null)

        const classForIcon =  "border border-black rounded-full hover:text-white hover:bg-gray-700 duration-200";

        const icon = <span> { isExpanded ? <GoChevronUp className ={classForIcon}  onClick={handleClickOpen} /> : <GoChevronDown className= {classForIcon} onClick={handleClickOpen} /> } </span> 
        const text = isExpanded ? <p className="text-xs font-extrabold ">Less Info</p> : <p className="text-xs font-extrabold"> More Info</p>
        return(
            <div className="flex flex-col " >
                <div className=" flex flex-col items-center ">
                    {icon}
                    {text}
                </div>
                {content}



            </div>) 
    }
}
export default Accordion;