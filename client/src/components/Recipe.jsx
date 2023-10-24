import apiKey from "../services/apiKey";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import "./Recipe.css"
import { BsHeartFill, BsHeartbreak } from 'react-icons/bs'

const Recipe = () => {

    let params = useParams()
    const [recipeDetails, setRecipeDetails] = useState()
    const [activeButton, setActiveButton] = useState("Summary")
    const [isFavourite, setIsFavourite] = useState(false)


    const fetchRecipe = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information`, {
            headers: apiKey
        })
        const recipeData = await data.json()
        setRecipeDetails(recipeData)
    }


    useEffect(() => {
        fetchRecipe()

    }, [params.name])

    if (!recipeDetails) {
        return (
            <div>
                <p>Awaiting recipe details</p>
            </div>
        );
    }

    const favouriteIcon = isFavourite ? <BsHeartbreak  size="70" className="heart" />
                                      : <BsHeartFill  size="70" className="heart" />


    return (
        <>


            <div className="detail">
                <div className="left-column"><h2>{recipeDetails.title}</h2>
                    {favouriteIcon}
                    
                    <br /><img className="recipe-image" src={recipeDetails.image} alt={`Picture for ${recipeDetails.title}`} />
                    
                </div>

                <div className="right-column">
                    
                    <button onClick={() => setActiveButton('Summary')} className={activeButton === 'Summary' ? 'recipe-button' : 'active'}>Summary</button>
                    <button onClick={() => setActiveButton('Ingredients/Method')} className={activeButton === 'Ingredients/Method' ? 'recipe-button' : 'active'}>Ingredients/Method</button>
                    {activeButton === 'Summary' && (
                        <h3 dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></h3>
                    )}
                    {activeButton === 'Ingredients/Method' && (
                        <>
                        <h3 dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}></h3>
                        <ul>{recipeDetails.extendedIngredients.map((ingredient) => {
                            return <li key={ingredient.id}>{ingredient.original}</li>
                        })}</ul>
                        </>
                    )}
                    
                    
                    
                    
                </div>
            </div>
        </>
    );
}

export default Recipe;