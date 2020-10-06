import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData from '../../fakeData'
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    const [product, setProduct] = useState(first10)

    const [cart, setCart] = useState([])
    const handaleAddproduct = (product) => {
        console.log(product);
        const newCart = [...cart, product]
        setCart(newCart)

        //addToDatabaseCart(product.key, 1)
        const sameProduct = newCart.filter(pd => pd.key === product.key)
        const count = sameProduct.length
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
                        <Cart cart={cart}></Cart>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Shop;