import React from 'react';

import './header.css'

import {Grid, Row, Col, Image} from 'react-bootstrap';
import { LangDropdown } from './langDropdown/langDropdonw';


const logo = require('../../img/img/logo.png');
const logo_small = require('../../img/img/logo_small.png');
const lion = require('../../img/img/lion.png');


export class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount(props){
		console.log(this.props.data)
	}
	
	render(){
		return(
			<Grid fluid={true} className="header">
				<Row>
					<Col className="logo" xsHidden={true} xs={6} sm={5} md={4} lg={4} smOffset={1} mdOffset={2} lgOffset={2}>
						<Image src={logo} responsive />
					</Col>
					<Col className="small-logo" smHidden={true} mdHidden={true} lgHidden={true} xs={3}>
						<Image src={logo_small} responsive />
					</Col>
					<LangDropdown data={this.props.data}/>
					<Col xs={2} sm={2}>
						<Image responsive src={lion} />
					</Col>
				</Row>
			</Grid>
		)
	}
}