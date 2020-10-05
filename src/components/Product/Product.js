import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Product.css'

const Product = (props) => {
    const { name, img, price, seller, stock } = props.product

    return (
        <div className="my-product">
            <Card.Body className="card my-1">
                <Row>
                    <Col md={4} className="pd-img card">
                        <img src={img} alt="" />

                    </Col>
                    <Col md={8} className="pd-data">

                        <h3>{name}</h3>
                        <p></p>
                        <p> <small> by {seller}</small> </p>
                        <p>Price  -${price}</p>
                        <p> <small> Only {stock} left in stock ordere Soon </small></p>
                        <button className="btn"> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>

                    </Col>
                </Row>
            </Card.Body>
        </div>
    );
};

export default Product;