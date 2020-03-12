import {FETCH_DONE, FETCH_ERROR, FETCH_DATA} from './actionTypes';

export const fetchDone = (items) => ({
    type: FETCH_DONE,
    payload: {items}
})

export const fetchError = (error) => ({
    type: FETCH_ERROR,
    payload: {error}
})

export const fetchData = () => ({
    type: FETCH_DATA
})

export function fetchStart() {
    return dispatch => {
        dispatch(fetchData());
        return fetch("https://feiertage-api.de/api/?jahr=2020&nur_land=MV")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                dispatch(fetchDone(json));
                return json;
            })
            .catch(error => dispatch(fetchError(error)));
    };
}

function handleErrors(response) {
    if(!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}