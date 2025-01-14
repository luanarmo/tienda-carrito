import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';
import { useCart } from '../hooks/useCart.jsx'

export const Products = ({ products }) => {

    const { addToCart, cart, removeFromCart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }


    return (
        <main className="products">
            <ul>
                {products.slice(0, 10).map(product => {
                    const isProductInCart = checkProductInCart(product)
                    return (
                        <li key={product.id}>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                            />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button onClick={() => {
                                    isProductInCart ? removeFromCart(product) : addToCart(product)
                                }}
                                    className={isProductInCart ? 'added' : 'removed'}
                                >
                                    {
                                        isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })

                }
            </ul>

        </main>
    );
}
