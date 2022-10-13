function myfetch(url, method, data) {
    return fetch(url, {
        body: data ? JSON.stringify(data) : '',
        method
    }).then((resp) => resp.json())
}

myfetch.post = (url, data) => {
    return myfetch(url, 'post', data)
}


myfetch.get = (url, data) => {
    return myfetch(url, 'get', data)
}

export default myfetch