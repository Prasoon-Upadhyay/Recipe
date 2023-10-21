import useNavigation from "../hooks/use-navigation";

function Route({ children, path })
{
    const {currentPath} = useNavigation();

    if(path === currentPath)
    {
        return children;
    }
}

export default Route;