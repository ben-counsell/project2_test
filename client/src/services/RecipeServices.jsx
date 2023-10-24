import apiKey from "./apiKey"
const baseURL = 'https://api.spoonacular.com/recipes'

export const getRecipes = () => {
    return fetch(`${baseURL}/complexSearch?sort=random`, {
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
    const apiCallArray = []
    const filterValues = Object.values(filters)
    filterValues.forEach((value) => apiCallArray.push(value))
    
    const apiCall = apiCallArray.join('&')

    return fetch(`${baseURL}/complexSearch?${apiCall}`, {
        headers:apiKey
    })
        .then(res => res.json())
}

