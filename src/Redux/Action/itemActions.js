import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, TOGGLE_NAV, CLOSE_NAVBAR, BANNER_CLOSE, INCREASE_ITEM, DECREASE_ITEM, TOTAL_ITEMS, DETAILS } from './Types';

export const getItems = () => {
    return {
        type: GET_ITEMS
    }
}

export const toggleNav = () => dispatch => {
    dispatch({
        type: TOGGLE_NAV
    })
}

export const closeNavbar = () => dispatch => {
    dispatch({
        type: CLOSE_NAVBAR
    })
}

export const AddToCart = (id) => dispatch => {
    dispatch({
        type: ADD_ITEMS,
        payload: id
    })
}

export const bannerClose = () => dispatch => {
    dispatch({
        type: BANNER_CLOSE
    })
}

export const deleteItem = (id) => dispatch => {
    dispatch({
        type: DELETE_ITEM,
        payload: id
    })
}

export const increaseItem = (id) => dispatch => {
    console.log(`increase :${id}`);
    dispatch({
        type: INCREASE_ITEM,
        payload: id
    })
}

export const decreaseItem = (id) => dispatch => {
    console.log(`decrease :${id}`);
    dispatch({
        type: DECREASE_ITEM,
        payload: id
    })
}

export const getTotal = () => dispatch => {
    dispatch({
        type: TOTAL_ITEMS
    })
}

export const getDetails = () => dispatch => {
    dispatch({
        type: DETAILS
    })
}