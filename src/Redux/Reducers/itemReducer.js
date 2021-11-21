import Images1 from "../../Assets/green.png"
import Images2 from "../../Assets/red.png"
import Images3 from "../../Assets/grey.png"
import Images4 from "../../Assets/black.png"
import Images5 from "../../Assets/suit1.png"
import Images6 from "../../Assets/suit2.png"
import Images7 from "../../Assets/suit3.jpg"
import Images8 from "../../Assets/suit4.jpg"
import Images9 from "../../Assets/trouser1.png"
import Images10 from "../../Assets/trouser2.png"
import Images11 from "../../Assets/trouser3.png"
import Images12 from "../../Assets/trouser4.png"
import Images13 from "../../Assets/dress1.jpg"
import Images14 from "../../Assets/dress2.jpg"
import Images15 from "../../Assets/dress3.jpg"
import Images16 from "../../Assets/dress4.jpg"
import Images17 from "../../Assets/T-shirt1.png"
import Images18 from "../../Assets/T-shirt2.png"
import Images19 from "../../Assets/T-shirt3.png"
import Images20 from "../../Assets/T-shirt4.png"
import Images21 from "../../Assets/short1.png"
import Images22 from "../../Assets/short2.png"
import Images23 from "../../Assets/short3.jpg"
import Images24 from "../../Assets/short4.jpg"
import Images25 from "../../Assets/sneakers1.jpg"
import Images26 from "../../Assets/sneakers2.jpg"
import Images27 from "../../Assets/sneakers3.jpg"
import Images28 from "../../Assets/sneakers4.jpg"
import Images29 from "../../Assets/shoes1.png"
import Images30 from "../../Assets/shoes2.jpg"
import Images31 from "../../Assets/shoes3.jpg"
import Images32 from "../../Assets/shoes4.jpg"
import Images33 from "../../Assets/sock1.png"
import Images34 from "../../Assets/sock2.png"
import Images35 from "../../Assets/sock3.jfif"
import Images36 from "../../Assets/sock4.jpg"

import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, TOGGLE_NAV, CLOSE_NAVBAR, BANNER_CLOSE, INCREASE_ITEM, DECREASE_ITEM, TOTAL_ITEMS, DETAILS } from '../Action/Types';

const initialState = {
    items: [
        {
            _id: 1,
            img: Images1,
            title: "Sweatshirt-green",
            price: "29",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 2,
            img: Images2,
            title: "Supreme Box",
            price: "22",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 3,
            img: Images3,
            title: "Hoortodie-sps-grey",
            price: "27",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 4,
            img: Images4,
            title: "Revenge-Hoodie",
            price: "33",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 5,
            img: Images5,
            title: "Men-Suit",
            price: "175",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 6,
            img: Images6,
            title: "Men-Suit",
            price: "145",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 7,
            img: Images7,
            title: "Men-Suit",
            price: "185",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 8,
            img: Images8,
            title: "Men-Suit",
            price: "145",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 9,
            img: Images9,
            title: "Touser",
            price: "70",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 10,
            img: Images10,
            title: "Touser",
            price: "55",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 11,
            img: Images11,
            title: "Touser",
            price: "77",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 12,
            img: Images12,
            title: "Touser",
            price: "57",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 13,
            img: Images13,
            title: "Men-Shirt",
            price: "97",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 14,
            img: Images14,
            title: "Men-Shirt",
            price: "93",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 15,
            img: Images15,
            title: "Men-Shirt",
            price: "90",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 16,
            img: Images16,
            title: "Men-Shirt",
            price: "94",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 17,
            img: Images17,
            title: "T-shirt",
            price: "102",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 18,
            img: Images18,
            title: "T-shirt",
            price: "94",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 19,
            img: Images19,
            title: "T-shirt",
            price: "99",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 20,
            img: Images20,
            title: "T-shirt",
            price: "101",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 21,
            img: Images21,
            title: "Short",
            price: "11",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 22,
            img: Images22,
            title: "Short",
            price: "13",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 23,
            img: Images23,
            title: "Short",
            price: "12",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 24,
            img: Images24,
            title: "Short",
            price: "17",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 25,
            img: Images25,
            title: "Sneakers",
            price: "21",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 26,
            img: Images26,
            title: "Sneakers",
            price: "23",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 27,
            img: Images27,
            title: "Sneakers",
            price: "24",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 28,
            img: Images28,
            title: "Sneakers",
            price: "21",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 29,
            img: Images29,
            title: "Shoes",
            price: "47",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 30,
            img: Images30,
            title: "Shoes",
            price: "47",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 31,
            img: Images31,
            title: "Shoes",
            price: "47",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 32,
            img: Images32,
            title: "Shoes",
            price: "47",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 33,
            img: Images33,
            title: "Sock",
            price: "3",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 34,
            img: Images34,
            title: "Sock",
            price: "4",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 35,
            img: Images35,
            title: "Sock",
            price: "2",
            details: "Red T-shirt 2020 is the nevest trens and design from the company with best materials. It provides the best feeling for your body and and your health",
            count: 1,
            isInCart: false
        },
        {
            _id: 36,
            img: Images36,
            title: "Sock",
            price: "5",
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
                    alert(`already in cart`)
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