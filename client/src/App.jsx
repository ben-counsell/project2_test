import { useState, useEffect } from 'react'
import { getRecipes, getThai } from './services/RecipeServices'
import RecipeContainer from './containers/RecipeContainer'
import Header from './components/Header'
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

  const handleFavouriteRecipeToggle = (id) => {
    const freshRecipes = recipes.map((recipe) => {
        return recipe.id === id ? {...recipe, isFavourite: !recipe.isFavourite} : recipe
    })
    setRecipes(freshRecipes)
}
  
  return (  
    <>
      <Header/>
      <RecipeContainer recipes={recipes} thaiRecipes={thaiRecipes} favouritesToggle={handleFavouriteRecipeToggle} />
    </>
  )
}

export default App

