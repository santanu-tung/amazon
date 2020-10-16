import React from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import NotFound from '../NotFound/NotFound';
import Product from '../Product/Product';

const Productdetail = () => {

    let { productkey } = useParams();
    const product = fakeData.find(pd => pd.key === productkey)
    let notFound
    if (!product) {
        notFound = <NotFound></NotFound>
    }
    return (
        <div>
            <Container>
                {
                   product && 
                    <Row>
                        <Col md={8} className="">
                            {
                                product && <Product showAddTocart={false} product={product} ></Product>
                            }
                        </Col>
                        <Col md={4} className="card">
                            Cart
                        </Col>
                    </Row>                   
                }
            </Container>
            {
                notFound
            }
        </div>
    );
};

export default Productdetail;
