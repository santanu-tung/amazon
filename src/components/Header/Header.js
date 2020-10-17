import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";



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


				<Link to="/shop">shop</Link>
				<Link to='/review'>review</Link>
				<Link to='/inventory'>manage inventory</Link>
				
				<Link to='/login'>Login</Link>
				
				
				{/*
				
				<a href="/shop">shop</a>
				<a href="/review">review</a>
				<a href="/inventory">manage inventory</a>
				 */}
			</nav>
		</header>
	);
};

export default Header;