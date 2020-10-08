import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ReviewItem = (props) => {
  //  console.log(props);


    const { name, img, myquentity,key } = props.product
    return (

        <div className=" my-2" >
            <Row>

                <Col md={4} className="pd-img card">
                    <img src={img} alt="product" />
                </Col>
                <Col md={8} className="pd-data">
                    test
                    <h4>{name}</h4>
                    <p>Quentity :{myquentity}</p>
                        <button onClick={() => { props.removeProduct(key)}} className="btn  inline my-button"> remove Item </button>
                </Col>
            </Row>
        </div>
    );
};

export default ReviewItem;