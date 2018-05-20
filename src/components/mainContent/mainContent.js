import React from 'react';

import './mainContent.css'

import {Grid, Row, Col} from 'react-bootstrap';
import { BigCarousel } from './bigCarousel/bigCarousel';


export class MainContent extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render(){
		return(
			<Grid fluid={true} className="mainContent">
				<Row>
					<Col className="carousel-container" xs={12}>
						<BigCarousel />
					</Col>
				</Row>
			</Grid>
		)
	}
}