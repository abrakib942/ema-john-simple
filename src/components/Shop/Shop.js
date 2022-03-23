import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleCart = (product) =>{
       console.log('clicked');
    //    cart.push(product);
    const newCart = [...cart, product]
    setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
               {
                   products.map(product => <Product
                     key={product.id}
                     product = {product}
                     handleCart = {handleCart}
                     ></Product>)
               }
            </div>
            <div className="cart-container">
               <h2>order summary</h2>
               <p>selected item: {cart.length}</p>

            </div>
        </div>
    );
};

export default Shop;