import apiKey from "./apiKey"
const baseURL = 'https://api.spoonacular.com/recipes'

export const getRecipesForCarousel = (query) => {
    let apiCall = ''
    query != '' ? apiCall = 'query=' + query : null

    return fetch(`${baseURL}/complexSearch?${apiCall}&sort=random`, {
        headers:apiKey
    })
        .then(res => res.json())
}

export const getFilteredRecipes = (filters) => {
    const apiCall = Object.values(filters).join('&')

    return fetch(`${baseURL}/complexSearch?${apiCall}&sort=random&number=255`, {
        headers:apiKey
    })
        .then(res => res.json())
}