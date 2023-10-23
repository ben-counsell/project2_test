import apiKey from "./apiKey"
const baseURL = 'https://api.spoonacular.com/recipes'

const filters = {
    cuisine:`cuisine=italian,`,
    diet:`diet=vegetarian,`
}

export const getRecipes = () => {
    return fetch(`${baseURL}/complexSearch?`, {
        headers:apiKey
    })
        .then(res => res.json())
}

export const getThai = () => {
    return fetch(`${baseURL}/complexSearch?query=thai`, {
        headers:apiKey
    })
        .then(res => res.json())
}

export const getFilteredRecipes = () => {
    let apiCall = `${baseURL}/complexSearch?`

    const filterValues = Object.values(filters)
    filterValues.forEach((value) => apiCall += `${value},`)
    
    // removes final comma from api call:
    if (filterValues.length > 0) {
        apiCall = apiCall.slice(0, -1)
    }

    return fetch(apiCall, {
        headers:apiKey
    })

};