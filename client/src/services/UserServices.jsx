const baseUrl = "http://localhost:9000/api/users/"

export const getUser = (id) => {
    return fetch(`${baseUrl}/${id}`)
    .then(res => res.json())
}

export const saveFavourite = (userId, recipeId) => {
    return fetch(`${baseUrl}/${userId}/${recipeId}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}