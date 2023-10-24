import { useState, useEffect } from 'react'
import { getFilteredRecipes, getRecipesForCarousel } from './services/RecipeServices'
import RecipeContainer from './containers/RecipeContainer'
import FilterForm from './components/FilterForm'
import Header from './components/Header'
import './style/App.css'

function App() {
  
  const [carouselRecipes, setCarouselRecipes] = useState({})
  const [filteredResults, setFilteredResults] = useState({noFilters:'have yet been set'})

  useEffect(() => {
    let carouselRequests = ['', 'Vegetarian', 'Vegan', 'Thai']

    const newCarouselRecipes = carouselRequests.map((request) => {
      return getRecipesForCarousel(request)
    })
    Promise.all(newCarouselRecipes)
      .then(recipeArray => {
        const carouselRecipesObject = {
          random : recipeArray[0].results,
          vegetarian : recipeArray[1].results,
          vegan : recipeArray[2].results,
          thai : recipeArray[3].results
        }
        setCarouselRecipes(carouselRecipesObject)
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
      <RecipeContainer favouritesToggle={handleFavouriteRecipeToggle} carouselRecipes={carouselRecipes} filteredResults={filteredResults}/>
    </>
  )
}

export default App

