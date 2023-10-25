import { useState, useEffect } from 'react'
import { getFilteredRecipes, getRecipesForCarousel } from './services/RecipeServices'
import RecipeContainer from './containers/RecipeContainer'
import FilterForm from './components/FilterForm'
import Header from './components/Header'
import './style/App.css'
import './style/RecipeLists.css'
import SearchResults from './components/SearchResults'
import { getUser, saveFavourite, deleteFavourite } from './services/UserServices'

function App() {
  
  const loggedInUser = '6538f63a7dec7c6a518882b9'

  const [carouselRecipes, setCarouselRecipes] = useState({})
  const [filteredResults, setFilteredResults] = useState({noFilters:'have yet been set'})
  const [searchResults, setSearchResults] = useState([])
  const [user, setUser] = useState({favourites:''})

  useEffect(() => {
    let carouselRequests = ['', 'Vegetarian', 'Vegan', 'Thai']

    const newCarouselRecipes = carouselRequests.map((request) => {
      return getRecipesForCarousel(request, user.dietary_preference, user.intolerances)
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
  
  useEffect(() => {
    getUser(loggedInUser)
    .then((user) => setUser(user))
  }, [])

  const getFilters = (newFilters) => {
    getFilteredRecipes(newFilters, user.dietary_preference, user.intolerances)
    .then((recipes) => {
      setFilteredResults(recipes.results)
    })
  }
  
  const newFavourite = (userId, recipeId) => {
    saveFavourite(userId, recipeId)
    .then(getUser(userId))
    .then((user) => setUser(user))  
  }

  const removeFavourite = (userId, recipeId) => {
    deleteFavourite(userId, recipeId)
    .then(getUser(userId))
    .then((user) => setUser(user))  
  }
  
  return (  
    <>
      <div className="container">
        <Header setSearchResults={setSearchResults} />
        <FilterForm getFilters={getFilters}/>
        <br/>
      </div>

      { searchResults.length === 0 
      ?<RecipeContainer carouselRecipes={carouselRecipes} filteredResults={filteredResults} user={user} newFavourite={newFavourite} removeFavourite={removeFavourite}/>
      :<SearchResults recipes={searchResults} />
      }
    </>
  )
}

export default App