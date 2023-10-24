
const SearchResults = ({recipes}) => {

    const recipeDisplay = recipes.filter((recipe => recipe.title)

    )

    return (
        <>
        <h3> Results </h3>
            {recipeDisplay.map(recipe => {
                return (
                    <div className="search-results" key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <img src={recipe.image} alt={`Picture for ${recipe.title}`}/>
                    </div>
                )})}
        </>
    )

}


export default SearchResults