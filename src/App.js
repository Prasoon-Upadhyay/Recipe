import RecipeListPage from "./pages/RecipeListPage";
import Route from "./components/Route"
import HomePage from "./pages/HomePage";
import RecipeItem from "./components/RecipeItem"

function App()
{
    
    return(
        <div>
            <Route path = "/home">
                <HomePage />
            </Route>

            <Route path = "/recipe/list">
                <RecipeListPage />
            </Route>

            <Route path = "/recipe/item" >
                <RecipeItem />
            </Route>

        </div>
    )
}

export default App;