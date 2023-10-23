const RecipeCard = ({recipes}) => {

    const recipeGrid = recipes.map((recipe) => {
        return <li key={recipe.id}>{recipe.title}<br/><img src={recipe.image}/></li>
    })
    
    return (
        <>
            <ul>
                {recipeGrid}
            </ul>
        </>
    );
}
export default RecipeCard;