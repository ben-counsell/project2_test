import Thai from "./Thai"
import Veggie from "./Veggie"
import Vegan from "./Vegan"
import RecipeCard from "./RecipeCard"
import FilteredResults from "./FilteredResults"


const Home = ({recipes, thaiRecipes, veggieRecipes, veganRecipes, filteredResults}) => {
    return ( 
        <>
        {filteredResults.length > 0 ? <FilteredResults recipes={filteredResults}/> : null}
        <RecipeCard recipes={recipes}/>
        <Vegan veganRecipes={veganRecipes}/>
        <Veggie veggieRecipes={veggieRecipes}/>
        <Thai thaiRecipes={thaiRecipes}/>
        </>
     );
}
 
export default Home;