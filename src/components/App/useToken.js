import {useState} from 'reach'

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        return userToken?.token
    }

    const [token, setToken] = useState(getToken())
    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(useToken))
        setToken(userToken.token)
    }
    return {
        setToken: saveToken, token
    }
}