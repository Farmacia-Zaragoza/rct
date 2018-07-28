//RCT DEV v.0.0.0 (29.07.18)
import React, { Component } from 'react';
import './App.css';

import { Header } from './components/header/header';
import { MainContent } from './components/mainContent/mainContent';
import { MainLinks } from './components/mainLinks/mainLinks';
import { SmallCarousel } from './components/smallCarousel/smallCarousel';
import { BottomRow } from './components/bottomRow/bottomRow';
import { BottomMenu } from './components/bottomMenu/bottomMenu';

import {Grid, Row, Col, Image} from 'react-bootstrap';

import data from './endpoints/data.json'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = data;
	}
  componentDidMount(){
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
        <Header data={this.state.en.header}/>
        <MainContent />
        <MainLinks data={this.state.en.mainLinks}/>
        <SmallCarousel />
        <BottomRow />
        <BottomMenu data={this.state.en.bottomMenu}/>
      </div>
    );
  }
}




export default App;
