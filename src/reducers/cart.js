export const CartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const CartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action

    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART:
            const { id } = actionPayload

            const productInCartIndex = state.findIndex(item => item.id === id);

            if (productInCartIndex >= 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                updateLocalStorage(newState)
                return newState
            }
            // If the product is not in the cart, add it
            const newState = [...state, { ...actionPayload, quantity: 1 }]

            updateLocalStorage(newState)
            return newState

        case CART_ACTION_TYPES.REMOVE_FROM_CART:
            const newS = state.filter(item => item.id !== actionPayload.id)
            updateLocalStorage(newS)
            return newS

        case CART_ACTION_TYPES.CLEAR_CART:
            updateLocalStorage([])
            return []
    }

    return state
}