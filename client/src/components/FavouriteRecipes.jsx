const FavouriteRecipes = ({recipes}) => {



    const favouriteRecipes = recipes.filter(recipe => recipe.isFavourite)

    return (
        <>
        <h2><u>Favourite Recipes</u></h2>
        <ul>
            {favouriteRecipes.map(recipe => {
                return (
                    <li key={recipe.id}>
                        <button>{recipe.title}</button>
                    </li>
                )})}
            
        </ul>
        
        
        </>
    )






}