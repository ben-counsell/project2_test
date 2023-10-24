import { useState, useEffect } from 'react'
import { getFilteredRecipes, getRecipesForCarousel } from './services/RecipeServices'
import RecipeContainer from './containers/RecipeContainer'
import FilterForm from './components/FilterForm'
import Header from './components/Header'
import './style/App.css'
import SearchResults from './components/SearchResults'

function App() {
  
  const customer = {
    name: "Lennie Harman",
    dietary_preference: "vegetarian",
    intolerances: "gluten",
    favourites: []
  }
  // ^^ temporary, until we add ability to fetch customer data from the db

  const [carouselRecipes, setCarouselRecipes] = useState({})
  const [filteredResults, setFilteredResults] = useState({noFilters:'have yet been set'})
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    let carouselRequests = ['', 'Vegetarian', 'Vegan', 'Thai']

    const newCarouselRecipes = carouselRequests.map((request) => {
      return getRecipesForCarousel(request, customer.dietary_preference, customer.intolerances)
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
        <Header setSearchResults={setSearchResults} />
        <FilterForm getFilters={getFilters}/>
      </div>

      { searchResults.length === 0 
      ?<RecipeContainer favouritesToggle={handleFavouriteRecipeToggle} carouselRecipes={carouselRecipes} filteredResults={filteredResults}/>
      :<SearchResults recipes={searchResults} />
      }
    </>
  )
}

export default App

