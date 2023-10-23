import RecipeCard from "../components/RecipeCard"
import Thai from "../components/Thai"

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
        </>
    )
}

export default RecipeContainer