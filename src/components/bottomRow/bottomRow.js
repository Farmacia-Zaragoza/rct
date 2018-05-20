import React from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

import './bottomRow.css'


export class BottomRow extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render(){
		return(
			<Grid fluid={true} className="bottomRow">
				<Row>
                    <Col xs={12} />
				</Row>
			</Grid>
		)
	}
}