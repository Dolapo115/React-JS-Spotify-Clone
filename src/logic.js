export const authEndPoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:8888/callback'

const clientId = 'b71c757b6a56479388988aa828200d99'

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const getToken = ()=>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item)=>{
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;
    }, {})
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`


