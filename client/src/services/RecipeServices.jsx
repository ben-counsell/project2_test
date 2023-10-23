import apiKey from "./apiKey"
const baseURL = 'https://api.spoonacular.com/recipes/'
export const getRecipes = () => {
    return fetch(`${baseURL}/complexSearch?`, {
        headers:apiKey
    })
        .then(res => res.json())
}
export const getThai = () => {
    return fetch(`${baseURL}/complexSearch?query=Thai`, {
        headers:apiKey
    })
        .then(res => res.json())
}












