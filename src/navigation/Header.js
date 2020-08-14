import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import facebook from "../../dist/logos/facebook.png";
import gmail from "../../dist/logos/gmail.png";
import linkedin from "../../dist/logos/linkedin.png";
import medium from "../../dist/logos/medium.png";
import './navigation.module.scss';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  onClick = (event) => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className="header">

        {/* mobile  */}
        < MediaQuery maxDeviceWidth={500} >

          {this.state.collapsed &&
            <div className="menu-button" onClick={this.onClick}>+</div>
          }
          {!this.state.collapsed &&
            <div className="menu-button" onClick={this.onClick}>-</div>
          }

          <div 
          className={this.state.collapsed ? "none" : "nav"} >
            <a href="https://medium.com/@subhanjali" target="_blank"><img src={medium} className="link logo" /></a>
            <a href="https://www.facebook.com/subhanjali" target="_blank"><img src={facebook} className="link logo" /></a>
            <a href="mailto:subha.velaga@gmail.com"><img src={gmail} className="link logo" /></a>
            <a href="https://www.linkedin.com/in/subhavelaga/" target="_blank"><img src={linkedin} className="link logo" /></a>
          </div>

        </ MediaQuery>

        <div className="title-div">
          <div className="title">Subhanjali</div>
          <div className="description">artist in oil and acrylic mediums</div>
        </div>

        {/* desktop  */}
        < MediaQuery minDeviceWidth={500} >
          <div className="nav">
            <a href="https://medium.com/@subhanjali" target="_blank"><img src={medium} className="link logo" /></a>
            <a href="https://www.facebook.com/subhanjali" target="_blank"><img src={facebook} className="link logo" /></a>
            <a href="mailto:subha.velaga@gmail.com"><img src={gmail} className="link logo" /></a>
            <a href="https://www.linkedin.com/in/subhavelaga/" target="_blank"><img src={linkedin} className="link logo" /></a>
          </div>
        </ MediaQuery>
      </div>
    )
  }
}

export default Header
