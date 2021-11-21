import Images from "../../Assets/T-short.png"
import Images1 from "../../Assets/T-short2.jpg"
import Images2 from "../../Assets/T-short.png"

import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, TOGGLE_NAV, CLOSE_NAVBAR, BANNER_CLOSE, INCREASE_ITEM, DECREASE_ITEM, TOTAL_ITEMS, DETAILS } from '../Action/Types';

const initialState = {
    items: [
        {
            _id: 1,
            img: Images1,
            title: "T-shirt",
            price: "100",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 2,
            img: Images,
            title: "T-shirt",
            price: "100",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 3,
            img: Images1,
            title: "T-shirt",
            price: "100",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 4,
            img: Images2,
            title: "T-shirt",
            price: "100",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 5,
            img: Images,
            title: "T-shirt",
            price: "100",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 6,
            img: Images1,
            title: "T-shirt",
            price: "100",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 7,
            img: Images2,
            title: "T-shirt",
            price: "100",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 8,
            img: Images1,
            title: "T-shirt",
            price: "100",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
    ],
    cart: [],
    isOpen: false,
    total: 0,
    shipping: 10
}

const Todos = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        case TOGGLE_NAV:
            return {
                ...state,
                isOpen: !state.isOpen
            }
        case CLOSE_NAVBAR:
            if (state.isOpen === true) {
                return {
                    ...state,
                    isOpen: false
                }
            }
        case ADD_ITEMS:
            const check = state.cart.find(item => item._id === action.payload);
            if (!check) {
                const items = state.items.filter(item => item._id === action.payload);
                const itemsCart = [...state.cart, ...items]
                return {
                    ...state,
                    cart: itemsCart
                }
            } else {
                const items = state.items.filter(item => item._id === action.payload);
                items.forEach(item => {
                    item.isInCart = true
                    // alert(`already in cart`)
                })
                return {
                    ...state
                }
            }
        case BANNER_CLOSE:
            state.items.forEach(item => {
                item.isInCart = false
            })
            return {
                ...state
            }
        case DELETE_ITEM:
            const filteredCart = state.cart.filter(item => item._id !== action.payload);
            return {
                ...state,
                cart: filteredCart
            }
        case INCREASE_ITEM:
            const incResults = state.cart.map(item => {
                if (item._id === action.payload) {
                    item = { ...item, count: item.count + 1 }
                } return item
            })
            return {
                ...state,
                cart: incResults
            }
        case DECREASE_ITEM:
            const decResults = state.cart.map(item => {
                if (item._id === action.payload) {
                    item = { ...item, count: item.count === 1 ? item.count = 1 : item.count - 1 }
                } return item
            })
            return {
                ...state,
                cart: decResults
            }
        case TOTAL_ITEMS:
            const totals = state.cart.reduce((prev, item) => {
                return prev + (item.price * item.count)
            }, 0)
            return {
                ...state,
                total: totals
            }
        case DETAILS:

        default:
            return state;
    }
}

export default Todos;