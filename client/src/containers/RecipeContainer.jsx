import RecipeCard from "../components/RecipeCard"
import FilteredResults from "../components/FilteredResults"
import Thai from "../components/Thai"

function RecipeContainer({recipes,thaiRecipes, filteredResults}) {

    return (
        <>
            {filteredResults.length > 0 ? <FilteredResults recipes={filteredResults}/> : null}
            <RecipeCard recipes={recipes}/>
            <Thai thaiRecipes={thaiRecipes}/>
        </>
    )
}

export default RecipeContainer