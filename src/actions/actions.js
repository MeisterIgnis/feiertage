import {FETCH_DONE, FETCH_ERROR, FETCH_DATA} from './actionTypes';
//import jsonData from "../feiertage.json";

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
        return fetch("https://feiertage-api.de/api/?jahr=2020")
        //return fetch(JSON.parse(jsonData))
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
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