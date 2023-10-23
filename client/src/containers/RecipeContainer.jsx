import RecipeCard from "../components/RecipeCard"
import Thai from "../components/Thai"

function RecipeContainer({recipes,thaiRecipes}) {

    return (
        <>
    
            <RecipeCard recipes={recipes}/>
            <Thai thaiRecipes={thaiRecipes}/>
        </>
    )
}

export default RecipeContainer