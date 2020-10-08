import React from 'react';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import giphy from '../../images/giphy.gif'

const Review = () => {

    const [cart, setCart] = useState([])
    const [orderPlace, setOrderPlace] = useState(false)

    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productkey = Object.keys(savedCart)
        // const productvalue = Object.values(savedCart)
        // consoleconst counts = productkey.map(key => savedCart[key])

        const products = productkey.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.myquentity = savedCart[key]
            return product
        })

        setCart(products)
        console.log(products);


        // console.log(productkey);
        //console.log(counts);
        // console.log(productvalue);

    }, [])

    const removeProduct = (productkey) => {
        console.log('remove');
        const newCart = cart.filter(product => product.key !== productkey)
        setCart(newCart)

        removeFromDatabaseCart(productkey)

    }

    const placeOrder = () => {
        setCart([])
        setOrderPlace(true)
        processOrder()


    }
    let happyOrder
    if (orderPlace){
        happyOrder = <img src={giphy} alt="happy" />
    }
     
    return (
        <div>
            <Container>
                <Row>
                    <Col md={8} className="">
                        {
                            cart.map(pd => <ReviewItem key={pd.key} product={pd} removeProduct={removeProduct}></ReviewItem>)
                        }
                        {
                          <div className="my-image mt-2 mb-5">
                                {happyOrder}
                          </div>  
                            
                        }
                    </Col>
                    <Col md={4} className="my-3">
                        <Cart cart={cart}>

                            <button onClick={placeOrder} className="btn btn-block my-button">
                                Place Order
                            </button>

                        </Cart>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Review;