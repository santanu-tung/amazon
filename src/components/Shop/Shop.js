import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData from '../../fakeData'
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    const [product, setProduct] = useState(first10)
    return (
        <div className="shop">
            <Container>
                <Row>
                    <Col md={8} className="shop">
                        {
                            product.map(pd => <Product key={pd.key} product={pd}></Product>)
                        }
                    </Col>
                    <Col md={4} className="card my-1">

                        My Cart
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Shop;