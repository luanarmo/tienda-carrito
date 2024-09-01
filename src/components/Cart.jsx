import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'


function CartItem({ thumbnail, price, title, quantity, addToCart, removeFromCart }) {
    return (
        <li>
            <img src={thumbnail} alt='product' />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
                <button onClick={removeFromCart}>
                    <RemoveFromCartIcon width={16} height={16} />
                </button>
            </footer>
        </li>
    )

}

export function Cart() {
    const cartCheckboxId = useId()

    const { cart, clearCart, addToCart, removeFromCart } = useCart()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input type='checkbox' id={cartCheckboxId} hidden />

            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            removeFromCart={() => removeFromCart(product)}
                            {...product}
                        />
                    ))}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}
