import apiKey from "./apiKey"
const baseURL = 'https://api.spoonacular.com/recipes'

export const getRecipesForCarousel = (query) => {
const apiCall = 'query=' + query

    return fetch(`${baseURL}/complexSearch?${}&sort=random`, {
        headers:apiKey
    })
        .then(res => res.json())
}

export const getThai = () => {
    return fetch(`${baseURL}/complexSearch?query=Thai&sort=random`, {
        headers:apiKey
    })
        .then(res => res.json())
}

export const getVeggie = () => {
    return fetch(`${baseURL}/complexSearch?diet=Vegetarian&sort=random`, {
        headers:apiKey
    })
        .then(res => res.json())
}

export const getVegan = () => {
    return fetch(`${baseURL}/complexSearch?diet=Vegan&sort=random`, {
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