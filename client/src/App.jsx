import { useState, useEffect } from 'react'
import { getFilteredRecipes, getVeggie, getVegan, getRecipes, getThai } from './services/RecipeServices'
import RecipeContainer from './containers/RecipeContainer'
import FilterForm from './components/FilterForm'
import Header from './components/Header'
import './App.css'

function App() {
  
  
  const [recipes, setRecipes] = useState([])
  const [thaiRecipes, setThaiRecipes] = useState([])
  const [veggieRecipes, setVeggieRecipes] = useState([])
  const [veganRecipes, setVeganRecipes] = useState([])
  const [filteredResults, setFilteredResults] = useState([])


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
  
  
  const getFilters = (newFilters) => {
    getFilteredRecipes(newFilters)
    .then((recipes) => {
      setFilteredResults(recipes.results)
    })
  }
  
  return (  
    <>
      <Header/>
      <FilterForm getFilters={getFilters}/>
      <RecipeContainer recipes={recipes} thaiRecipes={thaiRecipes} veggieRecipes={veggieRecipes} veganRecipes={veganRecipes} filteredResults={filteredResults}/>
    </>
  )
}

export default App

