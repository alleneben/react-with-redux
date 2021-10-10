
export default get = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error))
}

export default add = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error))
}