import { useState, useEffect } from 'react'
import { getFilteredRecipes, getRecipesForCarousel } from './services/RecipeServices'
import RecipeContainer from './containers/RecipeContainer'
import CustomerPrefererencesForm from './components/CustomerPreferencesForm'
import FilterForm from './components/FilterForm'
import Header from './components/Header'
import SearchResults from './components/SearchResults'
import { getUser, saveFavourite, deleteFavourite, addDiet, addIntolerance } from './services/UserServices'
import './style/App.css'
import './style/RecipeLists.css'
import './style/Search.css'

function App() {
    
  const loggedInUserId = '6539779dadb03d588567168b'

  const [carouselRecipes, setCarouselRecipes] = useState({})
  const [filteredResults, setFilteredResults] = useState({noFilters:'have yet been set'})
  const [searchResults, setSearchResults] = useState([])
  const [user, setUser] = useState({favourites:''})

  useEffect(() => {
    getUser(loggedInUserId)
    .then((user) => setUser(user))
  }, [])

  useEffect(() => {
    console.log(user.intolerances)
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
  }, [user])

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

  const setCustomerPreferences = (userId, newDietaryPreferences, newIntolerances) => {
    for (let diet of newDietaryPreferences) {
      addDiet(userId, diet)
    }
    for (let intolerance of newIntolerances) {
      addIntolerance(userId, intolerance)
    }
    getUser(userId)
    .then((user) => setUser(user))
  }
  
  return (  
    <>
      <div className="container">
        <Header setSearchResults={setSearchResults} />
        <CustomerPrefererencesForm user={user} setCustomerPreferences={setCustomerPreferences}/>        
        <FilterForm getFilters={getFilters}/>
      </div>

      { searchResults.length === 0 
      ?<RecipeContainer carouselRecipes={carouselRecipes} filteredResults={filteredResults} user={user} newFavourite={newFavourite} removeFavourite={removeFavourite}/>
      :<SearchResults recipes={searchResults} />
      }
    </>
  )
}

export default App