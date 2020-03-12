import { FETCH_DATA, FETCH_DONE, FETCH_ERROR} from '../actions/actionTypes';

const initialState = {
    items: [],
    error: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case FETCH_DONE: {
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        }
        case FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
                items: []
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}