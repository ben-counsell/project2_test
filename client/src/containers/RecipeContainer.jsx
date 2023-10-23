import RecipeCard from "../components/RecipeCard"
import Thai from "../components/Thai"
import Veggie from "../components/Veggie"
import Vegan from "../components/Vegan"

function RecipeContainer({recipes,thaiRecipes, veggieRecipes, veganRecipes}) {

    return (
        <>
            <RecipeCard recipes={recipes}/>
            <Vegan veganRecipes={veganRecipes}/>
            <Veggie veggieRecipes={veggieRecipes}/>
            <Thai thaiRecipes={thaiRecipes}/>
        </>
    )
}

export default RecipeContainer