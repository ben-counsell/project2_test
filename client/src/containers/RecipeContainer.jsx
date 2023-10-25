import Home from "../components/Home"
import Recipe from "../components/Recipe"
import Favourites from "../components/Favourites"
import {Route, Routes, BrowserRouter} from "react-router-dom"
import FavouriteRecipes from "../components/FavouriteRecipes"
import { useState } from "react"

function RecipeContainer({carouselRecipes, filteredResults, favouritesToggle}) {

    // don't think the below code is finished so i commented it out to make sure nothing breaks
    // - ben

    // const [selectedRecipeId, setSelectedRecipeId] = useState("")

    // const handleRecipeSelected = (id) => {
    //     setSelectedRecipeId(id)
    // }
    // const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home carouselRecipes={carouselRecipes} filteredResults={filteredResults}/>}/>
            <Route path="/recipe/:id" element={<Recipe/>}/>
            <Route path="/favourites" element={<Favourites/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default RecipeContainer