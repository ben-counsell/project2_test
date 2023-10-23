import FavouriteRecipes from "../components/FavouriteRecipes"
import RecipeCard from "../components/RecipeCard"
import Thai from "../components/Thai"
import { useState } from "react"

function RecipeContainer({recipes,thaiRecipes,favouritesToggle}) {

    const [selectedRecipeId, setSelectedRecipeId] = useState("")

    
    
    const handleRecipeSelected = (id) => {
        setSelectedRecipeId(id)

    }
    const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

    return (
        <>
    
            <RecipeCard recipes={recipes}/>
            <Thai thaiRecipes={thaiRecipes}/>
            <FavouriteRecipes recipes={recipes} OnRecipeSelected={handleRecipeSelected} />
        </>
    )
}

export default RecipeContainer