import React from 'react';

import {Grid, Row, Col, Image} from 'react-bootstrap';
const carousel_image_0 = require('../../img/img/tiny_carousel/camion_grande_01.jpg')


export class SmallCarousel extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render(){
		return(
			<Grid fluid={true}>
				<Row>
                    <Col lg={1} md={2} sm={3} xs={4} xsHidden={true} smHidden={true} mdHidden={true}>
                        <Image responsive src={carousel_image_0}/>
                    </Col>

                    <Col lg={1} md={2} sm={3} xs={4} xsHidden={true} smHidden={true} mdHidden={true}>
                        <Image responsive src={carousel_image_0}/>
                    </Col>

                    <Col lg={1} md={2} sm={3} xs={4} xsHidden={true} smHidden={true} mdHidden={true}>
                        <Image responsive src={carousel_image_0}/>
                    </Col>

                    <Col lg={1} md={2} sm={3} xs={4} xsHidden={true} smHidden={true} mdHidden={true}>
                        <Image responsive src={carousel_image_0}/>
                    </Col>

                    <Col lg={1} md={2} sm={3} xs={4} xsHidden={true} smHidden={true} mdHidden={true}>
                        <Image responsive src={carousel_image_0}/>
                    </Col>

                    <Col lg={1} md={2} sm={3} xs={4} xsHidden={true} smHidden={true} mdHidden={true}>
                        <Image responsive src={carousel_image_0}/>
                    </Col>
                    <Col lg={1} md={2} sm={3} xs={4} xsHidden={true} smHidden={true}>
                        <Image responsive src={carousel_image_0}/>
                    </Col>

                    <Col lg={1} md={2} sm={3} xs={4} xsHidden={true} smHidden={true} >
                        <Image responsive src={carousel_image_0}/>
                    </Col>

                    <Col lg={1} md={2} sm={3} xs={4} xsHidden={true}>
                        <Image responsive src={carousel_image_0}/>
                    </Col>

                    <Col lg={1} md={2} sm={3} xs={4}>
                        <Image responsive src={carousel_image_0}/>
                    </Col>

                    <Col lg={1} md={2} sm={3} xs={4}>
                        <Image responsive src={carousel_image_0}/>
                    </Col>

                    <Col lg={1} md={2} sm={3} xs={4}>
                        <Image responsive src={carousel_image_0}/>
                    </Col>
				</Row>
			</Grid>
		)
	}
}