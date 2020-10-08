import React from 'react';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {

    const [cart, setCart] = useState([])
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

    const removeProduct = (productkey)=>{
        console.log('remove');

        const newCart = cart.filter(product =>  product.key !== productkey )
        setCart(newCart)

        
        removeFromDatabaseCart(productkey)
        
    }

    return (
        <div>


            <Container>
                <Row>
                    <Col md={8} className="">
                        <h2>cart length :{cart.length}</h2>
                        {cart.map(pd => <ReviewItem key={pd.key} product={pd} removeProduct={removeProduct}></ReviewItem>)}
                    </Col>
                    <Col md={4} className="">

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Review;