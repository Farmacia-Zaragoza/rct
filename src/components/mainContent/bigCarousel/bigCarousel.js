import React from 'react';

import './bigCarousel.css'

import {Carousel} from 'react-bootstrap';

const first_image = require('../../../img/img/big_carousel/BestHDWallpapersPack1312_13.jpg');
const second_image = require('../../../img/img/big_carousel/BestHDWallpapersPack1312_22_0.jpg');
const third_image = require('../../../img/img/big_carousel/BestHDWallpapersPack1312_70_0.jpg');


export class BigCarousel extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render(){
		return(
    		<Carousel className="bigCarousel" indicators={false}>
				<Carousel.Item>
					<img responsive="true" src={first_image} />
				</Carousel.Item>
				<Carousel.Item>
					<img responsive="true"  src={second_image} />
					<Carousel.Caption>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img responsive="true"  src={third_image} />
					<Carousel.Caption>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		)
	}
}