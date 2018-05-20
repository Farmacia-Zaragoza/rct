import React from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

import './bottomMenu.css'


export class BottomMenu extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render(){
		return(
			<Grid fluid={true} className="bottomMenu">
				<Row className="bottomMenu-InnerFix">
                    <Col xs={12} sm={12} md={6} lg={8} lgOffset={2} mdOffset={3}>
                        <Row className="bottomMenu-InnerFix">
                            <Col xs={2} className="bottom-link-item">{this.props.data.link1}</Col>
                            <Col xs={2} className="bottom-link-item">{this.props.data.link2}</Col>
                            <Col xs={2} className="bottom-link-item">{this.props.data.link3}</Col> 
                            <Col xs={2} className="bottom-link-item">{this.props.data.link4}</Col>
                            <Col xs={2} className="bottom-link-item">{this.props.data.link5}</Col>
                            <Col xs={2} className="bottom-link-item">{this.props.data.link6}</Col>
                        </Row>
                    </Col>
				</Row>
			</Grid>
		)
	}
}