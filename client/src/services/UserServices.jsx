const baseUrl = "http://localhost:9000/api/users/6538f63a7dec7c6a518882b9"

export const getUser = () => {
    return fetch(baseUrl)
    .then(res => res.json())
}