const baseUrl = "http://localhost:9000/api/users/65364dea76bc6c89f5de108b"


export const getUser = () => {
    return fetch(baseUrl)
    .then(res => res.json())
}