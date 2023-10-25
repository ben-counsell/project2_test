const baseUrl = "http://localhost:9000/api/users/"

export const getUser = (id) => {
    return fetch(`${baseUrl}/${id}`)
    .then(res => res.json())
}

export const saveFavourite = (userId, recipeId) => {
    return fetch(`${baseUrl}/${userId}/${recipeId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteFavourite = (userId, recipeId) => {
    return fetch(`${baseUrl}/${userId}/${recipeId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const updateCustomerPreferences = (dietary_requirements, intolerances) => {
    return fetch `baseUrl`
}