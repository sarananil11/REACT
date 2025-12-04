import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

function ProductList() {
    const { products, dispatch } = useContext(CartContext);
    return (
        <div className='products'>
            <h2>Products</h2>
            {products.map((p) => (
                <div className="product-card" key={p.id}>
                    <h3>{p.name}</h3>
                    <h3>$ {p.price}</h3>
                    <button className='btn'
                        onClick={() => dispatch({ type: "ADD_ITEM", payload: p })}>
                        Add to Cart
                    </button>
                </div>
            ))}

        </div>
    )
}

export default ProductList
