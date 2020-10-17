import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    const [product, setProduct] = useState(first10)

    const [cart, setCart] = useState([])

    useEffect(() => {
        const savedCart = getDatabaseCart()

        const productkey = savedCart.key
        const productkeys = Object.keys(savedCart)
        console.log(productkeys);

        const previousCart = productkeys.map((ExistingKey) => {
            const product = fakeData.find(pd => pd.key === ExistingKey)
            product.myquentity = savedCart[ExistingKey]
            //console.log(product, savedCart[ExistingKey]);
            return product;
        })


        setCart(previousCart)




    }, [])
    const handaleAddproduct = (product) => {
        console.log(product);

        const sameProduct = cart.find(pd => pd.key === product.key)  // new code 
        let count = 1;
        let newCart
        if (sameProduct) {
            count = sameProduct.myquentity + 1
            sameProduct.myquentity = count

            const other = cart.filter(pd => pd.key !== product.key)
            newCart = [...other, sameProduct]
        } else {
            product.myquentity = 1
            newCart = [...cart, product]
        }

        setCart(newCart)

        //addToDatabaseCart(product.key, 1)
        //  const sameProduct = newCart.filter(pd => pd.key === product.key)
        //   const count = sameProduct.length
        addToDatabaseCart(product.key, count)

    }

    return (
        <div className="shop test">
            <Container>
                <Row>
                    <Col md={8} className="shop">
                        {
                            product.map(pd => <Product
                                showAddTocart={true}
                                key={pd.key}
                                product={pd}
                                handaleAddproduct={handaleAddproduct}>
                            </Product>)
                        }
                    </Col>
                    <Col md={4} className="my-1">
                        <Cart cart={cart}>
                            <Link to="/review">
                                <button className="btn btn-block my-button">
                                    Review Order
                                </button>
                            </Link>
                        </Cart>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Shop;