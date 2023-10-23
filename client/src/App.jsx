import { useState, useEffect } from 'react'
import { getRecipes, getThai } from './services/RecipeServices'
import RecipeContainer from './containers/RecipeContainer'
import './App.css'


function App() {
  const [recipes, setRecipes] = useState([])
  const [thaiRecipes, setThaiRecipes] = useState([])

  useEffect(() => {
    getRecipes()
    .then((recipes) => {
      setRecipes(recipes.results)
    })
  }, [])

  useEffect(() => {
    getThai()
    .then((recipes) => {
      setThaiRecipes(recipes.results)
    })
  }, [])
  
  return (
    <>
      <h1>...</h1>
      <RecipeContainer recipes={recipes} thaiRecipes={thaiRecipes}/>
    </>
  )
}

export default App

