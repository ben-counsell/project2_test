import FavouriteRecipes from "../components/FavouriteRecipes"
import Carousel from "../components/Carousel"
import { useState } from "react"

function RecipeContainer({carouselRecipes, filteredResults, favouritesToggle}) {

    const displayFilteredResults = () => {
        if (filteredResults.length > 0) {
            return <Carousel recipes={filteredResults} title={`SHOWING ${filteredResults.length} RESULTS`}/>
        } else if (filteredResults.noFilters) {
            return null
        } else {
            return <p>Your search returned no results</p>
        }
    }

    const filterResults = displayFilteredResults(filteredResults)

    // don't think the below code is finished so i commented it out to make sure nothing breaks
    // - ben

    // const [selectedRecipeId, setSelectedRecipeId] = useState("")

    // const handleRecipeSelected = (id) => {
    //     setSelectedRecipeId(id)
    // }
    // const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

    return (
        <>
            <div className="recipe-container">
                {filterResults}
                {carouselRecipes.random ? <Carousel recipes={carouselRecipes.random} title='RECIPE INSPIRATION'/> : null}
                {carouselRecipes.vegan ? <Carousel recipes={carouselRecipes.vegan} title='VEGAN RECIPES'/> : null}
                {carouselRecipes.vegetarian ? <Carousel recipes={carouselRecipes.vegetarian} title='VEGETARIAN RECIPES'/> : null}
                {carouselRecipes.thai ? <Carousel recipes={carouselRecipes.thai} title='THAI RECIPES'/> : null}
            </div>
            {/* <FavouriteRecipes recipes={recipes} OnRecipeSelected={handleRecipeSelected} /> */}
        </>
    )
}

export default RecipeContainer