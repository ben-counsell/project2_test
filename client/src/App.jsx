import { useState, useEffect } from 'react'
import { getFilteredRecipes, getRecipes, getThai } from './services/RecipeServices'
import RecipeContainer from './containers/RecipeContainer'
import FilterForm from './components/FilterForm'
import Header from './components/Header'
import './App.css'

function App() {
  const [recipes, setRecipes] = useState([])
  const [thaiRecipes, setThaiRecipes] = useState([])
  const [filteredResults, setFilteredResults] = useState([])

  const [filters, setFilters] = useState({})

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
    getFilteredRecipes(filters)
    .then((recipes) => {
      setFilteredResults(recipes.results)
    })
  }, [filters])

  const addFilters = (filters) => {
    console.log(filters)
    setFilters(filters)
  }

  return (  
    <>
      <Header/>
      <FilterForm setFilters={addFilters}/>
      <RecipeContainer filteredResults={filteredResults} recipes={recipes} thaiRecipes={thaiRecipes}/>
    </>
  )
}

export default App

