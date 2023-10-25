import Home from "../components/Home"
import Recipe from "../components/Recipe"
import Favourites from "../components/Favourites"
import {Route, Routes, BrowserRouter} from "react-router-dom"

function RecipeContainer({carouselRecipes, filteredResults, customerFavourites, newFavourite}) {

    return (
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home carouselRecipes={carouselRecipes} filteredResults={filteredResults}/>}/>
                <Route path="/recipe/:id" element={<Recipe customerFavourites={customerFavourites} newFavourite={newFavourite}/>}/>
                <Route path="/favourites" element={<Favourites/>}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default RecipeContainer