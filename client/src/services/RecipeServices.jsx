import apiKey from "./apiKey"
const baseUrl = 'https://api.spoonacular.com/recipes'

let apiCall

const applyDietaryRequirementsToRequest = (apiCall, dietary_requirements, intolerances) => {
    dietary_requirements.length > 0 ? apiCall += `&diet=${dietary_requirements.join(',')}` : null
    intolerances.length > 0 ? apiCall += `&intolerances=${intolerances.join(',')}` : null
    return apiCall
}

export const getRecipesForCarousel = (query, dietary_requirements, intolerances) => {
    query != '' ? apiCall = 'query=' + query : null

    const request = applyDietaryRequirementsToRequest(apiCall, dietary_requirements, intolerances)

    return fetch(`${baseUrl}/complexSearch?${request}&sort=random`, {
        headers:apiKey
    })
        .then(res => res.json())
}

export const getFilteredRecipes = (filters, dietary_requirements, intolerances) => {
    let apiCall = Object.values(filters).join('&')

    const request = applyDietaryRequirementsToRequest(apiCall, dietary_requirements, intolerances)

    return fetch(`${baseUrl}/complexSearch?${request}&sort=random&number=255`, {
        headers:apiKey
    })
        .then(res => res.json())
}