import RecipeCard from "../components/RecipeCard"
import FilteredResults from "../components/FilteredResults"
import Thai from "../components/Thai"
import Veggie from "../components/Veggie"
import Vegan from "../components/Vegan"

function RecipeContainer({recipes, thaiRecipes, veggieRecipes, veganRecipes, filteredResults}) {

    return (
        <>
            {filteredResults.length > 0 ? <FilteredResults recipes={filteredResults}/> : null}
            <RecipeCard recipes={recipes}/>
            <Vegan veganRecipes={veganRecipes}/>
            <Veggie veggieRecipes={veggieRecipes}/>
            <Thai thaiRecipes={thaiRecipes}/>
        </>
    )
}

export default RecipeContainer