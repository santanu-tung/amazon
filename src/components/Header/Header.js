import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'


const Header = () => {
	return (
		<header>
			<Container>
				<Row>
					<Col>
						<div className="my-logo">
							<img src={logo} alt="logo" className="img-fluid" />
						</div>
					</Col>
				</Row>
			</Container>

			<nav className="main-nav">

				<a href="/shop">shop</a>
				<a href="/review">review</a>
				<a href="/manage">manage</a>
			</nav>
		</header>
	);
};

export default Header;