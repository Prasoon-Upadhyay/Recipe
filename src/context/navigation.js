import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({children})
{
    
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect( () => {
        const handler = () => {
               setCurrentPath(window.location.pathname)
        }

        const refreshHandler = () => {
            
            setCurrentPath("/home");
        }

        window.addEventListener("popstate", handler);
        window.addEventListener("beforeunload",  refreshHandler);

        navigate("/home");
        return () => {
            window.removeEventListener("popstate", handler);
            window.removeEventListener("beforeunload", refreshHandler);
        }

    }, [])

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }


    return( <NavigationContext.Provider value={ { currentPath, navigate } }>
            {children}
            </NavigationContext.Provider>
            )  
}

export {NavigationProvider};
export default NavigationContext ; 