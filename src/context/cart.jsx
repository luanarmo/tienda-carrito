import { createContext, useReducer } from "react";
import { CartReducer, CartInitialState } from '../reducers/cart'
export const CartContext = createContext();


function useCartReducer() {
    const [state, dispatch] = useReducer(CartReducer, CartInitialState)
    const addToCart = product => {
        dispatch({ type: 'ADD_TO_CART', payload: product })
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    const removeFromCart = product => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }

    return { state, addToCart, clearCart, removeFromCart }
}

export function CartProvider({ children }) {
    const { state, addToCart, clearCart, removeFromCart } = useCartReducer()

    return <CartContext.Provider value={{ cart: state, addToCart, clearCart, removeFromCart }}>{children}</CartContext.Provider>;
}