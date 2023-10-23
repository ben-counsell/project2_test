import { useState, useEffect } from 'react'
import { getRecipes, getThai, getVeggie, getVegan } from './services/RecipeServices'
import RecipeContainer from './containers/RecipeContainer'
import Header from './components/Header'
import './App.css'

function App() {
  
  const [recipes, setRecipes] = useState([])
  const [thaiRecipes, setThaiRecipes] = useState([])
  const [veggieRecipes, setVeggieRecipes] = useState([])
  const [veganRecipes, setVeganRecipes] = useState([])



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
  
  useEffect(() => {
    getVeggie()
    .then((recipes) => {
      setVeggieRecipes(recipes.results)
    })
  }, [])
  
  useEffect(() => {
    getVegan()
    .then((recipes) => {
      setVeganRecipes(recipes.results)
    })
  }, [])
  
  return (  
    <>
      <Header/>
      <RecipeContainer recipes={recipes} thaiRecipes={thaiRecipes} veggieRecipes={veggieRecipes} veganRecipes={veganRecipes}/>
    </>
  )
}

export default App

