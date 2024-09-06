

async function auth (email, password) {
    const body = {
        "email": email,
        "password": password
    }
    const response = (await fetch(
        "http://127.0.0.1:8080/api/auth",
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
    )).json()
    return response
}



export { auth }