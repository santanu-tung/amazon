import React from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Productdetail = () => {

    let { productkey } = useParams();
    const product = fakeData.find(pd => pd.key === productkey)


    return (
        <div>
            <Container>
                <Row>
                    <Col md={8} className="">
                        <Product showAddTocart={false} product={product} ></Product>
                    </Col>
                    <Col md={4} className="card">
                        Cart
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Productdetail;
