import { FETCH_DATA, FETCH_DONE, FETCH_ERROR} from '../actions/actionTypes';

const initialState = {
    items: [],
    error: false,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA: {
            return {
                ...state
            }
        }
        case FETCH_DONE: {
            return {
                ...state
            }
        }
        case FETCH_ERROR: {
            return {
                ...state
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}