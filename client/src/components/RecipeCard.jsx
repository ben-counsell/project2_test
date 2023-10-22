const RecipeCard = ({recipes}) => {
    
    console.log(recipes)

    const recipeGrid = recipes.map((recipe) => {
        return <RecipeCard name={recipe.title} image={recipe.image} key={recipe.id}/>
    })
    
    return (
        <>
            {recipeGrid}
        </>
    );
}
 
export default RecipeCard;