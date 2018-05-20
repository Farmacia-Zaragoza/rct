import React from 'react';

import {Row, Col, DropdownButton, MenuItem, Image} from 'react-bootstrap';

import './langDropdown.css'

export class LangDropdown extends React.Component {

	constructor(props) {
		super(props);
		this.toggleDropdow = this.toggleDropdow.bind(this);
		
		this.state = {
			isOpen: false
		}
	}

	componentDidMount(props){
		console.log(this.props.data)
	}

	toggleDropdow(){
		this.setState({isOpen: !this.state.isOpen});
	}

	dropdownTitle = function () {
		return(
			<Row>
				<Col xs={4} sm={4} md={4} lg={4}>
					<Image className="langFlag" src={this.props.data.langDropdown[0].img}/>
				</Col>
				<Col xs={8} sm={8} md={8} lg={8}>
					<span className="countryName">{this.props.data.langDropdown[0].lang}</span><br/>
					<span>{this.props.data.langDropdown[0].context}</span>
				</Col>
			</Row>
		)
	}
	
	onToggle() {
		console.log('toggle');
	}
	
	render(){
		return(
            <div>
				<Col xs={6} sm={3} md={3} lg={2}>
					<DropdownButton className="dropdown" noCaret id="lang-dropdown" 
						title={this.dropdownTitle()} 
						onToggle={this.onToggle}
						onMouseEnter={this.toggleDropdow}
						onMouseLeave={this.toggleDropdow}
						open={this.state.isOpen}>
						{this.props.data.langDropdown.map((item, i) => 
							<MenuItem key={i}>
								<Row>
									<Col xs={4}>
										<Image className="langFlag" src={item.img}/>
									</Col>
									<Col xs={8}>
										<span  className="countryName">{item.lang}</span><br/>
										<span>{item.context}</span>
									</Col>
								</Row>
							</MenuItem>
						)}
					</DropdownButton>	
				</Col>
            </div>
		)
	}
}
