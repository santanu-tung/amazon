import React from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Productdetail = () => {

    let { productkey } = useParams();
    const product = fakeData.find(pd => pd.key === productkey)

    console.log(product);

    return (
        <div>
            Productdetail :{productkey}
            <Container>
                <Row>
                    <Col md={8} className="">
                        <Product product={product} ></Product>
                    </Col>
                    <Col md={4} className="card">
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Productdetail;
