import React from 'react'
import { Provider } from 'react-redux'
import ProductList from './ProductList'
import Cart from './Cart'
import store from '../store/store'

function ShoppingApp() {
  return (
    //calling Provider prop from react redux.
    <Provider store={store}> 
      <div className='container mt-4'>
        <h1 className='text-center mb-4'>Shopping Cart</h1>
        <div className="row">
          <div className="col-md-8">
            <ProductList />
          </div>
          <div className="col-md-4">
            <Cart />
          </div>
        </div>


      </div>
    </Provider>
  );
};

export default ShoppingApp
