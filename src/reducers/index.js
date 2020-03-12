import { FETCH_DATA, FETCH_DONE, FETCH_ERROR} from '../actions/actionTypes';

const initialState = {
    items: [],
    error: null,
    loading: false
}
function assoc(obj, k, data){
    obj[k] = data
    return obj
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
            const items=action.payload.items
            //const items2= Object.values(items)//
            const items2 = Object.keys(items).map(name => assoc({...items[name]},"name",name))
            return {
                ...state,
                loading: false,
                items: items2
            }
        }
        case FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload.items,
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