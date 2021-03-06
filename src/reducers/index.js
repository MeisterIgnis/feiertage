import { FETCH_DATA, FETCH_DONE, FETCH_ERROR, SET_STATE_FILTER} from '../actions/actionTypes';


const initialState = {
    items: [], //rohdaten
    itemsToShow: [], //anzeigedaten
    error: null,
    loading: false,
    stateFilter: 16,
    states: ["BW", "BY", "BE", "BB", "HB", "HH", "HE", "MV", "NI", "NW", "RP", "SL", "SN", "ST", "SH", "TH", "NATIONAL"]
}
function assoc(obj, k, data){
    obj[k] = data
    return obj
}

function map2seq(obj,assocfn){
    return  Object.keys(obj).map(k => assocfn(obj,k))
}

function assoc2Name(o,k){
    return assoc({...o[k]},"name",k)
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
            const bl=items[state.states[state.stateFilter]]
            const itemsToShow = map2seq(bl, assoc2Name)
            return {
                ...state,
                loading: false,
                items,
                itemsToShow
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
        case SET_STATE_FILTER: {
            const stateFilter = action.payload.filter
            const items=state.items
            const bl=items[state.states[stateFilter]]
            const itemsToShow = map2seq(bl, assoc2Name)
            return {
                ...state,
                stateFilter,
                itemsToShow
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}