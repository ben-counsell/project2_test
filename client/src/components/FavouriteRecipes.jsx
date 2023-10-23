const FavouriteRecipes = ({recipes, OnRecipeSelected}) => {



    const favouriteRecipes = recipes.filter(recipe => recipe.isFavourite)

    return (
        <>
        <h2><u>Favourite Recipes</u></h2>
            {favouriteRecipes.map(recipe => {
                return (
                    <span className="favouriteblocks" key={recipe.id}>
                        <h3 OnClick={() => OnRecipeSelected(id)}>{recipe.title}</h3>
                        <img src={recipe.image} alt={`Picture for ${recipe.title}`}/>
                    </span>
                )})}
            
        
        
        
        </>
    )






}

export default FavouriteRecipes