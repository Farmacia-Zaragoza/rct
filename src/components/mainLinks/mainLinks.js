import React from 'react';

import './mainLinks.css'

import {Grid, Row, Col, Image} from 'react-bootstrap';
import {MarqueeH} from '../marqueeH/marqueeH'

var left_arrow = require('../../img/img/left_icon.png');
var right_arrow = require('../../img/img/right_icon.png');


export class MainLinks extends React.Component {

	constructor(props) {
        super(props);
        this.move_left = this.move_left.bind(this);
        this.move_right = this.move_right.bind(this);
        this.mq = React.createRef();
        this.state = {
            position: 0
		}
    }

    move_left(){
        if (this.mq.current.style.left == "-1000px") {
            this.setState({position: 0})
        } else {
            this.setState({position: this.state.position-100})
        }
    }

    move_right(){
        if (this.mq.current.style.left == "1000px") {
            this.setState({position: 0})
        } else {
            this.setState({position: this.state.position+100})
        }
    }
    
	
	render(){
		return(
                <div className="mainLinks">
                   <MarqueeH data={this.props.data}/>
                </div>
		)
	}
}