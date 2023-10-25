import { useState, useEffect } from 'react'
import { getFilteredRecipes, getRecipesForCarousel } from './services/RecipeServices'
import RecipeContainer from './containers/RecipeContainer'
import CustomerPrefererencesForm from './components/CustomerPreferencesForm'
import FilterForm from './components/FilterForm'
import Header from './components/Header'
import SearchResults from './components/SearchResults'
import { getUser, saveFavourite, deleteFavourite } from './services/UserServices'
import './style/App.css'
import './style/RecipeLists.css'
import './style/Search.css'

function App() {
  
  const loggedInUserId = '6538f63a7dec7c6a518882b9'

  const [carouselRecipes, setCarouselRecipes] = useState({})
  const [filteredResults, setFilteredResults] = useState({noFilters:'have yet been set'})
  const [searchResults, setSearchResults] = useState([])
  const [user, setUser] = useState({favourites:''})

    
  useEffect(() => {
    getUser(loggedInUserId)
    .then((user) => setUser(user))
  }, [])

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

  const setCustomerPreferences = (userId, newPreferences) => {
    // updateCustomerPreferences(userId, newPreferences)
    // .then(getUser(userId))
    // .then((user) => setUser(user))
  }
  
  return (  
    <>
      <div className="container">
        <Header setSearchResults={setSearchResults} />
        <CustomerPrefererencesForm user={user} setCustomerPreference={setCustomerPreferences}/>        
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