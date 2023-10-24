import { useState, useEffect } from 'react'
import { getFilteredRecipes, getVeggie, getVegan, getRecipes, getThai } from './services/RecipeServices'
import RecipeContainer from './containers/RecipeContainer'
import FilterForm from './components/FilterForm'
import Header from './components/Header'
import './style/App.css'
import SearchResults from './components/SearchResults'

function App() {
  
  const [recipes, setRecipes] = useState([])
  const [thaiRecipes, setThaiRecipes] = useState([])
  const [veggieRecipes, setVeggieRecipes] = useState([])
  const [veganRecipes, setVeganRecipes] = useState([])
  const [filteredResults, setFilteredResults] = useState([])

  const [searchResults, setSearchResults] = useState([])


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
      <div className="container">
        <Header setSearchResults={setSearchResults} />
        <FilterForm getFilters={getFilters}/>
      </div>
      { searchResults.length === 0 
      ?<RecipeContainer recipes={recipes} thaiRecipes={thaiRecipes} veggieRecipes={veggieRecipes} veganRecipes={veganRecipes} filteredResults={filteredResults}/>
      :<SearchResults/>
      }
    </>
  )
}

export default App

