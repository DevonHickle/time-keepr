export const API_REQUEST = 'API_REQUEST'
export const API_SUCCESS = 'API_SUCCESS'
export const API_ERROR = 'API_ERROR'
export const CANCEL_REQUEST = 'CANCEL_REQUEST'

export const apiRequest = ({ url, method}) => {
    return {
        type: API_REQUEST,
        meta: {url, method}
    }
}

export const cancelRequest = () => {
    return {
        type: CANCEL_REQUEST
    }
}

export const apiSuccess = ({ response }) => ({
    type: API_SUCCESS,
    payload: response
})

export const apiError = ({ error }) => ({
    type: API_ERROR,
    payload: error
})