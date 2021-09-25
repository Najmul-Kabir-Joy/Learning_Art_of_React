import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    const handleAddtoCart = props.handleAddtoCart;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />

            </div>
            <div>
                <h4 className='product_name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <small>only {stock} left in stock - order soon</small>
                <button onClick={() => handleAddtoCart(props.product)} className='btn-purchase'>{cartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;