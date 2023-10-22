import { useState, useEffect } from 'react'
import { getRecipes } from './services/RecipeServices'
import RecipeContainer from './containers/RecipeContainer'

function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes()
    .then((recipes) => {
      setRecipes(recipes.results)
    })
  }, [])
  
  return (  
    <>
      <h1>...</h1>
      <RecipeContainer recipes={recipes}/>
    </>
  )
}

export default App