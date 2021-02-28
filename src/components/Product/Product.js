import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>By <small>{seller}</small></p>
                <br />
                <p>Price: ${price}</p>
                <p><small>Only {stock} as soon</small></p>
                <button onClick={() => props.handleAddClick(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} />  Add to cart</button>
            </div>
        </div>
    );
};

export default Product;