import {FETCH_DONE, FETCH_ERROR, FETCH_DATA} from './actionTypes';

export const fetchDone = (items) => ({
    type: FETCH_DONE,
    payload: {items}
})

export const fetchError = (error) => ({
    type: FETCH_ERROR,
    payload: {error}
})

export const fetchDATA = () => ({
    type: FETCH_DATA
})

export function fetchStart() {
    return dispatch => {
        dispatch(fetchDATA());
        return fetch("https://feiertage-api.de/api/?jahr=2020&nur_land=MV")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(FETCH_DONE(json.products));
                return json.products;
            })
            .catch(error => dispatch(FETCH_ERROR(error)));
    };
}

function handleErrors(response) {
    if(!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}