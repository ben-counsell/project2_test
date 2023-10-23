import { useState, useEffect } from 'react'
import { getRecipes } from './services/RecipeServices'
import RecipeContainer from './containers/RecipeContainer'
import Header from './components/Header'
import './App.css'

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
      < Header/>
      <RecipeContainer recipes={recipes}/>
    </>
  )
}

export default App