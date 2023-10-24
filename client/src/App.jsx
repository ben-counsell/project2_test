import { useState, useEffect } from 'react'
import { getFilteredRecipes, getVeggie, getVegan, getRecipes, getThai } from './services/RecipeServices'
import RecipeContainer from './containers/RecipeContainer'
import FilterForm from './components/FilterForm'
import Header from './components/Header'
import './style/App.css'

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
  
  const handleFavouriteRecipeToggle = (id) => {
    console.log(id)
    // const freshRecipes = recipes.map((recipe) => {
    //     return recipe.id === id ? {...recipe, isFavourite: !recipe.isFavourite} : recipe
    // })
    // setRecipes(freshRecipes)
  }
  
  return (  
    <>
      <div className="container">
        <Header/>
        <FilterForm getFilters={getFilters}/>
      </div>
      <RecipeContainer favouritesToggle={handleFavouriteRecipeToggle} recipes={recipes} thaiRecipes={thaiRecipes} veggieRecipes={veggieRecipes} veganRecipes={veganRecipes} filteredResults={filteredResults}/>
    </>
  )
}

export default App

