import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

export class MarqueeH extends React.Component {

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
                    <div className="left_arrow">
                        <Image src={this.props.leftArrow || 'defaultSrc'} onClick={this.move_left}/>
						
					</div>
					<div className="marque_holder">
                        <div ref={this.mq} className="mainLinks_marque" style={{ left: this.state.position }}>
                            {this.props.data.map((item, i) => 
                                <a className="linkItem" key={i} href={item.src}>{item.link}</a>
                            )}
                        </div>
                    </div>
                    <div className="right_arrow">
                    <Image src={this.props.leftArrow || 'defaultSrc'} onClick={this.move_left}/>
					</div>
                </div>
		)
	}
}