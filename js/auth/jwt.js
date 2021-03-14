// Generate dummy jwt
let generateJwt = (user, role) => {
    return btoa(
        JSON.stringify({
            // Algorithm type would matter if encryption was used
            "alg": "HS256",
            "typ": "JWT"
        }))
        + '.' +
        btoa(
        JSON.stringify({
            "iss": "Samlino Test",
            "iat": new Date().getTime(),
            "exp": new Date().setHours(new Date().getHours() + 1),
            "aud": window.location.href,
            "sub": user,
            "role": role
        }))        
}

// Read information contained inside jwt
let readJwt = (jwt) => {
    return JSON.parse(
        atob(jwt.split('.')[1])
    )
}

export {generateJwt, readJwt}