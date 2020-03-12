import {FETCH_DONE, FETCH_ERROR, FETCH_DATA} from './actionTypes';

export const fetchDone = (items) => ({
    type: FETCH_DONE,
    items
})

export const fetchError = (error) => ({
    type: FETCH_ERROR,
    error
})

export const fetchDATA = (loading) => ({
    type: FETCH_DATA,
    loading
})