import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const Cart = props.cart
    console.log(Cart);

    const totalPrice = Cart.reduce((total, pd) => total + pd.price, 0)


    let total = 0
    for (let index = 0; index < Cart.length; index++) {
        let pd = Cart[index];
        total = total + pd.price
    }

    let sippings = 0
    if (totalPrice > 100) {
        sippings = 0;
    } else if (totalPrice > 50) {
        sippings = 4.99;
    } else if (totalPrice > 0) {
        sippings = 12.99
    }

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const tax = formatNumber(totalPrice / 10);
    const grandTotal = formatNumber(totalPrice) + tax

    return (
        <div className="card p-3">
            <p>Order Summary</p>
            <p>Items Order {props.cart.length}</p>
            <p> Total Price {formatNumber(totalPrice)}</p>
            <p>Total Price :{formatNumber(total)}</p>
            <p>Sipping :{sippings}</p>
            <p>Tax :{tax}</p>
            <p>Grand Total :{formatNumber(grandTotal)}</p>
            <Link to="/review">
                <button className="btn btn-block my-button">
                    Review Order
                </button>
            </Link>
        </div>
    );
};

export default Cart;