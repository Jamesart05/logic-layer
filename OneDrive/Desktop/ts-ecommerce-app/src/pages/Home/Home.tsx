import {useEffect, useState} from 'react'
import products from '../../data/Products'
import { Product, CartItem } from '../../types'
import ProductList from '../../components/ProductList/ProductList'
import { toast } from 'react-toastify'

const Home = () => {

    const [cart, setCart] = useState<CartItem[]>(() => {
        const stored = localStorage.getItem('cart');
        return stored ? JSON.parse(stored) : []
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const found = prev.find((item) => item.id === product.id);

            if(found){
                return prev.map((item) => 
                item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
            }
            toast.success(`${product.name} added to cart!`);
            return [...prev, {...product, quantity: 1}];
        })
    }

    const total = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div>
            <p className='cart-num'>{total}</p>
            <div className='home'>
                <ProductList products={products} addToCart={addToCart} />
            </div>
        </div>
    )
}

export default Home