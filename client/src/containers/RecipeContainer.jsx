import RecipeCard from "../components/RecipeCard"
import FilteredResults from "../components/FilteredResults"
import Thai from "../components/Thai"
import Veggie from "../components/Veggie"
import Vegan from "../components/Vegan"


function RecipeContainer({recipes, thaiRecipes, veggieRecipes, veganRecipes, filteredResults, favouritesToggle}) {

    // don't think the below code is finished so i commented it out to make sure nothing breaks
    // - ben

    // const [selectedRecipeId, setSelectedRecipeId] = useState("")

    // const handleRecipeSelected = (id) => {
    //     setSelectedRecipeId(id)
    // }
    // const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

    return (
        <div className="recipe-container">
            {filteredResults.length > 0 ? <FilteredResults recipes={filteredResults}/> : null}
            <RecipeCard recipes={recipes}/>
            <Vegan veganRecipes={veganRecipes}/>
            <Veggie veggieRecipes={veggieRecipes}/>
            <Thai thaiRecipes={thaiRecipes}/>
        </div>
    )
}

export default RecipeContainer