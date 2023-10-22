import RecipeCard from "../components/RecipeCard"

function RecipeContainer({recipes}) {

    return (
        <>
            <RecipeCard recipes={recipes}/>
        </>
    )
}

export default RecipeContainer