import FavouriteRecipes from "../components/FavouriteRecipes"
import Carousel from "../components/Carousel"
import { useState } from "react"

function RecipeContainer({recipes, thaiRecipes, veggieRecipes, veganRecipes, filteredResults, favouritesToggle}) {

    const displayFilteredResults = () => {
        if (filteredResults.length > 0) {
            return <Carousel recipes={filteredResults} title={`${filteredResults.length} results`}/>
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
                <Carousel recipes={recipes} title='Random recipes'/>
                <Carousel recipes={veganRecipes} title='Vegan options'/>
                <Carousel recipes={veggieRecipes} title='Veggie choices'/>
                <Carousel recipes={thaiRecipes} title='Thai options'/>
            </div>
            {/* <FavouriteRecipes recipes={recipes} OnRecipeSelected={handleRecipeSelected} /> */}
        </>
    )
}

export default RecipeContainer