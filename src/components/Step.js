
import { useState } from "react";
import { TiChevronRight } from "react-icons/ti"; 

function Step( { step } )
{
    const [finishedStep, setFinishedStep] = useState("");

    const handleClick = () => {
        setFinishedStep("line-through")
    }

    return(<div className="flex flex-row text-green-700 text-xs">
        <TiChevronRight className="text-xl mt-3 " /> <p onClick={handleClick} className = {"my-2 cursor-pointer " + finishedStep}>{step.step}</p>
    </div>) 
}

export default Step;