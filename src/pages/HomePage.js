
import Input from "../components/Input";
import { LiaSearchSolid } from "react-icons/lia";
import Button from "../components/Button";
import useRecipe from "../hooks/use-recipe";
import { useState } from "react";

function HomePage()
{
    
    const [searchWord, setSearchWord] = useState("");
    const {searchByKeyword} = useRecipe();

    const handleChange = (event) => {
        event.preventDefault();
        setSearchWord(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        searchByKeyword(searchWord);
    }

    
    return(
        <div className="container flex flex-col items-center text-center m-auto w-fit shadow-lg shadow-emerald-500 my-10 p-8 rounded-md bg-white ">
                
            <div>
                <h1 className = " text-4xl text-green-600" >Recipe</h1>
                <p className= "text-green-600 mx-4 my-8 text-md">Enter a dish!
                </p>
            </div>

            <div className="flex flex-row justify-center">
                <form onSubmit={handleSubmit} >
                    <Input onChange = {handleChange} value = {searchWord} >Search...</Input> 
                    <Button classNames = "rounded-2xl"> <LiaSearchSolid /> </Button>

                </form>           
            </div>

            <div className="text-center">
                <h1 className="text-2xl text-green-600 border border-x-0 border-y-2 border-green-500 w-fit p-2 rounded-full mt-4">OR</h1>
            </div>

        </div>
    )
}

export default HomePage;