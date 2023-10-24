import Home from "../components/Home"
import Recipe from "../components/Recipe"
import Favourites from "../components/Favourites"
import {Route, Routes, BrowserRouter} from "react-router-dom"

function RecipeContainer({recipes, thaiRecipes, veggieRecipes, veganRecipes, filteredResults}) {

    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home recipes={recipes} thaiRecipes={thaiRecipes} veggieRecipes={veggieRecipes} veganRecipes={veganRecipes} filteredResults={filteredResults}/>}/>
            <Route path="/recipe" element={<Recipe/>}/>
            <Route path="/favourites" element={<Favourites/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default RecipeContainer