import apiKey from "../services/apiKey";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import {BsHeartFill,BsHeartbreak} from 'react-icons/bs'

const Recipe = () => {

    let params = useParams()
    const [recipeDetails, setRecipeDetails] = useState()
    

    const fetchRecipe = async  () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information`, {
            headers:apiKey})
            const recipeData = await data.json()
            setRecipeDetails(recipeData)
    }


    useEffect(() => {
        fetchRecipe()
    
      }, [params.name])

      if (!recipeDetails) {
        return (
          <div>
            <p>Loading recipe data...</p>
          </div>
        );
      }


    return ( 
        <div>
      <h1>{recipeDetails.title}</h1>
      <button>Summary</button>
      <button>Ingredients/Method</button>
      <h3 dangerouslySetInnerHTML={{__html:recipeDetails.summary}}></h3>
      <BsHeartFill/><br />
      <img src={recipeDetails.image} alt={`Picture for ${recipeDetails.title}`} />
    </div>
     );
}
 
export default Recipe;