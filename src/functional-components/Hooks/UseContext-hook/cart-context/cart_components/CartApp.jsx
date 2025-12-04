import React from 'react'
import { CartProvider } from "../CartContext"
import Header from './Header'
import ProductList from './ProductList'
import CartList from './CartList'
function CartApp() {
    return (
        <CartProvider>
            <div className="app">
                <Header/>
                <main>
                    <ProductList />
                    <CartList />
                </main>
            </div>
        </CartProvider>
    )
}

export default CartApp
