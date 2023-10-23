const Thai = ({thaiRecipes}) => {
    
 

    const recipeGrid = thaiRecipes.map((recipe) => {
        return <p key={recipe.id}>{recipe.title} <br/> <img src={recipe.image} alt={`Picture for ${recipe.title}`}/></p>
    })
    
    return (
        <>
        
            {recipeGrid}
    

            
        </>
    );
}
 
export default Thai;