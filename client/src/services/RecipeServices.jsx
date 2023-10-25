import apiKey from "./apiKey"
const baseURL = 'https://api.spoonacular.com/recipes'

export const getRecipesForCarousel = (query, dietary_requirements, intolerances) => {
    let apiCall = ''
    query != '' ? apiCall = 'query=' + query : null
    dietary_requirements ? apiCall += `&diet=${dietary_requirements}` : null
    intolerances ? apiCall += `&intolerances=${intolerances}` : null

    return fetch(`${baseURL}/complexSearch?${apiCall}&sort=random`, {
        headers:apiKey
    })
        .then(res => res.json())
}

export const getFilteredRecipes = (filters, dietary_requirements, intolerances) => {
    let apiCall = Object.values(filters).join('&')
    dietary_requirements ? apiCall += `&diet=${dietary_requirements}` : null
    intolerances ? apiCall += `&intolerances=${intolerances}` : null

    return fetch(`${baseURL}/complexSearch?${apiCall}&sort=random&number=255`, {
        headers:apiKey
    })
        .then(res => res.json())
}
